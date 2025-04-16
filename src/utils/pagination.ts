import { PaginationOptions, PaginationResult } from '@/types/pagination'

/**
 * 使用 prisma 的 count 和 findMany 方法实现分页
 * @param model
 * @param args
 * @param {PaginationOptions} options
 * @example usePagination(prisma.user, { where: { id: 1 } }, { page: 1, limit: 10 })
 */
export const usePagination = async <T>(
	model: any,
	args: any,
	options: PaginationOptions
): Promise<PaginationResult<T>> => {
	const page = options?.page || 1
	const limit = options?.limit || 10

	const skip = page > 0 ? limit * (page - 1) : 0

	const [
		total,
		data
	] = await Promise.all([
		model.count({ where: args.where }),
		model.findMany({
			...args,
			skip,
			take: limit
		})

	])

	const lastPage = Math.ceil(total / limit)

	return {
		rows: data,
		meta: {
			total,
			lastPage,
			currentPage: page,
			limit,
			prev: page > 1 ? page - 1 : 0,
			next: page < lastPage ? page + 1 : 0
		}
	}
}

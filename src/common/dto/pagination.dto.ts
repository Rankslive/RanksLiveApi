/**
 * 分页参数
 *
 * @example export class <% className %> extends PartialType(PaginationDto) {}
 * @example xxx(@Query() params: PaginationDto){}
 */
export class PaginationDto {
	/**
	 * 当前页码
	 *
	 * @default 1
	 */
	page: string = '1'

	/**
	 * 每页数量
	 * @default 10
	 */
	limit: string = '10'
}

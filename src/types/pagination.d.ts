export interface PaginationOptions {
	page?: number
	limit?: number
}

export interface PaginationResult<T> {
	rows: T[]
	meta: {
		total: number
		lastPage: number
		currentPage: number
		limit: number
		prev: number
		next: number
	}
}

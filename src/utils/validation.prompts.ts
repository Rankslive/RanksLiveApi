export const defineMessage = (data: string): string => `${data} 为必填字段，请注意查看接口文档字段描述要求`

export const typeMessage = (data: string, type: string): string =>
	`传入字段 ${data} 不符合要求类型 ${type} ，注意查看接口文档字段描述要求`

export const notEmptyMessage = (data: string): string => `未传入必填字段 ${data} ，请注意查看接口文档字段描述要求`

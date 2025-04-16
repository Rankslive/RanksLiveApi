/**
 * 业务响应状态码
 */
interface ResponseCode {
	[key: number]: number | string
}

export const OPERATION_SUCCESSFUL = '操作成功'
export const SERVER_INTERNAL_ERROR = '服务器内部错误'

// 200表示服务器成功地接受了客户端请求
export const HTTP_OK = [
	200001,
	'Ok'
]

export const CLIENT_DELETED_ERROR = [
	400202,
	'数据不存在'
]

// 401 - 授权失败的
export const CLIENT_HTTP_UNAUTHORIZED_EXPIRED: ResponseCode = [
	401001,
	'账号信息已过期，请重新登录'
]
export const CLIENT_HTTP_UNAUTHORIZED_ERROR: ResponseCode = [
	401002,
	'您的登录凭证已失效，请重新登录'
]
export const CLIENT_HTTP_UNAUTHORIZED_EMPTY: ResponseCode = [
	401003,
	'无效的令牌，请检查'
]

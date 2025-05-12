/**
 * 业务响应状态码
 */
interface ResponseCode {
    [key: number]: number | string
}

export const OPERATION_SUCCESSFUL = '操作成功'
export const SERVER_INTERNAL_ERROR = '服务器内部错误'

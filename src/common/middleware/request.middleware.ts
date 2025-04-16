import dayjs from 'dayjs'
import { Request, Response, NextFunction } from 'express'

/**
 * 请求 ID 中间件
 * @param req
 * @param res
 * @param next
 */
export const requestMiddleware = (req: Request, res: Response, next: NextFunction) => {
	req.requestId = dayjs().format('YYYYMMDDHHmmss')

	next()
}

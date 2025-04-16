import { NextFunction, Request, Response } from 'express'

/**
 * IP 中间件 · 获取客户端真实 IP
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
export const ipMiddleware = (req: Request, res: Response, next: NextFunction) => {
	const result = req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || req.socket.remoteAddress || req.ip
	req.useIp = (Array.isArray(result) ? result[0] : result) as string

	next()
}

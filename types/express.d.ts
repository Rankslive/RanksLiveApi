import * as express from 'express'

declare global {
	namespace Express {
		interface Request {
			user?: object // 存储的定义对象
			requestId: string // 添加你自定义的字段
			useIp: string // 用户 ip
		}
	}
}

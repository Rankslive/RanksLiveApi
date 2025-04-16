import { Injectable, OnModuleDestroy } from '@nestjs/common'
import Redis from 'ioredis'
import { env } from '@/utils/env'

/**
 * Redis 服务
 *
 * @example constructor( private readonly redis: RedisService ){}
 */
@Injectable()
export class RedisService implements OnModuleDestroy {
	private redisClient: Redis

	private db: number = 0

	constructor() {
		this.redisClient = new Redis({
			// Redis 地址
			host: env('REDIS_HOST'),
			// Redis 端口
			port: Number(env('REDIS_PORT', '3000')),
			// Redis 密码
			password: env('REDIS_PASSWORD')
		})
	}

	/**
	 * 切换数据库
	 *
	 * @param db
	 * @example this.redis.useDb(dbNumber)
	 */
	public useDb(db: number) {
		return this.redisClient.select(db)
	}

	/**
	 * 写入 Redis 数据
	 *
	 * @param key
	 * @param value
	 * @param ttl
	 * @example this.redis.set(key,value,ttl)
	 */
	async set(key: string, value: any, ttl?: number) {
		if (ttl) {
			await this.redisClient.set(key, value, 'EX', ttl)
		} else {
			await this.redisClient.set(key, value)
		}
	}

	/**
	 * 获取 Redis 指定 key 的数据
	 *
	 * @param key
	 * @example this.redis.get('key')
	 */
	async get(key: string): Promise<string | null> {
		return this.redisClient.get(key)
	}

	/**
	 * 删除 Redis 指定 key 数据
	 *
	 * @param key
	 * @example this.redis.delete('key')
	 */
	async delete(key: string) {
		return this.redisClient.del(key)
	}

	// 卸载 Redis 链接
	async onModuleDestroy(): Promise<void> {
		await this.redisClient.quit()
	}
}

import { Injectable, OnModuleInit } from '@nestjs/common'
import { Prisma, PrismaClient } from '@prisma/client'

@Injectable()
export class DatabaseService extends PrismaClient implements OnModuleInit {
	constructor() {
		super({
			log: [
				{
					emit: 'event',
					level: 'query'
				}
			]
		})
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-expect-error
		this.$on('query', (e: Prisma.QueryEvent) => {
			console.log(e)
		})
	}

	async onModuleInit() {
		await this.$connect()
	}
}

import { Injectable } from '@nestjs/common'

// 这应该是代表一个用户实体的真正的类/接口
export type User = any

@Injectable()
export class UserService {
	private readonly users: User[]

	constructor() {
		this.users = [
			{
				userId: 1,
				username: 'john',
				password: 'changeme'
			},
			{
				userId: 2,
				username: 'chris',
				password: 'secret'
			},
			{
				userId: 3,
				username: 'maria',
				password: 'guess'
			}
		]
	}

	findOne(username: string): User | undefined {
		return this.users.find((user) => user.username === username)
	}
}

import { IsDefined, IsNotEmpty, IsString } from 'class-validator'
import { defineMessage, notEmptyMessage, typeMessage } from '@/utils/validation.prompts'

export class SignInDto {
	@IsDefined({ message: defineMessage('username') })
	@IsString({ message: typeMessage('username', 'string') })
	@IsNotEmpty({ message: notEmptyMessage('username') })
	username: string

	@IsDefined({ message: defineMessage('password') })
	@IsString({ message: typeMessage('password', 'string') })
	@IsNotEmpty({ message: notEmptyMessage('password') })
	password: string
}

import { IsDefined, IsNotEmpty, IsNumber, IsString } from 'class-validator'
import { defineMessage, notEmptyMessage, typeMessage } from '@/utils/validation.prompts'

export class CreateCatDto {
	@IsString({ message: typeMessage('name', 'string') })
	name: string

	@IsDefined({ message: defineMessage('age') })
	@IsNumber({}, { message: typeMessage('age', 'number') })
	@IsNotEmpty({ message: notEmptyMessage('age') })
	age: number
}

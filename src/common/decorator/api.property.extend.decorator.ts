import { ApiProperty } from '@nestjs/swagger'
import { SchemaObject } from '@nestjs/swagger/dist/interfaces/open-api-spec.interface'

type ApiPropertyParams = Parameters<typeof ApiProperty>[0]

// 自定义的 ApiProperty 参数
type CustomSwaggerParameters = {
	schema?: Partial<SchemaObject> & Record<string, any>
}

// https://github.com/nestjs/swagger/issues/195#issuecomment-526215840
export const ApiPropertyExtend = (params: ApiPropertyParams & CustomSwaggerParameters) => ApiProperty(params)

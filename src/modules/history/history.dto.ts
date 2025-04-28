import { IsNumber, IsOptional, Max, Min } from 'class-validator'
import { Type } from 'class-transformer'
import { ApiProperty } from '@nestjs/swagger'
import dayjs from 'dayjs'

export class HistoryQueryDto {
	@ApiProperty({
		description: '月份,默认当前月份',
		example: dayjs().month() + 1
	})
	@IsOptional()
	@Type(() => Number)
	@IsNumber({}, { message: 'month 必须是数字' })
	@Min(1, { message: 'month 最小为 1' })
	@Max(12, { message: 'month 最大为 12' })
	month: number = new Date().getMonth() + 1
}

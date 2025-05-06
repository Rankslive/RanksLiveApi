import { Controller, Get, Query } from '@nestjs/common'
import { HupuService } from './hupu.service'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { ApiMaintainers } from '@/common/decorator/api.maintainers.decorator'

@Controller('hupu')
@ApiTags('虎扑')
export class HupuController {
	constructor(private readonly hupuService: HupuService) {}

	@Get('hot')
	@ApiOperation({ summary: '虎扑热榜' })
	@ApiMaintainers('ffgenius')
	async getHupuHot(@Query('type') type: 'basketball' | 'football' | 'street') {
		return this.hupuService.getHupuHot(type)
	}
}

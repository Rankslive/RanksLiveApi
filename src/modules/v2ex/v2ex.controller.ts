import { Controller, Get } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { V2exService } from '@/modules/v2ex/v2ex.service'
import { ApiMaintainers } from '@/common/decorator/api.maintainers.decorator'

@Controller('v2ex')
@ApiTags('v2ex')
export class V2exController {
	constructor(private readonly v2exService: V2exService) {}

	@Get('hot')
	@ApiOperation({ summary: '获取 v2ex 热议榜' })
	@ApiMaintainers('lonewolfyx')
	async getRankHot() {
		return await this.v2exService.getRankHot()
	}
}

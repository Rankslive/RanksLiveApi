import { Controller, Get, Param } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { AcfunService } from '@/modules/acfun/acfun.service'
import { AcfunConstants } from '@/constants/acfun.constants'
import { AcfunParamDto } from '@/modules/acfun/acfun.dto'
import { ApiMaintainers } from '@/common/decorator/api.maintainers.decorator'

@Controller('acfun')
@ApiTags('AcFun弹幕视频网')
export class AcfunController {
	constructor(private readonly AcfunService: AcfunService) {}

	@Get('rank/:type')
	@ApiOperation({ summary: '获取 Acfun 排行榜' })
	@ApiMaintainers('lonewolfyx')
	async getAllRank(@Param() param: AcfunParamDto) {
		const { type } = param
		return await this.AcfunService.getRankList(AcfunConstants[type])
	}
}

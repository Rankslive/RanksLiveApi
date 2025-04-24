import { Controller, Get, Param } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { YqqService } from '@/modules/yqq/yqq.service'
import { YQqConstants } from '@/constants/y.qq.constants'
import { YQqParamDto } from '@/modules/yqq/yqq.dto'

@Controller('yqq')
@ApiTags('QQ 音乐')
export class YqqController {
	constructor(private readonly YqqService: YqqService) {}

	@Get('musicTopList')
	@ApiOperation({ summary: '获取 QQ 音乐榜单列表' })
	async getMusicTopList() {
		return await this.YqqService.getMusicTopList()
	}

	@Get('rank/:type')
	@ApiOperation({ summary: '获取 QQ 音乐排行榜' })
	async getSurgeRank(@Param() param: YQqParamDto) {
		const { type } = param
		return await this.YqqService.getRanksList(YQqConstants[type]['value'])
	}
}

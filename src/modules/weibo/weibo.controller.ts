import { Controller, Get } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { WeiboService } from '@/modules/weibo/weibo.service'

@Controller('weibo')
@ApiTags('微博')
export class WeiboController {
	constructor(private readonly WeiboService: WeiboService) {}

	@Get('hot')
	@ApiOperation({ summary: '微博热搜' })
	async getWeiboHot() {
		return this.WeiboService.getWeiboHot()
	}
}

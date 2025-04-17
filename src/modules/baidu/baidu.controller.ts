import { Controller, Get } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { BaiduService } from '@/modules/baidu/baidu.service'

@Controller('baidu')
@ApiTags('百度')
export class BaiduController {
	constructor(private BaiduService: BaiduService) {}

	@Get('hot')
	@ApiOperation({ summary: '百度热搜' })
	async getBaiduHot() {
		return await this.BaiduService.getBaiduHot('realtime')
	}
}

import { Controller, Get } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { AliyunService } from '@/modules/aliyun/aliyun.service'
import { ApiMaintainers } from '@/common/decorator/api.maintainers.decorator'

@Controller('aliyun')
@ApiTags('阿里云')
export class AliyunController {
	constructor(private readonly aliyunService: AliyunService) {}

	@Get('real')
	@ApiOperation({ summary: '获取阿里云热门文章' })
	@ApiMaintainers('lonewolfyx')
	async getRealArticle() {
		return await this.aliyunService.getRealArticleList()
	}
}

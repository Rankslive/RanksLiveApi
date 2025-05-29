import { Controller, Get } from '@nestjs/common'
import { AliyunService } from './aliyun.service'
import { ApiPlatform } from '../../common/decorator/api.platform.decorator'
import { ApiMaintainers } from '../../common/decorator/api.maintainers.decorator'
import { SourceUrl } from '../../common/decorator/source.url.decorator'
import { ApiDescription } from '../../common/decorator/api.description.decorator'

@Controller('aliyun')
@ApiPlatform('阿里云')
export class AliyunController {
    constructor(private readonly aliyunService: AliyunService) {
    }

    @Get('real')
    @ApiDescription('获取阿里云热门文章')
    @ApiMaintainers('lonewolfyx')
    @SourceUrl('https://developer.aliyun.com')
    async getRealArticle() {
        return await this.aliyunService.getRealArticleList()
    }
}

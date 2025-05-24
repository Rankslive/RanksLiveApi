import { Controller, Get } from '@nestjs/common'
import { ApiOperation } from '@nestjs/swagger'
import { AliyunService } from '@/modules/aliyun/aliyun.service'
import { ApiMaintainers } from '@/common/decorator/api.maintainers.decorator'
import { SourceUrl } from '@/common/decorator/source.url.decorator'
import { ApiPlatform } from '@/common/decorator/api.platform.decorator'

@Controller('aliyun')
@ApiPlatform('阿里云')
export class AliyunController {
    constructor(private readonly aliyunService: AliyunService) {}

    @Get('real')
    @ApiOperation({ summary: '获取阿里云热门文章' })
    @ApiMaintainers('lonewolfyx')
    @SourceUrl('https://developer.aliyun.com')
    async getRealArticle() {
        return await this.aliyunService.getRealArticleList()
    }
}

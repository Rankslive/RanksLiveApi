import { Controller, Get, Param } from '@nestjs/common'
import { CloudTencentService } from './cloud.tencent.service'
import { ApiPlatform } from '../../common/decorator/api.platform.decorator'
import { ApiDescription } from '../../common/decorator/api.description.decorator'
import { ApiMaintainers } from '../../common/decorator/api.maintainers.decorator'
import { SourceUrl } from '../../common/decorator/source.url.decorator'
import { CloudTencentParamDto, CloudTencentZoneParamDto } from './cloud.tencent.dto'
import { cloudTencentConstants, cloudTencentZoneConstants } from './constants/cloud.tencent.constants'

@Controller('cloud.tencent')
@ApiPlatform('腾讯云')
export class CloudTencentController {
    constructor(private readonly cloudTencentService: CloudTencentService) {}

    @Get('article/:type')
    @ApiDescription('获取腾讯云开发者社区文章')
    @ApiMaintainers('lonewolfyx')
    @SourceUrl('https://cloud.tencent.com/developer')
    async getHostArticle(@Param() param: CloudTencentParamDto) {
        const { type } = param
        return await this.cloudTencentService.getArticleList(cloudTencentConstants[type]['value'])
    }

    @Get('rank/author')
    @ApiDescription('获取腾讯云开发者社区 · 原创作者热度排行榜')
    @ApiMaintainers('lonewolfyx')
    @SourceUrl('https://cloud.tencent.com/developer/rank')
    async getAuthorRank() {
        return await this.cloudTencentService.getAuthorRankList()
    }

    @Get('zone/:type')
    @ApiDescription('获取腾讯云开发者社区 · 技术专区最新文章')
    @ApiMaintainers('lonewolfyx')
    @SourceUrl('https://cloud.tencent.com/developer/zone')
    async getZoneArticle(@Param() param: CloudTencentZoneParamDto) {
        const { type } = param
        return await this.cloudTencentService.getZoneArticleList(cloudTencentZoneConstants[type]['id'])
    }
}

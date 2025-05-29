import { Controller, Get } from '@nestjs/common'
import { ApiOperation } from '@nestjs/swagger'
import { WeiboService } from './weibo.service'
import { ApiPlatform } from '../../common/decorator/api.platform.decorator'
import { ApiMaintainers } from '../../common/decorator/api.maintainers.decorator'
import { SourceUrl } from '../../common/decorator/source.url.decorator'

@Controller('weibo')
@ApiPlatform('微博')
export class WeiboController {
    constructor(private readonly WeiboService: WeiboService) {}

    @Get('hot')
    @ApiOperation({ summary: '微博热搜' })
    @ApiMaintainers('lonewolfyx')
    @SourceUrl('https://weibo.com/hot/search')
    async getWeiboHot() {
        return await this.WeiboService.getWeiboHot()
    }
}

import { Controller, Get } from '@nestjs/common'
import { ApiOperation } from '@nestjs/swagger'
import { ApiMaintainers } from '@/common/decorator/api.maintainers.decorator'
import { SourceUrl } from '@/common/decorator/source.url.decorator'
import { XiaohongshuService } from '@/modules/xiaohongshu/xiaohongshu.service'
import { ApiPlatform } from '@/common/decorator/api.platform.decorator'

@Controller('xiaohongshu')
@ApiPlatform('小红书')
export class XiaohongshuController {
    constructor(private readonly xiaoHongShuService: XiaohongshuService) {}

    @Get('hot')
    @ApiOperation({ summary: '获取小红书热点' })
    @ApiMaintainers('lonewolfyx')
    @SourceUrl('https://www.xiaohongshu.com')
    async getSurge() {
        return await this.xiaoHongShuService.getHotRankList()
    }
}

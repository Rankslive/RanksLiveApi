import { Controller, Get } from '@nestjs/common'
import { BaiduService } from './baidu.service'
import { ApiPlatform } from '../../common/decorator/api.platform.decorator'
import { ApiDescription } from '../../common/decorator/api.description.decorator'
import { ApiMaintainers } from '../../common/decorator/api.maintainers.decorator'
import { SourceUrl } from '../../common/decorator/source.url.decorator'

@Controller('baidu')
@ApiPlatform('百度')
export class BaiduController {
    constructor(private BaiduService: BaiduService) {}

    @Get('hot')
    @ApiDescription('获取百度热搜')
    @ApiMaintainers('lonewolfyx')
    @SourceUrl('https://top.baidu.com/board?platform=pc&sa=pcindex_entry')
    async getBaiduHot() {
        return await this.BaiduService.getBaiduHot('realtime')
    }

    @Get('tieba/discussion')
    @ApiDescription('获取百度贴吧热议榜')
    @ApiMaintainers('lonewolfyx')
    @SourceUrl('https://tieba.baidu.com/hottopic/browse/topicList?res_type=1')
    async getBaiDuTieBaDiscussion() {
        return await this.BaiduService.getBaiduTieBaDiscussionRank()
    }
}

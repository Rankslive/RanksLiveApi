import { Injectable } from '@nestjs/common'
import { BASE_USER_AGENT } from '@/constants/base.constants'
import { HttpClientService } from '@/common/service/http-client.service'

@Injectable()
export class ThePaperService {
    constructor(private readonly httpClientService: HttpClientService) {}

    async getRankHot() {
        const { data } = await this.httpClientService.request({
            method: 'get',
            url: 'https://cache.thepaper.cn/contentapi/wwwIndex/rightSidebar',
            headers: {
                'User-Agent': BASE_USER_AGENT
            }
        })

        if (!data) {
            return []
        }

        return (
            data.data?.hotNews.map((item: any) => {
                return {
                    title: item.name,
                    view: item.praiseTimes,
                    url: `https://www.thepaper.cn/newsDetail_forward_${item.contId}`,
                    create_time: item.pubTimeLong
                }
            }) || []
        )
    }
}

import { Injectable } from '@nestjs/common'
import { ResponseData } from '../../../types/response.data'
import { BASE_USER_AGENT } from '@/constants/base.constants'
import { HttpClientService } from '@/common/service/http-client.service'

@Injectable()
export class BaiduService {
    constructor(private readonly httpClientService: HttpClientService) {}

    async getBaiduHot(type: string): Promise<ResponseData[]> {
        const result = await this.getData(type)

        return result.map((item: any) => {
            return {
                title: item.query,
                view: item.hotScore,
                url: `https://www.baidu.com/s?wd=${encodeURIComponent(item.query)}`,
                create_time: 0
            }
        })
    }

    private async getData(type: string) {
        const content = await this.httpClientService.request({
            method: 'get',
            url: `https://top.baidu.com/board?tab=${type}`,
            headers: {
                'User-Agent':
                    'Mozilla/5.0 (iPhone; CPU iPhone OS 14_2_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/1.0 Mobile/12F69 Safari/605.1.15'
            }
        })

        const matchResult = content.data.match(/<!--s-data:(.*?)-->/s)
        return JSON.parse(matchResult[1]).cards[0].content
    }

    async getBaiduTieBaDiscussionRank() {
        const { data } = await this.httpClientService.request({
            method: 'get',
            url: 'https://tieba.baidu.com/hottopic/browse/topicList',
            headers: {
                'User-Agent': BASE_USER_AGENT
            }
        })

        if (!data) {
            return []
        }

        return data.data.bang_topic.topic_list.map((item: any) => {
            return {
                title: item.topic_name,
                view: item.discuss_num,
                url: item.topic_url,
                create_time: item.create_time
            }
        })
    }
}

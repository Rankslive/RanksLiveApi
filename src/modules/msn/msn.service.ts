import { Injectable } from '@nestjs/common'
import { HttpClientService } from '@/common/service/http-client.service'
import { BASE_USER_AGENT } from '@/constants/base.constants'
import dayjs from 'dayjs'

@Injectable()
export class MsnService {
    constructor(private readonly httpClientService: HttpClientService) {}

    async getMsnRankList() {
        const { data } = await this.httpClientService.request({
            method: 'get',
            url: 'https://assets.msn.cn/service/news/feed/pages/weblayout',
            params: {
                User: 'm-385F9053DB956AC30669843CDA506B16',
                activityId: 'C60B3794-1E62-4EB3-9AFF-5A148358AF16',
                adoffsets: 'c1:-1,c2:-1,c3:-1,c4:-1,c5:-1',
                apikey: '0QfOX3Vn51YCzitbLaRkTTBadtWpgTN8NZLW0C1SEM',
                audienceMode: 'adult',
                cm: 'zh-cn',
                colstatus: 'c1:0,c2:0,c3:0,c4:0,c5:0',
                column: 'c5',
                colwidth: 300,
                contentType: 'article,video,slideshow,webcontent',
                it: 'edgeid',
                l3v: 2,
                layout: 'c5',
                memory: 8,
                newsSkip: 0,
                newsTop: 48,
                ocid: 'hponeservicefeed',
                pgc: 1035,
                private: 1,
                timeOut: 1000,
                vpSize: '1792x285',
                wposchema: 'byregion'
            },
            headers: {
                'User-Agent': BASE_USER_AGENT
            }
        })

        return (
            data.sections
                .filter((item: any) => item.region === 'cardData')[0]
                .cards.filter((row: any) => row.type === 'TopicFeed' && row.id === 'CanonicalName-topstories')[0]
                .subCards.map((item: any) => {
                    return {
                        title: item.shortTitle,
                        view: item.relevanceScore,
                        url: item.url,
                        create_time: dayjs(item.publishedDateTime).unix()
                    }
                }) || []
        )
    }
}

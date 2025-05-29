import { Injectable } from '@nestjs/common'
import { HttpClientService } from '../../common/service/http-client.service'

@Injectable()
export class QqNewsService {
    constructor(private readonly httpClientService: HttpClientService) {}

    async getRankHot() {
        const { data } = await this.httpClientService.request({
            method: 'get',
            url: 'https://i.news.qq.com/gw/event/pc_hot_ranking_list',
            params: {
                ids_hash: '',
                offset: 0,
                page_size: 51,
                appver: '15.5_qqnews_7.1.60',
                rank_id: 'hot'
            }
        })

        if (!data) {
            return []
        }

        return data.idlist[0].newslist.slice(1).map((item: any) => {
            return {
                title: item.title,
                view: item.hotEvent.hotScore,
                url: item.surl,
                create_time: item.timestamp
            }
        })
    }
}

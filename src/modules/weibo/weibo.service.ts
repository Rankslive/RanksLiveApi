import { Injectable } from '@nestjs/common'
import request from '@/utils/request'
import { ResponseData } from '../../../types/response.data'
import { HttpClientService } from '@/common/service/http-client.service'

type WeiboDataType = 'hot' | 'entertainment'

@Injectable()
export class WeiboService {
    constructor(private readonly httpClientService: HttpClientService) {}

    url = {
        hot: 'https://weibo.com/ajax/side/hotSearch',
        entertainment: 'https://weibo.com/ajax/statuses/entertainment'
    }

    async getWeiboHot(): Promise<ResponseData[]> {
        const result = await this.getData('hot')

        return result.data.realtime.map((item: any) => {
            return {
                title: item.word,
                view: item.num,
                url: `https://s.weibo.com/weibo?q=${encodeURIComponent(item.word)}`,
                create_time: 0
            }
        })
    }

    async getData(type: WeiboDataType) {
        const result = await this.httpClientService.request({
            method: 'get',
            url: this.url[type],
            headers: {
                'User-Agent':
                    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36'
            }
        })

        return result?.data || []
    }
}

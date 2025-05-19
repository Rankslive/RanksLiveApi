import { Injectable } from '@nestjs/common'
import { HttpClientService } from '@/common/service/http-client.service'
import { BASE_USER_AGENT } from '@/constants/base.constants'
import dayjs from 'dayjs'

@Injectable()
export class NeteaseNewService {
    constructor(private readonly httpClientService: HttpClientService) {}

    /**
     * 获取热搜
     */
    async getHotSearch() {
        const { data } = await this.httpClientService.request({
            method: 'get',
            url: 'https://gw.m.163.com/search/api/v1/pc-wap/hot-word',
            headers: {
                'User-Agent': BASE_USER_AGENT
            }
        })

        return (
            data?.data?.hotWordList.map((item: any) => {
                return {
                    title: item.hotWord,
                    view: item.expNum,
                    url: item.pcSkipUrl || `https://m.163.com/search?keyword=${encodeURIComponent(item.hotWord)}`,
                    create_time: 0
                }
            }) || []
        )
    }

    /**
     * 获取热议榜
     */
    async getHotCommentRank() {
        const { data } = await this.httpClientService.request({
            method: 'get',
            url: 'https://gw.m.163.com/gentie-web/api/v2/products/a2869674571f77b5a0867c3d71db5856/rankDocs/all/list',
            params: {
                ibc: 'newsapph5',
                limit: 30
            },
            headers: {
                'User-Agent': BASE_USER_AGENT
            }
        })

        return (
            data?.data?.cmtDocs.map((item: any) => {
                return {
                    title: item.doc_title,
                    view: item.hotScore * 1e4,
                    url: `https://c.m.163.com/news/a/${item.docId}.html`,
                    create_time: 0
                }
            }) || []
        )
    }

    /**
     * 获取热闻榜
     */
    async getHotRepeat() {
        const { data } = await this.httpClientService.request({
            method: 'get',
            url: 'https://gw.m.163.com/nc-main/api/v1/hqc/no-repeat-hot-list',
            headers: {
                'User-Agent': BASE_USER_AGENT
            }
        })

        return (
            data?.data?.items.map((item: any) => {
                return {
                    title: item.title,
                    view: item.hotValue,
                    url: `https://c.m.163.com/news/a/${item.contentId}.html`,
                    create_time: dayjs(item.firstShowedTime).unix()
                }
            }) || []
        )
    }

    /**
     * 获取话题榜
     */
    async getTopicRank() {
        const { data } = await this.httpClientService.request({
            method: 'get',
            url: 'https://gw.m.163.com/nc/api/v1/feed/dynamic/topic/hotList',
            headers: {
                'User-Agent': BASE_USER_AGENT
            }
        })

        return (
            data?.data?.items.map((item: any) => {
                return {
                    title: item.title,
                    view: item.heatScore,
                    url: item.url,
                    create_time: 0
                }
            }) || []
        )
    }
}

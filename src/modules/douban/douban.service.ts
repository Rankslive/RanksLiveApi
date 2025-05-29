import { Injectable } from '@nestjs/common'
import { DouBanRankWeeklyType, douBanType, IDouBanRankWeekly } from './types/douban'
import { HttpClientService } from '../../common/service/http-client.service'
import { BASE_USER_AGENT } from '../../constants/base.constants'

const DOUBAN_APP_USERAGENT = 'api-client/0.1.3 com.douban.frodo/7.100.0 iOS/18.0 model/iPad8,6 network/wifi'

// 数据源 https://m.douban.com/home_guide

@Injectable()
export class DoubanService {
    constructor(private readonly httpClientService: HttpClientService) {}

    /**
     * 获取实时热门数据
     * 数据来源 https://m.douban.com/subject_collection/subject_real_time_hotest
     * @param type
     */
    async getRealRankList(type: douBanType) {
        const { data } = await this.httpClientService.request({
            method: 'get',
            url: `https://m.douban.com/rexxar/api/v2/subject_collection/${type}_real_time_hotest/items`,
            params: {
                type: type,
                start: 0,
                count: 10,
                for_mobile: 1
            },
            headers: {
                'User-Agent': BASE_USER_AGENT,
                Referer: `https://m.douban.com/subject_collection/${type}_real_time_hotest`
            }
        })

        if (!data) {
            return []
        }

        return data.subject_collection_items.map((item: any) => {
            return {
                title: item.title,
                view: item.score,
                url: `https://movie.douban.com/subject/${item.id}/`,
                create_time: 0
            }
        })
    }

    /**
     * 获取周口碑数据
     * @param type
     * @private
     */
    private async getWeeklySubjectCollection(type: DouBanRankWeeklyType) {
        const apiType: IDouBanRankWeekly = {
            // 一周口碑电影榜
            movie: 'movie_weekly_best',
            // 华语口碑剧集榜
            tv_chinese: 'tv_chinese_best_weekly',
            // 全球口碑剧集榜
            tv_global: 'tv_global_best_weekly',
            // 国内口碑综艺榜
            show_chinese: 'show_chinese_best_weekly',
            // 国外口碑综艺榜
            show_global: 'show_global_best_weekly'
        }

        const { data } = await this.httpClientService.request({
            method: 'get',
            url: `https://m.douban.com/rexxar/api/v2/subject_collection/${apiType[type]}/items`,
            params: {
                start: 0,
                count: 10,
                updated_at: '',
                items_only: 1,
                type_tag: '',
                for_mobile: 1
            },
            headers: {
                'User-Agent': DOUBAN_APP_USERAGENT,
                referer: 'https://m.douban.com/subject_collection/tv_chinese_best_weekly'
            }
        })

        return (
            data?.subject_collection_items.map((item: any) => {
                return {
                    title: item.title,
                    view: item.rating.count,
                    url: item.url,
                    create_time: 0
                }
            }) || []
        )
    }

    /**
     * 获取华语口碑剧集榜
     */
    async getTvChineseRank() {
        return await this.getWeeklySubjectCollection('tv_chinese')
    }

    /**
     * 获取一周口碑电影榜
     */
    async getWeeklyMovie() {
        return await this.getWeeklySubjectCollection('movie')
    }

    /**
     * 获取全球口碑剧集榜
     */
    async getTvGlobalRank() {
        return await this.getWeeklySubjectCollection('tv_global')
    }

    /**
     * 获取国内口碑综艺榜
     */
    async getShowChineseRank() {
        return await this.getWeeklySubjectCollection('show_chinese')
    }

    /**
     * 获取国外口碑综艺榜
     */
    async getShowGlobalRank() {
        return await this.getWeeklySubjectCollection('show_global')
    }
}

import { Injectable } from '@nestjs/common'
import { BASE_USER_AGENT } from '@/constants/base.constants'
import { ResponseData } from '../../../types/response.data'
import { HttpClientService } from '@/common/service/http-client.service'

const gentWebId = (): string => {
    const generateRandomPart = (e: number) => (e ^ ((Math.random() * 16) >> (e / 4))).toString(10)
    const template = '1e7-1e3-4e3-8e3-1e11'
    const fullString = template.replace(/[018]/g, (char) => generateRandomPart(parseInt(char, 10)))
    return fullString.replace(/-/g, '').slice(0, 19)
}

@Injectable()
export class JuejinService {
    constructor(private readonly httpClientService: HttpClientService) {}

    /**
     * 获取掘金文章、收藏榜单
     * @param category_id
     * @param type
     */
    async getArticleRankList(category_id: string, type: 'hot' | 'collect' = 'hot'): Promise<ResponseData[] & []> {
        const { data } = await this.httpClientService.request({
            method: 'get',
            url: 'https://api.juejin.cn/content_api/v1/content/article_rank',
            params: {
                category_id: category_id,
                type: type,
                aid: 2608,
                uuid: gentWebId(),
                spider: 0
            },
            headers: {
                'User-Agent': BASE_USER_AGENT
            }
        })

        if (!data) {
            return []
        }

        return data?.data.map((item: any) => {
            return {
                title: item?.content?.title,
                view: item?.content_counter?.view || 0,
                url: `https://juejin.cn/post/${item?.content?.content_id}`,
                create_time: 0
            }
        })
    }

    /**
     * 获取掘金精选专栏榜单
     */
    async getHotColumnsRankList(): Promise<ResponseData[] & []> {
        const { data } = await this.httpClientService.request({
            method: 'post',
            url: 'https://api.juejin.cn/content_api/v1/column/selected_rank',
            params: {
                aid: 2608,
                uuid: gentWebId(),
                spider: 0
            },
            data: {
                cursor: '',
                page_size: 30,
                sort_type: 2
            },
            headers: {
                'User-Agent': BASE_USER_AGENT
            }
        })

        if (!data) {
            return []
        }

        return data?.data.map((item: any) => {
            return {
                title: item.column.column_version.title,
                view: item.column.column.follow_cnt,
                url: `https://juejin.cn/column/${item.column.column_version.column_id}`,
                create_time: item.column.column_version.ctime
            }
        })
    }

    /**
     * 获取掘金推荐收藏集
     */
    async getHotCollectionsRankList(): Promise<ResponseData[] & []> {
        const { data } = await this.httpClientService.request({
            method: 'post',
            url: 'https://api.juejin.cn/interact_api/v2/collectionset/collection_recommend_rank',
            params: {
                aid: 2608,
                uuid: gentWebId(),
                spider: 0
            },
            data: {
                cursor: '',
                filter: {
                    article_info: true
                },
                limit: 30,
                module_type: 0,
                sort_type: 2
            },
            headers: {
                'User-Agent': BASE_USER_AGENT
            }
        })

        if (!data) {
            return []
        }

        return data.data.map((item: any) => {
            return {
                title: item.collection_set.collection_name,
                view: item.collection_set.post_article_count,
                url: `https://juejin.cn/collection/${item.collection_set.collection_id}`,
                create_time: item.collection_set.update_time
            }
        })
    }

    /**
     * 获取掘金优质作者榜
     * @param category_id
     */
    async getAuthorRankList(category_id: string) {
        const { data } = await this.httpClientService.request({
            method: 'post',
            url: 'https://api.juejin.cn/user_api/v1/quality_user/rank',
            params: {
                aid: 2608,
                uuid: gentWebId(),
                spider: 0
            },
            data: {
                item_rank_type: 1,
                item_sub_rank_type: category_id
            },
            headers: {
                'User-Agent': BASE_USER_AGENT
            }
        })

        if (!data) {
            return []
        }

        return data.data.user_rank_list.map((item: any) => {
            return {
                title: item.user_info.user_name,
                view: item.hot_value,
                url: `https://juejin.cn/user/${item.user_info.user_id}`,
                create_time: 0
            }
        })
    }
}

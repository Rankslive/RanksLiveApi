import { Injectable } from '@nestjs/common'
import { OschinaGroupType } from './types/oschina'
import { oschinaGroups } from '@/modules/oschina/constants/oschina.constants'
import dayjs from 'dayjs'
import { type CheerioAPI, load } from 'cheerio'
import { ResponseData } from '../../../types/response.data'
import { HttpClientService } from '@/common/service/http-client.service'
import { BASE_USER_AGENT } from '@/constants/base.constants'

// 专区列表数据源：https://apiv1.oschina.net/oschinapi/circle/list

@Injectable()
export class OschinaService {
    constructor(private readonly httpClientService: HttpClientService) {}

    /**
     * 获取专区最新文章列表 · web 端版本
     * @param circle
     */
    async getGroupsNewListByWeb(circle: OschinaGroupType): Promise<ResponseData[]> {
        const { data } = await this.httpClientService.request({
            method: 'get',
            url: 'https://www.oschina.net/group/widgets/_entry_list',
            params: {
                groupId: oschinaGroups[circle]['id'],
                circle: '',
                tab: 'blog',
                sort: 'recommend',
                page: 1,
                type: 'ajax'
            }
        })

        const $: CheerioAPI = load(data)

        return $('div.entry-item')
            .toArray()
            .map((item) => {
                const $el = $(item)
                const title = $el.find('div.zone-item-title a').text()
                const comment = $el.find('div.baiduab-beha span.count').text()
                const link: string = $el.find('div.zone-item-title a').attr('href') || ''

                return {
                    title,
                    view: 0,
                    url: link,
                    create_time: 0
                }
            })
    }

    /**
     * 获取专区最新文章列表 · 移动端版本
     */
    async getGroupsNewListByMobile(circle: OschinaGroupType) {
        const { data } = await this.httpClientService.request({
            method: 'get',
            url: 'https://apiv1.oschina.net/oschinapi/circle/contentNewestList',
            params: {
                pageNum: 1,
                pageSize: 10,
                CircleId: oschinaGroups[circle]['id']
            },
            headers: {
                'User-Agent':
                    'Mozilla/5.0 (iPad; CPU OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Html5Plus/1.0 (Immersed/20) uni-app'
            }
        })

        return (
            data?.result.map((item: any) => {
                return {
                    title: item.title,
                    view: item.commentCount,
                    url: 'item.objId',
                    create_time: dayjs(item.createTime).unix()
                }
            }) || []
        )
    }

    /**
     * 获取阅读排行
     */
    async getRankRead() {
        const api = {
            // 综合
            overall: {
                weekly: '/ApiHomeNew/homeListByRankWeek',
                monthly: '/ApiHomeNew/homeListByRankMonth'
            },
            // 咨询
            news: {
                weekly: '/news/newReadRankWeek',
                monthly: '/news/newReadRankMonth'
            },
            // 博客
            blog: {
                weekly: '/blog/blogReadRankWeek',
                monthly: '/blog/blogReadRankMonth'
            }
        }

        const { data } = await this.httpClientService.request({
            method: 'get',
            url: `https://www.oschina.net${api.overall.weekly}`
        })

        return (
            data.result.map((item: any) => {
                return {
                    title: item.title,
                    view: item.heat,
                    url:
                        item.obj_type === 4
                            ? `https://www.oschina.net/news_beta/${item.id}`
                            : item.obj_type === 3
                              ? `https://my.oschina.net/u/${item.userVo.id}/blog_beta/${item.id}`
                              : '',
                    create_time: 0
                }
            }) || []
        )
    }

    /**
     * 获取头条推荐
     */
    async getHeadline() {
        const { data } = await this.httpClientService.request({
            method: 'get',
            url: 'https://apiv1.oschina.net/oschinapi/home/headline',
            params: {
                pageNum: 1,
                pageSize: 10
            },
            headers: {
                'User-Agent': BASE_USER_AGENT
            }
        })

        return (
            data.result.list.map((item: any) => {
                return {
                    title: item.name,
                    view: 0,
                    url: item.advertUrl,
                    create_time: dayjs(item.createTime).unix()
                }
            }) || []
        )
    }
}

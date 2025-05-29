import { Injectable } from '@nestjs/common'
import dayjs from 'dayjs'
import { HttpClientService } from '../../common/service/http-client.service'
import { cloudTencentType, cloudTencentZoneType } from './types/cloud.tencent'
import { BASE_USER_AGENT } from '../../constants/base.constants'

@Injectable()
export class CloudTencentService {
    constructor(private readonly HttpClientService: HttpClientService) {}

    /**
     * 获取文章分类类型数据
     */
    async getArticleType() {
        const res = await this.HttpClientService.request({
            method: 'post',
            url: 'https://cloud.tencent.com/developer/api/column/get-classify-list-by-scene',
            data: {
                scene: 0
            }
        })

        return res.data
    }

    /**
     * 获取最新文章列表
     * @param type
     * @link https://cloud.tencent.com/developer/column
     */
    async getArticleList(type: cloudTencentType) {
        const { data } = await this.HttpClientService.request({
            method: 'post',
            url: 'https://cloud.tencent.com/developer/api/home/article-list',
            data: {
                classifyId: type,
                type: 'recommend',
                pagesize: 20,
                page: 1
            },
            headers: {
                'User-Agent': BASE_USER_AGENT
            }
        })

        return (
            data?.list.map((item: any) => {
                return {
                    title: item.title,
                    url: `https://cloud.tencent.com/developer/article/${item.articleId}`,
                    view: item.readNum,
                    create_time: item.createTime
                }
            }) || []
        )
    }

    /**
     * 获取原创作者热度排行榜
     */
    async getAuthorRankList() {
        const { data } = await this.HttpClientService.request({
            method: 'post',
            url: 'https://cloud.tencent.com/developer/api/rank/list',
            data: {
                page: 1,
                pagesize: 10,
                year: dayjs().year()
            },
            headers: {
                'User-Agent': BASE_USER_AGENT
            }
        })

        return (
            data?.list.map((item: any) => {
                const { user } = item
                return {
                    title: user.nickname,
                    url: `https://cloud.tencent.com/developer/user/${user.uid}`,
                    view: item.totalScore,
                    create_time: dayjs(item.updateTime).unix()
                }
            }) || []
        )
    }

    async getZoneArticleList(type: cloudTencentZoneType) {
        const { data } = await this.HttpClientService.request({
            method: 'post',
            url: 'https://cloud.tencent.com/developer/api/zone/getObjList',
            data: {
                page: 1,
                pagesize: 10,
                // sort: 'timeline',
                sort: 'hot',
                subId: type,
                tagId: 0,
                type: 1
            },
            headers: {
                'User-Agent': BASE_USER_AGENT
            }
        })

        return (
            data?.list.map((item: any) => {
                return {
                    title: item.title,
                    url: `https://cloud.tencent.com/developer/article/${item.contentId}`,
                    view: item.hotNum,
                    create_time: dayjs(item.updateTime).unix()
                }
            }) || []
        )
    }
}

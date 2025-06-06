import { Injectable } from '@nestjs/common'
import { IWeReadRankUrl, WeReadCategoryType } from './types/we.read'
import { HttpClientService } from '../../common/service/http-client.service'
import { BASE_USER_AGENT } from '../../constants/base.constants'
import { getWeReadID } from '../../utils/we.read.id'

const rankUrl: IWeReadRankUrl = {
    // 飙升榜
    surge: 'https://weread.qq.com/web/bookListInCategory/rising',
    // 热搜榜
    hotSearch: 'https://weread.qq.com/web/bookListInCategory/hot_search',
    // 新书榜
    newBook: 'https://weread.qq.com/web/bookListInCategory/newbook',
    // 小说榜
    novel: 'https://weread.qq.com/web/bookListInCategory/general_novel_rising',
    // 总榜
    overall: 'https://weread.qq.com/web/bookListInCategory/all',
    // 神作榜
    special: 'https://weread.qq.com/web/bookListInCategory/newrating_publish',
    // 神作潜力榜
    specialPotential: 'https://weread.qq.com/web/bookListInCategory/newrating_potential_publish'
}

@Injectable()
export class WeReadService {
    constructor(private readonly httpClientService: HttpClientService) {}

    async getRankList(type: WeReadCategoryType) {
        const { data } = await this.httpClientService.request({
            method: 'get',
            url: rankUrl[type],
            params: {
                rank: 1
            },
            headers: {
                referer: 'https://weread.qq.com/web/category/rising',
                'User-Agent': BASE_USER_AGENT
            }
        })

        if (!data) {
            return []
        }

        return data.books.map((item: any) => {
            return {
                title: item.bookInfo.title,
                view: item.readingCount,
                url: `https://weread.qq.com/web/reader/${getWeReadID(item.bookInfo.bookId)}`,
                create_time: 0
            }
        })
    }
}

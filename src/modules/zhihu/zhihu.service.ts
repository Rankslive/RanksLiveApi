import { Injectable } from '@nestjs/common'
import request from '@/utils/request'
import { ResponseData } from '@/types/response.data'
import { BASE_USER_AGENT } from '@/constants/base.constants'

@Injectable()
export class ZhihuService {
	async getHotRankList(): Promise<ResponseData[] & []> {
		const { data } = await request({
			method: 'get',
			url: 'https://www.zhihu.com/api/v3/feed/topstory/hot-lists/total',
			params: {
				limit: 50,
				desktop: true
			},
			headers: {
				referer: 'https://www.zhihu.com/hot',
				'User-Agent': BASE_USER_AGENT
			}
		})

		if (!data) {
			return []
		}

		console.log(data.data)

		return data.data.map((item: any) => {
			return {
				title: item.target.title,
				view: item.detail_text,
				url: item.target.url,
				create_time: item.target.created
			}
		})
	}
}

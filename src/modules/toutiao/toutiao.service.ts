import { Injectable } from '@nestjs/common'
import request from '@/utils/request'
import { BASE_USER_AGENT } from '@/constants/base.constants'
import { ResponseData } from '../../../types/response.data'

@Injectable()
export class ToutiaoService {
	async getHotRankList(): Promise<ResponseData[] & []> {
		const { data } = await request({
			method: 'get',
			url: 'https://www.toutiao.com/hot-event/hot-board/',
			params: {
				origin: 'toutiao_pc'
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
				title: item.Title,
				view: item.HotValue,
				url: item.Url,
				create_time: 0
			}
		})
	}
}

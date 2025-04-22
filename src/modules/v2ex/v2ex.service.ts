import { Injectable } from '@nestjs/common'
import request from '@/utils/request'
import { BASE_USER_AGENT } from '@/constants/base.constants'

@Injectable()
export class V2exService {
	async getRankHot() {
		const { data } = await request({
			method: 'get',
			url: 'https://www.v2ex.com/api/topics/hot.json',
			headers: {
				'User-Agent': BASE_USER_AGENT
			}
		})

		if (!data) {
			return []
		}

		return data.map((item: any) => {
			return {
				title: item.title,
				view: item.replies,
				url: item.url,

				create_time: item.last_modified
			}
		})
	}
}

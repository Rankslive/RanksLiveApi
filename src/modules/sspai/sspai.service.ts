import { Injectable } from '@nestjs/common'
import request from '@/utils/request'

@Injectable()
export class SspaiService {
	async getHotRank() {
		const { data } = await request({
			method: 'get',
			url: 'https://sspai.com/api/v1/article/tag/page/get',
			params: {
				limit: 10,
				offset: 0,
				created_at: Date.now(),
				tag: '热门文章',
				released: false
			}
		})

		if (!data) {
			return []
		}

		return data.data.map((item: any) => {
			return {
				title: item.title,
				view: item.like_count,
				url: `https://sspai.com/post/${item.id}`,
				create_time: item.created_time
			}
		})
	}
}

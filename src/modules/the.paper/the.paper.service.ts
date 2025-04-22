import { Injectable } from '@nestjs/common'
import request from '@/utils/request'
import { BASE_USER_AGENT } from '@/constants/base.constants'

@Injectable()
export class ThePaperService {
	async getRankHot() {
		const { data } = await request({
			method: 'get',
			url: 'https://cache.thepaper.cn/contentapi/wwwIndex/rightSidebar',
			headers: {
				'User-Agent': BASE_USER_AGENT
			}
		})

		if (!data) {
			return []
		}

		return (
			data.data?.hotNews.map((item: any) => {
				return {
					title: item.name,
					view: item.praiseTimes,
					url: `https://www.thepaper.cn/newsDetail_forward_${item.contId}`,
					create_time: item.pubTimeLong
				}
			}) || []
		)
	}
}

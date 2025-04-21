import { Injectable } from '@nestjs/common'
import request from '@/utils/request'
import { BASE_USER_AGENT } from '@/constants/base.constants'
import { AcfunChannelType } from '../../../types/acfun'

@Injectable()
export class AcfunService {
	async getRankList(channel: AcfunChannelType) {
		console.log(channel)
		const { data } = await request({
			method: 'get',
			url: 'https://www.acfun.cn/rest/pc-direct/rank/channel',
			params: {
				channelId: channel.channelId,
				subChannelId: channel.subChannelId,
				rankLimit: 30,
				rankPeriod: 'DAY'
			},
			headers: {
				'User-Agent': BASE_USER_AGENT
			}
		})

		if (!data) {
			return []
		}

		return data?.rankList.map((item: any) => {
			return {
				title: item.contentTitle,
				view: item.viewCount,
				url: `https://www.acfun.cn/v/ac${item.contentId}`,
				create_time: item.contributeTime
			}
		})
	}
}

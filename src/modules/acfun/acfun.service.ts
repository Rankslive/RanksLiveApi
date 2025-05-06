import { Injectable } from '@nestjs/common'
import request from '@/utils/request'
import { BASE_USER_AGENT } from '@/constants/base.constants'
import { IAcfunChannel } from './types/acfun'
import { ResponseData } from '../../../types/response.data'

@Injectable()
export class AcfunService {
	async getRankList(channel: IAcfunChannel): Promise<ResponseData[] & []> {
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

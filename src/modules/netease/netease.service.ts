import { Injectable } from '@nestjs/common'
import request from '@/utils/request'
import { NeteaseCrypto } from '@/utils/netease.crypto'
import { BASE_USER_AGENT } from '@/constants/base.constants'
import { NeteaseChannelType } from '../../../types/netease'

@Injectable()
export class NeteaseService {
	async getRankList(channel: NeteaseChannelType) {
		const { data } = await request({
			method: 'post',
			url: 'https://music.163.com/weapi/v6/playlist/detail',
			params: NeteaseCrypto.encrypt({
				id: channel.id,
				n: 100,
				csrf_token: ''
			}),
			headers: {
				'User-Agent': BASE_USER_AGENT
			}
		})

		if (!data) {
			return []
		}

		return data?.playlist?.tracks?.map((item: any) => {
			return {
				title: item.name,
				view: 0,
				url: `https://music.163.com/#/song?id=${item.id}`,
				create_time: item.publishTime
			}
		})
	}
}

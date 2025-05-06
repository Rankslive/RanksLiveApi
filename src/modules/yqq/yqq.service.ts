import { Injectable } from '@nestjs/common'
import request from '@/utils/request'
import { sign } from '@/utils/yqq/sign'
import { BASE_USER_AGENT } from '@/constants/base.constants'
import { ResponseData } from '../../../types/response.data'
import { RankListItem, YQqTopType } from './types/y.qq'

@Injectable()
export class YqqService {
	async getMusicTopList(): Promise<RankListItem[]> {
		const { data } = await request({
			method: 'post',
			url: 'https://u.y.qq.com/cgi-bin/musicu.fcg',
			headers: {
				'content-type': 'text/plain',
				'User-Agent':
					'Mozilla/5.0 (iPhone; CPU iPhone OS 14_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.57(0x18003932) NetType/WIFI Language/zh_CN',
				Referer: 'https://servicewechat.com/wxada7aab80ba27074/122/page-frame.html'
			},
			data: {
				comm: {
					uin: '0',
					authst: '',
					mina: 1,
					appid: 'wxada7aab80ba27074',
					ct: 25
				},
				toplist: {
					module: 'musicToplist.ToplistInfoServer',
					method: 'GetAll',
					param: {}
				}
			}
		})

		if (!data) {
			return []
		}

		return data?.toplist?.data?.group
			.map((item: any) => {
				return item.toplist.map((rows: any) => {
					return {
						title: rows.title,
						topId: rows.topId,
						period: rows.period
					}
				})
			})
			.flat(1)
	}

	async getRanksList(topType: YQqTopType): Promise<ResponseData[] & []> {
		const rankInfo = await this.getMusicTopList()

		const rank: RankListItem[] = rankInfo.filter((item: RankListItem) => item.title === topType)

		const query = {
			comm: {
				cv: 4747474,
				ct: 24,
				format: 'json',
				inCharset: 'utf-8',
				outCharset: 'utf-8',
				notice: 0,
				platform: 'yqq.json',
				needNewCode: 1,
				uin: 0,
				g_tk_new_20200303: 5381,
				g_tk: 5381
			},
			req_1: {
				module: 'musicToplist.ToplistInfoServer',
				method: 'GetDetail',
				param: {
					topid: rank?.[0].topId,
					offset: 0,
					num: 20,
					period: rank?.[0].period
				}
			}
		}

		const { data } = await request({
			method: 'post',
			url: 'https://u6.y.qq.com/cgi-bin/musics.fcg',
			params: {
				_: Date.now(),
				sign: sign(JSON.stringify(query))
			},
			headers: {
				'Content-Type': 'text/plain',
				'User-Agent': BASE_USER_AGENT
			},
			data: query
		})

		if (!data) {
			return []
		}

		return data?.req_1?.data?.data?.song.map((item: any) => {
			return {
				title: item.title,
				view: item.rankValue,
				url: `https://y.qq.com/n/ryqq/albumDetail/${item.albumMid}`,
				create_time: 0
			}
		})
	}
}

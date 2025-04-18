import { Injectable } from '@nestjs/common'
import request from '@/utils/request'
import { ResponseData } from '@/types/response.data'
import { BASE_USER_AGENT } from '@/constants/base.constants'
import dayjs from 'dayjs'
import { DomainTypes, PeriodType, SortType, zhihuSubScenesType } from '@/types/zhihu'

@Injectable()
export class ZhihuService {
	/**
	 * 获取知乎热榜
	 */
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

		return data.data.map((item: any) => {
			return {
				title: item.target.title,
				view: item.detail_text,
				url: item.target.url,
				create_time: item.target.created
			}
		})
	}

	async getZhihuNextRenderList(sub_scenes: zhihuSubScenesType): Promise<ResponseData[] & []> {
		const { data } = await request({
			method: 'get',
			url: 'https://api.zhihu.com/next-render',
			params: {
				limit: 10,
				scenes: 'dynamic_task',
				sub_scenes: sub_scenes
			},
			headers: {
				referer: 'https://www.zhihu.com/hot',
				'User-Agent':
					'osee2unifiedRelease/22706 osee2unifiedReleaseVersion/10.47.0 Mozilla/5.0 (iPhone; CPU iPhone OS 14_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148'
			}
		})

		if (!data) {
			return []
		}

		return data.data.map((item: any) => {
			return {
				title: item.header.text,
				view: item.reaction.statistics.up_vote_count,
				url: item.header.action_url,
				create_time: dayjs(item.content_end_info.create_time_text).unix()
			}
		})
	}

	/**
	 * 获取知乎创作热榜
	 */
	async getZhihuCreatorRankList(domain: DomainTypes, period: PeriodType): Promise<ResponseData[] & []> {
		const { data } = await request({
			method: 'get',
			url: 'https://www.zhihu.com/api/v4/creators/rank/hot',
			params: {
				domain: domain,
				period: period
			},
			headers: {
				referer: `https://www.zhihu.com/creator/hot-question/hot/${domain}/${period}`,
				'User-Agent': BASE_USER_AGENT
			}
		})

		if (!data) {
			return []
		}

		return data.data.map((item: any) => {
			return {
				title: item.question.title,
				view: item.reaction.pv,
				url: item.question.url,
				create_time: item.question.created
			}
		})
	}

	/**
	 * 获取知乎潜力问题
	 */
	async getZhihuPotentialRankList(domain: DomainTypes, sortType: SortType): Promise<ResponseData[] & []> {
		const { data } = await request({
			method: 'get',
			url: 'https://www.zhihu.com/api/v4/creators/rank/potential',
			params: {
				domain: domain,
				sort_type: sortType
			},
			headers: {
				referer: `https://www.zhihu.com/creator/potential-question/potential/${domain}/${sortType}`,
				'User-Agent': BASE_USER_AGENT
			}
		})

		if (!data) {
			return []
		}

		return data.data.map((item: any) => {
			return {
				title: item.question.title,
				view: item.reaction.pv,
				url: item.question.url,
				create_time: item.question.created
			}
		})
	}
}

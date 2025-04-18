import { Injectable } from '@nestjs/common'
import request from '@/utils/request'
import { BASE_USER_AGENT } from '@/constants/base.constants'
import { ResponseData } from '@/types/response.data'

@Injectable()
export class CsdnService {
	/**
	 * 获取CSDN全站综合热榜
	 */
	async getArticleHotRank(): Promise<ResponseData[]> {
		const {
			data: { data }
		} = await request({
			method: 'get',
			url: 'https://blog.csdn.net/phoenix/web/blog/hot-rank?page=0&pageSize=25&type=',
			headers: {
				'User-Agent': BASE_USER_AGENT
			}
		})
		return data.map((item: { articleTitle: string; viewCount: number; articleDetailUrl: string }) => ({
			title: item.articleTitle,
			view: item.viewCount,
			url: item.articleDetailUrl,
			create_time: 0
		}))
	}

	/**
	 * 获取CSDN领域内容榜
	 */
	async getAreaArticleRank(type: string): Promise<ResponseData[]> {
		const {
			data: { data }
		} = await request({
			method: 'get',
			url: `https://blog.csdn.net/phoenix/web/blog/hot-rank?page=0&pageSize=25&child_channel=${type}&type=`,
			headers: {
				'User-Agent': BASE_USER_AGENT
			}
		})

		return data.map((item: { articleTitle: string; viewCount: number; articleDetailUrl: string }) => ({
			title: item.articleTitle,
			view: item.viewCount,
			url: item.articleDetailUrl,
			create_time: 0
		}))
	}

	/**
	 * 获取CSDN热门专栏榜
	 */
	async getArticlePayColumnRank(): Promise<ResponseData[]> {
		const {
			data: {
				data: { payColumnRankListItemList }
			}
		} = await request({
			method: 'get',
			url: 'https://blog.csdn.net/phoenix/web/blog/pay-column-rank?page=0&pageSize=20',
			headers: {
				'User-Agent': BASE_USER_AGENT
			}
		})
		return payColumnRankListItemList.map((item: { columnName: string; viewCount: number; columnUrl: string }) => ({
			title: item.columnName,
			view: item.viewCount,
			url: item.columnUrl,
			create_time: 0
		}))
	}

	/**
	 * 获取CSDN作者榜
	 */
	async getArticleAuthorRank(type: string): Promise<ResponseData[]> {
		const {
			data: {
				data: { list }
			}
		} = await request({
			method: 'get',
			url: `https://blog.csdn.net/phoenix/web/v2/rank?page=1&pageSize=25&rankType=${type}`,
			headers: {
				'User-Agent': BASE_USER_AGENT
			}
		})
		return list.map((item: { nickName: string; userName: string; hotRankScore: number; columnUrl: string }) => ({
			title: item.nickName,
			view: item.hotRankScore,
			url: `https://blog.csdn.net/${item.userName}?type=blog`,
			create_time: 0
		}))
	}

	/**
	 * 获取CSDN历史贡献榜
	 */
	async getArticleHistoryRank(): Promise<ResponseData[]> {
		const {
			data: {
				data: { allRankListItem }
			}
		} = await request({
			method: 'get',
			url: 'https://blog.csdn.net/phoenix/web/blog/history-rank?page=0&pageSize=20',
			headers: {
				'User-Agent': BASE_USER_AGENT
			}
		})
		return allRankListItem.map(
			(item: { nickName: string; userName: string; hotRankScore: number; columnUrl: string }) => ({
				title: item.nickName,
				view: item.hotRankScore,
				url: `https://blog.csdn.net/${item.userName}?type=blog`,
				create_time: 0
			})
		)
	}

	/**
	 * 获取CSDN社区榜
	 */
	async getArticleCommunityRank(): Promise<ResponseData[]> {
		const { data } = await request({
			method: 'get',
			url: 'https://bizapi.csdn.net/community-cloud/v1/rank/community?page=1&pageSize=25',
			headers: {
				'User-Agent': BASE_USER_AGENT,
				'x-ca-key': 203930474
			}
		})
		console.log(data)
		return data.map((item: { nickName: string; userName: string; hotRankScore: number; columnUrl: string }) => ({
			title: item.nickName,
			view: item.hotRankScore,
			url: `https://blog.csdn.net/${item.userName}?type=blog`,
			create_time: 0
		}))
	}
}

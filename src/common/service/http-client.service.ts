import { HttpStatus, Injectable } from '@nestjs/common'
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { HttpException } from '@nestjs/common/exceptions/http.exception'

@Injectable()
export class HttpClientService {
	private readonly axiosInstance: AxiosInstance

	constructor() {
		// 创建一个带默认超时的 axios 实例
		this.axiosInstance = axios.create({
			timeout: 3000
		})

		// 注册响应拦截器
		this.axiosInstance.interceptors.response.use(
			(response: AxiosResponse) => response,
			(error: AxiosError) => {
				// 在这里统一处理错误，比如转换成 Nest 的 HttpException
				const status = error.response?.status ?? HttpStatus.INTERNAL_SERVER_ERROR
				const message = error.response?.data ?? error.message
				return Promise.reject(new HttpException(message, status))
			}
		)
	}

	/**
	 * 通用请求方法
	 * @param config
	 */
	public async request<T = any>(config: AxiosRequestConfig): Promise<AxiosResponse<T>> {
		try {
			return await this.axiosInstance.request<T>(config)
		} catch (err) {
			// 如果还要进一步处理错误，可以在这里做
			throw err
		}
	}
}

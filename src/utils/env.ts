import * as process from 'node:process'

/**
 * 获取环境变量
 * @param key
 * @param defaultValue
 */
export const env = (key: string, defaultValue: string = ''): string => {
	return process.env?.[key] ?? defaultValue
}

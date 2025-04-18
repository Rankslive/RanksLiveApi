import { Md5 } from 'md5-typescript'

export const md5 = (content: string): string => Md5.init(content)

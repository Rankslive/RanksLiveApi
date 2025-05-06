import { NeteaseConstants } from '@/modules/netease/constants/netease.constants'

export type NeteaseChannelType = (typeof NeteaseConstants)[keyof typeof NeteaseConstants]['id']

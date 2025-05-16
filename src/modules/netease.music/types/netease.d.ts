import { NeteaseConstants } from '@/modules/netease.music/constants/netease.constants'

export type NeteaseChannelType = (typeof NeteaseConstants)[keyof typeof NeteaseConstants]['id']

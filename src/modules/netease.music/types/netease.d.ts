import { NeteaseConstants } from '../constants/netease.constants'

export type NeteaseChannelType = (typeof NeteaseConstants)[keyof typeof NeteaseConstants]['id']

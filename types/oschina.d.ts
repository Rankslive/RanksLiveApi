import { oschinaGroups } from '@/constants/oschina.constants'

export type OschinaGroupType = (typeof oschinaGroups)[keyof typeof oschinaGroups]['value']

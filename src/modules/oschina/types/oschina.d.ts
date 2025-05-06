import { oschinaGroups } from '@/modules/oschina/constants/oschina.constants'

export type OschinaGroupType = (typeof oschinaGroups)[keyof typeof oschinaGroups]['value']

import { oschinaBlogArticle, oschinaBlogRankSort, oschinaGroups } from '../constants/oschina.constants'

export type OschinaGroupType = (typeof oschinaGroups)[keyof typeof oschinaGroups]['value']
export type oschinaBlogArticleType = (typeof oschinaBlogArticle)[keyof typeof oschinaBlogArticle]['value']
export type oschinaBlogArticleIdType = (typeof oschinaBlogArticle)[keyof typeof oschinaBlogArticle]['id']
export type oschinaBlogRankSortType = (typeof oschinaBlogRankSort)[keyof typeof oschinaBlogRankSort]['value']

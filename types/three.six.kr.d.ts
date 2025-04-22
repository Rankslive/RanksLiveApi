export type ThreeSixKr = 'hot' | 'video' | 'comment' | 'collect'

export interface ThreeSixKrType {
    [key: string]: {
        name: string
        type: ThreeSixKr
        list: string
    }
}

import { Injectable } from '@nestjs/common'
import { ResponseData } from '../../../types/response.data'
import { HttpClientService } from '../../common/service/http-client.service'
import { AppleCountryType, AppleMusicDailyType, AppleMusicDailyValueType, AppleMusicGenresType } from './types/apple'
import { AppleMusicDaily } from './constants/apple.music.constants'

@Injectable()
export class AppleMusicService {
    // 固定的 authorization 数据值，https://music.apple.com/assets/index-10d4f1a1.js -> async fetch(e) {
    _authorization =
        'eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IldlYlBsYXlLaWQifQ.eyJpc3MiOiJBTVBXZWJQbGF5IiwiaWF0IjoxNzQ2NjM3MTY2LCJleHAiOjE3NTM4OTQ3NjYsInJvb3RfaHR0cHNfb3JpZ2luIjpbImFwcGxlLmNvbSJdfQ.ONPUnh6UMOJ1VWujIxxWuTdi2ueBAM01B8xMg4NkNy9mdE_C1Y15-xKGoZ6Qg6mgC-ZMdfFHt5Xf4hL4X4-lMw'

    #userAgent =
        'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Mobile Safari/537.36'

    constructor(private readonly httpClientService: HttpClientService) {}

    /**
     * 获取 Apple Music 热门歌曲排行
     * @param country 国家归属地
     * @param type 音乐类型
     */
    async getMusicHotSongRank(country: AppleCountryType, type: AppleMusicGenresType) {
        const { data } = await this.httpClientService.request({
            method: 'get',
            url: `https://amp-api.music.apple.com/v1/catalog/${country}/charts`,
            headers: {
                'User-Agent': this.#userAgent,
                Authorization: `Bearer ${this._authorization}`,
                origin: 'https://music.apple.com'
            },
            params: {
                'art[url]': 'f',
                extend: 'artistUrl',
                'fields[albums]':
                    'artistName,artistUrl,artwork,contentRating,editorialArtwork,name,playParams,releaseDate,url',
                'fields[playlists]':
                    'artistName,artistUrl,artwork,contentRating,editorialArtwork,name,playParams,releaseDate,url,curatorName',
                'format[resources]': 'map',
                genre: type,
                include: 'tracks',
                'include[songs]': 'artists',
                // 'l': 'zh-Hans-CN',
                limit: 50,
                platform: 'web',
                types: 'albums,songs,music-videos,playlists',
                with: 'cityCharts,dailyGlobalTopCharts'
            }
        })

        if (data?.results && data?.resources) {
            const songs = data.results.songs[0].data
            const resourcesSong = data.resources.songs
            return songs.map((item: any) => {
                const song = resourcesSong[item.id]
                return {
                    title: `${song.attributes.name} - ${song.attributes.artistName}`,
                    url: song.attributes.url,
                    thumbnail: song.attributes.artwork.url
                        .replace('{w}', '80')
                        .replace('{h}', '80')
                        .replace('{f}', 'webp'),
                    create_time: 0,
                    view: 0
                } as ResponseData
            })
        }

        return []
    }

    /**
     * 国家区域转换
     */
    private _countryConvert(country: string) {
        const countryMap = {
            cn: 'CN',
            us: 'US',
            jp: 'JP',
            kr: 'KR',
            tw: 'TW',
            hk: 'HK'
        }
        return countryMap[country]
    }

    async getDailyGlobalTopCharts(country: AppleMusicDailyType) {
        const id = AppleMusicDaily[country]['value'] as AppleMusicDailyValueType
        const { data } = await this.httpClientService.request({
            method: 'get',
            url: `https://amp-api.music.apple.com/v1/catalog/cn/playlists/${id}`,
            headers: {
                'User-Agent': this.#userAgent,
                Authorization: `Bearer ${this._authorization}`,
                origin: 'https://music.apple.com'
            },
            params: {
                'art[url]': 'f',
                extend: 'editorialArtwork,editorialVideo,offers,seoDescription,seoTitle,trackCount',
                'fields[albums]': 'name,artwork,playParams,url',
                'fields[apple-curators]': 'name,url',
                'fields[artists]': 'name,artwork,url',
                'fields[curators]': 'name,url',
                'fields[songs]':
                    'name,artistName,curatorName,composerName,artwork,playParams,contentRating,albumName,url,durationInMillis,audioTraits,extendedAssetUrls',
                'format[resources]': 'map',
                include: 'tracks,curator',
                'include[music-videos]': 'artists',
                'include[songs]': 'artists',
                'limit[tracks]': 300,
                'limit[view.featured-artists]': 15,
                'limit[view.more-by-curator]': 15,
                'omit[resource]': 'autos',
                platform: 'web',
                views: 'featured-artists,more-by-curator'
            }
        })

        if (data?.resources) {
            const resources = data.resources
            return resources.playlists[id]!.relationships.tracks.data.map((item: any) => {
                const song = resources.songs[item.id]
                return {
                    title: `${song.attributes.name} - ${song.attributes.artistName}`,
                    url: song.attributes.url,
                    thumbnail: song.attributes.artwork.url
                        .replace('{w}', '80')
                        .replace('{h}', '80')
                        .replace('{f}', 'webp'),
                    create_time: 0,
                    view: 0
                } as ResponseData
            })
        }

        return []
    }
}

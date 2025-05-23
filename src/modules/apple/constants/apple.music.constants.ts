import * as console from 'node:console'

export const AppleMusicGenres = {
    blues: { name: '蓝调', value: 2, id: 2 },
    children: { name: '儿童音乐', value: 4, id: 4 },
    classical: { name: '古典', value: 5, id: 5 },
    village: { name: '乡村', value: 6, id: 6 },
    electron: { name: '电子音乐', value: 7, id: 7 },
    holiday: { name: '节庆', value: 8, id: 8 },
    songwriter: { name: '唱作歌手', value: 10, id: 10 },
    Jazz: { name: '爵士乐', value: 11, id: 11 },
    Latin: { name: '拉丁音乐', value: 12, id: 12 },
    international: { name: '国际流行', value: 14, id: 14 },
    r_b: { name: 'R&B/灵魂乐', value: 15, id: 15 },
    soundtrack: { name: '原声音乐', value: 16, id: 16 },
    dance: { name: '舞曲', value: 17, id: 17 },
    rap: { name: '嘻哈/说唱', value: 18, id: 18 },
    alternative: { name: '另类音乐', value: 20, id: 20 },
    rock: { name: '摇滚', value: 21, id: 21 },
    christianity: { name: '基督教与福音', value: 22, id: 22 },
    reggae: { name: '雷鬼', value: 24, id: 24 },
    music: { name: '音乐', value: 34, id: 34 },
    'k-pop': { name: 'K-Pop', value: 51, id: 51 },
    indie_rock: { name: '独立摇滚', value: 1004, id: 1004 },
    punk: { name: '朋克', value: 1006, id: 1006 },
    americana: { name: 'Americana', value: 1034, id: 1034 },
    gospel: { name: '福音歌曲', value: 1101, id: 1101 },
    latin_city: { name: '拉丁都市音乐', value: 1119, id: 1119 },
    SouthAmericanRock: { name: '另类和南美摇滚', value: 1121, id: 1121 },
    mexico: { name: '墨西哥地方', value: 1123, id: 1123 },
    soul: { name: '灵魂乐', value: 1143, id: 1143 },
    hardRock: { name: '硬摇滚', value: 1152, id: 1152 },
    Metal: { name: '金属', value: 1153, id: 1153 },
    african: { name: '非洲音乐', value: 1203, id: 1203 },
    samba: { name: '桑巴', value: 1227, id: 1227 },
    'C-Pop': { name: 'C-Pop', value: 1250, id: 1250 }
} as const

export const AppleMusicDaily = {
    global: {
        name: '每周热门 100 首：全球',
        value: 'pl.921750b485a6496ea58b16d46c097557'
    },
    china: {
        name: '每周热门 100 首：中国大陆',
        value: 'pl.939cf56e73c44970b81fd9648f859223'
    },
    hongkong: {
        name: '每周热门 100 首：中国香港',
        value: 'pl.f600030d19174703ab6e37605a6bec08'
    },
    korea: {
        name: '每周热门 100 首：韩国',
        value: 'pl.4a5c566712634cb1914ec3d104a9e4db'
    },
    japan: {
        name: '每周热门 100 首：日本',
        value: 'pl.417f0970ea794ee9b7c819f6d2324821'
    },
    us: {
        name: '每周热门 100 首：美国',
        value: 'pl.6f4d1d4d6eae48579cead6a7bc2a0c0d'
    },
    uk: {
        name: '每周热门 100 首：英国',
        value: 'pl.23a3552e92134bbbb8bc7acbc27c4e5a'
    },
    australia: {
        name: '每周热门 100 首：澳大利亚',
        value: 'pl.41b58acae5f2447ebb0047c8a62ad8d6'
    },
    canada: {
        name: '每周热门 100 首：加拿大',
        value: 'pl.cb6262ec61184f689970faeb9fdc2464'
    }
} as const

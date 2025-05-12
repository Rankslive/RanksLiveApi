import { createHash } from 'crypto'

const PART_1_INDEXES = [
    23,
    14,
    6,
    36,
    16,
    40,
    7,
    19
].filter((x) => x < 40)
const PART_2_INDEXES = [
    16,
    1,
    32,
    12,
    19,
    27,
    8,
    5
]
const SCRAMBLE_VALUES = [
    89,
    39,
    179,
    150,
    218,
    82,
    58,
    252,
    177,
    52,
    186,
    123,
    120,
    64,
    242,
    133,
    143,
    161,
    121,
    179
]
// {
//     "comm": {
//         "cv": 4747474,
//         "ct": 24,
//         "format": "json",
//         "inCharset": "utf-8",
//         "outCharset": "utf-8",
//         "notice": 0,
//         "platform": "yqq.json",
//         "needNewCode": 1,
//         "uin": 0,
//         "g_tk_new_20200303": 5381,
//         "g_tk": 5381
//     },
//     "req_1": {
//         "module": "musicToplist.ToplistInfoServer",
//         "method": "GetDetail",
//         "param": {
//             "topid": 26,
//             "offset": 0,
//             "num": 20,
//             "period": "2025-04-20"
//         }
//     }
// }
export const sign = (payload: string): string => {
    const hash = createHash('sha1').update(payload, 'utf-8').digest('hex').toUpperCase()

    const part1 = PART_1_INDEXES.map((i) => hash[i]).join('')
    const part2 = PART_2_INDEXES.map((i) => hash[i]).join('')
    const part3 = Buffer.alloc(20)

    for (let i = 0; i < SCRAMBLE_VALUES.length; i++) {
        part3[i] = SCRAMBLE_VALUES[i] ^ parseInt(hash.slice(i * 2, i * 2 + 2), 16)
    }

    const b64_part = Buffer.from(part3)
        .toString('base64')
        .replace(/[\\/+=]/g, '')

    return `zzc${part1}${b64_part}${part2}`.toLowerCase()
}

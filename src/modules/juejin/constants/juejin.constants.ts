import { filterObject } from '@/utils/helper'

export const JuejinConstants = {
    all: {
        name: '综合',
        category_id: '1'
    },
    backend: {
        name: '后端',
        category_id: '6809637769959178254'
    },
    frontend: {
        name: '前端',
        category_id: '6809637767543259144'
    },
    android: {
        name: 'Android/客户端',
        category_id: '6809635626879549454'
    },
    ios: {
        name: 'iOS',
        category_id: '6809635626661445640'
    },
    ai: {
        name: '人工智能',
        category_id: '6809637773935378440'
    },
    freebie: {
        name: '开发工具',
        category_id: '6809637771511070734'
    },
    career: {
        name: '代码人生',
        category_id: '6809637776263217160'
    },
    article: {
        name: '阅读',
        category_id: '6809637772874219534'
    }
}

export const JuejinAuthorConstants = filterObject(JuejinConstants, [
    'all',
    'ios'
])

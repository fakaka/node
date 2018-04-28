const top_list_all = {
    "0": ["云音乐新歌榜", "3779629"],
    "1": ["云音乐热歌榜", "3778678"],
    "2": ["网易原创歌曲榜", "2884035"],
    "3": ["云音乐飙升榜", "19723756"],
    "4": ["云音乐电音榜", "10520166"],
    "5": ["UK排行榜周榜", "180106"],
    "6": ["美国Billboard周榜", "60198"],
    "7": ["KTV嗨榜", "21845217"],
    "8": ["iTunes榜", "11641012"],
    "9": ["Hit FM Top榜", "120001"],
    "10": ["日本Oricon周榜", "60131"],
    "11": ["韩国Melon排行榜周榜", "3733003"],
    "12": ["韩国Mnet排行榜周榜", "60255"],
    "13": ["韩国Melon原声周榜", "46772709"],
    "14": ["中国TOP排行榜(港台榜)", "112504"],
    "15": ["中国TOP排行榜(内地榜)", "64016"],
    "16": ["香港电台中文歌曲龙虎榜", "10169002"],
    "17": ["华语金曲榜", "4395559"],
    "18": ["中国嘻哈榜", "1899724"],
    "19": ["法国 NRJ EuroHot 30周榜", "27135204"],
    "20": ["台湾Hito排行榜", "112463"],
    "21": ["Beatport全球电子舞曲榜", "3812895"],
    "22": ["云音乐ACG音乐榜", "71385702"],
    "23": ["云音乐嘻哈榜", "991319590"]
}

const { createWebAPIRequest } = require("../util/requestUtil")

async function getTopList(ctx, next) {
    var req = ctx.request
    var resp = ctx.response
    // const idx = ctx.params.id
    const idx = ctx.query.idx || 1
    const id = top_list_all[idx][1]
    const cookie = req.get("Cookie") ? req.get("Cookie") : ""
    const action = "/weapi/v3/playlist/detail"
    const data = {
        id,
        n: 10000,
        csrf_token: ""
    }
    await createWebAPIRequest("music.163.com", action, "POST", data, cookie)
        .then((res) => {
            ctx.response.body = res
        })
}

async function getMusicDetail(ctx, next) {
    var req = ctx.request
    const cookie = req.get('Cookie') ? req.get('Cookie') : ''
    const id = parseInt(ctx.query.ids)
    const data = {
        c: JSON.stringify([{ id: id }]),
        ids: '[' + id + ']',
        csrf_token: ''
    }
    console.log(data)

    await createWebAPIRequest(
        'music.163.com',
        '/weapi/v3/song/detail',
        'POST',
        data,
        cookie)
        .then((res) => {
            ctx.response.body = res
        })

}

async function getMusicUrl(ctx, next) {
    var req = ctx.request
    const id = ctx.query.id
    const br = ctx.query.br || 999000
    const data = {
        ids: [id],
        br: br,
        csrf_token: ''
    }
    const cookie = req.get('Cookie') ? req.get('Cookie') : ''

    await createWebAPIRequest(
        'music.163.com',
        '/weapi/song/enhance/player/url',
        'POST',
        data,
        cookie)
        .then((res) => {
            ctx.response.body = res
        })
}

async function search(ctx, next) {
    var req = ctx.request

    const s = ctx.query.keywords;
    const type = ctx.query.type || 1;
    const limit = ctx.query.limit || 30;
    const offset = ctx.query.offset || 0;
    const cookie = req.get("Cookie") ? req.get("Cookie") : "";
    // *(type)* 搜索单曲(1)，歌手(100)，专辑(10)，歌单(1000)，用户(1002)
    const data = {
        csrf_token: "",
        limit,
        type,
        s,
        offset
    };

    await createWebAPIRequest(
        "music.163.com",
        "/weapi/search/get",
        "POST",
        data,
        cookie
    ).then((res) => {
        ctx.response.body = res
    })
}

async function getMusicLyric(ctx, next) {
    var req = ctx.request
    const cookie = req.get('Cookie') ? req.get('Cookie') : ''
    const data = {}
    const id = ctx.query.id

    await createWebAPIRequest(
        'music.163.com',
        '/weapi/song/lyric?os=osx&id=' + id + '&lv=-1&kv=-1&tv=-1',
        'POST',
        data,
        cookie)
        .then((res) => {
            ctx.response.body = res
        })
}

async function getMusicComment(ctx, next) {
    var req = ctx.request

    const rid = ctx.query.id;
    const offset = ctx.query.offset || 0
    const limit = ctx.query.limit || 20
    const cookie = req.get("Cookie") ? req.get("Cookie") : "";
    const data = {
        offset,
        rid,
        limit,
        csrf_token: ""
    };

    await createWebAPIRequest(
        "music.163.com",
        `/weapi/v1/resource/comments/R_SO_4_${rid}/?csrf_token=`,
        "POST",
        data,
        cookie)
        .then((res) => {
            ctx.response.body = res
        })
}

async function getTopArtists(ctx, next) {
    var req = ctx.request

    var offset = ctx.query.offset || 0
    var limit = ctx.query.limit || 10
    const cookie = req.get('Cookie') ? req.get('Cookie') : ''
    const data = {
        offset,
        total: true,
        limit,
        csrf_token: ''
    }

    await createWebAPIRequest(
        'music.163.com',
        `/weapi/artist/top`,
        'POST',
        data,
        cookie
    ).then((res) => {
        ctx.response.body = res
    })
}

async function getPlaylist(ctx, next) {
    var req = ctx.request

    const cookie = req.get('Cookie') ? req.get('Cookie') : ''
    const data = {
        id: req.query.id,
        n: 100000,
        csrf_token: ""
    }

    await createWebAPIRequest(
        'music.163.com',
        `/api/playlist/detail?id=${data.id}`,
        'POST',
        data,
        cookie
    ).then((res) => {
        console.log(res)
        ctx.response.body = res
    })
}

async function getBanner(ctx, next) {
    var req = ctx.request

    const cookie = req.get('Cookie') ? req.get('Cookie') : ''
    const data = {
    }

    await createWebAPIRequest(
        'music.163.com',
        '/api/v2/banner/get',
        'POST',
        data,
        cookie
    ).then((res) => {
        console.log(res)
        ctx.response.body = res
    })
}

module.exports = {
    search,getBanner,
    getMusicDetail, getMusicUrl, getMusicComment, getMusicLyric,
    getPlaylist,
    getTopArtists, getTopList
}

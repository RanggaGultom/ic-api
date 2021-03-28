module.exports = {
    baseurl: "https://tl3.shadowtree-software.se/",
    endpoints: {
        user: "TL3BackEnd/rest/user2/public/info/{ID}",
        user_search: "TL3BackEnd/rest/user2/public/search?query={USERNAME}",
        map: "TL3BackEnd/rest/map/public/user/{ID}?result={RESULT}&page=0",
        map_trending: "TL3BackEnd/rest/map/public/top/{MODE}/{PERIOD}?maxversion=999&trendsystem={SYSTEM}"
    }
}
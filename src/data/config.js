module.exports = {
    baseurl: "https://tl3.shadowtree-software.se/",
    endpoints: {
        user: "TL3BackEnd/rest/user2/public/info/{ID}",
        user_search: "TL3BackEnd/rest/user2/public/search?query={USERNAME}",
        map: "TL3BackEnd/rest/map/public/{ID}/meta",
        map_search: "TL3BackEnd/rest/map/public/top/{MODE}/search?maxversion=999&query={QUERY}",
        map_new: "TL3BackEnd/rest/map/public/new/{MODE}?maxversion=999&result=12&page={PAGE}",
        map_user: "TL3BackEnd/rest/map/public/user/{ID}?result=50&page=0",
        map_trending: "TL3BackEnd/rest/map/public/top/{MODE}/{PERIOD}?maxversion=999&result=12&page=0&trendsystem={SYSTEM}",
        map_scores: "TL3BackEnd/rest/highscore/public/{ID}?count={COUNT}",
        map_comments: "TL3BackEnd/rest/comment/public/{ID}?limit={COUNT}"
    }
}
const axios = require("axios")
const httpsAgent = new (require("https").Agent)({
    rejectUnauthorized: false
})
const url = require("../data/config")
const score = require("./HighScore")
const comm = require("./Comment")

module.exports = class Map {
    constructor(obj) {
        if(!obj instanceof Object) return;
            this.name =  obj.name
            this.desc =  obj.desc
            this.gameModeGroup =  obj.gameModeGroup
            this.fileName =  obj.fileName
            this.fileExt =  obj.fileExt
            /**
             * Get user (author the map)
             * @returns {Promise<User>} Promise of author map
             * @example
             * map.getAuthor().then(x => console.log(x)) //User
             */
            this.getAuthor = () => {
                return require("../function/user/get")(obj.author)
            }
            this.author = obj.author
            this.created =  obj.created
            this.updated =  obj.updated
            this.gameVersion =  obj.gameVersion
            this.likes =  obj.votesUp
            this.dislikes =  obj.votesDown
            this.highScore =  obj.highScore
            this.highScoreUser =  obj.highScoreUser
            this.fullyUploaded =  obj.fullyUploaded
            this.mapVersion =  obj.mapVersion
            this.targetScore = obj.targetScore
            this.favorites =  obj.favorites
            this.deleted =  obj.deleted
            this.objectId =  obj.objectId
            this.authorName =  obj.authorName
            this.thumbnail = `https://iscl.cf/thumb/${this.objectId}`
            /**
             * See if this map is in trending
             * @param {string} period Time period of trending (day | week | month | alltime)
             * @param {number} trendingtype Type of trending (1 for normal trending | 2 for "Top New")
             * @returns {Boolean} Promise of the trending maps
             * @example
             * map.isTrending("day", 2).then(x => console.log(x)) //true if map in top new
             */
            this.trending = async (period, type) => {
                let val = await require("../function/map/trending")(this.gameModeGroup, period, type)
                val = val.map(x => x.objectId)
                const ge = val.includes(this.objectId)
                const x = val.indexOf(this.objectId) + 1
                 return {
                     isTrending:ge,
                     position: x
                    }
            }
            /**
             * See highscore users in this map
             * @param {number} count User count limit to be showed
             * @returns {Array} Highscore users
             * @example
             * map.highScoreList(10).then(x => console.log(x)) //Array of highscore users or empty array if its not a tc map
             */
             this.highScoreList = async (count) => {
                const {data} = await axios.get(`${url.baseurl}${url.endpoints.map_scores.replace("{ID}", this.objectId).replace("{COUNT}", count)}`, { httpsAgent })
                let arr = []
        
            data.forEach(x => {
                arr.push(new score(x))
            })
            return arr
            }/**
             * See comments in this map
             * @param {number} count Number of comments to be shown (sorted by newest)
             * @returns {Array} Comments in the map
             * @example
             * map.comments(10).then(x => console.log(x)) //Array of comments in the map
             */
            this.comments = async (count) => {
                const {data} = await axios.get(`${url.baseurl}${url.endpoints.map_comments.replace("{ID}", this.objectId).replace("{COUNT}", count)}`, { httpsAgent })
                let arr = []
        
            data.forEach(x => {
                arr.push(new comm(x))
            })
            return arr
        }
            
function getUser(id) {
    const g = require("../function/user/get")(id)
    g.catch().then(x => h(null, x))
}
    }
}

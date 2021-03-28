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
            /**
             * See trending maps from any gamemode
             * @param {string} period Time period of trending (day | week | month)
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
            
function getUser(id) {
    const g = require("../function/user/get")(id)
    g.catch().then(x => h(null, x))
}
    }
}

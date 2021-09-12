const axios = require("axios")
const httpsAgent = new (require("https").Agent)({
    rejectUnauthorized: false
})
const url = require("../data/config")
const _Map = require("./Map")

module.exports = class User {
    constructor(obj) {
        if(!obj instanceof Object) return;
        this.objectId = obj.objectId
        this.gameVersion = obj.gameVersion
        this.lastLogin = obj.lastLogin
        this.maps = obj.maps
        this.name = obj.name
        this.followers = obj.followers
        /**
             * Show maps from a user
             * @returns {Array} Array of map object
             * @example
             * user.showMaps().then(x => console.log(x)) //will shows their map
             */
        this.showMaps = async () => {
            const { data } = await axios.get(`${url.baseurl}${url.endpoints.map_user.replace("{ID}", this.objectId)}`, { httpsAgent })
            let arr = []
        
            data.forEach(x => {
                arr.push(new _Map(x))
            })
            return arr
        }
    }
}
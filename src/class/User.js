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
             * user.showMaps.then(x => console.log(x)) //true if map in top new
             */
        this.showMaps = () => {
            return require("../function/map/getAll")(this.objectId)
        }
    }
}
module.exports = class HighScore {
    constructor(obj) {
        if(!obj instanceof Object) return;
        this.userId = obj.userId
        this.mapId = obj.mapId
        this.mapVersion = obj.mapVersion
        this.date = obj.date
        this.objectId = obj.objectId
        this.username = obj.username
    }
}
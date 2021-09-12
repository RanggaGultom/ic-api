module.exports = class Comment {
    constructor(obj) {
        if(!obj instanceof Object) return;
        this.userId = obj.user
        this.mapId = obj.map
        this.comment = obj.comment
        this.flag = obj.flag
        this.date = obj.datePosted
        this.rtl = obj.rtl,
        this.reply = !obj.replyToUserId ? false : { userId: obj.replyToUserId, username: obj.replyUsername},
        this.objectId = obj.objectId,
        this.username = obj.username
    }
}
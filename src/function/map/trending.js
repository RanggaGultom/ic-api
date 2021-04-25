const axios = require("axios")
const httpsAgent = new (require("https").Agent)({
    rejectUnauthorized: false
})
const url = require("../../data/config")
const _Map = require("../../class/Map")
const unce = ["day", "week", "month"]
/**
 * See trending maps from any gamemode
 * @param {number} gamemode Gamemode of trending map (1 = SIM | 2 = TC | 3 = MISC)
 * @param {string} period Time period of trending (day | week | month)
 * @param {number} trendingtype Type of trending (1 for normal trending | 2 for "Top New")
 * @returns {Array} Promise of the trending maps
 * @example
 * const ic = require("ic-api")
 * ic.map.trending(1, "day", 1).then(x => console.log(x)) //Array
 */
module.exports = trending = async (game, period, type, query = 12) => {
    if (!game) throw new SyntaxError("Missing params for gamemode")
    if (!period) throw new SyntaxError("Missing params for period")
    if (!type) throw new SyntaxError("Missing params for id")
    if (parseInt(game) < 1 || parseInt(game) > 3) throw new SyntaxError("Please use correct type")
    if (!unce.includes(period.toString())) throw new SyntaxError("Please use correct period")
    if (parseInt(type) < 1 || parseInt(type) > 2) throw new SyntaxError("Please use correct type")
    
    const { data } = await axios.get(`${url.baseurl}${url.endpoints.map_trending.replace("{MODE}", game).replace("{PERIOD}", period).replace("{SYSTEM}",type)}`, { httpsAgent })
    let arr = []

    data.forEach(x => {
        arr.push(new _Map(x))
    })
 
    arr = arr.filter(x => arr.indexOf(x) < query)
    return arr
}
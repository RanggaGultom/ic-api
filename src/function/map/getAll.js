const axios = require("axios")
const httpsAgent = new (require("https").Agent)({
    rejectUnauthorized: false
})
const url = require("../../data/config")
const _Map = require("../../class/Map")
/**
 * Show maps from given user
 * @param {string} id User id
 * @returns {Array} Array of map from the user
 * @example
 * const ic = require("ic-api")
 * ic.map.getAll(1, "day", 1).then(x => console.log(x)) //Array
 */
module.exports = async (id, query = 50) => {
    if (!id) throw new SyntaxError("Missing params for id")
    if (parseInt(query) < 1 || parseInt(query) > 50) throw new SyntaxError("Query cannot be below 1 or above 50")
    
    const { data } = await axios.get(`${url.baseurl}${url.endpoints.map.replace("{ID}", id).replace("{RESULT}", query)}`, { httpsAgent })
    let arr = []

    data.forEach(x => {
        arr.push(new _Map(x))
    })
 
    arr = arr.filter(x => arr.indexOf(x) < query)
    return arr
}
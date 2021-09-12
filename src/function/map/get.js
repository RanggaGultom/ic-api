const axios = require("axios")
const httpsAgent = new (require("https").Agent)({
    rejectUnauthorized: false
})
const url = require("../../data/config")
const _Map = require("../../class/Map")
/**
 * Get map using the map id
 * @param {string} id The id you wanted to get from API
 * @returns {(promise|Void)} Promise of the map that successfully fetched
 * @example
 * const ic = require("ic-api")
 * ic.map.get("499448").then(x => console.log(x)) //Map data
 */
module.exports = get = async (id) => {
    if (!id) throw new SyntaxError("Missing params for id")
    try {
        const { data } = await axios.get(`${url.baseurl}${url.endpoints.map.replace("{ID}", id)}`, { httpsAgent })
        return new _Map(data)
    } catch(e) {

        if (e.toString().includes("Request failed with status code")) return null
    }
}
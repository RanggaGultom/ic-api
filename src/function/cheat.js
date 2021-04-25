const axios = require("axios")
const httpsAgent = new (require("https").Agent)({
    rejectUnauthorized: false
})
const url = require("../../data/config")
const User = require("../../class/User")
/**
 * Get user using the user id
 * @param {string} id The id you wanted to get from API
 * @returns {(promise|Void)} Promise of the user that successfully fetched
 * @example
 * const ic = require("ic-api")
 * ic.user.get("2").then(x => console.log(x.name)) //ShadowTree
 */
module.exports = cheat = async (id) => {
    if (!id) throw new SyntaxError("Missing params for id")
    try {
        const { data } = await axios.get(`${url.baseurl}${url.endpoints.user.replace("{ID}", id)}`, { httpsAgent })
        return new User(data)
    } catch(e) {

        if (e.toString().includes("Request failed with status code")) return null
    }
}
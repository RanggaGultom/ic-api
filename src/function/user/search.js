const axios = require("axios")
const httpsAgent = new (require("https").Agent)({
    rejectUnauthorized: false
})
const url = require("../../data/config")
const User = require("../../class/User")
/**
 * Get user using the user id
 * @param {string} username The user you wanted to search from API
 * @returns {(Array|Void)} Promise of the match users with username you inputted
 * @example
 * const ic = require("ic-api")
 * ic.user.search("2").then(x => console.log(x.objectId)) //2
 */
module.exports = find = async(username, options = {}) => {
    if (!username) throw new SyntaxError("Missing params for username")
    if (options.exactMatch && ( options.exactMatch !== true  && options.exactMatch !== false )) throw new ReferenceError("exactMatch option should filled with boolean")
    if (!options.exactMatch) {
    let { data:whattheywanted } = await axios.get(`${url.baseurl}${url.endpoints.user_search.replace("{USERNAME}", username)}`, { httpsAgent })

    if (options.query) {
        
        options.query = parseInt(options.query)

        if (options.query < 1 || options.query > 12) throw new ReferenceError("Query should beetwen 1 and 12")

        whattheywanted = whattheywanted.filter(x => whattheywanted.indexOf(x) < options.query)
    }
    
    let g = []
    for(const ag of whattheywanted) {
        const user = await require("./get")(ag.objectId)
        g.push(user)
    }
    return g
    } else {
        let { data:whattheywanted } = await axios.get(`${url.baseurl}${url.endpoints.user_search.replace("{USERNAME}", username)}`, { httpsAgent })
        whattheywanted = whattheywanted.find(x => x.name == username)
        if(!whattheywanted) {
            return null
        } else {
            return await require("./get")(whattheywanted.objectId)
        }
    }
}
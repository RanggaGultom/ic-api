const axios = require("axios")
const httpsAgent = new (require("https").Agent)({
    rejectUnauthorized: false
})
const url = require("../../data/config")
const _Map = require("../../class/Map")
/**
 * Get map using the map name
 * @param {string} mode The mode you wanted to search (1 = SIM | 2 = TC | 3 = MISC)
 * @param {string} name The map you wanted to search from API
 * @returns {(Array|Void)} Promise of the match maps with name you inputted
 * @example
 * const ic = require("ic-api")
 * ic.map.search("Diverging Diamond").then(x => console.log(x)) //Array of maps with matched name
 */
module.exports = find = async(mode, name, options = {}) => {
    if (!mode) throw new SyntaxError("Missing params for game mode")
    if (!name) throw new SyntaxError("Missing params for name")
    if (options.exactMatch && ( options.exactMatch !== true  && options.exactMatch !== false )) throw new ReferenceError("exactMatch option should filled with boolean")
    if (!options.exactMatch) {
    let { data:whattheywanted } = await axios.get(`${url.baseurl}${url.endpoints.map_search.replace("{MODE}", mode).replace("{QUERY}", name)}`, { httpsAgent })
    
    /*if (!options.query) options.query = 12
    if (options.query) {
        
        options.query = parseInt(options.query)

        if (options.query < 1 || options.query > 12) throw new ReferenceError("Query should beetwen 1 and 12")

        whattheywanted = whattheywanted.filter(x => whattheywanted.indexOf(x) < options.query)
    }*/
    
    let g = []
    for(const ag of whattheywanted) {
        const user = await require("./get")(ag.objectId)
        g.push(user)
    }
    return g
    } else {
        let { data:whattheywanted } = await axios.get(`${url.baseurl}${url.endpoints.map_search.replace("{QUERY}", name)}`, { httpsAgent })
        whattheywanted = whattheywanted.find(x => x.name == name)
        if(!whattheywanted) {
            return null
        } else {
            return await require("./get")(whattheywanted.objectId)
        }
    }
}
const axios = require("axios")
const httpsAgent = new (require("https").Agent)({
    rejectUnauthorized: false
})
const url = require("../../data/config")
const _Map = require("../../class/Map")
/**
 * See 12 newest map (per page) in the gamemode 
 * @param {number} mode Game mode ( 1 = SIM | 2 = TC | 3 = MISC )
 * @param {number} page Page you want to see. start at zero (0)
 * @returns {(promise|Void)} Array of the map that successfully fetched
 * @example
 * const ic = require("ic-api")
 * ic.map.newest(1, 1).then(x => console.log(x)) //Array of newest simulation map on page 2
 */
module.exports = get = async (mode, page) => {
    if (!mode) throw new SyntaxError("Missing params for mode")
    if (!page) throw new SyntaxError("Missing params for page")
    
    const { data } = await axios.get(`${url.baseurl}${url.endpoints.map_new.replace("{MODE}", mode).replace("{PAGE}", page)}`, { httpsAgent })
    let arr = []
        
    data.forEach(x => arr.push(new _Map(x) ))
    return arr
}
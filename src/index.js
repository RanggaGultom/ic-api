let fns = {}
const path = require("path")

const props = require("fs").readdirSync(path.join(__dirname, "/function/"))
for(const prop of props) {
    fns[prop] = {}
    const funs = require("fs").readdirSync(path.join(__dirname, `/function/${prop}/`)).filter(x => x.endsWith(".js"))
    for(const fn of funs) {
    fns[prop][fn.split(".")[0]] = require(`./function/${prop}/${fn}`)
    }
}

module.exports = fns
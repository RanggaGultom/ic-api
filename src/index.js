let fns = {}

const props = require("fs").readdirSync("src/function/")
for(const prop of props) {
    fns[prop] = {}
    const funs = require("fs").readdirSync(`src/function/${prop}/`).filter(x => x.endsWith(".js"))
    for(const fn of funs) {
    fns[prop][fn.split(".")[0]] = require(`./function/${prop}/${fn}`)
    }
}

module.exports = fns
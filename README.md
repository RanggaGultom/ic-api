# ic-api

ic-api is a wrapper to connect you trough [Intersection Controller](https://play.google.com/store/apps/details?id=se.shadowtree.software.trafficbuilder) game datas.
You can get/search for users, trending maps and other things from the game.

# Example

**Before you get into these example, remember this package is using much asynchronomous function**

## Search a user
```js
const ic = require("ic-api")
ic.user.search("ShadowTree").then(x => console.log(x)) //will return array of Users named ShadowTree
```

## Search a map
```js
const ic = require("ic-api")
ic.map.search(1, "Diverging Diamond").then(x => console.log(x)) //will return array of Maps named Diverging Diamond in simulation mode
```

## Show map's comments
So you have to search a map, or anything from Map class. I recommend to use asynchronomous function than spamming ".then" callbacks.
```js
const ic = require("ic-api")
async function getComment() {
    const map = await ic.map.search(1, "Diverging Diamond") //search map
    const comments = await map.comments(5) //list a comment, they will come out in array
    return console.log(coments[4]) //choose one of the array, or do map or whatever you want
}
```

# External links

[NPM](https://www.npmjs.com/package/ic-api)

[Github](https://github.com/RanggaGultom/ic-api)

[Python version](https://github.com/Feeeeddmmmeee/intersection.py) (Made by [Feeeeddmmmeee](https://github.com/Feeeeddmmmeee))

[Discord server](https://iscl.cf)

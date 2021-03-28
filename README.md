# ic-api

ic-api is a wrapper to connect you trough [Intersection Controller](https://play.google.com/store/apps/details?id=se.shadowtree.software.trafficbuilder) game datas.
You can get/search for users, trending maps and other things from the game.

# Example

**Before you get into these example, remember this package is using much asynchronomous function**

```const ic = require("ic-api")```

## User search
```ic.user.search("ShadowTree").then(x => console.log(x)) //will return of User```

## Get users map

This thing require id, so make sure to request user search and then use the ObjectId to use this function
```ic.map.getAll(userid).then(x => console.log(x)) //will return array of Map```

# External links

[NPM](https://www.npmjs.com/package/ic-api)

[Github](https://github.com/RanggaGultom/ic-api)

[Python version](https://github.com/Feeeeddmmmeee/intersection.py)

[Discord server](https://iscl.cf)

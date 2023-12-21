define(function () {
    var internals = {}; // internal state
    var externals = {}; // external state

    let coins;
    internals.coins = function (){fetch("https://api.coinlore.net/api/tickers/?start=0&limit=100") // IT ONLY FETCH THE DATA WHEN THE PAGE IS LOADED..... I DONT WANT THAT.
        .then(function (result) {
            return result.json();
        }).then(function (data) {
            //console.log(data);
            coins = data.data;
            console.log("FETCHING:", coins);
            //return data;
        })
        .catch(function (error) {
            console.log("Error fetching coins data:", error);
        });
    }
    externals.getListCoins = function () {
        console.log("Service:" + internals.coins(), coins);
        return coins;
    }

    externals.getCoinData = function (id) {
        internals.coins(); //I thougth that I would need to invoke internals.coins everytime, I guess not :)
        console.log("GETCOIN",typeof coins)
        let coin = coins.filter(obj => obj.id == id); // as an example: id 90 = BTC;
        
        return coin;
    }

    return externals;
});

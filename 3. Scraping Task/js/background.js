chrome.runtime.onMessage.addListener(
    function(message, sender){
        switch(message.context){
            case config.keys.avgPrice:
                storageSet({key: config.keys.avgPrice, value: message.data});
                break;
            case config.keys.avgStars:
                storageSet({key: config.keys.avgStars, value: message.data});
                break;
        };
    }
);


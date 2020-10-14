init();

chrome.extension.onMessage.addListener(
    function(message, sender){
        switch(message.context){
        };
    }
);

async function init(){
    let testPrice = await storageGet(config.keys.avgPrice);
    document.getElementById("price").innerText = testPrice;
    let testStars = await storageGet(config.keys.avgStars);
    document.getElementById("stars").innerText = testStars;
    loading(false);
}

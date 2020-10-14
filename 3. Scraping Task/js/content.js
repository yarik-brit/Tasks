var priceStringToBackground = "";
var starsStringToBackground = "";

function parsePage(){
    var urlString = document.URL;
    var slash = '/';
    var urlArray = urlString.split(slash);
    
    if(urlArray.includes("dp")){
        if(document.readyState === 'interactive'){
            var dataDiv = document.getElementById("sims-consolidated-2_feature_div");
            
            setPrice(dataDiv);
            setStars(dataDiv);
            alert(priceStringToBackground);
            alert(starsStringToBackground);
            chrome.runtime.sendMessage(new ExtensionMessage(config.keys.avgPrice, priceStringToBackground));
            chrome.runtime.sendMessage(new ExtensionMessage(config.keys.avgStars, starsStringToBackground));
        }
    }
}

function setPrice(dataDiv){
    var priceElements = dataDiv.getElementsByClassName("p13n-sc-price");
    if(priceElements.length == 0){
        dataDiv == document.getElementById("sims-consolidated-3_feature_div");
        priceElements = dataDiv.getElementsByClassName("p13n-sc-price");
    }
    
    var avgPrice = 0.0;
    for (i = 0; i < priceElements.length; i++) {
        avgPrice += retrieveValue(priceElements[i].innerText, '$');
    }
    
    avgPrice = Math.floor(avgPrice / priceElements.length * 100) / 100 ;
    
    var text = " Average: $" + avgPrice;
    document.getElementById("priceblock_ourprice").innerHTML += text;
    
    priceStringToBackground = text;
}

function setStars(dataDiv){
    var starsElements = dataDiv.getElementsByClassName("a-icon a-icon-star");;
    if(starsElements.length == 0){
        dataDiv == document.getElementById("sims-consolidated-3_feature_div");
        starsElements = dataDiv.getElementsByClassName("a-icon a-icon-star");
    }
    var avgStars = 0.0;
    for (i = 0; i < starsElements.length; i++) {
        avgStars += parseFloat(starsElements[i].innerText.split(' ')[0]);
    }
    avgStars = Math.floor(avgStars / starsElements.length * 100) / 100 ;
    
    var starsDiv = document.getElementById("centerCol");
    var toAdd = starsDiv.getElementsByClassName("a-icon a-icon-popover")[0];
    var text = avgStars.toString() + " stars average";
    htmlElement = "<span>" + text + "</span>";
    toAdd.insertAdjacentHTML("beforebegin", htmlElement);
    
    starsStringToBackground = text;
} 

function retrieveValue(text, splitter){
    var str = text.split(splitter);
    return parseFloat(str[1].replace(',', '.'));
}

parsePage();
var urls = [];


chrome.runtime.onMessage.addListener(
    function(message, sender){
        switch(message.context){
            case config.keys.posts:
                getPosts(message);
                break;
            case config.keys.setBadgeText:
                setBadgeText(sender.tab);
                break;
            case "testURL":
                addURL(message);
                chrome.extension.sendMessage(new ExtensionMessage("testURL", urls));
                break;
        };
    }
);

function addURL(message){
    var url = new URL(message.data.text);
    console.log(url);
    if(url.hostname == "www.facebook.com" && (urls.length == 0 || url != urls[urls.length - 1]))
        urls.push(url);
}

//Hint chrome.extension.sendMessage(new ExtensionMessage({{context}}, {{data}} ));
//Hint sendPageMessage() for content_scripts. Find it in core.js



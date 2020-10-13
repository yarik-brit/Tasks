
chrome.runtime.onMessage.addListener(

    function(message, sender){
        switch(message.context){
            case config.keys.posts:
                getPosts(message);
                break;
            case config.keys.setBadgeText:
                setBadgeText(sender.tab);
        };
    }
);

//Hint chrome.extension.sendMessage(new ExtensionMessage({{context}}, {{data}} ));
//Hint sendPageMessage() for content_scripts. Find it in core.js


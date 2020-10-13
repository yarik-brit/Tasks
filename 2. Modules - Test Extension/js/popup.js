
init();

chrome.extension.onMessage.addListener(

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

async function init(){
    
    simpleNotify.notify("DANGER!!!", "danger", 3000);
    await forSeconds(3);
    await notify({title: "Notification", message: "I am test notification"});

    loading(false);
}






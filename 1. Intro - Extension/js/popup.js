
init();

chrome.extension.onMessage.addListener(

    function(message, sender){
        switch(message.context){
            // case config.keys.posts:
            //     getPosts(message);
            //     break;
            // case config.keys.setBadgeText:
            //     setBadgeText(sender.tab);
            //     break;
            case "testURL":
                showURLS(message.data);
                break;
        };
    }
);

chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    var activeTabId = activeTab.url;
    chrome.runtime.sendMessage(new ExtensionMessage("testURL", {text: activeTabId}));
 });

function showURLS(links){
    var body = document.getElementById("body");
    var text = "";
    links.forEach(function(item, index, array) {
        text += item + "\n";
      });
    body.innerHTML = text;
}

//Hint chrome.runtime.sendMessage(new ExtensionMessage({{context}}, {{data}} ));
async function init(){
    
    
    loading(false);





    

}








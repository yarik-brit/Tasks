function notify({title, message, icon="icon"}){
    let defaultID = 1;

    let options = {
        type: 'basic', 
        iconUrl: `images/${icon}.png`, 
        title: title, 
        message: message, 
      };
    return new Promise((resolve) => {
        chrome.notifications.create(
            'name-for-notification', options, function (){resolve()}
        );
    });
    
}

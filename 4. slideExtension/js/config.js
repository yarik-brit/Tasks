var config = {
    // base_url: "https://localhost:44336/",
    base_url: "http://contacts-extension.gear.host/",
    keys: {
        posts: "posts",
        setBadgeText: "setBadgeText",
        test: "test"
    },
    values: {
        
    },
    notifyOptionsFailed: {
        autoHide: true,
        autoHideDelay: 2500,
        hideDuration: 250
    }
};

class UserData{
    constructor(login, password, email){
        this.login = login;
        this.password = password;
        if(email!= null)
            this.email = email;
    }
};
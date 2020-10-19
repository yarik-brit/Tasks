import animation from './animation.js';

document.getElementById("submitRegister").addEventListener("click", function() {
    var userData = new UserData(document.getElementById("loginRegister").value, document.getElementById("passwordRegister").value, document.getElementById("emailRegister").value);
    
    registerUser(userData);
});

function registerUser(userData){
    console.log(userData);
    return new Promise((resolve, reject) =>{
        $.ajax({
            type: "POST",
            traditional: true,
            url: `${config.base_url}Account/RegisterUser`,
            data: JSON.stringify(userData),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (result){
                /* uncomment below when full functionality implemented */
                // if(!result.success){
                //     $.notify.defaults(config.notifyOptionsFailed);
                //     $("#submitRegister").notify(result.message, "error");
                // }
                // else{
                    window.parent.document.getElementById("swapButton").dataset.text = "cabinet";
                    window.parent.document.getElementById("swapButton").click();
                    $(window.parent.document.getElementById("header")).notify("Success! Verify your email!", "info", { position: "bottom center" });
                // }
                resolve(result);
            },
            error: function(err){
                reject(err);
            }
        });
    });
}
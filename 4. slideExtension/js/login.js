// $.notify.addStyle('font', {
//     html: "<div><span data-notify-text/></div>",
//     classes: {
//       base: {
//         "font-size": "10px"
//       }
//     }
//   });

document.getElementById("submitLogin").addEventListener("click", function() {
    var userData = new UserData(document.getElementById("loginLogin").value, document.getElementById("passwordLogin").value);
    loginUser(userData);
});

function loginUser(userData){
    console.log(userData);
    return new Promise((resolve, reject) => {
        $.ajax({
            type: "POST",
            traditional: true,
            url: `${config.base_url}Account/LoginUser`,
            data: JSON.stringify(userData),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (result){
                /* uncomment below when full functionality implemented */
                if(!result.success){
                    $.notify.defaults(config.notifyOptionsFailed);
                    $(window.parent.document.getElementById("header")).notify(result.message, "error");
                }
                else{
                    window.parent.document.getElementById("swapButton").dataset.text = "cabinet";
                    window.parent.document.getElementById("swapButton").click();
                    $(window.parent.document.getElementById("header")).notify("Login successful!", "success");
                }
                resolve(result);
            },
            error: function(err){
                alert("failed");
                reject(err);
            }
        });
    });
}
console.log("Hello world!");

// function test1 () {
//     console.log("Hello coders");
// }

document.getElementById("loginBtn").addEventListener("click", function () {
    // use .value to get the input text from an particular id

    let emailField = document.getElementById("loginEmailIn").value;
    let passField = document.getElementById("loginPassIn").value;

    // danger: do not verify user and pass on client side
    if (emailField === "angkon@halder.com" && passField === "hello") {
        // console.log("valid user");
        window.location.href = "bank.html";
    }
    else {
        // console.log("invalid user");
        alert("Invaild user and pass pair");
    }
}); // can't be called a predefined function with click
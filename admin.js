let authkeyInput = document.getElementById("authkeyvalue");
let successalert = document.getElementById("successalert")
let failurealert = document.getElementById("failurealert")
let nonadminalert = document.getElementById("nonadminalert")
successalert.style.display = "none"
failurealert.style.display = "none"
nonadminalert.style.display = "none"
let attempts = 0;

function adminOnly() {
    if (authkeyInput.value === "hotpuffpuff") {
        successalert.style.display = "block";
        failurealert.style.display = "none";
        nonadminalert.style.display = "none"
        window.location.href = "admindashboard2005july6625379182636547383294uqtersy37453.html";
    } else {
        failurealert.style.display = "block";
        successalert.style.display = "none";
        nonadminalert.style.display = "none"
        attempts++;
        if (attempts === 3) {
            nonadminalert.style.display = "block"
        }
    }
}

const showPasswordButton = document.getElementById("show-password");
showPasswordButton.addEventListener("click", function () {
    if (authkeyInput.type === "password") {
        authkeyInput.type = "text";
        showPasswordButton.textContent = "Hide";
    } else {
        authkeyInput.type = "password";
        showPasswordButton.textContent = "Show";
    }
});
const arrowIcon = document.querySelector("#arrow-icon");
const input = document.querySelector("#input");

arrowIcon.addEventListener("click", function() {
    const name = input.value.trim();
    if (name) {
        window.location.href = `mainPage.html?name=${encodeURIComponent(name)}`; // Redirect with name as query parameter
    } else {
        alert("Please enter your name");
    }
});

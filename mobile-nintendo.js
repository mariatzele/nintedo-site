function menubutton() {
    console.log("menu click")
    const navigation = document.getElementById("menu");
    if (navigation.style.display == "block") {
        navigation.style.display = "none";
    } else {
        navigation.style.display = "block";
    }
}

document.addEventListener("click", function(e) {
    var navigation = document.getElementById("menu");
    var menuIcon = document.getElementById("menu-icon");
    if (e.target !== menuIcon && e.target !== navigation && !navigation.contains(e.target)) {
        navigation.style.display = "none";
    }
})

var products = document.getElementById("searchbar")
var searching = document.getElementById("search")
var productslist = products.querySelectorAll(".search-products")

searching.addEventListener("keyup", function(event) {
    var entered = event.target.value.toUpperCase()

    for (var count = 0; count < productslist.length; count++) {
        var productName = productslist[count].querySelector("p").textContent.toUpperCase()

        if (productName.indexOf(entered) < 0) {
            productslist[count].style.display = "none"
        } else {
            productslist[count].style.display = "block"
        }
    }
})

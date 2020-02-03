let whiskey = items.results
  .map(function(item) {
    let code = ""
    if (item.currency_code === "USD") {
      code += "$"
    } else if (item.currency_code === "EUR") {
      code += "&euro;"
    } else if (item.currency_code === "GBP") {
      code += "&pound;"
    }
    return `
  <div id="products">
    <a href=${item.url}><div class="obj">
      <img class="mainImg" src=${item.Images[0].url_170x135} />
      <span class="shopName">${item.Shop.shop_name}</span>
      <img class="rating" src="http://clipart-library.com/images_k/5-stars-transparent-background/5-stars-transparent-background-20.png" />
      <p class="title">${item.title}</p>
      <p class="price">${code}${item.price}</p>
      <img class="heart" src="assets/heart.png" />
  </div></a>
</div>`
  })
  .join("")
document.querySelector(".container").innerHTML = whiskey

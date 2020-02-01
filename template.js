let whiskey = items.map(function(item) {
  return `<div id="products">
  <div class="obj">
    <img src="https://placehold.it/200" />
    <p class="title">${item.title}</p>
    <p class="price">some price</p>
</div>`
})

document.querySelector(".container").innerHTML = whiskey

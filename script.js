document.addEventListener("DOMContentLoaded", function () {
    let ul = document.querySelector(".detailsUl");
    let detailsbtn = document.querySelector(".details");
    let viewDetails = true;
    let cartCount = 0;
    let cartCountSpan = document.querySelector(".cart-count");
    let addToCartButton = document.querySelector(".add-to-cart");
  
    detailsbtn.addEventListener("click", () => {
      if (viewDetails) {
        detailsbtn.innerText = "Hide details";
        viewDetails = false;
      } else {
        detailsbtn.innerText = "View details";
        viewDetails = true;
      }
      ul.classList.toggle("hidden");
    });
  
    addToCartButton.addEventListener("click", () => {
      cartCount++;
      cartCountSpan.innerText = cartCount;
    });
  
    document.querySelector('.hamburger').addEventListener('click', () => {
      document.querySelector('.navbar-container').classList.toggle('responsive');
    });
  });
  
  function clickingimg(smallImg) {
    let fullImg = document.getElementById("imagebox");
    fullImg.src = smallImg.src;
  }
  
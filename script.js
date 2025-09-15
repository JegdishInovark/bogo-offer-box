document.addEventListener("DOMContentLoaded", function () {
  const offerCards = document.querySelectorAll(".offer-card");
  const radios = document.querySelectorAll('input[type="radio"][name="unit"]');
  const totalPrice = document.querySelector(".total-price");
  const priceMap = { 1: "$10.00 USD", 2: "$18.00 USD", 3: "$24.00 USD" };

  radios.forEach((radio) => {
    radio.addEventListener("change", function () {
      offerCards.forEach((card) => {
        card.classList.remove("selected");
        card.querySelector(".options").style.display = "none";
      });
      let card = radio.closest(".offer-card");
      card.classList.add("selected");
      card.querySelector(".options").style.display = "block";
      totalPrice.textContent = "Total : " + priceMap[card.dataset.unit];
    });
  });

  // Allow card click also to toggle box
  offerCards.forEach((card) =>
    card.addEventListener("click", () => {
      card.querySelector('input[type="radio"]').checked = true;
      card
        .querySelector('input[type="radio"]')
        .dispatchEvent(new Event("change"));
    })
  );
});

const billingOptions = document.querySelectorAll(".billing-option");
const prices = document.querySelectorAll(".price");
const priceDetails = document.querySelectorAll(".price-detail[data-monthly-detail]");
const billingCaption = document.querySelector("#billing-caption");

function setBillingPeriod(period) {
  const isYearly = period === "yearly";

  billingOptions.forEach((option) => {
    const isActive = option.dataset.period === period;
    option.classList.toggle("is-active", isActive);
    option.setAttribute("aria-pressed", String(isActive));
  });

  prices.forEach((price) => {
    price.classList.add("is-changing");
    price.textContent = price.dataset[period];
    window.requestAnimationFrame(() => {
      price.classList.remove("is-changing");
    });
  });

  priceDetails.forEach((detail) => {
    detail.textContent = detail.dataset[`${period}Detail`];
  });

  billingCaption.textContent = isYearly
    ? "One payment each year. That’s 25% more room to grow."
    : "Flexible monthly billing. No surprises.";
}

billingOptions.forEach((option) => {
  option.addEventListener("click", () => {
    setBillingPeriod(option.dataset.period);
  });
});

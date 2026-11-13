
const BOT_USERNAME = "@aurafarmer162bot";

function order(product, price) {
  const message = `Hello! I want to enquire about ${product}, price ₹${price}.`;

  const url = `https://t.me/${BOT_USERNAME}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
}

function contactSupport() {
  window.open(`https://t.me/${BOT_USERNAME}`, "_blank");
}

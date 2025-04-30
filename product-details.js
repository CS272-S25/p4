const productId = sessionStorage.getItem("selectedProductId");

const workoutGearList = [
  {
    id: "gear1",
    name: "Adjustable Dumbbells",
    brand: "Bowflex",
    price: "$299",
    rating: 4.8,
    description: "Space-saving adjustable dumbbells with weights from 5 to 52.5 lbs.",
    image: "images/dumbbells.jpg"
  },
  {
    id: "gear2",
    name: "Yoga Mat",
    brand: "Lululemon",
    price: "$88",
    rating: 4.5,
    description: "High-grip, sweat-resistant yoga mat perfect for hot yoga.",
    image: "images/yoga-mat.jpg"
  },
  {
    id: "gear3",
    name: "Resistance Bands Set",
    brand: "Fit Simplify",
    price: "$25",
    rating: 4.2,
    description: "Set of 5 resistance bands with varying levels for strength training.",
    image: "images/resistance-bands.jpg"
  },
  {
    id: "gear4",
    name: "Kettlebell",
    brand: "Rogue Fitness",
    price: "$70",
    rating: 4.7,
    description: "Powder-coated cast iron kettlebell, ideal for swings and squats.",
    image: "images/kettlebell.jpg"
  }
];

const product = workoutGearList.find(item => item.id === productId);
const container = document.getElementById('product-details');

if (product) {
  container.innerHTML = `
    <div style="display: flex; justify-content: center; margin-top: 2rem;">
      <sl-card class="product-card" style="max-width: 600px; text-align: center; padding: 1rem;">
        <img src="${product.image}" alt="${product.name}" style="max-width: 100%; border-radius: 10px;" />
        <h2 style="margin: 1rem 0 0.5rem 0;">${product.name}</h2>
        <p><strong>Brand:</strong> ${product.brand}</p>
        <p><strong>Price:</strong> ${product.price}</p>
        <sl-rating value="${product.rating}" readonly style="margin: 0.5rem auto;"></sl-rating>
        <p style="margin-top: 1rem;">${product.description}</p>
        <a href="gear.html" style="display: inline-block; margin-top: 1rem; color: #7faaff;">← Back to Products</a>
      </sl-card>
    </div>
  `;
} else {
  container.innerHTML = "<p>No product selected. Please go back to the product list.</p>";
}




const container = document.getElementById("card-container");
const openButton = document.getElementById("open-drawer-btn");
const drawer = document.querySelector(".drawer-overview");
const gearList = [];

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

// Add gear to drawer list
function addToGearList(item) {
  if (!gearList.find(g => g.id === item.id)) {
    gearList.push(item);
    renderGearDrawer();
  }
}

// Remove gear from list and update
function renderGearDrawer() {
  drawer.innerHTML = `
    <h2 style="margin: 1rem;">My Gear List</h2>
    <div class="drawer-list" style="padding: 1rem;">
      ${
        gearList.length === 0
          ? 'Your gear list is empty'
          : gearList.map((item, index) => `
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                <div><strong>${item.name}</strong> - <small>${item.price}</small></div>
                <sl-button size="small" variant="danger" class="remove-btn" data-index="${index}">Delete</sl-button>
              </div>
            `).join('')
      }
    </div>
    <sl-button slot="footer" variant="primary">Close</sl-button>
  `;

  drawer.querySelector('sl-button[variant="primary"]').addEventListener('click', () => drawer.hide());

  drawer.querySelectorAll('.remove-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const index = parseInt(btn.dataset.index);
      gearList.splice(index, 1);
      renderGearDrawer();
    });
  });
}

// Render cards to DOM
workoutGearList.forEach((gear) => {
  const card = document.createElement("sl-card");
  card.className = "card-overview";

  card.innerHTML = `
    <img slot="image" src="${gear.image}" alt="${gear.name}" />
    <div class="card-content">
      <strong>${gear.name}</strong>
      <small>${gear.brand} | ${gear.price}</small>
      <p>${gear.description}</p>
    </div>
    <div slot="footer">
      <sl-button variant="primary" pill>Add</sl-button>
      <sl-rating value="${gear.rating}" readonly></sl-rating>
    </div>
  `;

  card.querySelector("sl-button").addEventListener("click", (event) => {
    event.stopPropagation();
    addToGearList(gear);
  });

  container.appendChild(card);
});

openButton.addEventListener("click", () => drawer.show());

const container = document.getElementById('card-container');
const openButton = document.getElementById('open-drawer-btn');
const drawer = document.querySelector('.drawer-overview');
let weight = document.getElementById("weight")
let height = document.getElementById("height")
let mylist = [];
const workouts = [
  {
    name: 'Running',
    time: 40,
    img: 'fitnessImg/pexels-mastercowley-1199590.jpg',
    cal: 300
  },
  {
    name: 'Crunch',
    time: 30,
    img: 'fitnessImg/pexels-pixabay-416778.jpg',
    cal: 150
  },
  {
    name: 'Dumbbell',
    time: 30,
    img: 'fitnessImg/pexels-anush-1229356.jpg',
    cal: 126
  }
];

function addToMylist(work) {
  if (!mylist.find(item => item.name === work.name)) {
    mylist.push(work);
    renderMyList();
  }
}

function renderMyList() {
  drawer.innerHTML = `
    <h2 style="margin: 1rem;">My list</h2>
    <div class="drawer-list" style="padding: 1rem;">
      ${
        mylist.length === 0
          ? 'Your list is empty'
          : mylist.map((item, index) => `
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                <div><strong>${item.name}</strong> - <small>${item.time}</small></div>
                <sl-button size="small" variant="danger" class="remove-btn" data-index="${index}">Delete</sl-button>
              </div>
            `).join('')
      }
    </div>
    <sl-button slot="footer" variant="primary">Close</sl-button>
  `;

  const closeButton = drawer.querySelector('sl-button[variant="primary"]');
  closeButton.addEventListener('click', () => drawer.hide());

  drawer.querySelectorAll('.remove-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const index = parseInt(btn.dataset.index);
      mylist.splice(index, 1);
      renderMyList();
    });
  });
}



for (const work of workouts) {
  const card = document.createElement('sl-card');
  card.className = 'card-overview';

  card.innerHTML = `
    <img slot="image" src="${work.img}" alt="${work.name}" />
    <div class="card-content">
      <strong>${work.name}</strong>
      <small>${work.time}min</small>
      <small>Calories: ${work.cal}</small>
    </div>
    <div slot="footer">
      <sl-button variant="primary" pill>Add</sl-button>
      <sl-rating value="4"></sl-rating>
    </div>
  `;

  card.querySelector('sl-button[variant="primary"]').addEventListener('click', (event) => {
    event.stopPropagation();
    addToMylist(work);
    console.log(mylist);
  });

  container.appendChild(card);
}

openButton.addEventListener('click', () => drawer.show());


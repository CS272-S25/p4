const container = document.getElementById('card-container');
const openButton = document.getElementById('open-drawer-btn');
const drawer = document.querySelector('.drawer-overview');
let weight = document.getElementById("weight")
let height = document.getElementById("height")
const bmiOutput = document.getElementById('bmi-output');
let mylist = [];
const savedList = localStorage.getItem('myWorkoutList');
if (savedList) {
  mylist = JSON.parse(savedList);
  renderMyList();
}

let myRatings = {};

const savedRatings = localStorage.getItem('myWorkoutRatings');
if (savedRatings) {
  myRatings = JSON.parse(savedRatings);
}
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
  },
  {
    name: "Push-up",
    time: 30,
    img: "fitnessImg/pexels-keiji-yoshiki-31563-176782.jpg",
    cal: 18
  }
];

function addToMylist(work) {
  if (!mylist.find(item => item.name === work.name)) {
    mylist.push(work);
    localStorage.setItem('myWorkoutList', JSON.stringify(mylist));
    renderMyList();
  } else {
    document.getElementById("card-warning-alert").show();
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
      localStorage.setItem('myWorkoutList', JSON.stringify(mylist));
      renderMyList();
    });
  });  
}

function updateBMI() {

  const h = parseFloat(height.value);
  const w = parseFloat(weight.value);

  if (!isNaN(h) && !isNaN(w) && h > 0) {
    const bmi = (w / ((h / 100) ** 2)).toFixed(1);
    const status = getBMIStatus(bmi);
    bmiOutput.textContent = `Your BMI: ${bmi} (${status})`;
    bmiOutput.style.color = getBMIColor(bmi);
  } else {
    bmiOutput.textContent = '';
  }
}

function getBMIStatus(bmi) {
  bmi = parseFloat(bmi);
  if (bmi < 18.5) {
    return "Underweight";
  }
  if (bmi < 24.9) {
    return "Normal";
  }
  if (bmi < 29.9){
    return "Overweight";
  } else{
    return "Obese";
  }
  
}

function getBMIColor(bmi) {
  bmi = parseFloat(bmi);
  if (bmi < 18.5) return "#ffd166";
  if (bmi < 24.9) return "#06d6a0";
  if (bmi < 29.9) return "#f9c74f";
  return "#ef476f";
}

height.addEventListener('input', updateBMI);
weight.addEventListener('input', updateBMI);
updateBMI();


for (const work of workouts) {
  const card = document.createElement('sl-card');
  card.className = 'card-overview';

  const ratingValue = myRatings[work.name] || 4;

  card.innerHTML = `
    <img slot="image" src="${work.img}" alt="${work.name}" />
    <div class="card-content">
      <strong>${work.name}</strong>
      <small>${work.time}min</small>
      <small>Calories: ${work.cal}</small>
    </div>
    <div slot="footer">
      <sl-button variant="primary" pill>Add</sl-button>
      <sl-rating value="${ratingValue}" class="rating-${work.name}" max="5"></sl-rating>
    </div>
  `;


  const rating = card.querySelector(`.rating-${work.name}`);
  rating.addEventListener('sl-change', (event) => {
    const newRating = event.target.value;
    myRatings[work.name] = newRating;
    localStorage.setItem('myWorkoutRatings', JSON.stringify(myRatings));
  });

  card.querySelector('sl-button[variant="primary"]').addEventListener('click', (event) => {
    event.stopPropagation();
    addToMylist(work);
    console.log(mylist);
  });

  container.appendChild(card);
}

openButton.addEventListener('click', () => drawer.show());


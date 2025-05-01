const container = document.getElementById('card-container');
const openButton = document.getElementById('open-drawer-btn');
const drawer = document.querySelector('.drawer-overview');

let mylist = []; // add as my saved recipe
const savedList = localStorage.getItem('myRecipeList');
if (savedList) {
  mylist = JSON.parse(savedList);
  renderMyList();
}

// recipe definition
const recipes = [
    {
      name: 'Baked Risotto',
      time: 50,
      tags: ['GF', 'HF', 'V'], // Gluten-Free, High-Fiber, Vegetarian
      img: 'https://www.skinnytaste.com/wp-content/uploads/2025/04/Baked-Risotto-with-Asparagus-and-Peas-10-260x390.jpg',
      link: '/baked-risotto'
    },
    {
      name: 'Baked Cod',
      time: 35,
      tags: ['HP', 'LC', 'DF'], // High-Protein, Low-Carb, Dairy-Free
      img: 'https://www.skinnytaste.com/wp-content/uploads/2025/03/Baked-Cod-6-260x390.jpg',
      link: '/baked-cod'
    },
    {
      name: 'Chicken Fajitas',
      time: 40,
      tags: ['GF', 'KF'], // Gluten-Free, Kid-Friendly
      img: 'https://www.skinnytaste.com/wp-content/uploads/2013/05/Chicken-Fajitas-10-260x390.jpg',
      link: '/chicken-fajitas'
    },
    {
      name: 'Mediterranean Octopus Salad',
      time: 50,
      tags: ['DF', 'GF', 'HP', 'LC', 'W'], // Dairy-Free, Gluten-Free, High-Protein, Low-Carb, Whole30
      img: 'https://www.skinnytaste.com/wp-content/uploads/2025/03/Mediterranean-Octopus-Salad-10-260x390.jpg',
      link: '/octopus-salad'
    }
  ];

function addToMylist(recipe) {
    if (!mylist.find(item => item.name === recipe.name)) {
      mylist.push(recipe);
      localStorage.setItem('myRecipeList', JSON.stringify(mylist));
      renderMyList();
    } else {
      document.getElementById("card-warning-alert").show();
    }
}

// add card
for (const recipe of recipes) {
    const card = document.createElement('sl-card');
    card.className = 'card-overview';
  
    card.innerHTML = `
      <img slot="image" src="${recipe.img}" alt="${recipe.name}" style="cursor:pointer;" onclick="window.open('${recipe.link}.html', '_blank', 'noopener');"/>
      <div class="card-content">
        <a href="${recipe.link}.html" style="text-decoration: none; color: black;">
          <strong style="color: #ccc; font-size: 13px;">${recipe.name}</strong>
        </a>
        <div class="tag-group" style="margin-top: 6px;">
            ${recipe.tags.map(tag => `<span class="tag tag-${tag.toLowerCase()}">${tag}</span>`).join('')}
        </div>
        <div style="margin-top: 6px;">⏱ ${recipe.time} mins</div>
      </div>
      <div slot="footer">
        <sl-button variant="primary" pill>Add</sl-button>
        <sl-rating value="4"></sl-rating>
      </div>
    `;

    card.querySelector('sl-button[variant="primary"]').addEventListener('click', (event) => {
      event.stopPropagation();
      addToMylist(recipe);
      console.log(mylist);
    });

    container.appendChild(card);
}

  function renderMyList() {
    drawer.innerHTML = `
      <h2 style="margin: 1rem;">Saved Recipe</h2>
      <div class="drawer-list" style="padding: 1rem;">
        ${
          mylist.length === 0
            ? 'Your list is empty'
            : mylist.map((item, index) => `
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                  <div>
                    <strong>${item.name}</strong>
                  </div>
                  <sl-button size="small" variant="primary" class="see-details" data-link="${item.link}.html">See Details</sl-button>
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
        localStorage.setItem('myRecipeList', JSON.stringify(mylist));
        renderMyList();
      });
    });  
  }

  document.addEventListener('click', (event) => {
    if (event.target.classList.contains('see-details')) {
      const link = event.target.dataset.link;
      if (link) {
        window.open(link, '_blank', 'noopener');
      }
    }
  });  

  openButton.addEventListener('click', () => drawer.show());

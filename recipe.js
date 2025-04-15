const container = document.getElementById('card-container');
const openButton = document.getElementById('open-drawer-btn');
const drawer = document.querySelector('.drawer-overview');
openButton.addEventListener('click', () => drawer.show());
let mylist = [];
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
  
  for (const recipe of recipes) {
    const card = document.createElement('sl-card');
    card.className = 'card-overview';
  
    card.innerHTML = `
      <img slot="image" src="${recipe.img}" alt="${recipe.name}" />
      <div class="card-content">
        <a href="${recipe.link}" style="text-decoration: none; color: black;">
          <strong style="color: #ccc; font-size: 16px;">${recipe.name}</strong>
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
  
    container.appendChild(card);
  }
  

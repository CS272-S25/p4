const list = JSON.parse(localStorage.getItem('myWorkoutList') || '[]');
const doneMap = JSON.parse(localStorage.getItem('workoutDone') || '{}');
let totalTime = 0;
let totalCal = 0;

list.forEach(w => {
    totalTime += w.time;
    totalCal += w.cal;
});

const count = list.length;
const avgCal = count ? Math.round(totalCal / count) : 0;

document.getElementById('badge-count').textContent = count;
document.getElementById('badge-time').textContent = totalTime + ' min';
document.getElementById('badge-cal').textContent = totalCal + ' kcal';
document.getElementById('badge-avg').textContent = avgCal + ' kcal';

const tbody = document.getElementById('workout-list');
list.forEach(w => {
    const tr = document.createElement('sl-tr');
    const isDone = !!doneMap[w.name];
    tr.innerHTML = `
    <sl-td>
      <sl-checkbox data-name="${w.name}" ${isDone ? 'checked' : ''}></sl-checkbox>
    </sl-td>
    <sl-td>${w.name}</sl-td>
    <sl-td>${w.time}</sl-td>
    <sl-td>${w.cal}</sl-td>
    `;
    const cb = tr.querySelector('sl-checkbox');
    cb.addEventListener('sl-change', e => {
        doneMap[w.name] = e.target.checked;
        localStorage.setItem('workoutDone', JSON.stringify(doneMap));

        if (e.target.checked) {
            tr.style.opacity = '0.6';
            tr.style.textDecoration = 'line-through';
          } else {
            tr.style.opacity = '';
            tr.style.textDecoration = '';
          }
        });
    if (isDone) {
        tr.style.opacity = '0.6';
        tr.style.textDecoration = 'line-through';
    }
        
    tbody.appendChild(tr);
});

document.getElementById('clear-btn').addEventListener('click', () => {
    localStorage.removeItem('myWorkoutList');
    location.reload();
});


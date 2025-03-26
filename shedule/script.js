// Schedule data (normally this would come from a database or API)
const scheduleData = [
    { title: "Séminaire sur la technologie", time: "10:30 - 12:00", description: "Présentation sur les dernières innovations technologiques.", status: "En cours" },
    { title: "Réunion marketing", time: "13:00 - 14:30", description: "Discussion sur la stratégie marketing de l'année.", status: "À venir" },
    { title: "Formation sur la sécurité", time: "15:00 - 17:00", description: "Formation obligatoire pour les nouveaux employés.", status: "Passé" },
];

// Get the container for the schedule cards
const container = document.querySelector('.container');

// Function to create and append schedule cards
function generateScheduleCards(data) {
    data.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('schedule-card');

        // Add the status class based on the status
        const statusClass = item.status.toLowerCase().replace(' ', '-');

        card.innerHTML = `
            <div>
                <h2 class="schedule-title">${item.title}</h2>
                <p class="schedule-time">${item.time}</p>
                <p class="schedule-status ${statusClass}">${item.status}</p>
                <p class="schedule-description">${item.description}</p>
            </div>
        `;

        container.appendChild(card);
    });
}

// Generate schedule cards on page load
window.onload = () => {
    generateScheduleCards(scheduleData);
};

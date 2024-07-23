document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const event = {
        id: params.get('id'),
        name: params.get('name'),
        image: params.get('image'),
        description: params.get('description'),
        category: params.get('category'),
        place: params.get('place'),
        capacity: params.get('capacity'),
        assistance: params.get('assistance'),
        price: params.get('price')
    };

    const container = document.getElementById('event-details');
    const content = `
        <div class="event-details-container">
            <img src="${event.image}" class="event-image" alt="${event.name}">
            <div class="event-info">
                <h2 class="card-title">${event.name}</h2>
                <p class="card-text">${event.description}</p>
                <p class="card-text"><strong>Category:</strong> ${event.category}</p>
                <p class="card-text"><strong>Place:</strong> ${event.place}</p>
                <p class="card-text"><strong>Capacity:</strong> ${event.capacity}</p>
                <p class="card-text"><strong>Assistance:</strong> ${event.assistance}</p>
                <p class="card-text"><strong>Price:</strong> $${event.price}</p>
            </div>
        </div>
    `;
    container.innerHTML = content;
});

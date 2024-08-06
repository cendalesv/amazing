// module/eventFunctions.js
export function displayEvents(events, containerSelector) {
    const eventsContainer = document.querySelector(containerSelector);

    if (!eventsContainer) {
        console.error(`Container not found: ${containerSelector}`);
        return;
    }

    eventsContainer.innerHTML = '';

    if (events.length === 0) {
        eventsContainer.innerHTML = '<p>No events found.</p>';
        return;
    }

    events.forEach(event => {
        const eventCard = `
            <div class="col-lg-4 col-md-6 mb-4">
                <div class="card">
                    <img src="${event.image}" class="card-img-top" alt="${event.name}">
                    <div class="card-body d-flex flex-column" style="position: relative; padding-bottom: 4rem;">
                        <div class="mb-auto">
                            <h5 class="card-title">${event.name}</h5>
                            <p class="card-text">${event.description}</p>
                        </div>
                        <div class="position-absolute bottom-0 start-0 p-3">
                            <p class="card-text mb-0"><strong>Price:</strong> $${event.price}</p>
                        </div>
                        <div class="position-absolute bottom-0 end-0 p-3">
                            <a href="details.html?id=${event.id}&name=${event.name}&image=${event.image}&description=${event.description}&category=${event.category}&place=${event.place}&capacity=${event.capacity}&assistance=${event.assistance}&price=${event.price}" class="btn btn-primary">Details</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
        eventsContainer.innerHTML += eventCard;
    });
}

import { fetchEvents } from '../module/funciones.js';
import { displayEvents } from '../module/eventFunctions.js';
import { filterEvents } from '../module/filterEvents.js';
import { getUniqueCategories } from '../module/utils.js';
import { createCategoryCheckboxes } from '../module/categoryFunctionsCheck.js';  // Importa la función

document.addEventListener('DOMContentLoaded', () => {
    const checkboxContainer = document.getElementById('checkbox-container');
    const searchInput = document.querySelector('input[type="search"]');
    const eventsContainer = document.getElementById('events-container');
    let eventsData = [];

    // Fetch event data
    fetchEvents()
        .then(events => {
            eventsData = events;
            const categories = getUniqueCategories(eventsData);
            createCategoryCheckboxes(categories, checkboxContainer, filterEvents, eventsData, searchInput, displayEvents);  // Llama a la función importada
            displayEvents(eventsData, '#events-container');
        })
        .catch(error => console.error('Error fetching events:', error));

    // Event listener for search input
    searchInput.addEventListener('input', () => filterEvents(eventsData, checkboxContainer, searchInput, e => e, displayEvents, '#events-container'));
});

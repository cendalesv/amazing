import { fetchData } from '../module/funciones.js';
import { displayEvents } from '../module/eventFunctions.js';
import { filterEvents } from '../module/filterEvents.js';
import { getUniqueCategories } from '../module/utils.js';
import { renderCategoryCheckboxes } from '../module/renderCheck.js';

document.addEventListener('DOMContentLoaded', async () => {
    const API_URL = 'https://aulamindhub.github.io/amazing-api/events.json';
    const filterCheckboxesContainer = document.querySelector('.d-flex');
    const searchInput = document.querySelector('input[type="search"]');
    const eventsContainer = document.querySelector('.row.mt-4');

    const BASE_DATE = new Date('2023-03-10');
    let eventsData = [];
    let uniqueCategories = [];

    // Fetch event data
    eventsData = await fetchData(API_URL);
    uniqueCategories = getUniqueCategories(eventsData);
    renderCategoryCheckboxes(uniqueCategories, '.d-flex');
    displayEvents(filterPastEvents(eventsData), '.row.mt-4');

    // Event listener for checkboxes
    filterCheckboxesContainer.addEventListener('change', () => filterEvents(eventsData, filterCheckboxesContainer, searchInput, filterPastEvents, displayEvents, '.row.mt-4'));

    // Event listener for search input
    searchInput.addEventListener('input', () => filterEvents(eventsData, filterCheckboxesContainer, searchInput, filterPastEvents, displayEvents, '.row.mt-4'));

    function filterPastEvents(events) {
        return events.filter(event => new Date(event.date) < BASE_DATE);
    }
});

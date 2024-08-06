import { fetchData } from '../module/funciones.js';
import { displayEvents } from '../module/eventFunctions.js';
import { filterEvents } from '../module/filterEvents.js';
import { getUniqueCategories } from '../module/utils.js';
import { renderCategoryCheckboxes } from '../module/renderCheck.js';

document.addEventListener('DOMContentLoaded', async () => {
    const API_URL = 'https://aulamindhub.github.io/amazing-api/events.json';
    const searchInput = document.querySelector('input[type="search"]');
    const eventsContainer = document.querySelector('.row.mt-4');
    const checkboxContainer = document.querySelector('.d-flex.flex-nowrap.overflow-auto');

    const BASE_DATE = new Date('2023-03-10');
    let eventsData = [];
    let uniqueCategories = [];

    // Fetch event data
    eventsData = await fetchData(API_URL);
    uniqueCategories = getUniqueCategories(eventsData);
    renderCategoryCheckboxes(uniqueCategories, '.d-flex.flex-nowrap.overflow-auto');
    displayEvents(filterUpcomingEvents(eventsData), '.row.mt-4');

    // Event listener for checkboxes
    checkboxContainer.addEventListener('change', () => filterEvents(eventsData, checkboxContainer, searchInput, filterUpcomingEvents, displayEvents, '.row.mt-4'));

    // Event listener for search input
    searchInput.addEventListener('input', () => filterEvents(eventsData, checkboxContainer, searchInput, filterUpcomingEvents, displayEvents, '.row.mt-4'));

    function filterUpcomingEvents(events) {
        return events.filter(event => new Date(event.date) > BASE_DATE);
    }
});

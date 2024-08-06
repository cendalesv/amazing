export function filterEvents(eventsData, filterCheckboxesContainer, searchInput, filterFunction, displayFunction, containerSelector) {
    const selectedCategories = Array.from(filterCheckboxesContainer.querySelectorAll('.form-check-input'))
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);

    const searchQuery = searchInput.value.toLowerCase();
    const filteredEvents = filterFunction(eventsData);

    const finalFilteredEvents = filteredEvents.filter(event => {
        const isCategoryMatch = selectedCategories.length === 0 || selectedCategories.includes(event.category);
        const isSearchMatch = event.name.toLowerCase().includes(searchQuery);

        return isCategoryMatch && isSearchMatch;
    });

    displayFunction(finalFilteredEvents, containerSelector);
}

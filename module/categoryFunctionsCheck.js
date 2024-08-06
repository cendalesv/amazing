export function createCategoryCheckboxes(categories, checkboxContainer, filterEvents, eventsData, searchInput, displayEvents) {
    categories.forEach(category => {
        const checkboxWrapper = document.createElement('div');
        checkboxWrapper.classList.add('form-check', 'form-check-inline');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('form-check-input');
        checkbox.id = `category-${category}`;
        checkbox.value = category;
        checkbox.addEventListener('change', () => filterEvents(eventsData, checkboxContainer, searchInput, e => e, displayEvents, '#events-container'));

        const label = document.createElement('label');
        label.classList.add('form-check-label');
        label.htmlFor = `category-${category}`;
        label.textContent = category;

        checkboxWrapper.appendChild(checkbox);
        checkboxWrapper.appendChild(label);
        checkboxContainer.appendChild(checkboxWrapper);
    });
}

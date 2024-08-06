

export function getUniqueCategories(events) {
    const categories = events.map(event => event.category);
    return [...new Set(categories)];
}

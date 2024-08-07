// Fetch
export const fetchData = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.events;
    } catch (error) {
        console.error('Error fetching events:', error);
        return [];
    }
};

//fetch
const API_URL = 'https://aulamindhub.github.io/amazing-api/events.json';

/**
 * Obtiene datos de eventos de la API
 * @returns {Promise<Array>} Una promesa que se resuelve en una serie de eventos.
 */
export async function fetchEvents() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.events;
    } catch (error) {
        console.error('Error fetching events:', error);
        throw error;
    }
}





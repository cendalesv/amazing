async function renderTable() {
    try {
        let response = await fetch("https://aulamindhub.github.io/amazing-api/events.json");
        let data = await response.json();
        let sortedByCapacity = data.events.sort((a, b) => b.capacity - a.capacity);
        let pastData = data.events.filter(element => element.date < data.currentDate);
        let pastCategories = pastData.map(element => element.category);
        let setPastCategories = new Set(pastCategories);
        let upcomingData = data.events.filter(element => element.date > data.currentDate);
        let upcomingCategories = upcomingData.map(element => element.category);
        let setUpcomingCategories = new Set(upcomingCategories);
        let percentageArray = [];
        pastData.forEach(element => {
            let percentageItem = {
                name: element.name,
                percentage: (element.assistance / element.capacity) * 100
            };
            percentageArray.push(percentageItem);
        });
        let sortedPercentajeArray = percentageArray.sort((a, b) => b.percentage - a.percentage);
        
        // Update the table cells with the highest and lowest attendance percentages and largest capacity
        document.getElementById("highest-attendance").innerText = `${sortedPercentajeArray[0].name} (${sortedPercentajeArray[0].percentage.toFixed(2)}%)`;
        document.getElementById("lowest-attendance").innerText = `${sortedPercentajeArray[sortedPercentajeArray.length - 1].name} (${sortedPercentajeArray[sortedPercentajeArray.length - 1].percentage.toFixed(2)}%)`;
        document.getElementById("largest-capacity").innerText = `${sortedByCapacity[0].name}`;
        
        // Update upcoming events statistics by category
        let upcomingCategoryIndex = 1;
        setUpcomingCategories.forEach(category => {
            let categoryEvents = upcomingData.filter(element => category == element.category);
            let gains = categoryEvents.map(element => element.estimate * element.price);
            let revenue = gains.reduce((acc, gain) => acc + gain);
            let percentage = categoryEvents.map(element => (element.estimate / element.capacity) * 100);
            let percentageReduce = percentage.reduce((acc, percentage) => acc + percentage);
            let percentageOfAttendance = percentageReduce / categoryEvents.length;
            if (upcomingCategoryIndex <= 6) {
                document.getElementById(`upcoming-category-${upcomingCategoryIndex}`).innerText = category;
                document.getElementById(`upcoming-revenue-${upcomingCategoryIndex}`).innerText = `$${Math.round(revenue)}`;
                document.getElementById(`upcoming-attendance-${upcomingCategoryIndex}`).innerText = `${percentageOfAttendance.toFixed(2)}%`;
                upcomingCategoryIndex++;
            }
        });
        
        // Update past events statistics by category
        let pastCategoryIndex = 1;
        setPastCategories.forEach(category => {
            let categoryEvents = pastData.filter(element => category == element.category);
            let gains = categoryEvents.map(element => element.assistance * element.price);
            let revenue = gains.reduce((acc, gain) => acc + gain);
            let percentage = categoryEvents.map(element => (element.assistance / element.capacity) * 100);
            let percentageReduce = percentage.reduce((acc, percentage) => acc + percentage);
            let percentageOfAttendance = percentageReduce / categoryEvents.length;
            if (pastCategoryIndex <= 7) {
                document.getElementById(`past-category-${pastCategoryIndex}`).innerText = category;
                document.getElementById(`past-revenue-${pastCategoryIndex}`).innerText = `$${Math.round(revenue)}`;
                document.getElementById(`past-attendance-${pastCategoryIndex}`).innerText = `${percentageOfAttendance.toFixed(2)}%`;
                pastCategoryIndex++;
            }
        });
    } catch (error) {
        console.log("error", error);
    }
}

renderTable();

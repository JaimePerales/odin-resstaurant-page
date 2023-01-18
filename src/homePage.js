const createRestaurantInfo = () => {
    const restaurantInfo = document.createElement('div');
    restaurantInfo.id = 'restaurant-info';
    return restaurantInfo;
}

const createRestaurantTitle = () => {
    const restaurantTitleDiv = document.createElement('div');
    const restaurantTitle = document.createElement('h1');
    restaurantTitle.textContent = 'Jaime\'s Juice Jamberee';
    restaurantTitleDiv.id = 'restaurant-title';


    restaurantTitleDiv.appendChild(restaurantTitle);

    return restaurantTitleDiv;
}

const createRestaurantHeadline = () => {
    const restaurantHeadLineDiv = document.createElement('div');
    const restaurantHeadLine = document.createElement('p');
    restaurantHeadLine.textContent = 'Jaime\'s has the best juice! The atmosphere and customer service make you feel like you are sitting in the middle of a jamberee, drinking like a thirsty person! This is exactly the kind of place that I like to return to again and again.';

    const quoteeName = document.createElement('h4');
    quoteeName.textContent = 'Denise';

    restaurantHeadLineDiv.appendChild(restaurantHeadLine);
    restaurantHeadLineDiv.appendChild(quoteeName);

    return restaurantHeadLineDiv;
}

const createRestaurantHoursLabel = () => {
    const restaurantHoursDiv = document.createElement('div');
    const restaurantHoursLabel = document.createElement('h3');
    restaurantHoursLabel.textContent = 'Hours';
    restaurantHoursDiv.appendChild(restaurantHoursLabel);

    return restaurantHoursDiv;
}

const createHoursList = () => {
    const restaurantHours = document.createElement('ul');
    const sundayHours = document.createElement('li');
    sundayHours.textContent = 'Sunday: 8am - 8pm';

    const mondayHours = document.createElement('li');
    mondayHours.textContent = 'Monday: 6am - 6pm';

    const tuesdayHours = document.createElement('li');
    tuesdayHours.textContent = 'Tuesday: 6am - 6pm';

    const wednesdayHours = document.createElement('li');
    wednesdayHours.textContent = 'Wednesday: 6am - 6pm';

    const thursdayHours = document.createElement('li');
    thursdayHours.textContent = 'Thursday: 6am - 10pm';

    const fridayHours = document.createElement('li');
    fridayHours.textContent = 'Friday: 6am - 10pm';

    const saturdayHours = document.createElement('li');
    saturdayHours.textContent = 'Saturday: 8am - 10pm';

    restaurantHours.appendChild(sundayHours);
    restaurantHours.appendChild(mondayHours);
    restaurantHours.appendChild(tuesdayHours);
    restaurantHours.appendChild(wednesdayHours);
    restaurantHours.appendChild(thursdayHours);
    restaurantHours.appendChild(fridayHours);
    restaurantHours.appendChild(saturdayHours);

    return restaurantHours;
}

const createRestaurantHours = () => {
    const restaurantHoursDiv = createRestaurantHoursLabel();
    restaurantHoursDiv.appendChild(createHoursList());

    return restaurantHoursDiv;
}

const createRestaurantLocation = () => {
    const restaurantLocationDiv = document.createElement('div');
    const restaurantLocationLabel = document.createElement('h3');
    restaurantLocationLabel.textContent = 'Location';

    const restaurantLocation = document.createElement('p');
    restaurantLocation.textContent = '123 Juice St, Jugo, Texas';

    restaurantLocationDiv.appendChild(restaurantLocationLabel);
    restaurantLocationDiv.appendChild(restaurantLocation);

    return restaurantLocationDiv;
}

const assembleRestaurantInfo = () => {
    const restaurantInfo = createRestaurantInfo();

    restaurantInfo.appendChild(createRestaurantTitle());
    restaurantInfo.appendChild(createRestaurantHeadline());
    restaurantInfo.appendChild(createRestaurantHours());
    restaurantInfo.appendChild(createRestaurantLocation());

    return restaurantInfo;
}

const initializeRestaurantInfo = () => {
    // Selects hard-coded div
    const content = document.querySelector('#content');

    // Creates div for restaurant info
    const restaurantInfo = assembleRestaurantInfo();

    // Attaches div to hard-coded div
    content.appendChild(restaurantInfo);
}

export default initializeRestaurantInfo;
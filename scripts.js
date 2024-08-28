document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('upcoming-events-list')) {
        loadUpcomingEvents();
    }
    if (document.getElementById('events-list')) {
        loadEvents();
    }
    if (document.getElementById('event-detail')) {
        loadEventDetails();
    }

    document.querySelectorAll('.category-item').forEach(item => {
        item.addEventListener('click', () => {
            const category = item.getAttribute('data-category');
            window.location.href = `events.html?category=${category}`;
        });
    });
});

const events = [
    { id: 1, title: 'Concert', date: '2024-08-15', description: 'A live concert event.', image: 'https://plus.unsplash.com/premium_photo-1661306437817-8ab34be91e0c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'Concerts' },
    { id: 2, title: 'Art Exhibition', date: '2024-09-10', description: 'An exhibition of modern art.', image: 'https://images.unsplash.com/photo-1563000215-e31a8ddcb2d0?q=80&w=1456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'Exhibitions' },
    { id: 3, title: 'Tech Conference', date: '2024-10-05', description: 'A conference on emerging technologies.', image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'Conferences' },
    { id: 4, title: 'Food Festival', date: '2024-11-20', description: 'A festival celebrating food and culture.', image: 'https://plus.unsplash.com/premium_photo-1661277641736-92e575bd1d97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZCUyMGZlc3RpdmFsfGVufDB8fDB8fHww', category: 'Festivals' },
    { id: 5, title: 'Film Screening', date: '2024-12-01', description: 'A screening of independent films.', image: 'https://images.unsplash.com/photo-1643753072748-cac34c448e3f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmlsbSUyMHNjcmVlbmluZ3xlbnwwfHwwfHx8MA%3D%3D', category: 'Movies' },
    { id: 6, title: 'Marathon', date: '2024-12-15', description: 'A city-wide marathon event.', image: 'https://plus.unsplash.com/premium_photo-1664304823165-888f56fc101b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFyYXRob258ZW58MHx8MHx8fDA%3D', category: 'Sports' },
];

function loadUpcomingEvents() {
    
    const upcomingEventsList = document.getElementById('upcoming-events-list');
    events.forEach(event => {
        const eventElement = document.createElement('div');
        eventElement.classList.add('event');
        eventElement.innerHTML = `
            <img src="${event.image}" alt="${event.title}">
            <h3>${event.title}</h3>
            <p>${event.date}</p>
            <p>${event.description}</p>
            <a href="event.html?id=${event.id}" class="btn">View Details</a>
        `;
        upcomingEventsList.appendChild(eventElement);
    });
}

function loadEvents() {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');

   

    const filteredEvents = category ? events.filter(event => event.category === category) : events;

    const eventsList = document.getElementById('events-list');
    eventsList.innerHTML = ''; // Clear previous content
    filteredEvents.forEach(event => {
        const eventElement = document.createElement('div');
        eventElement.classList.add('event');
        eventElement.innerHTML = `
            <img src="${event.image}" alt="${event.title}">
            <h3>${event.title}</h3>
            <p>${event.date}</p>
            <p>${event.description}</p>
            <a href="event.html?id=${event.id}" class="btn">View Details</a>
        `;
        eventsList.appendChild(eventElement);
    });
}

function loadEventDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const eventId = urlParams.get('id');

    const event = events.find(e => e.id === parseInt(eventId));

    if (event) {
        const eventDetail = document.getElementById('event-detail');
        eventDetail.innerHTML = `
            <img src="${event.image}" alt="${event.title}">
            <h2>${event.title}</h2>
            <p>${event.date}</p>
            <p>${event.description}</p>
            <a href="booking.html?id=${event.id}" class="btn" id="book-btn">Book Now</a>
        `;
    }
}
document.addEventListener("DOMContentLoaded", function () {
    const events = [
        { id: 1, title: 'Concert', date: '2024-08-15', description: 'A live concert event.', category: 'Concerts' },
        { id: 2, title: 'Art Exhibition', date: '2024-09-10', description: 'An exhibition of modern art.', category: 'Exhibitions' },
        { id: 3, title: 'Tech Conference', date: '2024-10-05', description: 'A conference on emerging technologies.', category: 'Conferences' },
        { id: 4, title: 'Food Festival', date: '2024-11-20', description: 'A festival celebrating food and culture.', category: 'Festivals' },
        { id: 5, title: 'Film Screening', date: '2024-12-01', description: 'A screening of independent films.', category: 'Movies' },
        { id: 6, title: 'Marathon', date: '2024-12-15', description: 'A city-wide marathon event.', category: 'Sports' },
    ];

    const eventSelect = document.getElementById("event");
    const bookingForm = document.getElementById("bookingForm");
    const bookingList = document.getElementById("bookingList");

    // Populate the select element with events
    events.forEach(event => {
        const option = document.createElement("option");
        option.value = event.title;
        option.textContent = `${event.title} - ${event.date}`;
        eventSelect.appendChild(option);
    });

    // Load existing bookings from localStorage
    const bookings = JSON.parse(localStorage.getItem("bookings")) || [];

    // Display the bookings
    function displayBookings() {
        bookingList.innerHTML = "";
        bookings.forEach((booking, index) => {
            const listItem = document.createElement("li");
            listItem.textContent = `Event: ${booking.event}, Name: ${booking.name}, Email: ${booking.email}`;
            bookingList.appendChild(listItem);
        });
    }

    displayBookings();

    // Handle form submission
    bookingForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const newBooking = {
            event: eventSelect.value,
            name: document.getElementById("name").value,
            email: document.getElementById("email").value
        };

        bookings.push(newBooking);

        // Save to localStorage
        localStorage.setItem("bookings", JSON.stringify(bookings));

        // Display updated bookings
        displayBookings();

        // Clear form
        bookingForm.reset();
    });
});

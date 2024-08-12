export const trips = [
  { id: 1, trip: "One Way" },
  { id: 2, trip: "Round Trip" },
  { id: 3, trip: "Mulicity" }
];
export const pfts = [
  { title: "Student", 'key': "STUDENT" },
  { title: "Senior Citizen", 'key': "SENIOR_CITIZEN" }
];
export const travellerarr = [
  { title: 'Adult', para: '12+ years', key: 'ADULT' },
  { title: 'Children', para: '2-12 years', key: 'CHILD' },
  { title: 'Infant', para: '0-2 years', key: 'INFANT' },
];

export const cabinclasses = [
  { title: 'Economy', key: 'ECONOMY' },
  { title: 'Premium Economy', key: 'PREMIUM_ECONOMY' },
  { title: 'Business Class', key: 'BUSINESS' },
  { title: 'First Class', key: 'FIRST' },
];
export const flighttypes = [
  { title: "is Direct Flight", key: "isDirectFlight" },
  { title: "is Connecting Flight", key: "isConnectingFlight" },
];
export const formatDate = (date) => {
  const d = new Date(date);
  return d.toISOString().split('T')[0]; // This will give us YYYY-MM-DD
};
export const token = "7121041a825bdf-f95d-40a6-8663-3bd50825a0ec";
export const BASE_URL = "https://aahiltours.in:3000/";
// export const BASE_URL = "https://localhost:3000/";
export const getData = async (endpoint) => {
  try {
    const response = await fetch(BASE_URL + 'api/v1/' + endpoint, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
export const postData = async (endPoint, data) => {
  try {
    const response = await fetch(BASE_URL + 'api/v1/' + endPoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data), // Include the request body
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseData = await response.json();
    return responseData;
  } catch (err) {
    console.error('Error:', err.message);
  }
};

export const loadScript = (src) => {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
};
export const SEARCH = "https://apitest.tripjack.com/fms/v1/air-search-all";
export const FAIR_RULE = "https://apitest.tripjack.com/fms/v2/farerule";
export const REVIEW = "https://apitest.tripjack.com/fms/v1/review";
export const BOOK = "https://apitest.tripjack.com/oms/v1/air/book";
export const CONFIRM_BOOK = "https://apitest.tripjack.com/oms/v1/air/confirm-book";
export const PRICE_VALIDATE = "https://apitest.tripjack.com/oms/v1/air/fare-validate";
export const BOOK_DETAILS = "https://apitest.tripjack.com/oms/v1/booking-details";
export const SEAT = "https://apitest.tripjack.com/fms/v1/seat";
export const USER_DETAILS = "https://apitest.tripjack.com/ums/v1/user-detail";
export const classes = "w-full border-b border-blue-gray-400 outline-none text-sm p-2 text-gray-600";
export const tis = ['Mr', 'Master', 'Ms'];


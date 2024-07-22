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
export const token = "7121041a825bdf-f95d-40a6-8663-3bd50825a0ec"
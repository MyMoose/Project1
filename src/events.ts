export interface Event {
    id: number;
    title: string;
    description: string;
    price: number;
    date: string;
    location: string;
}

export const events = [
    {
        id: 1,
        title: 'Summer Concert',
        description: 'An electrifying musical experience under the stars.',
        price: 25.99,
        date: '2023-07-15',
        location: 'City Park Amphitheater'
    },
    {
        id: 2,
        title: 'Tech Conference',
        description: 'Explore the latest trends and innovations in technology.',
        price: 199.99,
        date: '2023-09-08',
        location: 'Tech Expo Center'
    },
    {
        id: 3,
        title: 'Food Festival',
        description: 'A culinary journey with delicious dishes from around the world.',
        price: 35.50,
        date: '2023-06-22',
        location: 'Downtown Food Plaza'
    },
    {
        id: 4,
        title: 'Fitness Challenge',
        description: 'Join the community for a day of fitness and wellness activities.',
        price: 10.00,
        date: '2023-08-12',
        location: 'FitZone Gym'
    },
    {
        id: 5,
        title: 'Art Exhibition',
        description: 'Discover the beauty of local and international artworks.',
        price: 15.99,
        date: '2023-07-29',
        location: 'Modern Art Gallery'
    },
    {
        id: 6,
        title: 'Movie Night',
        description: 'Enjoy a night under the stars with a classic film screening.',
        price: 8.50,
        date: '2023-08-05',
        location: 'Open-Air Cinema'
    },
    {
        id: 7,
        title: 'Science Fair',
        description: 'Explore fascinating scientific experiments and innovations.',
        price: 0.00,
        date: '2023-09-20',
        location: 'Science Discovery Center'
    },
    {
        id: 8,
        title: 'Fashion Show',
        description: 'Witness the latest trends in the world of fashion.',
        price: 45.75,
        date: '2023-06-30',
        location: 'Fashion Pavilion'
    },
    {
        id: 9,
        title: 'Charity Gala',
        description: 'Support a noble cause and make a difference in the community.',
        price: 50.00,
        date: '2023-07-08',
        location: 'Community Center'
    },
    {
        id: 10,
        title: 'Dance Party',
        description: 'Dance the night away with energetic beats and vibrant lights.',
        price: 20.00,
        date: '2023-08-18',
        location: 'Club Groove'
    }
];
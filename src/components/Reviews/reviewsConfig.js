import baliImage from '../../assets/images/bali-resort.png';
import ukraineLogo from '../../assets/images/ukraine.png';
import rotterdamImage from '../../assets/images/king-kong-hostel.png';
import usaLogo from '../../assets/images/usa.png';
import ourikaImage from '../../assets/images/rokoko-hotel.png';
import germanyLogo from '../../assets/images/germany.png';

export const reviewsConfig = [
  {
    id: 'indonesia',
    image: baliImage,
    price: '250 USD',
    hotelName: 'Ubud Bali Resort&SPA',
    hotelLocation: 'Bali, Indonesia',
    score: '9,4',
    reviewsAmount: '1324 reviews',
    userName: 'Hanna Ivanova',
    userCountry: 'Ukraine',
    userCountryLogo: ukraineLogo,
    text:
      'Great location, really pleasant and clean rooms, but the thing\n' +
      'that makes this such a good place to stay are the staff. All of\n' +
      'the people are incredibly helpful and generous with their time and\n' +
      'advice.',
  },
  {
    id: 'netherlands',
    image: rotterdamImage,
    price: '40 USD',
    hotelName: 'King Kong Hostel',
    hotelLocation: 'Rotterdam, Netherlands',
    score: '8,9',
    reviewsAmount: '2016 reviews',
    userName: 'Adam Smith',
    userCountry: 'USA',
    userCountryLogo: usaLogo,
    text:
      "I've been in this hostel for a month and here is the best hostel\n" +
      'of all.\n' +
      'Excellent management of excellent and ethical staff and bedrooms\n' +
      'Bathrooms are always clean and excellent.\n' +
      'Most importantly, those who work here are kind and good-natured.',
  },
  {
    id: 'morocco',
    image: ourikaImage,
    price: '100 USD',
    hotelName: 'Rokoko Hotel',
    hotelLocation: 'Ourika, Morocco',
    score: '9,1',
    reviewsAmount: '815 reviews',
    userName: 'Anika Messer',
    userCountry: 'Germany',
    userCountryLogo: germanyLogo,
    text:
      'Efficient, friendly, professional, and appropriately attentive.\n' +
      'Great hotel in a great location. Easy access to all the\n' +
      'surrounding historical sites. Staff is fantastic. Will definitely\n' +
      'stay at this location during my next stay in Morocco.',
  },
];

# IIT Mandi Academic Council Website

A modern, minimalist React-based website for the Academic Council of IIT Mandi. This website provides information about academic programs, upcoming events, and course management.

## Features

- **Home Page**: Landing page with information about the Academic Council
- **Events Page**: Displays upcoming academic events and important dates
- **Courses & Degree Page**: Manage and explore degree programs (B.Tech, M.Tech, PhD)
- **Responsive Design**: Fully responsive and mobile-friendly
- **Minimalist UI/UX**: Clean and simple design using a professional color palette
- **Smooth Navigation**: Easy navigation between pages with React Router

## Color Palette

- Primary Dark: `#005461`
- Primary Teal: `#018790`
- Accent Cyan: `#00B7B5`
- Light Background: `#F4F4F4`

## Project Structure

```
iit-mandi-academic-council/
├── src/
│   ├── components/
│   │   └── Navigation.jsx
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── EventsPage.jsx
│   │   └── CoursesPage.jsx
│   ├── styles/
│   │   ├── globals.css
│   │   ├── navigation.css
│   │   ├── home.css
│   │   ├── events.css
│   │   └── courses.css
│   ├── App.jsx
│   └── main.jsx
├── public/
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Installation

1. **Clone or navigate to the project directory**

   ```bash
   cd iit-mandi-academic-council
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

## Development

To run the development server:

```bash
npm run dev
```

The application will open at `http://localhost:3000`

## Build

To build for production:

```bash
npm run build
```

## Technology Stack

- **React** 18.2.0
- **React Router DOM** 6.20.0
- **Vite** 5.0.0
- **CSS3** with CSS Grid and Flexbox

## Pages

### Home Page

- Hero section with compelling tagline
- About Academic Council section
- Key responsibilities cards
- Quick navigation links

### Events Page

- Grid layout of upcoming events
- Event details (date, location, category)
- Interactive event cards
- Category badges

### Courses & Degree Page

- Degree program selector (B.Tech, M.Tech, PhD)
- Program information and duration
- Semester-wise curriculum breakdown
- Quick action buttons
- Contact section

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- Student portal login
- Advanced course filtering
- Event registration system
- Faculty directory
- News and announcements section
- Course reviews and ratings

## License

© 2024 Academic Council, IIT Mandi. All rights reserved.

## Contact

For inquiries, contact the Academic Affairs Office at IIT Mandi.

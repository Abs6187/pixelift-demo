# PixeLift Designs

A modern, responsive website for a digital marketing and branding agency featuring interactive animations and a clean, professional design inspired by premium landing page collections.

![PixeLift Designs Screenshot](screenshots/pixelift-homepage.png)

## Features

✅ **Responsive Design**: Fully responsive layout that works on all device sizes  
✅ **Interactive Animations**: Engaging Lottie animations for each service and section  
✅ **Service Showcase**: Highlights key services with animated icons  
✅ **Blog Section**: Features latest articles with image thumbnails  
✅ **Contact Form**: User-friendly contact form for inquiries  
✅ **Scroll Animations**: Elements fade in as the user scrolls down the page  
✅ **Card-Based UI**: Modern card interfaces with subtle hover effects and shadows  
✅ **Dark/Light Mode Toggle**: Allow users to switch between color schemes  
✅ **Sticky Navigation**: Navigation bar that stays visible while scrolling  
✅ **Hover Micro-interactions**: Subtle animations on interactive elements  
✅ **Glassmorphism Elements**: Frosted glass effect on selected UI components  
✅ **Scroll Progress Indicator**: Visual feedback on scrolling progress
✅ **Project Gallery**: Filterable showcase of portfolio projects
✅ **Testimonials Carousel**: Client testimonials with smooth transitions
✅ **Newsletter Subscription**: Email signup module for marketing
✅ **Social Proof Section**: Showcase of client logos and partners

## Development Progress

### Completed
- Basic website structure and styling
- Responsive design for all devices
- Service cards with Lottie animations
- Blog section with card layout
- Contact form with animated icon
- Scroll-triggered animations
- Card-based UI with enhanced hover effects and shadows
- Dark/Light mode toggle with theme persistence
- Sticky navigation with scroll effect
- Hover micro-interactions on buttons, cards and interactive elements
- Glassmorphism effects on headers, cards and UI components
- Scroll progress indicator
- Project gallery implementation
- Testimonials carousel
- Newsletter subscription module
- Social proof section with client logos

### Future Enhancements
- Advanced filtering options for portfolio projects
- Integration with a backend CMS
- Performance optimization for animations
- Multi-language support
- Accessibility improvements

## Technologies Used

- HTML5
- CSS3 with Custom Properties (CSS Variables)
- Vanilla JavaScript
- [DotLottie Web](https://github.com/dotlottie/player-component) for animations
- Intersection Observer API for scroll effects
- CSS Grid and Flexbox for layouts
- LocalStorage for user preferences
- CSS transitions and keyframe animations

## Project Structure

```
pixelift-demo/
├── index.html          # Main HTML file
├── css/                # CSS files
│   ├── main.css        # Core styles
│   ├── dark-mode.css   # Dark mode specific styles
│   └── animations.css  # Animation definitions
├── js/                 # JavaScript files
│   ├── main.js         # Core functionality
│   ├── animations.js   # Animation controls
│   └── theme.js        # Theme switcher
├── src/                # Image assets
│   ├── images/         # Regular images
│   ├── icons/          # UI icons
│   └── portfolio/      # Portfolio project images
└── README.md           # Project documentation
```

## Setup and Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/pixelift-demo.git
   ```

2. Navigate to the project directory:
   ```
   cd pixelift-demo
   ```

3. Open `index.html` in your browser or use a local development server:
   ```
   # Using Python
   python -m http.server
   
   # Using Node.js with npm
   npx serve
   ```

## Customization

### Changing Colors

The site uses CSS variables for consistent theming. Edit the following in the CSS section:

```css
:root {
    --primary-color: #5D3FD3;    /* Main brand color */
    --secondary-color: #FFC0CB;  /* Accent color */
    --text-color: #333;          /* Text color */
    --background-color: #F5F5F5; /* Background color */
    --card-bg: #ffffff;          /* Card background */
    --shadow-color: rgba(0,0,0,0.1); /* Shadow color */
    --gradient-start: #5D3FD3;   /* Gradient start color */
    --gradient-end: #9D4EDD;     /* Gradient end color */
}

[data-theme="dark"] {
    --primary-color: #7B5CF0;    /* Dark mode main brand color */
    --secondary-color: #FF8DA1;  /* Dark mode accent color */
    --text-color: #E0E0E0;       /* Dark mode text color */
    --background-color: #121212; /* Dark mode background color */
    --card-bg: #1E1E1E;          /* Dark mode card background */
    --shadow-color: rgba(0,0,0,0.25); /* Dark mode shadow color */
}
```

### Updating Animations

The animations are loaded from external sources via DotLottie Web. To change an animation:

1. Upload your Lottie JSON file to [Lottie Host](https://lottie.host/)
2. Replace the `src` URL in the corresponding JavaScript section

### Customizing UI Components

The design system includes these customizable components:

- **Cards**: Modify the `service-card` and `blog-card` classes
- **Buttons**: Multiple styles available with `cta-button`, `outline-button`, and `text-button` classes
- **Forms**: Styled input fields with validation states
- **Modals**: Customizable pop-up components for featured content
- **Image treatments**: Options for circles, rounded corners, or overlap effects

## UI Features

### Glassmorphism Elements
Semi-transparent UI elements with blur effects create a modern, layered interface. Adjust the blur amount and opacity in the CSS variables.

### Dark Mode
Toggle between light and dark themes with automatic preference detection based on system settings.

### Grid Gallery
The portfolio section uses CSS Grid with filtering options to showcase projects by category.

### Micro-interactions
Subtle animations provide feedback for user actions like hover states, clicks, and form interactions.

### Testimonials Slider
Automatic carousel with manual navigation options displays client testimonials with smooth transitions.

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## Performance Optimizations

- Lazy loading for images and animations
- CSS and JS minification
- Image optimization with WebP format
- Code splitting for faster initial load
- Prefetching for smoother navigation

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Animations from [Lottie Files](https://lottiefiles.com/)
- Design inspiration from [Land-book](https://land-book.com/)
- Fonts from Google Fonts
- Icons from various free icon libraries
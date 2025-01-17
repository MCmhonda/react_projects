# Modern Loading Screen with React

A sleek and modern loading screen implementation using React, featuring an animated geometric preloader and a stylish landing page.

## 🎨 Color Palette

- Primary Dark Blue: `#091057`
- Medium Blue: `#024CAA`
- Accent Orange: `#EC8305`
- Light Gray: `#DBD3D3`

## ✨ Features

- Custom animated geometric preloader
- 5-second loading simulation
- Smooth transitions and animations
- Responsive full-screen design
- Modern minimalist aesthetic
- Custom color palette implementation

## 🛠️ Technologies Used

- React
- CSS Animations
- Google Fonts (Playfair Display)
- Vite (Build Tool)

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/MCmhonda/react_projects.git
    ```

2. Navigate to the project directory:

    ```bash
    cd  preloader
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Start the development server:

    ```bash
    npm run dev
    ```

    
## 🏗️ Project Structure
src/
├── components/
│ ├── Preloader.jsx
│ └── Preloader.css
├── App.jsx
├── App.css
└── main.jsx


## 🎯 Component Overview

### Preloader Component
- Displays an animated geometric loading screen
- Uses CSS animations for smooth pillar movements
- Automatically transitions after 5 seconds

### App Component
- Manages loading state
- Renders the preloader during loading
- Displays "Hello World!" with custom styling after loading

## 📝 Customization

### Adjusting Loading Time
To modify the loading duration, update the timeout value in `App.jsx`:

    javascript
    useEffect(() => {
    const timer = setTimeout(() => {
    setLoading(false);
    }, 5000); // Adjust this value (in milliseconds)
    return () => clearTimeout(timer);
    }, []);


### Modifying Colors
The color scheme can be adjusted by updating the color values in the CSS files:
- `Preloader.css` for loader colors
- `App.css` for main application colors

## 📄 Author

- [@MCmhonda](https://github.com/MCmhonda)

## 🙏 Acknowledgments

- Inspired by modern UI/UX design principles
- Built with React and modern web technologies
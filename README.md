# MacOStar - Online Learning Platform 🍎

A modern, responsive online learning platform for SE-2409 students at AITU. MacOStar provides practical programming courses with interactive features, mentorship support, and flexible pricing plans.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Pages Overview](#pages-overview)
- [Key JavaScript Features](#key-javascript-features)
- [Getting Started](#getting-started)
- [Installation & Usage](#installation--usage)
- [Courses Offered](#courses-offered)
- [Pricing Plans](#pricing-plans)
- [Team](#team)
- [Contact & Support](#contact--support)

---

## 📖 Overview

**MacOStar** is an assignment project for SE-2409 students that showcases a complete online learning platform. The platform allows students to explore programming courses, subscribe to different pricing plans, and interact with instructors. It features a beautiful UI with dark/light theme support, multilingual support (English, Russian, Kazakh), and various interactive components.

### Mission
To provide concise, practical, and accessible learning materials for students with a focus on real-world projects, mentorship, and peer collaboration.

---

## ✨ Features

### Core Features
- 🎓 **Multiple Programming Courses** - Java, Python, and HTML & CSS
- 💰 **Flexible Pricing Plans** - Free, Student, Pro, Mentor, Team, and Enterprise options
- 🌙 **Dark/Light Mode Toggle** - Theme switcher in navigation bar
- 🌍 **Multi-Language Support** - English, Russian, and Kazakh
- 👥 **User Authentication** - Login/Signup functionality
- ⭐ **Star Rating System** - Rate your experience on the platform
- 📞 **Contact Forms** - Get in touch with instructors
- 📊 **Course Statistics** - View platform metrics
- 🔍 **Course Search & Filter** - Find courses easily
- 💬 **Live Chat & Support** - Interactive elements
- 🎠 **Course Carousel** - Featured courses showcase
- 📱 **Responsive Design** - Works on all devices
- 🚀 **Lazy Loading** - Optimized image loading
- 📈 **Scroll Progress Bar** - Visual reading progress indicator

### Interactive Features
- Form validation
- Toast notifications
- Loading spinners
- Copy-to-clipboard functionality
- Number counter animations
- Real-time clock display
- Background animations

---

## 📁 Project Structure

```
assignment2_web 3/
├── index.html                 # Home page
├── header_pages/              # Main navigation pages
│   ├── course-list.html       # Courses listing page
│   ├── pricing.html           # Pricing plans page
│   ├── profile.html           # User profile page
│   └── auth.html              # Authentication page
├── course-details/            # Individual course pages
│   ├── course-java.html       # Java course details
│   ├── course-python.html     # Python course details
│   └── course-html.html       # HTML & CSS course details
├── css/                       # Stylesheets
│   ├── home.css               # Home page styles
│   ├── courses.css            # Courses page styles
│   └── pricing.css            # Pricing page styles
├── js/                        # JavaScript files (20+ utility files)
│   ├── auth.js                # Authentication logic
│   ├── auth-ui.js             # Auth UI components
│   ├── rating.js              # Star rating functionality
│   ├── course.js              # Course page logic
│   ├── courses-page.js        # Courses listing logic
│   ├── pricing-modal.js       # Pricing modal interactions
│   ├── form-validation.js     # Form validation logic
│   ├── search-filter.js       # Course search/filter
│   ├── lazy-loading.js        # Image lazy loading
│   ├── scroll-progress.js     # Scroll progress bar
│   ├── toast-notification.js  # Notification system
│   ├── number-counter.js      # Animated number counters
│   ├── time.js                # Time display functionality
│   ├── background.js          # Background animations
│   ├── interactions.js        # General interactions
│   ├── search-highlight.js    # Search highlighting
│   ├── recommended-books.js   # Book recommendations
│   ├── project-modal.js       # Project modals
│   ├── products.js            # Product management
│   ├── jquery-init.js         # jQuery initialization
│   ├── copy-clipboard.js      # Copy to clipboard
│   └── form-spinner.js        # Form loading spinners
├── images/                    # Media assets
│   ├── Shyngys.png            # Team member photo
│   ├── Sanat.png              # Team member photo
│   ├── student.png            # Student photo
│   └── audio/
│       └── e1axmfsi497-right-answer-sfx-8.mp3  # Sound effects
└── README.md                  # This file
```

---

## 🛠️ Technologies Used

### Frontend Technologies
- **HTML5** - Semantic markup and structure
- **CSS3** - Modern styling with gradients, flexbox, and animations
- **JavaScript (Vanilla)** - Core interactivity and logic
- **jQuery 3.7.1** - DOM manipulation and utilities
- **Bootstrap 5.3.0** - Responsive grid and components

### Key Libraries & Features
- **Responsive Design** - Mobile-first approach
- **CSS Gradients** - Modern gradient backgrounds
- **CSS Grid & Flexbox** - Advanced layouts
- **LocalStorage** - Client-side data persistence
- **Fetch API** - Potential AJAX calls
- **Audio API** - Sound effects integration

---

## 📄 Pages Overview

### 1. **Home Page** (`index.html`)
- Hero section with call-to-action
- Features showcase
- About section with team members
- Student testimonials
- Star rating system
- Platform statistics
- Partner companies carousel
- Contact form
- Real-time clock display

**Key Components:**
- Navigation bar with theme toggle
- Responsive layout
- Interactive elements
- Footer with team info

### 2. **Courses Page** (`header_pages/course-list.html`)
- Featured courses carousel
- Available courses grid (Java, Python, HTML & CSS)
- Why choose us section
- Dynamic highlights
- Language selector (English/Russian/Kazakh)
- Contact form
- Search and filter functionality

**Courses Offered:**
- Java Programming
- Python Programming
- HTML & CSS Programming

### 3. **Pricing Page** (`header_pages/pricing.html`)
- Pricing hero section
- 6 pricing plans:
  - **Starter** (Free)
  - **Student** (₸1,900/mo)
  - **Pro** (₸4,900/mo) - Most Popular
  - **Mentor** (₸7,900/mo)
  - **Team** (₸12,900/mo)
  - **Enterprise** (Custom pricing)
- Plan comparison table
- Plan filtering
- FAQ section
- Modal for plan selection

### 4. **Profile Page** (`header_pages/profile.html`)
- User profile information
- User account management
- Authentication-related content

### 5. **Auth Page** (`header_pages/auth.html`)
- Login form
- Signup form
- Form validation
- User authentication

### 6. **Course Detail Pages**
- `course-java.html` - Detailed Java course content
- `course-python.html` - Detailed Python course content
- `course-html.html` - Detailed HTML & CSS course content

Each course detail page includes:
- Course overview
- Curriculum breakdown
- Learning outcomes
- Instructor information
- Enrollment options

---

## 🎯 Key JavaScript Features

### Authentication (`js/auth.js`, `js/auth-ui.js`)
- User login/signup functionality
- Session management
- User state persistence

### Form Handling (`js/formValidation.js`)
- Real-time form validation
- Email validation
- Required field checking
- Error message display

### Ratings (`js/rating.js`)
- 5-star rating system
- Visual feedback
- Rating submission

### Course Management (`js/course.js`, `js/courses-page.js`)
- Course data management
- Course listing
- Course detail display
- Course filtering

### Search & Filter (`js/search-filter.js`)
- Real-time course search
- Filter by category
- Filter by price range

### UI Features (`js/toast-notification.js`, `js/form-spinner.js`)
- Toast notifications
- Loading spinners
- User feedback

### Performance (`js/lazy-loading.js`)
- Image lazy loading
- Performance optimization

### Pricing (`js/pricing-modal.js`)
- Plan modal interactions
- Plan selection
- Price display

### Animations (`js/background.js`, `js/scroll-progress.js`, `js/number-counter.js`)
- Background animations
- Scroll progress bar
- Animated number counters

### Utilities
- **`js/time.js`** - Current time and date display
- **`js/interactions.js`** - General page interactions
- **`js/copy-clipboard.js`** - Copy content functionality
- **`js/search-highlight.js`** - Highlight search results
- **`js/recommended-books.js`** - Book recommendations
- **`js/project-modal.js`** - Project showcase modals
- **`js/products.js`** - Product data management
- **`js/jquery-init.js`** - jQuery initialization

---

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No installation required - it's a static website!
- Optional: Local web server for testing

### Installation & Usage

#### Option 1: Direct Opening (Simplest)
1. Clone or download the project
2. Open `index.html` in your web browser
3. Navigate through the site using the navigation menu

#### Option 2: Using a Local Web Server (Recommended)

**Using Python:**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Using Node.js:**
```bash
npm install -g http-server
http-server
```

**Using Live Server (VS Code Extension):**
1. Install "Live Server" extension
2. Right-click on `index.html`
3. Select "Open with Live Server"

Then visit: `http://localhost:8000` (or your configured port)

---

## 📚 Courses Offered

### 1. Java Programming
- Object-oriented programming fundamentals
- Enterprise application development
- Real-world projects
- From basics to advanced

### 2. Python Programming
- Web development with Python
- Data science and AI
- Practical applications
- Multiple frameworks and libraries

### 3. HTML & CSS Programming
- Responsive web design
- Modern CSS techniques
- Web design best practices
- Beautiful user interfaces

**Course Features:**
- ✅ Practical lessons
- ✅ Certificates provided
- ✅ Mentor support
- ✅ Real-world projects
- ✅ Community chat

---

## 💰 Pricing Plans

| Plan | Price | Features |
|------|-------|----------|
| **Starter** | Free | Selected lessons, Community chat, Basic support |
| **Student** | ₸1,900/mo | All free features, Extra quizzes, Priority support |
| **Pro** | ₸4,900/mo | All courses, Certificates, Weekly Q&A, Resources |
| **Mentor** | ₸7,900/mo | Mentor sessions, 1:1 reviews, Career prep |
| **Team** | ₸12,900/mo | 3-10 students, Private sessions, Custom deadlines |
| **Enterprise** | Custom | SLA support, Custom onboarding, Admin tools |

**Promotions:**
- 🎉 Early bird discount: -30% until October 1!

---

## 👥 Team

**MacOStar** is a group project by SE-2409 students at AITU:

1. **Abdullayev Shyngys**
   - Role: Frontend Developer
   - Responsibilities: UI/UX, JavaScript functionality

2. **Bogenbayev Sanat**
   - Role: Frontend Developer
   - Responsibilities: UI/UX, Responsive design

**Group:** SE-2409  
**Institution:** AITU (Astana IT University)

---

## 📞 Contact & Support

### Get in Touch
- **Email Contact Form** - Available on home page and courses page
- **Support Options:**
  - Basic support (Starter plan)
  - Priority support (Student plan)
  - Weekly Q&A (Pro plan)
  - Private sessions (Mentor & Team plans)

### Platform Statistics
- 🎓 50+ Students
- 📚 10+ Courses
- ⭐ 95% Satisfaction Rate
- 🤝 Trusted by major tech companies

---

## 🎨 Features Breakdown

### Theme & Customization
- Dark/Light mode toggle button in navigation
- Theme preference saved in localStorage
- Smooth transitions between themes

### Internationalization
- Language selector on courses page
- Support for:
  - English (en)
  - Russian (ru)
  - Kazakh (kk)

### Accessibility
- Semantic HTML structure
- ARIA labels for accessibility
- Keyboard navigation support
- Alt text for images
- Proper heading hierarchy

### Performance Optimizations
- Lazy loading for images
- Minified CSS and JavaScript
- Responsive design reduces data usage
- Efficient jQuery usage

---

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## 🔗 External Resources

- **Bootstrap 5.3.0:** https://getbootstrap.com
- **jQuery 3.7.1:** https://jquery.com
- **Google Fonts:** For typography
- **Unsplash:** For placeholder images

---

## 📝 Notes

- This is a **frontend-only** project (no backend/database)
- All data is handled client-side
- Forms are styled but submission logic may need backend integration
- Some features (authentication, payments) would require backend services

---

## 🎓 Educational Value

This project demonstrates:
- Modern web development practices
- Responsive design principles
- JavaScript DOM manipulation
- Bootstrap framework usage
- Interactive UI components
- Form handling and validation
- Code organization and structure

---

## 📄 License

This is an academic project for AITU SE-2409 group assignment.

---

## ✅ Final Notes

MacOStar is a comprehensive online learning platform that showcases professional web development practices. Whether you're exploring the courses, checking pricing, or learning about the team, the platform provides an engaging and responsive user experience.

**Start your learning journey with MacOStar today!** 🚀

---

**Last Updated:** November 2024  
**Version:** 1.0  
**Status:** Active

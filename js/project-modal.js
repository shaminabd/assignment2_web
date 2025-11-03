$(document).ready(function() {
    const projectsData = {
        java: [
            {
                title: "Banking Management System",
                student: "Aida K.",
                image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop",
                description: "A comprehensive banking application featuring account management, transaction processing, and secure authentication system.",
                technologies: ["Java", "Spring Boot", "MySQL", "Bootstrap"],
                features: ["User authentication", "Account balance tracking", "Transaction history", "Admin dashboard"]
            },
            {
                title: "E-commerce Application",
                student: "Bekarys M.",
                image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
                description: "Full-featured e-commerce platform with shopping cart, payment processing, and order management.",
                technologies: ["Java", "Spring MVC", "Hibernate", "JSP"],
                features: ["Product catalog", "Shopping cart", "Payment gateway", "Order tracking"]
            },
            {
                title: "Library Management System",
                student: "Damir S.",
                image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop",
                description: "Digital library system for managing books, members, and lending operations efficiently.",
                technologies: ["Java", "Swing", "MySQL", "JDBC"],
                features: ["Book management", "Member registration", "Issue/Return books", "Fine calculation"]
            },
            {
                title: "Student Portal",
                student: "Medina A.",
                image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
                description: "Academic portal for students to access courses, grades, and academic resources.",
                technologies: ["Java", "Spring Boot", "PostgreSQL", "React"],
                features: ["Course enrollment", "Grade viewing", "Assignment submission", "Academic calendar"]
            },
            {
                title: "Hospital Management",
                student: "Sanat B.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
                description: "Healthcare management system for patient records, appointments, and staff management.",
                technologies: ["Java", "Spring Boot", "MongoDB", "Angular"],
                features: ["Patient records", "Appointment scheduling", "Doctor management", "Billing system"]
            },
            {
                title: "Inventory System",
                student: "Shyngys A.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
                description: "Inventory tracking system with real-time stock monitoring and reporting capabilities.",
                technologies: ["Java", "Spring MVC", "MySQL", "Bootstrap"],
                features: ["Stock tracking", "Purchase orders", "Sales management", "Inventory reports"]
            },
            {
                title: "Restaurant POS System",
                student: "Aida K.",
                image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
                description: "Point of sale system for restaurant operations including order management and billing.",
                technologies: ["Java", "JavaFX", "SQLite", "CSS"],
                features: ["Table management", "Order processing", "Payment handling", "Daily reports"]
            },
            {
                title: "School Management",
                student: "Bekarys M.",
                image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
                description: "Complete school administration system for managing students, teachers, and academic activities.",
                technologies: ["Java", "Spring Boot", "MySQL", "Thymeleaf"],
                features: ["Student registration", "Attendance tracking", "Exam management", "Fee collection"]
            },
            {
                title: "Car Rental System",
                student: "Damir S.",
                image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop",
                description: "Vehicle rental management platform for booking, fleet tracking, and payment processing.",
                technologies: ["Java", "Spring Boot", "PostgreSQL", "Vue.js"],
                features: ["Vehicle booking", "Availability check", "Customer management", "Billing system"]
            }
        ],
        python: [
            {
                title: "Data Analysis Dashboard",
                student: "Aida K.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
                description: "Interactive data visualization dashboard for analyzing and presenting complex datasets.",
                technologies: ["Python", "Pandas", "Matplotlib", "Seaborn"],
                features: ["Data import/export", "Interactive charts", "Statistical analysis", "Export reports"]
            },
            {
                title: "ML Prediction Model",
                student: "Bekarys M.",
                image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
                description: "Machine learning model for predicting trends with high accuracy using advanced algorithms.",
                technologies: ["Python", "Scikit-learn", "TensorFlow", "NumPy"],
                features: ["Model training", "Prediction interface", "Accuracy metrics", "Visualization tools"]
            },
            {
                title: "Web Scraping Tool",
                student: "Damir S.",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
                description: "Automated web scraping application for extracting data from multiple websites.",
                technologies: ["Python", "BeautifulSoup", "Selenium", "Requests"],
                features: ["Multi-site scraping", "Data extraction", "CSV export", "Error handling"]
            },
            {
                title: "Flask Web Application",
                student: "Medina A.",
                image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop",
                description: "Full-stack web application with user authentication and database integration.",
                technologies: ["Python", "Flask", "SQLAlchemy", "Bootstrap"],
                features: ["User registration", "Login system", "CRUD operations", "Responsive design"]
            },
            {
                title: "REST API Service",
                student: "Sanat B.",
                image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
                description: "RESTful API service for handling data operations with comprehensive documentation.",
                technologies: ["Python", "FastAPI", "PostgreSQL", "Swagger"],
                features: ["API endpoints", "Authentication", "Data validation", "API documentation"]
            },
            {
                title: "Task Automation Script",
                student: "Shyngys A.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
                description: "Automation tool for streamlining repetitive tasks and improving productivity.",
                technologies: ["Python", "Selenium", "OpenPyXL", "Schedule"],
                features: ["Task scheduling", "File processing", "Email automation", "Error logging"]
            },
            {
                title: "Python Game",
                student: "Aida K.",
                image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=800&h=600&fit=crop",
                description: "Interactive game developed using Python with engaging gameplay mechanics.",
                technologies: ["Python", "Pygame", "NumPy", "Random"],
                features: ["Game levels", "Score system", "Sound effects", "High scores"]
            },
            {
                title: "AI Chat Bot",
                student: "Bekarys M.",
                image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
                description: "Intelligent chatbot with natural language processing capabilities.",
                technologies: ["Python", "NLTK", "TensorFlow", "Flask"],
                features: ["Natural language", "Context awareness", "Multi-language", "Learning system"]
            },
            {
                title: "Data Visualization Tool",
                student: "Damir S.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
                description: "Advanced data visualization tool with multiple chart types and customization.",
                technologies: ["Python", "Plotly", "Dash", "Pandas"],
                features: ["Multiple charts", "Interactive plots", "Real-time updates", "Export options"]
            }
        ],
        html: [
            {
                title: "Portfolio Website",
                student: "Aida K.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
                description: "Professional portfolio website showcasing projects and skills.",
                technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
                features: ["Responsive design", "Interactive animations", "Contact form", "Project showcase"]
            },
            {
                title: "E-commerce Landing",
                student: "Bekarys M.",
                image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
                description: "Modern landing page for e-commerce with engaging UI/UX design.",
                technologies: ["HTML5", "CSS3", "JavaScript", "Tailwind"],
                features: ["Hero section", "Product gallery", "Shopping cart", "Payment integration"]
            },
            {
                title: "Analytics Dashboard",
                student: "Damir S.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
                description: "Data analytics dashboard with real-time visualization and reporting.",
                technologies: ["HTML5", "CSS3", "Chart.js", "JavaScript"],
                features: ["Live charts", "Data filters", "Export reports", "Dark mode"]
            },
            {
                title: "Personal Blog",
                student: "Medina A.",
                image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop",
                description: "Elegant blog website with content management and reader interactions.",
                technologies: ["HTML5", "CSS3", "JavaScript", "SASS"],
                features: ["Blog posts", "Comments system", "Search function", "Tag filtering"]
            },
            {
                title: "Restaurant Website",
                student: "Sanat B.",
                image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
                description: "Restaurant website with menu display, reservation system, and location info.",
                technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
                features: ["Menu display", "Table booking", "Location map", "Gallery showcase"]
            },
            {
                title: "Fitness Tracker",
                student: "Shyngys A.",
                image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
                description: "Fitness tracking application with workout plans and progress monitoring.",
                technologies: ["HTML5", "CSS3", "JavaScript", "Chart.js"],
                features: ["Workout plans", "Progress charts", "Calendar view", "Goal tracking"]
            },
            {
                title: "News Portal",
                student: "Aida K.",
                image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=600&fit=crop",
                description: "News website with categorized articles and breaking news section.",
                technologies: ["HTML5", "CSS3", "JavaScript", "Grid Layout"],
                features: ["News categories", "Search functionality", "RSS feeds", "Social sharing"]
            },
            {
                title: "Travel Agency",
                student: "Bekarys M.",
                image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop",
                description: "Travel booking platform with destination showcase and package deals.",
                technologies: ["HTML5", "CSS3", "JavaScript", "Flexbox"],
                features: ["Destination gallery", "Booking form", "Package deals", "Testimonials"]
            },
            {
                title: "Online Store",
                student: "Damir S.",
                image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
                description: "Complete online shopping store with cart and checkout functionality.",
                technologies: ["HTML5", "CSS3", "JavaScript", "LocalStorage"],
                features: ["Product catalog", "Shopping cart", "Checkout page", "Order summary"]
            }
        ]
    };

    function getProjectType() {
        const path = window.location.pathname;
        if (path.includes('course-java')) return 'java';
        if (path.includes('course-python')) return 'python';
        if (path.includes('course-html')) return 'html';
        return 'java';
    }

    const projectData = projectsData[getProjectType()] || projectsData.java;

    $('.project-gallery-card').on('click', function() {
        const cardIndex = $(this).data('project-index');
        const project = projectData[cardIndex];
        
        if (project) {
            let featuresHTML = '<ul class="list-unstyled mb-3">';
            project.features.forEach(feature => {
                featuresHTML += `<li class="mb-2">✓ ${feature}</li>`;
            });
            featuresHTML += '</ul>';

            let techHTML = '';
            project.technologies.forEach(tech => {
                techHTML += `<span class="badge bg-primary me-2 mb-2">${tech}</span>`;
            });

            const modalHTML = `
                <div class="modal fade" id="projectModal" tabindex="-1" aria-labelledby="projectModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header bg-primary text-white">
                                <h5 class="modal-title" id="projectModalLabel">${project.title}</h5>
                                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="row">
                                    <div class="col-12 mb-3">
                                        <img src="${project.image}" class="img-fluid rounded" alt="${project.title}">
                                    </div>
                                    <div class="col-12">
                                        <p class="lead mb-3"><strong>Student:</strong> ${project.student}</p>
                                        <p class="mb-3">${project.description}</p>
                                        <div class="mb-3">
                                            <strong>Technologies Used:</strong><br>
                                            <div class="mt-2">${techHTML}</div>
                                        </div>
                                        <div>
                                            <strong>Key Features:</strong>
                                            ${featuresHTML}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            $('#projectModal').remove();
            $('body').append(modalHTML);
            
            const modal = new bootstrap.Modal(document.getElementById('projectModal'));
            modal.show();
        }
    });
});
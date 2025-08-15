document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Dropdown Toggle
    document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            const dropdown = this.closest('.dropdown');
            dropdown.classList.toggle('active');
            
            // Close other dropdowns
            document.querySelectorAll('.dropdown').forEach(item => {
                if (item !== dropdown) {
                    item.classList.remove('active');
                }
            });
        });
    });
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.dropdown')) {
            document.querySelectorAll('.dropdown').forEach(item => {
                item.classList.remove('active');
            });
        }
    });
    
    // Modal Handling
    const modals = {
        login: document.getElementById('login-modal'),
        register: document.getElementById('register-modal'),
        recruiter: document.getElementById('recruiter-modal'),
        postJob: document.getElementById('post-job-modal')
    };
    
    const modalButtons = {
        login: document.getElementById('login-btn'),
        register: document.getElementById('register-btn'),
        recruiter: document.getElementById('recruiter-btn'),
        postJob: document.getElementById('post-job-btn'),
        ctaRegister: document.getElementById('cta-register'),
        switchToLogin: document.getElementById('switch-to-login'),
        switchToRegister: document.getElementById('switch-to-register'),
        employerRegister: document.getElementById('employer-register')
    };
    
    // Open modal functions
    function openModal(modal) {
        document.body.style.overflow = 'hidden';
        modal.classList.add('active');
    }
    
    // Close modal functions
    function closeModal(modal) {
        document.body.style.overflow = '';
        modal.classList.remove('active');
    }
    
    // Add event listeners to modal buttons
    modalButtons.login.addEventListener('click', (e) => {
        e.preventDefault();
        openModal(modals.login);
    });
    
    modalButtons.register.addEventListener('click', (e) => {
        e.preventDefault();
        openModal(modals.register);
    });
    
    modalButtons.recruiter.addEventListener('click', (e) => {
        e.preventDefault();
        openModal(modals.recruiter);
    });
    
    modalButtons.postJob.addEventListener('click', (e) => {
        e.preventDefault();
        openModal(modals.postJob);
    });
    
    modalButtons.ctaRegister.addEventListener('click', (e) => {
        e.preventDefault();
        openModal(modals.register);
    });
    
    modalButtons.switchToLogin.addEventListener('click', (e) => {
        e.preventDefault();
        closeModal(modals.register);
        openModal(modals.login);
    });
    
    modalButtons.switchToRegister.addEventListener('click', (e) => {
        e.preventDefault();
        closeModal(modals.login);
        openModal(modals.register);
    });
    
    modalButtons.employerRegister.addEventListener('click', (e) => {
        e.preventDefault();
        closeModal(modals.recruiter);
        openModal(modals.register);
    });
    
    // Close modals when clicking on X or outside
    document.querySelectorAll('.close-modal').forEach(btn => {
        btn.addEventListener('click', function() {
            const modal = this.closest('.modal');
            closeModal(modal);
        });
    });
    
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            closeModal(e.target);
        }
    });
    
    // Testimonial Slider
    const testimonials = document.querySelectorAll('.testimonial');
    const dotsContainer = document.querySelector('.slider-dots');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    
    let currentSlide = 0;
    
    // Create dots
    testimonials.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('slider-dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });
    
    const dots = document.querySelectorAll('.slider-dot');
    
    function updateSlider() {
        testimonials.forEach((testimonial, index) => {
            testimonial.classList.toggle('active', index === currentSlide);
        });
        
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }
    
    function goToSlide(slideIndex) {
        currentSlide = slideIndex;
        updateSlider();
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % testimonials.length;
        updateSlider();
    }
    
    function prevSlide() {
        currentSlide = (currentSlide - 1 + testimonials.length) % testimonials.length;
        updateSlider();
    }
    
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // Auto-rotate testimonials
    let slideInterval = setInterval(nextSlide, 5000);
    
    // Pause on hover
    const sliderContainer = document.querySelector('.testimonial-slider');
    sliderContainer.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });
    
    sliderContainer.addEventListener('mouseleave', () => {
        slideInterval = setInterval(nextSlide, 5000);
    });
    
    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Job Filter
    const jobFilter = document.getElementById('job-filter');
    const jobsContainer = document.getElementById('jobs-container');
    
    // Sample job data
    const jobs = [
        {
            id: 1,
            title: 'Frontend Developer',
            company: 'TechCorp',
            location: 'San Francisco, CA',
            type: 'full-time',
            salary: '$90,000 - $120,000',
            description: 'We are looking for a skilled Frontend Developer to join our team. You will be responsible for building user interfaces and implementing design systems.',
            logo: 'TC'
        },
        {
            id: 2,
            title: 'UX Designer',
            company: 'DesignHub',
            location: 'Remote',
            type: 'remote',
            salary: '$80,000 - $100,000',
            description: 'Join our design team to create beautiful and intuitive user experiences for our products. Must have experience with Figma and user research.',
            logo: 'DH'
        },
        {
            id: 3,
            title: 'Marketing Manager',
            company: 'Growth Inc',
            location: 'New York, NY',
            type: 'full-time',
            salary: '$75,000 - $95,000',
            description: 'We need a Marketing Manager to lead our campaigns and drive customer acquisition. Experience with digital marketing and analytics required.',
            logo: 'GI'
        },
        {
            id: 4,
            title: 'Backend Engineer',
            company: 'DataSystems',
            location: 'Austin, TX',
            type: 'full-time',
            salary: '$110,000 - $140,000',
            description: 'Looking for a Backend Engineer to develop and maintain our server infrastructure. Strong experience with Node.js and databases required.',
            logo: 'DS'
        },
        {
            id: 5,
            title: 'Content Writer',
            company: 'Creative Media',
            location: 'Remote',
            type: 'part-time',
            salary: '$40 - $60 per hour',
            description: 'Part-time Content Writer needed to create engaging blog posts and marketing copy. Must have excellent writing skills and SEO knowledge.',
            logo: 'CM'
        },
        {
            id: 6,
            title: 'Product Manager',
            company: 'InnovateCo',
            location: 'Chicago, IL',
            type: 'full-time',
            salary: '$100,000 - $130,000',
            description: 'Lead product development from conception to launch. Work with cross-functional teams to deliver exceptional products to our customers.',
            logo: 'IC'
        }
    ];
    
    // Render jobs
    function renderJobs(filter = 'all') {
        jobsContainer.innerHTML = '';
        
        const filteredJobs = filter === 'all' 
            ? jobs 
            : jobs.filter(job => job.type === filter);
        
        filteredJobs.forEach(job => {
            const jobCard = document.createElement('div');
            jobCard.className = 'job-card';
            jobCard.innerHTML = `
                <div class="job-header">
                    <div class="job-logo">${job.logo}</div>
                    <div class="job-info">
                        <h3>${job.title}</h3>
                        <div class="job-company">${job.company}</div>
                    </div>
                </div>
                <div class="job-meta">
                    <span class="job-type">${job.type.replace('-', ' ')}</span>
                    <span class="job-location">${job.location}</span>
                </div>
                <div class="job-description">${job.description}</div>
                <div class="job-footer">
                    <div class="job-salary">${job.salary}</div>
                    <a href="#" class="btn btn-primary">Apply Now</a>
                </div>
            `;
            jobsContainer.appendChild(jobCard);
        });
    }
    
    // Initial render
    renderJobs();
    
    // Filter jobs
    jobFilter.addEventListener('change', function() {
        renderJobs(this.value);
    });
    
    // Form Submissions
    document.getElementById('login-form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Login functionality will be implemented with backend integration.');
        closeModal(modals.login);
    });
    
    document.getElementById('register-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const userType = document.querySelector('input[name="user-type"]:checked').value;
        alert(`Registration as ${userType.replace('-', ' ')} successful! (Backend integration needed)`);
        closeModal(modals.register);
    });
    
    document.getElementById('recruiter-form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Employer login functionality will be implemented with backend integration.');
        closeModal(modals.recruiter);
    });
    
    document.getElementById('post-job-form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Job posting functionality will be implemented with backend integration.');
        closeModal(modals.postJob);
    });
    
    document.getElementById('search-form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Job search functionality will be implemented with backend integration.');
    });
});
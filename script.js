      // Theme Toggle
      function toggleTheme() {
        const isDark = document.body.classList.toggle('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }
    
    // Initialize Theme and Animations
    document.addEventListener('DOMContentLoaded', () => {
        // Apply saved theme
        if (localStorage.getItem('theme') === 'dark') {
            document.body.classList.add('dark');
        }
    
        // Scroll animations
        const observer = new IntersectionObserver(
            entries => entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); // Stop observing once visible
                }
            }),
            { threshold: 0.1 }
        );
    
        document.querySelectorAll('section').forEach(section => observer.observe(section));
    });
    
    
            // Certificate slider
            let currentSlide = 0;
            const slides = document.querySelectorAll('.slide');
    
            function showSlide(n) {
                slides.forEach(slide => slide.classList.remove('active'));
                currentSlide = (n + slides.length) % slides.length;
                slides[currentSlide].classList.add('active');
            }
    
            function nextSlide() {
                showSlide(currentSlide + 1);
            }
    
            function prevSlide() {
                showSlide(currentSlide - 1);
            }
    
            // Auto advance slides
            setInterval(nextSlide, 4000);
    
            // Smooth scroll
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });
                });
            });
    
            function downloadCV() {
      // Replace with the actual link to your CV file
      const cvLink = './../documents/CV_Mohamed_Rayen_Khlifi.pdf';
      window.open(cvLink, '_blank');
    }

    
    


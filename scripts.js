// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Theme Toggle Functionality
  const themeToggle = document.getElementById("themeToggle")
  const htmlElement = document.documentElement
  const sunIcon = themeToggle?.querySelector(".sun-icon")
  const moonIcon = themeToggle?.querySelector(".moon-icon")

  console.log("Theme toggle button found:", themeToggle) // Debug log

  // Theme toggle click event
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      console.log("Theme toggle clicked") // Debug log
      
      htmlElement.classList.toggle("light-mode")
      
      // Toggle icons
      if (htmlElement.classList.contains("light-mode")) {
        console.log("Switching to light mode") // Debug log
        if (sunIcon) sunIcon.style.display = "none"
        if (moonIcon) moonIcon.style.display = "block"
      } else {
        console.log("Switching to dark mode") // Debug log
        if (sunIcon) sunIcon.style.display = "block"
        if (moonIcon) moonIcon.style.display = "none"
      }
    })
  } else {
    console.error("Theme toggle button not found!")
  }

  // Mobile Navigation Toggle
  const navToggle = document.getElementById("navToggle")
  const navMenu = document.getElementById("navMenu")

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active")
    })
  }

  // Smooth Scrolling for Navigation Links
  const navLinks = document.querySelectorAll(".nav-link")

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href")
      const targetSection = document.querySelector(targetId)

      if (targetSection) {
        // Close mobile menu if open
        if (navMenu) {
          navMenu.classList.remove("active")
        }

        // Scroll to section
        const offsetTop = targetSection.offsetTop - 70
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        })
      }
    })
  })

  // Active Navigation Link on Scroll
  const sections = document.querySelectorAll(".section, .hero")

  function updateActiveLink() {
    const scrollPosition = window.scrollY + 100

    sections.forEach((section) => {
      const sectionTop = section.offsetTop
      const sectionHeight = section.offsetHeight
      const sectionId = section.getAttribute("id")

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          link.classList.remove("active")
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active")
          }
        })
      }
    })
  }

  window.addEventListener("scroll", updateActiveLink)

  // Navbar Background on Scroll
  const navbar = document.getElementById("navbar")

  if (navbar) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled")
      } else {
        navbar.classList.remove("scrolled")
      }
    })
  }

  // Fade-in Animation on Scroll
  const fadeElements = document.querySelectorAll(
    ".timeline-item, .project-card, .education-card, .skill-category, .activity-card",
  )

  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in", "visible")
      }
    })
  }, observerOptions)

  fadeElements.forEach((element) => {
    element.classList.add("fade-in")
    observer.observe(element)
  })

  // Contact Form Handling
  const contactForm = document.getElementById("contactForm")

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      const name = document.getElementById("name").value
      const email = document.getElementById("email").value
      const message = document.getElementById("message").value

      // Create mailto link
      const subject = encodeURIComponent(`Portfolio Contact from ${name}`)
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)
      const mailtoLink = `mailto:medrayen.khlifi@gmail.com?subject=${subject}&body=${body}`

      // Open email client
      window.location.href = mailtoLink

      // Reset form
      contactForm.reset()

      // Show success message
      alert("Thank you for your message! Your email client will open to send the message.")
    })
  }

  // Parallax Effect for Hero Gradient
  const heroGradient = document.querySelector(".hero-gradient")

  if (heroGradient) {
    window.addEventListener("scroll", () => {
      const scrolled = window.scrollY
      const rate = scrolled * 0.5
      heroGradient.style.transform = `translateY(${rate}px)`
    })
  }
})


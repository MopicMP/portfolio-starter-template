/* ==========================================================
   Portfolio Starter Template — JavaScript
   - Theme toggle (dark/light)
   - Smooth scroll
   - Navbar scroll effect
   - Mobile menu
   - Fade-in on scroll
   ========================================================== */

(function () {
    'use strict';

    // ----- Theme Toggle -----
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle ? themeToggle.querySelector('.theme-icon') : null;

    function setTheme(mode) {
        document.documentElement.setAttribute('data-theme', mode);
        localStorage.setItem('theme', mode);
        if (themeIcon) {
            themeIcon.textContent = mode === 'dark' ? '\u2600' : '\u263E';
        }
    }

    const saved = localStorage.getItem('theme');
    if (saved) {
        setTheme(saved);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme('dark');
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', function () {
            const current = document.documentElement.getAttribute('data-theme');
            setTheme(current === 'dark' ? 'light' : 'dark');
        });
    }

    // ----- Navbar Scroll Shadow -----
    var navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 10) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // ----- Mobile Menu -----
    var hamburger = document.getElementById('hamburger');
    var navLinks = document.getElementById('nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function () {
            hamburger.classList.toggle('open');
            navLinks.classList.toggle('open');
        });

        // Close menu when a link is clicked
        navLinks.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                hamburger.classList.remove('open');
                navLinks.classList.remove('open');
            });
        });
    }

    // ----- Fade-in on Scroll -----
    var faders = document.querySelectorAll('.section');
    faders.forEach(function (el) {
        el.classList.add('fade-in');
    });

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.15 });

    faders.forEach(function (el) {
        observer.observe(el);
    });

    // ----- Active Nav Link -----
    var sections = document.querySelectorAll('.section, .hero');
    var links = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', function () {
        var scrollPos = window.scrollY + 100;

        sections.forEach(function (section) {
            if (section.offsetTop <= scrollPos &&
                section.offsetTop + section.offsetHeight > scrollPos) {
                var id = section.getAttribute('id');
                links.forEach(function (link) {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });

    // ----- Contact Form (demo) -----
    var form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            var name = form.querySelector('#name').value;
            alert('Thanks, ' + name + '! Your message was sent (demo).');
            form.reset();
        });
    }

})();


$(document).ready(function() {
    // Add loading animation on link clicks
    $('.login-option').on('click', function(e) {
        const $this = $(this);
        const loginType = $this.data('type');
        
        // Add loading state
        $this.addClass('loading');
        
        // Optional: Add tracking or validation here
        console.log(`Attempting to login as: ${loginType}`);
        
        // Allow natural link navigation after brief delay for animation
        setTimeout(function() {
            // The link will naturally navigate due to href attribute
            // This timeout just ensures the loading animation is visible
        }, 300);
    });

    // Add smooth scroll effect for better UX
    $('html').css('scroll-behavior', 'smooth');
    
    // Add click ripple effect
    $('.login-option').on('click', function(e) {
        const $button = $(this);
        const rect = this.getBoundingClientRect();
        const ripple = $('<span class="ripple"></span>');
        
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        ripple.css({
            position: 'absolute',
            left: x + 'px',
            top: y + 'px',
            width: '0',
            height: '0',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.5)',
            transform: 'translate(-50%, -50%)',
            animation: 'ripple-effect 0.6s linear',
            pointerEvents: 'none',
            zIndex: 1000
        });
        
        $button.css('position', 'relative').append(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
    
    // Add CSS for ripple animation
    const style = $('<style>').text(`
        @keyframes ripple-effect {
            to {
                width: 200px;
                height: 200px;
                opacity: 0;
            }
        }
    `);
    $('head').append(style);
    
    // Keyboard navigation support
    $('.login-option').on('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            $(this)[0].click();
        }
    });
    
    // Add focus styles for accessibility
    $('.login-option').attr('tabindex', '0');
    
    // Optional: Add form validation or redirect logic here
    function redirectToLogin(userType) {
        const baseUrl = window.location.origin;
        const redirectUrls = {
            'super-admin': `${baseUrl}/super-admin-login.php`,
            'supplier': `${baseUrl}/supplier-login.php`,
            'store': `${baseUrl}/store-login.php`
        };
        
        return redirectUrls[userType] || '#';
    }
    
    // Log when page loads
    console.log('Restomart Login Portal loaded successfully');
    
    // Add intersection observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationDelay = '0.1s';
                entry.target.style.animationFillMode = 'both';
            }
        });
    }, observerOptions);
    
    // Observe login options for staggered animation
    $('.login-option').each(function(index) {
        observer.observe(this);
        $(this).css('animation-delay', `${index * 0.1}s`);
    });
});

// Password toggle functionality
function togglePassword(inputId) {
    const passwordInput = document.getElementById(inputId);
    const toggleWrapper = passwordInput.parentElement.querySelector('.password-toggle');
    const eyeOpen = toggleWrapper.querySelector('#eye-open');
    const eyeClosed = toggleWrapper.querySelector('#eye-closed');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeOpen.style.display = 'none';
        eyeClosed.style.display = 'block';
    } else {
        passwordInput.type = 'password';
        eyeOpen.style.display = 'block';
        eyeClosed.style.display = 'none';
    }
}


// Form validation and enhancement
$(document).ready(function() {
    // Add form validation
    $('.login-form').on('submit', function(e) {
        e.preventDefault();
        
        const email = $(this).find('input[type="email"]').val();
        const password = $(this).find('input[type="password"]').val();
        
        if (!email || !password) {
            alert('Please fill in all required fields.');
            return;
        }
        
        // Add loading state to button
        const submitBtn = $(this).find('.login-btn');
        const originalText = submitBtn.text();
        submitBtn.text('Signing In...').prop('disabled', true);
        
        // Simulate login process
        setTimeout(() => {
            submitBtn.text(originalText).prop('disabled', false);
            alert('Login functionality would be implemented here.');
        }, 2000);
    });
    
    // Add focus effects
    $('.form-group input').on('focus', function() {
        $(this).parent().addClass('focused');
    }).on('blur', function() {
        $(this).parent().removeClass('focused');
    });
});
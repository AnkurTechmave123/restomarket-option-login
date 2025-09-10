// Forgot Password System
let currentStep = 1;
let userEmail = '';
let userType = '';
let resendTimer = null;
let countdownInterval = null;

// Get user type from URL parameter
function getUserType() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('type') || 'store';
}

// Initialize forgot password system
$(document).ready(function() {
    userType = getUserType();
    
    // Handle email form submission
    $('#email-form').on('submit', function(e) {
        e.preventDefault();
        const email = $('#forgot-email').val();
        
        if (validateEmail(email)) {
            userEmail = email;
            sendOTP(email);
        }
    });
    
    // Handle OTP form submission
    $('#otp-form').on('submit', function(e) {
        e.preventDefault();
        const otp = getOTPValue();
        
        if (otp.length === 6) {
            verifyOTP(otp);
        } else {
            showError('Please enter a valid 6-digit OTP');
        }
    });
    
    // Handle password form submission
    $('#password-form').on('submit', function(e) {
        e.preventDefault();
        const newPassword = $('#new-password').val();
        const confirmPassword = $('#confirm-password').val();
        
        if (validatePasswords(newPassword, confirmPassword)) {
            resetPassword(newPassword);
        }
    });
    
    // Handle back to login button
    $('#back-to-login').on('click', function() {
        redirectToLogin();
    });
    
    // Handle resend OTP
    $('#resend-otp').on('click', function(e) {
        e.preventDefault();
        if (!$(this).hasClass('disabled')) {
            sendOTP(userEmail, true);
        }
    });
    
    // OTP input handling
    setupOTPInputs();
    
    // Password strength checker
    $('#new-password').on('input', function() {
        checkPasswordStrength($(this).val());
    });
    
    // Password match checker
    $('#confirm-password').on('input', function() {
        checkPasswordMatch();
    });
});

// Step navigation
function showStep(step) {
    $('.forgot-step').removeClass('active');
    $(`#step-${step}`).addClass('active');
    currentStep = step;
}

// Email validation
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Send OTP
function sendOTP(email, isResend = false) {
    const submitBtn = isResend ? $('#resend-otp') : $('#email-form button[type="submit"]');
    const originalText = submitBtn.text();
    
    submitBtn.text(isResend ? 'Sending...' : 'Sending OTP...').prop('disabled', true);
    
    // Simulate API call
    setTimeout(() => {
        // In real implementation, make API call here
        console.log(`Sending OTP to: ${email} for user type: ${userType}`);
        
        $('#display-email').text(email);
        showStep('otp');
        startResendTimer();
        
        submitBtn.text(originalText).prop('disabled', false);
        
        if (!isResend) {
            showSuccess('OTP sent successfully to your email');
        } else {
            showSuccess('OTP resent successfully');
        }
    }, 2000);
}

// Setup OTP inputs
function setupOTPInputs() {
    const otpInputs = $('.otp-input');
    
    otpInputs.on('input', function(e) {
        const input = $(this);
        const value = input.val();
        
        // Only allow numbers
        if (!/^\d$/.test(value)) {
            input.val('');
            return;
        }
        
        // Move to next input
        const nextInput = input.next('.otp-input');
        if (nextInput.length && value) {
            nextInput.focus();
        }
    });
    
    otpInputs.on('keydown', function(e) {
        const input = $(this);
        
        // Handle backspace
        if (e.key === 'Backspace' && !input.val()) {
            const prevInput = input.prev('.otp-input');
            if (prevInput.length) {
                prevInput.focus();
            }
        }
        
        // Handle paste
        if (e.key === 'v' && (e.ctrlKey || e.metaKey)) {
            e.preventDefault();
            navigator.clipboard.readText().then(text => {
                const digits = text.replace(/\D/g, '').slice(0, 6);
                otpInputs.each(function(index) {
                    $(this).val(digits[index] || '');
                });
                if (digits.length === 6) {
                    otpInputs.last().focus();
                }
            });
        }
    });
}

// Get OTP value
function getOTPValue() {
    let otp = '';
    $('.otp-input').each(function() {
        otp += $(this).val();
    });
    return otp;
}

// Verify OTP
function verifyOTP(otp) {
    const submitBtn = $('#otp-form button[type="submit"]');
    const originalText = submitBtn.text();
    
    submitBtn.text('Verifying...').prop('disabled', true);
    
    // Simulate API call
    setTimeout(() => {
        // In real implementation, make API call here
        console.log(`Verifying OTP: ${otp} for email: ${userEmail}`);
        
        // Simulate successful verification (in real app, check with server)
        if (otp === '123456' || otp.length === 6) {
            showStep('password');
            clearResendTimer();
            showSuccess('OTP verified successfully');
        } else {
            showError('Invalid OTP. Please try again.');
            $('.otp-input').val('').first().focus();
        }
        
        submitBtn.text(originalText).prop('disabled', false);
    }, 1500);
}

// Start resend timer
function startResendTimer() {
    let seconds = 60;
    $('#resend-otp').addClass('disabled');
    $('#resend-timer').show();
    
    countdownInterval = setInterval(() => {
        seconds--;
        $('#countdown').text(seconds);
        
        if (seconds <= 0) {
            clearResendTimer();
        }
    }, 1000);
}

// Clear resend timer
function clearResendTimer() {
    if (countdownInterval) {
        clearInterval(countdownInterval);
        countdownInterval = null;
    }
    $('#resend-otp').removeClass('disabled');
    $('#resend-timer').hide();
}

// Password validation
function validatePasswords(password, confirmPassword) {
    if (password.length < 8) {
        showError('Password must be at least 8 characters long');
        return false;
    }
    
    if (password !== confirmPassword) {
        showError('Passwords do not match');
        return false;
    }
    
    return true;
}

// Check password strength
function checkPasswordStrength(password) {
    const strengthBar = $('#strength-fill');
    const strengthText = $('#strength-text');
    
    let strength = 0;
    let strengthLabel = '';
    let color = '';
    
    if (password.length >= 8) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    
    switch (strength) {
        case 0:
        case 1:
            strengthLabel = 'Very Weak';
            color = '#ef4444';
            break;
        case 2:
            strengthLabel = 'Weak';
            color = '#f97316';
            break;
        case 3:
            strengthLabel = 'Fair';
            color = '#eab308';
            break;
        case 4:
            strengthLabel = 'Good';
            color = '#22c55e';
            break;
        case 5:
            strengthLabel = 'Strong';
            color = '#10b981';
            break;
    }
    
    const percentage = (strength / 5) * 100;
    strengthBar.css({
        'width': `${percentage}%`,
        'background-color': color
    });
    strengthText.text(strengthLabel).css('color', color);
}

// Check password match
function checkPasswordMatch() {
    const password = $('#new-password').val();
    const confirmPassword = $('#confirm-password').val();
    const matchDiv = $('#password-match');
    
    if (confirmPassword.length > 0) {
        if (password === confirmPassword) {
            matchDiv.text('Passwords match').css('color', '#10b981').show();
        } else {
            matchDiv.text('Passwords do not match').css('color', '#ef4444').show();
        }
    } else {
        matchDiv.hide();
    }
}

// Reset password
function resetPassword(newPassword) {
    const submitBtn = $('#password-form button[type="submit"]');
    const originalText = submitBtn.text();
    
    submitBtn.text('Resetting Password...').prop('disabled', true);
    
    // Simulate API call
    setTimeout(() => {
        // In real implementation, make API call here
        console.log(`Resetting password for: ${userEmail} (${userType})`);
        
        showStep('success');
        submitBtn.text(originalText).prop('disabled', false);
    }, 2000);
}

// Redirect to appropriate login page
function redirectToLogin() {
    const loginPages = {
        'super-admin': 'super-admin-login.php',
        'supplier': 'supplier-login.php',
        'store': 'store-login.php'
    };
    
    window.location.href = loginPages[userType] || 'store-login.php';
}

// Go back function
function goBack() {
    if (currentStep === 1) {
        redirectToLogin();
    } else {
        // Go to previous step
        const steps = ['email', 'otp', 'password', 'success'];
        const currentIndex = steps.indexOf($('.forgot-step.active').attr('id').replace('step-', ''));
        if (currentIndex > 0) {
            showStep(steps[currentIndex - 1]);
        }
    }
}

// Utility functions
function showSuccess(message) {
    // Create and show success toast
    const toast = $(`
        <div class="toast toast-success">
            <div class="toast-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" fill="#10b981"/>
                    <path d="M9 12L11 14L15 10" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <span>${message}</span>
        </div>
    `);
    
    $('body').append(toast);
    setTimeout(() => toast.addClass('show'), 100);
    setTimeout(() => {
        toast.removeClass('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

function showError(message) {
    // Create and show error toast
    const toast = $(`
        <div class="toast toast-error">
            <div class="toast-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" fill="#ef4444"/>
                    <path d="M15 9L9 15M9 9L15 15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <span>${message}</span>
        </div>
    `);
    
    $('body').append(toast);
    setTimeout(() => toast.addClass('show'), 100);
    setTimeout(() => {
        toast.removeClass('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Enhanced password toggle for forgot password page
function togglePassword(inputId) {
    const passwordInput = document.getElementById(inputId);
    const toggleWrapper = passwordInput.parentElement.querySelector('.password-toggle');
    
    let eyeOpen, eyeClosed;
    
    if (inputId === 'new-password') {
        eyeOpen = document.getElementById('eye-open-new');
        eyeClosed = document.getElementById('eye-closed-new');
    } else if (inputId === 'confirm-password') {
        eyeOpen = document.getElementById('eye-open-confirm');
        eyeClosed = document.getElementById('eye-closed-confirm');
    } else {
        eyeOpen = toggleWrapper.querySelector('#eye-open');
        eyeClosed = toggleWrapper.querySelector('#eye-closed');
    }

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        if (eyeOpen) eyeOpen.style.display = 'none';
        if (eyeClosed) eyeClosed.style.display = 'block';
    } else {
        passwordInput.type = 'password';
        if (eyeOpen) eyeOpen.style.display = 'block';
        if (eyeClosed) eyeClosed.style.display = 'none';
    }
}
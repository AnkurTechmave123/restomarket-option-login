<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Forgot Password - Restomart</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <script src="https://code.iconify.design/iconify-icon/3.0.0/iconify-icon.min.js"></script>
</head>
<body>
    <div class="container">
        <div class="login-wrapper" style="grid-template-columns: 1fr; max-width: 500px;">
            <div class="login-card">
                <div class="back-link">
                    <a href="#" onclick="goBack()"><iconify-icon icon="bi:arrow-left"></iconify-icon> Back</a>
                </div>
                <div class="brand-section">
                    <div class="logo">
                        <img src="restomartlogotrim.png" alt="">
                    </div>
                </div>

                <!-- Step 1: Email Entry -->
                <div id="step-email" class="forgot-step active" style="display: block;">
                    <div class="welcome-section">
                        <h1>Forgot Password</h1>
                        <p>Enter your email address to receive an OTP</p>
                    </div>

                    <form class="forgot-form" id="email-form">
                        <div class="form-group">
                            <label for="forgot-email">Email Address</label>
                            <div class="input-wrapper">
                                <input type="email" id="forgot-email" name="email" class="email-input" placeholder="Enter your email" required>
                                <div class="input-icon">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <polyline points="22,6 12,13 2,6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        
                        <button type="submit" class="login-btn forgot-btn">Send OTP</button>
                    </form>
                </div>

                <!-- Step 2: OTP Verification -->
                <div id="step-otp" class="forgot-step" style="display: none;">
                    <div class="welcome-section">
                        <h1>Verify OTP</h1>
                        <p>Enter the 6-digit code sent to your email</p>
                        <div class="email-display">
                            <span id="display-email"></span>
                        </div>
                    </div>

                    <form class="forgot-form" id="otp-form">
                        <div class="otp-container">
                            <input type="text" class="otp-input" maxlength="1" pattern="[0-9]" required>
                            <input type="text" class="otp-input" maxlength="1" pattern="[0-9]" required>
                            <input type="text" class="otp-input" maxlength="1" pattern="[0-9]" required>
                            <input type="text" class="otp-input" maxlength="1" pattern="[0-9]" required>
                            <input type="text" class="otp-input" maxlength="1" pattern="[0-9]" required>
                            <input type="text" class="otp-input" maxlength="1" pattern="[0-9]" required>
                        </div>
                        
                        <div class="resend-section">
                            <p>Didn't receive the code? <a href="#" id="resend-otp">Resend OTP</a></p>
                            <div class="timer" id="resend-timer">Resend in <span id="countdown">60</span>s</div>
                        </div>
                        
                        <button type="submit" class="login-btn forgot-btn">Verify OTP</button>
                    </form>
                </div>

                <!-- Step 3: New Password -->
                <div id="step-password" class="forgot-step" style="display: none;">
                    <div class="welcome-section">
                        <h1>Reset Password</h1>
                        <p>Create a new password for your account</p>
                    </div>

                    <form class="forgot-form" id="password-form">
                        <div class="form-group">
                            <label for="new-password">New Password</label>
                            <div class="input-wrapper">
                                <input type="password" id="new-password" name="password" class="password-input" placeholder="Enter new password" required>
                                <div class="password-toggle" onclick="togglePassword('new-password')">
                                    <svg id="eye-open-new" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 12S5 4 12 4s11 8 11 8-4 8-11 8S1 12 1 12z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <svg id="eye-closed-new" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="display: none;">
                                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <line x1="1" y1="1" x2="23" y2="23" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                            <div class="password-strength">
                                <div class="strength-bar">
                                    <div class="strength-fill" id="strength-fill"></div>
                                </div>
                                <span class="strength-text" id="strength-text">Password strength</span>
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <label for="confirm-password">Confirm Password</label>
                            <div class="input-wrapper">
                                <input type="password" id="confirm-password" name="confirm_password" class="password-input" placeholder="Confirm new password" required>
                                <div class="password-toggle" onclick="togglePassword('confirm-password')">
                                    <svg id="eye-open-confirm" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 12S5 4 12 4s11 8 11 8-4 8-11 8S1 12 1 12z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <svg id="eye-closed-confirm" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="display: none;">
                                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <line x1="1" y1="1" x2="23" y2="23" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                            <div class="password-match" id="password-match"></div>
                        </div>
                        
                        <button type="submit" class="login-btn forgot-btn">Reset Password</button>
                    </form>
                </div>

                <!-- Step 4: Success -->
                <div id="step-success" class="forgot-step" style="display: none;">
                    <div class="success-section">
                        <div class="success-icon">
                            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="10" fill="#10b981"/>
                                <path d="M9 12L11 14L15 10" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <h1>Password Changed Successfully!</h1>
                        <p>Your password has been updated. You can now login with your new password.</p>
                        
                        <button type="button" class="login-btn forgot-btn" id="back-to-login">Back to Login</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <footer class="footer">
        <p>&copy; 2025, Restomart. All Rights Reserved.</p>
    </footer>
    
    <script src="script.js"></script>
    <script src="forgot-password.js"></script>
</body>
</html>
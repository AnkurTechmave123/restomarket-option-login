<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Restomart - Login Portal</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body>
    <div class="container">
        <div class="login-wrapper">
            <div class="login-card">
                <div class="brand-section">
                    <div class="logo">
                      <img src="restomartlogotrim.png" alt="">
                    </div>
                </div>

                <div class="welcome-section">
                    <h1>Welcome</h1>
                    <p>Select your login type to access your dashboard</p>
                </div>

                <div class="login-options">
                    <a href="super-admin-login.php" class="login-option super-admin" data-type="super-admin">
                        <div class="option-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" fill="currentColor"/>
                            </svg>
                        </div>
                        <div class="option-content">
                            <h3>Super Admin</h3>
                            <p>Full system access and management</p>
                        </div>
                        <div class="option-arrow">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </a>

                    <a href="supplier-login.php" class="login-option supplier" data-type="supplier">
                        <div class="option-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7M3 7L12 2L21 7M3 7L12 12L21 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12 12V19" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                            </svg>
                        </div>
                        <div class="option-content">
                            <h3>Supplier</h3>
                            <p>Manage inventory and orders</p>
                        </div>
                        <div class="option-arrow">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </a>

                    <a href="store-login.php" class="login-option store" data-type="store">
                        <div class="option-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M9 22V12H15V22" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div class="option-content">
                            <h3>Store</h3>
                            <p>Access your store dashboard</p>
                        </div>
                        <div class="option-arrow">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </a>
                </div>

                <div class="help-section">
                    <p>Need help? <a href="mailto:support@restomart.com">Contact Support</a></p>
                </div>
            </div>

            <!-- <div class="info-panel">
                <div class="info-content">
                    <div class="feature-highlight">
                        <div class="highlight-icon">
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="48" height="48" rx="24" fill="#EEF2FF"/>
                                <path d="M24 16V32M16 24H32" stroke="#4F46E5" stroke-width="2" stroke-linecap="round"/>
                            </svg>
                        </div>
                        <h3>Modern Grocery Management</h3>
                        <p>Streamline your grocery operations with our comprehensive management system designed for efficiency and growth.</p>
                    </div>
                    
                    <div class="features-list">
                        <div class="feature-item">
                            <div class="feature-dot"></div>
                            <span>Real-time inventory tracking</span>
                        </div>
                        <div class="feature-item">
                            <div class="feature-dot"></div>
                            <span>Supplier management tools</span>
                        </div>
                        <div class="feature-item">
                            <div class="feature-dot"></div>
                            <span>Advanced analytics dashboard</span>
                        </div>
                        <div class="feature-item">
                            <div class="feature-dot"></div>
                            <span>Multi-store support</span>
                        </div>
                    </div>
                </div>
            </div> -->
        </div>
    </div>

    <footer class="footer">
        <p>&copy; 2025, Restomart. All Rights Reserved.</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>
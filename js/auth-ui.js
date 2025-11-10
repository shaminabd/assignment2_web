document.addEventListener('DOMContentLoaded', function() {
    updateAuthUI();
});

function getAuthPath() {
    const currentPath = window.location.pathname;
    
    if (currentPath.includes('/header_pages/')) {
        return 'auth.html';
    }
    else if (currentPath.includes('/course-details/')) {
        return '../header_pages/auth.html';
    }
    else {
        return 'header_pages/auth.html';
    }
}

function getProfilePath() {
    const currentPath = window.location.pathname;
    
    if (currentPath.includes('/header_pages/')) {
        return 'profile.html';
    }
    else if (currentPath.includes('/course-details/')) {
        return '../header_pages/profile.html';
    }
    else {
        return 'header_pages/profile.html';
    }
}

function updateAuthUI() {
    const navbarNav = document.querySelector('.collapse.navbar-collapse');
    if (!navbarNav) return;

    let authHTML = document.getElementById('authButtons');
    if (authHTML) authHTML.remove();

    const authDiv = document.createElement('div');
    authDiv.id = 'authButtons';
    authDiv.className = 'd-flex flex-column flex-md-row gap-2 align-items-center mt-3 mt-md-0 ms-md-3 auth-buttons-container';

    const authPath = getAuthPath();
    const profilePath = getProfilePath();

    if (auth.isLoggedIn()) {
        const user = auth.getCurrentUser();
        authDiv.innerHTML = `
            <small class="text-white d-block d-md-inline mb-2 mb-md-0">Welcome, ${user.name}!</small>
            <a href="${profilePath}" class="btn btn-sm btn-light auth-profile-btn w-100 w-md-auto" title="View your profile">👤 Profile</a>
            <button onclick="handleLogout()" class="btn btn-sm btn-warning auth-logout-btn w-100 w-md-auto" title="Log out">🚪 Logout</button>
        `;
    } else {
        authDiv.innerHTML = `
            <a href="${authPath}" class="btn btn-sm btn-light auth-btn w-100 w-md-auto" title="Sign up or log in">🔐 Auth</a>
        `;
    }

    navbarNav.appendChild(authDiv);
}

function handleLogout() {
    if (confirm('Are you sure you want to log out?')) {
        auth.logout();
        if (typeof showToast === 'function') {
            showToast('Logged out successfully!', 'success');
        }
        updateAuthUI();
        if (window.location.pathname.includes('profile.html')) {
            window.location.href = 'index.html';
        }
    }
}


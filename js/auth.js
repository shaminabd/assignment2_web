// ============================================
// Authentication Module (Local Storage)
// ============================================

class AuthManager {
    constructor() {
        this.users = JSON.parse(localStorage.getItem('users')) || [];
        this.currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
    }

    // Save users to localStorage
    saveUsers() {
        localStorage.setItem('users', JSON.stringify(this.users));
    }

    // Save current user session
    saveSession(user) {
        this.currentUser = user;
        localStorage.setItem('currentUser', JSON.stringify(user));
    }

    // Check if email already exists
    emailExists(email) {
        return this.users.some(user => user.email === email);
    }

    // Sign Up
    signup(name, email, password) {
        if (!name || !email || !password) {
            return { success: false, message: 'All fields are required' };
        }

        if (this.emailExists(email)) {
            return { success: false, message: 'Email already registered' };
        }

        if (password.length < 6) {
            return { success: false, message: 'Password must be at least 6 characters' };
        }

        const newUser = {
            id: Date.now(),
            name,
            email,
            password: this.hashPassword(password),
            createdAt: new Date().toISOString()
        };

        this.users.push(newUser);
        this.saveUsers();
        return { success: true, message: 'Account created successfully!' };
    }

    // Log In
    login(email, password) {
        if (!email || !password) {
            return { success: false, message: 'Email and password are required' };
        }

        const user = this.users.find(u => u.email === email);
        if (!user) {
            return { success: false, message: 'Email not found' };
        }

        if (user.password !== this.hashPassword(password)) {
            return { success: false, message: 'Incorrect password' };
        }

        // Create session object (without password)
        const sessionUser = {
            id: user.id,
            name: user.name,
            email: user.email,
            createdAt: user.createdAt
        };

        this.saveSession(sessionUser);
        return { success: true, message: 'Logged in successfully!', user: sessionUser };
    }

    // Log Out
    logout() {
        this.currentUser = null;
        localStorage.removeItem('currentUser');
    }

    // Get current user
    getCurrentUser() {
        return this.currentUser;
    }

    // Check if user is logged in
    isLoggedIn() {
        return this.currentUser !== null;
    }

    // Simple password hash (for demo purposes only)
    hashPassword(password) {
        let hash = 0;
        for (let i = 0; i < password.length; i++) {
            const char = password.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash; // Convert to 32bit integer
        }
        return Math.abs(hash).toString();
    }
}

// Initialize Auth Manager globally
const auth = new AuthManager();


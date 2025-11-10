class AuthManager {
    constructor() {
        this.users = JSON.parse(localStorage.getItem('users')) || [];
        this.currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
    }

    saveUsers() {
        localStorage.setItem('users', JSON.stringify(this.users));
    }

    saveSession(user) {
        this.currentUser = user;
        localStorage.setItem('currentUser', JSON.stringify(user));
    }

    emailExists(email) {
        return this.users.some(user => user.email === email);
    }

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

        const sessionUser = {
            id: user.id,
            name: user.name,
            email: user.email,
            createdAt: user.createdAt
        };

        this.saveSession(sessionUser);
        return { success: true, message: 'Logged in successfully!', user: sessionUser };
    }

    logout() {
        this.currentUser = null;
        localStorage.removeItem('currentUser');
    }

    getCurrentUser() {
        return this.currentUser;
    }

    isLoggedIn() {
        return this.currentUser !== null;
    }

    hashPassword(password) {
        let hash = 0;
        for (let i = 0; i < password.length; i++) {
            const char = password.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash;
        }
        return Math.abs(hash).toString();
    }
}

const auth = new AuthManager();


// authGuard.js
// import AuthService from '@/services/auth';

export async function requireAuth(to, from, next) {
    if (to.meta.requiresAuth) {
        const token = localStorage.getItem('token');
        if(token)
            // await AuthService.checkLoggedIn();
            next();
         else
            next({ name: 'login' });

    } else {
        next();
    }
}

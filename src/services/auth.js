// Servizio di autenticazione
import axios from "axios";

const AuthService = {
    // Metodo per verificare se l'utente è loggato
    async checkLoggedIn() {
        await axios.get('logged')
            .then(response => {
                return response
            })
            .catch(error =>{
                localStorage.removeItem('token')
                throw error
            })
    },
};

export default AuthService;

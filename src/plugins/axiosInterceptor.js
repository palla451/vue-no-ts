import axios from "axios";
import VueAxios from "vue-axios";
// import router from "@/router";

// Configura Axios
axios.defaults.baseURL = process.env.VUE_APP_BASE_URI;

// Interceptor di richiesta
axios.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// // Interceptor di risposta
// axios.interceptors.response.use(
//     (response) => {
//         console.log('Response Interceptor:', response);
//         return response;
//     },
//     (error) => {
//         if (error.response) {
//             const status = error.response.status;
//             if (status === 401) {
//                 // Errore di autenticazione (non autorizzato), cancella il token e reindirizza
//                 console.error('Token scaduto o non valido');
//                 localStorage.removeItem('token');
//                 router.push('/login');
//             } else if (status === 403) {
//                 // Altri errori di autorizzazione, gestisci come necessario
//                 console.error('Accesso vietato');
//                 router.push('/error');
//             } else {
//                 // Gestisci altri errori come desiderato
//                 console.error('Response Interceptor Error:', error);
//             }
//         } else {
//             // Gestisci altri tipi di errori come desiderato
//             console.error('Response Interceptor Error:', error);
//         }
//
//         return Promise.reject(error);
//     }
// );


// Esporta l'istanza di axios con gli interceptor configurati
// export const axiosInstance = axios;

// Esporta il plugin VueAxios
export const VueAxiosPlugin = {
    install(app) {
        app.use(VueAxios, axios);
    }
};

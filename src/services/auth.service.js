import axios from 'axios'

const API_URL = 'http://localhost:8070/users'

class AuthService {
    register(user) {
        return axios.post(API_URL + '/signup', {
            name: user.name,
            surname: user.surname,
            email: user.email,
            password: user.password
        });
    }
}

export default new AuthService();
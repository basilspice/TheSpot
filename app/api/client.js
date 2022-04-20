import {create} from 'apisauce';

const apiClient = create({
  baseURL: 'http://192.168.1.8:9000/api'  
})

apiClient.get('/listlings').then(response => {
    if (!response.ok) {
        response.problem
    }
})

export default apiClient;
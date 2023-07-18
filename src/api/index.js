import axios from 'axios';

// Cria uma instância do axios
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});

// Interceptor de requisições
apiClient.interceptors.request.use(config => {
  // Aqui você pode adicionar qualquer lógica que deve ser executada antes da requisição ser enviada
  // como, por exemplo, adicionar um token de autenticação ao cabeçalho.

  return config;
});

export default apiClient;

import routes from './routes.js';

// Libs
import http from 'http';

const PORT = 3000;
const DEFAULT_HEADER = {'Content-type': 'application/json'}


const handler = (request, response) => {
    const {url, method} = request;
    const [path, route, id] = url.split("/");

    // Criar queryString, verifica se é numero e converte
    request.queryString = {id: isNaN(id) ? id : Number(id)};
    
    // Rota + Método
    const key = `/${route}:${method.toLowerCase()}`;

    response.writeHead(200, DEFAULT_HEADER);

    const chosen = routes[key] || routes.default
    return chosen(request, response);    
}

http.createServer(handler)
    .listen(PORT, () => console.log('running', PORT ));
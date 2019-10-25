import { request, createServer, IncomingMessage, ServerResponse } from 'http';
import * as URL from 'url';
import datas from './datas';
import finder from './helpers';
    
const port: number = 8081;
interface URL {
    main: string;
    userList: string;
    prodList: string;
}
const ulrAdress: URL = {
    main: '/main',
    userList: '/users',
    prodList: '/products',
}
const server = createServer((request: IncomingMessage, response: ServerResponse) => {
    function responseSend(data: Array<Object>) {
        const entityData: String = JSON.stringify(data);
        response.writeHead(200, { 'Content-Type': 'application/json' })
        response.end(entityData)
    }
    if (request.method === 'POST') {
        // setTimeout(() => response.end('2000ms'), 5000)
        let body: Array<any> = [];
        request.on('error', (err) => {
            console.error(err);
        }).on('data', (chunk) => {
            body.push(chunk);
        }).on('end', () => {
            const allBody = Buffer.concat(body).toString();
            response.on('error', (err) => {
                console.error(err);
            });
            response.writeHead(200, { 'Content-Type': 'application/json' })
            const responseBody = { allBody };

            response.write(JSON.stringify(responseBody));
            response.end();
        })
    } else {
        console.log(request.url)
        const url: string = request.url || '';
        const ID: number = +URL.parse(url, true).query.userId;
        const ProdID: number = +URL.parse(url, true).query.prodId;
        switch (request.url) {
            case '/': {
                response.writeHead(200, { 'Content-Type': 'text/html' });
                response.write('<h1>HTML documnet</h1>');
                response.write('<p>Hello world</p>')
                response.end();
            }
                break;
            case '/users': {
                // console.log(request.url)
                responseSend(datas.userLIst)
            }
                break;
            case '/products': {
                responseSend(datas.productList)
            }
            break;
            case `/users?userId=${ID}`: {
                let userReceive: Object = finder(ID, datas.userLIst) || {};
                userReceive = JSON.stringify(userReceive)
                response.writeHead(200, { 'Content-Type': 'application/json' })
                response.end(userReceive)
            }
                break;
            case `/products?prodId=${ProdID}`: {
                let productReceive: Object = finder(ProdID, datas.productList) || {};
                productReceive = JSON.stringify(productReceive)
                response.writeHead(200, { 'Content-Type': 'application/json' })
                response.end(productReceive);
            }
        }


    }
});

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

// console.log(66565)
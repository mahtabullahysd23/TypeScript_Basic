import express,{Express,Request,Response} from 'express';

const app:Express = express();

app.get('/', (req:Request, res:Response) => {
    res.send('Hello');
});

app.get('/hi', (req:Request, res:Response) => {
    res.send('Hello World ki khobor!');
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});
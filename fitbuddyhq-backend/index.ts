import express, {Express, Request, Response} from 'express';
const app: Express = express();
const port = 8000;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!!');
});


app.get("/hi", (req: Request, res: Response) => {
    res.send("Bye there!");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
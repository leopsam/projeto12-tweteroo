import express from 'express';
import cors from 'cors'; 

const app = express();
app.use(cors()); 

app.get("/teste", (req, res) => {
    res.send("Hello World");
});

app.get("/teste2", (req, res) => {
    res.send('foi');
});

app.listen(5000, () => {
	console.log("Servidor rodou de boas!")
});
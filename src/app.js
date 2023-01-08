import express from 'express';
import cors from 'cors'; 

const user1 = {
	username: 'leonardo2015', 
	avatar: "https://i1.sndcdn.com/avatars-1zHN7xdLem5rBIJu-NmQ79g-t500x500.jpg" 
}

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
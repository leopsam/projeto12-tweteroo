import express from 'express'
import cors from 'cors' 

const users = [
	{
		username: 'bobesponja', 
		avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info" 
	}
]

const tweets = []

//--------------------------------------------------------

const app = express()
app.use(cors())
app.use(express.json());

app.post('/sign-up', (req, res) => {
	const user = req.body
	users.push(user)
  	res.send("OK")
})

//--------------------------------------------------------

app.post('/tweets', (req, res) => {
	const newTweet = req.body

	/*if(!users.username){
		return res.sendStatus(401)
	}*/
	
	tweets.push(newTweet)
  	res.send(newTweet)
})

//--------------------------------------------------------

app.get("/tweets", (req, res) => {
	
	
})

//--------------------------------------------------------

app.listen(5000, () => {
	console.log("Servidor rodou de boas!")
})
import express from 'express'
import cors from 'cors' 

const users = []
const tweets = []

const app = express()
app.use(cors())
app.use(express.json());

app.post('/sign-up', (req, res) => {

	const user = req.body	
	users.push(user)
	res.sendStatus(200)
})

app.post('/tweets', (req, res) => {
	const newTweet = req.body

	if(!users[0].username){
		return res.sendStatus(401)
	}
	
	tweets.push(newTweet)
	res.sendStatus(200)
})

app.get("/tweets", (req, res) => {
	
	const photo = users[0].avatar

	const tweetPhoto = tweets.map(tweet => tweet = {...tweet, avatar: photo})

	const tweetsReverse = [...tweetPhoto]

    const newTweets = tweetsReverse.reverse().slice(0, 10)

    res.send(newTweets)
	
})

app.listen(5000, () => {
	console.log("Servidor rodou de boas!")
})
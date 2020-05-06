const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user.js')
const taskRouter = require('./routers/task.js')

const app = express()
const port = process.env.PORT

// const multer = require('multer')
// const upload = multer({
// 	dest: 'images',
// 	limits: {
// 		fileSize: 1000000
// 	},
// 	fileFilter(req, file, cb){
// 		if (!file.originalname.match(/\.(doc|docx)$/)) {
// 			return cb(new Error('upload a word'))
// 		}

// 		cb(undefined, true)

// 		// cb(new Error('file must be a PDF'))
// 		// cb(undefined, true)
// 		// cb(undefined, false)

// 	}
// })

// const errorMiddleware = (req, res, next) =>{
// 	throw new Error('FROM midlware')
// } 
// app.post('/uploads', upload.single('upload'), (req, res) => {
// 	res.send()
// }, (error, req, res, next) => {
// 	res.status(400).send({ error: error.message})
// })



// app.use((req, res, next) => {
// 	if (req.method === 'GET') {
// 		res.send('GET req')
// 	} else {
// 		next()
// 	}
// })

// app.use((req, res, next) => {
// 	res.status(503).send('Site is down')
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
	console.log('server is up on port '+ port +'.')
})

// const pet = {
// 	name: "hell"
// }

// pet.toJSON = function () {
// 	console.log(this)
// 	return this
// }

// console.log(JSON.stringify(pet))
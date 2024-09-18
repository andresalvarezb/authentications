import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'

const app = express()

// global middlewares
app.use(cors())
app.use(express.json())
app.use(cookieParser('secretKey')) // add a sing to analyze cookies


// routes
app.use('/api/users', userRoutes)

app.post('/', (req, res) => {
    const { email, password } = req.body

    const user = users.find(user => user.email === email)

    if (!user) {
        return res.status(401).send('Invalid credential')
    }
    return res.status(200).send('Hi, ' + user.name)
})


// app.get('/', (req, res) => {
//     // res.cookie('nameCookie', 'valueCookie', {signed:true, maxAge: 5000})
//     res.status(200).send('Cookie created')
// })

// app.get('/cookie', (req, res) => {
//     const signedCookie = req.signedCookies.nameCookie
//     if (signedCookie) {
//         res.send('Cookie: ' + signedCookie)
//     } else {
//         res.send('Invalid cookie')
//     }
// })

// app.get('/deleteCookie', (req, res) => {
//     res.clearCookie('nameCookie')
//     res.send('Cookie deleted')
// })

app.listen(3000, () => {
    console.log('RUNNING SERVER: http://localhost:3000')
})

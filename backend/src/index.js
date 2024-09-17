import express from 'express'
import cookieParser from 'cookie-parser'

const app = express()
app.use(express.json())
app.use(cookieParser('secretKey')) // add a sing to analyze cookies

app.get('/', (req, res) => {
    res.cookie('nameCookie', 'valueCookie', {signed:true, maxAge: 5000})
    res.send('Cookie created')
})

app.get('/cookie', (req, res) => {
    const signedCookie = req.signedCookies.nameCookie
    if (signedCookie) {
        res.send('Cookie: ' + signedCookie)
    } else {
        res.send('Invalid cookie')
    }
})

app.get('/deleteCookie', (req, res) => {
    res.clearCookie('nameCookie')
    res.send('Cookie deleted')
})

app.listen(3000, () => {
    console.log('RUNNING SERVER: http://localhost:3000')
})

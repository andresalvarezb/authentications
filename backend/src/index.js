import express from 'express'
import cookieParser from 'cookie-parser'

const app = express()
app.use(express.json())
app.use(cookieParser())

app.get('/', (req, res) => {
    res.cookie('nameCookie', 'valueCookie')
    res.send('Cookie created')
})

app.get('/cookie', (req, res) => {
    res.send('Cookie: ' + req.cookies.nameCookie)
})

app.get('/deleteCookie', (req, res) => {
    res.clearCookie('nameCookie')
    res.send('Cookie deleted')
})

app.listen(3000, () => {
    console.log('RUNNING SERVER: http://localhost:3000')
})

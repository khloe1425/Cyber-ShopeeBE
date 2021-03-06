const express = require('express')
const app = express()
const path = require('path')
const session = require('express-session')
const shopOwnerRouter = require('./router/shop-owner')
const clientRouter = require('./router/client')
const adminRouter = require('./router/admin')
const updateData = require('./controller/utils/update_data')
const { checkUser } = require('./middleware/auth')
const bodyParser = require('body-parser')
updateData()

const cookieParser = require('cookie-parser')
const db = require('./config/db')

//connect db
db.authenticate()
    .then((console.log('connected')))
    .catch((error) => console.log(error))

//view engine
app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'ejs')

//session
app.use(session({
    secret: 'Your_Secret_Key',
    resave: true,
    saveUninitialized: true
}))

//middleware
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, './public')))
app.use(cookieParser())
app.use(checkUser)

//router
app.use(clientRouter)
app.use('/my-shop', shopOwnerRouter)
app.use('/admin', adminRouter)

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`sever is running on ${port}`)
})



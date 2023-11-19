const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 8080;
const authRouter = require('./routes/authRoute')
const productRouter = require('./routes/productRoute')
const blogRouter = require('./routes/blogRoute')
const categoryRouter = require('./routes/categoryRoute')
const blogCatRouter = require('./routes/blogCatRoute')
const brandRouter = require('./routes/brandRoute')
const couponRouter = require('./routes/couponRoute')
const authorRouter = require('./routes/authorRoute')
const uploadRouter = require('./routes/uploadRoute');
const tagRouter = require('./routes/tagRoute')
const enquireRouter = require('./routes/enquireRoute')
const dbConnect = require('./config/dbConnect');
const bodyParser = require('body-parser');
const cors = require('cors')
const { notFound, errorHandle } = require('./middlewares/errorHandle');
const cookieParser = require("cookie-parser") 
const morgan = require('morgan')
dbConnect()
app.use(cors())
app.use(morgan("dev"))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))
app.use(cookieParser())

app.use("/api/user",authRouter);
app.use("/api/product",productRouter);
app.use("/api/blog",blogRouter);
app.use("/api/category",categoryRouter);
app.use("/api/blogcategory",blogCatRouter);
app.use("/api/brand",brandRouter)
app.use("/api/coupon",couponRouter)
app.use("/api/author",authorRouter)
app.use("/api/tag",tagRouter)
app.use("/api/enquiry",enquireRouter)
app.use("/api/upload", uploadRouter);
app.use(notFound)
app.use(errorHandle)

app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`)
});





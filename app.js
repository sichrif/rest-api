const express = require('express');
const app = express();
const mongoose = require('mongoose');
const {MONGODB} = require('./config');
const userRoutes = require('./routes/user');
const adminRoutes= require('./routes/admin')
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const AppError = require('./utils/appError')
const swaggerUi = require('swagger-ui-express') // To bind express with express and show ui provided by swagger js-doc
const swaggerDocument = require('./routes/swagger.json')


const multer = require('multer');
const upload = multer({

    dest:'image', 

    limits :{ 
        fileSize : 1000000
    },
    fileFilter(req,file,cb){

        if (! file.originalname.match(/\.(doc|docx)$/)){
            return cb(new Error ('please upload a word document'))
        }
        cb (undefined,true)
    }


})

app.post('/upload',upload.single('images'),(req,res)=>{

    res.send()


})








app.use(bodyParser.json());
app.use('/api/users', userRoutes);
app.use('/api/users', adminRoutes);

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));







// app.listen(3300)
mongoose.connect(MONGODB, {useNewUrlParser: true})
    .then(() => {
        console.log('connected to mongodb')
        return app.listen(3300);
    })
    .then(() => console.log('server running on 3300'))
    .catch(err => console.log(err.message));

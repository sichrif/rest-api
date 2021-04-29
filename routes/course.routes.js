module.exports = (app) => {
    const courses = require('../controllers/course.controller.js');


    app.post('/courses', courses.create);

    
    app.get('/courses', courses.findAll);

   
    app.get('/courses/:courseId', courses.findOne);

    
    app.put('/courses/:courseId', courses.update);

    
    app.delete('/courses/:courseId', courses.delete);
}

const Course = require('../models/course.model');

// Create and Save a new course => POST
exports.create = (req, res) => {
    // Validate request
    if(!req.body.titre) {
        return res.status(400).send({
            message: "coursecontent can not be empty"
        });
    }

    // Create a course
    const course = new Course({
        titre: req.body.titre || "Untitled course", 
        description: req.body.description
        
    });

    // Save course in the database
    course.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the admicoursen."
        });
    });
};

// Retrieve and return all course from the database. => GET
exports.findAll = (req, res) => {
    Course.find()
    .then(courses => {
        res.send(courses);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving courses."
        });
    });
};

// Find a single course with a courseId => GET/ID
exports.findOne = (req, res) => {
    Course.findById(req.params.courseId)
    .then(course => {
        if(!course) {
            return res.status(404).send({
                message: "course not found with id " + req.params.courseId
            });            
        }
        res.send(course);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "course not found with id " + req.params.courseId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving course with id " + req.params.courseId
        });
    });
};

// Update a course identified by the courseId in the request => PUT/ID
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.titre) {
        return res.status(400).send({
            message: "course content can not be empty"
        });
    }

    // Find course and update it with the request body
    Course.findByIdAndUpdate(req.params.courseId, {
        titre: req.body.titre || "Untitled course", 
        description: req.body.description
    }, {new: true})
    .then(course => {
        if(!course) {
            return res.status(404).send({
                message: "course not found with id " + req.params.courseId
            });
        }
        res.send(course);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "course not found with id " + req.params.courseId
            });                
        }
        return res.status(500).send({
            message: "Error updating course with id " + req.params.courseId
        });
    });
};

// Delete a course with the specified courseId in the request => DELETE/ID
exports.delete = (req, res) => {
    Course.findByIdAndRemove(req.params.courseId)
    .then(course => {
        if(!course) {
            return res.status(404).send({
                message: "course not found with id " + req.params.courseId
            });
        }
        res.send({message: "course deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "course not found with id " + req.params.courseId
            });                
        }
        return res.status(500).send({
            message: "Could not delete course with id " + req.params.courseId
        });
    });
};

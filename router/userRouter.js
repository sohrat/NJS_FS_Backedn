const express = require('express');
const router = express.Router();

// Users GET
// http://localhost:3001/users
router.get('/', (req,res,next)=>{
    res.status(200).json({
        message: 'Successful - GET',
        metadata: {
            hostname: req.hostname,
            method: req.method,

        },
    });
});

// Users POST
// http://localhost:3001/users
router.post('/', (req,res,next)=>{
    res.status(201).json({
        message: 'Successful - POST',
        metadata: {
            hostname: req.hostname,
            method: req.method,

        },
    });
});

// Users DELETE
// http://localhost:3001/users
router.delete('/', (req,res,next)=>{
    res.status(200).json({
        message: 'Successful - DELETE',
        metadata: {
            hostname: req.hostname,
            method: req.method,

        },
    });
});


// ID GET
// http:localhost:3002/users/1212
router.get('/:id', (req,res,next)=>{
    res.status(200).json({
        message: 'Successful - GET by ID',
        metadata: {
            id: req.params.id,
            hostname: req.hostname,
        },
    });
});



// ID POST
// http:localhost:3002/users/1212
router.post('/:id', (req,res,next)=>{
    res.status(201).json({
        message: 'Successful - POST by ID',
        metadata: {
            id: req.params.id,
            hostname: req.hostname,
        },
    });
});

// ID DELETE
// http:localhost:3002/users/1212
router.delete('/:id', (req,res,next)=>{
    res.status(200).json({
        message: 'Successful - Delete by ID',
        metadata: {
            id: req.params.id,
            hostname: req.hostname,
        },
    });
});


module.exports = router;
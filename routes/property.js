const router = require('express').Router()
const database = require('../database/propertyAPI')

router.get('/', (req, res) => {
    database.getProperty()
        .then((property) => {
            res.send(property)
        })
})

router.get('/:id', (req, res) => {
    database.getSingleProperty(req.params.id).then((property) => {
        res.send(property)
    })
})

router.post('/', (req, res) => {
    database.createProperty(req.body)
        .then((data) => {
            res.send(data)
        })
})

router.patch('/:id', (req, res) => {
    database.editProperty(req.params.id, req.body).then((id) => {
        res.json(id)
    })
})

router.delete('/:id', (req, res) => {
    database.deleteProperty(req.params.id).then((id) => {
        res.json(id)
    })
})


module.exports = router

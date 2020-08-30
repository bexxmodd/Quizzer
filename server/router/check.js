const router = require('express').Router()


router.get('/', (req,res) => {
    
    return res.json({name: 'Souvik'})
})

module.exports = router
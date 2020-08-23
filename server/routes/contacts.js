const express = require('express')
const router = express.Router();

// @route   Get api/contacts
// desc    Get all users contact
// access  Privqte
router.get('/', (req,res) => {
    res.send('Get all contact')
})

// @route   POST api/contacts
// desc    Add new contacts
// access  Private
router.post('/', (req,res) => {
    res.send('add new contact')
})

// @route   PUT api/contacts/:id
// desc    update contact
// access  Private
router.put('/:id', (req,res) => {
    res.send('update contact user')
})

// @route   DELETE api/contacts/:id
// desc    delete contact
// access  Private
router.delete('/:id', (req,res) => {
    res.send('delete contact ')
})

module.exports = router;
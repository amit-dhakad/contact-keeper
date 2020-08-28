const express = require('express')
const router = express.Router();
const auth = require('../middleware/auth')
const {check, validationResult} = require('express-validator/check');
const User = require('../models/User');
const Contact = require('../models/Contact');

// @route   Get api/contacts
// desc    Get all users contact
// access  Privqte
router.get('/',auth, async (req,res) => {
  try {
      const contacts = await Contact.find({user: req.user.id}).sort({
          date: -1
      });

      res.json(contacts);

  } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');


  }
});

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
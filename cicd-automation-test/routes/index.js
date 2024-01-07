const express = require('express')
const router = express.Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')

router.post('/login', async (req, res, next) => {
  try {
    const { email, password } = req.body

    if (!email || !email.length) {
      return res.status(422).send({
        message: 'email is required and must not be empty'
      })
    }

    if (!password || !password.length) {
      return res.status(422).send({
        message: 'Password is required and must not be empty'
      })
    }

    const user = await User.findOne({ email }).select('+password')
                      
    if (!user) {
      return res.status(404).send({
        message: 'User not found'
      })
    }

    if (!bcrypt.compareSync(password, user.password)) {
      return res.status(404).send({
        message: 'Password is incorrect'
      })
    }

    const { password: _password, ...result } = user.toObject()

    return res.json(result)
  } catch (error) {
    return res.status(500).send({
      message: 'Server error'
    })
  }
})


router.post('/register', async (req, res, next) => {
  try {
    const { email, password, displayName } = req.body

    if (!email || !email.length) {
      return res.status(422).send({
        message: 'Email is required and must not be empty'
      })
    }

    if (!password || !password.length) {
      return res.status(422).send({
        message: 'Password is required and must not be empty'
      })
    }

    if (!displayName || !displayName.length) {
      return res.status(422).send({
        message: 'Display name is required and must not be empty'
      })
    }  

    // const exist = await User.findOne({ email })

    // if (exist) {
    //   return res.status(409).send({
    //     message: 'email is already exist'
    //   })
    // }

    const user = new User({
      email,
      password,
      displayName
    })

    await user.save()

    return res.json({
      message: 'success'
    })
  } catch (error) {
    if (error.name === 'ValidationError') {
      return res.status(400).json({ error: error.message })
    }

    return res.status(500).send({
      message: 'Server error'
    })
  }
})

module.exports = router

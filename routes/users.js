const _ = require('lodash')
const users = require('../data/users.json')

const router = require('express-async-router').AsyncRouter()

router.get('/', (req, res) => {
  const page = Number(req.query.page) || 1
  const perPage = Number(req.query.per_page) || 30
  const offset = (page - 1) * perPage
  return res.render('users-index.pug', {
    users: _.slice(users, offset, offset + perPage)
  })
})

router.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  const user = _.find(users, { id })
  if (!user) {
    res.status(404)
    return res.send({ message: 'user not found' })
  }
  return res.render('users-show.pug', { user })
})

module.exports = router

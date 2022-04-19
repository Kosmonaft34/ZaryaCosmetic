import Router from 'express'

const userRouter = require('./userRouter')

const router = new Router()

// Для того чтобы загрузить функцию промежуточного обработчика вызываем app.use() с указанием соответствующей функции
router.use('/')
router.use('/category')
router.use('/brand')
router.use('/user')

export default router
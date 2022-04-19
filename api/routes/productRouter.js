import Router from 'express'
const router = new Router()

router.post('/')
router.get('/')
    // получаем отдельно взяты товар
router.get('/:id')

export default router
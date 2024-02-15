import { Router } from 'express'
import { createTask, deleteTaks, getTask, getTasks, getTasksCount, updateTask } from '../controllers/tasks'

const router = Router()

router.get('/tasks', getTasks)
router.get('/tasks/count', getTasksCount)
router.get('/tasks/:id', getTask)
router.post('/tasks', createTask)
router.delete('/tasks/:id', deleteTaks)
router.put('/tasks/:id', updateTask)

export default router
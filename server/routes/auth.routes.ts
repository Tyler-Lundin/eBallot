/* AUTH ROUTES
 * @collapse
 *
 */

import { Router, Request, Response } from 'express'
import { loginUser, registerUser } from '../controllers/auth.controller'
import loginFormValidation from '../middleware/loginFormValidation'
import registerFormValidation from '../middleware/registerFormValidation'

const router = Router()

router.post('/login', loginFormValidation, loginUser)
router.post('/register', registerFormValidation, registerUser)

export default router

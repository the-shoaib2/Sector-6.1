// backend/Routes/UsersRouter.js
// Loged in User 
import { Prisma } from '@prisma/client';
import ensureAuthenticated from '../../../middlewares/apps/(auth)/auth.js';
import { Router } from 'express'; 
const { user } = Prisma;
const router = Router();

const GET_ME_ROUTE = "/me";

router.get(GET_ME_ROUTE, ensureAuthenticated, async (req, res) => {
    try {
        const user = await user.findUnique({ where: { id: req.user._id } }); 
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ message: 'Internal server error' });
    }
}); 

export default router;




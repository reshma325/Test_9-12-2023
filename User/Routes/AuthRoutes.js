import { Router } from "express";
import { createUser, deleteUser } from "../Controllers/AuthControllers.js";
import CheckUserId from '../Middleware/AuthMiddleware.js'
const router=Router();
// router.post("/login",login);
router.post("/create",CheckUserId,createUser);

router.post("/delete",CheckUserId,deleteUser);

export default router
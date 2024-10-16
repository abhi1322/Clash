import { Router } from "express";
import AuthRoutes from "./authRoute.js";
const router = Router();
router.use("/api/auth", AuthRoutes);
export default router;

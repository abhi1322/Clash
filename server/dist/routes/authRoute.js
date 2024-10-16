import { Router } from "express";
import { registerSchema } from "../validation/authValidation.js";
const AuthRoutes = Router();
AuthRoutes.post("/", async (req, res, next) => {
    try {
        const body = req.body;
        const payload = registerSchema.parse(body);
        res.json(payload);
    }
    catch (error) {
        res.status(422).json(error);
    }
});
export default AuthRoutes;

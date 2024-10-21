import { Router } from "express";
import { registerSchema } from "../validation/authValidation.js";
import { ZodError } from "zod";
import { formatError } from "../helper.js";
import prisma from "../config/database.js";
import bcrypt from "bcrypt";
const router = Router();
router.post("/register", async (req, res) => {
    try {
        const body = req.body;
        const payload = registerSchema.parse(body);
        let user = await prisma.user.findUnique({
            where: {
                email: payload.email,
            },
        });
        if (user) {
            return res
                .status(422)
                .json({ message: "Email already exists, please use a different one." });
        }
        // password encryption
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(payload.password, salt);
        await prisma.user.create({
            data: {
                name: payload.name,
                email: payload.email,
                password: hashedPassword,
            },
        });
        return res.status(201).json({
            message: "Registration successful, you can now login.",
        });
    }
    catch (error) {
        console.error("Registration error:", error);
        if (error instanceof ZodError) {
            const errors = formatError(error);
            return res.status(422).json({ message: "Invalid data", errors });
        }
        return res
            .status(500)
            .json({ message: "Something went wrong, please try again." });
    }
});
export default router;

import {Router} from "express";
import CartController from "../controllers/cart.controller.js";
const router = Router();

router.route("/")
    .get(CartController.getAll)
    .post(CartController.create)

router.route("/:id")
    .get(CartController.getOne)
    .put(CartController.update)
    .delete(CartController.delete)

export default router;
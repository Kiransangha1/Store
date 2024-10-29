import {Router} from "express";
import CandyController from "../controllers/candy.controller.js";
const router = Router();

router.route("/")
    .get(CandyController.getAll)
    .post(CandyController.create)

router.route("/:id")
    .get(CandyController.getOne)
    .put(CandyController.update)
    .delete(CandyController.delete)

export default router;
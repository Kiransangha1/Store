import {Router} from "express";
import SnacksController from "../controllers/snacks.controller.js";
const routerSnacks = Router();

routerSnacks.route("/")
    .get(SnacksController.getAll)
    .post(SnacksController.create)

routerSnacks.route("/:id")
    .get(SnacksController.getOne)
    .put(SnacksController.update)
    .delete(SnacksController.delete)

export default routerSnacks;
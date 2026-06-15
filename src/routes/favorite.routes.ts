import { Router } from "express";
import * as favoriteController from "../controllers/favorite.controller";
import { authenticate } from "../middlewares/auth";

const router = Router();

router.get("/", authenticate, favoriteController.getByUser);
router.post("/:artworkId", authenticate, favoriteController.add);
router.delete("/:artworkId", authenticate, favoriteController.remove);

export default router;

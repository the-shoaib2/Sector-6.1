import { Router } from "express";
import { healthcheck } from "../controllers/healthcheck.controllers.js";

/**
 * @description Routes for healthcheck
 * @returns {Router}
 * @private
 * @path {GET} /api/v1/healthcheck
 * @access {public}
 * @returns {Object}
 */
const router = Router();

router.route("/").get(healthcheck);

export default router;

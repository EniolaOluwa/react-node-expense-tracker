import express from "express";
import { getMockListing } from "../controllers/jobs";

const router = express.Router();

router.route("/").get(getMockListing);

export default router;

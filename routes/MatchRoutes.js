import express from "express";
import { handleAcceptMatch, handleGetMatches, handleRejectMatch, handleReqMatch } from "../controllers/MatchController.js";


const router = express.Router();


router.post("/:userId/match-property/:propertyId", handleReqMatch);

router.get("/:userId/get-matches", handleGetMatches);

router.patch("/:userId/accept-matches/:matchId", handleAcceptMatch);

router.patch("/:userId/reject-matches/:propertyId", handleRejectMatch);

export default router
import express from "express"
import { handleAddApartment, handleGetApartment, handleGetSellerApartments, handleGetSellerSingleApartment } from "../controllers/ApartmentController.js";
import { CreateUploadMiddleware } from "../middlewares/MulterMiddleware.js";


const router = express.Router();


router.post("/create-seller/:sellerId", CreateUploadMiddleware([{ name: "image", isMultiple: false }, { name: "featuredImages", isMultiple: true }]), handleAddApartment)


router.get("/:buyerId/property-listing", handleGetApartment)

router.get("/:sellerId/seller-property-listing", handleGetSellerApartments)

router.get("/:sellerId/seller-property/:propertyId", handleGetSellerSingleApartment)

export default router;
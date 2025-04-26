import { PrismaClient } from "../../../../generated/prisma";
import { Request, Response } from "express";
import { adminService } from "./admin.service";
import pick from "../../../shared/pick";
import { adminFilterableFields } from "./admin.constant";

const getAllFromDb = async (req: Request, res: Response) => {
  try {
    const filters = pick(req.query, adminFilterableFields);
    const options = pick(req.query, ["limit", "page", "sortBy", "sortOrder"]);
    console.log(filters);
    const result = await adminService.getAllFromDb(filters, options);
    res.status(200).json({
      success: true,
      message: "Admin fetched successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch admin",
      error: error.message,
    });
  }
};

export const AdminController = {
  getAllFromDb,
};

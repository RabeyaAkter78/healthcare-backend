import { Request, Response } from "express";
import { userService } from "./user.service";

const createAdmin = async (req: Request, res: Response) => {
  try {
    // console.log(req.body)
    const result = await userService.createAdmin(req.body);
    res.status(200).json({
      status: "success",
      message: result.message,
      data: result.data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.name || "Internal server error",
      error: error,

    });
  }
};

export const userController = {
  createAdmin,
};

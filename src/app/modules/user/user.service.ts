import { PrismaClient, UserRole } from "../../../../generated/prisma";
import bcrypt from "bcrypt";
const prisma = new PrismaClient();

const createAdmin = async (data: any) => {
const hashedPassword:string= await bcrypt.hash(data.password, 10);
console.log(hashedPassword)


    const userData = {
    email: data.admin.email,
    password: hashedPassword,
    role: UserRole.ADMIN,
  };

  const result = await prisma.$transaction(async (transectionCLient) => {
    await transectionCLient.user.create({
      data: userData,
    });
    const createdAdminData = await transectionCLient.admin.create({
      data: data.admin,
    });
    return createdAdminData;
  });

  return {
    message: "Admin created successfully",
    data: result,
  };
};

export const userService = {
  createAdmin,
};

craete A folder.
Open In vs code
initialize your project with :npm init --y
install the packages:
npm install prisma typescript tsx @types/node --save-dev
npx tsc --init
npx prisma
npx prisma init --datasource-provider postgresql --output ../generated/prisma
npm i express
npm i --save-dev @types/express
npm i ts-node-dev --save-dev
npm i cors
npm i --save-dev @types/cors
npm i bcrypt
npm i --save-dev @types/bcrypt

set rootdir and out dir from tsconfig.json
rootDir:"/src"
outDir:"/dist"

set database name, password from .env file
set start command on package .json file: "dev":"ts-node-dev --respawn --transpile-only src/server.ts"

set up the project and run the project.

Manage the schema and migrate the schema with : npx prisma migrate dev.

----------folder system--------
create src/app/modules/user

on user folder: user.routes.ts //manage routing
user.controller.ts // manage request response
user.service.ts // perform query

---------------------NEED TO UNDERSTAN------------
EXPLANATION:    TRANSECTION use kore ek e stahe duita jninish create kora jay. mane ekta create hole onno taw create hote hbe. 
jemon user and admin ek e sathe create korar jonno transection user kora hoyecehe.
prisma k initialize kore nite hobe, 




``import { PrismaClient, UserRole } from "../../../../generated/prisma";

const prisma = new PrismaClient();

const createAdmin = async (data: any) => {
console.log(data);
const userData = {
email: data.admin.email,
password: data.password,
role: UserRole.ADMIN,
};

const result = await prisma.$transaction(async (transectionCLient) => {
await transectionCLient.user.create({ //USER TABLE ER MODDHE USER CREATE HOBE. TAR JONNO TRANSECTIONCLIENT.USER.CREATE USE KORA HOYCE.
data: userData, 
});
const createdAdminData = await transectionCLient.admin.create({ //ADMIN TABLE ER MODDHE ADMIN CREATE HOBE. TAR JONNO TRANSECTIONCLIENT.ADMIN.CREATE USE KORA HOYCE.
data: data.admin,
});
return createdAdminData;
});

return {
message: "Admin created successfully",
data: result, //TRANSECTION ER BIRE RESULT TA K RETURN KORE DICCE.
};
};

export const userService = {
createAdmin,
};
``


---------------------HASHED PASSWORD-------------------
``const hashedPassword:string= await bcrypt.hash(data.password, 10); // PARAMETTER HISEBE FIRST E PASSWORD TA NIBE, THEN SECOND E SALT ROUND DITE HOBE. SALT ROUND BESI DILE LOADING TIME BESI LAGBE.
console.log(hashedPassword)
``

---------------SEARCH----------------

---------------Pagination---------
import bcryct from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@shoppe.com",
    password: bcryct.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Joe Doe",
    email: "joe@shoppe.com",
    password: bcryct.hashSync("123456", 10),
  },
  {
    name: "Maskey",
    email: "maskey@shoppe.com",
    password: bcryct.hashSync("123456", 10),
  },
];

export default users;

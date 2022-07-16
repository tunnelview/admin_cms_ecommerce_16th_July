import bcrypt from "bcryptjs";
const salt = 10;
const testArg = [];
export const hashPassword = (val) => {
  for (let i = 0; i < 100; i++) {
    testArg.push(bcrypt.hashSync(val, salt));
  }
  console.log(testArg);
  return bcrypt.hashSync(val, salt);
};
export const comparePassword = (plainPassword, hashedPassword) => {
  return bcrypt.compareSync(plainPassword, hashedPassword);
};

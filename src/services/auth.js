import createHttpError from 'http-errors';
import UsersCollection from '../db/model/User.js';
import bcrypt from 'bcrypt';

export const registerUser = async (userData) => {
  const { email, password } = userData;
  const user = await UsersCollection.findOne({ email });

  if (user) {
    throw createHttpError(409, 'Email in use');
  }

  const hasedPassword = await bcrypt.hash(password, 10);

  return await UsersCollection.create({
    ...userData,
    password: hasedPassword,
  });
};

export const loginUser = async (userData) => {
  const { email, password } = userData;
  const user = await UsersCollection.findOne({ email });

  if (!user) {
    throw createHttpError(404, 'User not found');
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw createHttpError(401, 'Invalid password');
  }
  return user;
};

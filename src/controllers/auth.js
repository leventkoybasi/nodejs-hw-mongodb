import { loginUser, registerUser } from '../services/auth.js';

export const registerUserController = async (req, res) => {
  const userData = req.body;

  const newUser = await registerUser(userData);

  res.status(201).send({
    message: 'Successfully registered a user!',
    status: 201,
    user: newUser,
  });
};

export const loginUserController = async (req, res) => {
  const session = await loginUser(req.body);

  res.cookie('refreshToken', session.refreshToken, {
    httpOnly: true,
    expires: session.refreshTokenValidUntil,
  });

  res.cookie('sessionId', session._id, {
    httpOnly: true,
    expires: session.refreshTokenValidUntil,
  });
  res.status(200).send({
    message: 'Successfully logged in an user!',
    status: 200,
    data: {
      accessToken: session.accessToken,
    },
  });
};

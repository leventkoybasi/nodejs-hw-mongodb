import { loginUser, registerUser } from '../services/auth';

export const registerUserController = async (req, res) => {
  const userData = req.body;

  const newUser = await registerUser(userData);

  res.status(201).send({
    message: 'Successfully registered a user!',
    status: 201,
    user: newUser,
  });
};

export const loginUserController = async (req, res, next) => {
  try {
    console.log('Request body:', req.body); // Gelen veriyi kontrol edin
    const user = await loginUser(req.body);
    res.status(200).send({
      message: 'Successfully logged in an user!',
      status: 200,
      data: user,
    });
  } catch (error) {
    console.error('Error in loginUserController:', error); // Hata detaylarını loglayın
    next(error);
  }
};

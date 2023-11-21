import Joi from 'joi';

export const validateProduct = (productData: any) => {
  const schema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().required(),
    category: Joi.string().valid('bicycle', 'scooter').required(),
    condition: Joi.string().valid('new', 'used').required(),
    imageUrl: Joi.array().items(Joi.string()),
    createdAt: Joi.date(),
  });

  return schema.validate(productData);
};

export const validateTransaction = (transactionData: any) => {
  const schema = Joi.object({
    productId: Joi.string().required(),
    sellerId: Joi.string().required(),
    buyerId: Joi.string().required(),
    transactionType: Joi.string().valid('sale', 'rent').required(),
    transactionDate: Joi.date().default(() => new Date()),
    price: Joi.number().required(),
  });

  return schema.validate(transactionData);
};

export const validateUser = (userData: any) => {
  const schema = Joi.object({
    username: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string()
      .min(8)
      .regex(/(?=.*\d)(?=.*[!@#$%^&*])/)
      .message(
        'Password must be at least 8 characters long, with at least one number and one special character'
      )
      .required(),
    role: Joi.string().valid('buyer', 'seller', 'admin').required(),
  });

  return schema.validate(userData);
};

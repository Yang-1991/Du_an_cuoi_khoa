import { User } from "../models/airbnb.model.js";

export const userService = {
  async findAll() {
    return User.findAll();
  },

  async findOne(req) {
    const { id } = req.params;
    return User.findByPk(id);
  },

  async create(req) {
    return User.create(req.body);
  },

  async update(req) {
    const { id } = req.params;
    const user = await User.findByPk(id);

    if (!user) {
      return null;
    }

    return user.update(req.body);
  },

  async delete(req) {
    const { id } = req.params;
    const user = await User.findByPk(id);

    if (!user) {
      return null;
    }

    await user.destroy();
    return user;
  }
};

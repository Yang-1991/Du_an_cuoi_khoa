import { Location } from "../models/airbnb.model.js";

export const locationService = {
  async findAll() {
    return Location.findAll();
  },

  async findOne(req) {
    const { id } = req.params;
    return Location.findByPk(id);
  },

  async create(req) {
    return Location.create(req.body);
  },

  async update(req) {
    const { id } = req.params;
    const location = await Location.findByPk(id);

    if (!location) {
      return null;
    }

    return location.update(req.body);
  },

  async delete(req) {
    const { id } = req.params;
    const location = await Location.findByPk(id);

    if (!location) {
      return null;
    }

    await location.destroy();
    return location;
  }
};

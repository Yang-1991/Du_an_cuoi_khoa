import { Booking, Room, User } from "../models/airbnb.model.js";

export const bookingService = {
  async findAll() {
    return Booking.findAll({ include: [Room, User] });
  },

  async findOne(req) {
    const { id } = req.params;
    return Booking.findByPk(id, { include: [Room, User] });
  },

  async create(req) {
    return Booking.create(req.body);
  },

  async update(req) {
    const { id } = req.params;
    const booking = await Booking.findByPk(id);

    if (!booking) {
      return null;
    }

    return booking.update(req.body);
  },

  async delete(req) {
    const { id } = req.params;
    const booking = await Booking.findByPk(id);

    if (!booking) {
      return null;
    }

    await booking.destroy();
    return booking;
  }
};

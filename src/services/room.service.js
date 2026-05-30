import { Location, Room } from "../models/airbnb.model.js";

export const roomService = {
  async findAll() {
    return Room.findAll({ include: Location });
  },

  async findOne(req) {
    const { id } = req.params;
    return Room.findByPk(id, { include: Location });
  },

  async create(req) {
    return Room.create(req.body);
  },

  async update(req) {
    const { id } = req.params;
    const room = await Room.findByPk(id);

    if (!room) {
      return null;
    }

    return room.update(req.body);
  },

  async delete(req) {
    const { id } = req.params;
    const room = await Room.findByPk(id);

    if (!room) {
      return null;
    }

    await room.destroy();
    return room;
  }
};

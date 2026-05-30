import { Comment, Room, User } from "../models/airbnb.model.js";

export const commentService = {
  async findAll() {
    return Comment.findAll({ include: [Room, User] });
  },

  async findOne(req) {
    const { id } = req.params;
    return Comment.findByPk(id, { include: [Room, User] });
  },

  async create(req) {
    return Comment.create(req.body);
  },

  async update(req) {
    const { id } = req.params;
    const comment = await Comment.findByPk(id);

    if (!comment) {
      return null;
    }

    return comment.update(req.body);
  },

  async delete(req) {
    const { id } = req.params;
    const comment = await Comment.findByPk(id);

    if (!comment) {
      return null;
    }

    await comment.destroy();
    return comment;
  }
};

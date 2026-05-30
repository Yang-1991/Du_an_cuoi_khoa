import { responseSuccess } from "../common/helpers/response.helper.js";
import { commentService } from "../services/comment.service.js";

export const commentController = {
  async findAll(req, res, next) {
    const result = await commentService.findAll(req);
    const response = responseSuccess(result, "Lay danh sach comment thanh cong");
    res.status(response.statusCode).json(response);
  },

  async findOne(req, res, next) {
    const result = await commentService.findOne(req);

    if (!result) {
      return res.status(404).json({ message: "Comment not found" });
    }

    const response = responseSuccess(result, "Lay chi tiet comment thanh cong");
    res.status(response.statusCode).json(response);
  },

  async create(req, res, next) {
    const result = await commentService.create(req);
    const response = responseSuccess(result, "Tao comment thanh cong", 201);
    res.status(response.statusCode).json(response);
  },

  async update(req, res, next) {
    const result = await commentService.update(req);

    if (!result) {
      return res.status(404).json({ message: "Comment not found" });
    }

    const response = responseSuccess(result, "Cap nhat comment thanh cong");
    res.status(response.statusCode).json(response);
  },

  async delete(req, res, next) {
    const result = await commentService.delete(req);

    if (!result) {
      return res.status(404).json({ message: "Comment not found" });
    }

    const response = responseSuccess(result, "Xoa comment thanh cong");
    res.status(response.statusCode).json(response);
  }
};

import { responseSuccess } from "../common/helpers/response.helper.js";
import { roomService } from "../services/room.service.js";

export const roomController = {
  async findAll(req, res, next) {
    const result = await roomService.findAll(req);
    const response = responseSuccess(result, "Lay danh sach room thanh cong");
    res.status(response.statusCode).json(response);
  },

  async findOne(req, res, next) {
    const result = await roomService.findOne(req);

    if (!result) {
      return res.status(404).json({ message: "Room not found" });
    }

    const response = responseSuccess(result, "Lay chi tiet room thanh cong");
    res.status(response.statusCode).json(response);
  },

  async create(req, res, next) {
    const result = await roomService.create(req);
    const response = responseSuccess(result, "Tao room thanh cong", 201);
    res.status(response.statusCode).json(response);
  },

  async update(req, res, next) {
    const result = await roomService.update(req);

    if (!result) {
      return res.status(404).json({ message: "Room not found" });
    }

    const response = responseSuccess(result, "Cap nhat room thanh cong");
    res.status(response.statusCode).json(response);
  },

  async delete(req, res, next) {
    const result = await roomService.delete(req);

    if (!result) {
      return res.status(404).json({ message: "Room not found" });
    }

    const response = responseSuccess(result, "Xoa room thanh cong");
    res.status(response.statusCode).json(response);
  }
};

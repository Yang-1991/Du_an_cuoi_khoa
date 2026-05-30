import { responseSuccess } from "../common/helpers/response.helper.js";
import { userService } from "../services/user.service.js";

export const userController = {
  async findAll(req, res, next) {
    const result = await userService.findAll(req);
    const response = responseSuccess(result, "Lay danh sach user thanh cong");
    res.status(response.statusCode).json(response);
  },

  async findOne(req, res, next) {
    const result = await userService.findOne(req);

    if (!result) {
      return res.status(404).json({ message: "User not found" });
    }

    const response = responseSuccess(result, "Lay chi tiet user thanh cong");
    res.status(response.statusCode).json(response);
  },

  async create(req, res, next) {
    const result = await userService.create(req);
    const response = responseSuccess(result, "Tao user thanh cong", 201);
    res.status(response.statusCode).json(response);
  },

  async update(req, res, next) {
    const result = await userService.update(req);

    if (!result) {
      return res.status(404).json({ message: "User not found" });
    }

    const response = responseSuccess(result, "Cap nhat user thanh cong");
    res.status(response.statusCode).json(response);
  },

  async delete(req, res, next) {
    const result = await userService.delete(req);

    if (!result) {
      return res.status(404).json({ message: "User not found" });
    }

    const response = responseSuccess(result, "Xoa user thanh cong");
    res.status(response.statusCode).json(response);
  }
};

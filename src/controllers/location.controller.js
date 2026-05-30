import { responseSuccess } from "../common/helpers/response.helper.js";
import { locationService } from "../services/location.service.js";

export const locationController = {
  async findAll(req, res, next) {
    const result = await locationService.findAll(req);
    const response = responseSuccess(result, "Lay danh sach location thanh cong");
    res.status(response.statusCode).json(response);
  },

  async findOne(req, res, next) {
    const result = await locationService.findOne(req);

    if (!result) {
      return res.status(404).json({ message: "Location not found" });
    }

    const response = responseSuccess(result, "Lay chi tiet location thanh cong");
    res.status(response.statusCode).json(response);
  },

  async create(req, res, next) {
    const result = await locationService.create(req);
    const response = responseSuccess(result, "Tao location thanh cong", 201);
    res.status(response.statusCode).json(response);
  },

  async update(req, res, next) {
    const result = await locationService.update(req);

    if (!result) {
      return res.status(404).json({ message: "Location not found" });
    }

    const response = responseSuccess(result, "Cap nhat location thanh cong");
    res.status(response.statusCode).json(response);
  },

  async delete(req, res, next) {
    const result = await locationService.delete(req);

    if (!result) {
      return res.status(404).json({ message: "Location not found" });
    }

    const response = responseSuccess(result, "Xoa location thanh cong");
    res.status(response.statusCode).json(response);
  }
};

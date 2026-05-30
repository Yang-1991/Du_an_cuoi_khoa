import { responseSuccess } from "../common/helpers/response.helper.js";
import { bookingService } from "../services/booking.service.js";

export const bookingController = {
  async findAll(req, res, next) {
    const result = await bookingService.findAll(req);
    const response = responseSuccess(result, "Lay danh sach booking thanh cong");
    res.status(response.statusCode).json(response);
  },

  async findOne(req, res, next) {
    const result = await bookingService.findOne(req);

    if (!result) {
      return res.status(404).json({ message: "Booking not found" });
    }

    const response = responseSuccess(result, "Lay chi tiet booking thanh cong");
    res.status(response.statusCode).json(response);
  },

  async create(req, res, next) {
    const result = await bookingService.create(req);
    const response = responseSuccess(result, "Tao booking thanh cong", 201);
    res.status(response.statusCode).json(response);
  },

  async update(req, res, next) {
    const result = await bookingService.update(req);

    if (!result) {
      return res.status(404).json({ message: "Booking not found" });
    }

    const response = responseSuccess(result, "Cap nhat booking thanh cong");
    res.status(response.statusCode).json(response);
  },

  async delete(req, res, next) {
    const result = await bookingService.delete(req);

    if (!result) {
      return res.status(404).json({ message: "Booking not found" });
    }

    const response = responseSuccess(result, "Xoa booking thanh cong");
    res.status(response.statusCode).json(response);
  }
};

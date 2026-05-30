import { DataTypes, Sequelize } from "sequelize";
import sequelize from "../common/sequelize/connect.sequelize.js";

const timestampFields = {
  createdAt: {
    type: "TIMESTAMP",
    allowNull: false,
    defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
  },
  updatedAt: {
    type: "TIMESTAMP",
    allowNull: false,
    defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
  }
};

const commonOptions = {
  timestamps: false
};

export const User = sequelize.define(
  "User",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
    phone: { type: DataTypes.STRING },
    birthDay: { type: DataTypes.STRING },
    gender: { type: DataTypes.STRING },
    role: { type: DataTypes.STRING, defaultValue: "USER" },
    ...timestampFields
  },
  {
    ...commonOptions,
    tableName: "Users"
  }
);

export const Location = sequelize.define(
  "Location",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
    province: { type: DataTypes.STRING, allowNull: false },
    country: { type: DataTypes.STRING, allowNull: false },
    image: { type: DataTypes.STRING },
    ...timestampFields
  },
  {
    ...commonOptions,
    tableName: "Locations"
  }
);

export const Room = sequelize.define(
  "Room",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
    guests: { type: DataTypes.INTEGER, defaultValue: 1 },
    bedrooms: { type: DataTypes.INTEGER, defaultValue: 1 },
    beds: { type: DataTypes.INTEGER, defaultValue: 1 },
    bathrooms: { type: DataTypes.INTEGER, defaultValue: 1 },
    description: { type: DataTypes.TEXT },
    price: { type: DataTypes.INTEGER, defaultValue: 0 },
    washingMachine: { type: DataTypes.BOOLEAN, defaultValue: false },
    iron: { type: DataTypes.BOOLEAN, defaultValue: false },
    television: { type: DataTypes.BOOLEAN, defaultValue: false },
    airConditioner: { type: DataTypes.BOOLEAN, defaultValue: false },
    wifi: { type: DataTypes.BOOLEAN, defaultValue: false },
    kitchen: { type: DataTypes.BOOLEAN, defaultValue: false },
    parking: { type: DataTypes.BOOLEAN, defaultValue: false },
    pool: { type: DataTypes.BOOLEAN, defaultValue: false },
    image: { type: DataTypes.STRING },
    locationId: {
      type: DataTypes.INTEGER,
      references: { key: "id", model: "Locations" }
    },
    ...timestampFields
  },
  {
    ...commonOptions,
    tableName: "Rooms"
  }
);

export const Booking = sequelize.define(
  "Booking",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    checkIn: { type: DataTypes.DATE, allowNull: false },
    checkOut: { type: DataTypes.DATE, allowNull: false },
    guests: { type: DataTypes.INTEGER, defaultValue: 1 },
    userId: {
      type: DataTypes.INTEGER,
      references: { key: "id", model: "Users" }
    },
    roomId: {
      type: DataTypes.INTEGER,
      references: { key: "id", model: "Rooms" }
    },
    ...timestampFields
  },
  {
    ...commonOptions,
    tableName: "Bookings"
  }
);

export const Comment = sequelize.define(
  "Comment",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    content: { type: DataTypes.TEXT, allowNull: false },
    rating: { type: DataTypes.INTEGER, defaultValue: 5 },
    userId: {
      type: DataTypes.INTEGER,
      references: { key: "id", model: "Users" }
    },
    roomId: {
      type: DataTypes.INTEGER,
      references: { key: "id", model: "Rooms" }
    },
    ...timestampFields
  },
  {
    ...commonOptions,
    tableName: "Comments"
  }
);

Location.hasMany(Room, { foreignKey: "locationId" });
Room.belongsTo(Location, { foreignKey: "locationId" });
User.hasMany(Booking, { foreignKey: "userId" });
Booking.belongsTo(User, { foreignKey: "userId" });
Room.hasMany(Booking, { foreignKey: "roomId" });
Booking.belongsTo(Room, { foreignKey: "roomId" });
User.hasMany(Comment, { foreignKey: "userId" });
Comment.belongsTo(User, { foreignKey: "userId" });
Room.hasMany(Comment, { foreignKey: "roomId" });
Comment.belongsTo(Room, { foreignKey: "roomId" });

await User.sync();
await Location.sync();
await Room.sync();
await Booking.sync();
await Comment.sync();

import { Types } from "mongoose";
import { USER_ENUM } from "../../../enum/common";
import { User } from "../users/user.model";
import { Cow } from "./cow.model";

export const isCowAvailable = async (id: string): Promise<boolean> => {
  const cow = await Cow.findById(id);
  return !!cow;
};

export const isSellerAvailable = async (_id: Types.ObjectId) => {
  const seller = await User.findOne({ _id, role: USER_ENUM.SELLER });
  return !!seller;
};

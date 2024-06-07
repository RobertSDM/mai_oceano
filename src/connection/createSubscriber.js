import { subscriberAPI } from "../utils";

const createSubcriber = async (body) => {
  try {
    const res = await subscriberAPI.post("/insert", body);

    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export default createSubcriber;

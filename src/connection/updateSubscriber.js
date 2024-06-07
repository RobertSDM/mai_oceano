import { subscriberAPI } from "../utils";

const updateSubcriber = async (email, body) => {
  try {
    const res = await subscriberAPI.put(`/update/${email}`, body);

    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export default createSubcriber;

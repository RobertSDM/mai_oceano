import { subscriberAPI } from "../utils";

const deleteSubcriber = async (email) => {
  try {
    const res = await subscriberAPI.delete(`/update/${email}`);

    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export default createSubcriber;

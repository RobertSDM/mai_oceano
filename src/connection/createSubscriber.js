import { subscriberAPI } from "../utils";

const createSubcriber = async (body) => {
    try{

        const res = await subscriberAPI.post("/insert", body);
      
        // verify if the email already exist on the database, if it does, return 
        // true do show the mode options button on the registerNewsletter screen
        if (res.status === 400) {
          return true;
        } else {
          return false;
        }
    }catch(err){
        console.log(err)
        return true
    }
};

export default createSubcriber

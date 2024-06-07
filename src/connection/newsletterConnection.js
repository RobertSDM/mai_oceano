import { subscriberAPI } from "../utils";

export const findSubscriber = async (email, body) => {
    try {
        const res = await subscriberAPI.put(`/find/by/${email}`, body);

        if (res.status === 200) {
            return true;
        }

        return false;
    } catch (err) {
        console.log(err);
        return false;
    }
};

export const updateSubscriber = async (email, body) => {
    try {
        console.log(email);
        console.log(body);

        const res = await subscriberAPI.put(`/update/${email}`, body);
        console.log(res);

        if (res.status === 200) {
            return true;
        }

        return false;
    } catch (err) {
        console.log(err);
        return false;
    }
};

export const deleteSubscriber = async (email) => {
    console.log(email);
    try {
        const res = await subscriberAPI.delete(`/delete/${email}`);

        if (res.status === 204) {
            return true;
        }
        return false;
    } catch (err) {
        console.log(err);
        return false;
    }
};

export const insertSubscriber = async (body) => {
    try {
        const res = await subscriberAPI.post("/insert", body);

        if (res.status === 200) {
            return true;
        }

        return false;
    } catch (err) {
        console.log(err);
        return false;
    }
};

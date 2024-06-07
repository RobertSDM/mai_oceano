import { emailRegex } from "../utils";
import {
    findSubscriber,
    deleteSubscriber,
    updateSubscriber,
    insertSubscriber,
} from "../connection/newsletterConnection";
import showScreenMessage from "./showScreenMessage";

export const findSubscriberByEmail = async (email) => {
    try {
        if (email === "") {
            showScreenMessage("O email não pode estar vazio");
            return;
        } else if (!emailRegex.test(email)) {
            showScreenMessage("O formato do email é inválido");
            return;
        }

        const res = await findSubscriber(email);

        return res;
    } catch (err) {
        console.log(err);
        return false;
    }
};

export const saveEmailToNewsletter = async (email) => {
    try {
        
        if (email === "") {
            showScreenMessage("O email não pode estar vazio");
            return;
        } else if (!emailRegex.test(email)) {
            showScreenMessage("O formato do email é inválido");
            return;
        }

        const subscriber = await findSubscriberByEmail(email);

        if (subscriber) {
            return false;
        }

        const res = await insertSubscriber({
            email,
        });

        if (!res) {
            showScreenMessage("Email já existe");
        } else {
            showScreenMessage("Email criado com sucesso");
        }

        return res;
    } catch (err) {
        console.log(err);
        return false;
    }
};

export const deleteSubscriberEmail = async (email) => {
    try {
        if (email === "") {
            showScreenMessage("O email não pode estar vazio");
            return;
        } else if (!emailRegex.test(email)) {
            showScreenMessage("O formato do email é inválido");
            return;
        }

        const res = await deleteSubscriber(email);

        if (!res) {
            showScreenMessage("Erro ao deletar");
        } else {
            showScreenMessage("Email deletado com sucesso");
        }
        return res;
    } catch (err) {
        console.log(err);
        return false;
    }
};

export const updateSubscriberEmail = async (newEmail, email) => {
    try {
        if (email === "" || newEmail === "") {
            showScreenMessage("O email ou newEmail não pode estar vazio");
            return;
        } else if (email === newEmail) {
            showScreenMessage("O email e o novo email não podem ser iguais");
            return;
        } else if (!emailRegex.test(email)) {
            showScreenMessage("O formato do email é inválido");
            return;
        }

        const res = await updateSubscriber(email, {
            email: newEmail,
        });

        if (!res) {
            showScreenMessage("Erro ao atualizar");
        } else {
            showScreenMessage("Email atualizado com sucesso");
        }
        return res;
    } catch (err) {
        console.log(err);
        return false;
    }
};

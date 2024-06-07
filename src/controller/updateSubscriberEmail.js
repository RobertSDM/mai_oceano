import updateSubscriber from "../connection/updateSubscriber";
import showScreenMessage from "./showScreenMessage";

const updateSubscriberEmail = (newEmail, email) => {
  if (email === newEmail) {
    showScreenMessage("O email e o novo email não podem ser iguais");
    return;
  } else if (email === "" || newEmail === "") {
    showScreenMessage("O email ou newEmail não pode estar vazio");
    return;
  } else {
    const res = updateSubscriber(email, {
      newEmail,
    }).then((res) => {
      return !res;
    });

    showScreenMessage("Email atualizado com sucesso");

    return res;
  }
};

export default updateSubscriberEmail;

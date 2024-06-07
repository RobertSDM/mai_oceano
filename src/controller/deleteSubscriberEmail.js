import deleteSubscriber from "../connection/deleteSubscriber";
import showScreenMessage from "./showScreenMessage";

const deleteSubscriberEmail = (email) => {
  if (email === "") {
    showScreenMessage("O email não pode estar vazio");
    return;
  } else {
    const res = deleteSubscriber(email).then((res) => {
      return !res;
    });

    showScreenMessage("Email deletado com sucesso");

    return res;
  }
};

export default deleteSubscriberEmail;

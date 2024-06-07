import createSubcriber from "../connection/createSubscriber";
import showScreenMessage from "./showScreenMessage";

const saveEmailToNewsletter = (email) => {
  if (email === "") {
    showScreenMessage("O email não pode estar vazio");
    return;
  } else {
    createSubcriber({
      email,
    }).then((res) => {
      return res
    });
  }
};

export default saveEmailToNewsletter;

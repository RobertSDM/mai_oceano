import showScreenMessage from "./showScreenMessage";

const saveEmailToNewsletter = (email) => {
  if (email !== "") {
    // fetch thing
  } else {
    showScreenMessage("O email não pode estar vazio");
    return;
  }
};

export default saveEmailToNewsletter;

export const alertMessageIsValid = (msg) => {
  if (!msg) {
    return "Message not specified";
  }

  if (msg.length == 0) {
    return "Message is empty";
  }

  if (msg.length > 300) {
    return "Message is too long (limit is 300 characters).";
  }
};

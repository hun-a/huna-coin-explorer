export const makeDateSexy = seconds => {
  const date = new Date(null);
  date.setSeconds(seconds);
  return date.toUTCString();
};

export const stringToJSON = str => {
  try {
    return JSON.parse(str);
  } catch (e) {
    console.error(e);
  }
}

export const parseMessage = message => {
  if (typeof message.data === "string") {
    const { data } = message;
    const parsedMessage = stringToJSON(data);
    if (parsedMessage) {
      const { type } = parsedMessage;
      if (type === "BLOCKCHAIN_RESPONSE") {
        return parsedMessage.data;
      } else {
        return null;
      }
    }
  }
};
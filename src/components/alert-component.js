import { alertMessageIsValid } from "./utility-functions.js";

export class AlertService {
  messageCountLimit = 5;
  messageQueue = [];

  constructor() {
    console.log("Constructing [AlertService]...");

    Object.keys(MessagePriorities).forEach((priority) =>
      console.log("\tPriority:", priority)
    );
    Object.keys(MessageTypes).forEach((msgType) =>
      console.log("\tType:", msgType)
    );

    console.log("[AlertService] Constructed.");
  }

  queueMessage(msgType, msgPriority, msg) {
    if (!this.validateMessage(msg)) {
      return false;
    }

    this.messageQueue.push(msg);
    console.log(
      "[AlertService]: Messaged queued. " +
        msgType.description +
        ":" +
        msgPriority.description
    );

    return true;
  }

  validateMessage(msg) {
    var msgValidationMessage = alertMessageIsValid(msg);
    if (msgValidationMessage) {
      console.log(
        "[AlertService]: Queue rejected msg. Reason: " + msgValidationMessage
      );
      return false;
    }

    if (this.messageQueue.length == this.messageCountLimit - 1) {
      console.log(
        "[AlertService]: Queue rejected msg. Reason: Queue limit reached (" +
          this.messageCountLimit +
          ")."
      );
      return false;
    }

    return true;
  }

  processMessages() {
    console.log(
      "[AlertService]: Messages to process: " + this.messageQueue.length
    );
    this.messageQueue.forEach((msg) => {
      console.log("\t[AlertService]: Processing message: " + msg);
    });

    this.messageQueue.length = 0;
  }
}

export const MessagePriorities = Object.freeze({
  High: Symbol("high"),
  Medium: Symbol("medium"),
  Low: Symbol("low"),
});

export const MessageTypes = Object.freeze({
  Information: Symbol("information"),
  Warning: Symbol("warning"),
  Error: Symbol("error"),
});

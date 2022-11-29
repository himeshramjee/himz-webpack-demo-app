import {
  AlertService,
  MessageTypes,
  MessagePriorities,
} from "./alert-component.js";

export class AlertDemo {
  alertService = new AlertService();

  constructor() {
    console.log("Constructing [AlertDemo]...");

    console.log("[AlertDemo] Constructed.");
  }

  generateMessages() {
    this.alertService.queueMessage(
      MessageTypes.Information,
      MessagePriorities.High,
      "Message 1"
    );
    this.alertService.queueMessage(
      MessageTypes.Warning,
      MessagePriorities.Medium,
      "Message 2"
    );
    this.alertService.queueMessage(
      MessageTypes.Error,
      MessagePriorities.Low,
      "Message 3"
    );
  }

  start() {
    console.log("[AlertDemo] - Starting demo...");
    this.generateMessages();
    this.alertService.processMessages();
    console.log("[AlertDemo] - Demo completed.");
  }
}

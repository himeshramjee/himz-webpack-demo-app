import { AlertDemo } from "../components/alert-demo.js";

export class App {
  demo = new AlertDemo();

  constructor() {
    console.log("Constructing [App]...");
    console.log("[App] constructed.");
  }

  run() {
    this.demo.start();
  }
}

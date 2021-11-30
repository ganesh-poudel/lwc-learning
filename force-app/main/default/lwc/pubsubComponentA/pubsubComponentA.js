import { LightningElement } from "lwc";
import pubsub from "c/pubsub";
export default class PubsubComponentA extends LightningElement {
  msg;
  eleInput = this.template.querySelector(".eleInput");
  inputHandler(event) {
    this.msg = event.target.value;
  }

  buttonHandler() {
    pubsub.publish("componentA", this.msg);
    console.log(Hello);
  }
}

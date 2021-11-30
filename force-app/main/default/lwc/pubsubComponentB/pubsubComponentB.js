import { LightningElement } from "lwc";
import pubsub from "c/pubsub";
export default class PubsubComponentB extends LightningElement {
    message;
  connectedCallback() {
    this.callSubscriber();
  }
  callSubscriber() {
      pubsub.subscribe("componentA", message1 => {
        this.message = message1
    });
  }
}

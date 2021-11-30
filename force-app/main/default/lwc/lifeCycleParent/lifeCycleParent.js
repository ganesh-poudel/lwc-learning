import { LightningElement } from "lwc";

export default class LifeCycleParent extends LightningElement {
  constructor() {
    super();
    console.log("Parent constructor called");
  }
  connectedCallback() {
    console.log("Parent ConnectedCallback called");
  }
  renderedCallback() {
    console.log("Parent renderedcallback called");
  }
  name;
  changeHandler(event) {
    this.name = event.target.value;
  }
  isDisplay = false;
  label = "Show";
  handleClick() {
    this.isDisplay = !this.isDisplay;
    if (this.isDisplay) {
      this.label = "Remove";
    } else this.label = "Show";
  }
    
    errorCallback(error, stack) {
        console.log(error.message);
        console.log(stack);
    }
}

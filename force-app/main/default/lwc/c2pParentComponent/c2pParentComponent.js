import { LightningElement } from "lwc";

export default class C2pParentComponent extends LightningElement {
  showModal = false;
  msg;
  eleDiv;
  buttonHandler() {
    this.showModal = true;
  }

  closeHandler(e) {
    this.msg = e.detail.msg;
    this.eleDiv = e.detail.name;
    this.showModal = false;
  }
}

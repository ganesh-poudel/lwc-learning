import { LightningElement } from "lwc";

export default class C2pModalComponent extends LightningElement {
  closeHandler(event) {
      const myEvent = new CustomEvent("close", {bubbles:true,
          detail: {
              msg: 'Modal Closed Successfully !!!',
              name : 'I am Div element'
        }
    });
    this.dispatchEvent(myEvent);
  }
    footerHandler() {
        console.log('footerHandler called');
    }
}

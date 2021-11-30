import { LightningElement } from 'lwc';

export default class LifeCycleChild extends LightningElement {
  constructor() {
    super();
    console.log("Child constructor called");
  }
  connectedCallback() {
      console.log("Child ConnectedCallback called");
      throw new Error('Loading of child component failed')
  }
  renderedCallback() {
    console.log("Child renderedcallback called");
  }
    disconnectedCallback() {
        alert('child disconnectedCallBack called !!!')
    }
}
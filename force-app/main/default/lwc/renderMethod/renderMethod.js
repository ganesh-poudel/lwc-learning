import { LightningElement } from "lwc";
import signinTemplate from "./signinTemplate.html";
import signupTemplate from "./signupTemplate.html";
import renderTemplate from "./renderMethod.html";
export default class RenderMethod extends LightningElement {
  selectedBtn = "";
  infos = [];
  isShowForm = true;
  render() {
    return this.selectedBtn === "Signup"
      ? signupTemplate
      : this.selectedBtn === "Signin"
      ? signinTemplate
      : renderTemplate;
  }
  handleClick(event) {
    this.selectedBtn = event.target.label;
    this.isShowForm = true;
  }
  submitHandler(event) {
    this.isShowForm = !this.isShowForm;
    console.log(`${event.target.label} successfull`);
  }
}

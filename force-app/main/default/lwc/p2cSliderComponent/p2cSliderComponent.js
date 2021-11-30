import { LightningElement, api } from "lwc";

export default class P2cSliderComponent extends LightningElement {
  slideValue = 15;
  showSlider(event) {
    this.slideValue = event.target.value;
  }

  @api resetSlider() {
    this.slideValue = 50;
  }
}

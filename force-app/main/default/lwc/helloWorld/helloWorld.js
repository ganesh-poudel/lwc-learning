import { LightningElement, track } from "lwc";

export default class HelloWorld extends LightningElement {
  // Data binding example
  fullName = "Zero To Hero";
  title = "Aura";
  changeHandler(event) {
    this.title = event.target.value;
  }

  // * @track binding example
  @track address = {
    city: "Melbourne",
    postalcode: 3008,
    country: "Austrilia"
  };

  changeHandlerAddress(event) {
    //* with @ track
    this.address.city = event.target.value;
    //* without track
    //* this.address = {...this.address,'city':event.target.value}
  }

  // getter example
  users = ['John', 'Aarvi', 'Ram']
  num1 = 20
  num2 = 10

 get firstUser() {
    return this.users[0]
 }
  
  get sum() {
    return this.num1 + this.num2
  }
  
}

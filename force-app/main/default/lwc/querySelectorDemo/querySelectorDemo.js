import { LightningElement } from "lwc";

export default class QuerySelectorDemo extends LightningElement {
  userNames = ["user1", "user2", "user3", "user4"];
  fetchHandler() {
    // do something
    let x = this.template.querySelector("h1");
    console.log(x.innerText);
  }

  fetchHandlerAllUser() {
    let allUserName = this.template.querySelectorAll(".userId");
    console.log(allUserName.innerText);
    for (const element of allUserName) {
      console.log(element.innerText);
      element.setAttribute("title", element.innerText);
      element.style.border = "1px solid red";
    }
    // lwc:dom ='manual'
    const childElement = this.template.querySelector(".child");
    childElement.innerHTML = "<p>I am child element</p>";
  }
}

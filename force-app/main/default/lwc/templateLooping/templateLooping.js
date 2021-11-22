import { LightningElement } from 'lwc';

export default class TemplateLooping extends LightningElement {
  carList = ["Audi", "Maruti", "Ford", "Honda"];
  ceoList = [
    {
      id: 1,
      company: "Google",
      ceo: "Sundar Pachai"
    },
    {
      id: 2,
      company: "Apple",
      ceo: "Steve jobs"
    },
    {
      id: 3,
      company: "Amozon",
      ceo: "Jeff Bezos"
    },
    {
      id: 4,
      company: "FaceBooke",
      ceo: "Mark Zuberk"
    }
  ];
}
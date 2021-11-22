import { LightningElement } from "lwc";

export default class QuizApp extends LightningElement {
  selected = {};
  correctAnswer = 0;
  isSelected = false;

  questions = [
    {
      id: 1,
      askedQuestion: "How many time zones are there in Russia?",
      answerOption: {
        a: 10,
        b: 12,
        c: 11
      },
      rightAnswer: "c"
    },
    {
      id: 2,
      askedQuestion: "How many stripes are there on the US flag?",
      answerOption: {
        a: 11,
        b: 12,
        c: 13
      },
      rightAnswer: "c"
    },
    {
      id: 3,
      askedQuestion: "What’s the capital of Canada?",
      answerOption: {
        a: "kathmandu",
        b: "Ottawa",
        c: "New York"
      },
      rightAnswer: "b"
    },
    {
      id: 4,
      askedQuestion: "What’s the capital of Nepal?",
      answerOption: {
        a: "kathmandu",
        b: "Ottawa",
        c: "New York"
      },
      rightAnswer: "a"
    }
  ];
  get notAllSelected() {
    return !(Object.keys(this.selected).length === this.questions.length);
  }

  changeHandler(event) {
    const { name, value } = event.target;
    this.selected = { ...this.selected, [name]: value };
  }

  submitHandler(event) {
    event.preventDefault();
    let correct = this.questions.filter(
      (item) => this.selected[item.id] === item.rightAnswer
    );
    this.correctAnswer = correct.length;
    this.isSelected = true;
  }

  resetHandler(event) {
    event.preventDefault();
    this.selected = {};
    this.correctAnswer = 0;
    this.isSelected = false;
  }
}

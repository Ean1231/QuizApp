export class Quiz {
    Questions: string;
    Options: any;
    userAnswer: string;
    correctAnswer: string;

    constructor(Questions, Options, userAnswer, correctAnswer) {
        this.Questions=Questions;
        this.Options=Options;
        this.userAnswer=userAnswer;
        this.correctAnswer=correctAnswer;

    }

}
import { Component } from "@angular/core";
import { Quiz } from "./questions";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  c = 0;

  Questions = [
    new Quiz(
      "1.What does COVID-19 stand for?",
      [
        "It's a term for Coronavirus Disease 19, because it's the 19th strain of coronavirus discovered.",
        "It's a term that stands for Coronavirus Disease 2019, the year it was first identified.",
      ],
      "",
      "It's a term for Coronavirus Disease 2019, the year it was first identified"
    ),
    new Quiz(
      "2.What other viruses belong to the coronavirus family?",
      ["SARS and influenza", "SARS and MERS", "SARS and HIV"],
      "",
      "MERS and SARS"
    ),
    new Quiz(
      "3.True or False: A vaccine stimulates your immune system to produce antibodies, like it would if you were exposed to the virus.",
      ["True", "False"],
      "",
      "True"
    ),
    new Quiz(
      "4.There are currently vaccines for the following coronaviruses:",
      ["SARS", "MERS", "SARS and MERS", "None of the above"],
      "",
      "None of the above"
    ),
    new Quiz(
      "5.How many vaccine candidates for COVID-19 have been proposed?",
      ["25", "100", "120+"],
      "",
      "120+"
    ),
    new Quiz(
      "6.True or False: The virus is mutating rapidly.",
      ["True", "False"],
      "",
      "False"
    ),
    new Quiz(
      "7.How does weather seem to affect the novel coronavirus?",
      [
        "The virus can’t survive in hot, humid climates.",
        "Cold temperatures can kill the virus.",
        "It is not yet known.",
      ],
      "",
      "It is not yet known."
    ),
    new Quiz(
      "8.Currently, which group has had more severe effects of COVID-19?",
      ["Men", "Women"],
      "",
      "Men"
    ),
    new Quiz(
      "9.True or False: COVID-19 has currently been detected on all seven continents.",
      ["True", "False"],
      "",
      "False"
    ),
  ];

  constructor(public alertController: AlertController) {}

  submit() {
    for (let index = 0; index < this.Questions.length; index++) {
      console.log(this.Questions[index].userAnswer);

      if (
        this.Questions[index].correctAnswer.toLowerCase() ==
        this.Questions[index].userAnswer.toLowerCase()
      ) {
        this.c = this.c + 1;
      }
    }

    let percent = (this.c / 6) * 100;
    console.log(percent);
    console.log(this.c);

    if (percent >= 80) {
      this.presentAlert("Congradulations you passed!!!");
    } else {
      this.presentAlert("Unfortunately you failed!!!");
    }
  }
  async presentAlert(message) {
    const alert = await this.alertController.create({
      cssClass: "my-custom-class",
      header: "Hello User",
      subHeader: "",
      message: message,
      buttons: ["OK"],
    });
    await alert.present();
  }
}

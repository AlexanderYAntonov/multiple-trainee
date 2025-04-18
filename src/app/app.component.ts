import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Answer, SelectorComponent } from "./components/selector/selector.component";
import { PointsComponent } from "./components/points/points.component";
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SelectorComponent, PointsComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'MultipleTrainee';

  public a = 0;

  public b = 0;

  public operation = 0; // 0 - умножение, 1 - деление

  public symbols = ['*', '/'];

  public points = 0;

  public answers: Answer[] = [];

  public showSuccess = false;

  public showFail = false;

  public catUrl = 'assets/cat01.jpeg';

  private readonly cats: string[] = [
    'assets/cat01.jpeg',
    'assets/cat02.jpg',
    'assets/cat03.jpg',
    'assets/cat04.webp',
    'assets/cat05.jpg',
    'assets/cat06.webp',
    'assets/cat07.jpg',
    'assets/cat08.jpg',
    'assets/wow-cat01.jpeg',
    'assets/wow-cat02.jpeg',
  ];

  public ngOnInit(): void {
    this.initTask();
  }

  public onResponse(value: boolean): void {
    if (value) {
      this.points++;
      this.showSuccess = true;
      setTimeout(() => this.showSuccess = false, 1000);
    } else {
      this.points--;
      this.showFail = true;
      setTimeout(() => this.showFail = false, 1000);
    }
    if (this.points < 0) {
      this.points = 0;
    }

    this.selectPicUrl();
    this.initTask();
  }

  private selectPicUrl(): void {
    let index = Math.floor(this.points / 3);
    if (index > 9) index = 9;
    this.catUrl = this.cats[index];
  }

  private initTask(): void {
    this.a = Math.floor(Math.random() * 11);
    this.b = Math.floor(Math.random() * 10) + 1;
    this.operation = Math.floor(Math.random() * 2);

    this.answers = [];
    for (let i = 0; i < 4; i++) {
      this.answers.push({
        label: Math.floor(Math.random() * 100),
        value: false,
      });
    }
    const rightIndex = Math.floor(Math.random() * 4);
    if (this.operation === 0) {
      const index = this.answers.findIndex((item) => item.label === this.a * this.b);
      if (index !== -1) {
        this.answers[index].value = true;
        return;
      }

      this.answers[rightIndex] = {
        label: this.a * this.b,
        value: true,
      }
    } else {
      const c = Math.floor(Math.random() * 11);
      this.a = this.b * c;

      const index = this.answers.findIndex((item) => item.label === c);
      if (index !== -1) {
        this.answers[index].value = true;
        return;
      }

      this.answers[rightIndex] = {
        label: c,
        value: true,
      }
    }
  }
}

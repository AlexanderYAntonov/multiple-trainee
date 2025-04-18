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

  public answers: Answer[] = [
  ];

  public ngOnInit(): void {
    this.initTask();
  }

  public onResponse(value: boolean): void {
    if (value) {
      this.points++;
    } else {
      this.points--;
    }
    if (this.points < 0) {
      this.points = 0;
    }

    this.initTask();
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
      this.answers[rightIndex] = {
        label: this.a * this.b,
        value: true,
      }
    } else {
      const c = Math.floor(Math.random() * 11);
      this.a = this.b * c;
      this.answers[rightIndex] = {
        label: c,
        value: true,
      }
    }
  }
}

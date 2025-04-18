import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface Answer {
  label: number;
  value: boolean;
}

@Component({
  selector: 'app-selector',
  standalone: true,
  imports: [NgFor],
  templateUrl: './selector.component.html',
  styleUrl: './selector.component.scss'
})
export class SelectorComponent {
  @Input()
  public answers: Answer[] = [];

  @Output()
  public response: EventEmitter<boolean> = new EventEmitter<boolean>();

  public select(value: boolean): void {
    this.response.emit(value);
  }
}

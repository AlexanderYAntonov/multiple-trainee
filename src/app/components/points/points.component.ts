import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-points',
  standalone: true,
  imports: [],
  templateUrl: './points.component.html',
  styleUrl: './points.component.scss'
})
export class PointsComponent {
  @Input()
  public value: number = 0;
}

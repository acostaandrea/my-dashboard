import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TitleComponent } from '@shared/title/title.component';

type Grade = 'A' | 'B' | 'F';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [RouterModule, TitleComponent],
  templateUrl: './control-flow.component.html',
  styles: ``
})
export default class ControlFlowComponent {

  public showContent = signal(false);
  public grade = signal<Grade>('A');
  public frameworks = signal(['Angular', 'React', 'Vue', 'Svelte','Qwik']);
  public frameworks2 = signal([]);

  public toggleContent(){
    this.showContent.update(value => !value);
  }

}

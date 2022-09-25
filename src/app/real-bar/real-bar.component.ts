import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-real-bar',
  templateUrl: './real-bar.component.html',
  styleUrls: ['./real-bar.component.css']
})
export class RealBarComponent { 

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );  

  constructor(private breakpointObserver: BreakpointObserver) {}

}

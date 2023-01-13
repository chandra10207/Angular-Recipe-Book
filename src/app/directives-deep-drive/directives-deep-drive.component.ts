import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-deep-drive',
  templateUrl: './directives-deep-drive.component.html',
  styleUrls: ['./directives-deep-drive.component.scss']
})
export class DirectivesDeepDriveComponent implements OnInit {

  numbers = [1,2,3,4,5];
  oddNumbers = [1,3,5]
  evenNumbers = [2,4,6]
  onlyOdd = false
  switchValue = 35;


  constructor() { }

  ngOnInit(): void {
  }

}

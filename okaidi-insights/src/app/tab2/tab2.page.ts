import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
public userInput1!: number;
public userInput2!: number;
public userInput3!: number;

public predefinedValue1: number = 100;
public predefinedValue2: number = 200;
public predefinedValue3: number = 300;

public displayValue1: string = '';
public displayValue2: string = '';
public displayValue3: string = '';

public isAbove1: boolean = false;
public isAbove2: boolean = false;
public isAbove3: boolean = false;

public iconName1: string = '';
public iconName2: string = '';
public iconName3: string = '';

public isEqual1: boolean = false;
public isEqual2: boolean = false;
public isEqual3: boolean = false;

constructor() {}

  updateDisplay(section: number) {
    switch (section) {
      case 1:
        this.isAbove1 = this.userInput1 > this.predefinedValue1;
        this.isEqual1 = this.userInput1 === this.predefinedValue1;
        this.displayValue1 = `${this.userInput1} €`;
        this.iconName1 = this.isAbove1 ? 'arrow-up-outline' : 'arrow-down-outline';
        if (this.isEqual1) this.iconName1 = 'remove';
        break;
      case 2:
        this.isAbove2 = this.userInput2 > this.predefinedValue2;
        this.isEqual2 = this.userInput2 === this.predefinedValue2;
        this.displayValue2 = `${this.userInput2} €`;
        this.iconName2 = this.isAbove2 ? 'arrow-up-outline' : 'arrow-down-outline';
        if (this.isEqual2) this.iconName2 = 'remove';
        break;
      case 3:
        this.isAbove3 = this.userInput3 > this.predefinedValue3;
        this.isEqual3 = this.userInput3 === this.predefinedValue3;
        this.displayValue3 = `${this.userInput3}`;
        this.iconName3 = this.isAbove3 ? 'arrow-up-outline' : 'arrow-down-outline';
        if (this.isEqual3) this.iconName3 = 'remove';
        break;
    }
  }
}

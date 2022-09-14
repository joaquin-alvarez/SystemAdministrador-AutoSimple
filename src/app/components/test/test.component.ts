import { Component, OnInit } from '@angular/core';
import { Test } from 'src/app/interfaces/test';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.sass']
})
export class TestComponent implements OnInit {
  testResponse : string

  constructor(private testService: TestService) { }

  ngOnInit(): void {
    this.testService.getTestJSON()
    .subscribe(res => {
      this.testResponse = JSON.stringify(res)
    })
  }
}

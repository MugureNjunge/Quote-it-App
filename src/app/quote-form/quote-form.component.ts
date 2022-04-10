import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  newQuote = new Quote(0, "", "", "", new Date());

  //event emitter
  @Output() addQuote = new EventEmitter<Quote>();

  //displaySuccessMessage
  displaySuccessMessage = false;
  // constructor() { }

  onSubmit() {
    this.displaySuccessMessage = true;

    //create a new quote
    this.addQuote.emit(this.newQuote);
  }

  constructor() { }

  ngOnInit(): void {
  }

}

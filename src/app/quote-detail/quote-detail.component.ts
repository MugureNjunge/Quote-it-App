import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quotes'; 

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent
implements OnInit {

  
  @Input()quote!: Quote;

  @Output() deleteQuoteEvent = new EventEmitter<Quote>();

 
  @Output() upVoteQuoteEvent = new EventEmitter<Quote>();

  
  @Output() downVoteQuoteEvent = new EventEmitter<Quote>();


  deleteQuote(quote:Quote) {
    this.deleteQuoteEvent.emit(quote);
  }

  upVoteQuote(quote:Quote) {
    this.upVoteQuoteEvent.emit(quote);
  }

  downVoteQuote(quote:Quote) {
    this.downVoteQuoteEvent.emit(quote);
  }
  constructor() { }

  ngOnInit(): void {
  }

}



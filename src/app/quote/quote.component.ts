import { Component, OnInit } from '@angular/core';
import { Quote } from '../quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    new Quote(
    1,
    'Lloyd Warui',
    'Pat Naina',
    'Without chaos there is no change',
    new Date(2022,1,1)),
  ]
  goals: any;


  //add quote
  addNewQuote(quote:any) {
    this.quotes.push(
      new Quote(
        quote.id,
        quote.author,
        quote.createdBy,
        quote.statement,
        new Date()
      )
    );
  }
  //toggle
  toggleDetails(index: number) {
    this.quotes[index].showVotes = !this.quotes[index].showVotes;
  }

  //delete
  deleteQuote(deleteQuoteEvent: any,index: number) {
    if(deleteQuoteEvent) {
      this.quotes.splice(index,1);
    }
  }

  //upvote
  upVoteQuote(upVoteQuoteEvent: any,index:number) {
    if(upVoteQuoteEvent) {
      this.quotes[index].likes++;
    }
  }
  
  //downvote
  downVoteQuote(downVoteQuoteEvent:any,index:number) {
    if (downVoteQuoteEvent) {
      this.quotes[index].likes++;
    }
  }

  // highest number
  // getQuoteWithHighestLikes() {
  //   let quoteWithHighestLikes = this.quotes[0];
  //   for (let i = 0; i < this.quotes.length; i++) {
  //     if (this.quotes[i].likes > quoteWithHighestLikes.likes) {
  //       quoteWithHighestLikes = this.quotes[i];
  //     }
  //   }
  //   return quoteWithHighestLikes;
  // }

  constructor() { }

  ngOnInit(): void {
  }

}

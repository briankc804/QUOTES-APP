import { Component, OnInit } from '@angular/core';
import{Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] =[
    new Quote (1,'Eunice','Failure','Each individual is to be blamed for their failures no matter what, because if we wanted to suceed  we would rise up whenever we fall untill we reach our goals .','By MOM', new Date(2019,7,12)),
    new Quote (2,'Brian','Education','Education is not the main key to success but it is the door because when it brings an opportunity you will be among the chosen and you can use it now to suceed.','Reelgoat',new Date(2019,7,14)),
    new Quote (3,'Cheruiyot','success','To success is like a seed, you will plant and water it for it to bear fruits.You need time,patience,prayer and faith to succeed.','By Dad',new Date(2019,6,3)),
    new Quote (4,'Walt Disney','Rising','The way to get started is to quit talking and begin doing. ','Floyd',new Date(2019,7,7)),
    new Quote (5,'peter','Life','If life were predictable it would cease to be life, and be without flavor.','Eleanor Roosevelt',new Date(2019,7,17)),
    new Quote (6,'Duke','Believing','The future belongs to those who believe in the beauty of their dreams.','Aroan ',new Date(2019,7,15))
  
   ]

   toggleDetails(index:any){
     this.quotes[index].showDescription =!this.quotes[index].showDescription;
   }
   deleteQuote(isComplete: any,index: number){
     if (isComplete) { 
       let toDelete = confirm('Are you sure you want to delete ${this.quote[index].name}?')
       if (toDelete)
       this.quotes.splice(index,1);
     }
     
   }
   addNewQuote(quote:any){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    Quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import{Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] =[
    new Quote (1,'Eunice','Failure','Each individual is to be blamed for their failures no matter what, because if we wanted to suceed  we would rise up whenever we fall untill we reach our goals .','By MOM', new Date(2019,7,12),0,0),
    new Quote (2,'Brian','Education','Education is not the main key to success but it is the door because when it brings an opportunity you will be among the chosen and you can use it now to suceed.','Reelgoat',new Date(2019,7,14),0,0),
    new Quote (3,'Cheruiyot','success','To success is like a seed, you will plant and water it for it to bear fruits.You need time,patience,prayer and faith to succeed.','By Dad',new Date(2019,6,3),0,0),
    new Quote (4,'Walt Disney','Rising','The way to get started is to quit talking and begin doing. ','Floyd',new Date(2019,7,7),0,0),
    new Quote (5,'peter','Life','If life were predictable it would cease to be life, and be without flavor.','Eleanor Roosevelt',new Date(2019,7,17),0,0),
    new Quote (6,'Duke','Believing','The future belongs to those who believe in the beauty of their dreams.','Aroan ',new Date(2019,7,15),0,0)
  
   ]
  constructor() { }

  ngOnInit(): void {
  }

}



export class Quote {
    showDescription: boolean = false;
  constructor(public id:number,public name:string, public title:string,public description:string,public author:string, public datePosted: Date,public likes:number, public dislikes:number){
      this.showDescription=false;
    }
}



export class Quote {
    showDescription: boolean = false;
  static id: any;
  showAuthor:any;
  static completeDate: Date;
  likes: number | undefined;
  dislikes: number | undefined;
  constructor(public id:number,public name:string, public title:string,public description:string,public author:string, public datePosted: Date){
      this.showDescription=false;
    }
}

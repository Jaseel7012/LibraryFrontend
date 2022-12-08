import { Component } from '@angular/core';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent {
  name=""
  image=""
  price=""
  author=""
  publisher=""
  discription=""
  language=""
  distributor=""
  releaseyear=""
  view=()=>
  {
    let data:any={
      'name':this.name,
    'src':this.image,
    'price':this.price,
    'author':this.author,
    'publisher':this.publisher,
    'discription':this.discription,
    'language':this.language,
    'distributor':this.distributor,
    'releaseyear':this.releaseyear
    }
    
    console.log(data)

  }

}

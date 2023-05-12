// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'PR6_2';
// }
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  // userForm: FormGroup;
  listData: any;
filteredString: string="";
  constructor(private fb: FormBuilder) {
    this.listData = [{id:1 ,name:'Iphone',pdate:"01-Apr-2015",price:15000,img:'https://www.gstatic.com/webp/gallery3/1.png'},
                     {id:2 ,name:'Android Phone',pdate:"05-May-2015",price:5000,img:"https://www.gstatic.com/webp/gallery3/1.png"},
                     {id:3 ,name:'Camera',pdate:"03-May-2015",price:5000,img:"https://www.gstatic.com/webp/gallery3/1.png"},
                     {id:4 ,name:'AC',pdate:"28-May-2015",price:45000,img:"https://www.gstatic.com/webp/gallery3/1.png"},
                     {id:5 ,name:'Smart TV',pdate:"18-May-2015",price:15000,img:"https://www.gstatic.com/webp/gallery3/1.png"}];
    // this.userForm = this.fb.group({
    //   name: [''],
    //   address: [''],
    //   contactNo: [''],
    //   gender: [''],
    // });
  }
  public additem(): void {
    // this.listData.push(this.userForm.value);
    // this.userForm.reset();
  }
  reset() {
    // this.userForm.reset();
  }
  removeItem(element: any) {
    // this.listData.forEach((value: any, index: any) => {
    //   if (value == element) {
    //     console.log('Remove Clicked');
    //     this.listData.splice(index, 1);
    //   }
    // });
  }
  ngOnInit() {}
}

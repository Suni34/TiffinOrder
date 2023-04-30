import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent implements OnInit {
vendors: any;
  ngOnInit():void{}

  // vendors: Vendor[];
  // constructor(private vendorService: VendorService,
  //   private route: Router){}
  
// ngOnInit(): void{
  
// }
  // private getVendor(){
  //   this.vendorService.getVendorList().subscribe(data => {
  //     this.vendors=data;
  //   });
  // }

  // vendorDetails(vendorId: String){

  //   this.route.navigate(['vendor-details',vendorId]);
  // }

  // updateVendor(vendorId: String){
  //   this.route.navigate(['update-vendor',vendorId]);
  // }

  // deleteVendor(vendorId: String){ 
  //   this.vendorService.deleteVendor(vendorId).subscribe(data =>{
  //     console.log(data);
  //     this.getVendor();
  //   })
  }



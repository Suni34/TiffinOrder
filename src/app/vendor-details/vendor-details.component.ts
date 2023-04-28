import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vendor } from '../vendor';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-details',
  templateUrl: './vendor-details.component.html',
  styleUrls: ['./vendor-details.component.css']
})
export class VendorDetailsComponent implements OnInit{
  vendorId: String;
  vendor: Vendor

  constructor(private route:ActivatedRoute, private vendorService:VendorService){ }

  ngOnInit(): void {
    this.vendorId= this.route.snapshot.params['vendorId'];
    this.vendor=new Vendor();
    this.vendorService.getVendorByVendorId(this.vendorId).subscribe(data =>{
      this.vendor= data;
    })

  }

}
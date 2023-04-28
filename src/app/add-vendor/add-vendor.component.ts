import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Vendor } from '../vendor';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-add-vendor',
  templateUrl: './add-vendor.component.html',
  styleUrls: ['./add-vendor.component.css']
})
export class AddVendorComponent implements OnInit{
  form!: FormGroup

  vendor: Vendor=new Vendor();
  constructor(private vendorService: VendorService,
    private fb: FormBuilder,
    private router: Router){}
  ngOnInit(): void {
    this.form=this.fb.group({
      vendorId: this.fb.control('',Validators.required),
      name: this.fb.control('',Validators.required),
      password: this.fb.control('',Validators.required),
      firmName: this.fb.control('',Validators.required),
      location: this.fb.control('',Validators.required),
      contactNumber: this.fb.control('',Validators.required),
    },{updateOn:'submit'})
    
  }
  saveVendor(){
    this.vendorService.addVendor(this.vendor).subscribe( data =>{
      console.log(data);
      this.goToVendor();
    },
    error => console.log(error));
  }
  goToVendor(){
    this.router.navigate(['/vendor']);
  }
  // get productId(): FormControl{
  //   return this.addForm.get("productid");
  // }
  onSubmit(){
    console.log(this.vendor);
    this.saveVendor();
  }
  }
  

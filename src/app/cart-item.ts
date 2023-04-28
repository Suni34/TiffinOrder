import { Breakfast } from "./breakfast";


export class CartItem{
  constructor(public breakfast:Breakfast){ }
  quantity:number = 1 ;
  price: number = this.breakfast.price;
}


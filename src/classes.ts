// class Player {
//   readonly id: string;
//   constructor(
//     private height: number,
//     public weight: number,
//     protected power?: number
//   ) {
//     this.id = String(Math.random() * 100);
//   }

//   getMyHeight = () => this.height;
// }

// const sanju = new Player(100, 150, 12312);
// console.log(sanju);
// console.log("Height: ", sanju.getMyHeight());

// class Player2 extends Player {
//   special: boolean;
//   constructor(height: number, weight: number, power: number, special: boolean) {
//     super(height, weight, power);
//     this.special = special;
//   }

//   getPower = () => this.power;
// }

// const sanjuSharma = new Player2(100, 160, 12312, true);
// console.log(sanjuSharma);
// console.log("Weight: ", sanjuSharma.weight);
// console.log("Power: ", sanjuSharma.getPower());
// console.log("Power: ", sanjuSharma.getMyHeight());
// console.log("id: ", sanjuSharma.id);

// **********************************************************************************************

// class Player {
//   readonly id: string;
//   constructor(
//     private height: number,
//     public weight: number,
//     protected power?: number
//   ) {
//     this.id = String(Math.random() * 100);
//   }

//   // This is Getter type function
//   get getMyHeight(): number {
//     return this.height;
//   }

//   // This is Setter type function
//   set changeHeight(val: number) {
//     this.height = val
//   }
// }

// const sanju = new Player(100, 150, 12312);
// console.log(sanju);
// console.log("Height: ",sanju.getMyHeight);

// sanju.changeHeight = 500;
// console.log("Changed Height: ", sanju.getMyHeight);

//***************************************************************************************

// Creating class by using interface
interface ProductType {
  name: string;
  price: number;
  stock: number;
  offer?: boolean;
}

interface GiveId {
    getId: () => string;
}

class Product implements ProductType, GiveId {
  private id: string = String(Math.random() * 1000);

  constructor(public name: string, public price: number, public stock: number) {}

  getId = ()=> this.id
}

const newProduct = new Product("Macbook", 20000, 2990);


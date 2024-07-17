// Type Utility

//***********************************************************************

// Prtial <Type> -> it make the type items optional
type User = {
  name: string;
  email: string;
};

type User2 = Partial<User>;

//***********************************************************************

// Required <Type>  -> Opposite of partial
type User1 = {
  name: string;
  email?: string;
};
//   type User = Required<User>;

const user1: Required<User1> = {
  name: "Sanju",
  email: "sanju@gmail.com",
};

//*********************************************************************************

// Readonly <Type>  -> cannot allow to change the value allocated to the variables
type Users = {
  name: string;
  email?: string;
};

const users: Readonly<User> = {
  name: "Sanju",
  email: "sanju@gmail.com",
};

//***********************************************************************************

// Record <Keys, Type>
type Users1 = {
  name: string;
  email: string;
};

type Users2 = Record<"name" | "email" | "gender", string>;

// Example :-

interface UserInfo {
  age: number;
}

type UserName = "John" | "andrew" | "alen" | "jack";

const users3: Record<UserName, UserInfo> = {
  John: { age: 23 },
  andrew: { age: 23 },
  alen: { age: 23 },
  jack: { age: 23 },
};

//*****************************************************************************************************

// Pick <Type, Keys>
interface OrderInfo {
  readonly id: string;
  user: string;
  city: string;
  state: string;
  country: string;
  status: string;
}

type ShippingInfos = Pick<OrderInfo, "city" | "state" | "country">;

//*****************************************************************************************************

// Omit <Type, Keys>
interface ShippingInfo {
  city: string;
  state: string;
  country: string;
}

type Random = Omit<ShippingInfo, "city">;

//******************************************************************************************************

// Exclude <Type, ExcludedUnion>
type MyUnion = string | number | boolean;
type Random1 = Exclude<MyUnion, number>;

//******************************************************************************************************

// Extract <Type, Union>
type MyUnion1 = string | number | boolean;
type Random2 = Extract<MyUnion, number>;

//******************************************************************************************************

// NonNullable <Type>
type MyUnion3 = string | number | boolean | null | undefined;
type Random3 = NonNullable<MyUnion>;

//*******************************************************************************************************

// Parameters <Type>
const myFunc = (a: number, b: string) => {
  console.log(a + b);
};

type Random4 = Parameters<typeof myFunc>;

//*******************************************************************************************************

// ConstructorParameters <Type>
class SampleClass {
  constructor(public s: string, public t: string) {}
}
type Random5 = ConstructorParameters<typeof SampleClass>;

//*******************************************************************************************************

// ReturnType <Type>
const myFunc4 = (a: number, b: string): string => {
  return a + b;
};

type FuncType = ReturnType<typeof myFunc4>;

//*******************************************************************************************************

// InstanceType <Type>
class SampleClasses {
  constructor(public s: string, public t: string) {}
}
type Random6 = InstanceType<typeof SampleClasses>;

const user: Random6 = {
  s: "sdfkj",
  t: "sldfk",
};

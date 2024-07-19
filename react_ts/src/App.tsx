// // import Box from "./components/Box";
// import { FormEvent, useState } from "react";
// // import Form from "./components/Form";



// interface Person {
//   name: string;
//   age: number;
// }

// const App = () => {
//   // const [val, setVal] = useState<string> ("")

//   const [user, setUser] = useState<Person>();

//   const submitHandler = (e:FormEvent<HTMLFormElement>)=>{
//     e.preventDefault()
//     console.log(user);
//   }

//   return (
//     <>
//       {/* <div> */}
//       {/* <Box heading="Typescript" /> */}
//       {/* <Form labal="Search" value={val} setter={setVal} /> */}
//       {/* </div> */}

//       <div>
//         <form onSubmit={submitHandler}>
//           <input
//             type="number"
//             placeholder="Age"
//             value={user?.age || ""}
//             onChange={(e) =>
//               setUser((prev) => ({ ...prev!, age: Number(e.target.value) }))
//             }
//           />

//           <input
//             type="text"
//             placeholder="Name"
//             value={user?.name || ""}
//             onChange={(e) =>
//               setUser((prev) => ({ ...prev!, name: e.target.value }))
//             }
//           />
//           <button type="submit">Register</button>
//         </form>
//       </div>
//     </>
//   );
// }

//************************* Use Context Hook *********************************************

import { createContext, ReactNode, useState } from "react";
import Toggle from "./components/Toggle";

type ThemeType = "light" | "dark";

interface ThemeContextType {
  theme: ThemeType;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | null>({
  theme: "light",
  toggleTheme: () => {},
});


const ThemeProvider = ({ children }: { children: ReactNode }) => {

  const [theme, setTheme] = useState<ThemeType>("light");

  const toggleTheme = ()=>{ 
    setTheme((prev)=>(prev === "light" ? "dark" : "light"))
  }


  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
const App = () => {
  return (
      <ThemeProvider>
        <div>
        <h1>light | dark</h1>
        <Toggle/>
      </div>
      </ThemeProvider>
  );
};

export default App;

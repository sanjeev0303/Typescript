import { Dispatch, SetStateAction } from "react";

type inputValType = string | number;

const Form = <T extends inputValType>({
  labal,
  value,
  setter,
}: {
  labal: string;
  value: T;
  setter: Dispatch<SetStateAction<T>>
}) => {
  return (
    <form>
      <label> {labal} </label>
      <input type="text" value={value} onChange={(e)=>setter(e.target.value as T)} />
      <button>Submit</button>
    </form>
  );
};

export default Form;

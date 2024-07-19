

interface PropsType {
    heading: string;
    count?: number;
}


const Box = ({heading, count = 10}: PropsType) => {
  return (
    <div>
        <h1> {heading} </h1>
        <p> {count} </p>
    </div>
  )
}

export default Box
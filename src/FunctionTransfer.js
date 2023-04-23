export default function FunctionTransfer(props)
{
    return(
       <div>
            <h1>Destination Component</h1>
            <button onClick={props.data}>Click Me</button>
       </div>
    );
}
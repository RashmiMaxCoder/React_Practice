import "./App.css";
function App(props){

    return(
       <>
            <div className ="mainDiv">
                <h1>Hey I am H1 {props.name}</h1>
            </div>

       </>
    )
}
export default App;
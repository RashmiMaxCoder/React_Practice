import "./App.css";

function App(props) {
  return (
    <>
      <div className="container text-center , bg-warning">
        <div className="row">
          <div className="col">{props.name}</div>
          <div className="col">{props.designation}</div>
          <div className="col">{props.location}</div>
         <div className="col"> <button className="btn btn-primary">Submit</button></div>
         {/* <div><button type="button" class="btn btn-success">Success</button></div> */}
        </div>
      </div>
    </>
  );
}
export default App;

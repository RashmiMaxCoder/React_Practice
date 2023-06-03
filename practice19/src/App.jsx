import "./App.css";
import "./App.scss";
//  <div className="container text-center , bg-warning"> for green color nd for white mt-5
function App(props) {
  return (
    <>
      <div className="container text-center ,mt-5">
        <div className="row">
          <div className="col myName">{props.name}</div>
          <div className="col myDesignation">{props.designation}</div>
          <div className="col myLocation">{props.location}</div>
         <div className="col myName"> <button className="btn btn-primary">Submit</button></div>
         {/* <div><button  type="button" class="btn btn-success">Success</button></div> */}
        </div>
      </div>
    </>
  );
}
export default App;

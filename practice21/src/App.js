import React from "react";

class App extends React.Component {
    clickFunc(){
        alert('button is clicked');
    }
    render(){
        return (
            <>
            <label>Enter your name:</label>
            <input type="text" placeholder="Enter your name..." aria-label="Name" aria-required="true" />
          <table>
           <tr>
            <td>1 Column</td>
            <td>2 Column</td>
           </tr>
           </table>
           <br></br>
           {/* <button onClick={this.clickFunc}>Click Me</button> */}
           <span onClick={this.clickFunc} >Click Me </span>
            </>
            
            )
    }

}
export default App;
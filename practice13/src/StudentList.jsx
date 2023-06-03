import React from 'react';
import Searchbar from './Searchbar';
import StudentData from './StudentData';

class StudentList extends React.Component {
render(){
    return(
        <div style={{maxWidth : `400px`, padding : `40px`, backgroundColor : `#eee`,
        margin :`40px auto` , fontFamily : `Arial` , fontSize :`16px`}}>
        <Searchbar></Searchbar>
        <StudentData></StudentData>
        </div>
        )
}

}
export default StudentList;

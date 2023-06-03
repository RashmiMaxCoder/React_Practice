import React from 'react';
import StudentTable from './StudentTable';

class StudentData extends React.Component
{
    render(){
        return(
            <table style={{marginTop :`40px` , width :`100%`,textAlign :`center`}}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Marks</th>
                        <th>Subject</th>
                        <th>Result</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        StudentTable.map((studata,index) => {
                            return(
                                <tr>
                                    <td>{studata.Name}</td>
                                    <td>{studata.Marks}</td>
                                    <td>{studata.Subject}</td>
                                    <td>{studata.Result}</td>
                                </tr>
                            )
                        })
                        }
                </tbody>
            </table>
            )
    }
}
export default StudentData;
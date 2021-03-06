import React, {useContext} from 'react';
import {EmployeeContext} from "../../utils/employeeContext"


function Table() {

    const { displayedEmployees, setDisplayedEmployees } = useContext(EmployeeContext)
    


        function sortByName(){
            displayedEmployees.sort(function(a,b){
            if(a.firstName < b.firstName){
                return -1;
            } else {
                return 1;
            }
        })
           // You have to spread, because this creates a new variable, instead of just updating the variable. React will not recognize it as an update if you just update the variable.
        setDisplayedEmployees([...displayedEmployees])
    }

        function sortByAge(){
            displayedEmployees.sort(function(a,b){
                return (a.age - b.age)
            })
            setDisplayedEmployees([...displayedEmployees])
    }


    return (
        <div className="table-responsive">
        <table className="table table-striped table-bordered table-hover">
            <thead className="thead-dark">
                <tr>
                    <th onClick={() => sortByName() } scope="col"><button type="button" className="btn btn-outline-light">First Name</button></th>
                    <th scope="col">Last Name</th>
                    <th onClick={() => sortByAge() } scope="col"><button type="button" className="btn btn-outline-light">Age</button></th>
                    <th scope="col">Email</th>
                    <th scope="col">Role</th>
                </tr>
            </thead>
            <tbody>
                {displayedEmployees.map(employee => {
                    return (
                        <tr>
                        <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>
                        <td>{employee.age}</td>
                        <td>{employee.email}</td>
                        <td>{employee.role}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        </div>
    )
}
export default Table;
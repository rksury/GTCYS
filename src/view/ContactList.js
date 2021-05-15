import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import SearchIcon from "@material-ui/icons/Search";
import {Delete, EditOutlined} from "@material-ui/icons";
import './form.css';


function ContactList({handleUpdate, handleDelete, user, data, isSuccess}) {

    // const [searchTerm, setSearchTerm] = useState();
    // const [searchResults, setSearchResults] = useState([]);
    // const handleSearch = event => {
    //     setSearchTerm(event.target.value);
    // };
    // useEffect(() => {
    //     const results = data.filter(person =>
    //         person.toLowerCase().includes(searchTerm.toLowerCase())
    //     );
    //     setSearchResults(results);
    // }, [searchTerm]);

    return (

        <>
            {isSuccess && (
                <div>
                    <hr/>
                    <div className="row p-4 pt-3 pb-3">
                        <div className="col-md-4">
                            <div className="input-group rounded">
                                <input type="search" className="form-control rounded" placeholder="Search"
                                       aria-label="Search"
                                    // value={searchTerm} onChange={handleSearch}
                                       aria-describedby="search-addon"/>
                                <span className="input-group-text border-0" id="search-addon"><SearchIcon/></span>
                            </div>
                        </div>
                    </div>

                    <div className="row p-4">
                        <div className="col-md-12">
                            <table className="table table-striped">
                                <thead>
                                <tr className="tableRow">
                                    <th scope="col" className="borderColor">
                                        <input className="form-check-input" type="checkbox" id="flexCheckDefault"/>
                                    </th>
                                    <th scope="col"></th>
                                    <th scope="col">Line</th>
                                    <th scope="col">Date of Services</th>
                                    <th scope="col">Procedure Code</th>
                                    <th scope="col">Qty</th>
                                    <th scope="col">Diag. Pointer</th>
                                    <th scope="col">Modifiers</th>
                                    <th scope="col">Billed Amt</th>
                                    <th scope="col"></th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    user.map((user, index) => (
                                        <tr key={index} className="tableRow">
                                            <td>
                                                <input className="form-check-input" type="checkbox" value=""
                                                       id="flexCheckDefault"/>
                                            </td>
                                            <td><EditOutlined color="disabled" className="tableIcon"
                                                              onClick={(e) => handleUpdate(e, index)}/></td>
                                            <td>{index}</td>
                                            <td>{user.startDate}- {user.endDate}</td>
                                            <td>{user.procedureCode}</td>
                                            <td>{user.qty}</td>
                                            <td>{user.diag1},{user.diag2},{user.diag3},{user.diag4}</td>
                                            <td>{user.modifier1},{user.modifier2},{user.modifier3},{user.modifier4}</td>
                                            <td>{user.billedAmount}</td>
                                            <td><span className="tableIcon"><Delete
                                                onClick={(e) => handleDelete(e, index)}/></span>
                                            </td>
                                        </tr>
                                    ))
                                }

                                <tr className="headingtwo">
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            )}
        </>

    )
}

const mapStateToprops = (state) => (
    {
        user: state.contact.data
    }
)
export default connect(mapStateToprops)(ContactList)
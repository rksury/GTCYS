import React from 'react'
import {formData} from './formCompnent/FormFunction'
import './form.css';

import Textfield from "./formCompnent/Textfield";
import {Check} from "@material-ui/icons";


function ContactForm({data, handleChange, addData, error, success}) {
    return (
        <>
            <div className="row"><h6 className="headingtwo px-4">Entry Form</h6></div>
            <div className="row p-3 m-2"><p className="headingthree px-lg-1">Detail Line Information  <span className="Error">{error}</span> </p>
            </div>

            <form onSubmit={addData} >
                <div className="row m-2">
                    <div className="col-md-4 pb-4">
                        <span className="inputHeading">Start of Service *</span>
                        <Textfield formData={formData[0]} userData={data.startDate} func={handleChange}/>
                    </div>
                    <div className="col-md-4 pb-4">
                        <span className="inputHeading">End of Service *</span>
                        <Textfield formData={formData[1]} userData={data.endDate} func={handleChange}/>
                    </div>
                    <div className="col-md-4 pb-4">
                        <div className="row">
                            <div className="col-md-9 pb-4">
                                <span className="inputHeading">Procedure Code *</span>
                                <Textfield formData={formData[2]} userData={data.procedureCode} func={handleChange}/>
                            </div>
                            <div className="col-md-3 pb-4">
                                <span className="inputHeading">Qty *</span>
                                <Textfield placeholder="1" formData={formData[3]} userData={data.qty}
                                           func={handleChange}/>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row m-2">
                    <div className="col-md-4 pb-4">
                        <span className="inputHeading">Place of Service *</span>
                        <Textfield formData={formData[4]} userData={data.placeService} func={handleChange}/>
                    </div>

                    <div className="col-md-4 pb-4">
                        <span className="inputHeading">Diagnosis Pointers</span>
                        <div className="row">
                            <div className="col-md-3 pb-4">
                                <Textfield placeholder="DP 1 *" formData={formData[5]} userData={data.diag1}
                                           func={handleChange}/>
                            </div>
                            <div className="col-md-3 pb-4">
                                <Textfield placeholder="DP 2" formData={formData[6]} userData={data.diag2}
                                           func={handleChange}/>
                            </div>
                            <div className="col-md-3 pb-4">
                                <Textfield placeholder="DP 3" formData={formData[7]} userData={data.diag3}
                                           func={handleChange}/>
                            </div>
                            <div className="col-md-3 pb-4">
                                <Textfield placeholder="DP 4" formData={formData[8]} userData={data.diag4}
                                           func={handleChange}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 pb-4">
                        <span className="inputHeading"> Modifiers</span>
                        <div className="row">
                            <div className="col-md-3 pb-4">
                                <Textfield placeholder="MD 1" formData={formData[9]} userData={data.modifier1}
                                           func={handleChange}/>
                            </div>
                            <div className="col-md-3 pb-4">
                                <Textfield placeholder="MD 2" formData={formData[10]} userData={data.modifier2}
                                           func={handleChange}/>
                            </div>
                            <div className="col-md-3 pb-4">
                                <Textfield placeholder="MD 3" formData={formData[11]} userData={data.modifier3}
                                           func={handleChange}/>
                            </div>
                            <div className="col-md-3 pb-4">
                                <Textfield placeholder="MD 4" formData={formData[12]} userData={data.modifier4}
                                           func={handleChange}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row m-2">
                    <div className="col-md-4 pb-4">
                        <span className="inputHeading"> NDC Code</span>
                        <Textfield formData={formData[13]} userData={data.ndcCode} func={handleChange}/>
                    </div>
                    <div className="col-md-4 pb-4">
                        <span className="inputHeading"> NDC Quantity</span>
                        <Textfield formData={formData[14]} userData={data.ndcQty} func={handleChange}/>
                    </div>
                    <div className="col-md-4 pb-4">
                        <span className="inputHeading"> Billed Amount</span>
                        <Textfield placeholder="$" formData={formData[15]} userData={data.billedAmount}
                                   func={handleChange}/></div>
                </div>

                <div className="row m-2">
                    <div className="col-md-4 pb-4">
                        <span className="inputHeading"> Provider Email Address *</span>
                        <Textfield formData={formData[16]} userData={data.email} func={handleChange}/>
                    </div>
                    <div className="col-md-4 pb-4">
                        <span className="inputHeading"> Provider Phone *</span>
                        <Textfield formData={formData[17]} userData={data.number} func={handleChange}/>
                    </div>
                </div>
                <div className="row m-2">
                    <div className="col-md-12 d-flex justify-content-end align-items-center">
                        {success && (
                            <span className="m-2 Status"><Check/>added successfully</span>
                        )}
                        <button type="submit" className="btn btn-primary btn-lg">Add</button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default ContactForm;

import { useState } from "react";

const CompnayBank = () => {
    const [bankDetails, setBankDetails] = useState([]);
    const [formData, setFormData] = useState({
        bankName: "",
        acName: "",
        acType: "",
        country: "",
        State: "",
        IFSCCode: "",
        IBANNO: "",
        FedWire: "",
        ChipNo: "",
        Comments: "",
        AccountName: "",
        BranchName: "",
        PHONENo: "",
        City: "",
        PinCode: "",
        ClearingNo: "",
        SwiftCode: "",
        adCode: "",
        Currency: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };



    const submitDataFunction = (e) => {
        e.preventDefault();

        // Use the current form data, not the state
        setBankDetails((prevDetails) => [...prevDetails, formData]);
        // Clear the form data
        setFormData({
            bankName: "",
            acName: "",
            acType: "",
            address: "",
            IFSCCode: "",
            country: "",
            IBANNO: "",
            FedWire: "",
            ChipNo: "",
            Comments: "",
            AccountName: "",
            BranchName: "",
            PHONENo: "",
            City: "",
            PinCode: "",
            ClearingNo: "",
            SwiftCode: "",
            adCode: "",
            Currency: ""
            // Clear other fields here
        });
    };

   

    return (
        <>
            <p class="text-center fs-3">Company Bank</p>

            <div className="container justify-content-center mt-5">
                <div className="col-md-5 ">
                    <div className="row">
                        <div className="col-md-10">
                            <div className="mb-3">
                                <label for="inputTexrt" className="form-label">Bank Name</label>
                                <input
                                    type="text"
                                    name="bankName"
                                    value={formData.bankName}
                                    onChange={handleChange}
                                    placeholder="KARUR VYSYA BANK"
                                    className="form-control border border-dark"
                                    id="inputTexrt"
                                />
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="mb-2">
                                <label for="inputText" className="form-label">Account No</label>
                                <input
                                    type="text"
                                    name="acName"
                                    value={formData.acName}
                                    onChange={handleChange}
                                    placeholder="FUTURETECH BIZSOT LLP"
                                    className="form-control border border-dark"
                                    id="inputTexrt"
                                />
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="mb-2">
                                <label for="inputText" className="form-label">AC Type</label>
                                <input type="text"
                                    name="acType"
                                    value={formData.acType}
                                    onChange={handleChange}
                                    placeholder="CURENT"
                                    className="form-control border border-dark"
                                    id="inputText" />
                            </div>
                        </div>
                        <div className="col-md-10">
                            <div className="mb-3">
                                <label for="inputTexrt" className="form-label">Address</label>
                                <input type="text"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    placeholder="15 BELGUIUM TOWER, DELHI  GATE,SURAT"
                                    className="form-control border border-dark"
                                    id="inputTexrt" />
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="mb-2">
                                <label for="inputText" className="form-label">country</label>
                                <input type="text"
                                    name="country"
                                    value={formData.country}
                                    onChange={handleChange}

                                    className="form-control border border-dark"
                                    id="inputText" />
                            </div>
                        </div>

                        <div className="col-md-5">
                            <div className="mb-2">
                                <label for="inputText" className="form-label">State</label>
                                <input type="text"
                                    name="State"
                                    value={formData.State}
                                    onChange={handleChange}

                                    className="form-control border border-dark"
                                    id="inputText" />
                            </div>
                        </div>

                        <div className="col-md-5">
                            <div className="mb-2">
                                <label for="inputText" className="form-label">IFSC Code</label>
                                <input type="text"
                                    name="IFSCCode"
                                    value={formData.IFSCCode}
                                    onChange={handleChange}

                                    className="form-control border border-dark"
                                    id="inputText" />
                            </div>
                        </div>

                        <div className="col-md-5">
                            <div className="mb-2">
                                <label for="inputText" className="form-label">IBAN NO</label>
                                <input type="text"
                                    name="IBANNO"
                                    value={formData.IBANNO}
                                    onChange={handleChange}

                                    className="form-control border border-dark"
                                    id="inputText" />
                            </div>
                        </div>

                        <div className="col-md-5">
                            <div className="mb-2">
                                <label for="inputText" className="form-label">FedWire</label>
                                <input type="text"
                                    name="FedWire"
                                    value={formData.FedWire}
                                    onChange={handleChange}

                                    className="form-control border border-dark"
                                    id="inputText" />
                            </div>
                        </div>

                        <div className="col-md-5">
                            <div className="mb-2">
                                <label for="inputext" className="form-label">Chips No.</label>
                                <input type="text"
                                    name="ChipNo"
                                    value={formData.ChipNo}
                                    onChange={handleChange}

                                    className="form-control border border-dark"
                                    id="inputText" />
                            </div>
                        </div>
                        <div className="col-md-10">
                            <div className="mb-3">
                                <label for="inputTexrt" className="form-label">Comments</label>
                                <input type="text"
                                    name="Comments"
                                    value={formData.Comments}
                                    onChange={handleChange}

                                    className="form-control border border-dark"
                                    id="inputText" />
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-md-5 ">
                    <div className="row">
                        <div className="col-md-10">
                            <div className="mb-3">
                                <label for="inputTexrt" className="form-label">Account Name</label>
                                <input type="text"
                                    name="AccountName"
                                    value={formData.AccountName}
                                    onChange={handleChange}

                                    className="form-control border border-dark"
                                    id="inputText" />
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="mb-2">
                                <label for="inputText" className="form-label">Branch Name</label>
                                <input type="text"
                                    name="BranchName"
                                    value={formData.BranchName}
                                    onChange={handleChange}

                                    className="form-control border border-dark"
                                    id="inputText" />
                            </div>
                            <div className="mb-2">
                                <label for="inputText" className="form-label">PHONE No</label>
                                <input type="text"
                                    name="PHONENo"
                                    value={formData.PHONENo}
                                    onChange={handleChange}

                                    className="form-control border border-dark"
                                    id="inputText" />
                            </div>
                        </div>



                        <div className="col-md-5">
                            <div className="mb-2">
                                <label for="inputPassword" className="form-label">City</label>
                                <input type="text"
                                    name="City"
                                    value={formData.City}
                                    onChange={handleChange}

                                    className="form-control border border-dark"
                                    id="inputText" />
                            </div>
                        </div>

                        <div className="col-md-5">
                            <div className="mb-2">
                                <label for="inputText" className="form-label">Pin code</label>
                                <input type="text"
                                    name="PinCode"
                                    value={formData.PinCode}
                                    onChange={handleChange}

                                    className="form-control border border-dark"
                                    id="inputText" />
                            </div>
                        </div>

                        <div className="col-md-5">
                            <div className="mb-2">
                                <label for="inputText" className="form-label">Clearing No</label>
                                <input type="text"
                                    name="ClearingNo"
                                    value={formData.ClearingNo}
                                    onChange={handleChange}

                                    className="form-control border border-dark"
                                    id="inputText" />
                            </div>
                        </div>

                        <div className="col-md-5">
                            <div className="mb-2">
                                <label for="inputText" className="form-label">SWIFT CODE</label>
                                <input type="text"
                                    name="SwiftCode"
                                    value={formData.SwiftCode}
                                    onChange={handleChange}

                                    className="form-control border border-dark"
                                    id="inputText" />
                            </div>
                        </div>

                        <div className="col-md-5">
                            <div className="mb-2">
                                <label for="inputPassword" className="form-label">AD Code</label>
                                <input type="text"
                                    name="adCode"
                                    value={formData.adCode}
                                    onChange={handleChange}

                                    className="form-control border border-dark"
                                    id="inputText" />
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="mb-2">
                                <label for="inputText" className="form-label">Currency</label>
                                <input type="text"
                                    name="Currency"
                                    value={formData.Currency}
                                    onChange={handleChange}

                                    className="form-control border border-dark"
                                    id="inputText" />
                            </div>
                        </div>



                    </div>

                    <div class="d-grid gap-2 col-6 mt-5">
                        <button class="btn btn-primary" onClick={submitDataFunction} type="button">Add</button>
                    </div>
                </div>


            </div>


            <div className="container">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Bank Name</th>
                            <th scope="col">Account Name</th>
                            <th scope="col">Account No</th>
                            <th scope="col">AC Type</th>
                            <th scope="col">Branch Name</th>
                            <th scope="col">City</th>
                            <th scope="col">Address</th>
                            <th scope="col">PHONE No</th>
                            <th scope="col">country</th>
                            <th scope="col">State</th>
                            <th scope="col">Pin code</th>
                            <th scope="col">Clearing No</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bankDetails.map((detail, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <th scope="row">{detail.bankName}</th>
                                <th scope="row">{detail.AccountName}</th>
                                <th scope="row">{detail.acName}</th>
                                <th scope="row">{detail.acType}</th>
                                <th scope="row">{detail.BranchName}</th>
                                <th scope="row">{detail.City}</th>
                                <th scope="row">{detail.address}</th>
                                <th scope="row">{detail.PHONENo}</th>
                                <th scope="row">{detail.country}</th>
                                <th scope="row">{detail.State}</th>
                                <th scope="row">{detail.PinCode}</th>
                                <th scope="row">{detail.ClearingNo}</th>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default CompnayBank;
import { useState } from "react";

const CompanyConteact = () => {
    const [bankDetails, setBankDetails] = useState([]);
    const [formData, setFormData] = useState({
        ContactName: "",
        Designation: "",
        Email: "",
        MOBILE: "",
        PAN: "",
        Adhar: ""
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
            ContactName: "",
            Designation: "",
            Email: "",
            MOBILE: "",
            PAN: "",
            Adhar: ""
            // Clear other fields here
        });
    };

    return (
        <>
            <p class="text-center fs-3">Company conteact</p>
            <div className="container">
        
                <div className="container justify-content-center mt-5">
                    <div className="col-md-5 ">
                        <div className="row">
                            <div className="col-md-10">
                                <div className="mb-3">
                                    <label for="inputAddress" className="form-label">Contact Name</label>
                                    <input type="text"
                                        name="ContactName"
                                        value={formData.ContactName}
                                        onChange={handleChange}
                                        placeholder="VIJAY P.PRAJAPATI"
                                        className="form-control border border-dark"
                                        id="inputAddress" />
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="mb-2">
                                    <label for="inputEmail4" className="form-label">Designation</label>
                                    <input type="Text"
                                        name="Designation"
                                        value={formData.Designation}
                                        onChange={handleChange}
                                        placeholder="PARTNER"
                                        className="form-control border border-dark"
                                        id="inputText4" />
                                </div>
                            </div>


                            <div className="col-md-10">
                                <div className="mb-3">
                                    <label for="inputAddress" className="form-label">Email Id</label>
                                    <input type="text"
                                        name="Email"
                                        value={formData.Email}
                                        onChange={handleChange}
                                        laceholder="VIJAY@FUTURETECHSOFT.IN"
                                        className="form-control border border-dark"
                                        id="inputAddress" />
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="mb-2">
                                    <label for="inputText4" className="form-label">MOBILE NO</label>
                                    <input type="number"
                                        name="MOBILE"
                                        value={formData.MOBILE}
                                        onChange={handleChange}
                                        placeholder="9825020262"
                                        className="form-control border border-dark"
                                        id="inputText4" />
                                </div>
                            </div>

                            <div className="col-md-5">
                                <div className="mb-2">
                                    <label for="inputPassword4" className="form-label">PAN No.</label>
                                    <input type="text"
                                        name="PAN"
                                        value={formData.PAN}
                                        onChange={handleChange}
                                        placeholder="APM113443AMP"
                                        className="form-control border border-dark"
                                        id="inputPassword4" />
                                </div>
                            </div>

                            <div className="col-md-5">
                                <div className="mb-2">
                                    <label for="inputEmail4" className="form-label">Adhar No</label>
                                    <input type="text"
                                        name="Adhar"
                                        value={formData.Adhar}
                                        onChange={handleChange}
                                        className="form-control border border-dark"
                                        id="inputEmail4" />
                                </div>
                            </div>






                            <div class="d-grid gap-2 col-6 mt-4">
                                <button class="btn btn-primary" onClick={submitDataFunction} type="button">Add</button>
                            </div>
                        </div>

                    </div>





                </div>
            </div>

            <div className="container">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Contact Name</th>
                            <th scope="col">Designation</th>
                            <th scope="col">Email Id</th>
                            <th scope="col">MOBILE NO</th>
                            <th scope="col">PAN No</th>
                            <th scope="col">Adhar No</th>


                        </tr>
                    </thead>
                    <tbody>
                        {bankDetails.map((detail, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <th scope="row">{detail.ContactName}</th>
                                <th scope="row">{detail.Designation}</th>
                                <th scope="row">{detail.Email}</th>
                                <th scope="row">{detail.MOBILE}</th>
                                <th scope="row">{detail.PAN}</th>
                                <th scope="row">{detail.Adhar}</th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default CompanyConteact;
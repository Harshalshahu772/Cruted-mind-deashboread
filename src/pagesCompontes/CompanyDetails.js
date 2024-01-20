import { ObjeactCompont, ObjeactCompont2,ObjeactCompont7, ObjeactCompont3, ObjeactCompont4, ObjeactCompont5, ObjeactCompont6 } from "../objeactCompont/ObjeactCompont";

const CompanyDaitles = () => {

    return (
        <>

            <div className="container-fluid justify-content-center">
                <p class="text-center fs-3">Company Details</p>

                <div className="container">
                    <div class="col-md-5 mx-2">
                        <label for="inputEmail4" className="form-label">Compnay Name</label>
                        <input type="email" placeholder="FUTURETECH BIZSOFT LLP"  className="form-control red-placeholder border border-dark" id="inputEmail4" />
                    </div>
                    <div className="col-md-5 ">
                        <label for="inputPassword4" className="form-label">Short Name</label>
                        <input type="password" placeholder="FUTURETECH" className="form-control border border-dark" id="inputPassword4" />
                    </div>

                </div>


                <div className="container">
                    {ObjeactCompont.map((field, index) => (
                        <div key={index} className={field.colClassName}>
                            <label htmlFor={field.id} className="form-label">
                                {field.label}
                            </label>
                            <input type={field.type} placeholder={field.placeholder}  className={field.className} id={field.id} />
                        </div>
                    ))}

                </div>
                <div className="container">
                    {ObjeactCompont2.map((field, index) => (
                        <div key={index} className={field.colClassName}>
                            <label htmlFor={field.id} className="form-label">
                                {field.label}
                            </label>
                            <input type={field.type}  placeholder={field.placeholder}  className={field.className} id={field.id} />
                        </div>
                    ))}

                </div>
                <div className="container">
                    {ObjeactCompont3.map((field, index) => (
                        <div key={index} className={field.colClassName}>
                            <label htmlFor={field.id} className="form-label">
                                {field.label}
                            </label>
                            <input type={field.type}  placeholder={field.placeholder} className={field.className} id={field.id} />
                        </div>
                    ))}

                </div>


                <div className="container">
                    {ObjeactCompont4.map((field, index) => (
                        <div key={index} className={field.colClassName}>
                            <label htmlFor={field.id} className="form-label">
                                {field.label}
                            </label>
                            <input type={field.type} placeholder={field.placeholder} className={field.className} id={field.id} />
                        </div>
                    ))}

                </div>
                <div className="container">
                    {ObjeactCompont5.map((field, index) => (
                        <div key={index} className={field.colClassName}>
                            <label htmlFor={field.id} className="form-label">
                                {field.label}
                            </label>
                            <input type={field.type} placeholder={field.placeholder} className={field.className} id={field.id} />
                        </div>
                    ))}

                </div>
                <div className="container">
                    {ObjeactCompont6.map((field, index) => (
                        <div key={index} className={field.colClassName}>
                            <label htmlFor={field.id} className="form-label">
                                {field.label}
                            </label>
                            <input type={field.type} placeholder={field.placeholder} className={field.className} id={field.id} />
                        </div>
                    ))}

                </div>
                

                <div className="container">
                    {ObjeactCompont7.map((field, index) => (
                        <div key={index} className={field.colClassName}>
                            <label htmlFor={field.id} className="form-label">
                                {field.label}
                            </label>
                            <input type={field.type} placeholder={field.placeholder} className={field.className} id={field.id} />
                        </div>
                    ))}

                </div>


            </div>
        </>
    );
};
export default CompanyDaitles;

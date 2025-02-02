import React from "react"
import './Services.css'
import { FaBook , FaCalculator, FaMoneyCheckAlt , FaClipboardCheck ,FaMoneyBillWave, FaFileInvoice } from "react-icons/fa";


 function Services() {
    return(
        <div>
           <div id="img">
                <h1> Our Services</h1>
                <img className="object-cover" src="https://i.pinimg.com/736x/1b/44/55/1b4455b7dcb7716ee4d6728f09c15c11.jpg" alt="" />
            </div>

            <div id="service" className="py-5">
                <div className="row mb-5">
                    <div className="boxs">
                        
                            <h3><FaBook/> 
                                Bookkeeping
                            </h3>
                            <p>
                             Precise and timely recording of financial transactions to maintain well-organized financial records.
                            </p>
                    </div>
                    <div className="boxs">
                            <h3>    
                            <FaCalculator/>
                            	Accounting
                            </h3>
                            <p>Holistic accounting solutions to ensure your financial statements are accurate and compliant.</p>
                    </div>
                    <div className="boxs">
                            <h3>
                                <FaMoneyCheckAlt/>
                                Accounts Payable & Receivable Management
                            </h3>
                            <p>Streamlined handling of payables and receivables to optimize cash flow.</p>
                    </div>
                   
                </div> 
                <div className="row">
                    <div className="boxs">
                            <h3>

                            <FaClipboardCheck /> 
                                Audit Preparation
                            </h3>
                            <p>Comprehensive assistance in preparing and organizing financial data for seamless audits.</p>
                    </div>
                    <div className="boxs">
                            <h3>
                                <FaMoneyBillWave />
                               Payroll Processing
                            </h3>
                            <p>Dependable payroll management to ensure timely and accurate employee payments.</p>
                    </div>
                    <div className="boxs">
                            <h3>< FaFileInvoice/>

                            	Tax Preparation & Compliance
                            </h3>
                            <p>Expert guidance on tax planning and preparation to ensure compliance with local regulations.</p>
                    </div>
                   
                </div>


            </div>
        </div>
        
    )
 }
 export default Services
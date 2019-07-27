import React from "react";
import "./AccountLayout.css";
import AccountRightPanel from "./AccountRightPanel/AccountRightPanel"
import RegisterStepTwo from "./Register/RegisterStepTwo/RegisterStepTwo"

class AccountLayout extends React.Component {
    render() {
        return <div>
            <div className="flex flex-col lg:flex-row">
                <div className="w-full lg:w-2/5 h-screen p-20">
                    <RegisterStepTwo />
                </div>
                <div className="order-first lg:order-last w-full lg:w-3/5 h-screen">
                    <AccountRightPanel />
                </div>
            </div>
        </div>

    }
}

export default AccountLayout;
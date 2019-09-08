import React, {Component} from 'react';
import Button from "../../../AccountLayout/Register/Button/Button";
import StatusIndicator from "../../../SetupLayout/StatusIndicator/StatusIndicator";
import SubHeader from "../../Settings/SubHeader/SubHeader";
import Checkbox from "./Checkbox/Checkbox";

class ManagerVoteModal extends Component {
    render() {
        return (
            <div className="flex flex-col mt-8">
                <div className="flex flex-row justify-between mb-8">
                    <p className="text-2xl text-gray-dark w-1/2 align-left">Brand Manager Seçimi</p>
                    <StatusIndicator color="blue" text="Başlıyor (14dk)"/>
                </div>
                <div className="flex flex-row mb-8 justify-between">
                    <SubHeader text="Sonlanma Tarihi"/> 
                    <p className="text-gray-dark text-base w-2/3 text-left">23 Tem 2018</p>
                </div>
                <div className="flex flex-row mb-24 justify-between">
                    <SubHeader text="Açıklama"/> 
                    <p className="text-gray-dark text-base w-2/3 text-left">Şirketin bordro, izin, işe alım süreçlerinin yönetiminden sorumludur.kararlarını genel müdür ve departman yardımcıları ile ortak alır.</p>
                </div>
                <Checkbox text="Doğukan Nomak"/>
                <Checkbox text="Çağakan Bağcı"/>
                <Checkbox text="Erdem Tonyalı"/>
                <div className="flex flex-col w-1/2 mt-24">
                    <Button text="Devam Et"/>
                </div>
            </div>
        )
    }
}

export default ManagerVoteModal;
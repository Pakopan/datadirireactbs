import React,{useContext} from 'react'
import CstmModal from './CstmModal';
import { DataListContext } from '../DataListContext';

export default function ModalEditData({toggleFlag, 
                                    btnToggle, flag, setFlag, currentDataRow,
                                    name, birthDate, birthPlace, gender, religion,
                                    updateName, updateBirthDate, updateBirthPlace
                                    , updateGender, updateReligion}) {
        const [data, setData] = useContext(DataListContext);
        const saveData = function () {
            const dataCpy = [...data];
            const prevId = dataCpy[currentDataRow].id;
            const newData = {
                nama : name,
                tempatLahir : birthPlace,
                tanggalLahir : birthDate,
                jenisKelamin : gender,
                agama : religion,
                id : prevId,
            }
            dataCpy.splice(currentDataRow,1, newData);
            setData(dataCpy);

            setFlag (!flag);
        }
    return (
        <span>
            <CstmModal tittle={"Edit Data Diri"} toggleFlag={toggleFlag} btnToggle={btnToggle} valueName={name} valueBirthPlace={birthPlace} 
            valueBirthDate={birthDate} valueGender={gender} valueReligion={religion}
            updateName={updateName} updateBirthDate={updateBirthDate}
            updateBirthPlace={updateBirthPlace} updateGender={updateGender} updateReligion={updateReligion}
            onClickCancel={btnToggle} onClickSubmit={saveData}/>
        </span>
    )
}

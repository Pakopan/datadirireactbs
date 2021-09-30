import React, {useContext, useState, useEffect} from 'react'
import {Button, Card, CardBody} from 'reactstrap';
import { DataListContext } from '../DataListContext';
import CstmModal from './CstmModal';

export default function ModalAddData() {
    const [data, setData] = useContext(DataListContext);
    //state untuk tiap text holder
    const [name, setName] = useState ('');
    const [birthDate, setBirthDate] = useState ('');
    const [birthPlace, setBirthPlace] = useState ('');
    const [gender, setGender] = useState ("Laki-Laki");
    const [religion, setReligion] = useState ("NULL");
    //--------------------------
    const [flag, setFlag] = useState(false);

    const toggleModal = () => setFlag (!flag);
    const updateName = (event) => setName(event.target.value);
    const updateBirthDate = (event) => setBirthDate(event.target.value);
    const updateBirthPlace = (event) => setBirthPlace (event.target.value);
    const updateGender = (selected) => setGender (selected);
    const updateReligion = (event) => setReligion (event.target.value);

    const addData = () => {
        const dataCpy = [...data,
                {nama : name,
                tempatLahir : birthPlace,
                tanggalLahir : birthDate,
                jenisKelamin : gender,
                agama : religion,
                id : Math.random()*1000,}]

        setData(dataCpy);
        setFlag (!flag);
        setName ('');
        setGender ('Laki-Laki');
        setBirthDate ('');
        setBirthPlace ('');
        setReligion ('NULL');
    }
    const deleteTotal = () => setData([]);

    

    return (
        <span>
            <Card className="main-card mb-3">
                <CardBody>
                    <Button className="mb-2 mr-2" color="primary" onClick={toggleModal}>
                        Tambahkan Data
                    </Button>
                    <Button className="mb-2 mr-2" color="danger" onClick={deleteTotal}>Hapus Total</Button>
                </CardBody>
            </Card>
            

            <CstmModal tittle={"Form Data Diri"} toggleFlag={flag} btnToggle={toggleModal} valueName={name} valueBirthPlace={birthPlace} 
            valueBirthDate={birthDate} valueGender={gender} valueReligion={religion}
            updateName={updateName} updateBirthDate={updateBirthDate}
            updateBirthPlace={updateBirthPlace} updateGender={updateGender} updateReligion={updateReligion}
            onClickCancel={toggleModal}
            onClickSubmit={addData}/>
        </span>
        
    )
}

import React,{useContext, useState, useEffect} from 'react'
import { DataListContext } from '../DataListContext'
import {Button} from 'reactstrap';
import ModalEditData from './ModalEditData';

export default function TableRow({nama, tempatLahir, tanggalLahir, jenisKelamin,agama, index, datum}) {
    const [data, setData] = useContext (DataListContext);

    const [dataRow, setDataRow] = useState(0);
    const [flag, setFlag] = useState(false);
    const [name, setName] = useState ('');
    const [birthDate, setBirthDate] = useState ('');
    const [birthPlace, setBirthPlace] = useState ('');
    const [gender, setGender] = useState ('');
    const [religion, setReligion] = useState ('');

    const updateName = (event) => setName(event.target.value);
    const updateBirthDate = (event) => setBirthDate(event.target.value);
    const updateBirthPlace = (event) => setBirthPlace (event.target.value);
    const updateGender = (selected) => setGender (selected);
    const updateReligion = (event) => setReligion (event.target.value);

    useEffect(()=>{
        setDataRow(data.findIndex(dat=>(dat.id === datum.id)));
    },[]);
    
    const deleteData = () => {
        const dataCopy = [...data];
        setData(dataCopy.filter(dat=>(dat.id !== datum.id)))
    }

    const toggleModal = function () {
        setDataRow(data.findIndex(dat=>(dat.id === datum.id)));
        setName (data[dataRow].nama);
        setBirthDate(data[dataRow].tanggalLahir);
        setBirthPlace(data[dataRow].tempatLahir);
        setGender(data[dataRow].jenisKelamin);
        setReligion(data[dataRow].agama);
        setFlag (!flag);
    }


    return (
            <tr>
                <td>{index+1}</td>
                <td>{nama}</td>
                <td>{tempatLahir}</td>
                <td>{tanggalLahir}</td>
                <td>{jenisKelamin}</td>
                <td>{agama}</td>
                <td>
                <ModalEditData 
                    toggleFlag={flag} 
                    btnToggle={toggleModal} 
                    currentDataRow={dataRow} 
                    flag={flag} 
                    setFlag={setFlag}

                    name={name}
                    birthPlace={birthPlace}
                    birthDate={birthDate}
                    gender={gender}
                    religion={religion}

                    updateName={updateName}
                    updateBirthDate={updateBirthDate}
                    updateBirthPlace={updateBirthPlace}
                    updateGender={updateGender}
                    updateReligion={updateReligion}/>
                    <Button className="mb-2 mr-2" color="danger" onClick={deleteData}>Hapus</Button>
                    <Button className="mb-2 mr-2" color="warning" onClick={toggleModal}>Edit</Button>
                </td>
            </tr>
    )
}

import React from 'react'
import {
    Modal, ModalBody, ModalFooter,
    Button, ButtonGroup,
    FormGroup, Label,
    Input,
} from 'reactstrap';
import InputMask from 'react-input-mask';

export default function CstmModal({tittle,
    toggleFlag, btnToggle, valueName, valueBirthPlace, valueBirthDate, valueGender, valueReligion,
    updateName, updateBirthDate, updateBirthPlace, updateGender, updateReligion, onClickCancel, onClickSubmit}) {

    return (
            <Modal isOpen={toggleFlag} toggle={btnToggle}>
                <ModalBody>
                    <FormGroup>
                        <h2>{tittle}</h2>
                        <hr></hr>
                    </FormGroup>
                    <FormGroup >
                        <Label>Nama Lengkap</Label>
                        <Input type="text" placeholder="Masukkan Nama Anda" value={valueName} onChange={updateName}/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Tempat Lahir</Label>
                        <Input type="text" placeholder="Masukkan Tempat Lahir Anda" value={valueBirthPlace} onChange={updateBirthPlace}/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Tanggal Lahir</Label>
                        <InputMask className="form-control" mask="99/99/9999" value={valueBirthDate} onChange={updateBirthDate} placeholder="Masukkan Tanggal Lahir Anda" />
                    </FormGroup>
                    <FormGroup style={{display:"flex", flexDirection:"column"}}>
                                                <Label for="jenisKelamin">Jenis Kelamin</Label>
                                                <ButtonGroup size="md" className="mb-2">
                                                <Button className="btn-pill" outline color="primary"
                                                        onClick={()=>updateGender("Laki-Laki")}
                                                        active={valueGender === "Laki-Laki"}
                                                        >Laki-Laki</Button>
                                                <Button className="btn-pill" outline color="primary"
                                                        onClick={()=>updateGender("Perempuan")}
                                                        active={valueGender === "Perempuan"}
                                                        >Perempuan</Button>
                                                </ButtonGroup>
                                            </FormGroup>
                    <FormGroup >
                    <Label>Agama</Label>
                        <select className="form-control" value={valueReligion} onChange={updateReligion}>
                             <option value="NULL" disabled selected>Pilih disini</option>
                              <option value="Islam">Islam</option>
                              <option value="Katolik">Katolik</option>
                              <option value="Protestan">Protestan</option>
                              <option value="Hindu">Hindu</option>
                              <option value="Budha">Budha</option>
                              <option value="Khonghucu">Khonghucu</option>
                        </select>
                    </FormGroup>
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={onClickCancel}>Cancel</Button>
                    <Button color="primary" onClick={onClickSubmit}>Submit</Button>
                </ModalFooter>
            </Modal>
    )
}

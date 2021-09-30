import React, {useContext} from 'react'
import {Card, CardBody, Table} from 'reactstrap';
import { DataListContext } from '../DataListContext';
import TableRow from './TableRow';

export default function TableResult() {
    const [data] = useContext(DataListContext);
    return (
        <div>
            <Card className="main-card mb-3">
                <CardBody>
                    <Table className="mb-0" bordered>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Nama Lengkap</th>
                                <th>Tempat Lahir</th>
                                <th>Tanggal Lahir</th>
                                <th>Jenis Kelamin</th>
                                <th>Agama</th>
                                <th>Tools</th>
                            </tr>
                            </thead>
                            <tbody>
                            {data.map((datum, index) => (
                                <TableRow 
                                        nama = {datum.nama}
                                        tempatLahir={datum.tempatLahir}
                                        tanggalLahir={datum.tanggalLahir}
                                        jenisKelamin={datum.jenisKelamin}
                                        agama={datum.agama}
                                        index={index}
                                        datum={datum}
                                />
                            ))}
                            </tbody>                                    
                    </Table>
                </CardBody>
            </Card>
        </div>
    )
}

import React,{createContext, useState} from 'react'


export const DataListContext = createContext();
export const DataListProvider = function (props) {
    const [data, setData] = useState([
        { nama: "Ervan Andi Wijaya",
            tempatLahir : "Tulungagung",
            tanggalLahir : "01/03/1999",
            jenisKelamin : "Laki-Laki",
            agama : "Islam",
            id : Math.random()*1000
        }
        
    ]);
    return (
            <DataListContext.Provider value={[data, setData]}>
                {props.children}
            </DataListContext.Provider>
    )
}

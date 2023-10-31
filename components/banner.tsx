"use client"

import {useState} from "react";


export default function Banner(){

    const [player, setPlayer] = useState("x")
    const [list, setList] = useState([
        "","","",
        "","","",
        "","","",
    ])

    function marcar(index:number){
        if(list[index]!= "")return


    }
    
    return(
        <section>
            <table>
                <tbody>
                    <td>
                        <tr onClick={() =>(marcar(0))}>x</tr>
                        <tr onClick={() =>(marcar(1))}>x</tr>
                        <tr onClick={() =>(marcar(2))}>x</tr>
                    </td>
                    <td>
                        <tr onClick={() =>(marcar(3))}>x</tr>
                        <tr onClick={() =>(marcar(4))}>x</tr>
                        <tr onClick={() =>(marcar(5))}>x</tr>
                    </td>
                    <td>
                        <tr onClick={() =>(marcar(6))}>x</tr>
                        <tr onClick={() =>(marcar(7))}>x</tr>
                        <tr onClick={() =>(marcar(8))}>x</tr>
                    </td>
                </tbody>
            </table>
        </section>
        
    )
}
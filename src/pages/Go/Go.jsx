import React from 'react'
import { useEffect } from 'react'

export default function Go() {
    useEffect(()=>{
        fetch('http://172.18.240.90/user/createValicode')
        .then(res => {
            console.log(res)
        })
    })
    return (
        <div>
            111
        </div>
    )
}

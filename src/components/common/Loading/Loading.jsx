import React, { useEffect } from 'react'
import loading from '../../../assets/img/loading.gif'
export default function Loading(props) {
    useEffect(() => {
        if (props.login) {
            setTimeout(() => {
                window.location.href = `#/presonalCenter/${props.id}`
            }, 1000)
        }
    }, [])
    return (    
        <div className="loading">
            <div className="loading-img">
                <img src={loading} alt="" />
            </div>
            <p>{props.msg}</p>
        </div>
    )
}

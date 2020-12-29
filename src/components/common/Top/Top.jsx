import React, { useState } from 'react'
import './index.css'
import schoolImg from '../../../assets/img/schoolImg.png'
import { Link } from 'react-router-dom'
export default function Top(props) {
    const [Login, setLogin] = useState(true)
    return (
        <div style={{ height: '67px' }}>
            <header>
                <div className="top">
                    <div className="logo"><Link to={`/home/${props.id}`}> <img src={schoolImg} alt="" /></Link></div>
                    <ul className='navTools'>
                        {props.person ? <li>{Login ? <><span id="showPersonalCenter">
                            <Link to={`/presonalCenter/${props.id}`}>个人中心</Link>
                        </span><span id="showHome">
                                <Link to='/' ><span onClick={() => {
                                    window.history.pushState(null, null, document.URL);
                                    window.addEventListener('popstate', function () {
                                        window.history.pushState(null, null, document.URL);
                                    });
                                }} >退出</span> </Link>
                            </span></> : <><a href="#lesson">登录</a><a href="#lesson">注册</a></>}</li> : null}
                    </ul>
                </div>
            </header>
        </div>
    )
}

import React, { useState,useEffect } from 'react'
import axios from 'axios'
import qs from 'qs'
import './Register.css'
import user_icon from './img/user_icon_copy.png'
import lock_icon from './img/lock_icon_copy.png'
import key from './img/key.png';
import bg from './img/bg.jpg';
import { Link } from 'react-router-dom'
import { axiosInstance } from "../../api/config"
import Loading from '../common/Loading/Loading'
export default function Register() {
    const [registername, setregistername] = useState('');
    const [resgisterpwd, setresgisterpwd] = useState('');
    const [repwd, setrepwd] = useState('');
    const [valicode, setvalicode] = useState('');
    const changeRegisterName = e => {
        setregistername(e.target.value)
    }
    const changeRegisterPwd = e => {
        setresgisterpwd(e.target.value)
    }
    const changeRePwd = e => {
        setrepwd(e.target.value);
    }
    const changeValicode = e => {
        setvalicode(e.target.value)
    }
    const [img, setImg] = useState('1')

    const handleResgister = () => {
        
        const options = {
            url: 'http://192.168.43.66/user/register',
            method: 'POST',
            data: {
                'email': registername,
                'password': resgisterpwd,
                'confirmpwd': repwd,
                'verificationcode': valicode
            },
        }
        axiosInstance({
            url: '/user/register',
            method: 'POST',

            data: {
                'email': registername,
                'password': resgisterpwd,
                'confirmpwd': repwd,
                'verificationcode': valicode
            }
        })
            .then(function (response) {
                if (response.data.code === 602) {
                    alert(response.data.msg);
                    window.location.href = '#/login'
                } else {
                    alert(response.data.msg);
                    window.location.reload()
                }
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    
    // 回车
    const onkeydown = (e) => {
        if(e.keyCode == 13) {
            handleResgister();
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', onkeydown);
    }, [])

    const [isregister,setisregister] = useState(true)
    const changeregister = ()=>{
        setisregister(false)
    }

    let email = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/
    return (
        <div>
            <div className="bg">
                <img src={bg} />
            </div>
            <div className="register-title">
                第三届江西省高校网络安全技能大赛
            </div>
            <div className="register">
                {isregister?<><div className="register_title">
                    <span>用户注册</span>
                </div>
                <div className="register-fields">
                    <div className="register-fields_user">
                        <div className="icon">
                            <img src={user_icon} />
                        </div>
                        <input type="text" name="register_name" id="register_name" placeholder="邮箱注册" autocomplete="off" autofocus
                            value={registername}
                            onChange={e => changeRegisterName(e)}
                        />
                    </div>

                    <div className="register-fields_password">
                        <div className="icon">
                            <img src={lock_icon} />
                        </div>
                        <input type="password" name="password" id="password" placeholder="密码" autocomplete="off"
                            value={resgisterpwd}
                            onChange={e => changeRegisterPwd(e)}
                        />
                    </div>

                    <div className="register-fields_password">
                        <div className="icon">
                            <img src={lock_icon} />
                        </div>
                        <input type="password" name="repassword" id="repassword" placeholder="确认密码" autocomplete="off"
                            value={repwd}
                            onChange={e => changeRePwd(e)}
                        />
                    </div>


                    <div className="register-fields_submit">
                        {registername ==  '' ? <input type="submit" value="注册" onClick={() => { alert('注册邮箱不能为空') }} />
                            :!email.test(registername) ? <input type="submit" value="注册" onClick={() => { alert('请输入正确的邮箱') }} />
                            :resgisterpwd == '' ? <input type="submit" value="注册" onClick={() => { alert('密码不能为空') }} />
                                :  resgisterpwd != repwd ? <input type="submit" value="注册" onClick={() => { alert('两次输入的密码不一样') }} />
                                    : <input type="submit" value="注册" onClick={()=>{handleResgister();changeregister()}} />}
                    </div>
                </div>
                <div className="register-disclaimer">
                    <Link to="/login" className="gotologin">
                        <span>登录 |</span>
                    </Link>

                    <Link to="/" className="goback">
                        <span>&nbsp;返回</span>
                    </Link>
                </div></>:<Loading />}
            </div>
        </div>
    )
}


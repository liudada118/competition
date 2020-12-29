import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './Login.css'
import user_icon from './img/user_icon_copy.png'
import lock_icon from './img/lock_icon_copy.png'
import key from './img/key.png';
import bg from './img/bg.jpg';
import { Link } from "react-router-dom"
import { axiosInstance } from '../../api/config'
import Loading from '../common/Loading/Loading';
export default function Login() {
    const [username, setuser] = useState('');
    const [password, setpwd] = useState('');
    const [login, setLogin] = useState(1)
    const [id, setId] = useState('')
    const [msg, setMsg] = useState('')
    const changeUsername = e => {
        setuser(e.target.value)
    }
    const changePwd = e => {
        setpwd(e.target.value)
    }
    useEffect(() => {
        setId(id)
    }, [])
    const handleSubmit = () => {
        setLogin(2)
        axiosInstance({
            method: 'POST',
            url: '/user/login',
            data: {
                'email': username,
                'password': password
            }
        })
            .then(function (response) {
                if (response.data.code === 605) {
                    setId(response.data.data.id)
                    setMsg(response.data.msg)
                    window.location.href = `#/presonalCenter/${response.data.data.id}`
                } else {
                    alert(response.data.msg)
                    window.location.reload()
                }
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    const onkeydown = (e) => {
        if (e.keyCode == 13) {
            handleSubmit();
        }
    }
    const onnookeydown = (e) => {
        if (e.keyCode == 13) {
            alert('用户名不能为空')
        }
    }
    const onnokeydown = (e) => {
        if (e.keyCode == 13) {
            alert('密码不能为空')
        }
    }
    let email = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/
    return (
        <div>
            <div className="bg">
                <img src={bg} />
            </div>
            <div className="header-title">
                第三届江西省高校网络安全技能大赛
            </div>
            <div className="login">
                {login == 1 ? <><div className="login_title">
                    <span>用户登录</span>
                </div>
                    <div className="login-fields">
                        <div className="login-fields_user">
                            <div className="icon">
                                <img src={user_icon} />
                            </div>
                            <input type="text" name="login_name" id="login_name" placeholder="账号"  
                                value={username}
                                onChange={e => changeUsername(e)}
                            />
                        </div>

                        <div className="login-fields_password">
                            <div className="icon">
                                <img src={lock_icon} />
                            </div>
                            <input type="password" name="password" id="password" placeholder="密码"
                                value={password}
                                onChange={e => changePwd(e)} />
                        </div>
                        <div className="login-fields_submit">
                            {username == '' ? <input type="submit" value="登录" 
                                onClick={() => { alert('账号不能为空') }}

                            />
                                : !email.test(username) ? <input type="submit" value="登录" 
                                  
                                    onClick={() => { alert('账号为邮箱，格式错误') }}

                            
                                />
                                    : password == ''
                                        ? <input type="submit" value="登录" onClick={() => { alert('密码不能为空') }}
                                     
                                        />
                                        : < input type="submit" value="登录"
                                            onClick={() => {
                                                handleSubmit();
                                              
                                            }}
                                       
                                        />}
                        </div>
                    </div>
                    <div className="disclaimer">

                        {/* <a href="#">忘记密码？</a>||
                    <a href="../index/index.html">返回</a> */}
                        <Link to="/register" className="findpwd">
                            <span>注册  </span>
                        </Link>

                        <Link to="/" className="goback">
                            <span>返回</span>
                        </Link>
                    </div></> :
                   
                    <Loading />
                }
            </div>
        </div>
    )
}


// class Login extends Component {
//     state = {  }
//     render() { 
//         return (  );
//     }
// }

// export default Login;

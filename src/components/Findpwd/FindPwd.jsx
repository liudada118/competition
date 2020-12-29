import React, { useState } from 'react'
import Top from '../common/Top/Top'
import './index.css'
import 'antd/dist/antd.css'
import { Row, Col } from 'antd';
import pass from '../../assets/img/yes.png'
import bg from '../../assets/img/bg.png'
import { Link } from 'react-router-dom';
import loading from '../../assets/img/loading.gif'
import Loading from '../common/Loading/Loading';
export default function FindPwd() {
    const [steps, setStep] = useState(['第一步:输入账号', '第二步：输入短信验证码', '第三步：设置新密码', '第四步：密码重置完成'])
    const [stepDisplay, setStepDisplay] = useState(0)
    const [findVerification, setFindVerification] = useState('')
    const [findSMS, setFindSMS] = useState('')
    const [findMailbox, setFindMailbox] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [loading , useLoading] = useState('')
    const changeNewPassword = (e) => {
        setNewPassword(e.target.value)
    }
    const changeConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
    }
    const changeSMS = (e) => {
        setFindSMS(e.target.value)
    }
    const changeMailbox = (e) => {
        setFindMailbox(e.target.value)
    }
    const changeVerification = (e) => {
        setFindVerification(e.target.value)
    }
    const changeStepDisplay = (e) => {
        setStepDisplay(e)
    }
    let email = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/
    return (
        <div className="findPwd-content">
            <div className="findPwd-content_bg">
                <img src={bg} alt=""/>
            </div>
            <Top />
            
            <div className="findPwd-content-info">
                <div className="findPwd-content_name">找回密码</div>
                <div className="findPwd-content_keys">
                    {steps.map((step, i) => {
                        return (<div onClick={stepDisplay > i ? () => { changeStepDisplay(i) } : null} className={i == stepDisplay ? 'findPwd-content_key findPwd-content_highLight' : 'findPwd-content_key'} key={i} >{step}</div>)
                    })}
                </div>
                {stepDisplay == 0
                    ? <div className="findPwd-content_stepContent">
                        <div className="findPwd-text stepContent_MailboxLable">
                            <label htmlFor="findPwd-Mailbox">请输入要重置密码的邮箱账号</label>
                        </div>
                        <div className="findPwd-text stepContent_MailboxInput">
                            <input placeholder='请输入您的邮箱' value={findMailbox} onChange={(e) => { changeMailbox(e) }} type="text" name="findPwd-Mailbox" id="findPwd-Mailbox" />
                        </div>
                        <div className="findPwd-text stepContent_verification">
                            <input placeholder='请输入验证码' value={findVerification} onChange={(e) => { changeVerification(e) }} type="text" name="findPwd-verification" id="findPwd-verification" />
                            <div className="findPwd-validation">
                            <a href="">
                                <img src="http://192.168.1.103/user/createValicode" alt="图片加载失败" title="点击刷新" />
                            </a>
                        </div>
                        </div>
                        {!email.test(findMailbox)
                            ? <div className='failSubmit findPwd-text stepContent_button' onClick={() => { alert('邮箱不能为空') }}>下一步</div>
                            : findVerification == '' ? <div onClick={() => { alert('请填写验证码') }} className='failSubmit findPwd-text stepContent_button'>
                                <div>下一步</div>
                            </div> : <div onClick={() => { changeStepDisplay(1) }} className='failSubmit findPwd-text stepContent_button'>
                                    <div>下一步</div>
                                </div>}
                    </div> : stepDisplay == 1 ? <div className=" findPwd-content_stepContent">
                        <div className="findPwd-text stepContent_MailboxLable">
                            <label htmlFor="findPwd-SMS">请输入邮箱验证码</label>
                        </div>
                        <div className="findPwd-text stepContent_SMSInput">
                            <input value={findSMS} onChange={(e) => { changeSMS(e) }} type="text" name="findPwd-SMS" id="findPwd-SMS" />
                        </div>
                        {findSMS == '' ? <div onClick={() => { alert('请填写邮箱验证码') }} className='failSubmit findPwd-text stepContent_button'>
                            <div>下一步</div>
                        </div> : <div onClick={() => { changeStepDisplay(2) }} className='failSubmit findPwd-text stepContent_button'>
                                <div>下一步</div>
                            </div>}
                    </div> : stepDisplay == 2 ?
                            <div className="findPwd-content_stepContent">
                                <div className="findPwd-text stepContent_MailboxLable">
                                    <label htmlFor="findPwd-Mailbox">请输入您的新密码</label>
                                </div>
                                <div className="findPwd-text stepContent_MailboxInput">
                                    <input placeholder='请输入您的密码' value={newPassword} onChange={(e) => { changeNewPassword(e) }} type="password" name="findPwd-Mailbox" id="findPwd-Mailbox" />
                                </div>
                                <div className="findPwd-text stepContent_verification">
                                    <input placeholder='请确认您的新密码' value={confirmPassword} onChange={(e) => { changeConfirmPassword(e) }} type="password" name="findPwd-verification" id="findPwd-verification" />
                                </div>
                                {newPassword == ''
                                    ? <div className='failSubmit findPwd-text stepContent_button' onClick={() => { alert('请输入密码') }}>下一步</div>
                                    : newPassword != confirmPassword ? <div onClick={() => { alert('两次密码不一样') }} className='failSubmit findPwd-text stepContent_button'>
                                        <div>下一步</div>
                                    </div> : <div onClick={() => { changeStepDisplay(3) }} className='failSubmit findPwd-text stepContent_button'>
                                            <div>下一步</div>
                                        </div>}
                            </div> : 
                            <div className="findPwd-content_stepContent">
                               {loading==''?<Loading /> :  <><div className="passImg">
                                    <img src={pass} alt="" />
                                </div>
                                <p className='pass-changepsd'>修改密码成功</p>
                                <Link to='/login'> <div className="comeLogin">返回登录页</div></Link></>}
                            </div>}
            </div>
        </div>
    )
}

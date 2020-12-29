import React, { useState } from 'react';
import 'antd/dist/antd.css'
import { Row, Col } from 'antd';
import './index.css'
import { axiosInstance } from '../../../api/config';
import axios from 'axios'
export default function PersonSetting(props) {
    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const changeOldPassword = (e) => {
        setOldPassword(e.target.value)
    }
    const changeNewPassword = (e) => {
        setNewPassword(e.target.value)
    }
    const changeConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
    }
    const handleChangepwd = () => {
        axiosInstance({
            method: 'POST',
            url: '/user/updateUserPwd ',
            data: {
                'id': props.id,
                'newPassword': newPassword,
                'confirmpwd': confirmPassword

            }
        })
            .then(function (response) {
                if (response.data.code === 200) {
                    alert(response.data.msg)
                } else {
                    alert(response.data.msg)
                }
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    return (
        <>
            <div className="person-setting_tile"><h2>修改密码</h2></div>
            <div>
               
                <div className="person-setting_key person-content_key">
                    <Row >
                        <Col span={8}><label htmlFor='newPassword'>新密码</label></Col>
                        <Col span={16}><input onChange={changeNewPassword} value={newPassword} type="password" name="newPassword" id="newPassword" /></Col>
                    </Row>
                </div>
                <div className="person-setting_key person-content_key">
                    <Row >
                        <Col span={8}><label htmlFor='confirmPassword'>确认密码</label></Col>
                        <Col span={16}><input onChange={changeConfirmPassword} value={confirmPassword} type="password" name="confirmPassword" id="confirmPassword" /></Col>
                    </Row>
                </div>
                <div className="preson-setting_sub">
                    {newPassword != confirmPassword
                        ? <div className='failSubmit' onClick={() => { alert('两次输入的密码不一样') }}>保存</div>
                        :
                        newPassword == ''
                            ? <div className='failSubmit' onClick={() => { alert('请输入新密码') }}>保存</div>
                            : confirmPassword == ''
                                ? <div className='failSubmit' onClick={() => { alert('请再次输入新密码') }}>保存</div>
                                : <button className='failSubmit' onClick={() => { handleChangepwd(); }} type="submit" value=''>保存</button>}</div>
            </div>
        </>
    );
}

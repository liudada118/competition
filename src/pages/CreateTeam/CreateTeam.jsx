import React from 'react'
import 'antd/dist/antd.css'
import { Row, Col } from 'antd';
import './index.css'
import { useState } from 'react';
// import PersonalTop from './PersonalTop/PersonalTop';
// import PersonSetting from './PersonSetting/PersonSetting';
import bgi from '../../assets/img/bg.jpg'
export default function PersonalCenter() {
    const [content, setContent] = useState([
        {
            key: 'schoolName',
            type: '学校名称',
            content: '东华理工'
        },
        {
            key: 'professionalName',
            type: '团队名称',
            content: '软件工程'
        },
        {
            key: 'Name',
            type: '姓名',
            content: '刘达',
        },
        {
            key: 'phone',
            type: '手机号',
            content: '18577',
        },
        {
            key: 'idNumber',
            type: '身份证号码',
            content: '152462666',
        }])
    const [schoolName, setSchoolName] = useState([
        '江西水利职业学院'
        , '南昌工学院'
        , '江西应用技术职业学院'
        , '江西航空职业技术学院'
        , '南昌理工学院'
        , '吉安职业技术学院'
        , '江西农业大学信息中心'
        , '井冈山大学'
        , '江西农业工程职业学院'
        , '赣南医学院'
        , '新余学院'
        , '共青科技职业学院'
        , '宜春幼儿师范高等专科学校'
        , '华东交通大学'
        , '南昌师范学院'
        , '江西生物科技职业学院'
        , '江西医学高等专科学校'
        , '江西机电职业技术学院'
        , '江西师范高等专科学校'
        , '上饶职业技术学院'
        , '赣州师范高等专科学校'
        , '江西应用工程职业学院'
        , '江西旅游商贸职业学院'
        , '抚州职业技术学院'
        , '上饶师范学院'
        , '宜春职业技术学院'
        , '南昌航空大学'
        , '南昌职业学院'
        , '江西泰豪动漫职业学院'
        , '南昌工程学院'
        , '东华理工大学'
        , '赣西科技职业学院'
        , '江西新能源科技职业学院'
        , '南昌大学'
        , '江西司法警官职业学院'
        , '江西应用科技学院'
        , '江西工业贸易职业技术学院'
        , '江西师范大学'
        , '九江职业技术学院'
        , '景德镇陶瓷大学'
        , '赣南卫生健康职业学院'
        , '江西建设职业技术学院'
        , '江西财经大学'])
    const [presonOrSetting, setPresonOrSetting] = useState(true)
    const [changeInfo, setChangeInfo] = useState(false)
    const [schoolNameValue, setSchoolNameValue] = useState('')
    const [nameValue, setNameValue] = useState('')
    const [professionaNamelValue, setProfessionalNameValue] = useState('')
    const [phoneValue, setPhoneValue] = useState('')
    const [idNumberValue, setIdNumberValue] = useState('')
    const changeInfoTrue = () => {
        setChangeInfo(true)
    }
    const changeInfoFalse = () => {
        setChangeInfo(false)
    }
    const displayPreson = () => {
        setPresonOrSetting(true)
    }
    const displaySetting = () => {
        setPresonOrSetting(false)
    }
    const changePhoneValue = (e) => {
        setPhoneValue(e.target.value)
    }
    const changeNameValue = (e) => {
        setNameValue(e.target.value)
    }
    const changeSchoolNameValue = (e) => {
        setSchoolNameValue(e.target.value)
    }
    const changeIdNumberValue = (e) => {
        setIdNumberValue(e.target.value)
    }
    const changeProfessionalNameValue = (e) => {
        setProfessionalNameValue(e.target.value)
    }
    const changeAllInput = () => {
        setIdNumberValue('')
        setProfessionalNameValue('')
        setSchoolNameValue('')
        setNameValue('')
        setPhoneValue('')
    }
    return (
        <div className='createTeam' >
            <div className="createTeam-bg">
                <img src={bgi} alt="" />
            </div>
            {/* <PersonalTop displayPreson={displayPreson} displaySetting={displaySetting} /> */}
            {presonOrSetting
                ? <div className='createTeam-content'>
                    <div className="createTeam-content_top createTeam-content_text">
                        <div className="createTeam-content_title"><h2>创建队伍</h2></div>
                    </div>
                    {   
                        <form action="">
                            <div className="createTeam-content_key">
                            <Row>
                                <Col span={8}><label >队伍类型</label></Col>
                                <Col span={16}>
                                    <div className='createTeam-content_schoolRadio'>
                                    <input type="radio" checked id='school' name='typeSelete' /><label htmlFor="school">本科</label></div>
                                    <div className='createTeam-content_untiRadio'>
                                    <input type="radio" id='unit' name='typeSelete' /><label htmlFor="unit">高职</label></div>
                                </Col>
                            </Row></div>
                            {content.map((title, i) => {
                                return (
                                    <div className={`createTeam-content_key createTeam-content_${title.key}`} key={i}>

                                        <Row>
                                            <Col span={8}><label htmlFor={title.key}>{title.type}</label></Col>
                                            <Col span={16}>{title.key == 'schoolName'
                                                ?
                                                <div>
                                                    <input id={title.key} value={schoolNameValue} onChange={changeSchoolNameValue} name="schoolName" list="schools" />
                                                    <datalist id="schools">
                                                        {schoolName.map((name, i) => {
                                                            return (
                                                                <option key={i} value={name}>{name}</option>
                                                            )
                                                        })}
                                                    </datalist>
                                                </div>
                                                :<input value={i == 1 ? professionaNamelValue : i == 2 ? nameValue : i == 3 ? phoneValue : i == 4 ? idNumberValue : null} onChange={i == 1 ? changeProfessionalNameValue : i == 2 ? changeNameValue : i == 3 ? changePhoneValue : i == 4 ? changeIdNumberValue : null} type={i == 3 || i == 4 ? 'number' : 'text'} id={title.key} name={title.key} />}</Col>
                                        </Row>
                                    </div>
                                )
                            })}
                            <div className="createTeam-content_protocol">
                                <input type="radio" id='protocol' name='protocolSelete'/> <label htmlFor="protocol">我同意</label>
                            </div>
                            <div className="createTeam-content_button">
                                {professionaNamelValue == ''
                                    ? <div className='failSubmit' onClick={() => { alert('非法的专业名称') }}>确认创建</div>
                                    : schoolNameValue == '' || !schoolName.includes(schoolNameValue)
                                        ? <div className='failSubmit' onClick={() => { alert('非法的学校名称') }}>确认创建</div>
                                        : nameValue == ''
                                            ? <div className='failSubmit' onClick={() => { alert('非法的名字') }}>确认创建</div>
                                            : phoneValue == '' || phoneValue.length != 11
                                                ? <div className='failSubmit' onClick={() => { alert('非法的手机号码') }}>确认创建</div>
                                                : idNumberValue == '' || idNumberValue.length != 18
                                                    ? <div className='failSubmit' onClick={() => { alert('非法的身份证') }}>确认创建</div>
                                                    : <button className='createTeam-content_subBotton' type="submit" value=''>确认创建</button>}
                            </div>
                        </form>
                    }
                </div> : <div className='createTeam-content'>
                </div>}
        </div>
    )
} 
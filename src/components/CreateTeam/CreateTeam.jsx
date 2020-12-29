import React, { useEffect } from 'react'
import 'antd/dist/antd.css'
import { Row, Col } from 'antd';
import './index.css'
import { useState } from 'react';
import axios from 'axios'
// import PersonalTop from './PersonalTop/PersonalTop';
// import PersonSetting from './PersonSetting/PersonSetting';
import bgi from '../../assets/img3/bg.png'
import Top from '../common/Top/Top';
import { axiosInstance } from '../../api/config';
import { Link } from 'react-router-dom';
import Loading from '../common/Loading/Loading';
// let a = 1
// let arr = [1]
export default function PersonalCenter(props) {
    // console.log('11111111111111111',props)
    useEffect(() => {
        axiosInstance.post('/dictionary/getAllUniversityName')
            .then(res => {
                setSchoolName(res.data.data)
            })
    }, [])
    const [schoolNameList, setschoolNameList] = useState([])

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
            type: '队长姓名',
            content: '刘达',
        },
        {
            key: 'phone',
            type: '队长手机号',
            content: '18577',
        },
        {
            key: 'idNumber',
            type: '队长身份证号码',
            content: '152462666',
        }])
    const [schoolName, setSchoolName] = useState([])
    const [presonOrSetting, setPresonOrSetting] = useState(true)
    const [changeInfo, setChangeInfo] = useState(false)
    const [schoolNameValue, setSchoolNameValue] = useState('')
    const [nameValue, setNameValue] = useState('')
    const [professionaNamelValue, setProfessionalNameValue] = useState('')
    const [phoneValue, setPhoneValue] = useState('')
    const [idNumberValue, setIdNumberValue] = useState('')
    const [teacherNameValue, setTeacherNameValue] = useState('')
    const [teacherIdValue, setTeacherIdValue] = useState('')
    const [teacherMailboxlValue, setTeacherMailValue] = useState('')
    const [teacherPhoneValue, setTeacherPhoneValue] = useState('')
    const [teacherSchoolValue, setTeacherSchoolValue] = useState('')
    const [schoolRadio, setSchoolRadio] = useState('本科')
    const [protocol, setProtocol] = useState(false)
    const [agree, setAgree] = useState('')
    const [teacherN, setTeacherN] = useState(1)
    const [teacherNumber, setTeacherNumber] = useState([1])
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
    const handleCreateTeam = () => {
        axiosInstance({
            method: 'POST',
            url: '/user/createteaminfo',
            data: {
                'captainpid': props.match.params.id,
                'teamtype': schoolRadio,
                'team': professionaNamelValue,
                'captain': nameValue,
                'identitycard': idNumberValue,
                'telphone': phoneValue,
                'university': schoolNameValue
            }
        })
            .then(function (response) {
                if (response.data.code == 200) {
                    alert(response.data.msg)
                    window.location.href = `#/presonalCenter/${props.match.params.id}`
                } else {
                    alert(response.data.msg)
                    setProfessionalNameValue('')
                }

            })
            .catch(function (error) {
                console.log(error)
            })
    }


    const changeTeacherNameValue = (e) => {
        setTeacherNameValue(e.target.value)
    }
    const changeTeacherIdValue = (e) => {
        setTeacherIdValue(e.target.value)
    }
    const changeTeacherMailboxlValue = (e) => {
        setTeacherMailValue(e.target.value)
    }
    const changeTeacherPhoneValue = (e) => {
        setTeacherPhoneValue(e.target.value)
    }
    const changeTeacherSchoolValue = (e) => {
        setTeacherSchoolValue(e.target.value)
    }

    const changeAllInput = () => {
        setIdNumberValue('')
        setProfessionalNameValue('')
        setSchoolNameValue('')
        setNameValue('')
        setPhoneValue('')
        setTeacherNameValue('')
        setTeacherSchoolValue('')
        setTeacherMailValue('')
        setTeacherIdValue('')
        setTeacherPhoneValue('')
    }
    const changeTeacher = () => {
        // a += 1
        let n = teacherN
        n += 1
        let arr = [...teacherNumber]
        arr.push(n)
        setTeacherN(n)
        setTeacherNumber(arr)
    }
    const teacherDel = (b) => {
        let arr = [...teacherNumber]
        let c = arr.indexOf(b)
        arr.splice(c, 1)
        setTeacherNumber(arr)
    }
    const changeSchoolRadio = (e) => {
        setSchoolRadio(e.target.value);
    }
    let email = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/
    let scarr = []
    if (schoolName.length > 0) {

        schoolName.forEach((a) => {
            scarr.push(a.name)
        })
    }
    let idCard = /^(\d{18}|\d{17}\w{1})$/
    return (
        <div className='createTeam' >
            <div className="createTeam-bg">
                <img src={bgi} alt="" />
            </div>
            <Top id={props.match.params.id} person={'1'} />
            <div className="createTeam-content_bigTitle">创建队伍</div>

            <div className='createTeam-content_form' >

                {<div className='createTeam-content'>
                    <div className="createTeam-content_top createTeam-content_text">
                        <div className="createTeam-content_title"><h2>{'>> 基本信息'}</h2></div>
                        <Link to={`/presonalCenter/${props.match.params.id}`}><div className="person-content_edit">返回</div></Link>
                    </div>
                    {schoolName.length == 0 ? <Loading /> : <><div className="createTeam-content_key">
                        <Row>
                            <Col span={8}><label >队伍类型</label></Col>
                            <Col span={16}>
                                <div className='createTeam-content_schoolRadio'>
                                    <input type="radio" value='本科' checked={schoolRadio == '本科'} onClick={changeSchoolRadio} id='school' name='typeSelete' /><label htmlFor="school">本科</label></div>
                                <div className='createTeam-content_schoolRadio'>
                                    <input type="radio" value='高职'
                                        checked={schoolRadio == '高职'}
                                        onClick={changeSchoolRadio} id='vocationalColleges' name='typeSelete' /><label htmlFor="vocationalColleges">高职</label></div>
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
                                                    {schoolName.length > 0 ? schoolName.map((name, i) => {
                                                        return (
                                                            <option key={i} value={name.name}>{name.name}</option>
                                                        )
                                                    }) : null}
                                                </datalist>
                                            </div>
                                            : <input value={i == 1 ? professionaNamelValue : i == 2 ? nameValue : i == 3 ? phoneValue : i == 4 ? idNumberValue : null} onChange={i == 1 ? changeProfessionalNameValue : i == 2 ? changeNameValue : i == 3 ? changePhoneValue : i == 4 ? changeIdNumberValue : null} type={i == 3 ? 'number' : 'text'} id={title.key} name={title.key} />}</Col>
                                    </Row>
                                </div>
                            )
                        })}</>}
                    <div className="createTeam-content_button">
                        {professionaNamelValue == ''
                            ? <div className='failSubmit' onClick={() => { alert('团队名称不能为空') }}>确认创建</div>
                            : schoolNameValue == ''
                                ? <div className='failSubmit' onClick={() => { alert('学校名称不能为空') }}>确认创建</div>
                                : !scarr.includes(schoolNameValue)
                                    ? <div className='failSubmit' onClick={() => { alert('请按照提示填写学校') }}>确认创建</div>
                                    : nameValue == ''
                                        ? <div className='failSubmit' onClick={() => { alert('队长名字不能为空') }}>确认创建</div>
                                        : phoneValue == ''
                                            ? <div className='failSubmit' onClick={() => { alert('手机号码不能为空') }}>确认创建</div>
                                            : phoneValue.length != 11
                                                ? <div className='failSubmit' onClick={() => { alert('手机号码格式错误') }}>确认创建</div>
                                                : idNumberValue == ''
                                                    ? <div className='failSubmit' onClick={() => { alert('身份证不能为空') }}>确认创建</div>
                                                    : !idCard.test(idNumberValue)
                                                        ? <div className='failSubmit' onClick={() => { alert('身份证格式错误') }}>确认创建</div>
                                                        : <button className='failSubmit' onClick={handleCreateTeam} type="submit" value=''>确认创建</button>}
                    </div>
                </div>}
            </div>
        </div>
    )
} 
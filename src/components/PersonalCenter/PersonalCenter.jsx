import React, { useEffect } from 'react'
import 'antd/dist/antd.css'
import { Row, Col, Popconfirm, message } from 'antd';
import './index.css'
import { useState } from 'react';
import PersonalTop from './PersonalTop/PersonalTop';
import PersonSetting from './PersonSetting/PersonSetting';
import bgi from '../../assets/img3/bg.png'
import Top from '../common/Top/Top';
import axios from 'axios'
import Loading from '../common/Loading/Loading';
import { axiosInstance } from '../../api/config'
import Team from '../Team/Team';
import Sign from './Sign/Sign';
export default function PersonalCenter(props) {
    const [user, setUser] = useState('')
    const [team, setTeam] = useState('')
    const { id } = props.match.params
    useEffect(() => {
        axiosInstance.get(`/user/queryMemberInfo?id=${id}`)
            .then(res => {
                setUser(res.data.data)
                setIdNumberValue(res.data.data.identitycard)
                setProfessionalNameValue(res.data.data.major)
                setSchoolNameValue(res.data.data.university)
                setNameValue(res.data.data.realname)
                setPhoneValue(res.data.data.tephone)
            })
        axiosInstance.post('/dictionary/getAllUniversityName')
            .then(res => {

            }

            )
    }, [])

    // user.university major realname tephone identitycard 
    useEffect(() => {
        axiosInstance.get(`/user/queryMemberInfo?id=${id}`)
            .then(res => {
                setTeam(res.data.data)
                if (res.data.data.teams != null) {
                    setteamLength(res.data.data.teams.length)
                }
            })
    }, [])
    const [memberyes, setmemberyes] = useState(0)
    const [memberN, setMemberN] = useState(1)
    const [memberNO, setmemberNo] = useState(-1)
    const [memberNumber, setMemberNumber] = useState([])
    const [memberList, setMemberList] = useState([
        {
            number: 0,
            info: [{
                type: 'text',
                value: '',
                name: '单位',
                key: 'unit',
                id: 'memberSchool0'
            }, {
                type: 'text',
                value: '',
                name: '姓名',
                key: 'username',
                id: 'memberName0'
            }, {
                type: 'text',
                value: '',
                name: '邮箱',
                key: 'email',
                id: 'memberMailbox0'
            }, {
                type: 'number',
                value: '',
                name: '手机',
                key: 'telphone',
                id: 'memberPhone0'
            }, {
                type: 'text',
                value: '',
                name: '身份证',
                key: 'identitycard',
                id: 'memberId0'
            },]
        }, {
            number: 1,
            info: [{
                type: 'text',
                value: '',
                name: '单位',
                key: 'unit',
                id: 'memberSchool1'
            }, {
                type: 'text',
                value: '',
                name: '姓名',
                key: 'username',
                id: 'memberName1'
            }, {
                type: 'text',
                value: '',
                name: '邮箱',
                key: 'email',
                id: 'memberMailbox1'
            }, {
                type: 'number',
                value: '',
                name: '手机',
                key: 'telphone',
                id: 'memberPhone1'
            }, {
                type: 'text',
                value: '',
                name: '身份证',
                key: 'identitycard',
                id: 'memberId1'
            }],
        }, {
            number: 2,
            info: [{
                type: 'text',
                value: '',
                name: '单位',
                key: 'unit',
                id: 'memberSchool2'
            }, {
                type: 'text',
                value: '',
                name: '姓名',
                key: 'username',
                id: 'memberName2'
            }, {
                type: 'text',
                value: '',
                name: '邮箱',
                key: 'email',
                id: 'memberMailbox2'
            }, {
                type: 'number',
                value: '',
                name: '手机',
                key: 'telphone',
                id: 'memberPhone2'
            }, {
                type: 'text',
                value: '',
                name: '身份证',
                key: 'identitycard',
                id: 'memberId2'
            }],
        }, {
            number: 3,
            info: [{
                type: 'text',
                value: '',
                name: '单位',
                key: 'unit',
                id: 'memberSchool3'
            }, {
                type: 'text',
                value: '',
                name: '姓名',
                key: 'username',
                id: 'memberName3'
            }, {
                type: 'text',
                value: '',
                name: '邮箱',
                key: 'email',
                id: 'memberMailbox3'
            }, {
                type: 'number',
                value: '',
                name: '手机',
                key: 'telphone',
                id: 'memberPhone3'
            }, {
                type: 'text',
                value: '',
                name: '身份证',
                key: 'identitycard',
                id: 'memberId3'
            }]
        }])
    const [content, setContent] = useState([
        {
            key: 'schoolName',
            type: '学校名称',
            content: '东华理工'
        },
        {
            key: 'professionalName',
            type: '专业名称',
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
        }, {
            key: 'mailbox',
            type: '邮箱',
            content: '@152462666',
        }])
    const [schoolName, setSchoolName] = useState([])
    useEffect(() => {
        axiosInstance.post('/dictionary/getAllUniversityName')
            .then(res => {
                setSchoolName(res.data.data)
            })
    }, [])
    const [presonOrSetting, setPresonOrSetting] = useState(1)
    const [changeInfo, setChangeInfo] = useState(false)
    const [schoolNameValue, setSchoolNameValue] = useState('')
    const [nameValue, setNameValue] = useState('')
    const [professionaNamelValue, setProfessionalNameValue] = useState('')
    const [phoneValue, setPhoneValue] = useState('')
    const [idNumberValue, setIdNumberValue] = useState('')
    const [month,setmonth] = useState('')
    // let arr5 = [...memberList]
    // let arr6 = arr5.slice(0, memberNumber.length)
    useEffect(() => {
        let arr6 = [...array]
        let arr8 = []
        arr6.map((a) => { a.info.map((b) => { arr8.push(b) }) })
        let arr9 = arr8.filter((a) => a.value == '')
        setmemberyes(arr9.length)
    }, [])
    const changeInfoTrue = () => {
        setChangeInfo(true)
    }
    const changeInfoFalse = () => {
        setChangeInfo(false)
    }
    const displayPreson = () => {
        setPresonOrSetting(1)
    }
    const displayTeam = () => {
        setPresonOrSetting(2)
    }
    const displaySetting = () => {
        setPresonOrSetting(3)
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
        // alert('aaaaaa')
    }
    const changeAllInput = () => {
        setIdNumberValue('')
        setProfessionalNameValue('')
        setSchoolNameValue('')
        setNameValue('')
        setPhoneValue('')
    }
    const memberAdd = () => {
        // a += 1
        let arr6 = [...array]
        let n = memberN
        n = 1
        let arr = [...memberNumber]
        arr.push(n)
        setMemberN(n)
        setMemberNumber(arr)
        let arr5 = [...memberList]
        let b = []
        if (arr6.length > 0) {
            for (let i = 0; i < arr6.length; i++) {
                b.push(arr6[i].number)
            }
            for (let i = 0; i < arr5.length; i++) {
                if (b.includes(arr5[i].number)) {  continue }
                else {
                    arr6.push(arr5[i])
                    break
                }
            }
        } else {
            arr6.push(arr5[0])
        }
        // arr6 = arr5.slice(0, arr.length)
        setArray(arr6)

    }
    const memberDel = (b) => {
        // let arr = [...memberNumber]
        // let c = arr.indexOf(b)
        // arr.splice(c, 1)
        // setMemberNumber(arr)

        let Lists = memberList
        let list = Lists.filter(a => a.number == b)

        list[0].info.map((c) => {
            c.value = ''
        })
        // setmemberNo(b)
        setMemberList(Lists)

        let arr6 = [...array]
        // let c = arr6.indexOf(list)
        let c
        for (let i = 0; i < arr6.length; i++) {
            if (arr6[i].number == list[0].number) {
                c = i
                break
            }
        }
        arr6.splice(c, 1)
        setArray(arr6)
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
    const handeleChangeMember = () => {
        axiosInstance({
            method: 'POST',
            url: '/user/createTeamMember',
            data: {
                'member': array,
                "id": id
            }
        })
            .then(function (response) {
                if (response.data.code === 602) {
                    alert(response.data.msg)
                    window.location.href = `/#/presonalCenter/${id}`
                }
            })
            .catch(function (error) {
                console.log(error)
            })
    }
    const [teacherNameValue, setTeacherNameValue] = useState('')
    const [teacherIdValue, setTeacherIdValue] = useState('')
    const [teacherMailboxlValue, setTeacherMailValue] = useState('')
    const [teacherPhoneValue, setTeacherPhoneValue] = useState('')
    const [teacherSchoolValue, setTeacherSchoolValue] = useState('')
    let email = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/
    const [array, setArray] = useState([])
    const handelChange = event => {
        let e = event.target;
        const List = [...memberList];
        List.map((items, index) => {
            items.info.map((item, i) => {
                if (item.id === e.id) {
                    item.value = e.value;
                }
            })


        });
        setMemberList(List)
        // setArray(arr6)
    };
    // const [date , setDate] = useState('')
    // useEffect(()=>{
    //     let a = new Date()
    //     setDate(a)
    // })
    
    const handleSaveInfo = () => {
        axiosInstance({
            method: 'POST',
            url: '/user/updateMemberInfo',
            data: {
                "university": schoolNameValue,
                "major": professionaNamelValue,
                "tephone": phoneValue,
                "identitycard": idNumberValue,
                "realname": nameValue,
                "id": id
            }
        })
            .then(function (response) {
                if (response.data.code === 200) {
                    alert(response.data.msg)
                    window.location.reload()
                }
            })
            .catch(function (error) {
                console.log(error)
            })

    }
    
    const [sign, setSign] = useState(false)
    const changeSignDisplay = () => {
        setSign(true)
    }
    const changeSignNo = () => {
        setSign(false)
    }
    const [date , setDate] = useState('')
        useEffect(()=>{
            let a = JSON.stringify(new Date())
            let b  = a.split('-')
            let c = b[2].split('T')
            setDate(parseInt(c[0]))
        },[])
    const [teamLength, setteamLength] = useState('')
    let idCard = /^(\d{18}|\d{17}\w{1})$/
    let scarr = []
    if (schoolName.length > 0) {

        schoolName.forEach((a) => {
            scarr.push(a.name)
        })

    }
    return (
        <div className='personal' >
            <div className="personal-bg">
                <img src={bgi} alt="" />
            </div>
            <Top person={'1'} id={id} />
            {sign ? <Sign displayTeam={displayTeam} id={id} changeSignNo={changeSignNo} /> : null}
            <PersonalTop team={team} teams={teamLength} id={id} displayPreson={displayPreson} displayTeam={displayTeam} displaySetting={displaySetting} setPresonOrSetting={setPresonOrSetting} />
            {presonOrSetting == 1
                ?//  个人中心
                <>
                    {!changeInfo ? //  基本信息
                        <div className='person-content'>
                            <div className="person-content_top person-content_text">
                                <div className="person-content_title"><h2>{'>> 基本信息'}</h2></div>
                                {month!=''&&month>7&& date!=''&&date>20?null :date!=''&&date>15?null :changeInfo  ? null:<div className="person-content_edit" onClick={changeInfoTrue}>编辑</div>}
                            </div>
                            {user == '' ? <Loading /> : <><div className={`person-content_key person-content_text  person-content_school`} >
                                <Row>
                                    <Col span={6}></Col>
                                    <Col span={6}>学校名称</Col>
                                    <Col span={6}>{user.university}</Col>
                                    <Col span={6}></Col>
                                </Row>
                            </div>

                                <div className={`person-content_key person-content_text  person-content_school`} >
                                    <Row>
                                        <Col span={6}></Col>
                                        <Col span={6}>专业名称:</Col>
                                        <Col span={6}>{user.major}</Col>
                                        <Col span={6}></Col>
                                    </Row>
                                </div>
                                <div className={`person-content_key person-content_text  person-content_school`} >
                                    <Row>
                                        <Col span={6}></Col>
                                        <Col span={6}>姓名:</Col>
                                        <Col span={6}>{user.realname}</Col>
                                        <Col span={6}></Col>
                                    </Row>
                                </div>
                                <div className={`person-content_key person-content_text  person-content_school`} >
                                    <Row>
                                        <Col span={6}></Col>
                                        <Col span={6}>手机号:</Col>
                                        <Col span={6}>{user.tephone}</Col>
                                        <Col span={6}></Col>
                                    </Row>
                                </div>
                                <div className={`person-content_key person-content_text  person-content_school`} >
                                    <Row>
                                        <Col span={6}></Col>
                                        <Col span={6}>身份证号码:</Col>
                                        <Col span={6}>{user.identitycard}</Col>
                                        <Col span={6}></Col>
                                    </Row>
                                </div>
                                <div className={`person-content_key person-content_text  person-content_school`} >
                                    <Row>
                                        <Col span={6}></Col>
                                        <Col span={6}>邮箱:</Col>
                                        <Col span={6}>{user.email}</Col>
                                        <Col span={6}></Col>
                                    </Row>
                                </div>
                            </>}

                        </div>
                        :
                        <>
                            < div className='person-content'>
                                <div className="person-content_top person-content_text">
                                    <div className="person-content_title"><h2>{'>> 基本信息'}</h2></div>
                                    {changeInfo ? null : <div className="person-content_edit" onClick={changeInfoTrue}>编辑</div>}
                                </div>
                                {schoolName.length == 0 ? <Loading /> :content.map((title, i) => {
                                    return (
                                        <div className={`person-content_key person-content_${title.key}`} key={i}>
                                            <Row>
                                                <Col span={8}><label htmlFor={title.key}>{title.type}</label></Col>
                                                <Col span={16}>{title.key == 'schoolName'
                                                    ?
                                                    <div>
                                                        <input id={title.key} value={schoolNameValue} onChange={changeSchoolNameValue} name="schoolName" list="school" />
                                                        <datalist id="school">
                                                            {schoolName.length > 0 ? schoolName.map((name, i) => {
                                                                return (
                                                                    <option key={i} value={name.name}>{name.name}</option>
                                                                )
                                                            }) : null}
                                                        </datalist>
                                                    </div>
                                                    : title.key == 'mailbox' ? user.email : <input value={i == 1 ? professionaNamelValue : i == 2 ? nameValue : i == 3 ? phoneValue : i == 4 ? idNumberValue : null} onChange={i == 1 ? changeProfessionalNameValue : i == 2 ? changeNameValue : i == 3 ? changePhoneValue : i == 4 ? changeIdNumberValue : null} type={i == 3 ? 'number' : 'text'} id={title.key} name={title.key} />}</Col>
                                            </Row>
                                        </div>
                                    )
                                })}
                            
                                <div className="person-content_button">
                                    {professionaNamelValue == '' || professionaNamelValue == null
                                        ? <div className='failSubmit' onClick={() => { alert('专业名称不能为空') }}>保存</div>
                                        : schoolNameValue == ''
                                            ? <div className='failSubmit' onClick={() => { alert('学校名称不能为空') }}>保存</div>
                                            : !scarr.includes(schoolNameValue)
                                                ? <div className='failSubmit' onClick={() => { alert('请根据提示填写学校名称') }}>保存</div>
                                                : nameValue == '' || nameValue == null
                                                    ? <div className='failSubmit' onClick={() => { alert('名字不能为空') }}>保存</div>
                                                    : phoneValue == '' || phoneValue == null
                                                        ? <div className='failSubmit' onClick={() => { alert('手机号码不能为空') }}>保存</div>
                                                        : phoneValue.length != 11
                                                            ? <div className='failSubmit' onClick={() => { alert('手机号码格式错误') }}>保存</div>
                                                            : idNumberValue == ''
                                                                ? <div className='failSubmit' onClick={() => { alert('身份证不能为空') }}>保存</div>
                                                                : !idCard.test(idNumberValue)
                                                                    ? <div className='failSubmit' onClick={() => { alert('身份证格式错误') }}>保存</div>
                                                                    : 
                                                                    

                                                                    <button className='person-content_subBotton' onClick={handleSaveInfo} value=''>保存</button>
                                                                    }
                                    <button className='person-content_resBotton' type="reset" onClick={() => { changeInfoFalse() }}>取消</button>
                                </div>
                            </div >

                    
                        </>
                    }
                </>
                : presonOrSetting == 2 ? <Team displayTeam={displayTeam} changeSignDisplay={changeSignDisplay} id={id} /> : // 设置中心
                    <div className='person-content'><PersonSetting id={id} /></div>}
        </div >
    )
} 
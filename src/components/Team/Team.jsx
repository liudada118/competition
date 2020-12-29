import React, { useState, useEffect } from 'react'
import { Row, Col, Popconfirm, message } from 'antd'
import axios from 'axios'
import Loading from '../common/Loading/Loading'
import { axiosInstance } from '../../api/config'
import './index.css'
import { Link } from 'react-router-dom'
export default function Team(props) {
    const [teamInfo, setTeamInfo] = useState('')
    const { id } = props
    const [teacherId, setTeacherId] = useState('')
    // const [teamId ,setTeamId] = useState('')
    var teamId
    if (teamInfo != '' && teamInfo.teams.length != 0) {
        // setTeamId(teamInfo.teams[0].id)
        teamId = teamInfo.teams[0].id
    }
    // }else{

    // }
    //     schoolNameValue  professionaNamelValue  nameValue  phoneValue  idNumberValue
    // teacherSchoolValue   teacherNameValue  teacherMailboxlValue  teacherPhoneValue   teacherIdValue
    // teamInfo.teams[0].identitycard                teamInfo.teams[0].teamtype  teamInfo.teams[0].university   teamInfo.teams[0].team  teamInfo.teams[0].captain  teamInfo.teams[0].telphone
    // teamInfo.teams[0].teamtype  teamInfo.teams[0].university   teamInfo.teams[0].team  teamInfo.teams[0].captain  teamInfo.teams[0].telphone
    // const changeTeacherNameValue = (e) => {
    //     setTeacherNameValue(e.target.value)
    // }
    // const changeTeacherIdValue = (e) => {
    //     setTeacherIdValue(e.target.value)
    // }
    // const changeTeacherMailboxlValue = (e) => {
    //     setTeacherMailValue(e.target.value)
    // }
    // const changeTeacherPhoneValue = (e) => {
    //     setTeacherPhoneValue(e.target.value)
    // }
    // const changeTeacherSchoolValue = (e) => {
    //     setTeacherSchoolValue(e.target.value)
    // }
    useEffect(() => {
        axiosInstance.get(`/user/queryMemberInfo?id=${id}`)
            .then(res => {
                setTeamInfo(res.data.data)
                if (res.data.data.teams.length > 0) {
                    setSchoolNameValue(res.data.data.teams[0].university)
                    setProfessionalNameValue(res.data.data.teams[0].team)
                    setNameValue(res.data.data.teams[0].captain)
                    setPhoneValue(res.data.data.teams[0].telphone)
                    setSchoolRadio(res.data.data.teams[0].teamtype)
                    setIdNumberValue(res.data.data.teams[0].identitycard)
                    if (res.data.data.teams[0].teacher != null) {
                        setTeacherNameValue(res.data.data.teams[0].teacher.username)
                        setTeacherIdValue(res.data.data.teams[0].teacher.identitycard)
                        setTeacherMailValue(res.data.data.teams[0].teacher.email)
                        setTeacherPhoneValue(res.data.data.teams[0].teacher.telphone)
                        setTeacherSchoolValue(res.data.data.teams[0].teacher.unit)
                        setTeacherId(res.data.data.teams[0].teacher.id)
                    }
                    if (res.data.data.teams[0].teammembers != null) {
                        let arra = memberList
                        let arrr = []
                        let ars = new Array(res.data.data.teams[0].teammembers.length)
                        res.data.data.teams[0].teammembers.forEach((teammember) => {
                            arrr.push(arra.filter((a) => a.number == teammember.number))
                        })
                        for (let i = 0; i < res.data.data.teams[0].teammembers.length; i++) {
                            ars[i] = arrr[i][0]
                        }
                        for (let i = 0; i < ars.length; i++) {
                            ars[i].info[0].value = res.data.data.teams[0].teammembers[i].unit
                            ars[i].info[1].value = res.data.data.teams[0].teammembers[i].username
                            ars[i].info[2].value = res.data.data.teams[0].teammembers[i].email
                            ars[i].info[3].value = res.data.data.teams[0].teammembers[i].telphone
                            ars[i].info[4].value = res.data.data.teams[0].teammembers[i].identitycard
                        }

                        setArray(ars)
                    }

                }
            })
    }, [])
    const [teacherInfo, setTeacherInfo] = useState('')

    useEffect(() => {
        axiosInstance.post('/dictionary/getAllUniversityName')
            .then(res => {
                setSchoolName(res.data.data)
            })
    }, [])
    const changeInfoTrue = () => {
        setChangeInfo(true)
    }
    const changeInfoFalse = () => {
        setChangeInfo(false)
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
    const [teacherNameValue, setTeacherNameValue] = useState('')
    const [teacherIdValue, setTeacherIdValue] = useState('')
    const [teacherMailboxlValue, setTeacherMailValue] = useState('')
    const [teacherPhoneValue, setTeacherPhoneValue] = useState('')
    const [teacherSchoolValue, setTeacherSchoolValue] = useState('')
    const [changeInfo, setChangeInfo] = useState(false)
    const [team, setTeam] = useState('')
    const [schoolRadio, setSchoolRadio] = useState('本科')
    const changeSchoolRadio = (e) => {
        setSchoolRadio(e.target.value);
    }
    const [memberList, setMemberList] = useState([
        {
            id: '',
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
            id: '',
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
            id: '',
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
            id: '',
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
    const handeleChangeMember = () => {
        axiosInstance({
            method: 'POST',
            url: '/user/updateMemberInfo',
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
        let arrt = array
        let arru = []
        arrt.map((a) => { a.info.map((b) => { arru.push(b) }) })
        let arrl = arru.filter((a) => a.value == '')
        setmemberyes(arrl.length)

    };
    const [memberyes, setmemberyes] = useState(0)

    const [array, setArray] = useState([])
    const memberAdd = () => {

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
                if (b.includes(arr5[i].number)) { continue }
                else {
                    arr6.push(arr5[i])
                    break
                }
            }
        } else {
            arr6.push(arr5[0])
        }

        setArray(arr6)
        let arrg = arr6
        let arrf = []
        arrg.map((a) => { a.info.map((b) => { arrf.push(b) }) })
        let arrh = arrf.filter((a) => a.value == '')
        setmemberyes(arrh.length)

    }
    const [memberN, setMemberN] = useState(1)
    const [memberNumber, setMemberNumber] = useState([])
    const memberDel = (b) => {

        let Lists = memberList
        let list = Lists.filter(a => a.number == b)
        list[0].info.map((c) => {
            c.value = ''
        })

        setMemberList(Lists)
        let arr6 = [...array]

        let c
        for (let i = 0; i < arr6.length; i++) {
            if (arr6[i].number == list[0].number) {
                c = i
                break
            }
        }
        arr6.splice(c, 1)
        setArray(arr6)
        let arrg = arr6
        let arrf = []
        arrg.map((a) => { a.info.map((b) => { arrf.push(b) }) })
        let arrh = arrf.filter((a) => a.value == '')
        setmemberyes(arrh.length)
        message.success('删除成功');
    }
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
        const [date , setDate] = useState('')
        const[month,setMonth] = useState('')
        useEffect(()=>{
            let a = JSON.stringify(new Date())
            let b  = a.split('-')
            let c = b[2].split('T')
            setDate(parseInt(c[0]))
            setMonth(b[1])
        },[])
    const [schoolNameValue, setSchoolNameValue] = useState('')
    const changeSchoolNameValue = (e) => {
        setSchoolNameValue(e.target.value)
    }
    const [schoolName, setSchoolName] = useState([])
    const [professionaNamelValue, setProfessionalNameValue] = useState('')
    const [nameValue, setNameValue] = useState('')
    const [phoneValue, setPhoneValue] = useState('')
    const [idNumberValue, setIdNumberValue] = useState('')
    const changeNameValue = (e) => {
        setNameValue(e.target.value)
    }
    const changeIdNumberValue = (e) => {
        setIdNumberValue(e.target.value)
    }
    const changeProfessionalNameValue = (e) => {
        setProfessionalNameValue(e.target.value)
    }
    const changePhoneValue = (e) => {
        setPhoneValue(e.target.value)
    }
    let email = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/

    const handleCreateTeam = () => {
        axiosInstance({
            method: 'POST',
            url: '/user/updateteaminfo',
            data: {
                'captainpid': id,
                'id': teamId,
                'teamtype': schoolRadio,
                'university': schoolNameValue,
                'team': professionaNamelValue,
                'captain': nameValue,
                'identitycard': idNumberValue,
                'telphone': phoneValue,
                'teacher': {
                    'id': teacherId,
                    'username': teacherNameValue,
                    'telphone': teacherPhoneValue,
                    'identitycard': teacherIdValue,
                    'email': teacherMailboxlValue,
                    'unit': teacherSchoolValue
                },
                'member': array,
            }
        })
            .then(function (response) {
                if (response.data.code == 200) {
                    alert(response.data.msg)
                    window.location.reload()
                } else {
                    alert(response.data.msg)
                    setProfessionalNameValue('')
                }

            })
            .catch(function (error) {
                console.log(error)
            })
    }
    let idCard = /^(\d{18}|\d{17}\w{1})$/
    let scarr = []
    if (schoolName.length > 0) {

        schoolName.forEach((a) => {
            scarr.push(a.name)
        })

    }

    return (
        <>
            {!changeInfo ?
                <>
                    <div className='person-content'>
                        <div className="person-content_top person-content_text">
                            <div className="person-content_title"><h2>{'>> 团队基本信息'}</h2></div>
                           {month!=''&&month>7&& date!=''&&date>20?null :teamInfo == '' ? null : teamInfo.teams.length == 0 ? null : changeInfo ? null :   <div className="person-content_edit" onClick={changeInfoTrue}>编辑</div>}
                        </div>


                        {teamInfo == '' ? <Loading /> : teamInfo.teams.length == 0 ? <h2 className='person-content_null'><Link to={`/createTeam/${id}`}>暂无队伍请创建</Link></h2>
                            : <><div className={`person-content_key person-content_text  person-content_school`} >
                                <Row>
                                    <Col span={6}></Col>
                                    <Col span={6}>队伍类型:</Col>
                                    <Col span={6}>{teamInfo.teams[0].teamtype}</Col>
                                    <Col span={6}></Col>
                                </Row>
                            </div>

                                <div className={`person-content_key person-content_text  person-content_school`} >
                                    <Row>
                                        <Col span={6}></Col>
                                        <Col span={6}>学校名称:</Col>
                                        <Col span={6}>{teamInfo.teams[0].university}</Col>
                                        <Col span={6}></Col>
                                    </Row>
                                </div>
                                <div className={`person-content_key person-content_text  person-content_school`} >
                                    <Row>
                                        <Col span={6}></Col>
                                        <Col span={6}>团队名称:</Col>
                                        <Col span={6}>{teamInfo.teams[0].team}</Col>
                                        <Col span={6}></Col>
                                    </Row>
                                </div>
                                <div className={`person-content_key person-content_text  person-content_school`} >
                                    <Row>
                                        <Col span={6}></Col>
                                        <Col span={6}>队长姓名:</Col>
                                        <Col span={6}>{teamInfo.teams[0].captain}</Col>
                                        <Col span={6}></Col>
                                    </Row>
                                </div>
                                <div className={`person-content_key person-content_text  person-content_school`} >
                                    <Row>
                                        <Col span={6}></Col>
                                        <Col span={6}>队长手机号:</Col>
                                        <Col span={6}>{teamInfo.teams[0].telphone}</Col>
                                        <Col span={6}></Col>
                                    </Row>
                                </div>
                                <div className={`person-content_key person-content_text  person-content_school`} >
                                    <Row>
                                        <Col span={6}></Col>
                                        <Col span={6}>队长身份证号码:</Col>
                                        <Col span={6}>{teamInfo.teams[0].identitycard}</Col>
                                        <Col span={6}></Col>
                                    </Row>
                                </div>
                                <div className={`person-content_key person-content_text  person-content_school red`} >
                                    <Row>
                                        <Col span={6}></Col>
                                        <Col span={6}>报名状态:</Col>
                                        <Col span={6, 'red'}>{teamInfo.teams[0].isPass == 0 ? <div onClick={() => { props.changeSignDisplay() }}>未报名</div> : '报名成功'}</Col>
                                        <Col span={6}></Col>
                                    </Row>
                                </div>
                            </>}

                    </div>
                    <div className='person-content'>
                        <div className="person-content_top person-content_text">
                            <div className="person-content_title"><h2>{'>> 指导老师信息'}</h2></div>
                            {month!=''&&month>7&& date!=''&&date>20?null :date!=''&&date>15?null :teamInfo == '' ? null : teamInfo.teams.length == 0 ? null : changeInfo ? null :  <div className="person-content_edit" onClick={changeInfoTrue}>编辑</div>}
                        </div>


                        {teamInfo == '' ? <Loading /> : teamInfo.teams.length == 0 ? null : teamInfo.teams[0].teacher == null ? <h2 className='person-content_null'>暂无老师信息，请添加</h2> : <><div className={`person-content_key person-content_text  person-content_school`} >
                            <Row>
                                <Col span={6}></Col>
                                <Col span={6}>单位:</Col>
                                <Col span={6}>{teamInfo.teams[0].teacher.unit}</Col>
                                <Col span={6}></Col>
                            </Row>
                        </div>
                            <div className={`person-content_key person-content_text  person-content_school`} >
                                <Row>
                                    <Col span={6}></Col>
                                    <Col span={6}>姓名:</Col>
                                    <Col span={6}>{teamInfo.teams[0].teacher.username}</Col>
                                    <Col span={6}></Col>
                                </Row>
                            </div>
                            <div className={`person-content_key person-content_text  person-content_school`} >
                                <Row>
                                    <Col span={6}></Col>
                                    <Col span={6}>邮箱:</Col>
                                    <Col span={6}>{teamInfo.teams[0].teacher.email}</Col>
                                    <Col span={6}></Col>
                                </Row>
                            </div>
                            <div className={`person-content_key person-content_text  person-content_school`} >
                                <Row>
                                    <Col span={6}></Col>
                                    <Col span={6}>电话:</Col>
                                    <Col span={6}>{teamInfo.teams[0].teacher.telphone}</Col>
                                    <Col span={6}></Col>
                                </Row>
                            </div>
                            <div className={`person-content_key person-content_text  person-content_school`} >
                                <Row>
                                    <Col span={6}></Col>
                                    <Col span={6}>身份证:</Col>
                                    <Col span={6}>{teamInfo.teams[0].teacher.identitycard}</Col>
                                    <Col span={6}></Col>
                                </Row>
                            </div>
                        </>}

                    </div>
                    <div className='person-content person-content_member'>
                        <div className="person-content_top  person-content_text">
                            <div className="person-content_title"><h2>{'>> 队员信息'}</h2></div>
                            {month!=''&&month>7&& date!=''&&date>20?null :date!=''&&date>15?null :teamInfo == '' ? null : teamInfo.teams.length == 0 ? null : changeInfo ? null :  <div className="person-content_edit" onClick={changeInfoTrue}>编辑</div>}
                        </div>
                        {teamInfo == '' ? <Loading /> : teamInfo.teams.length == 0 ? <h2 className='person-content_null'></h2> : teamInfo.teams[0].teammembers.length == 0 ? <h2 className='person-content_null'>暂无队员信息，请添加</h2> : <><div className={`person-content_key person-content_member person-content_text  person-content_school`} >
                            <Row>
                                <Col span={2}>序号</Col>
                                <Col span={5}>单位</Col>
                                <Col span={2}>姓名</Col>
                                <Col span={5}>邮箱</Col>
                                <Col span={4}>手机号</Col>
                                <Col span={6}>身份证号</Col>
                            </Row>
                        </div>
                          
                            {
                                teamInfo.teams[0].teammembers.map((teammember, i) => {
                                    return (
                                        <div key={i} className={`person-content_key person-content_text  person-content_school`} >
                                            <Row>
                                                <Col span={2}>{i + 1}</Col>
                                                <Col span={5}>{teammember.unit}</Col>
                                                <Col span={2}>{teammember.username}</Col>
                                                <Col span={5}>{teammember.email}</Col>
                                                <Col span={4}><span>{teammember.telphone}</span></Col>
                                                <Col span={6}>{teammember.identitycard}</Col>
                                            </Row>
                                        </div>
                                    )
                                })
                            }
                        </>}

                    </div>
                </>
                :
                <>
                    <div className='createTeam-content'>
                        <div className="createTeam-content_top createTeam-content_text">
                            <div className="createTeam-content_title"><h2>{'>> 团队基本信息'}</h2></div>
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
                            </Row>
                        </div>
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
                    </div>

                    <div className='person-content'>
                        <div className="person-content_top person-content_text">
                            <div className="person-content_title"><h2>{'>> 指导老师信息'}</h2></div>
                        </div>
                        <div className='createTeam-content_teacherKey'  >

                            <div className='teacher-infos'>
                                <div className='teacher-info'>
                                    <div className='teacher-label'><label htmlFor={`teacherSchool`}>{`单位`}</label></div>
                                    <div className='teacher-input'><input value={teacherSchoolValue} onChange={changeTeacherSchoolValue} type="text" id={`teacherSchool`} /></div>
                                </div>
                                <div className='teacher-info'>
                                    <div className='teacher-label'><label htmlFor={`teacherName`}>{`姓名`}</label></div>
                                    <div className='teacher-input'><input value={teacherNameValue} onChange={changeTeacherNameValue} type="text" id={`teacherName`} /></div>
                                </div>

                                <div className='teacher-info'>
                                    <div className='teacher-label'><label htmlFor={`teacherEm`}>{`邮箱`}</label></div>
                                    <div className='teacher-input'><input value={teacherMailboxlValue} onChange={changeTeacherMailboxlValue} type="text" id={`teacherEm`} /></div>
                                </div>
                                <div className='teacher-info'>
                                    <div className='teacher-label'><label htmlFor={`teacherPhone`}>{`电话`}</label></div>
                                    <div className='teacher-input'><input value={teacherPhoneValue} onChange={changeTeacherPhoneValue} type="number" id={`teacherPhone`} /></div>
                                </div>
                                <div className='teacher-info'>
                                    <div className='teacher-label'><label htmlFor={`teacherId`}>{`身份证`}</label></div>
                                    <div className='teacher-input'><input value={teacherIdValue} onChange={changeTeacherIdValue} type="text" id={`teacherId`} /></div>
                                </div>

                            </div>

                        </div> <div className="person-content_top person-content_text">
                            {array.length == 4 ? <div className="person-content_title" onClick={() => { alert('达到最大队员数量') }}><div className="person-content_memberTitle"><div>添加队员</div></div></div>
                                : memberyes > 0 ? <div className="person-content_title" onClick={() => { alert('请填完当前队员信息') }}><div className="person-content_memberTitle"><div>添加队员</div></div></div>
                                    : <div className="person-content_title" onClick={memberAdd}><div className="person-content_memberTitle"><div>添加队员</div></div></div>}
                        </div>
                        <div className='person-content_memberKey'  >
                            {
                                array.length > 0 ? array.map((a, index) => {
                                    return (
                                        <div className='member-infos' key={index}>
                                            {
                                                a.info.map((b, i) => {
                                                    return (
                                                        <div className='member-info' key={i}>
                                                            <div className='member-label'><label htmlFor={b.id}>{b.name}</label></div>
                                                            <div className='member-input'><input onChange={(e) => { handelChange(e) }}
                                                                value={b.value}
                                                                type="text" id={b.id} /></div>
                                                        </div>
                                                    )
                                                })
                                            }
                                          
                                            <Popconfirm
                                                title="是否删除"
                                                onConfirm={()=>{memberDel(a.number)}}
                                                
                                                okText="Yes"
                                                cancelText="No"
                                            >
                                             <div className="member-info memberDel" ><div className='member-del_botton'>删除队员</div></div>  
                                            </Popconfirm>

                                        </div>
                                    )
                                })
                                    : null}
                            <div className="person-content_button">
                                {professionaNamelValue == '' || professionaNamelValue == null
                                    ? <div className='failSubmit' onClick={() => { alert('团队名称不能为空') }}>保存</div>
                                    : schoolNameValue == ''
                                        ? <div className='failSubmit' onClick={() => { alert('学校名称不能为空') }}>保存</div>
                                        : !scarr.includes(schoolNameValue)
                                            ? <div className='failSubmit' onClick={() => { alert('请按照提示填写学校名称') }}>保存</div>
                                            : nameValue == '' || nameValue == null
                                                ? <div className='failSubmit' onClick={() => { alert('队长姓名不能为空') }}>保存</div>
                                                : phoneValue == ''
                                                    ? <div className='failSubmit' onClick={() => { alert('手机号码不能为空') }}>保存</div>
                                                    :
                                                    phoneValue.length != 11
                                                        ? <div className='failSubmit' onClick={() => { alert('手机号码格式错误') }}>保存</div>
                                                        :
                                                        idNumberValue == ''
                                                            ? <div className='failSubmit' onClick={() => { alert('身份证不能为空') }}>保存</div>
                                                            : !idCard.test(idNumberValue)
                                                                ? <div className='failSubmit' onClick={() => { alert('身份证错误') }}>保存</div>
                                                                : teacherNameValue == '' || teacherNameValue == null
                                                                    ? <div className='failSubmit' onClick={() => { alert('老师名字不能为空') }}>保存</div>
                                                                    : teacherSchoolValue == '' || teacherSchoolValue == null
                                                                        ? <div className='failSubmit' onClick={() => { alert('老师单位不能为空') }}>保存</div>
                                                                        : teacherPhoneValue == ''
                                                                            ? <div className='failSubmit' onClick={() => { alert('老师手机号码不能为空') }}>保存</div>
                                                                            : teacherPhoneValue.length != 11
                                                                                ? <div className='failSubmit' onClick={() => { alert('老师手机号码错误') }}>保存</div>
                                                                                : teacherIdValue == ''
                                                                                    ? <div className='failSubmit' onClick={() => { alert('老师身份证不能为空') }}>保存</div>
                                                                                    : !idCard.test(teacherIdValue)
                                                                                        ? <div className='failSubmit' onClick={() => { alert('老师身份证错误') }}>保存</div>
                                                                                        : teacherMailboxlValue == ''
                                                                                            ? <div className='failSubmit' onClick={() => { alert('老师邮箱不能为空') }}>保存</div>
                                                                                            : !email.test(teacherMailboxlValue)
                                                                                                ? <div className='failSubmit' onClick={() => { alert('邮箱格式错误') }}>保存</div>
                                                                                                : memberyes > 0
                                                                                                    ? <div className='failSubmit' onClick={() => { alert('当前队员信息不全') }}>保存</div>
                                                                                                    : <button className='person-content_subBotton' onClick={handleCreateTeam} value=''>保存</button>}
                                <button className='person-content_resBotton' type="reset" onClick={() => { changeInfoFalse() }}>取消</button>
                            </div>
                        
                        </div>
                    </div>
                    <div className='person-content'>

                    </div>
                   
                </>
            }
        </>






     
    )
}

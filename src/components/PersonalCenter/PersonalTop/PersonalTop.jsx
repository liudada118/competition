import React from 'react'
import './index.css'
// import Personalbg from '../../../assets/img3/Personalbg.jpg'
// import Personalbg1 from '../../../assets/img3/1.jpg'
import portrait from '../../../assets/img3/portrait.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'
export default function PersonalTop(props) {

    const [infos, setInfos] = useState([{
        icon: '&#xe622;',
        name: '个人中心'
    }, {
        icon: '&#xe60a;',
        name: '我的队伍'
    }, {
        icon: '&#xe60a;',
        name: '设置中心'
    }])
    const [highLight, setHighLight] = useState(0)
    const { displayPreson, displaySetting, displayTeam, setPresonOrSetting } = props
    const changeHighLight = (i) => {
        setHighLight(i)
    }
    return (
        <div className='person-top'>

            <div className="person-top_info">
                <div className="person-top_personImg">
                    <img src={portrait} alt="" />
                </div>
                <h2 className='person-top_welcome'>您好!欢迎{props.team!=''?props.team.realname:null}来到个人中心</h2>
                {props.teams>0? <p className='hasTeam'>你已创建队伍 {props.team.teams[0].team}</p> :<p>所属团队: 您还未加入任何团队  / <Link to={`/createTeam/${props.id}`} >创建队伍</Link> </p>  }
                <div className="person-top_seletor">
                    {infos.map((info, i) => {
                        return (
                            <>
                                {
                                    i == 0 ? <span key={i} className={i == highLight ? 'highLight' : null} key={i} onClick={() => {
                                        changeHighLight(i);
                                        displayPreson()
                                    }
                                    }><i className='iconfont'>&#xe622;</i>个人中心</span> : i == 1 ? <span className={i == highLight ? 'highLight' : null} key={i} onClick={() => {
                                        changeHighLight(i);
                                        displayTeam()
                                    }
                                    }><i className='iconfont'>&#xe62e;</i>我的队伍</span> : i == 2 ? <span className={i == highLight ? 'highLight' : null} key={i} onClick={() => {
                                        changeHighLight(i);
                                        displaySetting();
                                    }
                                    }><i className='iconfont'>&#xe60a;</i>设置中心</span> : null
                                }
                            </>
                           
                        )
                    })}
                </div>
            </div>

        </div>
    )
}

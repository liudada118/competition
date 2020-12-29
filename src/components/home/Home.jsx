import React, { useState } from 'react'

import a from "../../assets/img2/a.png"
import b from "../../assets/img2/b.png"
import c from "../../assets/img2/c.png"
import d from "../../assets/img2/d.png"
import e from "../../assets/img2/e.png"
import f from "../../assets/img2/f.png"
import g from "../../assets/img2/g.png"
import h from "../../assets/img2/h.png"
import i from "../../assets/img2/i.png"
import j from "../../assets/img2/j.png"
import reward from "../../assets/img2/reward.png"
import logo from "../../assets/logo.png"
import { Link } from 'react-router-dom'
import { BackTop, Anchor } from 'antd';
import './Home.css'
import { useEffect } from 'react'
import Loading from '../common/Loading/Loading'
// const { Link } = Anchor;
export default function Home(props) {
    const { id } = props.match.params
    const [topNav, setTopNav] = useState([
        {
            type: 'introduction',
            name: '比赛介绍'
        }, {
            type: 'object',
            name: '参赛对象'
        }, {
            type: 'introduction',
            name: '比赛介绍'
        }, {
            type: 'introduction',
            name: '比赛介绍'
        }, {
            type: 'introduction',
            name: '比赛介绍'
        }, {
            type: 'introduction',
            name: '比赛介绍'
        }, {
            type: 'introduction',
            name: '比赛介绍'
        },
    ])
    const scrollToAnchor = (anchorName) => {
        if (anchorName) {
            // 找到锚点
            let anchorElement = document.getElementById(anchorName);
            // 如果对应id的锚点存在，就跳转到锚点
            if (anchorElement) {
                anchorElement.scrollIntoView(
                    {
                        block: 'start',
                        behavior: 'smooth'
                    }
                )
            }
        }
    }
    let name;
    return (
        <div className="home-wraper">
            {<>
                <div className="header">
                    <div className="top" id="atop">
                        <div className="logo">
                            <img src={logo} alt="" />
                        </div>
                        <ul className="top-nav" id='topNav' >
                            <li><a className="anchor" onClick={() => scrollToAnchor('introduction')}>比赛介绍</a> </li>
                            <li><a className="anchor" onClick={() => scrollToAnchor('object')}>参赛对象</a>  </li>
                            <li><a className="anchor" onClick={() => scrollToAnchor('method')}>比赛方式</a>  </li>
                            <li><a className="anchor" onClick={() => scrollToAnchor('ranger')}>比赛安排</a>  </li>
                            <li><a className="anchor" onClick={() => scrollToAnchor('reward')}>奖项设置</a>  </li>
                            <li><a className="anchor" onClick={() => scrollToAnchor('organization')}>赛事组织</a>  </li>
                            <li><a className="anchor" onClick={() => scrollToAnchor('phone')}>联系方式</a>  </li>
                        </ul>
                        <ul className="navTools">
                            {id ?
                                <li>
                                    <Link to={`/presonalCenter/${id}`} > 个人中心</Link>
                                    <Link to='/' ><span onClick={() => {
                                        window.history.pushState(null, null, document.URL);
                                        window.addEventListener('popstate', function () {
                                            window.history.pushState(null, null, document.URL);
                                        });
                                    }} >退出</span> </Link>
                                </li>
                                : <li>&nbsp;&nbsp;&nbsp;&nbsp;
                            < Link to="/login" className="hreftologin">
                                        <span id="hiddenLogin" >登录</span>
                                    </Link>
                                    < Link to="/register" className="hreftoregister">
                                        <span id="hiddenLogin" >注册</span>
                                    </Link>
                                </li>}
                        </ul>
                    </div>
                </div>
                <div className="container-wraper">
                    <div className="home-title">
                        第三届江西省高校网络安全技能大赛
                </div>

                    <div className="introduction" id="introduction">
                        <img src={a} alt="" />
                    </div>

                    <div className="object" id="object">
                        <img src={b} alt="" />
                    </div>

                    <div className="method" id="method">
                        <img src={c} alt="" />
                    </div>

                    <div className="ranger" id="ranger">
                        <img src={d} alt="" />
                    </div>

                    <div className="reward" id="reward">
                        <img src={h} alt="" className="reward1" />
                        <img src={reward} alt="" className="reward2" />
                    </div>

                    <div className="organization" id="organization">
                        <img src={f} alt="" />
                    </div>

                    <div className="phone" id="phone">
                        <div className="phone1">
                            <img src={j} alt="" className="phone1" />
                        </div>
                        <div className="phone2">
                            <img src={i} alt="" className="phone2" />
                        </div>
                    </div>


                    <div className="foot">
                        <div className="ft-org">
                            <p>东华理工大学  |  深信服公司  |  易霖博公司</p>
                        </div>
                        <div className="ft-copyright">
                            <p>版权所有@2020 江西教育网络安全应急中心、东华理工大学 &nbsp;&nbsp;&nbsp;&nbsp;网站运维：东华理工大学网络与信息中心</p>
                        </div>
                        <div className="tip" style={{color:'#666'}}>为了获取更好的体验效果，请使用PC端Google浏览器。</div>
                    </div>
                </div>
                <BackTop>
                    <div className="gototop">置顶</div>
                </BackTop></>}
        </div>
    )
}

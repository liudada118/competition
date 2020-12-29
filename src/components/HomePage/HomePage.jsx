import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom';

import bg from '../../assets/bg.jpg'
import logo from '../../assets/logo.png'
import rewardjpg from '../../assets/reward.png';
import time from '../../assets/time.jpg'
import './Public/active/hfs/css/meeting.css';
import './Public/css/base.css';
import './index.css'
import Login from '../login/Login'
export default function HomePage() {
    return (
        <div>
            <header>

                <div className="top" id="atop">
                    <div className="logo">
                        <a href="#"><img src={logo} alt="" /></a>
                    </div>
                    <ul className="top-nav" id='topNav'>
                        <li><a href="#intro">比赛介绍</a></li>
                        <li><a href="#form">参赛对象</a></li>
                        <li><a href="#way">比赛方式</a></li>
                        <li><a href="#lesson">比赛安排</a></li>
                        <li><a href="#reward">奖项设置</a></li>
                        <li><a href="#org">赛事组织</a></li>
                        <li><a href="#concat">联系方式</a></li>
                        <li className="new"></li>
                    </ul>
                    <ul className="navTools">
                        <li>&nbsp;&nbsp;&nbsp;&nbsp;
                            < NavLink to="../login/Login" >
                            {/* <a rels="env" href="../pages/login/login.html" id="hiddenLogin" >登录</a>&nbsp;&nbsp;
                            <a href="../login/register.html" id="hiddenRegister">注册</a> */}
                            <span id="hiddenLogin" >登录</span>
                            </ NavLink>
                            {/* <span id="showPersonalCenter" >
                                <a href="">个人中心</a>
                            </span> */}
                        </li>
                    </ul>
                </div>
            </header>





            <div className="banner">
                <div className="bgtext">
                    第三届江西省高校网络安全技能大赛
                </div>

            </div>

            <div className="meeting-intro-wrap">
                <div className="meeting-box meeting-intro">
                    <span className="meeting-anchor" id="intro" name="intro"></span>
                    <div className="meeting-ttl">
                        <span>比赛介绍</span>
                    </div>
                    <div className="meeting-intro-con">
                        <p>  为深入学习贯彻习近平总书记关于网络强国的重要思想和“四个坚持”的重要指示精神，贯彻实施《中华人民共和国网络安全法》等法律法规，认真落实中央网信办《关于加强网络安全学科建设和人才培养的意见》（中网办〔2016〕4号）精神，进一步推进网络安全宣传教育和网络安全人才培养发现，根据江西省第七届“国家网络安全宣传周”活动的筹划安排，拟举办第三届江西省高校网络安全技能大赛。
                        </p>
                    </div>
                </div>
            </div>

            <div className="pager">
                <div className="meeting-box meeting-guest">
                    <span className="meeting-anchor" id="form" name="form"></span>
                    <div className="meeting-ttl">
                        <span>参赛对象</span>
                    </div>
                    <div className="game-way">
                        <p>全省高校在职在校人员（包含学生及教师）均可报名参加，分本科院校组和高职高专组两个赛道。大赛采取团体报名形式，每支参赛团队最多不超过5人。</p>
                    </div>
                </div>

                <div className="meeting-box meeting-schdule">
                    <span className="meeting-anchor" id="way" name="way"></span>
                    <div className="meeting-ttl">
                        <span>比赛方式</span>
                    </div>
                    <div className="meeting-schdule-con">
                        <div className="meeting-schdule-main">
                            <p>采取线上CTF技能答题比赛形式。选手登录江西教育网进行在线CTF技能答题，时间3小时，根据团队解题情况进行评分。
                                初赛结束后，按参赛团队CTF解题总得分进行排名，本科院校组和高职高专组各前10名的参赛队伍进入决赛。</p>
                            <p>分线上和线下进行。线上培训，邀请专家对进入决赛的20支队伍进行赛前在线培训。线下网络安全技术交流会，面向所有决赛队伍，于9月14日在应急中心（东华理工大学）举行，围绕网络安全攻防技术进行深入探讨，并对线上培训遗留问题进行答疑解惑。 </p>
                            <p>9月15日第七届国家网络安全宣传周校园日当天，在应急中心（东华理工大学）现场进行。决赛采取CTF夺旗赛+混战AWD攻防对抗赛方式。
                            上午第一轮，参赛选手通过竞赛平台进行CTF夺旗赛，对选手单项技能进行考核，根据团队解题情况进行评分，时间为2小时。
                            下午第二轮，参赛选手在竞赛平台进行AWD攻防对抗，对选手攻击以及防守能力进行考核，由平台计算得分，时间为3小时。
                            大赛裁判组根据各支队伍上、下午比赛得分情况，进行综合评定与核对。</p>
                        </div>

                    </div>
                </div>
            </div>

            <div className="meeting-box meeting-highlights">
                <span className="meeting-anchor" id="lesson" name="lesson"></span>
                <div className="meeting-ttl">
                    <span>比赛安排</span>
                </div>
                <div className="meeting-time">
                    <img src={time} alt="赛程安排" />
                </div>

                <div className="meeting-box meeting-highlights">
                    <span class="meeting-anchor" id="reward" name="reward"></span>
                    <div className="meeting-ttl"><span>奖项设置</span></div>
                    <div className="meeting-highlights-con">
                        <img src={rewardjpg} alt="奖项设置" />
                    </div>
                </div>
            </div>

            <div className="meeting-box meeting-partner">
                <span className="meeting-anchor" id="org" name="org"></span>
                <div className="meeting-ttl">
                    <span>赛事组织</span>
                </div>
                <div className="meeting-partner-con">
                    <div className="meeting-sttl">
                        <span>指导单位</span>
                    </div>
                    <div>
                        <p>省委网信办</p>
                    </div>
                    <div className="meeting-sttl">
                        <span>主办单位</span>
                    </div>
                    <div>
                        <p>省委教育工委、省教育厅，国家计算机网络应急技术处理协调中心江西分中心（以下简称江西分中心）</p>
                    </div>
                    <div className="meeting-sttl"><span>承办单位</span></div>
                    <div>
                        <p>江西教育网络安全应急中心（东华理工大学，以下简称应急中心）</p>
                    </div>
                    <div className="meeting-sttl"><span>协办单位</span></div>
                    <div>
                        <p>深信服科技有限公司、北京易霖博信息技术有限公司（以下简称深信服公司、易霖博公司）</p>
                    </div>
                </div>
            </div>


            <div className="meeting-guide-wrap">
                <div className="meeting-box meeting-guide">
                    <span className="meeting-anchor" id="concat" name="concat"></span>
                    <div className="meeting-ttl">
                        <span>联系方式</span>
                    </div>
                    <div className="meeting-guide-con">
                        <div className="meeting-guide-else">
                            <p>
                                <span>报名专线电话：0791-86756180（工作时间：周一至周五，10:00-19:00）</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            {/* <div className="fixRight">
                <ul>
                    <li>
                        <div className="meeting-toTop"  id="toTop">
                            <a href="#top">返回顶部</a>
                        </div>
                    </li>
                </ul>
            </div> */}

            <div class="fixRight">
                <ul>

                    <li>
                        <div class="meeting-toTop" id="toTop">
                            <a href="#atop">返回顶部</a>
                        </div>
                    </li>


                </ul>
            </div>




            <footer id="partner" name="partner">
                <div className="ft-copyright">
                    <p>
                        <a href="#">东华理工大学</a>| <a href="#">易霖博公司</a>|<a href="#">深信服公司</a></p>
                    <p>Copyright©2020 </p>
                </div>
            </footer>
        </div>


    )
}

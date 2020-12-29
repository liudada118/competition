import React from 'react'
import './index.css'
import axios from 'axios'
import { axiosInstance } from "../../../api/config"
export default function Sign(props) {
    const handleSign = () => {
        axiosInstance({
            method: 'POST',
            url: `/user/applyTeam?id=${props.id}`,
        })
            .then(function (response) {
                alert(response.data.msg)
                window.location.reload();
            })
            .catch(function (error) {
                console.log(error)
            })
    }
    return (
        <div className="sign">
            <div className="sign-content">
                <div className="sign-content_info">
                    <h3>是否报名</h3>
                    <p>报名时间截止2020年8月20日23.59，请及时完善团队信息！</p>
                    <div className="sign-button">
                        <div onClick={() => { props.changeSignNo(); handleSign() }} className="sign-pass">确认</div>
                        <div onClick={() => { props.changeSignNo() }} className="sign-cancel">取消</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

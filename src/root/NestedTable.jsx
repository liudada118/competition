import React, { useState } from 'react'
import { Row, Col } from 'antd'
export default function NestedTable() {
    const [data, setData] = useState([{
        dui: { name: 1, email: 2, phone: 3, id: 4, team: 5, type: 6, school: 7, role: 8 },
        te: { name: 1, email: 2, phone: 3, id: 4, team: 5, type: 6, school: 7, role: 8 },
        member: [{ name: 1, email: 2, phone: 3, id: 4, team: 5, type: 6, school: 7, role: 8 },
        { name: 1, email: 2, phone: 3, id: 4, team: 5, type: 6, school: 7, role: 8 },]
    }, {
        dui: { name: 1, email: 2, phone: 3, id: 4, team: 5, type: 6, school: 7, role: 8 },
        te: { name: 1, email: 2, phone: 3, id: 4, team: 5, type: 6, school: 7, role: 8 },
        member: [{ name: 1, email: 2, phone: 3, id: 4, team: 5, type: 6, school: 7, role: 8 },
        { name: 1, email: 2, phone: 3, id: 4, team: 5, type: 6, school: 7, role: 8 },]
    }])
    return (
        <div>
            <Row >
                <Col span={3}>44</Col>
                <Col span={3}>44</Col>
                <Col span={3}>44</Col>
                <Col span={3}>44</Col>
                <Col span={3}>44</Col>
                <Col span={3}>44</Col>
                <Col span={3}>44</Col>
                <Col span={3}>44</Col>
            </Row>
            {data.map((a, i) => {
                return (<>
                    <Row >
                        <Col span={3}>{a.dui.name}</Col>
                        <Col span={3}>{a.dui.name}</Col>
                        <Col span={3}>{a.dui.name}</Col>
                        <Col span={3}>{a.dui.name}</Col>
                        <Col span={3}>{a.dui.name}</Col>
                        <Col span={3}>{a.dui.name}</Col>
                        <Col span={3}>{a.dui.name}</Col>
                        <Col span={3}>{a.dui.name}</Col>
                    </Row>
                    <Row >
                        <Col span={3}>{a.dui.name}</Col>
                        <Col span={3}>{a.dui.name}</Col>
                        <Col span={3}>{a.dui.name}</Col>
                        <Col span={3}>{a.dui.name}</Col>
                        <Col span={3}>{a.dui.name}</Col>
                        <Col span={3}>{a.dui.name}</Col>
                        <Col span={3}>{a.dui.name}</Col>
                        <Col span={3}>{a.dui.name}</Col>
                    </Row>
                    {a.member.map((b, index) => {
                        return (
                            <Row >
                                <Col span={3}>{b.name}</Col>
                                <Col span={3}>{b.name}</Col>
                                <Col span={3}>{b.name}</Col>
                                <Col span={3}>{b.name}</Col>
                                <Col span={3}>{b.name}</Col>
                                <Col span={3}>{b.name}</Col>
                                <Col span={3}>{b.name}</Col>
                                <Col span={3}>{b.name}</Col>
                            </Row>
                        )
                    })

                    }
                </>)
            })

            }
        </div >
    )
}

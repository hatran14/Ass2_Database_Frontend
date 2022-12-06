import MyImage from '../../../assets/image/ahn-yu-jin.jfif'
import { Button, Col, Row, Table } from 'react-bootstrap'
import DetailStyle from './detail.module.scss'
import { Modal } from 'react-bootstrap'
import {useState, useEffect} from 'react'
import axios from "axios";
import {getBestAchievementBySSN} from "../../../utils/API"

function RenderImg({trainee}) {
    return(
        <div className='text-center'>
            <img src={trainee.photo} width='150px'></img>
            <div className={DetailStyle.title}>{trainee.fullname}</div>
            {console.log(trainee.photo)}
        </div>
    )
}

function RenderInfo({trainee}) {
    const [bestAchievement, setBestAchievement] = useState([]);

    useEffect(() => {
        (
            async() => {
                await axios.get(`${getBestAchievementBySSN}/${trainee.SSN}`).then (res => {
                    setBestAchievement(res.data.result)
                })
            }
        )();
    }, [])

    console.log(trainee.SSN,bestAchievement)

    return (
        <>
            <p>Số điện thoại: {trainee.phone}</p>
            <p>Số CCCD: {trainee.SSN}</p>
            <p>Địa chỉ: {trainee.address}</p>
            <p>Số mùa tham gia: {trainee.number_of_seasons_participating}</p>
            <div className='d-flex'>
                <p>Thành tích cao nhất: </p>

                <ul>
                    {bestAchievement.map((e, index) =>
                        <li className='d-block' key={index}>Mùa {e.YEAR} - Tập {e.Best_achievement}</li>
                    )}
                </ul>
            </div>

            {/* <Table>
                <thead>
                    <th>Mùa</th>
                    <th>Tập</th>
                </thead>
                <tbody>
                    {bestAchievement.map((e, index) => 
                        // <option key={index} value={e.year}>{e.year}</option>
                        <tr key={index}>
                            <td>{e.YEAR}</td>
                            <td>{e.Best_achievement}</td>
                        </tr>
                    )}
                </tbody>
            </Table> */}

        </>
    )
}

export default function RenderDetail({trainee}) {
    return (
        <>
            <Row>
                <Col>
                    <RenderImg trainee={trainee}/>
                    {console.log(trainee.phone)}
                </Col>
                <Col>
                    <RenderInfo trainee={trainee}/>
                </Col>
            </Row>
        </>    
    )
}
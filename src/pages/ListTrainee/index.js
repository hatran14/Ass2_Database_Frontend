import MyTable from './Table/Table'
import AboveTable from './AboveComponent/AboveComponent'
import Styles from './style.module.scss'
import PopupDetail from './PopupDetail/PopupDetail'
import { useState } from 'react'
import axios from 'axios';
import {getAllTraineeAYear} from '../../utils/API'


export default function ListTrainee() {
    const [year, setYear] = useState();
    const [trainees, setTrainees] = useState([])

    return (
        <div className={Styles.container}>
            <AboveTable setYear={setYear} setTrainees={setTrainees}/>
            <MyTable trainees={trainees}/>
        </div>
    )
}
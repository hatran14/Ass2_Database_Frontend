import { Button, Form, InputGroup } from 'react-bootstrap'
import SearchStyle from './search.module.scss'
import { DropdownButton, Dropdown } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { Row, Col} from 'react-bootstrap'
import axios from "axios";
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import {getAllTraineeAYear, getTraineeByFullname, getAllYear} from '../../../utils/API'



function SearchBar({setTrainees}) {
    const [fullname, setFullname] = useState('');

    const handleClick = async() => {
        await axios.get(`${getTraineeByFullname}/${fullname}`).then(res => {
            const trainees = res.data;
            // console.log(trainees.result)
            trainees.result == null ? setTrainees([]) : setTrainees(trainees.result);
          })

    }

    return (
        <div className={`${SearchStyle['search-container']}`}>
            <div class="input-group">
                <input type="search" class="form-control" placeholder="Tìm kiếm theo tên" aria-label="Search" aria-describedby="search-addon" onChange={(e)=>{setFullname(e.target.value)}}/>
                <Button className={SearchStyle['gray-btn']} onClick={handleClick} >
                    <i class="fa-solid fa-magnifying-glass"></i>
                </Button>
            </div>
        </div>
    )
}

function RenderButton({setYear, setTrainees}) {
    const [years, setYears] = useState([])

    const handleSelectYear = async (e) => {
        const year = e.target.value;
        setYear(year);
        await axios.get(`${getAllTraineeAYear}/${year}`).then(res => {
            const trainees = res.data;
            // console.log(trainees.result)
            setTrainees(trainees.result);
          })
    }

    useEffect(() => {
        (
            async() => {
                await axios.get(`${getAllYear}`).then (res => {
                    setYears(res.data.result)
                })
            }
        )();
    }, [])


    return (
        <>
            {/* <DropdownButton title={value} className='d-inline'>
                <Dropdown.Item onClick={(e) => handleChangeValue(e.target.textContent)}>
                    2018
                </Dropdown.Item>
                <Dropdown.Item onClick={(e) => handleChangeValue(e.target.textContent)}>2019</Dropdown.Item>
                <Dropdown.Item onClick={(e) => handleChangeValue(e.target.textContent)}>2020</Dropdown.Item>
            </DropdownButton>

            <DropdownButton title="Chọn tập" className='d-inline'>
            </DropdownButton> */}
            <Row>
                <Col className='col-lg-5'>
                    <InputGroup>
                        <Form.Select defaultValue="Chọn mùa" onChange={(e)=>handleSelectYear(e)}>
                            <option>Chọn mùa...</option>
                            {/* <option value={2020} >2020</option>
                            <option value={2021} >2021</option> */}
                            {years.map((e, index) => 
                                <option key={index} value={e.year}>{e.year}</option>
                            )}
                        </Form.Select>
                    </InputGroup>
                </Col>
                <Col>
                    <SearchBar setTrainees={setTrainees}/>
                </Col>
                <Col>
                        <Link to="/create-new">
                            <Button className={SearchStyle['green-btn']}>
                                Thêm mới
                                <i class="fa-solid fa-circle-plus ms-2"></i>
                            </Button>
                        </Link>
                </Col>
            </Row>
            
        </>
    )
}

export default function RenderAbove({setYear, setTrainees}) {
    return(
        <>
            <RenderButton setYear={setYear} setTrainees={setTrainees}/>
        </>
    )
}
import { Button, Form, InputGroup } from 'react-bootstrap'
import SearchStyle from './search.module.scss'
import { DropdownButton, Dropdown } from 'react-bootstrap'
import { useState } from 'react'
import { Row, Col} from 'react-bootstrap'
import clsx from 'clsx'
import { Link } from 'react-router-dom'


function SearchBar() {
    return (
        <div className={`${SearchStyle['search-container']}`}>
            <div class="input-group">
                <input type="search" class="form-control" placeholder="Tìm kiếm theo tên" aria-label="Search" aria-describedby="search-addon" />
                <Button className={SearchStyle['gray-btn']}>
                    <i class="fa-solid fa-magnifying-glass"></i>
                </Button>
            </div>
        </div>
    )
}

function RenderButton() {
    
    const [value, changeValue] = useState('Chọn mùa')

    function handleChangeValue(text) {
        changeValue(text)
    }

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
                        <Form.Select defaultValue="Chọn mùa">
                            <option>Chọn mùa...</option>
                            <option>2019</option>
                            <option>2020</option>
                        </Form.Select>
                        <Form.Select defaultValue="Chọn tập">
                            <option>Chọn tập...</option>
                            <option>1</option>
                            <option>2</option>
                        </Form.Select>
                        <Button className={clsx(SearchStyle['gray-btn'])}>
                            Lọc
                            <i class="fa-solid fa-filter ms-2"></i>
                        </Button>
                    </InputGroup>
                </Col>
                <Col>
                    <SearchBar/>
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

export default function RenderAbove() {
    return(
        <>
            <RenderButton/>
        </>
    )
}
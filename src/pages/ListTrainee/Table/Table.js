import { Table } from "react-bootstrap";
import TableStyles from './table.module.scss'
import Rows from './Row'

export default function RenderTable() {
    return (
        <Table className={TableStyles.table}>
            <thead>
                <tr>
                    <th>Họ và tên</th>
                    <th>Ngày sinh</th>
                    <th>Công ty</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <Rows/>
            </tbody>
        </Table>
    )
}
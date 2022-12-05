import { Table } from "react-bootstrap";
import TableStyles from './table.module.scss'
import Rows from './Row'

export default function RenderTable({trainees}) {
    return (
        <Table className={TableStyles.table}>
            <thead>
                <tr>
                    <th>Mã số CCCD</th>
                    <th>Họ và tên</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {/* {console.log(trainees)} */}
                {trainees.map(Rows)}
            </tbody>
        </Table>
    )
}
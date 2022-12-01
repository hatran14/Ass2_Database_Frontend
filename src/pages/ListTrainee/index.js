import MyTable from './Table/Table'
import AboveTable from './AboveComponent/AboveComponent'
import Styles from './style.module.scss'
import PopupDetail from './PopupDetail/PopupDetail'

export default function ListTrainee() {
    return (
        <div className={Styles.container}>
            <AboveTable/>
            <MyTable/>
        </div>
    )
}
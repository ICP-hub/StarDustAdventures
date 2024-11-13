import useDocumentTitle from "../../hooks/useDocumentTitle"

const Exchange=()=>{
    useDocumentTitle('Dashboard | StarDust Adventures')
    return(
        <div className='exchange' style={{backgroundImage:'url("/assets/images/space-exchange-bg.webp"), url("/assets/images/firefly.webp")'}}>
        </div>
    )
}

export default Exchange
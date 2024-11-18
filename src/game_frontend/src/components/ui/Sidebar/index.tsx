import { memo } from 'react'
import './index.css'

const Sidebar=()=>{
    return(
        <aside className="sidebar" tabIndex={0}>
            <div className="sidebar-children" aria-orientation='horizontal'></div>
        </aside>
    )
}

export default Sidebar
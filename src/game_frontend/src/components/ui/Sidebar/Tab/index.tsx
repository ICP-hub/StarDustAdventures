import  { memo } from 'react'
import './index.css'

const SidebarTab = memo(({title, icon} : SideBarChildren) =>{
    // Future Scope
    // const currTab = useRouter().pathname
    // const isActive = currTab === title.toLowerCase()
    return (
        <a role='tab' aria-selected="false" tabIndex={0} className='sidebar-tab-container'>
            <img src={icon} alt={title} title={title}/>
            <p className='sidebar-title'>{title}</p>
        </a>
    )
})

export default SidebarTab
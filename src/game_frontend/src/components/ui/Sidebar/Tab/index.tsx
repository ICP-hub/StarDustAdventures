import  { memo } from 'react'
const SidebarTab = memo(({ children } : SideBarChildren) => {
    return (
        <div role='tab'>
            {children}
        </div>
    )
})
import { memo } from "react";
import { useLocation, Link } from "react-router-dom"; 
import "./index.css";

const SidebarTab = memo(({ title, icon }: SideBarChildren)  => {
    const location = useLocation();
    const isActive = location.pathname === `/${title.toLowerCase()}`;

    return (
        <Link to={`/${title.toLowerCase()}`}>
            <div
                role="tab"
                aria-selected={isActive ? "true" : "false"}
                tabIndex={0}
                className={`sidebar-tab-container ${isActive ? "active" : ""}`}
            >
                <img src={icon} alt={title} title={title} />
                <p className="sidebar-title">{title}</p>
            </div>
        </Link>
    );
});

export default SidebarTab;

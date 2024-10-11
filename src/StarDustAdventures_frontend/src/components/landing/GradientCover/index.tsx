import React from 'react';
import './index.css'
export default function Cover({children} : React.PropsWithChildren<{}>){
    return(
        <div className="gradient-cover">
            <div className="right-purple-pattern">
                <img src="/assets/images/square.svg" alt="purple-pattern" style={{display:'none'}} />
                <div className="square-purple" style={{background:"url('/assets/images/square.svg')"}}></div>
            </div>
            <div className="left-blue-pattern">
                <img src="/assets/images/squares-left.svg" alt="blue-pattern" style={{display:'none'}} />
                <div className="square-blue" style={{background:"url('/assets/images/squares-left.svg')"}}></div>
            </div>
            {children}
        </div>
    )
}
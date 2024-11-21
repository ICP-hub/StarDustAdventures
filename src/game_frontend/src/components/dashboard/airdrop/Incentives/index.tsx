import './index.css'

const INCENTIVES_DETAILS = [
    {
        icon: '🚀',
        points: 100,
        type: 'Passive Income'
    },
    {
        icon: '🎁',
        points: 50,
        type: 'Earn Tasks'
    },
    {
        icon: '🎉',
        points: 25,
        type: 'Friends'
    },
    {
        icon : '🚀',
        points: 0,
        type : 'Acheivements'
    },
    {
        icon : '🔑',
        points : 0,
        type : 'Keys'
    }
] as Array<Incentives>

/**
 * @description Incentive Card UI to show Individual Incentives
 * @params {Incentives}
 * @type {Functional Component}
 */
const IncentiveCard=({icon, points = 0, type} : Incentives)=>{
    return(
        <div role='group' className='incentive-card'>
            {/* Future Scope : Use IMAGES */}
            <p>{icon}</p>
            <div className='incentive-card-type'>
                <p>{type}</p>
                <p>🛸 {points.toString()}</p>
            </div>
        </div>
    )
}

const Incentives=()=>{
    return(
        <div className='incentive-group'>
            {INCENTIVES_DETAILS.map((incentive, index)=>{
                return(
                    <IncentiveCard key={index} {...incentive} />
                )
            })}
        </div>
    )
}
export default Incentives
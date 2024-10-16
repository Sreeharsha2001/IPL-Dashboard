import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard';
import './index.css'

function TeamMatches() {
    const {id} = useParams();
    const [teamMatchDetails, setteamMatchDetails] = useState(null);
    useEffect(()=>{
        fetch (`https://apis.ccbp.in/ipl/${id}`)
        .then(response=>response.json())
        .then(teamMatchDetails=>setteamMatchDetails(teamMatchDetails))
        .catch(error=>console.log('error-teammatches',error))
    },[]);
    
    let colour='';
    switch (id) {
        case 'RCB':
            colour='red';
            break;
        case 'KKR':
            colour='purple'
            break;
        case 'KXP':
            colour='pink'
            break;
        case 'CSK':
            colour='yellow'
            break;
        case 'RR':
            colour='blue'
            break;
        case 'MI':
            colour='darkblue'
            break;
        case 'SH':
            colour='orange'
            break;
        case 'DC':
            colour='blue'
            break;
        default:
            // colour='white'
            break;
    }

    return (
        <div className={`teammatch-container ${colour}`}>
            {teamMatchDetails && 
                <div className='teammatch-keys'>
                    <img style={{backgroundColor:colour}} className='team-main-logo' src={teamMatchDetails.team_banner_url} alt='team-banner'/>
                    <h1 className='latestmatch-heading'>Latest Matches</h1>
                    <div className='latestmatch-main'><LatestMatch latest={teamMatchDetails.latest_match_details}/></div>
                    <div className='matchcard-heading'>
                        {teamMatchDetails.recent_matches.map(eachTeam => <MatchCard  card={eachTeam} key={eachTeam.id}/>)}
                    </div>
                </div>
            }
        </div>
    )
}

export default TeamMatches

import './numbers.css';
import { useEffect,useState } from 'react';
import {FaHandshake} from 'react-icons/fa';
import {TiGroup} from 'react-icons/ti';
import {BsClock} from 'react-icons/bs';
import {AiOutlineTrophy} from 'react-icons/ai';


export default function Numbers({mode}){
    const titleStyle = mode === 'dark' ? { color: 'white' } : {};

    const [trophyCount, setTrophyCount] = useState(0);
    const [hoursCount, setHoursCount] = useState(0);
    const [participantCount , setParticipantCount]=useState(0);

    useEffect(() => {
        const trophyInterval = setInterval(() => {
          if (trophyCount < 8000) {
            setTrophyCount((prevCount) => prevCount + 1);
          }
        }, 0.00000001);
    
        const hoursInterval = setInterval(() => {
          if (hoursCount < 48) {
            setHoursCount((prevCount) => prevCount + 1);
          }
        }, 10);
    
        return () => {
          clearInterval(trophyInterval);
          clearInterval(hoursInterval);
        };
      }, [trophyCount, hoursCount]);
      
      useEffect(() => {
        const fetchParticipantCount = async () => {
          try {
            const response = await fetch('http://localhost:5000/api/participantCount');
            console.log("response", response);
            const data = await response.json();
            console.log(data);
            setParticipantCount(data.count);
          } catch (error) {
            console.error('Failed to fetch participant count:', error);
          }
        };
      
        fetchParticipantCount();
      }, []);

    return(
        <div className="numbersContainer">
            <div className="numbersTitle" style={titleStyle}>Numbers</div>
            <div className="numberElement">
                <div className='myelement'>
                    <div className="groupIcon" ><TiGroup/></div>
                    <div className='text'>
                      <div className="groupText1">{participantCount}</div>
                      <div className="groupText2">Participants</div>
                    </div>
                </div>
                <div className='myelement'>
                    <div className="trophyIcon" ><AiOutlineTrophy/></div>
                    <div className='text'>
                      <div className="trophyText1">+{trophyCount} DT</div>
                      <div className="trophyText2">Prizes</div>
                    </div>
                </div>
                <div className='myelement'>
                    <div className="handIcon" ><FaHandshake/></div>
                    <div className='text'>
                      <div className="handText1">2</div>
                      <div className="handText2">Partners</div>
                    </div>
                </div>
                <div className='myelement'>
                    <div className="clockIcon" ><BsClock/></div>
                    <div className='text'>
                      <div className="clockText1">{hoursCount}</div>
                      <div className="clockText2">Hours</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
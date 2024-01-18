import './partners.css';
import { AiFillGithub, AiFillFacebook, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import eura from '../assets/eura.png';
import value from '../assets/value.jpg';
export default function Partners(mode){
    const titleStyle = mode === 'dark' ? { color: 'white' } : {};
    return(
        <div className="partnersContainer">
            <h1 className='partnersTitle' style={titleStyle}>Our Partners</h1>
            <div className="cardsContainer">
                <div className="card">
                    <div className="boxUp">
                        <img alt='' src={eura} className='partnerLogo'/>
                        <p className='partnerName'>EURA<br></br>NOVA</p>
                        <p className='partnerPara'>Hello, I am a software engineer with over 5 years 
                            of experience in web development. I specialize 
                            in building scalable,high-performance 
                            web applications
                        </p>
                        <div className="partnerContact">
                            <div className="logo1"><AiFillGithub /></div>
                            <div className="facebookLogo"><AiFillFacebook /></div>
                            <div className="instagramLogo"><AiFillInstagram /></div>
                            <div className="linkedinLogo"><AiFillLinkedin /></div>
                        </div>
                    </div>
                    <div className="boxUnderneath"></div>
                </div>
                <div className="card">
                    <div className="boxUp">
                        <img alt='' src={value} className='partnerLogo'/>
                        <p className='partnerName'>Value<br></br>Digital Services</p>
                        <p className='partnerPara'>Hello, I am a software engineer with over 5 years 
                            of experience in web development. I specialize 
                            in building scalable,high-performance 
                            web applications
                        </p>
                        <div className="partnerContact">
                            <div className="logo1"><AiFillGithub /></div>
                            <div className="facebookLogo"><AiFillFacebook /></div>
                            <div className="instagramLogo"><AiFillInstagram /></div>
                            <div className="linkedinLogo"><AiFillLinkedin /></div>
                        </div>
                    </div>
                    <div className="boxUnderneath"></div>
                </div>
            </div>
        </div>
    )
}
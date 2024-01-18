import './circle.css';


export default function Circle({value,title}){



    return(
        <div className="cicleContainer">
            <span ><div className="circle">{value.toString().padStart(2, '0')}</div></span>
            <h1 className="circleTitle">{title}</h1>
        </div>
    )

}
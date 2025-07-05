export default function Text ({title,description,textColor,headColor,secondDes}){
    return(
        <div>
            <h5 className={`${headColor} text-3xl font-bold`}>{title}</h5>
            <p className={`${textColor} text-xl`}>{description}</p>
            <p className={`${textColor} text-xl`}>{secondDes}</p>
        </div>
    )
}
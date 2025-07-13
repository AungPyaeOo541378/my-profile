export default function Text ({title,description,textColor,headColor,secondDes,br = false ,rBgColor}){
    return(
        <div>
            <h5 className={`${headColor} text-3xl font-bold`}>{title}</h5>
            {br && <br/>}
            <p className={`${textColor} text-xl`}>{description}</p>
            {br && <br/>}
            <p className={`${textColor} text-3xs`}>{secondDes}</p>
            
        </div>
    )
}
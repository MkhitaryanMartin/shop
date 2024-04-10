import "./style.scss";

export default function List({list, className="", title}){
    return (
        <ul className={`list ${className}`}>
            <li className="list__li"><a href="#" >{title}</a></li>
            {
                list.map((item)=>{
                    return  <li key={item}><a href="#" >{item}</a></li>
                })
            }
        </ul>
    )
}
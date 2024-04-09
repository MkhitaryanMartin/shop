export default function List({list, className=""}){
    return (
        <ul className={className}>
            {
                list.map((item)=>{
                    return  <li key={item}><a href="#" >{item}</a></li>
                })
            }
        </ul>
    )
}
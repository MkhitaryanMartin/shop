export default function List({list, className=""}){
    return (
        <ul className={className}>
            {
                list.map((item)=>{
                    return  <li><a href="#" key={item}>{item}</a></li>
                })
            }
        </ul>
    )
}
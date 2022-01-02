
import Cardmov from "./Card"


 function List ({moviedata,search,rating}) {

return (
<div className='container'>

{moviedata.filter(el=>el.title.toUpperCase().includes(search.toUpperCase())&&(el.rate>=rating)).map((el)=><Cardmov el={el}  key={el.id} /> )}

</div>


)




 }

 export default List; 
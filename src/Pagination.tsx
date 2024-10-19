import { useEffect, useState } from "react"
import { IProduct, IProps } from "./types"
import { getProducts } from "./api";

export const Pagination = ({limit}:IProps) => {
    const [all,setAll] = useState<IProduct[]>([]);
    const [show,setShow] = useState<IProduct[]>([]);
    const [activePage, setActivePage] = useState<number>(1);
    const [pages,setPages] = useState<number[]>([])

    useEffect(()=>{
      getProducts()
      .then(response=>{
        console.log(response)
        setAll(response)
        setShow(response.slice(0,limit))
        setPages(new Array(Math.ceil(response.length / limit)).fill(0))
      })
    },[])

    useEffect(()=>{
      const start = (activePage-1) * limit;
      const end = start + limit;
      setShow(all.slice(start,end));
    },[activePage])
    
    
  return (
    <>
       <div className="list">
        {
          show.map(product=>{
            return  <div key={product.id}>{product.title}  - {product.price} AMD</div>
          })
        }
      </div>
      <div className="pages">
         <button disabled={activePage == 1} onClick={()=> setActivePage(activePage - 1)}>Prev</button>
         {
            pages.map((__,i)=>{
                const style = activePage == i + 1 ? "active" : ""
                return  <button 
                          className={style} 
                          onClick={()=>setActivePage(i+1)} 
                          key={i}>{i+1}
                        </button>
                
            })
         }
         <button disabled={activePage == pages.length} onClick={()=> setActivePage(activePage +1)}>Next</button>
      </div>
    </>
  )
}


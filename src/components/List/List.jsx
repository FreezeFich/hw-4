import './List.scss'
import {useState} from 'react'
import Data from '../Data/Data'
import Modal from '../Modal/Modal'


function List() {
  const [query, setQuery] = useState("");
  const [currentProduct, setCurrentProduct] = useState("");
  const [modalActive, setModalActive] = useState(true)
  const handleProduct = (product) => {
    setCurrentProduct(product)
    setModalActive(true)
  }

  return (  
      <div className='main-wrapper'>
        <div className="header">
        <input type="text" placeholder='Search...' className='search' onChange={(e) => setQuery(e.target.value)}/>
        </div>
      <div className='list'>

        {Data.filter((product)=>product.title.includes(query)).map((product) => (
            <div className='table-row' key={product.title} onClick={() => handleProduct(product)}>
                <div className="cell"> 
                    <div className="product-title">{product.title}</div>
                    <div className="product-category">{product.category}</div>
                    <div className="product-image"><img src={product.image} alt="" /></div>
                </div>
            </div>
        ))}
      </div>
      {currentProduct && 
        <Modal active={modalActive} setActive={setModalActive} currentProduct={currentProduct}/>
      }      
      </div>
    );
  }

  
  export default List
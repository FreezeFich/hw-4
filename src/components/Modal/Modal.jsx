import React from "react"
import "./Modal.scss"

const Modal = ({currentProduct, active, setActive}) => {

    return(
        <div className = {active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className="modal-content" onClick={(e)=>e.stopPropagation()}> 
                <img src={currentProduct.image} className="modal-image"></img>
                <div>
                <p className="title">{currentProduct.title}</p>
                    <div className="modal-text">
                        <p className="description">{currentProduct.description}</p>
                        <p className="category">{currentProduct.category}</p>
                        <p className="price">Price:{currentProduct.price}$</p>
                    </div>

  
                </div>
                <img src="https://cdn-icons-png.flaticon.com/512/1828/1828778.png" alt="" className="cross-icon" onClick={() => setActive(false)}/>
            </div>
        </div>
    )

}


export default Modal;
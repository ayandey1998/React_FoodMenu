import React, { useState } from "react";
import Food from "./Food";

const Item = () =>{

    const [data, setItem] = useState(Food);

    const filterItem = ((catelem) =>{
        const updateItem = Food.filter((currelem) =>{
            return currelem.category === catelem;
        })

        setItem(updateItem);
    })

    return(
        <>
            <div className="container-fluid">
                <h4 className="text-center pt-3">Food Menu Item</h4><hr></hr>

                <div className="row">
                    <div className="col-12 d-flex justify-content-center menu-btn">
                        <button className="btn btn-warning" onClick={() => setItem(Food)}>All Food</button>
                        <button className="btn btn-warning" onClick={() => filterItem('Fast Food')}>Fast Food</button>
                        <button className="btn btn-warning" onClick={() => filterItem('Break Fast')}>Break Fast</button>
                        <button className="btn btn-warning" onClick={() => filterItem('Lunch')}>Lunch</button>
                        <button className="btn btn-warning" onClick={() => filterItem('Dinner')}>Dinner</button>
                        <button className="btn btn-warning" onClick={() => filterItem('Veg')}>Veg</button>
                        <button className="btn btn-warning" onClick={() => filterItem('Non Veg')}>Non Veg</button>
                        <button className="btn btn-warning" onClick={() => filterItem('Tea')}>Tea</button>
                        <button className="btn btn-warning" onClick={() => filterItem('Coffee')}>Coffee</button>
                    </div>
                </div>

                <div className="row mt-4 mb-5">
                    {
                        data.map((elem) =>{
                            const{name,category,img,price} = elem;
                            return(
                                <div className="col-12 col-md-3 mt-3">
                                    <div className="menu-item">
                                        <div className="left-area">
                                            <img src={img} alt={img} height={'120px'} width={'100%'}></img>
                                        </div>
                                        <div className="right-area">
                                            <h3>{name}</h3>
                                            <span>{category}</span>

                                            <div className="btn d-flex">
                                                <h6>Price : {price}</h6>
                                                <a href="">
                                                    <button className="badge badge-success">Order Now</button>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Item
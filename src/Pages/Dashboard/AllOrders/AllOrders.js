import React, { useEffect, useState } from 'react';
import Item from './Item/Item';

const AllOrders = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/orders/all')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }, []);

    const handleDeleteOrder = (id) => {
        const proceed = window.confirm('Are you sure, you want to Delete?');
        if (proceed) {
            const url = `http://localhost:5000/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('Succesfully Deleted')
                        const remainingOrders = products.filter(item => item._id !== id);
                        setProducts(remainingOrders);
                    }
                })
        }
    }

    return (
        <div style={{minHeight: '70vh'}}>
            {
                products.map(item => <Item key={item._id} handleDeleteOrder={handleDeleteOrder} item={item}></Item>)
            }
        </div>
    );
};

export default AllOrders;
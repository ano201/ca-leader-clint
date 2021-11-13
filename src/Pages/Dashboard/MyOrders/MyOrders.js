import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import Items from './Items/Items';

const MyOrders = () => {

    const {user} = useAuth();
    const [orderedList, setOrderedList] = useState([]);
    useEffect(() => {
        fetch(`https://young-depths-96533.herokuapp.com/orders?email=${user.email}`)
            .then(res => res.json())
            .then(data => setOrderedList(data))
    }, [user.email])

    const handleCancelOrder = (id) => {
        const proceed = window.confirm('Are you sure, you want to cancel?');
        if (proceed) {
            const url = `https://young-depths-96533.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('Succesfully Canceled')
                        const remainingOrders = orderedList.filter(item => item._id !== id);
                        setOrderedList(remainingOrders);
                    }
                })
        }
    }

    return (
        <div style={{minHeight: '70vh'}}>
            {
                orderedList?.length < 1 && <h1>You didn't anything order yet!!!</h1>
            }
            {
                orderedList.map(item => <Items item={item} handleCancelOrder={handleCancelOrder} key={item._id}></Items>)
            }
        </div>
    );
};

export default MyOrders;
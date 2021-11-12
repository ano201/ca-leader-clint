import React from 'react';
import { Container } from 'react-bootstrap';
import {
    Switch,
    Route,
    useRouteMatch,
    Link
} from "react-router-dom";
import useAuth from '../../../Hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import AllOrders from '../AllOrders/AllOrders';
import DashboardHome from '../DashboardHome/DashboardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import MyOrders from '../MyOrders/MyOrders';
import Pay from '../Pay/Pay';

const Dashboard = () => {
    const { admin } = useAuth();
    let { path, url } = useRouteMatch();
    const cStyle = 'text-decoration-none ms-2 text-secondary hdark border border-2 fw-bold';
    return (
        <>
            <Navigation></Navigation>
            <Container>
                <Link className={cStyle} to={`${url}`}>Dashboard</Link>
                <Link className={cStyle} to={`${url}/myOrders`}>My Orders</Link>
                <Link className={cStyle} to={`${url}/pay`}>Pay</Link>
                {admin && <>
                    <Link className={cStyle} to={`${url}/allOrders`}>Manage Orders</Link>
                    <Link className={cStyle} to={`${url}/makeAdmin`}>Make Admin</Link>
                </>}
                <Switch>
                    <Route exact path={path}>
                        <DashboardHome></DashboardHome>
                    </Route>
                    <Route path={`${path}/myOrders`}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route path={`${path}/pay`}>
                        <Pay></Pay>
                    </Route>
                    <Route path={`${path}/allOrders`}>
                        <AllOrders></AllOrders>
                    </Route>
                    <Route path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </Route>
                </Switch>
            </Container >
            <Footer></Footer>
        </>
    );
};

export default Dashboard;
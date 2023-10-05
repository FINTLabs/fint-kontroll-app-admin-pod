import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {ResourceInfoComponent} from "../features/resources/resource-info-component";
import {AdminResourcesLandingComponent} from "../features/admin-resources-landing/admin-resources-landing.component";

const RouteList = () => {
    return (
        <Routes>
            <Route path="/" element={<AdminResourcesLandingComponent/>}/>
            <Route path={`/:id`} element={<ResourceInfoComponent/>}/>
        </Routes>
    )
}

export default RouteList;
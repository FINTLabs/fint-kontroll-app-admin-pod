import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {ResourcesInfoComponent} from "../features/resources/resource-info-component";
import {AdminResourcesLandingComponent} from "../features/main/admin-resources-landing.component";

const RouteList = () => {
    return (
        <Routes>
            <Route path="/" element={<AdminResourcesLandingComponent/>}/>
            <Route path={`/info/:id`} element={<ResourcesInfoComponent/>}/>
        </Routes>
    )
}

export default RouteList;
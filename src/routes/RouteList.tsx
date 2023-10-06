import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {ResourcesInfoComponent} from "../features/resources/resource-info-component";
import {AdminResourcesLandingComponent} from "../features/main/admin-resources-landing.component";

const RouteList = () => {
    return (
        <Routes>
            <Route path="/app-admin" element={<AdminResourcesLandingComponent/>}/>
            <Route path="/app-admin/info/:id" element={<ResourcesInfoComponent/>}/>
        </Routes>
    )
}

export default RouteList;
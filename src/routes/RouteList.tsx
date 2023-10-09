import React, {useContext} from 'react';
import {Route, Routes} from 'react-router-dom';
import {ResourcesInfoComponent} from "../features/resources/resource-info-component";
import {AdminResourcesLandingComponent} from "../features/main/admin-resources-landing.component";
import {ResourceContext} from "../Context/resources-context";

const RouteList = () => {
    const {basePath} = useContext(ResourceContext);

    return (
        <Routes>
            <Route path={`${basePath}/app-admin`} element={<AdminResourcesLandingComponent/>}/>
            <Route path={`${basePath}/app-admin/info/:id`} element={<ResourcesInfoComponent/>}/>
        </Routes>
    )
}

export default RouteList;
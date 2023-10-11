import React, {useContext} from 'react';
import {Route, Routes} from 'react-router-dom';
import {AdminResourcesLandingComponent} from "../features/main/admin-resources-landing.component";
import {ResourceContext} from "../Context/resources-context";
import {AdminResourceInfoComponent} from "../features/main/admin-resource-info.component";

const RouteList = () => {
    const {basePath} = useContext(ResourceContext);

    return (
        <Routes>
            <Route path={`${basePath}/app-admin`} element={<AdminResourcesLandingComponent/>}/>
            <Route path={`${basePath}/app-admin/info/:id`} element={<AdminResourceInfoComponent/>}/>
        </Routes>
    )
}

export default RouteList;
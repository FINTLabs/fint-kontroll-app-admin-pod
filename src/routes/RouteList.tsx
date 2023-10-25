import React, {useContext} from 'react';
import {Route, Routes} from 'react-router-dom';
import {AdminResourcesLanding} from "../features/main/admin-resources-landing";
import {ResourceContext} from "../Context/resources-context";
import {AdminResourceInfo} from "../features/main/admin-resource-info";

const RouteList = () => {
    const {basePath} = useContext(ResourceContext);

    return (
        <Routes>
            <Route path={`${basePath}/app-admin`} element={<AdminResourcesLanding/>}/>
            <Route path={`${basePath}/app-admin/info/:id`} element={<AdminResourceInfo/>}/>
        </Routes>
    )
}

export default RouteList;
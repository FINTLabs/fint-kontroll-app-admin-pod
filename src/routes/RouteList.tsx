import React, {useContext} from 'react';
import {Route, Routes} from 'react-router-dom';
import {AdminResourcesLanding} from "../features/main/adminResourcesLanding";
import {ResourceContext} from "../Context/resourcesContext";
import {AdminResourceInfo} from "../features/main/adminResourceInfo";

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
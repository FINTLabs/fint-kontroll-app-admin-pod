import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {ResourcesTableComponent} from "../features/resources/resources-table.componet";
import {ResourceInfoComponent} from "../features/resources/resource-info-component";

const RouteList = () => {
    return (
        <Routes>
            <Route path="/" element={<ResourcesTableComponent/>}/>
            <Route path={`/:id`} element={<ResourceInfoComponent/>}/>
        </Routes>
    )
}

export default RouteList;
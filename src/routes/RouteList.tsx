import {Route, Routes} from 'react-router-dom';
import {AdminResourceInfo} from "../features/adminResourceInfo";
import {ResourceInfo} from "../features/resources";
import NotFound from "../404";
import {useGeneral} from "../Context";

const RouteList = () => {
    const {basePath} = useGeneral();

    return (
        <Routes>
            <Route path={`${basePath}/app-admin`} element={<AdminResourceInfo />}/>
            <Route path={`${basePath}/app-admin/info/:id`} element={<ResourceInfo />}/>

            {/*404-page*/}
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default RouteList;
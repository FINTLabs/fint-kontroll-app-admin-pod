import axios from "axios";
import {IConfiguration, IResource, IResourcePage} from "../Context/types";

const getBaseUrl = () => {
    return axios.get<IConfiguration>('api/layout/configuration');
}

const getResources = (basePath: string) => {
    const url = `${basePath === '/' ? '' : basePath}/api/resources`;
    return axios.get<IResource[]>(url);
}
const getResourceById = (uri: string) => axios.get<IResource>(uri);

const getResourcePage =
    (basePath: string, currentPage: number, itemsPerPage: number, userType: string, organisationUnitId: number[],
     searchString: string, isAggregated: boolean) => {
        const baseUrl = `${basePath === '/' ? '' : basePath}/api/resources`;
        let queryParams = [];

        const sanitizedQueryString = searchString.trim();
        if (sanitizedQueryString.length !== 0) {
            queryParams.push(`search=${searchString}`);
        }

        if (userType) {
            queryParams.push(`userType=${userType}`);
        }

        if (isAggregated) {
            queryParams.push(`aggroles=${isAggregated}`);
        }

        if (organisationUnitId && organisationUnitId.length > 0) {
            queryParams.push(`orgUnits=${organisationUnitId}`);
        }

        if (currentPage) {
            queryParams.push(`page=${currentPage-1}`);
        }

        if (itemsPerPage) {
            queryParams.push(`size=${itemsPerPage}`);
        }

        const url = `${baseUrl}${queryParams.length > 0 ? '?' : ''}${queryParams.join('&')}`;

        return axios.get<IResourcePage>(url);
    }

const ResourceRepository = {
    getBaseUrl,
    getResources,
    getResourcePage,
    getResourceById
};

export default ResourceRepository;
const getBaseUrl = () => {
    return fetch('api/layout/configuration');
}

const getResources = (basePath: string) => {
    const url = `${basePath === '/' ? '' : basePath}/api/resources`;
    return fetch(url);
}
const getResourceById = (uri: string) => fetch(uri);

const getResourcePage =
    (basePath: string, resourcePage: number, userType: string, organisationUnitId: number[],
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

        if (resourcePage) {
            queryParams.push(`resourcePage=${resourcePage}`);
        }

        const url = `${baseUrl}${queryParams.length > 0 ? '?' : ''}${queryParams.join('&')}`;

        return fetch(url);
    }

const ResourceRepository = {
    getBaseUrl,
    getResources,
    getResourcePage,
    getResourceById
};

export default ResourceRepository;
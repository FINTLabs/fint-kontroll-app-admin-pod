import {useState} from "react";
import {Search} from "@navikt/ds-react";


export const ResourcesSearchComponent = () => {
    const [searchString, setSearchString] = useState("")

    const handleSearch = () => {
        console.log(searchString)
    }

    return (
        <form onSubmit={event => {
            event.preventDefault()
            handleSearch()
        }}>
            <Search
                onChange={event => setSearchString(event)}
                label="Søk i ressurser"
                variant="simple"
                hideLabel={false}
            />
        </form>
    )
}
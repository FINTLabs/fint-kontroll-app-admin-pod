import {useState} from "react";
import {Search} from "@navikt/ds-react";


export const ResourcesSearch = () => {
    const [searchString, setSearchString] = useState("")

    const handleSearch = () => {
        console.log(searchString) // When search or filter is used, implement a proper handler for this
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
import React from 'react';
import RouteList from "./routes/RouteList";
import ResourceProvider from "./Context/resourcesContext";

function App() {
    return (
        <ResourceProvider>
            <RouteList />
        </ResourceProvider>
    );
}

export default App;

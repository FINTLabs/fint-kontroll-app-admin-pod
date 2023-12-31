import React from "react";
import RouteList from "./routes/RouteList";
import ResourceProvider from "./Context/resourcesContext";
import { useGeneral } from "./Context";
import { LoaderStyled } from "./atoms/LoaderCentered";

function App() {
	const { basePath, isLoading } = useGeneral();

	if (isLoading || !basePath) {
		return <LoaderStyled size={"3xlarge"} />;
	}

	return (
		<ResourceProvider basePath={basePath}>
			<RouteList />
		</ResourceProvider>
	);
}

export default App;

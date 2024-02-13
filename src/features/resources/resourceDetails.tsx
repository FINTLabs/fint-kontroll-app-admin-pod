import { BodyShort, Box, Heading } from "@navikt/ds-react";
import styled from "styled-components";
import { IResource } from "../../Context/types";

const ListStyled = styled.ul`
	display: flex;
	flex-flow: row wrap;
	list-style: none;

	li {
		width: 50%;
		margin-bottom: 1rem;
	}

	li:last-child,
	li:nth-last-child(2) {
		margin: 0;
	}
`;

interface ResourceInfoProps {
	resourceDetails: IResource;
}

export const ResourceDetails = ({ resourceDetails }: ResourceInfoProps) => {
	const {
		resourceId,
identityProviderGroupName,
		accessType,
		applicationAccessRole,
		applicationAccessType,
		platform,
		//resourceLimit,
		resourceName,
		resourceType,
		resourceOwnerOrgUnitName,
		validForRoles,
	} = resourceDetails;

	return (
		<div>
			<Box borderWidth={"1"} padding={"4"}>
				<Heading size="large" level="2">
					{resourceName}
				</Heading>

				<ListStyled id="resource-info">
					<li>
						<Heading size="xsmall" level="3">
							Ressurs ID
						</Heading>
						<BodyShort textColor="subtle">{resourceId}</BodyShort>
					</li>

					<li>
						<Heading size="xsmall" level="3">
							Tilgangstype
						</Heading>
						<BodyShort textColor="subtle">{accessType}</BodyShort>
					</li>
					<li>
						<Heading size="xsmall" level="3">
							Gruppenavn Entra ID
						</Heading>
						<BodyShort textColor="subtle">{identityProviderGroupName}</BodyShort>
					</li>
					{/*<li>
						<Heading size="xsmall" level="3">
							Total antall til tildeling
						</Heading>
						<BodyShort textColor="subtle">
							{resourceLimit}
						</BodyShort>
					</li>*/}
					<li>
						<Heading size="xsmall" level="3">
							Ressurstype
						</Heading>
						<BodyShort textColor="subtle">{resourceType}</BodyShort>
					</li>
					{/*<li>
						<Heading size="xsmall" level="3">
							Antall brukt av denne ressursen
						</Heading>
						<BodyShort textColor="subtle">
							{resourceLimit}
						</BodyShort>
					</li>*/}
					<li>
						<Heading size="xsmall" level="3">
							Applikasjonstilgangstype
						</Heading>
						<BodyShort textColor="subtle">
							{applicationAccessType}
						</BodyShort>
					</li>
					<li>
						<Heading size="xsmall" level="3">
							Plattform
						</Heading>
						<BodyShort textColor="subtle">
							{platform.map((element: string, i: number) => {
								if (platform.length > i + 1) {
									return `${element}, `;
								} else {
									return element;
								}
							})}
						</BodyShort>
					</li>
					<li>
						<Heading size="xsmall" level="3">
							Tilgangsrolle
						</Heading>
						<BodyShort textColor="subtle">
							{applicationAccessRole}
						</BodyShort>
					</li>
					<li>
						<Heading size="xsmall" level="3">
							Ressurseier
						</Heading>
						<BodyShort textColor="subtle">
							{resourceOwnerOrgUnitName}
						</BodyShort>
					</li>
					<li>
						<Heading size="xsmall" level="3">
							Tilgangstype
						</Heading>
						<BodyShort textColor="subtle">{accessType}</BodyShort>
					</li>
					<li>
						<Heading size="xsmall" level="3">
							Gyldig for rolle
						</Heading>
						<BodyShort textColor="subtle">
							{validForRoles.map((role) => role)}
						</BodyShort>
					</li>
				</ListStyled>
			</Box>
		</div>
	);
};

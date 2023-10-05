import { createServer, Model } from "miragejs"

export function makeServer({ environment = "test" } = {}) {
    let server = createServer({
        environment,

        models: {
            resources: Model
        },

        seeds(server) {
            server.create("resource", {
                    id: 1,
                    resourceId: "adobek12",
                    resourceName: "Adobe K12 Utdanning",
                    resourceType: "ApplicationResource",
                    resourceLimit: 1000
                },
                {
                    id: 2,
                    resourceId: "msproject",
                    resourceName: "Microsoft Project Enterprise",
                    resourceType: "ApplicationResource",
                    resourceLimit: 100
                }
            )

            server.create("resource", {
                id: 1,
                resourceId: "adobek12",
                resourceName: "Adobe K12 Utdanning",
                resourceType: "ApplicationResource",
                applicationAccessType: "ApplikasjonTilgang",
                applicationAccessRole: "Full access",
                platform: [
                    "WIN",
                    "Linux"
                ],
                accessType: "device",
                resourceLimit: 1000,
                resourceOwnerOrgUnitId: "6",
                resourceOwnerOrgUnitName: "KOMP Utdanning og kompetanse",
                validForOrgUnits: [
                    {
                        id: 45,
                        resourceId: "adobek12",
                        orgunitId: "194",
                        orgUnitName: "VGMIDT Midtbyen videregående skole",
                        resourceLimit: 100
                    },
                    {
                        id: 46,
                        resourceId: "adobek12",
                        orgunitId: "198",
                        orgUnitName: "VGSTOR Storskog videregående skole",
                        resourceLimit: 200
                    }
                ],
                validForRoles: [
                    "student"
                ]
            })
        },

        routes() {
            this.namespace = "api/resources"
            this.get("/", (schema) => {
                return schema.resources.all()
            })

            this.get("/resource/info/:id", (schema) => {
                return schema.resources.all()
            })
        },
    })

    return server
}
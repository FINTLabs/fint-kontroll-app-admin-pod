import { createServer, Model } from "miragejs"

export function makeServer({ environment = "test" } = {}) {
    let server = createServer({
        environment,

        models: {
            users: Model,
        },

        seeds(server) {
            server.create("user", {
                name: "Bob" ,
                age: "22"
            })
            server.create("user", {
                name: "Alice",
                age: "20"
            })
        },

        routes() {
            this.namespace = "api/users"

            this.get("/", (schema) => {
                return schema.users.all()
            })
        },
    })

    return server
}
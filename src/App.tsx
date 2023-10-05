import React, {useEffect, useState} from 'react';
import {Button, Table} from "@navikt/ds-react";

interface User {
    name: String
}

function App() {
    const [isLoading, setIsLoading] = useState(true)
    const [users, setUsers] = useState<User[]>([])

    useEffect(() => {
        getUsers()
        setIsLoading(false)
    }, [])

    const getUsers = () => {
        fetch('api/users')
            .then(res => res.json())
            .then((data) => setUsers(data.users))
            .catch(e => console.log(e))
    }

    if(isLoading) {
        return <div>Loading...</div>
    }

    console.log(users)

    return (
        <div className="App">
            <header className="App-header">
                <Button>Testknapp</Button>
            </header>

            <Table>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell scope="col">Navn</Table.HeaderCell>
                        <Table.HeaderCell scope="col">Dato</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {users.map((user: User, i) => {
                        return (
                            <Table.Row key={i}>
                                <Table.DataCell>{user.name}</Table.DataCell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
        </div>
    );
}

export default App;

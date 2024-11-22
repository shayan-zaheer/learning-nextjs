"use client";
import { List, ListItem, Card } from "@material-tailwind/react";

function AllUsers({users}) {
  return (
    <div>{users && users.map(user => {
        return <Card key={user.id} className="mb-4">
            <List>
                <ListItem>
                    {user.name}
                </ListItem>
            </List>
        </Card>
    })}</div>
  )
}

export default AllUsers
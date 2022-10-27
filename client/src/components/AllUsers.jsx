import React, { useEffect, useState } from 'react'
import {Table, TableHead, TableBody, TableRow, TableCell, styled, Button} from '@mui/material'
import { getUser, deleteUser } from '../service/api.js'
import { Link } from 'react-router-dom'

const TableStyle = styled(Table)`
    width:90%;
    margin: 50px auto 0 auto;
`
const Thead = styled(TableRow)`
    background:#000000;
    & > th {
        color:#fff;
        font-size:20px;
        align:center;
    }
`

const TBody = styled(TableRow)`
    & > td {
        font-size: 20px;

    }
`

const AllUsers = () => {
    const [users, setusers] = useState([])

    useEffect(() => {
        getAllUsers();
    }, []);

    const getAllUsers = async () => {
        const data = await getUser();
        setusers(data.data); 
    }

    const delUser = async (id) => {
        await deleteUser(id);
        getAllUsers();
    }
    
    return (
        <TableStyle>
            <TableHead>
                <Thead>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell></TableCell>
                </Thead>
            </TableHead>
            <TableBody>
                {
                    users.map((user) => (
                        <TBody key={user._id}>
                            <TableCell>{user._id}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.username}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.phone}</TableCell>
                            <TableCell style={{width:180}}>
                                <div style={{display:'flex', justifyContent:'space-between'}}>
                                    <Button variant="contained" component={Link} to={`/edituser/${user._id}`}>Edit</Button>
                                    <Button variant="contained" color="secondary" onClick={() => delUser(user._id)}>Delete</Button>
                                </div>
                            </TableCell>
                        </TBody>
                    ))
                }
            </TableBody>
        </TableStyle>
    )
}

export default AllUsers

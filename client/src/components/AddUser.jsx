import React, { useState } from 'react'
import { TextField, FormGroup, FormControl, Button , Typography, styled } from '@mui/material'
import {addUser} from '../service/api'
import { useNavigate } from 'react-router-dom'
const Container = styled(FormGroup)`
    width:50%;
    margin:5% auto 0 auto;
    & > div {
        margin-top:20px;
    }
`

const defaultValue = {
    name : '',
    username: '',
    email: '',
    phone: '',
}

const AddUser = () => {
    const [user, setuser] = useState(defaultValue);
    
    const navigate = useNavigate();

    const handleChange = (e) => { 
        setuser({...user, [e.target.name]:e.target.value})
    }

    const addUserDetails = async () => {
        await addUser(user)
        navigate('/allusers')
    }

    return (
        <Container>
            <Typography variant='h4'>Add User</Typography>
            <FormControl>
                <TextField id='outlined-required'  label='Name' onChange={(e)=>{handleChange(e)}} name='name'/>
                {/* <InputLabel id='outline-required'>Name</InputLabel> */}
                {/* <Input /> */}
            </FormControl>
            <FormControl>
                <TextField id='outlined-required'  label='Username' onChange={(e)=>{handleChange(e)}} name='username'/>
            </FormControl>
            <FormControl>
                <TextField id='outlined-required'  label='Email' onChange={(e)=>{handleChange(e)}} name='email' />
            </FormControl>
            <FormControl>
                <TextField id='outlined-required'  label='Phone' onChange={(e)=>{handleChange(e)}} name='phone'/>
            </FormControl>
            <FormControl>
                <Button variant='contained' onClick={addUserDetails}>Add User</Button>
            </FormControl>
        </Container>
    )
}

export default AddUser

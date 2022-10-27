import React, { useState, useEffect } from 'react'
import { TextField, FormGroup, FormControl, Button , Typography, styled } from '@mui/material'
import { editUser, getUserSingle} from '../service/api'
import { useNavigate, useParams } from 'react-router-dom'


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

const EditUser = () => {
    const [user, setuser] = useState(defaultValue);
    const { id } = useParams();

    useEffect(() => {
        loadUserDetails();
    }, [])
    
    const loadUserDetails = async () => {
        const response = await getUserSingle(id);
        setuser(response.data[0]);
    } 
    
    
    const navigate = useNavigate();
    
    const handleChange = (e) => { 
        setuser({...user, [e.target.name]:e.target.value})
    }

    const editUserDetails = async () => {
        await editUser(user, id)
        navigate('/allusers')
    }

    return (
        <Container>
            <Typography variant='h4'>Edit User</Typography>
            <FormControl>
                {/* <InputLabel>Name</InputLabel>
                <Input onChange={(e)=>{handleChange(e)}} name='name' value={user.name}/> */}
                <TextField value={user.name} label="Name" id='outlined-required' onChange={(e)=>{handleChange(e)}} name='name'/>
            </FormControl>
            <FormControl>
                <TextField value={user.username} id='outlined-required'  label='Username' onChange={(e)=>{handleChange(e)}} name='username'/>
            </FormControl>
            <FormControl>
                <TextField value={user.email} id='outlined-required'  label='Email' onChange={(e)=>{handleChange(e)}} name='email' />
            </FormControl>
            <FormControl>
                <TextField value={user.phone} id='outlined-required'  label='Phone' onChange={(e)=>{handleChange(e)}} name='phone'/>
            </FormControl>
            <FormControl>
                <Button variant='contained' onClick={editUserDetails}>Edit User</Button>
            </FormControl>
        </Container>
    )
}

export default EditUser;

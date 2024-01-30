import React, { useEffect, useState } from 'react';
import { FaRegFaceLaughWink } from "react-icons/fa6";
import { FaBook } from "react-icons/fa";
import { GrChapterAdd } from "react-icons/gr";
import { Input, Button } from 'antd-mobile';
import { FaRegUserCircle } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import {actions} from '../../slices/header'
const Login = () => {
    const dispath = useDispatch();
    useEffect(()=>{
        dispath(actions.hidden());
    },[])
    const nav =  useNavigate();
    const [form, setForm] = useState({
        username: '',
        password: ''
    })
    return (
        <div>
            <div className='flex justify-center mt-8'>
                <FaRegFaceLaughWink size={100} />
            </div>
            <div className='px-8 mt-8'>
                <h2 className='py-4 text-4xl font-bold'>
                    Login
                </h2>
                <div className='mt-6'>
                    <section className='flex space-x-2 items-center'>
                        <FaRegUserCircle />
                        <p className='text-xl text-primary'>User name</p>
                    </section>
                    <div className='border-2 py-4 px-2 rounded-md mt-2'>
                        <Input
                            placeholder='Please enter the book title'
                            value={form.username}
                            onChange={val => {
                                setForm(item => ({ ...item, username: val }))
                            }}
                        />
                    </div>
                </div>
                <div className='mt-6'>
                    <section className='flex space-x-2 items-center'>
                        <RiLockPasswordLine />
                        <p className='text-xl text-primary'>Password</p>
                    </section>
                    <div className='border-2 py-4 px-2 rounded-md mt-2'>
                        <Input
                            placeholder='Please enter the chapter'
                            value={form.password}
                            onChange={val => {
                                setForm(item => ({ ...item, password: val }))
                            }}
                        />
                    </div>
                </div>
                <div className='py-2'>
                <NavLink to='/reg'>Don’t have an account yet? Click here to register</NavLink>
                </div>
                <div className='mt-6'>
                    <Button color='primary' block fill='solid' size='large' onClick={()=>nav('/books')}>
                        Login
                    </Button>
                </div>
            </div>
        </div>
    );
}


export default Login;   
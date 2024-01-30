import {Button, Input, TextArea} from "antd-mobile";
import {useEffect, useState} from "react";
import { FaBook } from "react-icons/fa";
import { GrChapterAdd } from "react-icons/gr";
import { TbBooks } from "react-icons/tb";
import { CiEdit } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import {actions} from '../../slices/header'
function Books() {
   const dispath = useDispatch();
    useEffect(()=>{
        dispath(actions.show());
    },[])
    const [form,setForm] = useState({
        book:''
    })
    return (
        <div className="Bookes p-2 px-6">
            <h2 className='text-3xl font-bold mt-2'>Create your book review!</h2>
            <div className='mt-8'>
                <section className='flex space-x-2 items-center'>
                    <FaBook />
                    <p className='text-xl text-primary'>Book name</p>
                </section>
                <div className='border-2 py-4 px-2 rounded-md mt-2'>
                    <Input
                        placeholder='Please enter the book title'
                        value={form.book}
                        onChange={val => {
                            setForm(item=>({...item,book:val}))
                        }}
                    />
                </div>
            </div>
            <div className='mt-6'>
                <section className='flex space-x-2 items-center'>
                    <GrChapterAdd />
                    <p className='text-xl text-primary'>Chapter</p>
                </section>
                <div className='border-2 py-4 px-2 rounded-md mt-2'>
                    <Input
                        placeholder='Please enter the chapter'
                        value={form.book}
                        onChange={val => {
                            setForm(item=>({...item,book:val}))
                        }}
                    />
                </div>
            </div>
            <div className='mt-6'>
                <section className='flex space-x-2 items-center'>
                    <TbBooks />
                    <p className='text-xl text-primary'>Content in Books</p>
                </section>
                <div className='border-2 py-4 px-2 rounded-md mt-2'>
                    <Input
                        placeholder='Please enter the content in books'
                        value={form.book}
                        onChange={val => {
                            setForm(item=>({...item,book:val}))
                        }}
                    />
                </div>
            </div>
            <div className='mt-6'>
                <section className='flex space-x-2 items-center'>
                    <CiEdit />
                    <p className='text-xl text-primary'>Book Review</p>
                </section>
                <div className='border-2 py-4 px-2 rounded-md mt-2'>
                    <TextArea
                        showCount
                        maxLength={70}
                    />
                </div>
            </div>

            
            <div className='grid grid-cols-2 grid-rows-1 gap-4 mt-8'>
                <Button color='primary' fill='outline' size='large'>Save</Button>
                <Button color='primary' size='large'>Submit</Button>
            </div>
        </div>
    );
}

export default Books;

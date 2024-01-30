import { CapsuleTabs, Card } from 'antd-mobile'
import { useEffect } from 'react';
import { FaRegUser } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { TbUserBolt } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';
import {actions} from '../../slices/header'
import { useDispatch } from 'react-redux';
function Recommendations() {
    const dispath = useDispatch();
    useEffect(()=>{
        dispath(actions.show());
    },[])
    const nav = useNavigate();
    return (
        <div className="Recommendations">
            <CapsuleTabs>
                <CapsuleTabs.Tab title='Book Recommendations' key='fruits'>
                    <div className='flex items-center'>
                        <FaRegUser />
                        <span className='ml-2 text-2xl font-bold'onClick={()=>nav('/userInfo')}>Alice</span>
                    </div>
                    <div className='border mt-4'>
                    <Card title={
                        <span className='ml-2'>Harry Potter</span>

                    }>
                      I love Harry Potter.
                    </Card>
                    </div>

                    <div className='flex items-center mt-4'>
                        <FaUser />
                        <span className='ml-2 text-2xl font-bold'onClick={()=>nav('/userInfo')}>Ben</span>
                    </div>
                    <div className='border mt-4'>
                    <Card title={
                        <span className='ml-2'>Warriors</span>

                    }>
                      I love the warriors when they sacrifice.
                    </Card>
                    </div>

                    <div className='flex items-center mt-4'>
                        <FaRegUser />
                        <span className='ml-2 text-2xl font-bold'onClick={()=>nav('/userInfo')}>Coco</span>
                    </div>
                    <div className='border mt-4'>
                    <Card title={
                        <span className='ml-2'>Jane Eye</span>

                    }>
                      This book is the book I like best.
                    </Card>
                    </div>

                    <div className='flex items-center mt-4'>
                        <FaUser />
                        <span className='ml-2 text-2xl font-bold'onClick={()=>nav('/userInfo')}>Danny</span>
                    </div>
                    <div className='border mt-4'>
                    <Card title={
                        <span className='ml-2'>To kill a mockingbird</span>

                    }>
                      This novel stayed with me for a long time after I read it.
                    </Card>
                    </div>
                </CapsuleTabs.Tab>
                <CapsuleTabs.Tab title='User Recommendations' key='vegetables'>
                    <div className='flex items-center'>
                        <TbUserBolt size={32} />
                        <span className='ml-2 text-2xl font-bold'onClick={()=>nav('/userInfo')}>Jane</span>
                    </div>
                    <div className='grid grid-cols-3 grid-rows-1 gap-x-2 mt-4'>
                        <div className='border p-4'>
                            <p className='text-xl'>Book review 1</p>
                        </div>
                        <div className='border p-4'>
                            <p className='text-xl'>Book review 2</p>
                        </div>
                        <div className='border p-4'>
                            <p className='text-xl'>Book review 3</p>
                        </div>
                    </div>

                    <div className='flex items-center mt-4'>
                        <TbUserBolt size={32} />
                        <span className='ml-2 text-2xl font-bold'onClick={()=>nav('/userInfo')}>John</span>
                    </div>
                    <div className='grid grid-cols-3 grid-rows-1 gap-x-2 mt-4'>
                        <div className='border p-4'>
                            <p className='text-xl'>Book review 1</p>
                        </div>
                        <div className='border p-4'>
                            <p className='text-xl'>Book review 2</p>
                        </div>
                        <div className='border p-4'>
                            <p className='text-xl'>Book review 3</p>
                        </div>
                    </div>

                    <div className='flex items-center mt-4'>
                        <TbUserBolt size={32} />
                        <span className='ml-2 text-2xl font-bold'onClick={()=>nav('/userInfo')}>Jasmine</span>
                    </div>
                    <div className='grid grid-cols-3 grid-rows-1 gap-x-2 mt-4'>
                        <div className='border p-4'>
                            <p className='text-xl'>Book review 1</p>
                        </div>
                        <div className='border p-4'>
                            <p className='text-xl'>Book review 2</p>
                        </div>
                        <div className='border p-4'>
                            <p className='text-xl'>Book review 3</p>
                        </div>
                    </div>

                    <div className='flex items-center mt-4'>
                        <TbUserBolt size={32} />
                        <span className='ml-2 text-2xl font-bold'onClick={()=>nav('/userInfo')}>Joanna</span>
                    </div>
                    <div className='grid grid-cols-3 grid-rows-1 gap-x-2 mt-4'>
                        <div className='border p-4'>
                            <p className='text-xl'>Book review 1</p>
                        </div>
                        <div className='border p-4'>
                            <p className='text-xl'>Book review 2</p>
                        </div>
                        <div className='border p-4'>
                            <p className='text-xl'>Book review 3</p>
                        </div>
                    </div>
                    <div className='flex items-center mt-4'>
                        <TbUserBolt size={32} />
                        <span className='ml-2 text-2xl font-bold'onClick={()=>nav('/userInfo')}>Jack</span>
                    </div>
                    <div className='grid grid-cols-3 grid-rows-1 gap-x-2 mt-4'>
                        <div className='border p-4'>
                            <p className='text-xl'>Book review 1</p>
                        </div>
                        <div className='border p-4'>
                            <p className='text-xl'>Book review 2</p>
                        </div>
                        <div className='border p-4'>
                            <p className='text-xl'>Book review 3</p>
                        </div>
                    </div>
                    <div className='flex items-center mt-4'>
                        <TbUserBolt size={32} />
                        <span className='ml-2 text-2xl font-bold'onClick={()=>nav('/userInfo')}>Julia</span>
                    </div>
                    <div className='grid grid-cols-3 grid-rows-1 gap-x-2 mt-4'>
                        <div className='border p-4'>
                            <p className='text-xl'>Book review 1</p>
                        </div>
                        <div className='border p-4'>
                            <p className='text-xl'>Book review 2</p>
                        </div>
                        <div className='border p-4'>
                            <p className='text-xl'>Book review 3</p>
                        </div>
                    </div>
                </CapsuleTabs.Tab>
            </CapsuleTabs>
        </div>
    );
}

export default Recommendations;

import { CapsuleTabs, Card } from 'antd-mobile'
import { FaRegUser } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
// import { TbUserBolt } from "react-icons/tb";
import { BsChatRightText } from "react-icons/bs";
import { FaUserGroup } from "react-icons/fa6";
import { LuUsers } from "react-icons/lu";
import { useDispatch } from "react-redux";
import { actions } from '../../slices/header'
import { useEffect } from 'react';
function Chat() {
    const dispath = useDispatch();
    useEffect(() => {
        dispath(actions.show());
    }, [])
    return (
        <div className="Chat">
            <CapsuleTabs>
                <CapsuleTabs.Tab title='Chats' key='fruits'>
                    <div className='flex items-center'>
                        <FaRegUser />
                        <span className='ml-2 text-2xl font-bold'>Alice</span>
                    </div>
                    <div className='border mt-4 p-2 rounded-xl'>
                        <Card>
                            <BsChatRightText size={16} />
                            <p className='mt-1'>
                                A message from Alice receiced.
                            </p>
                        </Card>
                    </div>
                    <div className='flex items-center mt-4'>
                        <FaUser />
                        <span className='ml-2 text-2xl font-bold'>Ben</span>
                    </div>
                    <div className='border mt-4 p-2 rounded-xl'>
                        <Card>
                            <BsChatRightText size={16} />
                            <p className='mt-1'>
                                A message from Ben receiced.
                            </p>
                        </Card>
                    </div>
                    <div className='flex items-center mt-4'>
                        <FaRegUser />
                        <span className='ml-2 text-2xl font-bold'>Cindy</span>
                    </div>
                    <div className='border mt-4 p-2 rounded-xl'>
                        <Card>
                            <BsChatRightText size={16} />
                            <p className='mt-1'>
                                A message from Cindy receiced.
                            </p>
                        </Card>
                    </div>
                    <div className='flex items-center mt-4'>
                        <FaUser />
                        <span className='ml-2 text-2xl font-bold'>Danny</span>
                    </div>
                    <div className='border mt-4 p-2 rounded-xl'>
                        <Card>
                            <BsChatRightText size={16} />
                            <p className='mt-1'>
                                A message from Danny receiced.
                            </p>
                        </Card>
                    </div>

                </CapsuleTabs.Tab>
                <CapsuleTabs.Tab title='Groups  ' key='vegetables'>
                    <div className='flex items-center'>
                        <FaUserGroup />
                        <span className='ml-2 text-2xl font-bold'>Hogwarts School of Witchcraft and Wizardry</span>
                    </div>
                    <div className='border mt-4 p-2 rounded-xl'>
                        <Card>
                            <BsChatRightText size={16} />
                            <p className='mt-1'>
                                Welcome to the Family of Harry Potter!
                            </p>
                        </Card>
                    </div>
                    <div className='flex items-center mt-4'>
                        <LuUsers />
                        <span className='ml-2 text-2xl font-bold'>Lord of the Rings</span>
                    </div>
                    <div className='border mt-4 p-2 rounded-xl'>
                        <Card>
                            <BsChatRightText size={16} />
                            <p className='mt-1'>
                                “Not all those who wander are lost.” — Bilbo Baggins <br />
                                “All’s well that ends better.” — Hamfast Gamgee <br />
                                “Deeds will not be less valiant because they are unpraised.” — Aragorn
                            </p>
                        </Card>
                    </div>
                    <div className='flex items-center mt-4'>
                        <FaUserGroup />
                        <span className='ml-2 text-2xl font-bold'>Ready to join Hunger Games?</span>
                    </div>
                    <div className='border mt-4 p-2 rounded-xl'>
                        <Card>
                            <BsChatRightText size={16} />
                            <p className='mt-1'>
                                "You've no right to starve people, to punish them for no reason…"<br />
                                "Hope. It is the only thing stronger than fear."
                            </p>
                        </Card>
                    </div>
                    <div className='flex items-center mt-4'>
                        <LuUsers />
                        <span className='ml-2 text-2xl font-bold'>The Chronicles of Narnia</span>
                    </div>
                    <div className='border mt-4 p-2 rounded-xl'>
                        <Card>
                            <BsChatRightText size={16} />
                            <p className='mt-1'>
                                Explore Narnia with us.
                            </p>
                        </Card>
                    </div>
                    <div className='flex items-center mt-4'>
                        <FaUserGroup />
                        <span className='ml-2 text-2xl font-bold'>The Thorn Birds</span>
                    </div>
                    <div className='border mt-4 p-2 rounded-xl'>
                        <Card>
                            <BsChatRightText size={16} />
                            <p className='mt-1'>
                                There is a legend about a bird which sings just once in its life, more
                                sweetly than any other creature on the face of the earth. From the
                                moment it leaves the nest it searches for a thorn tree, and does not
                                rest until it has found one. Then, singing among the savage
                                branches, it impales itself upon the longest, sharpest spine. And,
                                dying, it rises above its own agony to out- carol the lark and the
                                nightingale. One superlative song, existence the price. But the
                                whole world stills to listen, and God in His heaven smiles. For the
                                best is only bought at the cost of great pain .... Or so says the legend.
                            </p>
                        </Card>
                    </div>
                    <div className='flex items-center mt-4'>
                        <LuUsers />
                        <span className='ml-2 text-2xl font-bold'>Group Chat X</span>
                    </div>
                    <div className='border mt-4 p-2 rounded-xl'>
                        <Card>
                            <BsChatRightText size={16} />
                            <p className='mt-1'>
                                You can chat with book fans here in the group.
                            </p>
                        </Card>
                    </div>
                </CapsuleTabs.Tab>
            </CapsuleTabs>
        </div>
    );
}

export default Chat;

import React, { useContext } from 'react'
import MyContext from '../MyContext/MyContext';

function ProfileCard() {

    const { data } = useContext(MyContext);

    return (
        <>
            <div className="list-group">
                {data.map(item => {
                    return (
                        <>
                            <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                                <div className='d-flex justify-content-between'>
                                    <div className='d-flex'>
                                        <div className='rounded'>
                                            <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' width={50} height={50} className='rounded' alt='profile img' />
                                        </div>
                                        <div className='px-2 py-auto my-auto'>
                                            <h5>{item.username}</h5>
                                        </div>
                                    </div>
                                    <div className='py-auto my-auto'>
                                        <p>{item.email}</p>
                                    </div>
                                </div>
                            </a>
                        </>
                    )
                })}
            </div>
        </>
    )
}

export default ProfileCard
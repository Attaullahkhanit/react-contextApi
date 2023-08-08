import React from 'react'
import { useContext } from 'react';
import MyContext from '../../Components/MyContext/MyContext';
import ProfileCard from '../../Components/ProfileCard/ProfileCard';

function Home() {
  const { data } = useContext(MyContext);
  return (
    <>
        <div className='section py-5'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>
                  <ProfileCard />
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Home
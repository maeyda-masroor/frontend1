import React from 'react';
import { Outlet } from 'react-router-dom';
import SmallSideBar from '../../components/SmallSideBar';
import BigSideBar from '../../components/BigSideBar';
import Navbar from '../../components/Navbar';
import styled
 from 'styled-components';
 const Wrapper = styled.section`
  .dashboard {
    display: grid;
    grid-template-columns: 1fr;
  }
  .dashboard-page {
    width: 90vw;
    margin: 0 auto;
    padding: 2rem 0;
  }
  @media (min-width: 992px) {
    .dashboard {
      grid-template-columns: auto 1fr;
    }
    .dashboard-page {
      width: 90%;
    }
  }
  `
const Shared_Layout = () => {
  return (
    <Wrapper>
    <main className='dashboard'>
        <SmallSideBar />
        <BigSideBar />
        <div>
          <Navbar />
          <div className='dashboard-page'>
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>  
  );
  }
export default Shared_Layout;
import React from "react";
import '../App.css';
import Logo from '../components/Logo'
import Navigationbar from '../components/navigationbar';
import SubHeading from '../components/subheading';
import Section1 from '../components/Section1';
import Section2 from '../components/Section2';
import Section3 from '../components/Section3';
import Section4 from '../components/Section4';
import Section5 from '../components/Section5';
import Footer from '../components/footersection';
function Home(){
  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

    return (
      <div>
       <SubHeading/>
       <Section1/>
       <Section2 heading="Explore Jobs from 12,000+ Startups and Tech Companies "items={items} />
       <Section3/>
       <Section4/>
       <Section5/>
      </div>

);    
}
  export default Home;
  
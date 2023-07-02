import React from "react";
import clock from './clock.png';
import bg from './background (2).jpg';
import { TypeAnimation } from 'react-type-animation';
import { useNavigate } from "react-router-dom";


function Landing(){
    const navigate = useNavigate();
    const OnLogin=()=>{
        navigate('/Login');
    };
    
    const OnRegister=()=> {
        navigate('/Register');
    };
    return(
<div className="w-full md:h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
  <nav class="bg-white/30 backdrop-blur:sm   dark:border">
  <div class="max-w-screen-xxl h-12 pt-1 flex flex-wrap items-center justify-between mx-2 p-4">
    <a href="/" class="flex items-center mb-2">
        <img src={clock} class="h-8 mr-3" alt="Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Task Management Application</span>
    </a>
    <div class="hidden w-full md:block md:w-auto " id="navbar-default">
      <ul class="flex flex-row mx-0 mr-0">
        <li className="mx-2 mt-2">
        <a href="" onClick={OnLogin} class=" w-full display:flex font-medium px-5 pt-5 mr-0  mb-0 ">Login</a>
        </li>
        <li>
        <button type="submit" onClick={OnRegister} class="w-full text-white bg-blue-700 display:flex hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm display:flex px-10 py-2.5 mr-0  mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ">Sign-up</button>
        </li>
      </ul>
    </div>
  </div>
</nav>
<div class ="mt-10 font-bold text-5xl justify-center flex text-gray-900">
<h1 class="">Task Management </h1><h1 className="text-white ml-1.5">Tool!</h1>
</div>
<div class="mt-20 flex items-center justify-center">
    <div>
        <img class="h-80 rounded-lg" src={bg} alt=""/>
    </div>
</div>
<div className="mt-10 flex items-center justify-center text-white">
<TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Manage your tasks',
        1000, 
        'Increase your Productivity',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Try Now!',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2.5em'}}
      repeat={Infinity}
    />
    </div>
        </div>
    );
}

export default Landing;
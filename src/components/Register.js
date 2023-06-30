import React from "react";
import clock from "./clock.png";
import { useNavigate } from "react-router-dom";




function Register() {
    const navigate = useNavigate();
    const OnAccount=()=> {
        navigate("/");
    };
    const Onsubmit=event=> {
        event.preventDefault();
        navigate("/Home");
    };
    return(
        <div>
        <section class="bg-black-50 dark:bg-black-900 bg-gradient-to-r from-cyan-500 to-blue-500">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-black-900 dark:text-white">
          <img class="w-8 h-8 mr-2" src={clock} alt="logo"/>
          Task Management Application  
      </a>
      <div class="w-full bg-white/10 backdrop-blur-sm rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-black-800 dark:border-black-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-black-900 md:text-2xl dark:text-white">
                  Create Your account
              </h1>
              <form class="space-y-4 md:space-y-6" onSubmit={Onsubmit} action="#">
              <div>
                      <label for="First Name" class="block mb-2 text-sm font-medium text-black-900 dark:text-white">First Name</label>
                      <input type="text" name="First Name" id="FirstName" class="bg-black-50 border border-black-300 text-black-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-black-700 dark:border-black-600 dark:placeholder-black-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="First Name" required=""/>
                  </div>
                  <div>
                      <label for="Last Name" class="block mb-2 text-sm font-medium text-black-900 dark:text-white">Last Name</label>
                      <input type="text" name="Last Name" id="Last Name" class="bg-black-50 border border-black-300 text-black-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-black-700 dark:border-black-600 dark:placeholder-black-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Last Name" required=""/>
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-black-900 dark:text-white">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" class="bg-black-50 border border-black-300 text-black-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-black-700 dark:border-black-600 dark:placeholder-black-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <div>
                      <label for="confirm-password" class="block mb-2 text-sm font-medium text-black-900 dark:text-white">Confirm password</label>
                      <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" class="bg-black-50 border border-black-300 text-black-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-black-700 dark:border-black-600 dark:placeholder-black-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <button type="submit" class="w-full text-white bg-blue-700 display:flex hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm display:flex px-10 py-2.5 mr-0  mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ">Sign-up</button>
                  <p class="text-sm font-light text-black-500 dark:text-black-400">
                      Already have an account? <a href="#" onClick={OnAccount} class="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
</div>
    );

}

export default Register;
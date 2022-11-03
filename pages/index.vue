
<template>
  <div class="font-sans text-gray-900 antialiased">
     <div class="h-screen grid justify-items-center items-center">
       <div
         class="w-auto md:w-1/2 lg:w-1/3 py-4 px-8 bg-white shadow-lg rounded-lg my-20">
         <div class="flex justify-center -mt-16">
           <img src="https://amis.uplb.edu.ph/logos/uplb-logo.png" class="object-center" />
         </div>
         <div class="mt-5">
           <h2 class="text-gray-800 text-3xl font-semibold text-center">
             Welcome to the UPLB Graduate School
           </h2>
         </div>
         <div class="mt-8">
        <input
          id="email" v-model="email" type="email"
          class="form-control block
          w-full  px-3 py-1.5 text-base  font-normal text-gray-700 bg-white bg-clip-padding
          border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Username">
         </div>
         <div class="mt-8">
        <input
          id="password" v-model="password" type="password"
          class="form-control block
          w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
          rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Password">
      </div>
         <div class="flex justify-center mt-4">
         <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out">Login</button>
         </div>
     <div class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
            <p class="text-center font-semibold mx-4 mb-0">Or</p>
          </div>
          
         <div class="flex justify-center mt-4">
         
           
       
           <button class=" inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase hover:bg-red-700 focus:bg-red-700 focus:outline-none focus:ring-0 active:bg-red-800 transition duration-150 ease-in-out" @click="login">
             Login with UPmail
           </button>
         </div>
          <div class="cmt-8 flex justify-center items-center">
         <p class="text-sm font-semibold mt-2 pt-1 mb-0">
              Don't have an account?
             <nuxt-link  to='/registration'>  
             <a
                class="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                >Register</a> </nuxt-link>
            </p>
          </div>
            
          </div>
       </div>
      
     </div>
   
 </template>
 
 <script>
   export default {
     name: 'LoginPage',
     layout: "auth",
     methods: {
       login(message) {
         window.location.href = `${process.env.API_BASE_URL}/auth/google`;
       },
     },
   };
   </script>
 
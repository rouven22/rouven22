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
           Registration
            </h2>
    
    <form>
      <div class="mt-8 grid grid-cols-1 gap-4">
      <div class="form-group mb-6">
        <input
          id="name" v-model="name" type="text"
          class="form-control block
          w-full  px-3 py-1.5 text-base  font-normal text-gray-700 bg-white bg-clip-padding
          border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Username">
      </div>
      <div class="form-group mb-6">
        <input
          id="email" v-model="email" type="email"
          class="form-control block
          w-full  px-3 py-1.5 text-base  font-normal text-gray-700 bg-white bg-clip-padding
          border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Email Address">
      </div>
      <div class="form-group mb-6">
        <input
          id="password" v-model="password" type="password"
          class="form-control block
          w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
          rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Password">
      </div>
     
      <div class="flex items-center justify-center">
    <div class="inline-flex shadow-md hover:shadow-lg focus:shadow-lg" role="group">
      
      <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out" @click="signUp"> 
       Sign Up</button>
  </div>
    </div>
  </div>
    </form>
  </div>
    </div>
  </div>
  </div>


  
  </template>
  
  <script>
    import axios from 'axios'
  export default {
    name: 'SignUP',
   data()
   {
    return{
      name:'',
      email:'',
      password:''
    }
   },
   mounted() {
    const user= localStorage.getItem('user-info');
    if(user)
    {
      // this.$router.push({name:'StudentHome'})
    }
   },
   methods:{
  async signUp() 
    {
      const result = await axios.post("http://localhost:3000/users",{
        email:this.email,
        password:this.password,
        name:this.name
      });
      // console.warn(result);
      if(result.status===201)
      {
        
        localStorage.setItem("user-info",JSON.stringify(result.data))
        // this.$router.push({name:'StudentHome'}) 
       
      
      }

    }
   },
  }
  </script>
  
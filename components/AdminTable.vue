<template>
    <div class="my-6">

            <div class="flex pt-24 justify-between items-center pb-4 bg-white dark:bg-gray-00">
            <div>
                <p class="pl-20 font-bold text-2xl">WELCOME TO ADMIN HOME PAGE</p>
            </div>
            </div>

            <div class="flex justify-between pb-4 bg-white">
              <button
                type="button" class="ml-6 px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase hover:bg-green-700 focus:bg-green-700 focus:outline-none focus:ring-0 active:bg-green-800 transition duration-150 ease-in-out" 
                @click="showModal = true">  ADD APPLICANT  </button>

            <div class="inset-y-0 right-24 pr-24 pointer-events-none">
           
            </div>
            
            <div class="pr-20"> 
             <input
                id="search" v-model="search" type="text" class="form-control relative block 
                w-50 px-3 py-1 bg-white bg-clip-padding border border-solid border-gray-500 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 
              focus:outline-none" placeholder="Search"/>
            </div>
                </div>
             <table id="table_1" class="w-full items-center justify-center text-sm text-left text-gray-50 dark:text-grey-50">
                <thead class="pr-8 flex text-white w-full uppercase bg-red-900 dark:bg-red-900 dark:text-white">
                    <tr class="pr-8  flex w-full mb-4"> 
                        <th class="p-4 w-1/4 text-left" @click="sortList('id')">ID &#8597;</th>   
                        <th  class="p-4 w-1/4 text-left">Last Name</th>   
                        <th  class="p-4 w-1/4 text-left">First Name</th> 
                        <th class="p-4 w-1/4 text-left">Semester</th>  
                        <th  class="p-4 w-1/4 text-left" >Degree/Major</th> 
                        <th  class="pl-10 p-4 w-1/4 text-left">Status</th>  
                        <th  class="p-4 w-1/4 text-left">Validate</th>  
                        <th  class="p-4 w-1/4 text-left"> </th> 
                    </tr>
                </thead>
                <tbody class=" flex flex-col overflow-y-scroll " style="height: 50vh;">
                    <tr  v-for="(applicant,index ) in filteredApplicants" :key="index" class="pr-4 flex w-full bg-grey-900 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-500 dark:hover:bg-gray-600">
                        <td class="p-4 w-1/4 ">{{applicant.id}} </td>     
                        <td class="p-4 w-1/4"> {{applicant.lastName}}</td> 
                        <td class="p-4 w-1/4">{{applicant.firstName}}</td>
                        <td class="pr-14 p-4 w-1/4">{{applicant.semester}} {{applicant.semesterDate}}</td> 
                        <td class="pr-12 p-4 w-1/4">{{applicant.programs}}</td> 
                        <td class="p-4 w-1/4">{{applicant.Status}}</td> 
                        <td class="p-4 w-1/4 text-green-400">{{applicant.screening}}</td>     
                        <td class="inline-flex">
                           <nuxt-link :to="`/admin/${applicant.id}`">
                            <button  type="button" class="inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase hover:bg-green-700 focus:bg-green-700 focus:outline-none focus:ring-0 active:bg-green-800 transition duration-150 ease-in-out" >
                                 VIEW  </button></nuxt-link>
                                 <nuxt-link :to="`/admin/approval/${applicant.id}`">
                            <button  type="button" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out">
                                VALIDATE
                                </button></nuxt-link>
                        
                    </td>         
                    </tr>
                </tbody>
            </table>  
             <AdminFormModal  v-show="showModal" @close-modal="showModal = false"  />  
    </div>
  </template>
  <script>      
  import AdminFormModal from '~/components/AdminFormModal.vue'
  
 export default {
    name: "AdminDashboard",
  components:{
    AdminFormModal
  },
    data() {
return {
            applicants: [],  
              search:'',
              sortedbyASC: true,
               showModal: false,
        
    };
},
    head() {
        return {
            title: "Admin Dashboard",
            meta: [
                {
                    hid: "description",
                    name: "description",
                    content: "UPLB Gradtuate School"
                }
            ]
        };
    },
 
computed:{
    filteredApplicants() {
      const searchTerm = (this.search || "").toLowerCase()
      return this.applicants.filter(function(item) {
        const applicant = (item.firstName || "").toLowerCase() 
        const lastName = (item.lastName || "").toLowerCase()
        const semester = (item.semester || "").toLowerCase()
         const programs = (item.programs || "").toLowerCase()
          const status = (item.Status || "").toLowerCase()
        return applicant.includes(searchTerm) || lastName.includes(searchTerm) ||  semester.includes(searchTerm)
        ||  programs.includes(searchTerm) ||  status.includes(searchTerm) 
      })
    },
    
 },
    created() {
    this.loadApplicants();
  },
methods: {
    async loadApplicants() {
      const data = await fetch(`http://localhost:3000/applicants`);
      this.applicants = await data.json();  
    },
    sortList(sortBy) {
      if (this.sortedbyASC) {
        this.applicants.sort((x, y) => (x[sortBy] > y[sortBy] ? -1 : 1));
        this.sortedbyASC = false;
      } else {
        this.applicants.sort((x, y) => (x[sortBy] < y[sortBy] ? -1 : 1));
        this.sortedbyASC = true;
      }
    },
 }

   
 }
 </script>
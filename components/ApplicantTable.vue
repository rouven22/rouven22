     <template>
      <div class="my-6">
             <table id="table_1" class="w-full items-center justify-center text-sm text-left text-gray-50 dark:text-grey-50">
                <thead class="pr-8 flex text-white w-full uppercase bg-red-900 dark:bg-red-900 dark:text-white">
                    <tr class="flex w-full mb-4"> 
                        <th  class="p-4 w-1/4 text-left">ID</th>   
                        <th  class="p-4 w-1/4 text-left">Last Name</th>   
                        <th  class="p-4 w-1/4 text-left">First Name</th> 
                        <th class="p-4 w-1/4 text-left">Semester</th>  
                        <th  class="p-4 w-1/4 text-left">Degree/Major</th> 
                        <th  class="pl-24 p-4 w-1/4 text-left ">Status</th>  
                        <th  class="p-4 w-1/4"> </th> 
                    </tr>
                </thead>
                <tbody class=" flex flex-col overflow-y-scroll " style="height: 50vh;">
                    <tr  v-for="applicant in applicants" :key="applicant.id" :applicant="applicant" class="pr-4 flex w-full bg-grey-900 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-500 dark:hover:bg-gray-600"> 
                        <td class="p-4 w-1/4">{{applicant.id}} </td>     
                        <td class="p-4 w-1/4"> {{applicant.lastName}}</td> 
                        <td class="p-4 w-1/4">{{applicant.firstName}}</td>
                        <td class="ml-18 p-4 w-1/4">{{applicant.semester}} {{applicant.semesterDate}}</td> 
                        <td class="mr-20  p-4 w-1/4">{{applicant.programs}}</td> 
                        <td class="mr-18 p-4 w-1/4">{{applicant.Status}}</td>   
                        <td class="inline-flex">
                           <nuxt-link :to="`/applicant/${applicant.id}`">
                            <button  type="button" class="inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase hover:bg-green-700 focus:bg-green-700 focus:outline-none focus:ring-0 active:bg-green-800 transition duration-150 ease-in-out" >
                                 VIEW  </button></nuxt-link>
                                 <nuxt-link :to="`/applicant/update/${applicant.id}`">
                        <button type="button" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out" @click="isEditing = !isEditing">
                           EDIT
                        </button></nuxt-link>
                    
                    </td>         
                    </tr>
                </tbody>
            </table> 

            
    </div>
</template>

      
<script>

 export default {
    name: "StudentDashboard",
    
    data() {
        return {
           applicants: []
        };
    },
    head() {
        return {
            title: "Applicant Dashboard",
            meta: [
                {
                    hid: "description",
                    name: "description",
                    content: "UPLB Gradtuate School"
                }
            ]
        };
    },

   created() {
    this.loadApplicants();
  },
methods: {
    async loadApplicants() {
      const data = await fetch(`http://localhost:3000/applicants`);
      this.applicants = await data.json();  
    },
   
 }
};
                </script>
                
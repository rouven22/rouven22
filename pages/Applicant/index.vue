<template>
    <div> 
        <StudentNavbar />
        <div class="flex pt-24 justify-between items-center pb-4 bg-white dark:bg-gray-00">
            <div>
             <p class="pl-20 font-bold text-2xl">WELCOME TO APPLICANT HOME PAGE</p>
         </div>
        </div>
          <ApplicantTable />
</div>
            </template>
            
<script>
// import { mapActions } from "vuex";
import axios from 'axios'

 export default {
    name: "StudentDashboard",
    
    data() {
        return {
            applicants: [],
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
    async created() {
        try {
            const res = await axios.get("http://localhost:3000/applicants");
            this.applicants = res.data;
        }
        catch (e) {
            // console.error(e);
        }
    },

    async Data({ params }) {
      return await axios.get(`http://localhost:3000/applicants`).then(res => {
        return { applicants: res.data }
      })

},
// mounted() {
//     this.getAllProduct();
//   },
// methods: {
//     ...mapActions(["getAllApplicant"]),
    
//     },
  

};
                </script>
                

<template>
    <div> 
        <ApplicantNavbar />
        <div class="flex pt-24 justify-between items-center pb-4 bg-white dark:bg-gray-00">
            <div>
             <p class="pl-20 font-bold text-2xl">WELCOME TO APPLICANT HOME PAGE</p>
         </div>
        </div>
          <ApplicantTable />
</div>
            </template>
            
<script>

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
   

};
                </script>
                

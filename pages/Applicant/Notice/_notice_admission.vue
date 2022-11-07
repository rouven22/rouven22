<template> 
<div>
     <ApplicantNavbar />

          <div class="flex justify-center items-center  bg-grey-200 ">      
               <div class="w-1/8 bg-grey-50 rounded shadow-2xl p-20 m-2">
               <div class="flex justify-center items-center ">
               <img src="https://amis.uplb.edu.ph/logos/uplb-logo.png" class="items-center mr-3 h-26 sm:h-26">
               </div>
                <h1 class="block w-full text-center text-gray-900 text-2xl font-bold">University of the Philippines Los Baños</h1>
                <h2 class="block w-full text-center text-gray-900 text-1xl font-medium mb-4">Graduate School</h2>
                <h2 class="block w-full text-center text-gray-900 text-1xl">College, Laguna, 4031, Philippines</h2>
                <h2 class="block w-full text-center text-gray-900 text-1xl font-medium">Tel. No. +6349 536 3414 </h2>
                <h2 class="block w-full text-center text-gray-900 text-1xl font-medium">Telefax: +6349 536 2310</h2>
                <h2 class="block w-full text-center text-gray-900 text-1xl font-medium mb-4">Email: gs.uplb@up.edu.ph // URL: http://gs.uplb.edu.ph</h2>
                <h2 class="block w-full text-center text-gray-900 text-2xl font-bold mb-6">Notice of Admission</h2>
                <div class="px-12 max-w-5xl">
                <div class="mb-4">
                <label > APPLICANT'S NAME: </label>
                </div>
                <div class="mb-4">
                <label> EFFECTIVITY OF ADMISSION: </label>
                </div>
                <div class="mb-4">
                <label> DEGREE PROGRAM: </label>
                </div>
                <div class="mb-4">
                <label> MAJOR FIELD: </label> 
                </div>
                <div class="mb-4">
                <label> STATUS OF ADMISSION: </label>
                </div>
                <div class="mb-12">
                <label> CATEGORY: </label>
                </div>

                <div class="mb-8">
                <label> CONDITION: </label>
                </div>


                <div class="mb-4">
                <label> REGISTRATION ADVISER: </label>
                </div>
                <div class="mb-4">
                <label> EMAIL ADDRESS: </label>
                </div>
                <div class="mb-4">
                <label> DEPARTMENT INSTITUTE: </label>
                </div>
                <div class="mb-4">
                <label> REGISTRATION DATE: </label>
                </div>
                <div class="mb-4">
                <label> STUDENT ORIENTATION: </label>
                </div>
                <div class="mb-12">
                <label> CLASSES BEGIN: </label>
                </div>

                <div class="mb-4">
                <label> REMARKS: </label>
                </div>
                   
    </div>
    </div>

    </div>
    </div>
</template>
<script> 
import axios from 'axios'
export default { 
    name: "NoticeAdmission",

     async asyncData({ params }) {
        return await axios.get(`http://localhost:3000/applicants/${params.notice_admission}`).then(res => {
            
            return { applicant: res.data };
        });
    },
data() {
      return{
        applicant: [],
     
      }    
},
head() {
        return {
            title: "Notice of Admission",
            meta: [
                {
                    hid: "description",
                    name: "description",
                    content: "UPLB Gradtuate School"
                }
            ]
        };
    },

  

}


</script>
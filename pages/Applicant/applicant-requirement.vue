<template>  
    <div>
        <ApplicantNavbar />
        <div class=" bg-white-100 rounded shadow-2xl p-20 ">
                    <div class="mt-10 sm:mt-0">
                    <div class="md:grid md:grid-cols-3 md:gap-6">
                        <div class="md:col-span-1">
                        <div class="px-4 sm:px-0">
                            <h1 class="text-lg font-medium leading-6 text-gray-900">Application Requirements</h1>    
                        </div>
                       </div>
                       <div></div>
                       <div class=" md:col-span-12">
                
                       <div class="overflow-hidden shadow sm:rounded-md">
                       <div class="flex items-center justify-center bg-white px-4 py-5 sm:p-6">
                   <div class="bg-blue-50">
                  
                   <div class="block p-3 rounded-lg shadow-lg bg-grey-200 ">
                    <h1 class="text-red-900 font-bold leading-tight font-small ">*Upload it in PDF Format </h1>
                           <h5 class="font-bold text-red-900  leading-tight font-small ">*ID picture taken within the last 6 months</h5>
                           <p class="font-bold text-grey-900 text-base ">
                           3.5cm x 4.5cm (passport size)
                                   with full and handwritten nametag and signature over printed name</p>   
                        <h5 class="font-bold text-red-900  leading-tight font-small ">* *Government Issued ID</h5>          
                       <h5 class="text-red-900 font-bold leading-tight font-small ">* For MS</h5>
                       <p class="text-grey-900 text-base ">
                       - BS Transcript of Record
                       </p>    
                       <p class="text-grey-900 text-base ">
                       - BS Diploma
                       </p>    
                       <p class="text-grey-900 text-base ">
                       - 2 Recommendation from former professors
                       </p>         
                       <p class="text-grey-900 text-base ">
                   - Payment (PHP 500 for Filipino citizens: Direct Payment to UPLB Cash Division, or through LBC, JRS express or DHL.
                   USD 40 for International applicants(excluding bank charges ): Payable to UPLB Graduate School through Philippine National Bank, Account Number 399-692-7000-21, Swift Code: PNBMPHMM or Direct Payment to UPLB Cash Division)
                       </p>   
                       <h5 class="text-red-900 font-bold leading-tight font-small ">*For PhD </h5>
                       <p class="text-grey-900 text-base ">
                   -  BS Transcript of Record 
                       </p>    
                       <p class="text-grey-900 text-base ">
                   -  BS Diploma
                       </p>    
                       <p class="text-grey-900 text-base ">
                       - MS Transcrip of Record
                       </p>    
                       <p class="text-grey-900 text-base ">
                       - MS Diploma
                       </p>    
                       <p class="text-grey-900 text-base ">
                       - 3 Recommendation from former professors
                       </p>  
                       <h5 class="text-red-900 font-bold leading-tight font-small ">* Additional Requirements for Phd by Research</h5>
                       <p>-Certification from the immediate head of the agency that the applicant has at least five (5) years of satisfactory research experience</p>
                       <p>-Reprints or copies of the applicant's research outputs</p>
                       <p>-A research proposal which shall include the title, rationale, objectives, methodology, and references</p>
                       <h5 class="text-red-900 font-bold leading-tight font-small ">*Additional Requirements for International Applicants</h5>
                       <p class="text-grey-900 text-base ">
                       -International English Language (TOEFL) Score of 500 or IELTS score of 5.5 or better taken within the last two years is required only  of applicants from
                       countries where English is not the medium of instruction and/or not the native language.
                       </p>
                       <h5 class="text-red-900 font-bold leading-tight font-small">*Other additional attachments required by the following programs</h5>
                       <p>~Environmental Science - Concept Note</p>
                       <p>~Applied Nutrition - Abstract of Research Interest</p>
                       <p>~Human Nutrition - Abstract of Research Interest</p>
                       <p>~Development Studies - Research Proposal</p>
                       <p>~Development Management and Governance - Essay 1: Personal statement, Essay 2: Research Interest</p>
                       <p>~Food Engineering:</p>
                       <p>1. Letter of application  </p>
                       <p>2. A 300 to 500-word essay on a food engineering problem encountered in the current/previous job and proposed plan of action to address the problem. </p>
                       <p>3. Curriculum Vitae</p>
                       <p>4. Endorsement letter from the current supervisor if the applicant is employed</p>
                       <p>5. Interview (may be conducted online)</p>
                       <h5 class="text-red-900 font-bold leading-tight font-small ">*Payment </h5>
                       <p class="text-grey-900 text-base ">
                        - Payment (PHP 500 for Filipino citizens: Direct Payment to UPLB Cash Division, or through LBC, JRS express or DHL.
                        USD 40 for International applicants(excluding bank charges ): Payable to UPLB Graduate School through Philippine National Bank, Account Number 399-692-7000-21, Swift Code: PNBMPHMM or Direct Payment to UPLB Cash Division)
                       </p>
                   </div>
                   </div>
                   </div>
                   <div class="flex items-center justify-center"><button
                        type="button" class="rounded-l px-12 py-5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out">
                            <NuxtLink
                            to='/applicant/form-applicant'
                            >Apply for Admission</NuxtLink>
                        </button>
                    </div>
                 </div>
                 </div>     
           </div>
           </div>            
                  </div>         
    </div>
            </template>
    
        <script> 
        export default {
            name: "ApplicantRequirements",    

            head() {
        return {
            title: "Application Requirements",
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

<template> 
          <div class="flex justify-center items-center  bg-grey-200 ">      
               <div class="w-1/8 bg-grey-50 rounded shadow-2xl p-20 m-2">
               <div class="flex justify-center items-center ">
               <img src="https://amis.uplb.edu.ph/logos/uplb-logo.png" class="items-center mr-3 h-26 sm:h-26">
               </div>
                <h1 class="block w-full text-center text-gray-900 text-2xl font-bold">University of the Philippines Los Baños</h1>
                <h2 class="block w-full text-center text-gray-900 text-1xl font-medium mb-4">Graduate School</h2>
                <h3 class="block w-full text-center text-gray-900 text-1xl  mb-6">College, Laguna, 4031, Philippines</h3>
                <h4 class="block w-full text-center text-gray-900 text-2xl font-bold mb-6">STANDARD RECOMMENDATION FORM</h4>
                <div class="px-12 max-w-5xl">

            <div class="bg-grey-800 px-4 py-5 sm:p-6">
            <label class="font-bold mb-2 block text-sm text-gray-900 dark:text-gray-900">1. Name of Applicant</label>
            <label class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">First name</label>
            <input id="reco_firstName" v-model="recoFirstName"  type="text"  class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder=" FirstName" required="">  
            <label  class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Middle name</label>
            <input id="reco_middleName" v-model="recoMiddleName" type="text"  class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Middle Name" required>  
            <label class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Last name</label>
            <input id="reco_lastName" v-model="recoLastName" type="text"  class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"  placeholder="Last Name" required>
            </div>

            <div class="bg-grey-800 px-4 sm:p-6">
            <label class="font-bold mb-2 block text-sm text-gray-900 dark:text-gray-900">2. Degree Sought</label>
                <select id="reco_degreeSought"  v-model="recoDegreeSought" class="mb-4 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                <option >--</option>
                <option >Graduate Certificate</option>
                <option>Master's (Non-Thesis/Professional)</option>
                <option >Doctorate (Regular)</option>
                <option >Graduate Diploma</option>
                <option >Master's (With Thesis, MS,MA)</option>
                <option >Doctorate (By Research)</option>
                </select>

             <label for="" class="font-bold block mb-2 text-sm text-gray-900 dark:text-gray-900">Dual/Double Degree</label>
              <div class="inline-block relative w-64">
                <select
                id="dual_double" v-model="dualDouble" name="dualDouble"
                class="mb-2 block appearance-none w-25 bg-white border border-gray-600 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                <option value="">--</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
                <div v-if="dualDouble === 'Yes'">
                  <label class="block mb-2 text-sm text-gray-900 dark:text-gray-900">if yes, please specify</label>
                  <textarea id="dual_yes" v-model="dualYes" class=" text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none resize-none px-2 py-3 w-full h-50" placeholder=""></textarea>
                </div>
                  </div>
                  </div>
                
                <div class="bg-grey-800 px-4 py-5 sm:p-6">
            <label class="font-bold mb-2 block text-sm text-gray-900 dark:text-gray-900">3. Prosposed Major Field and/or Area of Specialization</label>
            <input id="proposed_major" v-model="proposedMajor" type="text"  class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" required>
            </div>

            <div class="bg-grey-800 px-4 py-5 sm:p-6">
            <label class="block w-full text-gray-900 text-1xl font-bold mt-6">To the Evaluator</label>
            </div>

            <h5 class="block w-full text-center text-gray-900 text-1xl font-bold mt-6">RECOMMENDATION</h5>

            <div class="bg-grey-800 px-4 sm:p-6">
            <label class="font-bold mb-2 block text-sm text-gray-900 dark:text-gray-900">1. How long have you known the applicant and in what capacity?</label>
                <select id="reco_question1" v-model="recoQuestion1" class="mb-4 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                <option value="" >--</option>
                <option value="As his/her professor">As his/her professor</option>
                <option value="As his/her research adviser">As his/her research adviser</option>
                <option value="As his/her employer/supervisor">As his/her employer/supervisor</option>
                <option value="Others">Others</option>           
                </select>

            <div v-if="recoQuestion1 === 'Others'">
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">if others, please specify details (e.g.,partner instituition)</label>
            <textarea id="reco_question_others" v-model="recoQuestion1others" class=" text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none resize-none px-2 py-3 w-full h-50" placeholder=""></textarea> 
            </div>
            <div>
            <label class="font-bold mb-2 block text-sm text-gray-900 dark:text-gray-900">2. Was the applicant enrolled in any of your classes; and if so, in what subjects?</label>
            <textarea id="reco_question2" v-model="recoQuestion2" class=" text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none resize-none px-2 py-3 w-full h-50" placeholder=""></textarea> 
            </div>

            <div>
            <label class="font-bold mb-2 block text-sm text-gray-900 dark:text-gray-900">3. Please describe the applicant's potential for teaching and research</label>
            <label class="text-sm "> From the scale of 1 to 5 rate the applicant potential (1 being the lowest, 5 being the highest)</label>  
              <select id="reco_question3" v-model="recoQuestion3" class="mb-4 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                <option>--</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>   
                <option>5</option>          
                </select>
            </div>
            <div>
            <label class="font-bold mb-2 block text-sm text-gray-900 dark:text-gray-900">4. What is the applicant's best quality and main weakness? Please enumerate the qualities that the applicant possesses
            and must have to qualify for admission to their chosen degree program. </label>
            <textarea id="reco_question4" v-model="recoQuestion4" class=" text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none resize-none px-2 py-3 w-full h-50" placeholder=""></textarea> 
            </div>
             <div>
            <label class="font-bold mb-2 block text-sm text-gray-900 dark:text-gray-900">5. Please describe the applicant's professional experience in relation to the degree sought</label>
            <label class="text-sm"> From the scale of 1 to 5 rate the applicant relevant (1 being the lowest, 5 being the highest)</label>  
              <select id="reco_question5" v-model="recoQuestion5" class="mb-4 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                <option>--</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>   
                <option>5</option>          
                </select>
            </div>

              <div>
                <label class="font-bold mb-2 block text-sm text-gray-900 dark:text-gray-900">6. If possible, please describe a workplace/classroom/field situation where the applicant displayed capability to bring
                collaborative work to a successful conclusion?</label>
                <textarea id="reco_question6" v-model="recoQuestion6" class=" text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none resize-none px-2 py-3 w-full h-50" placeholder=""></textarea> 
                </div>

                 <div>
                <label class="font-bold mb-2 block text-sm text-gray-900 dark:text-gray-900">7. What skills/knowledge/values that will be acquired in their chosen degree program are essential to the current or future
                career of the applicant?</label>  
                <label class="text-sm"> From the scale of 1 to 5 rate the applicant essential (1 being the lowest, 5 being the highest)</label>  
                <select id="reco_question7" v-model="recoQuestion7" class="mb-4 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                <option>--</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>   
                <option>5</option>          
                </select>
                </div>

                <div class="mb-6">
                <label class="font-bold mb-2 block text-sm text-gray-900 dark:text-gray-900">8. Please rate the applicant on each characteristic.</label>
                  <label class="text-sm"> From the scale of 1 to 5 rate the applicant characteristic (1 being the lowest, 5 being the highest)</label>  
                </div>
                <div>
                <label class="text-sm text-red-700">*Applicant is not discriminatory towards gender, political orientation, religion, race, class, age, health, and belief of
                    others.</label>
                </div>
                <label class="text-sm text-red-700">**Particularly, proficiency in the English language is most important</label>
                <div class="mt-8 sm:grid sm:mt-5 sm:grid-cols-2 sm:gap-4 sm:pt-5">
                     <label> Intellectual Capacity</label>  
                     <select id="intellectual_capacity" v-model="intellectualCapacity" class="mb-4 form-control block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                <option>--</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>   
                <option>5</option>    
                <option>No Basis for Judgment</option>        
                </select>
                </div>
                <div class="mt-8 sm:grid sm:mt-5 sm:grid-cols-2 sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                     <label> Critical thinking ability</label>  
                     <select id="critical_thinking" v-model="criticalThinking" class="mb-4 form-control block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                <option>--</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>   
                <option>5</option>    
                <option>No Basis for Judgment</option>        
                </select>
                </div>
                <div class="mt-8 sm:grid sm:mt-5 sm:grid-cols-2 sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                     <label> Desire to achieve ambition</label>  
                     <select id="achieve_ambition" v-model="achieveAmbition" class="mb-4 form-control block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                <option>--</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>   
                <option>5</option>    
                <option>No Basis for Judgment</option>        
                </select>
                </div>
                 <div class="mt-8 sm:grid sm:mt-5 sm:grid-cols-2 sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                     <label>Desire for lifelong learning</label>  
                     <select id="lifelong_learning" v-model="lifelongLearning" class="mb-4 form-control block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                <option>--</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>   
                <option>5</option>    
                <option>No Basis for Judgment</option>        
                </select>
                </div>
                <div class="mt-8 sm:grid sm:mt-5 sm:grid-cols-2 sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                     <label>Potential for success in major field</label>  
                     <select id="potential_success" v-model="potentialSuccess" class="mb-4 form-control block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                <option>--</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>   
                <option>5</option>    
                <option>No Basis for Judgment</option>        
                </select>
                </div>
                 <div class="mt-8 sm:grid sm:mt-5 sm:grid-cols-2 sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                     <label>Professionalism and ethical behavior</label>  
                     <select id="ethical_bevaior" v-model="ethicalBehavior" class="mb-4 form-control block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                <option>--</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>   
                <option>5</option>    
                <option>No Basis for Judgment</option>        
                </select>
                </div>
                <div class="mt-8 sm:grid sm:mt-5 sm:grid-cols-2 sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                     <label>Emotional maturity</label>  
                     <select id="emotional_maturity" v-model="emotionalMaturity" class="mb-4 form-control block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                <option>--</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>   
                <option>5</option>    
                <option>No Basis for Judgment</option>        
                </select>
                </div>
                 <div class="mt-8 sm:grid sm:mt-5 sm:grid-cols-2 sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                     <label>Enthusiasm</label>  
                     <select id="enthusiasm" v-model="enthusiasm" class="mb-4 form-control block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                <option>--</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>   
                <option>5</option>    
                <option>No Basis for Judgment</option>        
                </select>
                </div>
                 <div class="mt-8 sm:grid sm:mt-5 sm:grid-cols-2 sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                     <label>Initiative</label>  
                     <select id="initiative" v-model="initiative" class="mb-4 form-control block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                <option>--</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>   
                <option>5</option>    
                <option>No Basis for Judgment</option>        
                </select>
                </div>
                <div class="mt-8 sm:grid sm:mt-5 sm:grid-cols-2 sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                     <label> Resourcefulness </label>  
                     <select id="resourcefulness" v-model="resourcefulness" class="mb-4 form-control block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                <option>--</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>   
                <option>5</option>    
                <option>No Basis for Judgment</option>        
                </select>
                </div>
                 <div class="mt-8 sm:grid sm:mt-5 sm:grid-cols-2 sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                     <label> Creativity </label>  
                     <select id="creativity" v-model="creativity" class="mb-4 form-control block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                <option>--</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>   
                <option>5</option>    
                <option>No Basis for Judgment</option>        
                </select>
                </div>
                <div class="mt-8 sm:grid sm:mt-5 sm:grid-cols-2 sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                     <label> Resilience/grit  </label>  
                     <select id="resilience" v-model="resilience" class="mb-4 form-control block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                <option>--</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>   
                <option>5</option>    
                <option>No Basis for Judgment</option>        
                </select>
                </div>
                <div class="mt-8 sm:grid sm:mt-5 sm:grid-cols-2 sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                     <label> Ability to take responsibility  </label>  
                     <select id="take_responsibility" v-model="takeResponsibility" class="mb-4 form-control block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                <option>--</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>   
                <option>5</option>    
                <option>No Basis for Judgment</option>        
                </select>
                </div>
                 <div class="mt-8 sm:grid sm:mt-5 sm:grid-cols-2 sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                     <label>Ability to work independently</label>  
                     <select id="work_independently" v-model="workIndependently" class="mb-4 form-control block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                <option>--</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>   
                <option>5</option>    
                <option>No Basis for Judgment</option>        
                </select>
                </div>
                 <div class="mt-8 sm:grid sm:mt-5 sm:grid-cols-2 sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                     <label>Carefulness in work</label>  
                     <select id="carefulness" v-model="carefulness" class="mb-4 form-control block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                <option>--</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>   
                <option>5</option>    
                <option>No Basis for Judgment</option>        
                </select>
                </div>
                <div class="mt-8 sm:grid sm:mt-5 sm:grid-cols-2 sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                     <label>Tidiness in work</label>  
                     <select id="tindiness" v-model="tindiness" class="mb-4 form-control block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                <option>--</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>   
                <option>5</option>    
                <option>No Basis for Judgment</option>        
                </select>
                </div>
                 <div class="mt-8 sm:grid sm:mt-5 sm:grid-cols-2 sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                     <label>Accuracy and precision in work</label>  
                     <select id="precision_work" v-model="precisionWork" class="mb-4 form-control block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                <option>--</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>   
                <option>5</option>    
                <option>No Basis for Judgment</option>        
                </select>
                </div>
                 <div class="mt-8 sm:grid sm:mt-5 sm:grid-cols-2 sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                     <label>Efficiency in work</label>  
                     <select id="efficiency_work" v-model="efficiencyWork" class="mb-4 form-control block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                <option>--</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>   
                <option>5</option>    
                <option>No Basis for Judgment</option>        
                </select>
                </div>
                 <div class="mt-8 sm:grid sm:mt-5 sm:grid-cols-2 sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                     <label>Originality/ingenuity</label>  
                     <select id="ingenuity" v-model="ingenuity" class="mb-4 form-control block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                <option>--</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>   
                <option>5</option>    
                <option>No Basis for Judgment</option>        
                </select>
                </div>
                <div class="mt-8 sm:grid sm:mt-5 sm:grid-cols-2 sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                     <label>Equitable treatment of others*</label>  
                     <select id="equitable_treatment" v-model="equitableTreatment" class="mb-4 form-control block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                <option>--</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>   
                <option>5</option>    
                <option>No Basis for Judgment</option>        
                </select>
                </div>
                <div class="mt-8 sm:grid sm:mt-5 sm:grid-cols-2 sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                     <label>Ability to work with others</label>  
                     <select id="work_others" v-model="workOthers" class="mb-4 form-control block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                <option>--</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>   
                <option>5</option>    
                <option>No Basis for Judgment</option>        
                </select>
                </div>
                <div class="mt-8 sm:grid sm:mt-5 sm:grid-cols-2 sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                     <label>Ability to adjust in new situations</label>  
                     <select id="adjust_situations" v-model="adjustSituations" class="mb-4 form-control block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                <option>--</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>   
                <option>5</option>    
                <option>No Basis for Judgment</option>        
                </select>
                </div>
                <div class="mt-8 sm:grid sm:mt-5 sm:grid-cols-2 sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                     <label>Leadership qualities</label>  
                     <select id="leadership_qualities" v-model="leadershipQualities" class="mb-4 form-control block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                <option>--</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>   
                <option>5</option>    
                <option>No Basis for Judgment</option>        
                </select>
                </div>
                <div class="mt-8 sm:grid sm:mt-5 sm:grid-cols-2 sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                     <label>Written expression skills**</label>  
                     <select id="written_expression_skills" v-model="writtenExpressionSkills" class="mb-4 form-control block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                <option>--</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>   
                <option>5</option>    
                <option>No Basis for Judgment</option>        
                </select>
                </div>
                <div class="mt-8 sm:grid sm:mt-5 sm:grid-cols-2 sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                     <label>Oral expression skills**</label>  
                     <select id="oral_expression_skills" v-model="oralExpressionSkills" class="mb-4 form-control block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                <option>--</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>   
                <option>5</option>    
                <option>No Basis for Judgment</option>        
                </select>
                </div>
                <div class="mt-8 sm:grid sm:mt-5 sm:grid-cols-2 sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                     <label>Time management skills</label>  
                     <select id="time_management" v-model="timeManagement" class="mb-4 form-control block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                <option>--</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>   
                <option>5</option>    
                <option>No Basis for Judgment</option>        
                </select>
                </div>

                <div class="mt-8 sm:border-t sm:border-gray-200 ">
            <label class="font-bold mb-2 block text-sm text-gray-900 dark:text-gray-900 sm:pt-5">9. Please indicate additional information concerning the applicant’s potential as a graduate student that may not be
                reflected in the transcript of records. Use additional sheets if needed.</label>
            <textarea id="reco_question9" v-model="recoQuestion9" class=" text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none resize-none px-2 py-3 w-full h-50" placeholder=""></textarea> 
            </div>

               <div class="mt-8">
            <label class="font-bold mb-2 block text-sm text-gray-900 dark:text-gray-900">10. Please indicate the strength of your overall endorsement and your expectations of the performance of the applicant in
                their graduate study.</label>
               
               <left>
               <div>
            <input v-model="strengths" type="checkbox" value="Outstanding">
            <label >Outstanding</label>   
        </div>
        <div>
            <input v-model="strengths" type="checkbox" value="Above Average">
            <label>Above Average</label>   
        </div>
         <div>
            <input v-model="strengths" type="checkbox" value="Satisfactory">
            <label>Satisfactory</label>   
        </div>
        <div>
            <input v-model="strengths" type="checkbox" value="Some Reservations">
            <label>Some Reservations</label>   
        </div>
        <div>
            <input v-model="strengths" type="checkbox" value="Marginal">
            <label>Marginal</label>   
        </div>
        <div>
            <input v-model="strengths" type="checkbox" value="Unsatisfactory">
            <label>Unsatisfactory</label>   
        </div>
        
            </left>
          </div>
          
        <div class="mt-4 flex-grow h-px bg-red-900"></div> 
         <div id="checkboxes" class="bg-grey-800 px-4 py-5 sm:p-6">
        
        <label class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Name of the Evaluator</label>
        <input id="evaluator_name" v-model="evaluatorName"  type="text"  class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" required>  
        <label  class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Position</label>
        <input id="evaluator_position" v-model="evaluatorPosition" type="text"  class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"  required>  
        <label class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Institution</label>
        <input id="evaluator_institution" v-model="evaluatorInstitution" type="text"  class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"  required>
         <label class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Email Address</label>
        <input id="evaluatorEmail" v-model="evaluatorEmail" type="text"  class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"   required>
        </div>

                <div class="mt-8 flex justify-center items-center">
                 <label class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Thank you for completing this recommendation</label>
                 </div>

                    <div class="flex items-center justify-center">
                    <button
                    type="button" class=" inline-block px-10 py-5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase 
                    hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out 
                     " @click="submitAdd">Submit</button>
                    </div>
                    </div>
        

    </div>
    </div>

    </div>
</template>
<script> 
import axios from 'axios'
export default { 
    name: "RecommendationForm",
data() {
      return{
     recoFirstName:'',
     recoMiddleName:'',
     recoLastName:'',
     recoDegreeSought:'',
     proposedMajor:'',
     dualDouble:'',
     dualYes:'',
     recoQuestion1:'',
     recoQuestion1others:'',
     recoQuestion2:'',
     recoQuestion3:'',
     recoQuestion4:'',
     recoQuestion5:'',
     recoQuestion6:'',
     recoQuestion7:'',
     intellectualCapacity:'',
     criticalThinking:'',
     achieveAmbition:'',
     lifelongLearning:'',
     potentialSuccess:'',
     ethicalBehavior:'',
     emotionalMaturity:'',
     enthusiasm:'',
     initiative:'',
     resourcefulness:'',
     creativity:'',
     resilience:'',
     takeResponsibility:'',
     workIndependently:'',
     carefulness:'',
     tindiness:'',
     precisionWork:'',
     efficiencyWork:'',
     ingenuity:'',
     equitableTreatment:'',
     workOthers:'',
     adjustSituations:'',
     leadershipQualities:'',
     writtenExpressionSkills:'',
     oralExpressionSkills:'',
     timeManagement:'',
     recoQuestion9:'',
     evaluatorName:'',
     evaluatorPosition:'',
     evaluatorInstitution:'',
     evaluatorEmail:'',
     strengths:[]
     
      }    
},
head() {
        return {
            title: "Standard Recommendation Form",
            meta: [
                {
                    hid: "description",
                    name: "description",
                    content: "UPLB Gradtuate School"
                }
            ]
        };
    },

methods:{
async submitAdd()
  {
    const result = await axios.post("http://localhost:3000/recommendation",{
          recoFirstName:this.recoFirstName,
          recoMiddleName:this.recoMiddleName,
          recoLastName:this.recoLastName,
          recoDegreeSought:this.recoDegreeSought,
          proposedMajor:this.proposedMajor,
          dualDouble:this.dualDouble,
          dualYes:this.dualYes,
          recoQuestion1:this.recoQuestion1,
          recoQuestion1others:this.recoQuestion1others,
          recoQuestion2:this.recoQuestion2,
          recoQuestion3:this.recoQuestion3,
          recoQuestion4:this.recoQuestion4,
          recoQuestion5:this.recoQuestion5,
          recoQuestion6:this.recoQuestion6,
          recoQuestion7:this.recoQuestion7,
          intellectualCapacity:this.intellectualCapacity,
          criticalThinking:this.criticalThinking,
          achieveAmbition:this.achieveAmbition,
          lifelongLearning:this.lifelongLearning,
          potentialSuccess:this.potentialSuccess,
          ethicalBehavior:this.ethicalBehavior,
          emotionalMaturity:this.emotionalMaturity,
          enthusiasm:this.enthusiasm,
          initiative:this.initiative,
          resourcefulness:this.resourcefulness,
          creativity:this.creativity,
          resilience:this.resilience,
          takeResponsibility:this.takeResponsibility,
          workIndependently:this.workIndependently,
          carefulness:this.carefulness,
          tindiness:this.tindiness,
          precisionWork:this.precisionWork,
          efficiencyWork:this.efficiencyWork,
          ingenuity:this.ingenuity,
          equitableTreatment:this.equitableTreatment,
          workOthers:this.workOthers,
          adjustSituations:this.adjustSituations,
          leadershipQualities:this.leadershipQualities,
          writtenExpressionSkills:this.writtenExpressionSkills,
          oralExpressionSkills:this.oralExpressionSkills,
          timeManagement:this.timeManagement,
          recoQuestion9:this.recoQuestion9,
          evaluatorName:this.evaluatorName,
          evaluatorPosition:this.evaluatorPosition,
          evaluatorInstitution:this.evaluatorInstitution,
          evaluatorEmail:this.evaluatorEmail,
          strengths:this.strengths,
          evaluator:this.evaluator
      
    },
    );
    if(result.status===201)
    {   
      localStorage.setItem("user-info",JSON.stringify(result.data))
      alert("Submit Success")
      await this.$router.push("/");
    } 
    },
  },
  

}


</script>
<template> 
          <div class=" flex justify-center items-center  bg-grey-200 ">      
               <div class="w-1/2 bg-grey-50 rounded shadow-2xl p-20 m-2">
               <div class="flex justify-center items-center ">
               <img src="https://amis.uplb.edu.ph/logos/uplb-logo.png" class="items-center mr-3 h-26 sm:h-26">
               </div>
                <h1 class="block w-full text-center text-gray-900 text-2xl font-bold">University of the Philippines Los Baños</h1>
                <h2 class="block w-full text-center text-gray-900 text-1xl font-medium mb-4">Graduate School</h2>
                <h3 class="block w-full text-center text-gray-900 text-1xl  mb-6">College, Laguna, 4031, Philippines</h3>
                <h4 class="block w-full text-center text-gray-900 text-2xl font-bold mb-6">MASTER OF FOOD ENGINEERING RECOMMENDATION FORM</h4>
       
    
            <div class="bg-grey-800 px-4 py-5 sm:p-6">
            <label class="font-bold mb-2 block text-sm text-gray-900 dark:text-gray-900">1. Name of Applicant</label>
            <label class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">First name</label>
            <input id="reco_firstName2" v-model="recoFirstName2"  type="text"  class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder=" FirstName" required="">  
            <label  class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Middle name</label>
            <input id="reco_middleName2" v-model="recoMiddleName2" type="text"  class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Middle Name" required>  
            <label class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Last name</label>
            <input id="reco_lastName2" v-model="recoLastName2" type="text"  class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"  placeholder="Last Name" required>
            </div>


            <label> TO THE EVALUATOR: Write down your responses to each question in the blank spaces provided. For each
            question, encircle the appropriate number that corresponds to your assessment of the applicant. Your
            responses will be considered confidential. Please return directly to the UPLB Graduate School. </label>

             <h5 class="block w-full text-center text-gray-900 text-1xl font-bold mt-6"> RECOMMENDATION</h5>

             <div class="bg-grey-800 px-4 py-5 sm:p-6">
            <label class="font-bold mb-2 block text-sm text-gray-900 dark:text-gray-900">2. How long have you known the applicant and in what capacity?</label>
            <select
                id="FE_reco" v-model="FEreco" name="FEreco"
                class="mb-2 block appearance-none w-25 bg-white border border-gray-600 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                <option value="">--</option>
                <option value="As Employer/Supervisor">As Employer/Supervisor</option>
                <option value="As colleague">As colleague</option>
              </select>
              <div v-if="FEreco === 'As Employer/Supervisor'" class="font-bold mb-2 block text-sm text-gray-900 dark:text-gray-900">
             <label >Years</label>
              <input id="year_FE" v-model="yearFE" type="number"  class=" form-control block w-1/4 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
            </div>
            <div v-if="FEreco === 'As colleague'" class="font-bold mb-2 block text-sm text-gray-900 dark:text-gray-900">
             <label >Years</label>
              <input id="year_FE" v-model="yearFE" type="number"  class=" form-control block w-1/4 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
            </div>

            <label class="font-bold mb-2 block text-sm text-gray-900 dark:text-gray-900">3. What is the applicant's best quality and main weakness?</label>
             <textarea id="FE_question3" v-model="FEQuestion3" class=" text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none resize-none px-2 py-3 w-full h-50" placeholder=""></textarea> 
             
             <label class="font-bold mb-2 block text-sm text-gray-900 dark:text-gray-900">4. Please describe the applicant's professional experience in relation to the degree sought.</label>
             <textarea id="FE_question4" v-model="FEQuestion4" class=" text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none resize-none px-2 py-3 w-full h-50" placeholder=""></textarea> 
           <label class="text-sm"> From the scale of 1 to 5 rate if it is UnRelated or Related(1 being the lowest, 5 being the highest)</label>  
            <select id="FE_question4Rate" v-model="FEQuestion4Rate" class="mb-4 form-control block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                <option>--</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>   
                <option>5</option>    
                </select>

                <label class="font-bold mb-2 block text-sm text-gray-900 dark:text-gray-900">5. Could you describe a workplace situation where the applicant displayed capability to bring
                collaborative work to a successful conclusion?</label>
                <textarea id="FE_question5" v-model="FEQuestion5" class=" text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none resize-none px-2 py-3 w-full h-50" placeholder=""></textarea> 

                <label class="font-bold mb-2 block text-sm text-gray-900 dark:text-gray-900">6. Are the skills / knowledge that will be acquired in the MFE program essential to the current
                or future position / role of the applicant in the company?</label>
                <textarea id="FE_question6" v-model="FEQuestion6" class=" text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none resize-none px-2 py-3 w-full h-50" placeholder=""></textarea>
                 <label class="text-sm"> From the scale of 1 to 5 rate if it is Not Essential or Essential(1 being the lowest, 5 being the highest)</label>  
                    <select id="FE_question6Rate" v-model="FEQuestion6Rate" class="mb-4 form-control block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                    <option>--</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>   
                    <option>5</option>    
                    </select>

                        <label class="font-bold mb-2 block text-sm text-gray-900 dark:text-gray-900">7. What qualities does the applicant have to qualify for admission to the Master in Food
                        Engineering program?</label>
                <textarea id="FE_question7" v-model="FEQuestion7" class=" text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none resize-none px-2 py-3 w-full h-50" placeholder=""></textarea>
                 <label class="text-sm"> From the scale of 1 to 5 rate if it is Not Essential or Essential(1 being the lowest, 5 being the highest)</label>  
                    <select id="FE_question7Rate" v-model="FEQuestion7Rate" class="mb-4 form-control block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                    <option>--</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>   
                    <option>5</option>    
                    </select>

                     <label class="font-bold mb-2 block text-sm text-gray-900 dark:text-gray-900">8. How well does the applicant work with others? Is he/she capable of working harmoniously
                    with people of different technical background, gender, and/or political orientation?</label>
                <textarea id="FE_question8" v-model="FEQuestion8" class=" text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none resize-none px-2 py-3 w-full h-50" placeholder=""></textarea>
                 <label class="text-sm"> From the scale of 1 to 5 rate if the applicant is a team player. (1 being the lowest, 5 being the highest)</label>  
                    <select id="FE_question8Rate" v-model="FEQuestion8Rate" class="mb-4 form-control block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                    <option>--</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>   
                    <option>5</option>    
                    </select>

                     <label class="font-bold mb-2 block text-sm text-gray-900 dark:text-gray-900">9. How well does the applicant communicate his/her ideas?</label>
                <textarea id="FE_question9" v-model="FEQuestion9" class=" text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none resize-none px-2 py-3 w-full h-50" placeholder=""></textarea>
                 <label class="text-sm"> From the scale of 1 to 5 rate if the applicant can communicates well.(1 being the lowest, 5 being the highest)</label>  
                    <select id="FE_question9Rate" v-model="FEQuestion9Rate" class="mb-4 form-control block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                    <option>--</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>   
                    <option>5</option>    
                    </select>

                    <label class="font-bold mb-2 block text-sm text-gray-900 dark:text-gray-900">10. How does the applicant handle setbacks? Does he/she show resilience in the face of
                    difficulties at work?</label>
                <textarea id="FE_question10" v-model="FEQuestion10" class=" text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none resize-none px-2 py-3 w-full h-50" placeholder=""></textarea>
                 <label class="text-sm"> From the scale of 1 to 5 rate the applicant resilient (1 being the lowest, 5 being the highest)</label>  
                    <select id="FE_question10Rate" v-model="FEQuestion10Rate" class="mb-4 form-control block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                    <option>--</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>   
                    <option>5</option>    
                    </select>


                    <label class="font-bold mb-2 block text-sm text-gray-900 dark:text-gray-900">11. Please indicate additional information concerning the applicant's potential as a graduate
                    student that may not be reflected in the transcript of records. Use additional sheets if
                    needed.</label>
                <textarea id="FE_question11" v-model="FEQuestion11" class=" text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none resize-none px-2 py-3 w-full h-50" placeholder=""></textarea>
                 
                 <label class="font-bold mb-2 block text-sm text-gray-900 dark:text-gray-900">12. Please indicate the level of the applicant for each characteristic:</label>
                    <div class="mt-8 sm:grid sm:mt-5 sm:grid-cols-2 sm:gap-4 sm:pt-5">
                    <label>Analytical ability</label>  
                    <select id="analytical_ability" v-model="analyticalAbility" class="mb-4 form-control block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                    <option>--</option>
                    <option>Excellent</option>
                    <option>Good</option>
                    <option>Average</option>
                    <option>No Opinion</option>         
                    </select>
                    </div>

                     <div class="mt-8 sm:grid sm:mt-5 sm:grid-cols-2 sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                    <label>Ability to synthesize</label>  
                    <select id="ability_synthesize" v-model="abilitySynthesize" class="mb-4 form-control block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                    <option>--</option>
                    <option>Excellent</option>
                    <option>Good</option>
                    <option>Average</option>
                    <option>No Opinion</option>         
                    </select>
                    </div>

                     <div class="mt-8 sm:grid sm:mt-5 sm:grid-cols-2 sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                    <label>Written expression (English /
                        Filipino)</label>  
                    <select id="written_expression" v-model="writtenExpression" class="mb-4 form-control block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                    <option>--</option>
                    <option>Excellent</option>
                    <option>Good</option>
                    <option>Average</option>
                    <option>No Opinion</option>         
                    </select>
                    </div>

                    <div class="mt-8 sm:grid sm:mt-5 sm:grid-cols-2 sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                    <label>Spoken expression (English /
                        Filipino)</label>  
                    <select id="spoken_expression" v-model="spokenExpression" class="mb-4 form-control block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                    <option>--</option>
                    <option>Excellent</option>
                    <option>Good</option>
                    <option>Average</option>
                    <option>No Opinion</option>         
                    </select>
                    </div>

                     <div class="mt-8 sm:grid sm:mt-5 sm:grid-cols-2 sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                    <label>Work capacity</label>  
                    <select id="work_capacity" v-model="workCapacity" class="mb-4 form-control block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                    <option>--</option>
                    <option>Excellent</option>
                    <option>Good</option>
                    <option>Average</option>
                    <option>No Opinion</option>         
                    </select>
                    </div>

                    <div class="mt-8 sm:grid sm:mt-5 sm:grid-cols-2 sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                    <label>Professionalism</label>  
                    <select id="professionalism" v-model="professionalism" class="mb-4 form-control block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                    <option>--</option>
                    <option>Excellent</option>
                    <option>Good</option>
                    <option>Average</option>
                    <option>No Opinion</option>         
                    </select>
                    </div>

                    <div class="mt-8 sm:grid sm:mt-5 sm:grid-cols-2 sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                    <label>Sociability</label>  
                    <select id="sociability" v-model="sociability" class="mb-4 form-control block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                    <option>--</option>
                    <option>Excellent</option>
                    <option>Good</option>
                    <option>Average</option>
                    <option>No Opinion</option>         
                    </select>
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


                    <div class="mt-8 flex justify-center items-center sm:pt-5">
                 <label class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Thank you for completing this recommendation</label>
                 </div>

                    <div class="mt-8 flex items-center justify-center">
                    <button
                    type="button" class=" mt-8 inline-block px-10 py-5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase 
                    hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out 
                     " @click="submitAdd">Submit</button>
                    </div>
                    
            </div>
            
          
        
     </div>
  

    </div>
   
</template>
 <script>
 import axios from 'axios'
 
 export default{
  name:"FoodEngineeringForm",
  data(){
return{
    recoFirstName2:'',
    recoMiddleName2:'',
    recoLastName2:'',
    FEreco:'',
    yearFE:'',
    FEQuestion3:'',
    FEQuestion4:'',
    FEQuestion4Rate:'',
    FEQuestion5:'',
    FEQuestion6:'',
    FEQuestion6Rate:'',
    FEQuestion7:'',
    FEQuestion7Rate:'',
    FEQuestion8:'',
    FEQuestion8Rate:'',
    FEQuestion9:'',
    FEQuestion9Rate:'',
    FEQuestion10:'',
    FEQuestion10Rate:'',
    FEQuestion11:'',
    analyticalAbility:'',
    abilitySynthesize:'',
    writtenExpression:'',
    spokenExpression:'',
    workCapacity:'',
    professionalism:'',
    sociability:'',
    evaluatorName:'',
    evaluatorPosition:'',
    evaluatorInstitution:'',
    evaluatorEmail:'',

    
}
  },
  head() {
        return {
            title: "Master of Food Engineering Recommendation Form",
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
            recoFirstName2:this.recoFirstName2,
            recoMiddleName2:this.recoMiddleName2,
            recoLastName2:this.recoLastName2,
            FEQuestion3:this.FEQuestion3,
            FEreco:this.FEreco,
            yearFE:this.yearFE,
            FEQuestion4:this.FEQuestion4,
            FEQuestion4Rate:this.FEQuestion4Rate,
            FEQuestion5:this.FEQuestion5,
            FEQuestion6:this.FEQuestion6,
            FEQuestion6Rate:this.FEQuestion6Rate,
            FEQuestion7:this.FEQuestion7,
            FEQuestion7Rate:this.FEQuestion7Rate,
            FEQuestion8:this.FEQuestion8,
            FEQuestion8Rate:this.FEQuestion8Rate,
            FEQuestion9:this.FEQuestion9,
            FEQuestion9Rate:this.FEQuestion9Rate,
            FEQuestion10:this.FEQuestion10,
            FEQuestion10Rate:this.FEQuestion10Rate,
            FEQuestion11:this.FEQuestion11,
            analyticalAbility:this.analyticalAbility,
            abilitySynthesize:this.abilitySynthesize,
            writtenExpression:this.writtenExpression,
            spokenExpression:this.spokenExpression,
            workCapacity:this.workCapacity,
            professionalism:this.professionalism,
            sociability:this.sociability,
            evaluatorName:this.evaluatorName,
            evaluatorPosition:this.evaluatorPosition,
            evaluatorInstitution:this.evaluatorInstitution,
            evaluatorEmail:this.evaluatorEmail,

      
    },
    );
    if(result.status===201)
    {   
      localStorage.setItem("user-info",JSON.stringify(result.data))
      alert("Submit Success")
      await this.$router.push("/");
    } 
  }
  },

 }
 </script>
 
<template>  
<div>
<GpmcNarbar />
    <div class="flex justify-center items-center  bg-grey-200 ">      
        <div class="w-1/2 bg-grey-50 rounded shadow-2xl p-20 m-2">
        <h1 class="block w-full text-center text-gray-600 text-2xl font-bold mb-6">GPMC APPROVAL</h1>
        <div class="px-12 max-w-5xl">
            <div class="mt-8 sm:grid sm:mt-5 sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
        <dt class="text-sm leading-5 font-medium text-gray-700">
          Admin Remarks:
        </dt>
        <dd class="pb-8 mt-1 text-sm leading-5 text-red-900 sm:mt-0 sm:col-span-2">
          {{ applicant.adminRemarks }}
        </dd>
      </div>

            
            <div class="flex-grow h-px bg-red-900"></div> 
            
            <h1 class="pt-8 font-bold">Personal Information</h1> 
                <form>
            
              
                <div class="mt-8 sm:grid sm:mt-5 sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
        <dt class="text-sm leading-5 font-medium text-gray-700">
          Name:
        </dt>
        <dd class="mt-1 text-sm leading-5 text-red-900 sm:mt-0 sm:col-span-2">
            {{ applicant.firstName }}  {{ applicant.middleName }}  {{ applicant.lastName }}
        </dd>
      </div>
      <div class="mt-8 sm:grid sm:mt-5 sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
        <dt class="text-sm leading-5 font-medium text-gray-700">
          Sex:
        </dt>
        <dd class="mt-1 text-sm leading-5 text-red-900 sm:mt-0 sm:col-span-2">
            {{ applicant.sex }} 
        </dd>
      </div> 
      <div class="mt-8 sm:grid sm:mt-5 sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
        <dt class="text-sm leading-5 font-medium text-gray-700">
          Phone Number:
        </dt>
        <dd class="mt-1 text-sm leading-5 text-red-900 sm:mt-0 sm:col-span-2">
            {{ applicant.phoneNumber }} 
        </dd>
      </div>
      <div class="mt-8 sm:grid sm:mt-5 sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
        <dt class="text-sm leading-5 font-medium text-gray-700">
          Telophone Number
        </dt>
        <dd class="mt-1 text-sm leading-5 text-red-900 sm:mt-0 sm:col-span-2">
            {{ applicant.telNumber }} 
        </dd>
      </div>
      <div class="mt-8 sm:grid sm:mt-5 sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
        <dt class="text-sm leading-5 font-medium text-gray-700">
          Fax Number
        </dt>
        <dd class="mt-1 text-sm leading-5 text-red-900 sm:mt-0 sm:col-span-2">
            {{ applicant.faxNumber }} 
        </dd>
      </div>
      <div class="mt-8 sm:grid sm:mt-5 sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
        <dt class="text-sm leading-5 font-medium text-gray-700">
          Email:
        </dt>
        <dd class="mt-1 text-sm leading-5 text-red-900 sm:mt-0 sm:col-span-2">
            {{ applicant.email }} 
        </dd>
      </div>
      <div class="mt-8 sm:grid sm:mt-5 sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
        <dt class="text-sm leading-5 font-medium text-gray-700">
        Place of Birth
        </dt>
        <dd class="mt-1 text-sm leading-5 text-red-900 sm:mt-0 sm:col-span-2">
            {{ applicant.placeBirth }} 
        </dd>
      </div>
      <div class="mt-8 sm:grid sm:mt-5 sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
        <dt class="text-sm leading-5 font-medium text-gray-700">
          Date of Birth :
        </dt>
        <dd class="mt-1 text-sm leading-5 text-red-900 sm:mt-0 sm:col-span-2">
          {{ applicant.dateBirth }}
        </dd>
      </div>
      <div class="mt-8 sm:grid sm:mt-5 sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
        <dt class="text-sm leading-5 font-medium text-gray-700">
          Citizenship
        </dt>
        <dd class="mt-1 text-sm leading-5 text-red-900 sm:mt-0 sm:col-span-2">
          {{ applicant.citizenship }}
        </dd>
      </div>
      <div class="mt-8 sm:grid sm:mt-5 sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
        <dt class="text-sm leading-5 font-medium text-gray-700">
          Civil Status:
        </dt>
        <dd class="mt-1 text-sm leading-5 text-red-900 sm:mt-0 sm:col-span-2">
          {{ applicant.civilStatus }}
        </dd>
      </div>
      <div class="mt-8 sm:grid sm:mt-5 sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
        <dt class="text-sm leading-5 font-medium text-gray-700">
            Present Occupation / Position:
        </dt>
        <dd class="mt-1 text-sm leading-5 text-red-900 sm:mt-0 sm:col-span-2">
          {{ applicant.presentOccupation }}
        </dd>
      </div>
      <div class="mt-8 sm:grid sm:mt-5 sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
        <dt class="text-sm leading-5 font-medium text-gray-700">
          Employer (Institution or Company):
        </dt>
        <dd class="mt-1 text-sm leading-5 text-red-900 sm:mt-0 sm:col-span-2">
          {{ applicant.employer }}
        </dd>
      </div>
      <div class="mt-8 sm:grid sm:mt-5 sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
        <dt class="text-sm leading-5 font-medium text-gray-700">
            Employer's Mailing Address:
        </dt>
        <dd class="mt-1 text-sm leading-5 text-red-900 sm:mt-0 sm:col-span-2">
          {{ applicant.empAddress }}
        </dd>
        </div>
        <div class="mt-8 sm:grid sm:mt-5 sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
        <dt class="text-sm leading-5 font-medium text-gray-700">
            Permanent Mailing Address:
        </dt>
        <dd class="pb-8 mt-1 text-sm leading-5 text-red-900 sm:mt-0 sm:col-span-2">
          {{ applicant.permanentAddress }}
        </dd>
      </div>
      <div class="flex-grow h-px bg-red-900"></div> 
            
            <h1 class="pt-8  font-bold">Application Information</h1> 
            
            <div class="mt-8 sm:grid sm:mt-5 sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
            <dt class="text-sm leading-5 font-medium text-gray-700">
              1. Type of Appliction
            </dt>
            <dd class="mt-1 text-sm leading-5 text-red-900 sm:mt-0 sm:col-span-2">
              {{ applicant.typeApplication }}
            </dd>
          </div>
          <div class="mt-8 sm:grid sm:mt-5 sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
            <dt class="text-sm leading-5 font-medium text-gray-700">
              2.  Are you applying for scholarship:
            </dt>
            <dd class="mt-1 text-sm leading-5 text-red-900 sm:mt-0 sm:col-span-2">
              {{ applicant.scholarship }}
            </dd>
          </div>
          <div class="mt-8 sm:grid sm:mt-5 sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
            <dt class="text-sm leading-5 font-medium text-gray-700">
                if yes, please specify:
            </dt>
            <dd class="mt-1 text-sm leading-5 text-red-900 sm:mt-0 sm:col-span-2">
              {{ applicant.scholarshipYes }}
            </dd>
              </div>
              <div class="mt-8 sm:grid sm:mt-5 sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
            <dt class="text-sm leading-5 font-medium text-gray-700">
                3. Are you going to study on:
            </dt>
            <dd class="mt-1 text-sm leading-5 text-red-900 sm:mt-0 sm:col-span-2">
              {{ applicant.goingStudy }}
            </dd>         
            </div>
            <div class="mt-8 sm:grid sm:mt-5 sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
            <dt class="text-sm leading-5 font-medium text-gray-700">
                4. Are you applying for Re-Admission:
            </dt>
            <dd class="mt-1 text-sm leading-5 text-red-900 sm:mt-0 sm:col-span-2">
              {{ applicant.reAdmission }}
            </dd>         
            </div>
            <div class="mt-8 sm:grid sm:mt-5 sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
            <dt class="text-sm leading-5 font-medium text-gray-700">
                5.  Program Sought
            </dt>
            <dd class="mt-1 text-sm leading-5 text-red-900 sm:mt-0 sm:col-span-2">
              {{ applicant.programs }}
            </dd>         
            </div>    
            
            <div class="mt-8 sm:grid sm:mt-5 sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
            <dt class="text-sm leading-5 font-medium text-gray-700">
              6.  Specific Area of Specialization:
            </dt>
            <dd class="mt-1 text-sm leading-5 text-red-900 sm:mt-0 sm:col-span-2">
              {{ applicant.areaSpecialization }}
            </dd>         
            </div>                   
            <div class="mt-8 sm:grid sm:mt-5 sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
            <dt class="text-sm leading-5 font-medium text-gray-700">
              7.  List of any Professor with whom you would especially like to work if given the opportunity:
            </dt>
            <dd class="mt-1 text-sm leading-5 text-red-900 sm:mt-0 sm:col-span-2">
              {{ applicant.listProfessor }}
            </dd>         
            </div>  
            <div class="mt-8 sm:grid sm:mt-5 sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
            <dt class="text-sm leading-5 font-medium text-gray-700">
              8.  Semester for which you are applying:
            </dt>
            <dd class="mt-1 text-sm leading-5 text-red-900 sm:mt-0 sm:col-span-2">
              {{ applicant.semester }}  {{ applicant.semesterDate }}
            </dd>         
            </div>    
            
            <div class="mt-8 sm:grid sm:mt-5 sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
            <dt class="text-sm leading-5 font-medium text-gray-700">
                9. Future plans after completion of graduate studies at the University of the Philippines Los Baños:
            </dt>
            
            <dd class="mt-1 text-sm leading-5 text-red-900 sm:mt-0 sm:col-span-2">
              {{ applicant.futurePlans }}
            </dd>         
            </div>      
            <div class="mt-8 sm:grid sm:mt-5 sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
            <dt class="text-sm leading-5 font-medium text-gray-700">
              10.  Academic Background: List of school
            </dt>    
            </div>      
            <div class="mt-8 sm:grid sm:mt-5 sm:grid-cols-3 sm:gap-4 sm:border-gray-200 sm:pt-5">
            <dt class="text-sm leading-5 font-medium text-gray-700">
                Institution(s) Attended:
            </dt>
            
            <dd class="mt-1 text-sm leading-5 text-red-900 sm:mt-0 sm:col-span-2">
                {{applicant.instituitions}}
            </dd>         
            </div>                           
            <div class="mt-8 sm:grid sm:mt-5 sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
            <dt class="text-sm leading-5 font-medium text-gray-700">
              Major
            </dt>
            
            <dd class="mt-1 text-sm leading-5 text-red-900 sm:mt-0 sm:col-span-2">
                {{applicant.majorAcadbackgroud}}
            </dd>         
            </div>                   
            <div class="mt-8 sm:grid sm:mt-5 sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
            <dt class="text-sm leading-5 font-medium text-gray-700">
                Degree
            </dt>
            
            <dd class="mt-1 text-sm leading-5 text-red-900 sm:mt-0 sm:col-span-2">
                {{applicant.degreeAcadbackgroud}} 
            </dd>         
            </div>        
            <div class="mt-8 sm:grid sm:mt-5 sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
            <dt class="text-sm leading-5 font-medium text-gray-700">
                Date:
            </dt>
            
            <dd class="mt-1 text-sm leading-5 text-red-900 sm:mt-0 sm:col-span-2">
              {{ applicant.dateAcadbackground }}
            </dd>         
            </div>       
          
            <div class="mt-8 sm:grid sm:mt-5 sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
            <dt class="text-sm leading-5 font-medium text-gray-700">
              11.  Have you previously applied for admission to graduate studies at UPLB?:
            </dt>
            
            <dd class="mt-1 text-sm leading-5 text-red-900 sm:mt-0 sm:col-span-2">
              {{ applicant.appliedBefore }}
            </dd>         
            </div>       
            <div class="mt-8 sm:grid sm:mt-5 sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
            <dt class="text-sm leading-5 font-medium text-gray-700">
                if yes, please specify:
            </dt>
            
            <dd class="mt-1 text-sm leading-5 text-red-900 sm:mt-0 sm:col-span-2">
              {{ applicant.beforeYes }}
            </dd>         
            </div>  
            <div class="mt-8 sm:grid sm:mt-5 sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
            <dt class="text-sm leading-5 font-medium text-gray-700">
                Date Submitted:
            </dt>
            
            <dd class="mt-1 text-sm leading-5 text-red-900 sm:mt-0 sm:col-span-2">
                {{applicant.dateAppliedbefore}} 
            </dd>         
            </div>       
                        
          
            <div class="mt-8 sm:grid sm:mt-5 sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
            <dt class="text-sm leading-5 font-medium text-gray-700">
              12.  Your most recent and most partinent occupational experience:
                
            </dt>    
            </div>      
            <div class="mt-8 sm:grid sm:mt-5 sm:grid-cols-3 sm:gap-4  sm:border-gray-200 sm:pt-5">
            <dt class="text-sm leading-5 font-medium text-gray-700">
                Name and Location of Employing Agency:
            </dt>
            
            <dd class="mt-1 text-sm leading-5 text-red-900 sm:mt-0 sm:col-span-2">
              {{ applicant.nameLocemp }}
            </dd>         
            </div>                           
            <div class="mt-8 sm:grid sm:mt-5 sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
            <dt class="text-sm leading-5 font-medium text-gray-700">
                Position:
            </dt>
            
            <dd class="mt-1 text-sm leading-5 text-red-900 sm:mt-0 sm:col-span-2">
              {{ applicant.positionRecentemployer }}
            </dd>         
            </div>                   
            <div class="mt-8 sm:grid sm:mt-5 sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
            <dt class="text-sm leading-5 font-medium text-gray-700">
                Date:
            </dt>
            
            <dd class="mt-1 text-sm leading-5 text-red-900 sm:mt-0 sm:col-span-2">
              {{ applicant.dateRecentemployer }} to {{ applicant.dateRecentemployer2 }}
            </dd>         
            </div>   
            <div class="mt-8 sm:grid sm:mt-5 sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
            <dt class="text-sm leading-5 font-medium text-gray-700">
              13.   Please list your membership in honor and professional organization:
            </dt>
            <dd class="mt-1 text-sm leading-5 text-red-900 sm:mt-0 sm:col-span-2">
              {{ applicant.listHonor }}
            </dd>
          </div>
          
          <div class="mt-8 sm:grid sm:mt-5 sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
            <dt class="text-sm leading-5 font-medium text-gray-700">
              14.  Publications: Give the complete bibliographical information:
            </dt>
            <dd class="mt-1 text-sm leading-5 text-red-900 sm:mt-0 sm:col-span-2">
              {{ applicant.publication }}
            </dd>
          </div>
          
          <div class="mt-8 sm:grid sm:mt-5 sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
            <dt class="text-sm leading-5 font-medium text-gray-700">
              15.   Unpublished research paper or thesis:
            </dt>
            <dd class="mt-1 text-sm leading-5 text-red-900 sm:mt-0 sm:col-span-2">
              {{ applicant.unpublishResearch }}
            </dd>
          </div>       
          
          <div class="mb-4 mt-8 flex-grow h-px bg-red-900"></div> 
            
          <h1 class="pt-4 font-bold">Recommendation</h1> 

          <div class="mt-8 sm:grid sm:mt-5 sm:border-t sm:border-gray-200 sm:pt-5">
            <dt class="text-sm leading-5 font-medium text-gray-700">
                Name, Title, Address and Email of the professor whom you have requested to recommend you
            </dt>
            </div>
            <div class="mt-8 sm:grid sm:mt-5 sm:border-t sm:border-gray-200 sm:pt-5">
            <dt class="text-sm leading-5 font-medium text-gray-700">
                Recommendation I
            </dt>
            </div>
            <div class="mt-8 sm:grid sm:mt-5 sm:grid-cols-3 sm:gap-4  sm:border-gray-200 sm:pt-5">
            <dt class="text-sm leading-5 font-medium text-gray-700">
                Title:
            </dt>
            
            <dd class="mt-1 text-sm leading-5 text-red-900 sm:mt-0 sm:col-span-2">
              {{ applicant.tRecommend }}
            </dd>         
            </div>                           
            <div class="mt-8 sm:grid sm:mt-5 sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
            <dt class="text-sm leading-5 font-medium text-gray-700">
                Name:
            </dt>
            
            <dd class="mt-1 text-sm leading-5 text-red-900 sm:mt-0 sm:col-span-2">
              {{ applicant.nameRecommendation }}
            </dd>         
            </div>                   
            <div class="mt-8 sm:grid sm:mt-5 sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
            <dt class="text-sm leading-5 font-medium text-gray-700">
                Address:
            </dt>
            
            <dd class="mt-1 text-sm leading-5 text-red-900 sm:mt-0 sm:col-span-2">
              {{ applicant.addressRecommendation }}
            </dd>         
            </div>   
            <div class="mt-8 sm:grid sm:mt-5 sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
              <dt class="text-sm leading-5 font-medium text-gray-700">
                  Email:
              </dt>
              
              <dd class="mt-1 text-sm leading-5 text-red-900 sm:mt-0 sm:col-span-2">
                {{ applicant.emailReco }}
          </dd>         
        </div>  
        <div class="mt-8 sm:grid sm:mt-5 sm:border-t sm:border-gray-200 sm:pt-5">
        <dt class="text-sm leading-5 font-medium text-gray-700">
            Recommendation II
        </dt>
        </div>
        <div class="mt-8 sm:grid sm:mt-5 sm:grid-cols-3 sm:gap-4  sm:border-gray-200 sm:pt-5">
        
        <dt class="text-sm leading-5 font-medium text-gray-700">
            Title:
        </dt>
        
        <dd class="mt-1 text-sm leading-5 text-red-900 sm:mt-0 sm:col-span-2">
          {{ applicant.tRecommend2 }}
        </dd>         
        </div>                           
        <div class="mt-8 sm:grid sm:mt-5 sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
        <dt class="text-sm leading-5 font-medium text-gray-700">
            Name:
        </dt>
        
        <dd class="mt-1 text-sm leading-5 text-red-900 sm:mt-0 sm:col-span-2">
          {{ applicant.nameRecommendation2 }}
        </dd>         
        </div>                   
        <div class="mt-8 sm:grid sm:mt-5 sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
        <dt class="text-sm leading-5 font-medium text-gray-700">
            Address:
        </dt>
        
        <dd class="mt-1 text-sm leading-5 text-red-900 sm:mt-0 sm:col-span-2">
          {{ applicant.addressRecommendation2 }}
        </dd>         
        </div>   
        <div class="mt-8 sm:grid sm:mt-5 sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
          <dt class="text-sm leading-5 font-medium text-gray-700">
              Email:
          </dt>
          
          <dd class="mt-1 text-sm leading-5 text-red-900 sm:mt-0 sm:col-span-2">
            {{ applicant.emailReco2 }}
      </dd>         
    </div>   

    <div class="mt-8 sm:grid sm:mt-5 sm:border-t sm:border-gray-200 sm:pt-5">
    <dt class="text-sm leading-5 font-medium text-gray-700">
        Recommendation III
    </dt>
    <dt class="text-sm leading-2 font-medium text-red-700">
      *For PhD Applicant
    </dt>
    </div>
    <div class="mt-8 sm:grid sm:mt-5 sm:grid-cols-3 sm:gap-4  sm:border-gray-200 sm:pt-5">
    
    <dt class="text-sm leading-5 font-medium text-gray-700">
        Title:
    </dt>
    
    <dd class="mt-1 text-sm leading-5 text-red-900 sm:mt-0 sm:col-span-2">
      {{ applicant.tRecommend3 }}
    </dd>         
    </div>                           
    <div class="mt-8 sm:grid sm:mt-5 sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
    <dt class="text-sm leading-5 font-medium text-gray-700">
        Name:
    </dt>
    
    <dd class="mt-1 text-sm leading-5 text-red-900 sm:mt-0 sm:col-span-2">
      {{ applicant.nameRecommendation3 }}
    </dd>         
    </div>                   
    <div class="mt-8 sm:grid sm:mt-5 sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
    <dt class="text-sm leading-5 font-medium text-gray-700">
        Address:
    </dt>
    
    <dd class="mt-1 text-sm leading-5 text-red-900 sm:mt-0 sm:col-span-2">
      {{ applicant.addressRecommendation3 }}
    </dd>         
    </div>   
    <div class="mt-8 sm:grid sm:mt-5 sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
      <dt class="text-sm leading-5 font-medium text-gray-700">
          Email:
      </dt>
      
      <dd class="mt-1 text-sm leading-5 text-red-900 sm:mt-0 sm:col-span-2">
        {{ applicant.emailReco3 }}
          </dd>         
        </div>   
        <div class="mb-4 mt-8 flex-grow h-px bg-red-900"></div> 
                    
        <h1 class="font-bold">Uploaded Files</h1> 

        <div class=" sm:border-gray-200 sm:pt-5">
          <dt class="text-sm leading-5 font-medium text-gray-700">
            PDF Files (Photos, Valid ID, TOR, Diploma, Recommendations Letters, International English Language, Payment)
          </dt>
          <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
              <embed src="" type="application/pdf"  frameBorder="0" scrolling="auto" width="25%" height="80%" />
          </dd>
        </div>  

        <div class="mb-4 mt-8 flex-grow h-px bg-red-900"></div>   
        <h1 class="pt-4 mb-4 text-red-700 font-bold">GPMC Action</h1> 
       

        <div>
          <label class="font-bold block mb-2  text-sm text-gray-900 dark:text-gray-900">STATUS</label>
          <div class="inline-block relative w-64">
              <select id="Status"  v-model="Status" class="block appearance-none w-25 bg-white border border-gray-600 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                <option>--</option>
                <option value="Decline">Decline</option>
                <option value="Probationary">Probationary</option>
                <option value="Regular">Regular</option>
              </select>
              </div>
          </div>

    

            <div  v-if="Status === 'Probationary'">
            <label class="font-bold block mb-2  text-sm text-gray-900 dark:text-gray-900">Condition</label>
             <textarea id="condition" v-model="Condition" class="  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none resize-none px-2 py-3 w-full h-50" placeholder=""></textarea>
              

                  <div class="dropdown">
                  <span>Institute :</span>
                  <select v-model="selectedInstitute" class="block appearance-none w-full bg-white border border-gray-600 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                  <option value="">Select a Institute</option>
                  <option v-for="institute in assetsInstitute" :key="institute.id" :value="institute.id">{{ institute.text }}</option>
                  </select>
                  </div>
                  <div class="dropdown">
                  <span>Temporary Adviser:</span>
                  <select v-model="selectedAdviser" class="block appearance-none w-full bg-white border border-gray-600 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" :disabled="!selectedInstitute">
                  <option value="">Select a Adviser</option>
                  <option v-for="adviser in adviserPairArr" :key="adviser.name" :value="adviser.name">{{ adviser.name }}</option>
                  </select>
                  </div>
                  </div>


                  <div  v-if="Status === 'Regular'">
                  <label class="font-bold block mb-2  text-sm text-gray-900 dark:text-gray-900"> Condition</label>
                  <textarea id="regular-condition" v-model="Condition" class="  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none resize-none px-2 py-3 w-full h-50" placeholder=""></textarea>
                  <div class="dropdown">
                  <span>Institute :</span>
                  <select v-model="selectedInstitute" class="block appearance-none w-full bg-white border border-gray-600 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                  <option value="">Select a Institute</option>
                  <option v-for="institute in assetsInstitute" :key="institute.id" :value="institute.id">{{ institute.text }}</option>
                  </select>
                  </div>
                  <div class="dropdown">
                  <span>Temporary Adviser:</span>
                  <select v-model="selectedAdviser" class="block appearance-none w-full bg-white border border-gray-600 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" :disabled="!selectedInstitute">
                  <option value="">Select a Adviser</option>
                  <option v-for="adviser in adviserPairArr" :key="adviser.name" :value="adviser.name">{{ adviser.name }}</option>
                  </select>
                  </div>
                  </div>
                  <label class="font-bold block mb-2  text-sm text-gray-900 dark:text-gray-900">Remarks:</label>
                  <textarea id="gpmc-remarks" v-model="gpmcRemarks" class="  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none resize-none px-2 py-3 w-full h-50" placeholder=""></textarea>


                                                         
          
            
            <div class=" my-0 flex items-center justify-center">
<div class="mt-8 inline-flex shadow-md hover:shadow-lg focus:shadow-lg" role="group">
    
    
    <button
            type="button" class=" inline-block px-10 py-5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase 
            hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out 
            btn btn-success send" @click="submitAdd">SUBMIT</button>
            </div>
             <GpmcModal v-show="showModal" />
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
    
     name: "GpmcApproval",
             

async asyncData({ params }) {
return await axios.get(`http://localhost:3000/applicants/${params.gpmc_approval}`).then(res => {
//  console.log(res.data)
return { applicant: res.data }
})

},
data() {
return {
   tempAdviser:'',
    Condition:'',
    gpmcRemarks:'',
    Status:'',
    applicants: [],
    showModal: false,
    selectedInstitute: '',
    selectedAdviser: '',
    adviserPairArr: [],
    assetsInstitute: [{
                text: 'Institute of Food Science',
                id: 1
            },
             {
              text: 'Institute of Animal Science',
              id: 2
            }, 
             {
              text: 'Department of Economics',
              id: 3
            }, 
            {
              text: 'Institute for Governance and Rural Development',
              id: 4
            }, 
            {
              text: 'Institute of Agricultural Engineering',
              id: 5
            }, 
            {
              text: 'Institute of Biological Sciences',
              id: 6
            }, 
            {
              text: 'Institute of Chemistry',
              id: 7
            },
            {
              text: 'Institute of Computer Science',
              id: 8
            },
            {
              text: ' Institute of Cooperatives and Bio-Enterprise Development',
              id: 9
            },
            {
              text: 'Institute of Crop Science',
              id: 10
            },
             {
              text: 'Institute of Plant Breeding',
              id: 11
            },
            {
              text:' Institute of Statistics',
              id: 12
            },
            {
              text:'Institute of Human Nutrition and Food',
              id: 13
            },
            {
              text: '',
              id: 14
            }
            ],
             
    adviserPair: {
      1: [
        {
          name: "Adeliza A. Dorado",
        id: 1,
        },
        {
          name: "April Shayne L. Sulabo",
         id: 2,
        },
         {
          name: "Ara Fatima C. Algar-Carbonera",
         id: 3,
        },
         {
          name: "Baby Richard R. Navarro",
         id: 4,
        },
        {
          name: "Bryan Rey R. Oliveros",
         id: 5,
        },
        {
          name: "Dennis Marvin O. Santiago",
         id: 6,
        },
        {
          name: "Dennis V. Cantre",
         id: 7,
        },
        {
          name: "Diane B. Morales",
         id: 8,
        },
        {
          name: "Erlinda I. Dizon",
         id: 9,
        },
        {
          name: "Ernesto V. Carpio",
         id: 10,
        },
        {
          name: "Floirendo P. Flores",
         id: 11,
        },
        {
          name: "Florencio C. Reginio Jr.",
         id: 12,
        },
         {
          name: "Jelynne P. Tamayo",
         id: 13,
        },
         {
          name: "Katherine Ann C. Israel",
         id: 14,
        },
         {
          name: "Leoncio C. Raymundo",
         id: 15,
        },
         {
          name: "Lerjun M. Peñaflor",
         id: 16,
        },
         {
          name: "Lilia S. Collado",
         id: 17,
        },
         {
          name: "Loraine B. Ancheta",
         id: 18,
        },
         {
          name: "Lotis E. Mopera",
         id: 19,
        },
         {
          name: "Ma. Josie V. Sumage",
         id: 20,
        },
         {
          name: "Reifrey Adriano Lascano",
         id: 21,
        },
         {
          name: "Sheba Mae M. Duque",
         id: 22,
        },
         {
          name: "April Shayne L. Sulabo",
         id: 23,
        },
         {
          name: "Ma Amelita C. Estacio",
         id: 24,
        },
         {
          name: "Francisco B. Elegado",
         id: 25,
        },
        {
          name: "Adeliza A. Dorado ",
         id: 26,
        },
        {
          name: "Rona Camille M. Lizardo",
         id: 27,
        },
         {
          name: "Virgilio V. Garcia",
         id: 28,
        },
      ],
   2:[
       {
          name: "Agapita J. Salces",
         id: 1
        },
         {
          name: "Alberto Y. Robles",
         id: 2
        },
        {
          name: "Amado A. Angeles",
         id: 3
        },
        {
          name: "Angel L. Lambio",
         id: 4
        },
        {
          name: "Antonio A. Rayos",
         id: 5
        },
        {
          name: "Carmencita D. Mateo",
         id: 6
        },
        {
          name: "Cesar Sevilla",
         id: 7
        },
        {
          name: "Cristine B. Adiova",
         id: 8
        },
        {
          name: "Clarita T. Dagaas",
         id: 9
        },
        {
          name: "Cristy M. Bueno",
         id: 10
        },
        {
          name: "Enrico P. Supangco",
         id: 11
        },
        {
          name: "Jay Ronel V. Conejos",
         id: 12
        },
        {
          name: "Jorge Michael D. Dominguez",
         id: 13
        },
        {
          name: "Jose Arceo N. Bautista",
         id: 14
        },
        {
          name: "Joseph S. Masangkay",
         id: 15
        },
        {
          name: "Mafeo B. Bejo",
         id: 16
        },
        {
          name: "Maria Cynthia R. Oliveros",
         id: 17
        },
        {
          name: "Noel B. Lumbo",
         id: 18
        },
        {
          name: "Oliver D. Abanto",
         id: 19
        },   
        {
          name: "Orville L. Bondoc",
         id: 20
        },
        {
          name: "Veneranda A. Magpantay",
         id: 21
        },
        {
          name: "Jorge Michael D. Dominguez",
         id: 22
        },
        {
          name: "Sherwin I. Camba",
         id: 23
        },
        {
          name: "Kimberly B. Turaja",
         id: 24
        },
        {
          name: "Angelo M. Tapia",
         id: 25
        },
        {
          name: "Julienne Maria Undine Paz H. Quimio",
         id: 26
        },
        {
          name: "Christian V. Lualhati",
         id: 27
        },
        {
          name: "John Kenneth T. Malilay",
         id: 28
        },
        {
          name: "Carla Alilie L. Junsay",
         id: 29
        },
        {
          name: "Noel B. Lumbo",
         id: 30
        },
         {
          name: "Consuelo Amor S. Estrella",
         id: 31
        },
         {
          name: "Elpidio M. Agbisit Jr.",
         id: 32
        },
         {
          name: "Olivia C. Emata",
         id: 33
        },
      ],
      3: [
      {
        name: "Agham C. Cuevas",
        id: 1
      },
      {
        name: "Amelia L. Bello",
        id: 2
      },
      {
        name: "Anna Floresca F. Firmalino",
        id: 3
      },
      {
        name: "Asa Jose U. Sajise",
        id: 4
      },
      {
        name: "Jefferson A. Arapoc",
        id: 5
      },
      {
        name: "Maria Luisa G. Valera",
        id: 6
      },
      {
        name: "Michael R. Cabalfin",
        id: 7
      },
      {
        name: "Paul Joseph B. Ramirez",
        id: 8
      },
      {
        name: "Richard B. Daite",
        id: 9
      },
      {
        name: "Rowena A. Dorado",
        id: 10
      },
      {
        name: "U-Primo E. Rodriguez",
        id: 11
      },
      {
        name: "Yolanda T. Garcia",
        id: 12
      },
      {
        name: "Zenaida M. Sumalde",
        id: 13
      },
       {
        name: "Gideon P. Carnaje",
        id: 14
      },
       {
        name: "Jaime Kim B. Arias",
        id: 15
      },
       {
        name: "Jose V. Camacho Jr.",
        id: 16
      },
       {
        name: "Ma. Angeles O. Catelo",
        id: 17
      },
       {
        name: "Niño Alejandro Q. Manalo",
        id: 18
      },
      ],
      4:[
      {
        name: "Agnes C. Rola",
        id: 1
      },
       {
        name: "Aileen V. Lapitan",
        id: 2
      },
       {
        name: "Maria Kristina G. Alinsunurin",
        id: 3
      },
       {
        name: "Bing Baltazar C. Brillo",
        id: 4
      },
       {
        name: "Damcelle T. Cortes",
        id: 5
      },
       {
        name: "Dulce M. Elazegui",
        id: 6
      },
       {
        name: "Emely D. Dicolen",
        id: 7
      },
       {
        name: "Ephraim C. Quiñones",
        id: 8
      },
      {
        name: "Evelie P. Serrano",
        id: 9
      },
      {
        name: "Ferdinand C. Maquito",
        id: 10
      },
      {
        name: "Hadji C. Jalotjot",
        id: 11
      },
      {
        name: "Jaine C. Reyes",
        id: 12
      },
      {
        name: "John Erinorio M. Perez",
        id: 13
      },
      {
        name: "Josefina T. Dizon",
        id: 14
      },
      {
        name: "Ma. Ana T. Quimbo",
        id: 15
      },
      {
        name: "Maria Luz L. Malabayabas",
        id: 16
      },
      {
        name: "Mayo Grace C. Amit",
        id: 17
      },
      {
        name: "Merlyne M. Paunlagui",
        id: 18
      },
      {
        name: "Mimosa C. Ocampo",
        id: 19
      },
      {
        name: "Miriam Caryl DL. Carada",
        id: 20
      },
      {
        name: "Monica H. Walet",
        id: 21
      },
      {
        name: "Nelson Jose Vincent B. Querijero",
        id: 22
      },
      {
        name: "Rhea L. Gumasing",
        id: 23
      },
      {
        name: "Rolando T. Bello",
        id: 24
      },
      {
        name: "Rowena DT. Baconguis",
        id: 25
      },
      {
        name: "Ruth A. Dela Cruz - Ortega",
        id: 26
      },
      {
        name: "Vella A. Atienza",
        id: 27
      },
      {
        name: "Virginia R. Cardenas",
        id: 28
      },
      {
        name: "Wilfredo B. Carada",
        id: 29
      },
      ],
      5:[
      {
        name: "Victor Rodulfo Jr.",
        id: 1
      },
      ],
      6: [
      {
        name: "Jiro T. Adorador",
        id: 1
      },
       {
        name: "Jorge Gil C. Angeles",
        id: 2
      },
       {
        name: "Evalour T. Aspuria",
        id: 3
      },
       {
        name: "Ma. Anita M. Bautista",
        id: 4
      },
       {
        name: "Marilyn B. Brown",
        id: 5
      },
       {
        name: "Lourdes B. Cardenas",
        id: 6
      },
       {
        name: "Angella Melissa A. Carlos",
        id: 7
      },
       {
        name: "Maria Genaleen Q. Diaz",
        id: 8
      },
       {
        name: "Ivan Marcelo A. Duka",
        id: 9
      },
       {
        name: "Fides Marciana Z. Tambalo",
        id: 10
      },
       {
        name: "Roanne R. Gardoce",
        id: 11
      },
       {
        name: "Ivy Amor F. Lambio",
        id: 12
      },
       {
        name: "Leticia E. Afuang",
        id: 13
      },
      ],
      7:[
       {
        name: "Mae Joanne B. Aguila",
        id: 1
      },
       {
        name: "Amelia B. Hizon - Fradejas",
        id: 2
      },
       {
        name: "Arvin Paul P. Tuaño",
        id: 3
      },
      {
        name: "Stephen Elmore",
        id: 4
      },
      {
        name: "Ernesto Del Rosario",
        id: 5
      },
      {
        name: "Maxima E. Flavier",
        id: 6
      },
      {
        name: "Florina E. Merca",
        id: 7
      },
      {
        name: "Robie Daniel Girling",
        id: 8
      },
      {
        name: "Gladys Cherisse J. Completo",
        id: 9
      },
      {
        name: "Hidelisa P. Hernandez",
        id: 10
      },
      {
        name: "Jose Rene L. Micor",
        id: 11
      },
      {
        name: "Ma. Cristina Padolina",
        id: 12
      },
      {
        name: "Ma. Desiree B. Aldemita",
        id: 13
      },
      {
        name: "Mariam C. Recuenco",
        id: 14
      },
      {
        name: "Marivic S. Lacsamana",
        id: 15
      },
      {
        name: "Marlon N. Manalo",
        id: 16
      },
      {
        name: "Mary Ann O. Torio",
        id: 17
      },
      {
        name: "Milagros M. Peralta",
        id: 18
      },
      {
        name: "Myrna S. Rodriguez",
        id: 19
      },
      {
        name: "Paul Lloydson J. Alvarez",
        id: 20
      },
      {
        name: "Ruel C. Nacario",
        id: 21
      },
      {
        name: "Sheryl Lozel B. Arreola",
        id: 22
      },
      {
        name: "Teofila DC. Villar",
        id: 23
      },
      {
        name: "Veronica C. Sabularse",
        id: 24
      },
      ],
      8:[
      {
        name: "Arian J. Jacildo",
        id: 1
      },
      {
        name: "Khan L. Concepcion",
        id: 2
      },
      {
        name: "Danilo J. Mercado",
        id: 3
      },
      {
        name: "Eliezar A. Albacea",
        id: 4
      },
      {
        name: "Fermin Roberto G. Lapitan",
        id: 5
      },
      {
        name: "Jaderick P. Pabinco",
        id: 6
      },
      {
        name: "Jaime M. Samaniego",
        id: 7
      },
      {
        name: "John Patrick VJ. Albacea",
        id: 8
      },
      {
        name: "Joseph Anthony C. Hermocilla",
        id: 9
      },
      {
        name: "Katrina Joy M. Abriol - Santos",
        id: 10
      },
      {
        name: "Margarita Carmen S. Paterno",
        id: 11
      },
      {
        name: "Maria Art Antonette D. D Clariño",
        id: 12
      },
      {
        name: "Monina Gazelle B. Carandang",
        id: 13
      },
      {
        name: "Reginald Neil C. Recario",
        id: 14
      },
      {
        name: "Rizza DC. Mercado",
        id: 15
      },
      {
        name: "Rozano S. Maniaol",
        id: 16
      },
      {
        name: "Val Randolf M. Madrid",
        id: 17
      },
      ],
      9:[
      {
        name: "Jan Danica S. Asma",
        id: 1
      },
      {
        name: "Karen P. Quilloy",
        id: 2
      },
      {
        name: "Liezel S. Cruz",
        id: 3
      },
      ],
      10:[
      {
        name: "Amihan L. Arguiza",
        id: 1
      },
      {
        name: "Annalissa L. Aquino",
        id: 2
      },
      {
        name: "Antonio C. Laurena",
        id: 3
      },
      {
        name: "Antonio G. Lalusin",
        id: 4
      },
      {
        name: "Artemio M. Salazar",
        id: 5
      },
      {
        name: "Babylyn U. Tizon - Salazar",
        id: 6
      },
      {
        name: "Bong Salazar",
        id: 7
      },
      {
        name: "Bryan V. Apacionado",
        id: 8
      },
      {
        name: "Mark Ian C. Calayugan",
        id: 9
      },
       {
        name: "Olivia Damasco",
        id: 10
      },
       {
        name: "Calixto M. Protacio",
        id: 11
      },
       {
        name: "Carlo Miguel C. Sandoval",
        id: 12
      },
       {
        name: "Chebotarov Dmytro",
        id: 13
      },
       {
        name: "Lucille Elna P. De Guzman",
        id: 14
      },
       {
        name: "Constancio C. De Guzman",
        id: 15
      },
       {
        name: "Fe M. Dela Cueva",
        id: 16
      },
       {
        name: "Dolores M. Ramirez",
        id: 17
      },
       {
        name: "Domingo E. Angeles",
        id: 18
      },
       {
        name: "Ma. Lourdes S. Edaño",
        id: 19
      },
      {
        name: "Edna A. Aguilar",
        id: 20
      },
      {
        name: "Edralina P. Serrano",
        id: 21
      },
      {
        name: "Elda B. Esguerra",
        id: 22
      },
      {
        name: "Emmanuel L. Bernardo",
        id: 23
      },
      {
        name: "Eureka Teresa M. Ocampo",
        id: 24
      },
      {
        name: "Evalour T. Aspuria ",
        id: 25
      },
      {
        name: "Renerio P. Gentallan Jr.",
        id: 26
      },
      {
        name: "Glenn B. Gregorio",
        id: 27
      },
      {
        name: "Hayde F. Galvez",
        id: 28
      },
      {
        name: "Hazel Anne F. Makahiya",
        id: 29
      },
      {
        name: "Jose E. Hernandez",
        id: 30
      },
      {
        name: "Josephine U. Agravante",
        id: 31
      },
      {
        name: "Leah E. Endonela",
        id: 32
      },
      {
        name: "Lenie Q Baeza",
        id: 33
      },
      {
        name: "Leslie Angela L. Roces",
        id: 34
      },
      {
        name: "Lilia M. Fernando",
        id: 35
      },
      {
        name: "Lilian F. Pateña",
        id: 36
      },
      {
        name: "Loresco M Menandro",
        id: 37
      },
      {
        name: "Lucille Elna P. De Guzman",
        id: 38
      },
      {
        name: "Ma. Fatima O. Mercado",
        id: 39
      },
      {
        name: "Ma. Lourdes D. Cedo",
        id: 40
      },
      {
        name: "Ma. Lourdes S. Edaño",
        id: 41
      },
       {
        name: "Norvie L. Manigbas",
        id: 42
      },
       {
        name: "Maria Luz J. Sison",
        id: 43
      },
       {
        name: "Mark Ian Calayugan",
        id: 44
      },
       {
        name: "Melquiades Emmanuel C. Reyes",
        id: 45
      },
       {
        name: "Mylene C. Nieves",
        id: 46
      },
       {
        name: "Mylene H. Constantino - Nieves",
        id: 47
      },
       {
        name: "Nestor C. Altoveros",
        id: 48
      },
       {
        name: "Norma G. Medina",
        id: 49
      },
       {
        name: "Perlita A. Nuevo",
        id: 50
      },
       {
        name: "Renerio P. Gentallan Jr.",
        id: 51
      },
       {
        name: "Reniel S. Pamplona",
        id: 52
      },
       {
        name: "Roberta N. Garcia",
        id: 53
      },
       {
        name: "Roberto E. Coronel",
        id: 54
      },
       {
        name: "Rodel G. Maghirang",
        id: 55
      },
       {
        name: "Rosario L. Teresita",
        id: 56
      },
       {
        name: "Roselyn F. Paelmo",
        id: 57
      },
       {
        name: "Sancho G. Bon",
        id: 58
      },
       {
        name: "Susan C. Aquino - Ong",
        id: 59
      },
       {
        name: "Teodoro C. Mendoza",
        id: 60
      },
       {
        name: "Teresita H. Borromeo",
        id: 61
      },
       {
        name: "Tonette P. Laude",
        id: 62
      },
       {
        name: "Geogina V. Vergara",
        id: 63
      },
      ],
      11:[
      {
        name:'Apolonio M. Ocampo',
        id: 1
      },
      {
        name:'Darlon V. Lantican',
        id: 2
      },
      {
        name:'Evelyn F. Delfin',
        id: 3
      },
      {
        name:'Fe M. Dela Cueva',
        id: 4
      },
      {
        name:'Lolita DC. Valencia',
        id: 5
      },
      {
        name:'Lourdes D. Taylo',
        id: 6
      },
      {
        name:'Marita S. Pinili',
        id: 7
      },
      {
        name:'Mark Angelo O. Balendres',
        id: 8
      },
      {
        name:'Merdelyn C. Lit',
        id: 9
      },
      {
        name:'Olivia P. Damasco',
        id: 10
      },
      {
        name:'Roanne R. Gardoce',
        id: 11
      },
      {
        name:'Visitacion C. Huelgas',
        id: 12
      },
      ],
      12:[
      {
        name:'Liza N. Comia',
        id: 1
      },
      {
        name:'Consorcia E. Reaño',
        id: 2
      },
      {
        name:'Dalisay S. Maligalig',
        id: 3
      },
      {
        name:'Felino P. Lansigan',
        id: 4
      },
      {
        name:'Isidro P. David',
        id: 5
      },
      {
        name:'James Roldan S. Reyes',
        id: 6
      },
      {
        name:'Joyrce DL. Grajo',
        id: 7
      },
      {
        name:'Mark Jay P. Dating',
        id: 8
      },
      {
        name:'Nancy A. Tandang',
        id: 9
      },
      {
        name:'Zita VJ. Albacea',
        id: 10
      },
      ],
      13:[
      {
        name:'Aileen R. De Juras',
        id: 1
      },
      {
        name:'Aimee Sheree A. Barrion',
        id: 2
      },
      {
        name:'Ana Lorraine D. Dela Vega',
        id: 3
      },
      {
        name:'Angelina DR Felix',
        id: 4
      },
      {
        name:'Angelina R. Bustos',
        id: 5
      },
      {
        name:'Anna Teresa O. Orillo',
        id: 6
      },
      {
        name:'Arvin Tuanio',
        id: 7
      },
      {
        name:'Clarisa B. Juanico',
        id: 8
      },
      {
        name:'Corazon Barba',
        id: 9
      },
      {
        name:'Irma U. Danao',
        id: 10
      },
      {
        name:'Joan A. Delomen',
        id: 11
      },
      {
        name:'Divine Grace C. Domingo',
        id: 12
      },
      {
        name:'Eleanor E. Merca',
        id: 13
      },
      {
        name:'Gemaima C. Evangelista',
        id: 14
      },
      {
        name:'Joyce P. Parco',
        id: 15
      },
      {
        name:'Leila S. Africa',
        id: 16
      },
      {
        name:'Liezl M. Atienza',
        id: 17
      },
      {
        name:'Lowela M. Padilla',
        id: 18
      },
      {
        name:'Ma. Theresa M. Talavera',
        id: 19
      },
      {
        name:'Marie Faye R. Nguyen - Orca',
        id: 20
      },
      {
        name:'Marites G. Yee',
        id: 21
      },
      {
        name:'Normahitta P. Gordoncillo',
        id: 22
      },
      {
        name:'Recylyn L. Bayna - Mariano',
        id: 23
      },
      {
        name:'Sheila F. Abacan',
        id: 24
      },
      {
        name:'Zarah G. Sales',
        id: 25
      },
      ]


    }

};
},

head() {
return {
    title: "Application Approval",
    meta: [
        {
            hid: "description",
            name: "description",
            content: "UPLB Gradtuate School"
        }
    ]
};
},
 watch: {
        selectedInstitute() {
          this.adviserPairArr = [];
          if (this.selectedInstitute > 0) {
            this.adviserPairArr = this.adviserPair[this.selectedInstitute];
          }
        }
    },
async created() {
try {
    const res = await axios.get("http://localhost:3000/applicants");
    this.applicants = res.data;
}
catch (e) {
    //  console.error(e)
}
},
methods:{


submitAdd()
{
const applicants = {
    Status:this.Status,
Condition:this.Condition,
gpmcRemarks:this.gpmcRemarks,
tempAdviser:this.tempAdviser, 
selectedAdviser:this.selectedAdviser, 
selectedInstitute:this.selectedInstitute,         
    }

    console.log(applicants)
    this.showModal = true 

    fetch('http://localhost:3000/applicants', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json', 
          'Accept': 'application/json'   },
        body: JSON.stringify(applicants)
    })
}

},

}
      </script>
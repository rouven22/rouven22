<template>
  <div>
    <StudentNavbar />
    <div class="flex justify-center items-center  bg-grey-200 ">
      <div class="w-1/2 bg-grey-50 rounded shadow-2xl p-20 m-2">
        <h1 class="block w-full text-center text-gray-600 text-2xl font-bold mb-6">APPLICANT APPLICATION</h1>
        <div class="px-12 max-w-5xl">
          <div>
            <dl>
              <div class="sm:grid sm:grid-cols-3 sm:gap-4">
                <dt class="text-sm leading-5 font-medium text-gray-700">
                  Status:
                </dt>
                <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                  {{ applicant.Status }}
                </dd>
              </div>
               <div class="mt-8 sm:grid sm:mt-5 sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <dt class="text-sm leading-5 font-medium text-gray-700">
                  Condition:
                </dt>
                <dd class="pb-8 mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                  {{ applicant.Condition }}  
                </dd>
              </div>
              <div class="mt-8 sm:grid sm:mt-5 sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <dt class="text-sm leading-5 font-medium text-gray-700">
                  Remarks:
                </dt>
                <dd class="pb-8 mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                  {{ applicant.gpmcRemarks }}
                </dd>
              </div>
             <div class="mt-8 sm:grid sm:mt-5 sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <dt class="text-sm leading-5 font-medium text-gray-700">
                  Temporary Adviser:
                </dt>
                <dd class="pb-8 mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                 {{ applicant.selectedAdviser }}
                </dd>
              </div>
            </dl>
            <div class="flex-grow h-px bg-red-900"></div>
          </div>
          <h1 class="pt-8 font-bold">Personal Information</h1>
          <form>
            <div class="mt-8 sm:grid sm:mt-5 sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
              <dt class="text-sm leading-5 font-medium text-gray-700">
                Name:
              </dt>
              <dd class="mt-1 text-sm leading-5 text-red-900 sm:mt-0 sm:col-span-2">
                
                {{ applicant.firstName }} {{ applicant.middleName }} {{ applicant.lastName }}
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
            <h1 class="pt-8 font-bold">Application Information</h1>
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
                2. Are you applying for scholarship:
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
                5. Program Sought
              </dt>
              <dd class="mt-1 text-sm leading-5 text-red-900 sm:mt-0 sm:col-span-2">
                {{ applicant.programs }}
              </dd>
            </div>
            <div class="mt-8 sm:grid sm:mt-5 sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
              <dt class="text-sm leading-5 font-medium text-gray-700">
                6. Specific Area of Specialization:
              </dt>
              <dd class="mt-1 text-sm leading-5 text-red-900 sm:mt-0 sm:col-span-2">
                {{ applicant.areaSpecialization }}
              </dd>
            </div>
            <div class="mt-8 sm:grid sm:mt-5 sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
              <dt class="text-sm leading-5 font-medium text-gray-700">
                7. List of any Professor with whom you would especially like to work if given the opportunity:
              </dt>
              <dd class="mt-1 text-sm leading-5 text-red-900 sm:mt-0 sm:col-span-2">
                {{ applicant.listProfessor }}
              </dd>
            </div>
            <div class="mt-8 sm:grid sm:mt-5 sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
              <dt class="text-sm leading-5 font-medium text-gray-700">
                8. Semester for which you are applying:
              </dt>
              <dd class="mt-1 text-sm leading-5 text-red-900 sm:mt-0 sm:col-span-2">
                {{ applicant.semester }} {{ applicant.semesterDate }}
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
                10. Academic Background: List of school
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
                11. Have you previously applied for admission to graduate studies at UPLB?:
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
                12. Your most recent and most partinent occupational experience:
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
                13. Please list your membership in honor and professional organization:
              </dt>
              <dd class="mt-1 text-sm leading-5 text-red-900 sm:mt-0 sm:col-span-2">
                {{ applicant.listHonor }}
              </dd>
            </div>
            <div class="mt-8 sm:grid sm:mt-5 sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
              <dt class="text-sm leading-5 font-medium text-gray-700">
                14. Publications: Give the complete bibliographical information:
              </dt>
              <dd class="mt-1 text-sm leading-5 text-red-900 sm:mt-0 sm:col-span-2">
                {{ applicant.publication }}
              </dd>
            </div>
            <div class="mt-8 sm:grid sm:mt-5 sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
              <dt class="text-sm leading-5 font-medium text-gray-700">
                15. Unpublished research paper or thesis:
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
              <dt class=" mb-4 text-sm leading-2 font-medium text-red-700">
                *For Phd Applicants
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
                PDF Files (Photos, Valid ID, TOR, Diploma, Recommendations Letters, International English Language, Payment and other additional requirements)
              </dt>
              <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                <embed src="" refs="file" :value="applicant.file" type="application/pdf" frameBorder="0" scrolling="auto" width="25%" height="80%" />
              </dd>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="relative overflow-x-hidden items-top justify-center min-h-screen h-full bg-white pt-10">
      <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <hr class="border-2 border-solid border-black mb-6" />
          <TransactionHistory />
        </div>
      </div>
    </div>
  </div>
</template>
 <script>

import axios from 'axios'
import TransactionHistory from '../../components/TransactionHistory.vue';
      
 export default {
    name: "ApplicantViewing",
    components: { 
      TransactionHistory 
    },
    async asyncData({ params }) {
        return await axios.get(`http://localhost:3000/applicants/${params.applicant_viewing}`).then(res => {
            
            return { applicant: res.data };
        });
    },
    data() {
        return {
            applicant: [],
        };
    },
    head() {
        return {
            title: "Applicant Viewing",
            meta: [
                {
                    hid: "description",
                    name: "description",
                    content: "UPLB Gradtuate School"
                }
            ]
        };
    }
};
             </script>
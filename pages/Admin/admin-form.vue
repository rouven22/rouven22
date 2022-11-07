<template>
  <div>

              
    <div class="flex justify-center items-center ">
               <img src="https://amis.uplb.edu.ph/logos/uplb-logo.png" class="items-center mr-3 h-26 sm:h-26">
               </div>
               <h1 class="block w-full text-center text-gray-900 text-2xl font-bold">University of the Philippines Los Baños</h1>
                <h2 class="block w-full text-center text-gray-900 text-1xl font-medium mb-4">Graduate School</h2>
                <h2 class="block w-full text-center text-gray-900 text-1xl">College, Laguna, 4031, Philippines</h2>
    <div class=" rounded shadow-2xl p-20 ">
        
      <div class="mt-10 sm:mt-0">
        <div class="md:grid md:grid-cols-3 md:gap-6">
          <div class="md:col-span-1">
            <div class="px-4 sm:px-0">
              <h3 class="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
            </div>
          </div>
          <div class="mt-5 md:col-span-2 md:mt-0">
            <form id="f-1" action="">
              <div class=" pb-24 overflow-hidden shadow sm:rounded-md">
                <div class="bg-grey-800 px-4 py-5 sm:p-6">
                  <label class="font-bold block mb-2 text-sm text-gray-900 dark:text-gray-900">First name</label>
                  <input id="firstName" v-model="firstName" type="text" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder=" FirstName" required="">
                
                  <div>
                    <label class="font-bold block mb-2 text-sm text-gray-900 dark:text-gray-900">Middle name</label>
                    <input id="middleName" v-model="middleName" type="text" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Middle Name" required>
                  </div>
                  <div>
                    <label class="font-bold block mb-2 text-sm text-gray-900 dark:text-gray-900">Last name</label>
                    <input id="lastName" v-model="lastName" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Last Name" required>
                  </div>
                  <div>
                    <label class="font-bold block mb-2 text-sm  text-gray-900 dark:text-gray-900 ">Sex </label>
                    <div class="inline-block relative w-64">
                      <select id="sex" v-model="sex" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                        <option>--</option>
                        <option>Male</option>
                        <option>Female</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label class="font-bold block mb-2 text-sm  text-gray-900 dark:text-gray-900">Phone Number</label>
                    <input id="phone_number" v-model="phoneNumber" type="number" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Phone Number">
                  </div>
                  <div>
                    <label class="font-bold block mb-2 text-sm f text-gray-900 dark:text-gray-900">Telephone Number</label>
                    <input id="telephone" v-model="telNumber" type="number" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Telephone Number">
                  </div>
                  <div>
                    <label class="font-bold block mb-2 text-sm  text-gray-900 dark:text-gray-900">Fax Number</label>
                    <input id="fax_number" v-model="faxNumber" type="number" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Fax Number">
                  </div>
                  <div>
                    <label class="font-bold block mb-2 text-sm  text-gray-900 dark:text-gray-900">Email address</label>
                    <input id="email" v-model="email" type="email" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="@company.com" required>
                  </div>
                  <div>
                    <label class="font-bold block mb-2 text-sm  text-gray-900 dark:text-gray-900">Place of Birth</label>
                    <input id="place_of_birth" v-model="placeBirth" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Place of Birth" />
                  </div>
                  <div>
                    <label class="font-bold block mb-2 text-sm  text-gray-900 dark:text-gray-900">Date of Birth</label>
                    <input id="date_of_birth" v-model="dateBirth" type="date" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Date" />
                  </div>
                  <div>
                    <label class="font-bold block mb-2 text-sm  text-gray-900 dark:text-gray-900">Citizenship</label>
                    <input id="citizenship" v-model="citizenship" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Citizenship">
                  </div>
                  <div>
                    <label class="font-bold block mb-2 text-sm  text-gray-900 dark:text-gray-900">Civil Status</label>
                    <div class="inline-block relative w-auto ">
                      <select id="civil_status" v-model="civilStatus" class="block appearance-none w-full bg-white border border-gray-600 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                        <option>--</option>
                        <option>Single</option>
                        <option>Married</option>
                        <option>Divorced</option>
                        <option>Widowed</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label class="font-bold block mb-2 text-sm  text-gray-900 dark:text-gray-900">Present Occupation / Position</label>
                    <input id="present_occupation" v-model="presentOccupation" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" Placeholder="Present Occupation / Position">
                  </div>
                  <div>
                    <label class="font-bold block mb-2 text-sm  text-gray-900 dark:text-gray-900">Employer (Institution or Company)</label>
                    <input id="employer" v-model="employer" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" Placeholder="Employer">
                  </div>
                  <div>
                    <label class="font-bold block mb-2 text-sm  text-gray-900 dark:text-gray-900">Employer's Mailing Address</label>
                    <input id="emp_address" v-model="empAddress" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" Placeholder="Employer's Mailing Address ">
                  </div>
                  <div>
                    <label class="font-bold block mb-2 text-sm  text-gray-900 dark:text-gray-900">Permanent Mailing Address</label>
                    <input id="permanent_address" v-model="permanentAddress" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" Placeholder="Permanent Mailing Address">
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="mt-10 sm:mt-0">
        <div class="md:grid md:grid-cols-3 md:gap-6">
          <div class="md:col-span-1">
            <div class="px-4 sm:px-0">
              <h3 class="pt-8 text-lg font-medium leading-6 text-gray-900">Application Information</h3>
            </div>
          </div>
          <div class="mt-5 md:col-span-2 md:mt-0">
            <form action="/" method="post">
              <div class="overflow-hidden shadow sm:rounded-md">
                <div class="bg-white px-4 py-5 sm:p-6">
                  <div>
                    <label for="" class="font-bold block mb-2 text-sm  text-gray-900 dark:text-gray-900">1. Type of Application</label>
                    <select v-model="typeApplication" class="block appearance-none w-25 bg-white border border-gray-600 hover:border-gray-600 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                      <option value="">--</option>
                      <option value="Local">Local</option>
                      <option value="International">International</option>
                    </select>
                  </div>
                  <div>
                    <label for="" class="font-bold block mb-2 text-sm text-gray-900 dark:text-gray-900">2. Program Sought</label>
                    <select v-model="programs" class="block appearance-none w-25 bg-white border border-gray-600 hover:border-gray-600 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                      <option value="">--</option>
                      <option value="Master of Agricilture in Agronomy">Master of Agricilture in Agronomy</option>
                      <option value="Master of Agriculture in Horticulture">Master of Agricilture in Horticulture</option>
                      <option value="Master Master of Forestry in Forest Biological Sciences">Master of Forestry in Forest Biological Sciences</option>
                      <option value="Master of Forestry in Forest Resource Management'">Master of Forestry in Forest Resource Management</option>
                      <option value="Master of Forestry in Silviculture and Forest Influences">Master of Forestry in Silviculture and Forest Influences</option>
                      <option value="Master of Forestry in Social Forestry">Master of Forestry in Social Forestry</option>
                      <option value="Master of Forestry in Wood Science and Technology">Master of Forestry in Wood Science and Technology</option>
                      <option value="Master of Information Technology">Master of Information Technology</option>
                      <option value="Master in Veterinary Epidemiology">Master in Veterinary Epidemiology</option>
                      <option value="Master in Animal Nutrition">Master in Animal Nutrition</option>
                      <option value="Master in Clinical Nutrition">Master in Clinical Nutrition</option>
                      <option value="Master of Arts in Communication Arts">Master of Arts in Communication Arts</option>
                      <option value="Master of Arts in Sociology">Master of Arts in Sociology</option>
                      <option value="Master of Management in Agribusiness Management and Entrepreneurship">Master of Management in Agribusiness Management and Entrepreneurship</option>
                      <option value="Master of Management  in Business Management">Master of Management in Business Management</option>
                      <option value="Master of Management in Cooperative Management">Master of Management in Cooperative Management</option>
                      <option value="Master in Development Management and Governance">Master of Development Management and Governance</option>
                      <option value="Master of Public Affairs in  Agrarian and Rurban Development Studies">Master of Public Affairs in Agrarian and Urban Development Studies</option>
                      <option value="Master of Public Affairs in Education Management">Master of Public Affairs in Education Management</option>
                      <option value="Master of Public Affairs in Strategic Planning and Public Policy">Master of Public Affairs in Strategic Planning and Public Policy</option>
                      <option value="Master of Professional Studies in Food and Nutrition Planning">Master of Professional Studies in Food and Nutrition Planning</option>
                      <option value="Master of Professional Studies in Food Engineering">Master of Professional Studies in Food Engineering</option>
                      <option value="Professioanl Master Tropical Marine Ecosystems Management">Professional Master in Tropical Marine Ecosystems Management</option>
                      <option value="Master of Science in Agricultural Chemistry">Master of Science in Agricultural Chemistry</option>
                      <option value="Master of Science in Agricultural Economics">Master of Science in Agricultural Economics</option>
                      <option value="Master of Science in Agricultural Education">Master of Science in Agricultural Education</option>
                      <option value="Master of Science in Agricultural Engineering">Master of of Science in Agricultural Engineering</option>
                      <option value="Master of Science in Agrometeorology">Master of Science in Agrometeorology</option>
                      <option value="Master of Science in Animal Science">Master of Science in Animal Science</option>
                      <option value="Master of Science in Applied Nutrition">Master of Science in Applied Nutrition</option>
                      <option value="Master of Science in Biochemistry">Master of Science in Biochemistry</option>
                      <option value="Master of Science in Botany">Master of Science in Botany</option>
                      <option value="Master of Science in Chemical Engineering">Master of Science in Chemical Engineering</option>
                      <option value="Master of Science in Chemistry">Master of Science in Chemistry</option>
                      <option value="Master of Science in Science in Computer Science">Master of Science in Computer Science</option>
                      <option value="Master of Science in Community Development">Master of Science in Community Development</option>
                      <option value="Master of Science in Development Communication'">Master of Science in Development Communication</option>
                      <option value="Master of Science in Development Management and Governance">Master of Science in Development Management and Governance</option>
                      <option value="Master of Science in Agronomy">Master of Science in Agronomy</option>
                      <option value="Master of Science in Economics">Master of Science in Economics</option>
                      <option value="Master of Science in Entomology">Master of Science in Entomology</option>
                      <option value="Master of Science in Environmental Science">Master of Science in Environmental Science</option>
                      <option value="Master of Science in Extension Education">Master of Science in Extension Education</option>
                      <option value="Master of Science in Family Resource Management">Master of Science in Family Resource Management</option>
                      <option value="Master of Science in Food Science">Master of Science in Food Science</option>
                      <option value="Master of Science in Forestry: Forest Biological Sciences">Master of Science in Forestry: Forest Biological Sciences</option>
                      <option value="Master of Science in Forestry: Forest Resources Managemen">Master of Science in Forestry: Forest Resources Managemen</option>
                      <option value="Master of Science in Forestry: Silviculture and Forest Influences">Master of Science in Forestry: Silviculture and Forest Influences</option>
                      <option value="Master of Science in Forestry: Social Forestry">Master of Science in Forestry: Social Forestry</option>
                      <option value="Master of Science in Forestry: Wood Science and Technology">Master of Science in Forestry: Wood Science and Technology</option>
                      <option value="Master of Science in Genetics">Master of Science in Genetics</option>
                      <option value="Master of Science in Horticulture">Master of Science in Horticulture</option>
                      <option value="Master of Science in Mathematics">Master of Science in Mathematics</option>
                      <option value="Master of Science in Family Resource Mange">Master of Science in Family Resource Mange</option>
                      <option value="Master of Science in Microbiology">Master of Science in Microbiology</option>
                      <option value="Master of Science in Molecular Biology and Biotechnology">Master of Science in Molecular Biology and Biotechnology</option>
                      <option value="Master of Science in Natural Resources Conservation">Master of Science in Natural Resources Conservation</option>
                      <option value="Master of Science in Physics">Master of Science in Physics</option>
                      <option value="Master of Science in Plant Breeding">Master of Science in Plant Breeding</option>
                      <option value="Master of Science in Plant Genetics Resources Conservation and Management">Master of Science in Plant Genetics Resources Conservation and Management</option>
                      <option value="Master of Science in Plant Pathology">Master of Science in Plant Pathology</option>
                      <option value="Master of Science in Rural Sociology">Master of Science in Rural Sociology</option>
                      <option value="Master of Science in Soil Science">Master of Science in Soil Science</option>
                      <option value="Master of Science in Statistics">Master of Science in Statistics</option>
                      <option value="Master of Science in Veterinary Medicine">Master of Science in Veterinary Medicine</option>
                      <option value="Master of Science in Wildlife Studies">Master of Science in Wildlife Studies</option>
                      <option value="Master of Science in Zoology">Master of Science in Zoology</option>
                      <option value="Phd of Philosophy in Agricultural Chemistry">Phd of Philosophy in Agricultural Chemistry</option>
                      <option value="Phd of Philosophy in Agricultural Economics">Phd of Philosophy in Agricultural Economics</option>
                      <option value="Phd of Philosophy in Agricultural Education">Phd of Philosophy in Agricultural Education</option>
                      <option value="Phd of Philosophy in Agricultural Engineering">Phd of Philosophy in Agricultural Engineering</option>
                      <option value="Phd of Philosophy in Agronomy">Phd of Philosophy in Agronomy</option>
                      <option value="Phd of Philosophy in Animal Science">Phd of Philosophy in Animal Science</option>
                      <option value="Phd of Philosophy in Applied Mathematics">Phd of Philosophy in Applied Mathematics</option>
                      <option value="Phd of Philosophy in Biochemistry">Phd of Philosophy in Biochemistry</option>
                      <option value="Phd of Philosophy in Botany">Phd of Philosophy in Botany</option>
                      <option value="Phd of Philosophy in Computer Science">Phd of Philosophy in Computer Science</option>
                      <option value="Phd of Philosophy in Community Development">Phd of Philosophy in Community Development</option>
                      <option value="Phd of Philosophy in Development Communication">Phd of Philosophy in Development Communication</option>
                      <option value="Phd of Philosophy in Entomology">Phd of Philosophy in Entomology</option>
                      <option value="Phd of Philosophy in Development Studies">Phd of Philosophy in Development Studies</option>
                      <option value="Phd of Philosophy in Environmental Science">Phd of Philosophy in Environmental Science</option>
                      <option value="Phd of Philosophy in Extension Education">Phd of Philosophy in Extension Education</option>
                      <option value="Phd of Philosophy in Food Science">Phd of Philosophy in Food Science</option>
                      <option value="Phd of Philosophy in Forestry: Forest Biological Sciences">Phd of Philosophy in Forestry: Forest Biological Sciences</option>
                      <option value="Phd of Philosophy in Forestry: Forest Resources Management">Phd of Philosophy in Forestry: Forest Resources Management</option>
                      <option value="Phd of Philosophy in Forestry: Silviculture and Forest Influences">Phd of Philosophy in Forestry: Silviculture and Forest Influences</option>
                      <option value="Phd of Philosophy in Forestry: Wood Science and Technology">Phd of Philosophy in Forestry: Wood Science and Technology</option>
                      <option value="Phd of Philosophy in Genetics">Phd of Philosophy in Genetics</option>
                      <option value="Phd of Philosophy in Horticulture">Phd of Philosophy in Horticulture</option>
                      <option value="Phd of Philosophy in Human Nutrition">Phd of Philosophy in Human Nutrition</option>
                      <option value="Phd of Philosophy in Microbiology">Phd of Philosophy in Microbiology</option>
                      <option value="Phd of Philosophy in Molecular Biology and Biotechnology">Phd of Philosophy in Molecular Biology and Biotechnology</option>
                      <option value="Phd of Philosophy in Plant Breeding">Phd of Philosophy in Plant Breeding</option>
                      <option value="Phd of Philosophy in Plant Pathology">Phd of Philosophy in Plant Pathology</option>
                      <option value="Phd of Philosophy in Soil Science">Phd of Philosophy in Soil Science</option>
                      <option value="Phd of Philosophy in Statistics">Phd of Philosophy in Statistics</option>
                      <option value="Straight PhD in Agricultural Economics">Straight PhD in Agricultural Economics</option>
                      <option value="Straight PhD in Development Communication">Straight PhD in Development Communication</option>
                      <option value="Straight PhD in Environmental Science">Straight PhD in Environmental Science</option>
                      <option value="PhD by Research in Agribusiness Management and Entrepreneurship">PhD by Research in Agribusiness Management and Entrepreneurship</option>
                      <option value="PhD by Research in Agricultural and Applied Economics">PhD by Research in Agricultural and Applied Economics</option>
                      <option value="PhD by Research in Agronomy">PhD by Research in Agronomy</option>
                      <option value="PhD by Research in Animal Science">PhD by Research in Animal Science</option>
                      <option value="PhD by Research in Botany">PhD by Research in Botany</option>
                      <option value="PhD by Research in Computer Science">PhD by Research in Computer Science</option>
                      <option value="PhD by Research in Development Communication">PhD by Research in Development Communication</option>
                      <option value="PhD by Research in Economics">PhD by Research in Economics</option>
                      <option value="PhD by Research in Entomology">PhD by Research in Entomology</option>
                      <option value="PhD by Research in Environmental Science">PhD by Research in Environmental Science</option>
                      <option value="PhD by Research in Horticulture">PhD by Research in Horticulture</option>
                      <option value="PhD by Research in Plant Breeding">PhD by Research in Plant Breeding</option>
                      <option value="PhD by Research in Plant Pathology">PhD by Research in Plant Pathology</option>
                      <option value="PhD by Research in Soil Science">PhD by Research in Soil Science</option>
                      <option value="PhD by Research in Forestry: Forest Biological Sciences">PhD by Research in Forestry: Forest Biological Sciences</option>
                    </select>
                  </div>
                  <label for="" class="font-bold block mb-2 text-sm text-gray-900 dark:text-gray-900">3. Are you applying for scholarship?</label>
                  <div class="inline-block relative w-64">
                    <select id="degree" v-model="scholarship" name="degree" class="mb-2 block appearance-none w-25 bg-white border border-gray-600 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                      <option value="">--</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                    <div v-if="scholarship === 'Yes'">
                      <label class="block mb-2 text-sm text-gray-900 dark:text-gray-900">if yes, please specify</label>
                      <textarea id="appliying_scholarship_yes" v-model="scholarshipYes" class=" text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none resize-none px-2 py-3 w-full h-50" placeholder=""></textarea>
                    </div>
                  </div>
                  <div>
                    <label for="" class="font-bold block mb-2 text-sm  text-gray-900 dark:text-gray-900">4. Are you going to study on</label>
                    <div class="inline-block relative w-64">
                      <select id="going_study" v-model="goingStudy" class="block appearance-none w-25 bg-white border border-gray-600 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                        <option>--</option>
                        <option>Full time</option>
                        <option>Part time</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label for="" class="font-bold block mb-2  text-sm text-gray-900 dark:text-gray-900">5. Are you applying for Re-Admission?</label>
                    <div class="inline-block relative w-64">
                      <select id="re_admission" v-model="reAdmission" class="block appearance-none w-25 bg-white border border-gray-600 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                        <option>--</option>
                        <option>Yes</option>
                        <option>No</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label for="" class="font-bold block mb-2 text-sm text-gray-900 dark:text-gray-900">6. Specific Area of Specialization</label>
                    <input id="area_specialization" v-model="areaSpecialization" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Specific Area of Specialization">
                  </div>
                  <div>
                    <label for="" class="font-bold block mb-2 text-sm text-gray-900 dark:text-gray-900">7. List of any Professor with whom you would especially like to work if given the opportunity</label>
                   <textarea id="list_professor" v-model="listProfessor" class=" text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none resize-none px-2 py-3 w-full h-50" placeholder=""></textarea>
                  </div>
                  <div>
                    <label for="" class="font-bold block mb-2 text-sm text-gray-900 dark:text-gray-900">8. Semester for which you are applying</label>
                    <div class="inline-block relative w-64">
                      <select id="semester" v-model="semester" class="block appearance-none w-25 bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                        <option value="">--</option>
                        <option value="First Semester">First Semester</option>
                        <option value="Second Semester">Second Semester</option>
                      </select>

                       <div>
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Date:</label>
                      <select id="sem_date"  v-model="semesterDate" class="block appearance-none w-25 bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                        <option value="">--</option>
                        <option value="2022-2023">2022-2023</option>
                        <option value="2023-2024">2023-2024</option>
                        <option value="2024-2025">2024-2025</option>
                        <option value="2025-2026">2025-2026</option>
                        <option value="2026-2027">2026-2027</option>
                        <option value="2027-2028">2027-2028</option>
                        <option value="2028-2029">2028-2029</option>
                        <option value="2029-2030">2029-2030</option>
                      </select>
                      </div>

                  

</div>
</div>
                 
                  <div>
                    <label class="font-bold block mb-2 text-sm text-gray-900 dark:text-gray-900">9. Future plans after completion of graduate studies at the University of the Philippines Los Baños</label>
                    <textarea id="future_plans" v-model="futurePlans" class=" text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none resize-none px-2 py-3 w-full h-50" placeholder=""></textarea>
                  </div>
                  <div>
                    <label for="" class="font-bold block mb-2 text-sm text-gray-900 dark:text-gray-900">10. Academic Background: Previously school attended </label>
                    <label for="" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Institution(s) Attended</label>
                    <input id="instituition" v-model="instituitions" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Institution">
                    <label for="" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Major</label>
                    <input id="major_acad_background" v-model="majorAcadbackgroud" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Major">
                    <label for="" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Degree</label>
                    <input id="degree_acad_background" v-model="degreeAcadbackgroud" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Degree">
                    <label for="" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Date</label>
                    <input id="date_acad_background" v-model="dateAcadbackground" type="date" class=" form-control block w-15 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="">
                  </div>
                  <div>
                    <label for="" class="font-bold block mb-2 text-sm text-gray-900 dark:text-gray-900">11. Have you previously applied for admission to graduate studies at UPLB?</label>
                    <div class="inline-block relative w-64">
                      <select id="applied_before" v-model="appliedBefore" class="block appearance-none w-25 bg-white border border-gray-600 hover:border-gray-600 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                        <option value="">--</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                      <div v-if="appliedBefore === 'Yes'">
                        <label for="" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">if yes, please specify</label>
                        <textarea id="before_yes" v-model="beforeYes" class=" text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none resize-none px-2 py-3 w-full h-50" placeholder=""></textarea>
                        <label for="" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Date Submitted</label>
                        <input id="date_applied_before" v-model="dateAppliedbefore" type="date" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Date">
                      </div>
                    </div>
                  </div>
                  <div>
                    <label for="" class="font-bold block mb-2 text-sm text-gray-900 dark:text-gray-900">12. Your most recent and most partinent occupational experience:</label>
                    <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Name and Location of Employing Agency</label>
                    <textarea id="name_loc_emp" v-model="nameLocemp" class="  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none resize-none px-2 py-3 w-full h-50" placeholder=""></textarea>
                    <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Position</label>
                    <input id="position_recent_employer" v-model="positionRecentemployer" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Position">
                    <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Date</label>
                    <input id="date_recent_employer" v-model="dateRecentemployer" type="date" class=" form-control block-inline w-15 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Date">
                    <label class=" block-inline font-medium  mb-2 text-sm text-gray-900 dark:text-gray-900">to</label>
                    <input id="date_recent_employer2" v-model="dateRecentemployer2" type="date" class=" block-inline form-control  w-15 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Date">
                  </div>
                  <div>
                    <label for="" class="font-bold block mb-2 text-sm text-gray-900 dark:text-gray-900">13. Please list your membership in honor and professional organization:</label>
                    <textarea id="list_of_honor" v-model="listHonor" class="  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none resize-none px-2 py-3 w-full h-50" placeholder=""></textarea>
                  </div>
                  <div>
                    <label for="" class="font-bold block mb-2 text-sm text-gray-900 dark:text-gray-900">14. Publications: Give the complete bibliographical information</label>
                    <textarea id="publication" v-model="publication" class="  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none resize-none px-2 py-3 w-full h-50" placeholder=""></textarea>
                  </div>
                  <div>
                    <label for="" class="font-bold block mb-2 text-sm text-gray-900 dark:text-gray-900">15. Unpublished research paper or thesis</label>
                    <textarea id="unpublish_research" v-model="unpublishResearch" class="  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none resize-none px-2 py-3 w-full h-50" placeholder=""></textarea>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="mt-10 sm:mt-0">
        <div class="md:grid md:grid-cols-3 md:gap-6">
          <div class="md:col-span-1">
            <div class="px-4 sm:px-0">
              <h3 class="pt-8 text-lg font-medium leading-6 text-gray-900">RECOMMENDATION</h3>
            </div>
          </div>
          <div class="mt-5 md:col-span-2 md:mt-0">
            <form action="/" method="post">
              <div class="px-4 overflow-hidden shadow sm:rounded-md">
                <dt class="mt-8 mb-4 text-sm leading-2 font-medium text-grey-700">
                  RECOMMENDATION I
                </dt>
                <div>
                  <label for="" class="font-bold block mb-2 text-sm text-gray-900 dark:text-gray-900"> Name, Title, Address and Email of the professor whom you have requested to recommend you:</label>
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900"> Title:</label>
                  <input id="title_recommend" v-model="tRecommend" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Title">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Name</label>
                  <input id="name_recommend" v-model="nameRecommendation" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Name">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Address</label>
                  <input id="name_recommend" v-model="addressRecommendation" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Address">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Email</label>
                  <input id="email_reco" v-model="emailReco" type="email" class="mb-4 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Email">
                </div>
              </div>
              <div class="px-4 overflow-hidden shadow sm:rounded-md">
                <dt class="mt-8 mb-4 text-sm leading-2 font-medium text-grey-700">
                  RECOMMENDATION II
                </dt>
                <div>
                  <label for="" class="font-bold block mb-2 text-sm text-gray-900 dark:text-gray-900"> Name, Title, Address and Email of the professor whom you have requested to recommend you:</label>
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900"> Title:</label>
                  <input id="title_recommend2" v-model="tRecommend2" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Title">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Name</label>
                  <input id="name_recommend2" v-model="nameRecommendation2" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Name">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Address</label>
                  <input id="address_recommend2" v-model="addressRecommendation2" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Address">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Email</label>
                  <input id="email_reco2" v-model="emailReco2" type="email" class=" mb-4 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Email">
                </div>
              </div>
              <div v-if="programs === 'Phd of Philosophy in Agricultural Chemistry'" class="px-4 overflow-hidden shadow sm:rounded-md">
                <dt class="mt-8 mb-4 text-sm leading-2 font-medium text-grey-700">
                  RECOMMENDATION III
                </dt>
                <div>
                  <label for="" class="font-bold block mb-2 text-sm text-gray-900 dark:text-gray-900"> Name, Title, Address and Email of the professor whom you have requested to recommend you:</label>
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900"> Title:</label>
                  <input id="title_recommend3" v-model="tRecommend3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Title">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Name</label>
                  <input id="name_recommend3" v-model="nameRecommendation3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Name">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Address</label>
                  <input id="address_recommend3" v-model="addressRecommendation3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Address">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Email</label>
                  <input id="email_reco3" v-model="emailReco3" type="email" class=" mb-4 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Email">
                </div>
              </div>
              <div v-if="programs === 'Phd of Philosophy in Agricultural Economics'" class="px-4 overflow-hidden shadow sm:rounded-md">
                <dt class="mt-8 mb-4 text-sm leading-2 font-medium text-grey-700">
                  RECOMMENDATION III
                </dt>
                <div>
                  <label for="" class="font-bold block mb-2 text-sm text-gray-900 dark:text-gray-900"> Name, Title, Address and Email of the professor whom you have requested to recommend you:</label>
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900"> Title:</label>
                  <input id="title_recommend3" v-model="tRecommend3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Title">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Name</label>
                  <input id="name_recommend3" v-model="nameRecommendation3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Name">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Address</label>
                  <input id="address_recommend3" v-model="addressRecommendation3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Address">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Email</label>
                  <input id="email_reco3" v-model="emailReco3" type="email" class=" mb-4 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Email">
                </div>
              </div>
              <div v-if="programs === 'Phd of Philosophy in Agricultural Education'" class="px-4 overflow-hidden shadow sm:rounded-md">
                <dt class="mt-8 mb-4 text-sm leading-2 font-medium text-grey-700">
                  RECOMMENDATION III
                </dt>
                <div>
                  <label for="" class="font-bold block mb-2 text-sm text-gray-900 dark:text-gray-900"> Name, Title, Address and Email of the professor whom you have requested to recommend you:</label>
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900"> Title:</label>
                  <input id="title_recommend3" v-model="tRecommend3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Title">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Name</label>
                  <input id="name_recommend3" v-model="nameRecommendation3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Name">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Address</label>
                  <input id="address_recommend3" v-model="addressRecommendation3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Address">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Email</label>
                  <input id="email_reco3" v-model="emailReco3" type="email" class=" mb-4 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Email">
                </div>
              </div>
              <div v-if="programs === 'Phd of Philosophy in Agricultural Engineering'" class="px-4 overflow-hidden shadow sm:rounded-md">
                <dt class="mt-8 mb-4 text-sm leading-2 font-medium text-grey-700">
                  RECOMMENDATION III
                </dt>
                <div>
                  <label for="" class="font-bold block mb-2 text-sm text-gray-900 dark:text-gray-900"> Name, Title, Address and Email of the professor whom you have requested to recommend you:</label>
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900"> Title:</label>
                  <input id="title_recommend3" v-model="tRecommend3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Title">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Name</label>
                  <input id="name_recommend3" v-model="nameRecommendation3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Name">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Address</label>
                  <input id="address_recommend3" v-model="addressRecommendation3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Address">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Email</label>
                  <input id="email_reco3" v-model="emailReco3" type="email" class=" mb-4 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Email">
                </div>
              </div>
              <div v-if="programs === 'Phd of Philosophy in Agronomy'" class="px-4 overflow-hidden shadow sm:rounded-md">
                <dt class="mt-8 mb-4 text-sm leading-2 font-medium text-grey-700">
                  RECOMMENDATION III
                </dt>
                <div>
                  <label for="" class="font-bold block mb-2 text-sm text-gray-900 dark:text-gray-900"> Name, Title, Address and Email of the professor whom you have requested to recommend you:</label>
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900"> Title:</label>
                  <input id="title_recommend3" v-model="tRecommend3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Title">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Name</label>
                  <input id="name_recommend3" v-model="nameRecommendation3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Name">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Address</label>
                  <input id="address_recommend3" v-model="addressRecommendation3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Address">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Email</label>
                  <input id="email_reco3" v-model="emailReco3" type="email" class=" mb-4 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Email">
                </div>
              </div>
              <div v-if="programs === 'Phd of Philosophy in Animal Science'" class="px-4 overflow-hidden shadow sm:rounded-md">
                <dt class="mt-8 mb-4 text-sm leading-2 font-medium text-grey-700">
                  RECOMMENDATION III
                </dt>
                <div>
                  <label for="" class="font-bold block mb-2 text-sm text-gray-900 dark:text-gray-900"> Name, Title, Address and Email of the professor whom you have requested to recommend you:</label>
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900"> Title:</label>
                  <input id="title_recommend3" v-model="tRecommend3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Title">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Name</label>
                  <input id="name_recommend3" v-model="nameRecommendation3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Name">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Address</label>
                  <input id="address_recommend3" v-model="addressRecommendation3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Address">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Email</label>
                  <input id="email_reco3" v-model="emailReco3" type="email" class=" mb-4 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Email">
                </div>
              </div>
              <div v-if="programs === 'Phd of Philosophy in Applied Mathematics'" class="px-4 overflow-hidden shadow sm:rounded-md">
                <dt class="mt-8 mb-4 text-sm leading-2 font-medium text-grey-700">
                  RECOMMENDATION III
                </dt>
                <div>
                  <label for="" class="font-bold block mb-2 text-sm text-gray-900 dark:text-gray-900"> Name, Title, Address and Email of the professor whom you have requested to recommend you:</label>
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900"> Title:</label>
                  <input id="title_recommend3" v-model="tRecommend3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Title">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Name</label>
                  <input id="name_recommend3" v-model="nameRecommendation3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Name">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Address</label>
                  <input id="address_recommend3" v-model="addressRecommendation3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Address">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Email</label>
                  <input id="email_reco3" v-model="emailReco3" type="email" class=" mb-4 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Email">
                </div>
              </div>
              <div v-if="programs === 'Phd of Philosophy in Biochemistry'" class="px-4 overflow-hidden shadow sm:rounded-md">
                <dt class="mt-8 mb-4 text-sm leading-2 font-medium text-grey-700">
                  RECOMMENDATION III
                </dt>
                <div>
                  <label for="" class="font-bold block mb-2 text-sm text-gray-900 dark:text-gray-900"> Name, Title, Address and Email of the professor whom you have requested to recommend you:</label>
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900"> Title:</label>
                  <input id="title_recommend3" v-model="tRecommend3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Title">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Name</label>
                  <input id="name_recommend3" v-model="nameRecommendation3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Name">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Address</label>
                  <input id="address_recommend3" v-model="addressRecommendation3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Address">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Email</label>
                  <input id="email_reco3" v-model="emailReco3" type="email" class=" mb-4 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Email">
                </div>
              </div>
              <div v-if="programs === 'Phd of Philosophy in Botany'" class="px-4 overflow-hidden shadow sm:rounded-md">
                <dt class="mt-8 mb-4 text-sm leading-2 font-medium text-grey-700">
                  RECOMMENDATION III
                </dt>
                <div>
                  <label for="" class="font-bold block mb-2 text-sm text-gray-900 dark:text-gray-900"> Name, Title, Address and Email of the professor whom you have requested to recommend you:</label>
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900"> Title:</label>
                  <input id="title_recommend3" v-model="tRecommend3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Title">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Name</label>
                  <input id="name_recommend3" v-model="nameRecommendation3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Name">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Address</label>
                  <input id="address_recommend3" v-model="addressRecommendation3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Address">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Email</label>
                  <input id="email_reco3" v-model="emailReco3" type="email" class=" mb-4 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Email">
                </div>
              </div>
              <div v-if="programs === 'Phd of Philosophy in Computer Science'" class="px-4 overflow-hidden shadow sm:rounded-md">
                <dt class="mt-8 mb-4 text-sm leading-2 font-medium text-grey-700">
                  RECOMMENDATION III
                </dt>
                <div>
                  <label for="" class="font-bold block mb-2 text-sm text-gray-900 dark:text-gray-900"> Name, Title, Address and Email of the professor whom you have requested to recommend you:</label>
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900"> Title:</label>
                  <input id="title_recommend3" v-model="tRecommend3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Title">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Name</label>
                  <input id="name_recommend3" v-model="nameRecommendation3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Name">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Address</label>
                  <input id="address_recommend3" v-model="addressRecommendation3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Address">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Email</label>
                  <input id="email_reco3" v-model="emailReco3" type="email" class=" mb-4 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Email">
                </div>
              </div>
              <div v-if="programs === 'Phd of Philosophy in Community Development'" class="px-4 overflow-hidden shadow sm:rounded-md">
                <dt class="mt-8 mb-4 text-sm leading-2 font-medium text-grey-700">
                  RECOMMENDATION III
                </dt>
                <div>
                  <label for="" class="font-bold block mb-2 text-sm text-gray-900 dark:text-gray-900"> Name, Title, Address and Email of the professor whom you have requested to recommend you:</label>
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900"> Title:</label>
                  <input id="title_recommend3" v-model="tRecommend3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Title">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Name</label>
                  <input id="name_recommend3" v-model="nameRecommendation3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Name">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Address</label>
                  <input id="address_recommend3" v-model="addressRecommendation3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Address">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Email</label>
                  <input id="email_reco3" v-model="emailReco3" type="email" class=" mb-4 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Email">
                </div>
              </div>
              <div v-if="programs === 'Phd of Philosophy in Development Communication'" class="px-4 overflow-hidden shadow sm:rounded-md">
                <dt class="mt-8 mb-4 text-sm leading-2 font-medium text-grey-700">
                  RECOMMENDATION III
                </dt>
                <div>
                  <label for="" class="font-bold block mb-2 text-sm text-gray-900 dark:text-gray-900"> Name, Title, Address and Email of the professor whom you have requested to recommend you:</label>
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900"> Title:</label>
                  <input id="title_recommend3" v-model="tRecommend3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Title">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Name</label>
                  <input id="name_recommend3" v-model="nameRecommendation3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Name">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Address</label>
                  <input id="address_recommend3" v-model="addressRecommendation3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Address">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Email</label>
                  <input id="email_reco3" v-model="emailReco3" type="email" class=" mb-4 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Email">
                </div>
              </div>
              <div v-if="programs === 'Phd of Philosophy in Entomology'" class="px-4 overflow-hidden shadow sm:rounded-md">
                <dt class="mt-8 mb-4 text-sm leading-2 font-medium text-grey-700">
                  RECOMMENDATION III
                </dt>
                <div>
                  <label for="" class="font-bold block mb-2 text-sm text-gray-900 dark:text-gray-900"> Name, Title, Address and Email of the professor whom you have requested to recommend you:</label>
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900"> Title:</label>
                  <input id="title_recommend3" v-model="tRecommend3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Title">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Name</label>
                  <input id="name_recommend3" v-model="nameRecommendation3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Name">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Address</label>
                  <input id="address_recommend3" v-model="addressRecommendation3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Address">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Email</label>
                  <input id="email_reco3" v-model="emailReco3" type="email" class=" mb-4 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Email">
                </div>
              </div>
              <div v-if="programs === 'Phd of Philosophy in Development Studies'" class="px-4 overflow-hidden shadow sm:rounded-md">
                <dt class="mt-8 mb-4 text-sm leading-2 font-medium text-grey-700">
                  RECOMMENDATION III
                </dt>
                <div>
                  <label for="" class="font-bold block mb-2 text-sm text-gray-900 dark:text-gray-900"> Name, Title, Address and Email of the professor whom you have requested to recommend you:</label>
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900"> Title:</label>
                  <input id="title_recommend3" v-model="tRecommend3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Title">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Name</label>
                  <input id="name_recommend3" v-model="nameRecommendation3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Name">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Address</label>
                  <input id="address_recommend3" v-model="addressRecommendation3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Address">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Email</label>
                  <input id="email_reco3" v-model="emailReco3" type="email" class=" mb-4 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Email">
                </div>
              </div>
              <div v-if="programs === 'Phd of Philosophy in Environmental Science'" class="px-4 overflow-hidden shadow sm:rounded-md">
                <dt class="mt-8 mb-4 text-sm leading-2 font-medium text-grey-700">
                  RECOMMENDATION III
                </dt>
                <div>
                  <label for="" class="font-bold block mb-2 text-sm text-gray-900 dark:text-gray-900"> Name, Title, Address and Email of the professor whom you have requested to recommend you:</label>
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900"> Title:</label>
                  <input id="title_recommend3" v-model="tRecommend3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Title">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Name</label>
                  <input id="name_recommend3" v-model="nameRecommendation3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Name">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Address</label>
                  <input id="address_recommend3" v-model="addressRecommendation3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Address">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Email</label>
                  <input id="email_reco3" v-model="emailReco3" type="email" class=" mb-4 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Email">
                </div>
              </div>
              <div v-if="programs === 'Phd of Philosophy in Extension Education'" class="px-4 overflow-hidden shadow sm:rounded-md">
                <dt class="mt-8 mb-4 text-sm leading-2 font-medium text-grey-700">
                  RECOMMENDATION III
                </dt>
                <div>
                  <label for="" class="font-bold block mb-2 text-sm text-gray-900 dark:text-gray-900"> Name, Title, Address and Email of the professor whom you have requested to recommend you:</label>
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900"> Title:</label>
                  <input id="title_recommend3" v-model="tRecommend3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Title">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Name</label>
                  <input id="name_recommend3" v-model="nameRecommendation3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Name">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Address</label>
                  <input id="address_recommend3" v-model="addressRecommendation3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Address">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Email</label>
                  <input id="email_reco3" v-model="emailReco3" type="email" class=" mb-4 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Email">
                </div>
              </div>
              <div v-if="programs === 'Phd of Philosophy in Food Science'" class="px-4 overflow-hidden shadow sm:rounded-md">
                <dt class="mt-8 mb-4 text-sm leading-2 font-medium text-grey-700">
                  RECOMMENDATION III
                </dt>
                <div>
                  <label for="" class="font-bold block mb-2 text-sm text-gray-900 dark:text-gray-900"> Name, Title, Address and Email of the professor whom you have requested to recommend you:</label>
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900"> Title:</label>
                  <input id="title_recommend3" v-model="tRecommend3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Title">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Name</label>
                  <input id="name_recommend3" v-model="nameRecommendation3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Name">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Address</label>
                  <input id="address_recommend3" v-model="addressRecommendation3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Address">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Email</label>
                  <input id="email_reco3" v-model="emailReco3" type="email" class=" mb-4 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Email">
                </div>
              </div>
              <div v-if="programs === 'Phd of Philosophy in Forestry: Forest Biological Sciences'" class="px-4 overflow-hidden shadow sm:rounded-md">
                <dt class="mt-8 mb-4 text-sm leading-2 font-medium text-grey-700">
                  RECOMMENDATION III
                </dt>
                <div>
                  <label for="" class="font-bold block mb-2 text-sm text-gray-900 dark:text-gray-900"> Name, Title, Address and Email of the professor whom you have requested to recommend you:</label>
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900"> Title:</label>
                  <input id="title_recommend3" v-model="tRecommend3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Title">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Name</label>
                  <input id="name_recommend3" v-model="nameRecommendation3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Name">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Address</label>
                  <input id="address_recommend3" v-model="addressRecommendation3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Address">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Email</label>
                  <input id="email_reco3" v-model="emailReco3" type="email" class=" mb-4 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Email">
                </div>
              </div>
              <div v-if="programs === 'Phd of Philosophy in Forestry: Forest Resources Management'" class="px-4 overflow-hidden shadow sm:rounded-md">
                <dt class="mt-8 mb-4 text-sm leading-2 font-medium text-grey-700">
                  RECOMMENDATION III
                </dt>
                <div>
                  <label for="" class="font-bold block mb-2 text-sm text-gray-900 dark:text-gray-900"> Name, Title, Address and Email of the professor whom you have requested to recommend you:</label>
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900"> Title:</label>
                  <input id="title_recommend3" v-model="tRecommend3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Title">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Name</label>
                  <input id="name_recommend3" v-model="nameRecommendation3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Name">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Address</label>
                  <input id="address_recommend3" v-model="addressRecommendation3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Address">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Email</label>
                  <input id="email_reco3" v-model="emailReco3" type="email" class=" mb-4 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Email">
                </div>
              </div>
              <div v-if="programs === 'Phd of Philosophy in Forestry: Forest Resources Management'" class="px-4 overflow-hidden shadow sm:rounded-md">
                <dt class="mt-8 mb-4 text-sm leading-2 font-medium text-grey-700">
                  RECOMMENDATION III
                </dt>
                <div>
                  <label for="" class="font-bold block mb-2 text-sm text-gray-900 dark:text-gray-900"> Name, Title, Address and Email of the professor whom you have requested to recommend you:</label>
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900"> Title:</label>
                  <input id="title_recommend3" v-model="tRecommend3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Title">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Name</label>
                  <input id="name_recommend3" v-model="nameRecommendation3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Name">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Address</label>
                  <input id="address_recommend3" v-model="addressRecommendation3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Address">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Email</label>
                  <input id="email_reco3" v-model="emailReco3" type="email" class=" mb-4 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Email">
                </div>
              </div>
              <div v-if="programs === 'Phd of Philosophy in Forestry: Silviculture and Forest Influences'" class="px-4 overflow-hidden shadow sm:rounded-md">
                <dt class="mt-8 mb-4 text-sm leading-2 font-medium text-grey-700">
                  RECOMMENDATION III
                </dt>
                <div>
                  <label for="" class="font-bold block mb-2 text-sm text-gray-900 dark:text-gray-900"> Name, Title, Address and Email of the professor whom you have requested to recommend you:</label>
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900"> Title:</label>
                  <input id="title_recommend3" v-model="tRecommend3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Title">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Name</label>
                  <input id="name_recommend3" v-model="nameRecommendation3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Name">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Address</label>
                  <input id="address_recommend3" v-model="addressRecommendation3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Address">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Email</label>
                  <input id="email_reco3" v-model="emailReco3" type="email" class=" mb-4 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Email">
                </div>
              </div>
              <div v-if="programs === 'Phd of Philosophy in Forestry: Wood Science and Technology'" class="px-4 overflow-hidden shadow sm:rounded-md">
                <dt class="mt-8 mb-4 text-sm leading-2 font-medium text-grey-700">
                  RECOMMENDATION III
                </dt>
                <div>
                  <label for="" class="font-bold block mb-2 text-sm text-gray-900 dark:text-gray-900"> Name, Title, Address and Email of the professor whom you have requested to recommend you:</label>
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900"> Title:</label>
                  <input id="title_recommend3" v-model="tRecommend3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Title">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Name</label>
                  <input id="name_recommend3" v-model="nameRecommendation3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Name">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Address</label>
                  <input id="address_recommend3" v-model="addressRecommendation3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Address">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Email</label>
                  <input id="email_reco3" v-model="emailReco3" type="email" class=" mb-4 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Email">
                </div>
              </div>
              <div v-if="programs === 'Phd of Philosophy in Genetics'" class="px-4 overflow-hidden shadow sm:rounded-md">
                <dt class="mt-8 mb-4 text-sm leading-2 font-medium text-grey-700">
                  RECOMMENDATION III
                </dt>
                <div>
                  <label for="" class="font-bold block mb-2 text-sm text-gray-900 dark:text-gray-900"> Name, Title, Address and Email of the professor whom you have requested to recommend you:</label>
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900"> Title:</label>
                  <input id="title_recommend3" v-model="tRecommend3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Title">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Name</label>
                  <input id="name_recommend3" v-model="nameRecommendation3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Name">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Address</label>
                  <input id="address_recommend3" v-model="addressRecommendation3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Address">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Email</label>
                  <input id="email_reco3" v-model="emailReco3" type="email" class=" mb-4 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Email">
                </div>
              </div>
              <div v-if="programs === 'Phd of Philosophy in Horticulture'" class="px-4 overflow-hidden shadow sm:rounded-md">
                <dt class="mt-8 mb-4 text-sm leading-2 font-medium text-grey-700">
                  RECOMMENDATION III
                </dt>
                <div>
                  <label for="" class="font-bold block mb-2 text-sm text-gray-900 dark:text-gray-900"> Name, Title, Address and Email of the professor whom you have requested to recommend you:</label>
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900"> Title:</label>
                  <input id="title_recommend3" v-model="tRecommend3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Title">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Name</label>
                  <input id="name_recommend3" v-model="nameRecommendation3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Name">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Address</label>
                  <input id="address_recommend3" v-model="addressRecommendation3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Address">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Email</label>
                  <input id="email_reco3" v-model="emailReco3" type="email" class=" mb-4 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Email">
                </div>
              </div>
              <div v-if="programs === 'Phd of Philosophy in Human Nutrition'" class="px-4 overflow-hidden shadow sm:rounded-md">
                <dt class="mt-8 mb-4 text-sm leading-2 font-medium text-grey-700">
                  RECOMMENDATION III
                </dt>
                <div>
                  <label for="" class="font-bold block mb-2 text-sm text-gray-900 dark:text-gray-900"> Name, Title, Address and Email of the professor whom you have requested to recommend you:</label>
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900"> Title:</label>
                  <input id="title_recommend3" v-model="tRecommend3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Title">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Name</label>
                  <input id="name_recommend3" v-model="nameRecommendation3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Name">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Address</label>
                  <input id="address_recommend3" v-model="addressRecommendation3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Address">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Email</label>
                  <input id="email_reco3" v-model="emailReco3" type="email" class=" mb-4 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Email">
                </div>
              </div>
              <div v-if="programs === 'Phd of Philosophy in Microbiology'" class="px-4 overflow-hidden shadow sm:rounded-md">
                <dt class="mt-8 mb-4 text-sm leading-2 font-medium text-grey-700">
                  RECOMMENDATION III
                </dt>
                <div>
                  <label for="" class="font-bold block mb-2 text-sm text-gray-900 dark:text-gray-900"> Name, Title, Address and Email of the professor whom you have requested to recommend you:</label>
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900"> Title:</label>
                  <input id="title_recommend3" v-model="tRecommend3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Title">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Name</label>
                  <input id="name_recommend3" v-model="nameRecommendation3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Name">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Address</label>
                  <input id="address_recommend3" v-model="addressRecommendation3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Address">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Email</label>
                  <input id="email_reco3" v-model="emailReco3" type="email" class=" mb-4 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Email">
                </div>
              </div>
              <div v-if="programs === 'Phd of Philosophy in Molecular Biology and Biotechnology'" class="px-4 overflow-hidden shadow sm:rounded-md">
                <dt class="mt-8 mb-4 text-sm leading-2 font-medium text-grey-700">
                  RECOMMENDATION III
                </dt>
                <div>
                  <label for="" class="font-bold block mb-2 text-sm text-gray-900 dark:text-gray-900"> Name, Title, Address and Email of the professor whom you have requested to recommend you:</label>
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900"> Title:</label>
                  <input id="title_recommend3" v-model="tRecommend3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Title">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Name</label>
                  <input id="name_recommend3" v-model="nameRecommendation3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Name">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Address</label>
                  <input id="address_recommend3" v-model="addressRecommendation3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Address">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Email</label>
                  <input id="email_reco3" v-model="emailReco3" type="email" class=" mb-4 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Email">
                </div>
              </div>
              <div v-if="programs === 'Phd of Philosophy in Plant Breeding'" class="px-4 overflow-hidden shadow sm:rounded-md">
                <dt class="mt-8 mb-4 text-sm leading-2 font-medium text-grey-700">
                  RECOMMENDATION III
                </dt>
                <div>
                  <label for="" class="font-bold block mb-2 text-sm text-gray-900 dark:text-gray-900"> Name, Title, Address and Email of the professor whom you have requested to recommend you:</label>
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900"> Title:</label>
                  <input id="title_recommend3" v-model="tRecommend3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Title">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Name</label>
                  <input id="name_recommend3" v-model="nameRecommendation3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Name">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Address</label>
                  <input id="address_recommend3" v-model="addressRecommendation3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Address">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Email</label>
                  <input id="email_reco3" v-model="emailReco3" type="email" class=" mb-4 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Email">
                </div>
              </div>
              <div v-if="programs === 'Phd of Philosophy in Plant Pathology'" class="px-4 overflow-hidden shadow sm:rounded-md">
                <dt class="mt-8 mb-4 text-sm leading-2 font-medium text-grey-700">
                  RECOMMENDATION III
                </dt>
                <div>
                  <label for="" class="font-bold block mb-2 text-sm text-gray-900 dark:text-gray-900"> Name, Title, Address and Email of the professor whom you have requested to recommend you:</label>
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900"> Title:</label>
                  <input id="title_recommend3" v-model="tRecommend3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Title">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Name</label>
                  <input id="name_recommend3" v-model="nameRecommendation3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Name">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Address</label>
                  <input id="address_recommend3" v-model="addressRecommendation3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Address">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Email</label>
                  <input id="email_reco3" v-model="emailReco3" type="email" class=" mb-4 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Email">
                </div>
              </div>
              <div v-if="programs === 'Phd of Philosophy in Soil Science'" class="px-4 overflow-hidden shadow sm:rounded-md">
                <dt class="mt-8 mb-4 text-sm leading-2 font-medium text-grey-700">
                  RECOMMENDATION III
                </dt>
                <div>
                  <label for="" class="font-bold block mb-2 text-sm text-gray-900 dark:text-gray-900"> Name, Title, Address and Email of the professor whom you have requested to recommend you:</label>
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900"> Title:</label>
                  <input id="title_recommend3" v-model="tRecommend3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Title">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Name</label>
                  <input id="name_recommend3" v-model="nameRecommendation3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Name">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Address</label>
                  <input id="address_recommend3" v-model="addressRecommendation3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Address">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Email</label>
                  <input id="email_reco3" v-model="emailReco3" type="email" class=" mb-4 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Email">
                </div>
              </div>
              <div v-if="programs === 'Phd of Philosophy in Statistics'" class="px-4 overflow-hidden shadow sm:rounded-md">
                <dt class="mt-8 mb-4 text-sm leading-2 font-medium text-grey-700">
                  RECOMMENDATION III
                </dt>
                <div>
                  <label for="" class="font-bold block mb-2 text-sm text-gray-900 dark:text-gray-900"> Name, Title, Address and Email of the professor whom you have requested to recommend you:</label>
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900"> Title:</label>
                  <input id="title_recommend3" v-model="tRecommend3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Title">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Name</label>
                  <input id="name_recommend3" v-model="nameRecommendation3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Name">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Address</label>
                  <input id="address_recommend3" v-model="addressRecommendation3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Address">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Email</label>
                  <input id="email_reco3" v-model="emailReco3" type="email" class=" mb-4 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Email">
                </div>
              </div>
              <div v-if="programs === 'Straight PhD in Agricultural Economics'" class="px-4 overflow-hidden shadow sm:rounded-md">
                <dt class="mt-8 mb-4 text-sm leading-2 font-medium text-grey-700">
                  RECOMMENDATION III
                </dt>
                <div>
                  <label for="" class="font-bold block mb-2 text-sm text-gray-900 dark:text-gray-900"> Name, Title, Address and Email of the professor whom you have requested to recommend you:</label>
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900"> Title:</label>
                  <input id="title_recommend3" v-model="tRecommend3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Title">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Name</label>
                  <input id="name_recommend3" v-model="nameRecommendation3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Name">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Address</label>
                  <input id="address_recommend3" v-model="addressRecommendation3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Address">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Email</label>
                  <input id="email_reco3" v-model="emailReco3" type="email" class=" mb-4 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Email">
                </div>
              </div>
              <div v-if="programs === 'Straight PhD in Development Communication'" class="px-4 overflow-hidden shadow sm:rounded-md">
                <dt class="mt-8 mb-4 text-sm leading-2 font-medium text-grey-700">
                  RECOMMENDATION III
                </dt>
                <div>
                  <label for="" class="font-bold block mb-2 text-sm text-gray-900 dark:text-gray-900"> Name, Title, Address and Email of the professor whom you have requested to recommend you:</label>
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900"> Title:</label>
                  <input id="title_recommend3" v-model="tRecommend3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Title">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Name</label>
                  <input id="name_recommend3" v-model="nameRecommendation3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Name">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Address</label>
                  <input id="address_recommend3" v-model="addressRecommendation3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Address">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Email</label>
                  <input id="email_reco3" v-model="emailReco3" type="email" class=" mb-4 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Email">
                </div>
              </div>
              <div v-if="programs === 'Straight PhD in Environmental Science'" class="px-4 overflow-hidden shadow sm:rounded-md">
                <dt class="mt-8 mb-4 text-sm leading-2 font-medium text-grey-700">
                  RECOMMENDATION III
                </dt>
                <div>
                  <label for="" class="font-bold block mb-2 text-sm text-gray-900 dark:text-gray-900"> Name, Title, Address and Email of the professor whom you have requested to recommend you:</label>
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900"> Title:</label>
                  <input id="title_recommend3" v-model="tRecommend3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Title">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Name</label>
                  <input id="name_recommend3" v-model="nameRecommendation3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Name">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Address</label>
                  <input id="address_recommend3" v-model="addressRecommendation3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Address">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Email</label>
                  <input id="email_reco3" v-model="emailReco3" type="email" class=" mb-4 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Email">
                </div>
              </div>
              <div v-if="programs === 'Straight PhD in Soil Science'" class="px-4 overflow-hidden shadow sm:rounded-md">
                <dt class="mt-8 mb-4 text-sm leading-2 font-medium text-grey-700">
                  RECOMMENDATION III
                </dt>
                <div>
                  <label for="" class="font-bold block mb-2 text-sm text-gray-900 dark:text-gray-900"> Name, Title, Address and Email of the professor whom you have requested to recommend you:</label>
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900"> Title:</label>
                  <input id="title_recommend3" v-model="tRecommend3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Title">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Name</label>
                  <input id="name_recommend3" v-model="nameRecommendation3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Name">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Address</label>
                  <input id="address_recommend3" v-model="addressRecommendation3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Address">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Email</label>
                  <input id="email_reco3" v-model="emailReco3" type="email" class=" mb-4 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Email">
                </div>
              </div>
              <div v-if="programs === 'PhD by Research in Agribusiness Management and Entrepreneurship'" class="px-4 overflow-hidden shadow sm:rounded-md">
                <dt class="mt-8 mb-4 text-sm leading-2 font-medium text-grey-700">
                  RECOMMENDATION III
                </dt>
                <div>
                  <label for="" class="font-bold block mb-2 text-sm text-gray-900 dark:text-gray-900"> Name, Title, Address and Email of the professor whom you have requested to recommend you:</label>
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900"> Title:</label>
                  <input id="title_recommend3" v-model="tRecommend3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Title">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Name</label>
                  <input id="name_recommend3" v-model="nameRecommendation3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Name">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Address</label>
                  <input id="address_recommend3" v-model="addressRecommendation3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Address">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Email</label>
                  <input id="email_reco3" v-model="emailReco3" type="email" class=" mb-4 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Email">
                </div>
              </div>
              <div v-if="programs === 'PhD by Research in Agricultural and Applied Economics'" class="px-4 overflow-hidden shadow sm:rounded-md">
                <dt class="mt-8 mb-4 text-sm leading-2 font-medium text-grey-700">
                  RECOMMENDATION III
                </dt>
                <div>
                  <label for="" class="font-bold block mb-2 text-sm text-gray-900 dark:text-gray-900"> Name, Title, Address and Email of the professor whom you have requested to recommend you:</label>
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900"> Title:</label>
                  <input id="title_recommend3" v-model="tRecommend3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Title">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Name</label>
                  <input id="name_recommend3" v-model="nameRecommendation3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Name">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Address</label>
                  <input id="address_recommend3" v-model="addressRecommendation3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Address">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Email</label>
                  <input id="email_reco3" v-model="emailReco3" type="email" class=" mb-4 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Email">
                </div>
              </div>
              <div v-if="programs === 'PhD by Research in Agronomy'" class="px-4 overflow-hidden shadow sm:rounded-md">
                <dt class="mt-8 mb-4 text-sm leading-2 font-medium text-grey-700">
                  RECOMMENDATION III
                </dt>
                <div>
                  <label for="" class="font-bold block mb-2 text-sm text-gray-900 dark:text-gray-900"> Name, Title, Address and Email of the professor whom you have requested to recommend you:</label>
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900"> Title:</label>
                  <input id="title_recommend3" v-model="tRecommend3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Title">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Name</label>
                  <input id="name_recommend3" v-model="nameRecommendation3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Name">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Address</label>
                  <input id="address_recommend3" v-model="addressRecommendation3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Address">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Email</label>
                  <input id="email_reco3" v-model="emailReco3" type="email" class=" mb-4 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Email">
                </div>
              </div>
              <div v-if="programs === 'PhD by Research in Animal Science'" class="px-4 overflow-hidden shadow sm:rounded-md">
                <dt class="mt-8 mb-4 text-sm leading-2 font-medium text-grey-700">
                  RECOMMENDATION III
                </dt>
                <div>
                  <label for="" class="font-bold block mb-2 text-sm text-gray-900 dark:text-gray-900"> Name, Title, Address and Email of the professor whom you have requested to recommend you:</label>
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900"> Title:</label>
                  <input id="title_recommend3" v-model="tRecommend3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Title">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Name</label>
                  <input id="name_recommend3" v-model="nameRecommendation3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Name">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Address</label>
                  <input id="address_recommend3" v-model="addressRecommendation3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Address">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Email</label>
                  <input id="email_reco3" v-model="emailReco3" type="email" class=" mb-4 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Email">
                </div>
              </div>
              <div v-if="programs === 'PhD by Research in Botany'" class="px-4 overflow-hidden shadow sm:rounded-md">
                <dt class="mt-8 mb-4 text-sm leading-2 font-medium text-grey-700">
                  RECOMMENDATION III
                </dt>
                <div>
                  <label for="" class="font-bold block mb-2 text-sm text-gray-900 dark:text-gray-900"> Name, Title, Address and Email of the professor whom you have requested to recommend you:</label>
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900"> Title:</label>
                  <input id="title_recommend3" v-model="tRecommend3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Title">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Name</label>
                  <input id="name_recommend3" v-model="nameRecommendation3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Name">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Address</label>
                  <input id="address_recommend3" v-model="addressRecommendation3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Address">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Email</label>
                  <input id="email_reco3" v-model="emailReco3" type="email" class=" mb-4 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Email">
                </div>
              </div>
              <div v-if="programs === 'PhD by Research in Computer Science'" class="px-4 overflow-hidden shadow sm:rounded-md">
                <dt class="mt-8 mb-4 text-sm leading-2 font-medium text-grey-700">
                  RECOMMENDATION III
                </dt>
                <div>
                  <label for="" class="font-bold block mb-2 text-sm text-gray-900 dark:text-gray-900"> Name, Title, Address and Email of the professor whom you have requested to recommend you:</label>
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900"> Title:</label>
                  <input id="title_recommend3" v-model="tRecommend3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Title">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Name</label>
                  <input id="name_recommend3" v-model="nameRecommendation3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Name">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Address</label>
                  <input id="address_recommend3" v-model="addressRecommendation3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Address">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Email</label>
                  <input id="email_reco3" v-model="emailReco3" type="email" class=" mb-4 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Email">
                </div>
              </div>
              <div v-if="programs === 'PhD by Research in Development Communication'" class="px-4 overflow-hidden shadow sm:rounded-md">
                <dt class="mt-8 mb-4 text-sm leading-2 font-medium text-grey-700">
                  RECOMMENDATION III
                </dt>
                <div>
                  <label for="" class="font-bold block mb-2 text-sm text-gray-900 dark:text-gray-900"> Name, Title, Address and Email of the professor whom you have requested to recommend you:</label>
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900"> Title:</label>
                  <input id="title_recommend3" v-model="tRecommend3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Title">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Name</label>
                  <input id="name_recommend3" v-model="nameRecommendation3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Name">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Address</label>
                  <input id="address_recommend3" v-model="addressRecommendation3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Address">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Email</label>
                  <input id="email_reco3" v-model="emailReco3" type="email" class=" mb-4 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Email">
                </div>
              </div>
              <div v-if="programs === 'PhD by Research in Economics'" class="px-4 overflow-hidden shadow sm:rounded-md">
                <dt class="mt-8 mb-4 text-sm leading-2 font-medium text-grey-700">
                  RECOMMENDATION III
                </dt>
                <div>
                  <label for="" class="font-bold block mb-2 text-sm text-gray-900 dark:text-gray-900"> Name, Title, Address and Email of the professor whom you have requested to recommend you:</label>
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900"> Title:</label>
                  <input id="title_recommend3" v-model="tRecommend3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Title">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Name</label>
                  <input id="name_recommend3" v-model="nameRecommendation3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Name">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Address</label>
                  <input id="address_recommend3" v-model="addressRecommendation3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Address">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Email</label>
                  <input id="email_reco3" v-model="emailReco3" type="email" class=" mb-4 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Email">
                </div>
              </div>
              <div v-if="programs === 'PhD by Research in Entomology'" class="px-4 overflow-hidden shadow sm:rounded-md">
                <dt class="mt-8 mb-4 text-sm leading-2 font-medium text-grey-700">
                  RECOMMENDATION III
                </dt>
                <div>
                  <label for="" class="font-bold block mb-2 text-sm text-gray-900 dark:text-gray-900"> Name, Title, Address and Email of the professor whom you have requested to recommend you:</label>
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900"> Title:</label>
                  <input id="title_recommend3" v-model="tRecommend3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Title">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Name</label>
                  <input id="name_recommend3" v-model="nameRecommendation3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Name">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Address</label>
                  <input id="address_recommend3" v-model="addressRecommendation3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Address">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Email</label>
                  <input id="email_reco3" v-model="emailReco3" type="email" class=" mb-4 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Email">
                </div>
              </div>
              <div v-if="programs === 'PhD by Research in Environmental Science'" class="px-4 overflow-hidden shadow sm:rounded-md">
                <dt class="mt-8 mb-4 text-sm leading-2 font-medium text-grey-700">
                  RECOMMENDATION III
                </dt>
                <div>
                  <label for="" class="font-bold block mb-2 text-sm text-gray-900 dark:text-gray-900"> Name, Title, Address and Email of the professor whom you have requested to recommend you:</label>
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900"> Title:</label>
                  <input id="title_recommend3" v-model="tRecommend3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Title">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Name</label>
                  <input id="name_recommend3" v-model="nameRecommendation3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Name">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Address</label>
                  <input id="address_recommend3" v-model="addressRecommendation3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Address">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Email</label>
                  <input id="email_reco3" v-model="emailReco3" type="email" class=" mb-4 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Email">
                </div>
              </div>
              <div v-if="programs === 'PhD by Research in Horticulture'" class="px-4 overflow-hidden shadow sm:rounded-md">
                <dt class="mt-8 mb-4 text-sm leading-2 font-medium text-grey-700">
                  RECOMMENDATION III
                </dt>
                <div>
                  <label for="" class="font-bold block mb-2 text-sm text-gray-900 dark:text-gray-900"> Name, Title, Address and Email of the professor whom you have requested to recommend you:</label>
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900"> Title:</label>
                  <input id="title_recommend3" v-model="tRecommend3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Title">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Name</label>
                  <input id="name_recommend3" v-model="nameRecommendation3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Name">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Address</label>
                  <input id="address_recommend3" v-model="addressRecommendation3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Address">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Email</label>
                  <input id="email_reco3" v-model="emailReco3" type="email" class=" mb-4 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Email">
                </div>
              </div>
              <div v-if="programs === 'PhD by Research in Plant Breeding'" class="px-4 overflow-hidden shadow sm:rounded-md">
                <dt class="mt-8 mb-4 text-sm leading-2 font-medium text-grey-700">
                  RECOMMENDATION III
                </dt>
                <div>
                  <label for="" class="font-bold block mb-2 text-sm text-gray-900 dark:text-gray-900"> Name, Title, Address and Email of the professor whom you have requested to recommend you:</label>
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900"> Title:</label>
                  <input id="title_recommend3" v-model="tRecommend3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Title">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Name</label>
                  <input id="name_recommend3" v-model="nameRecommendation3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Name">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Address</label>
                  <input id="address_recommend3" v-model="addressRecommendation3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Address">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Email</label>
                  <input id="email_reco3" v-model="emailReco3" type="email" class=" mb-4 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Email">
                </div>
              </div>
              <div v-if="programs === 'PhD by Research in Plant Pathology'" class="px-4 overflow-hidden shadow sm:rounded-md">
                <dt class="mt-8 mb-4 text-sm leading-2 font-medium text-grey-700">
                  RECOMMENDATION III
                </dt>
                <div>
                  <label for="" class="font-bold block mb-2 text-sm text-gray-900 dark:text-gray-900"> Name, Title, Address and Email of the professor whom you have requested to recommend you:</label>
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900"> Title:</label>
                  <input id="title_recommend3" v-model="tRecommend3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Title">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Name</label>
                  <input id="name_recommend3" v-model="nameRecommendation3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Name">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Address</label>
                  <input id="address_recommend3" v-model="addressRecommendation3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Address">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Email</label>
                  <input id="email_reco3" v-model="emailReco3" type="email" class=" mb-4 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Email">
                </div>
              </div>
              <div v-if="programs === 'PhD by Research in Soil Science'" class="px-4 overflow-hidden shadow sm:rounded-md">
                <dt class="mt-8 mb-4 text-sm leading-2 font-medium text-grey-700">
                  RECOMMENDATION III
                </dt>
                <div>
                  <label for="" class="font-bold block mb-2 text-sm text-gray-900 dark:text-gray-900"> Name, Title, Address and Email of the professor whom you have requested to recommend you:</label>
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900"> Title:</label>
                  <input id="title_recommend3" v-model="tRecommend3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Title">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Name</label>
                  <input id="name_recommend3" v-model="nameRecommendation3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Name">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Address</label>
                  <input id="address_recommend3" v-model="addressRecommendation3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Address">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Email</label>
                  <input id="email_reco3" v-model="emailReco3" type="email" class=" mb-4 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Email">
                </div>
              </div>
              <div v-if="programs === 'PhD by Research in Forestry: Forest Biological Sciences'" class="px-4 overflow-hidden shadow sm:rounded-md">
                <dt class="mt-8 mb-4 text-sm leading-2 font-medium text-grey-700">
                  RECOMMENDATION III
                </dt>
                <div>
                  <label for="" class="font-bold block mb-2 text-sm text-gray-900 dark:text-gray-900"> Name, Title, Address and Email of the professor whom you have requested to recommend you:</label>
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900"> Title:</label>
                  <input id="title_recommend3" v-model="tRecommend3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Title">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Name</label>
                  <input id="name_recommend3" v-model="nameRecommendation3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Name">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Address</label>
                  <input id="address_recommend3" v-model="addressRecommendation3" type="text" class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Address">
                  <label for="" class="font-medium block mb-2 text-sm text-gray-900 dark:text-gray-900">Email</label>
                  <input id="email_reco3" v-model="emailReco3" type="email" class=" mb-4 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Email">
                </div>
              </div>
            </form>
            <div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-10 sm:mt-0">
        <div class="md:grid md:grid-cols-3 md:gap-6">
          <div class="md:col-span-1">
            <div class="px-4 sm:px-0">
              <h3 class="pt-8 text-lg font-medium leading-6 text-gray-900">UPLOAD FILES</h3>
            </div>
          </div>
          <div class="mt-5 md:col-span-2 md:mt-0">
            <form action="/" method="post">
              <div class="px-4 overflow-hidden shadow sm:rounded-md">
                <dt class="mt-8 text-sm leading-2 font-medium text-red-700">
                  *PDF Files Only
                </dt>
                <div v-if="typeApplication === 'International'">
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">International English Language (TOEFL):</label>
                  <input id="files" ref="files" type="file" accept=".pdf" @change="handleFileUpload()"/>
                </div>
                <div>
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">BS Diploma:</label>
                  <input id="files" ref="files" type="file" accept=".pdf" @change="handleFileUpload()" />
                </div>
                <div>
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">BS Transcipt of Record:</label>
                  <input id="files" ref="files" type="file" accept=".pdf" @change="handleFileUpload()"/>
                </div>
                <div v-if="programs === 'Phd of Philosophy in Agricultural Chemistry'">
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">MS Diploma</label>
                  <input id="files" ref="files" type="file" accept=".pdf" @change="handleFileUpload()" />
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">MS Transcipt of Record:</label>
                  <input id="files" ref="files" type="file" accept=".pdf" @change="handleFileUpload()"/>
                </div>
                <div v-else-if="programs === 'Phd of Philosophy in Agricultural Economics'">
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">MS Diploma</label>
                  <input id="files" ref="files" type="file" accept=".pdf" @change="handleFileUpload()"/>
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">MS Transcipt of Record:</label>
                  <input id="files" ref="files" type="file" accept=".pdf" @change="handleFileUpload()"/>
                </div>
                <div v-else-if="programs === 'Phd of Philosophy in Agricultural Education'">
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">MS Diploma</label>
                  <input id="files" ref="files" type="file" accept=".pdf" @change="handleFileUpload()" />
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">MS Transcipt of Record:</label>
                  <input id="files" ref="files" type="file" accept=".pdf" @change="handleFileUpload()"/>
                </div>
                <div v-else-if="programs === 'Phd of Philosophy in Agricultural Engineering'">
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">MS Diploma</label>
                  <input id="files" ref="files" type="file" accept=".pdf" @change="handleFileUpload()"/>
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">MS Transcipt of Record:</label>
                  <input id="files" ref="files" type="file" accept=".pdf" @change="handleFileUpload()"/>
                </div>
                <div v-else-if="programs === 'Phd of Philosophy in Agronomy'">
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">MS Diploma</label>
                  <input id="files" ref="files" type="file" accept=".pdf" @change="handleFileUpload()"/>
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">MS Transcipt of Record:</label>
                  <input id="files" ref="files" type="file" accept=".pdf" @change="handleFileUpload()"/>
                </div>
                <div v-else-if="programs === 'Phd of Philosophy in Animal Science'">
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">MS Diploma</label>
                  <input id="files" ref="files" type="file" accept=".pdf" @change="handleFileUpload()"/>
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">MS Transcipt of Record:</label>
                  <input id="files" ref="files" type="file" accept=".pdf" @change="handleFileUpload()"/>
                </div>
                <div v-else-if="programs === 'Phd of Philosophy in Applied Mathematics'">
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">MS Diploma</label>
                  <input id="files" ref="files" type="file" accept=".pdf" @change="handleFileUpload()"/>
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">MS Transcipt of Record:</label>
                  <input id="files" ref="files" type="file" accept=".pdf" @change="handleFileUpload()"/>
                </div>
                <div v-else-if="programs === 'Phd of Philosophy in Biochemistry'">
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">MS Diploma</label>
                  <input id="files" ref="files" type="file" accept=".pdf" @change="handleFileUpload()"/>
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">MS Transcipt of Record:</label>
                  <input id="files" ref="files" type="file" accept=".pdf" @change="handleFileUpload()"/>
                </div>
                <div v-else-if="programs === 'Phd of Philosophy in Botany'">
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">MS Diploma</label>
                  <input id="files" ref="files" type="file" accept=".pdf" @change="handleFileUpload()"/>
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">MS Transcipt of Record:</label>
                  <input id="files" ref="files" type="file" accept=".pdf" @change="handleFileUpload()"/>
                </div>
                <div v-else-if="programs === 'Phd of Philosophy in Computer Science'">
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">MS Diploma</label>
                  <input id="files" ref="files" type="file" accept=".pdf" @change="handleFileUpload()"/>
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">MS Transcipt of Record:</label>
                  <input id="files" ref="files" type="file" accept=".pdf" @change="handleFileUpload()"/>
                </div>
                <div v-else-if="programs === 'Phd of Philosophy in Community Development'">
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">MS Diploma</label>
                  <input id="files" ref="files" type="file" accept=".pdf" @change="handleFileUpload()"/>
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">MS Transcipt of Record:</label>
                  <input id="files" ref="files" type="file" accept=".pdf" @change="handleFileUpload()"/>
                </div>
                <div v-else-if="programs === 'Phd of Philosophy in Development Communication'">
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">MS Diploma</label>
                  <input id="files" ref="files" type="file" accept=".pdf" @change="handleFileUpload()"/>
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">MS Transcipt of Record:</label>
                  <input id="files" ref="files" type="file" accept=".pdf" @change="handleFileUpload()"/>
                </div>
                <div v-else-if="programs === 'Phd of Philosophy in Entomology'">
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">MS Diploma</label>
                  <input id="files" ref="files" type="file" accept=".pdf" @change="handleFileUpload()"/>
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">MS Transcipt of Record:</label>
                  <input id="files" ref="files" type="file" accept=".pdf" @change="handleFileUpload()"/>
                </div>
                <div v-else-if="programs === 'Phd of Philosophy in Development Studies'">
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">MS Diploma</label>
                  <input id="files" ref="files" type="file" accept=".pdf" @change="handleFileUpload()"/>
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">MS Transcipt of Record:</label>
                  <input id="files" ref="files" type="file" accept=".pdf" @change="handleFileUpload()"/>
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">Research Proposal</label>
                  <input id="files" ref="files" type="file" accept=".pdf" @change="handleFileUpload()"/>
                </div>
                <div v-else-if="programs === 'Phd of Philosophy in Environmental Science'">
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">Concept Note</label>
                  <input id="files" ref="files" type="file" accept=".pdf" @change="handleFileUpload()"/>
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">MS Diploma</label>
                  <input id="files" ref="files" type="file" accept=".pdf" @change="handleFileUpload()"/>
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">MS Transcipt of Record:</label>
                  <input id="files" ref="files" type="file" accept=".pdf" @change="handleFileUpload()"/>
                </div>
                <div v-else-if="programs === 'Phd of Philosophy in Extension Education'">
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">MS Diploma</label>
                  <input id="files" ref="files" type="file" accept=".pdf" @change="handleFileUpload()"/>
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">MS Transcipt of Record:</label>
                  <input id="files" ref="files" type="file" accept=".pdf" @change="handleFileUpload()"/>
                </div>
                <div v-else-if="programs === 'Phd of Philosophy in Food Science'">
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">MS Diploma</label>
                  <input id="files" ref="files" type="file" accept=".pdf" @change="handleFileUpload()"/>
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">MS Transcipt of Record:</label>
                  <input id="files" ref="files" type="file" accept=".pdf" @change="handleFileUpload()"/>
                </div>
                <div v-else-if="programs === 'Phd of Philosophy in Forestry: Forest Biological Sciences'">
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">MS Diploma</label>
                  <input id="files" ref="files" type="file" accept=".pdf" @change="handleFileUpload()"/>
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">MS Transcipt of Record:</label>
                  <input id="files" ref="files" type="file" accept=".pdf" @change="handleFileUpload()"/>
                </div>
                <div v-else-if="programs === 'Phd of Philosophy in Forestry: Forest Resources Management'">
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">MS Diploma</label>
                  <input id="files" ref="files" type="file" accept=".pdf" @change="handleFileUpload()"/>
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">MS Transcipt of Record:</label>
                  <input id="files" ref="files" type="file" accept=".pdf" @change="handleFileUpload()"/>
                </div>
                <div v-else-if="programs === 'Phd of Philosophy in Forestry: Silviculture and Forest Influences'">
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">MS Diploma</label>
                  <input id="files" ref="files" type="file" accept=".pdf" @change="handleFileUpload()"/>
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">MS Transcipt of Record:</label>
                  <input id="files" ref="files" type="file" accept=".pdf" @change="handleFileUpload()"/>
                </div>
                <div v-else-if="programs === 'Phd of Philosophy in Forestry: Wood Science and Technology'">
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">MS Diploma</label>
                  <input id="files" ref="files" type="file" accept=".pdf" @change="handleFileUpload()"/>
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">MS Transcipt of Record:</label>
                  <input id="files" ref="files" type="file" accept=".pdf" @change="handleFileUpload()"/>
                </div>
                <div v-else-if="programs === 'Phd of Philosophy in Genetics'">
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">MS Diploma</label>
                  <input id="files" ref="files" type="file" accept=".pdf" @change="handleFileUpload()"/>
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">MS Transcipt of Record:</label>
                  <input id="files" ref="files" type="file" accept=".pdf" @change="handleFileUpload()"/>
                </div>
                <div v-if="programs === 'Phd of Philosophy in Horticulture'">
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">MS Diploma</label>
                  <input id="files" ref="files" type="file" accept=".pdf" @change="handleFileUpload()"/>
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">MS Transcipt of Record:</label>
                  <input id="files" ref="files" type="file" accept=".pdf" @change="handleFileUpload()"/>
                </div>
                <div v-else-if="programs === 'Phd of Philosophy in Human Nutrition'">
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">MS Diploma</label>
                  <input id="files" ref="files" type="file" accept=".pdf" @change="handleFileUpload()"/>
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">MS Transcipt of Record:</label>
                  <input id="files" ref="files" type="file" accept=".pdf" @change="handleFileUpload()"/>
                </div>
                <div v-else-if="programs === 'Phd of Philosophy in Microbiology'">
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">MS Diploma</label>
                  <input id="files" ref="files" type="file" accept=".pdf" @change="handleFileUpload()"/>
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">MS Transcipt of Record:</label>
                  <input id="files" ref="files" type="file" accept=".pdf" @change="handleFileUpload()"/>
                </div>
                <div v-else-if="programs === 'Phd of Philosophy in Molecular Biology and Biotechnology'">
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">MS Diploma</label>
                  <input id="files" ref="files" type="file" accept=".pdf" @change="handleFileUpload()"/>
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">MS Transcipt of Record:</label>
                  <input id="files" ref="files" type="file" accept=".pdf" @change="handleFileUpload()"/>
                </div>
                <div v-else-if="programs === 'Phd of Philosophy in Plant Breeding'">
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">MS Diploma</label>
                  <input id="files" ref="files" type="file" accept=".pdf" @change="handleFileUpload()"/>
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">MS Transcipt of Record:</label>
                  <input id="files" ref="files" type="file" accept=".pdf" @change="handleFileUpload()"/>
                </div>
                <div v-else-if="programs === 'Phd of Philosophy in Plant Pathology'">
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">MS Diploma</label>
                  <input id="files" ref="files" type="file" accept=".pdf" @change="handleFileUpload()"/>
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">MS Transcipt of Record:</label>
                  <input id="files" ref="files" type="file" accept=".pdf" @change="handleFileUpload()"/>
                </div>
                <div v-else-if="programs === 'Phd of Philosophy in Soil Science'">
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">MS Diploma</label>
                  <input id="files" ref="files" type="file" accept=".pdf" @change="handleFileUpload()"/>
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">MS Transcipt of Record:</label>
                  <input id="files" ref="files" type="file" accept=".pdf" @change="handleFileUpload()"/>
                </div>
                <div v-else-if="programs === 'Phd of Philosophy in Statistics'">
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">MS Diploma</label>
                  <input id="files" ref="files" type="file" accept=".pdf" @change="handleFileUpload()"/>
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">MS Transcipt of Record:</label>
                  <input id="files" ref="files" type="file" accept=".pdf" @change="handleFileUpload()"/>
                </div>
                <div v-else-if="programs === 'Straight PhD in Agricultural Economics'">
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">MS Diploma</label>
                  <input id="files" ref="files" type="file" accept=".pdf" @change="handleFileUpload()"/>
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">MS Transcipt of Record:</label>
                  <input id="files" ref="files" type="file" accept=".pdf" @change="handleFileUpload()"/>
                </div>
                <div v-else-if="programs === 'Straight PhD in Development Communication'">
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">MS Diploma</label>
                  <input id="files" ref="files" type="file" accept=".pdf" @change="handleFileUpload()"/>
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">MS Transcipt of Record:</label>
                  <input id="files" ref="files" type="file" accept=".pdf" @change="handleFileUpload()"/>
                </div>
                <div v-else-if="programs === 'Straight PhD in Environmental Science'">
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">Concept Note</label>
                  <input id="files" ref="files" type="file" accept=".pdf" @change="handleFileUpload()"/>
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">MS Diploma</label>
                  <input id="files" ref="files" type="file" accept=".pdf" @change="handleFileUpload()"/>
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">MS Transcipt of Record:</label>
                  <input id="files" ref="files" type="file" accept=".pdf" @change="handleFileUpload()"/>
                </div>
                <div v-else-if="programs === 'Straight PhD in Soil Science'">
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">MS Diploma</label>
                  <input id="files" ref="files" type="file" accept=".pdf" @change="handleFileUpload()"/>
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">MS Transcipt of Record:</label>
                  <input id="files" ref="files" type="file" accept=".pdf" @change="handleFileUpload()"/>
                </div>
                <div v-else-if="programs === 'PhD by Research in Agribusiness Management and Entrepreneurship'">
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">MS Diploma</label>
                  <input id="files" ref="files" type="file" accept=".pdf" @change="handleFileUpload()"/>
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">MS Transcipt of Record:</label>
                  <input id="files" ref="files" type="file" accept=".pdf" @change="handleFileUpload()"/>
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">Certification from the immediate head of the agency that the applicant has at least five (5) years of satisfactory research experience:</label>
                  <input id="files" ref="files" type="file" accept=".pdf" @change="handleFileUpload()"/>
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">Reprints or copies of the applicant's research outputs:</label>
                  <input id="files" ref="files" type="file" accept=".pdf" @change="handleFileUpload()"/>
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">A research proposal which shall include the title, rationale, objectives, methodology, and references:</label>
                  <input id="files" ref="files" type="file" accept=".pdf" @change="handleFileUpload()"/>
                </div>
                <div v-else-if="programs === 'PhD by Research in Agricultural and Applied Economics'">
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">MS Diploma</label>
                  <input id="files" ref="files" type="file" accept=".pdf" @change="handleFileUpload()"/>
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">MS Transcipt of Record:</label>
                  <input id="files" ref="files" type="file" accept=".pdf" @change="handleFileUpload()"/>
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">Certification from the immediate head of the agency that the applicant has at least five (5) years of satisfactory research experience:</label>
                  <input id="files" ref="files" type="file" accept=".pdf" @change="handleFileUpload()"/>
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">Reprints or copies of the applicant's research outputs:</label>
                  <input id="files" ref="files" type="file" accept=".pdf" @change="handleFileUpload()"/>
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">A research proposal which shall include the title, rationale, objectives, methodology, and references:</label>
                  <input id="files" ref="files" type="file" accept=".pdf" @change="handleFileUpload()"/>
                </div>
                <div v-else-if="programs === 'PhD by Research in Agronomy'">
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">MS Diploma</label>
                  <input id="files" ref="files" type="file" accept=".pdf" @change="handleFileUpload()"/>
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">MS Transcipt of Record:</label>
                  <input id="files" ref="files" type="file" accept=".pdf" />
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">Certification from the immediate head of the agency that the applicant has at least five (5) years of satisfactory research experience:</label>
                  <input id="files" ref="files" type="file" accept=".pdf" @change="handleFileUpload()"/>
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">Reprints or copies of the applicant's research outputs:</label>
                  <input id="files" ref="files" type="file" accept=".pdf" @change="handleFileUpload()"/>
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">A research proposal which shall include the title, rationale, objectives, methodology, and references:</label>
                  <input id="files" ref="files" type="file" accept=".pdf" @change="handleFileUpload()"/>
                </div>
                <div v-else-if="programs === 'PhD by Research in Animal Science'">
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">MS Diploma</label>
                  <input id="files" ref="files" type="file" accept=".pdf" @change="handleFileUpload()"/>
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">MS Transcipt of Record:</label>
                  <input id="files" ref="files" type="file" accept=".pdf" @change="handleFileUpload()"/>
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">Certification from the immediate head of the agency that the applicant has at least five (5) years of satisfactory research experience:</label>
                  <input id="files" ref="files" type="file" accept=".pdf" @change="handleFileUpload()"/>
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">Reprints or copies of the applicant's research outputs:</label>
                  <input id="files" ref="files" type="file" accept=".pdf" @change="handleFileUpload()"/>
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">A research proposal which shall include the title, rationale, objectives, methodology, and references:</label>
                  <input id="files" ref="files" type="file" accept=".pdf" @change="handleFileUpload()"/>
                </div>
                <div v-else-if="programs === 'PhD by Research in Botany'">
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">MS Diploma</label>
                  <input id="files" ref="files" type="file" accept=".pdf" @change="handleFileUpload()"/>
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">MS Transcipt of Record:</label>
                  <input id="files" ref="files" type="file" accept=".pdf" @change="handleFileUpload()"/>
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">Certification from the immediate head of the agency that the applicant has at least five (5) years of satisfactory research experience:</label>
                  <input id="files" ref="files" type="file" accept=".pdf"  @change="handleFileUpload()"/>
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">Reprints or copies of the applicant's research outputs:</label>
                  <input id="files" ref="files" type="file" accept=".pdf"  @change="handleFileUpload()"/>
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">A research proposal which shall include the title, rationale, objectives, methodology, and references:</label>
                  <input id="files" ref="files" type="file" accept=".pdf"  @change="handleFileUpload()"/>
                </div>
                <div v-else-if="programs === 'PhD by Research in Computer Science'">
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">MS Diploma</label>
                  <input id="files" ref="files" type="file" accept=".pdf"  @change="handleFileUpload()"/>
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">MS Transcipt of Record:</label>
                  <input id="files" ref="files" type="file" accept=".pdf"  @change="handleFileUpload()"/>
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">Certification from the immediate head of the agency that the applicant has at least five (5) years of satisfactory research experience:</label>
                  <input id="files" ref="files" type="file" accept=".pdf"  @change="handleFileUpload()"/>
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">Reprints or copies of the applicant's research outputs:</label>
                  <input id="files" ref="files" type="file" accept=".pdf"  @change="handleFileUpload()"/>
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">A research proposal which shall include the title, rationale, objectives, methodology, and references:</label>
                  <input id="files" ref="files" type="file" accept=".pdf"  @change="handleFileUpload()"/>
                </div>
                <div v-else-if="programs === 'PhD by Research in Development Communication'">
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">MS Diploma</label>
                  <input id="files" ref="files" type="file" accept=".pdf"  @change="handleFileUpload()"/>
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">MS Transcipt of Record:</label>
                  <input id="files" ref="files" type="file" accept=".pdf"  @change="handleFileUpload()"/>
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">Certification from the immediate head of the agency that the applicant has at least five (5) years of satisfactory research experience:</label>
                  <input id="files" ref="files" type="file" accept=".pdf"  @change="handleFileUpload()"/>
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">Reprints or copies of the applicant's research outputs:</label>
                  <input id="files" ref="files" type="file" accept=".pdf"  @change="handleFileUpload()"/>
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">A research proposal which shall include the title, rationale, objectives, methodology, and references:</label>
                  <input id="files" ref="files" type="file" accept=".pdf"  @change="handleFileUpload()"/>
                </div>
                <div v-else-if="programs === 'PhD by Research in Economics'">
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">MS Diploma</label>
                  <input id="files" ref="files" type="file" accept=".pdf"  @change="handleFileUpload()"/>
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">MS Transcipt of Record:</label>
                  <input id="files" ref="files" type="file" accept=".pdf"  @change="handleFileUpload()"/>
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">Certification from the immediate head of the agency that the applicant has at least five (5) years of satisfactory research experience:</label>
                  <input id="files" ref="files" type="file" accept=".pdf"  @change="handleFileUpload()"/>
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">Reprints or copies of the applicant's research outputs:</label>
                  <input id="files" ref="files" type="file" accept=".pdf"  @change="handleFileUpload()"/>
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">A research proposal which shall include the title, rationale, objectives, methodology, and references:</label>
                  <input id="files" ref="files" type="file" accept=".pdf" @change="handleFileUpload()"/>
                </div>
                <div v-else-if="programs === 'PhD by Research in Entomology'">
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">MS Diploma</label>
                  <input id="files" ref="files" type="file" accept=".pdf"  @change="handleFileUpload()"/>
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">MS Transcipt of Record:</label>
                  <input id="files" ref="files" type="file" accept=".pdf"  @change="handleFileUpload()"/>
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">Certification from the immediate head of the agency that the applicant has at least five (5) years of satisfactory research experience:</label>
                  <input id="files" ref="files" type="file" accept=".pdf"  @change="handleFileUpload()"/>
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">Reprints or copies of the applicant's research outputs:</label>
                  <input id="files" ref="files" type="file" accept=".pdf"  @change="handleFileUpload()"/>
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">A research proposal which shall include the title, rationale, objectives, methodology, and references:</label>
                  <input id="files" ref="files" type="file" accept=".pdf"  @change="handleFileUpload()"/>
                </div>
                <div v-else-if="programs === 'PhD by Research in Environmental Science'">
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">MS Diploma</label>
                  <input id="files" ref="files" type="file" accept=".pdf"  @change="handleFileUpload()"/>
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">MS Transcipt of Record:</label>
                  <input id="files" ref="files" type="file" accept=".pdf"  @change="handleFileUpload()"/>
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">Certification from the immediate head of the agency that the applicant has at least five (5) years of satisfactory research experience:</label>
                  <input id="files" ref="files" type="file" accept=".pdf"  @change="handleFileUpload()"/>
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">Reprints or copies of the applicant's research outputs:</label>
                  <input id="files" ref="files" type="file" accept=".pdf"  @change="handleFileUpload()"/>
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">A research proposal which shall include the title, rationale, objectives, methodology, and references:</label>
                  <input id="files" ref="files" type="file" accept=".pdf"  @change="handleFileUpload()"/>
                </div>
                <div v-else-if="programs === 'PhD by Research in Horticulture'">
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">MS Diploma</label>
                  <input id="files" ref="files" type="file" accept=".pdf"  @change="handleFileUpload()"/>
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">MS Transcipt of Record:</label>
                  <input id="files" ref="files" type="file" accept=".pdf"  @change="handleFileUpload()"/>
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">Certification from the immediate head of the agency that the applicant has at least five (5) years of satisfactory research experience:</label>
                  <input id="files" ref="files" type="file" accept=".pdf"  @change="handleFileUpload()"/>
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">Reprints or copies of the applicant's research outputs:</label>
                  <input id="files" ref="files" type="file" accept=".pdf"  @change="handleFileUpload()"/>
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">A research proposal which shall include the title, rationale, objectives, methodology, and references:</label>
                  <input id="files" ref="files" type="file" accept=".pdf"  @change="handleFileUpload()" />
                </div>
                <div v-else-if="programs === 'PhD by Research in Plant Breeding'">
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">MS Diploma</label>
                  <input id="files" ref="files" type="file" accept=".pdf"  @change="handleFileUpload()" />
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">MS Transcipt of Record:</label>
                  <input id="files" ref="files" type="file" accept=".pdf"  @change="handleFileUpload()"/>
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">Certification from the immediate head of the agency that the applicant has at least five (5) years of satisfactory research experience:</label>
                  <input id="files" ref="files" type="file" accept=".pdf"  @change="handleFileUpload()"/>
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">Reprints or copies of the applicant's research outputs:</label>
                  <input id="files" ref="files" type="file" accept=".pdf"  @change="handleFileUpload()"/>
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">A research proposal which shall include the title, rationale, objectives, methodology, and references:</label>
                  <input id="files" ref="files" type="file" accept=".pdf"  @change="handleFileUpload()"/>
                </div>
                <div v-else-if="programs === 'PhD by Research in Plant Pathology'">
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">MS Diploma</label>
                  <input id="files" ref="files" type="file" accept=".pdf"  @change="handleFileUpload()" />
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">MS Transcipt of Record:</label>
                  <input id="files" ref="files" type="file" accept=".pdf"  @change="handleFileUpload()"/>
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">Certification from the immediate head of the agency that the applicant has at least five (5) years of satisfactory research experience:</label>
                  <input id="files" ref="files" type="file" accept=".pdf"  @change="handleFileUpload()"/>
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">Reprints or copies of the applicant's research outputs:</label>
                  <input id="files" ref="files" type="file" accept=".pdf"  @change="handleFileUpload()" />
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">A research proposal which shall include the title, rationale, objectives, methodology, and references:</label>
                  <input id="files" ref="files" type="file" accept=".pdf"  @change="handleFileUpload()"/>
                </div>
                <div v-else-if="programs === 'PhD by Research in Soil Science'">
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">MS Diploma</label>
                  <input id="files" ref="files" type="file" accept=".pdf"  @change="handleFileUpload()"/>
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">MS Transcipt of Record:</label>
                  <input id="files" ref="files" type="file" accept=".pdf"  @change="handleFileUpload()"/>
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">Certification from the immediate head of the agency that the applicant has at least five (5) years of satisfactory research experience:</label>
                  <input id="files" ref="files" type="file" accept=".pdf"  @change="handleFileUpload()" />
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">Reprints or copies of the applicant's research outputs:</label>
                  <input id="files" ref="files" type="file" accept=".pdf" @change="handleFileUpload()"/>
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">A research proposal which shall include the title, rationale, objectives, methodology, and references:</label>
                  <input id="files" ref="files" type="file" accept=".pdf"  @change="handleFileUpload()" />
                </div>
                <div v-else-if="programs === 'PhD by Research in Forestry: Forest Biological Sciences'">
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">MS Diploma</label>
                  <input id="files" ref="files" type="file" accept=".pdf"  @change="handleFileUpload()"/>
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">MS Transcipt of Record:</label>
                  <input id="files" ref="files" type="file" accept=".pdf"  @change="handleFileUpload()"/>
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">Certification from the immediate head of the agency that the applicant has at least five (5) years of satisfactory research experience:</label>
                  <input id="files" ref="files" type="file" accept=".pdf"  @change="handleFileUpload()"/>
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">Reprints or copies of the applicant's research outputs:</label>
                  <input id="files" ref="files" type="file" accept=".pdf"  @change="handleFileUpload()"/>
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">A research proposal which shall include the title, rationale, objectives, methodology, and references:</label>
                  <input id="files" ref="files" type="file" accept=".pdf"  @change="handleFileUpload()"/>
                </div>
                <div v-if="programs === 'Phd of Philosophy in Human Nutrition'">
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">Abstract of Research Interest</label>
                  <input id="files" ref="files" type="file" accept=".pdf" @change="handleFileUpload()"/>
                </div>
                <div v-if="programs === 'Master of Professional Studies in Food Engineering'">
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">Letter of Application</label>
                  <input id="files" ref="files" type="file" accept=".pdf" @change="handleFileUpload()"/>
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">Essay</label>
                  <input id="files" ref="files" type="file" accept=".pdf" @change="handleFileUpload()"/>
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">Curriculum Vitae</label>
                  <input id="files" ref="files" type="file" accept=".pdf" @change="handleFileUpload()"/>
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">Endorsement Letter From current supervisor if the applicant is employed</label>
                  <input id="files" ref="files" type="file" accept=".pdf" @change="handleFileUpload()"/>
                </div>
                <div v-if="programs == 'Master in Applied Nutrition'">
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900"> Abstract of Research Interest</label>
                  <input id="files" ref="files" type="file" accept=".pdf" @change="handleFileUpload()"/>
                </div>
                <div v-if="programs == 'Master of Science in Environmental Science'">
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900">Concept Note</label>
                  <input id="files" ref="files" type="file" accept=".pdf" @change="handleFileUpload()"/>
                </div>
                <div v-if="programs == 'Master of Science in Applied Nutrition'">
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900"> Abstract of Research Interest</label>
                  <input id="files" ref="files" type="file" accept=".pdf" @change="handleFileUpload()"/>
                </div>
                <div v-if="programs == 'Master in Development Management and Governance'">
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900"> Essay 1 Personal Statement</label>
                  <input id="files" ref="files" type="file" accept=".pdf" @change="handleFileUpload()"/>
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900"> Essay 2 Research Interest</label>
                  <input id="files" ref="files" type="file" accept=".pdf" @change="handleFileUpload()"/>
                </div>
                <div v-if="programs == 'Master of Science in Development Management and Governance'">
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900"> Essay 1 Personal Statement</label>
                  <input id="files" ref="files" type="file" accept=".pdf"  @change="handleFileUpload()"/>
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900"> Essay 2 Research Interest</label>
                  <input id="files" ref="files" type="file" accept=".pdf"  @change="handleFileUpload()"/>
                </div>
                <div>
                  <label for="file" class="pt-8 mb-2 font-bold block text-sm text-gray-900 dark:text-gray-900"> Payment:</label>
                  <input id="files" ref="files" class="mb-8" type="file" accept=".pdf" @change="handleFileUpload()"/>
                </div>
               
                <div>
                  <SavedModal v-show="showModal" @close-modal="showModal = false" />
                </div>
              </div>
            </form>
             <div class="mt-4 flex items-center justify-center">
                  <button
                    type="button" class=" inline-block px-10 py-5 bg-green-600 text-white font-medium text-xs leading-tight uppercase 
                          hover:bg-green-700 focus:bg-green-700 focus:outline-none focus:ring-0 active:bg-green-800 transition duration-150 ease-in-out 
                          ">Save</button>
                  <button
                      type="button" class=" inline-block px-10 py-5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase 
                            hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out 
                             " @click="submitAdd">Submit</button> 

                             <SubmitModal v-show="showModal" />
                </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
 <script>


export default { 
  name:"FormPage",
data() {
      return{
       showModal: false,
      programs: '',
      firstName:'',
      middleName:'',
      lastName:'',
      sex:'',
      phoneNumber:'',
      telNumber:'',
      faxNumber:'',
      email:'',
      placeBirth:'',
      dateBirth:'',
      citizenship:'',
      civilStatus:'',
      employer:'',
      empAddress:'',
      permanentAddress:'',
      presentOccupation:'',
      scholarship:'',
      scholarshipYes:'',
      goingStudy:'',
      reAdmission:'',
      areaSpecialization:'',
      listProfessor:'',
      semester:'',
      semesterDate:'',
      tRecommend:'',
      nameRecommendation:'',
      addressRecommendation:'',
      futurePlans:'',
      instituitions:'',
      majorAcadbackgroud:'',
      degreeAcadbackgroud:'',
      dateAcadbackground:'',
      appliedBefore:'',
      beforeYes:'',
      dateAppliedbefore:'',
      nameLocemp:'',
      positionRecentemployer:'',
      dateRecentemployer:'',
      dateRecentemployer2:'',
      listHonor:'',
      publication:'',
      unpublishResearch:'',
      major:'',
      typeApplication:'',
      emailReco:'',
      tRecommend2:'',
      nameRecommendation2:'',
      addressRecommendation2:'',
      emailReco2:'',
      tRecommend3:'',
      nameRecommendation3:'',
      addressRecommendation3:'',
      emailReco3:'',
      showReco3:false,
      files: '',
  
      }
},
head() {
    return{
        title: "Application Form",
        meta:[
            {
                hid: "description",
                name: "description",
                content: "UPLB Gradtuate School"
            }
        ]
    }
    },
    // computed: {
    // isDisabled () {
    //   if (this.firstName.length > 0 && this.middleName.length > 0 && this.lastName.length > 0 && this.sex.length > 0 && this.phoneNumber.length > 0 && this.telNumber.length > 0 && this.faxNumber.length > 0 && this.email.length > 0
    //   && this.placeBirth.length > 0 && this.dateBirth.length > 0 && this.citizenship.length > 0 && this.civilStatus.length > 0 && this.employer.length > 0 && this.empAddress.length > 0 && this.permanentAddress.length > 0 && this.presentOccupation.length > 0
    //    ) {  
    //     return false;
        
    //   } else {
    //     return true;    
    //   }
    // }
    // },
  methods:{
submitAdd()
{
  const formData = new FormData();
       
        for( let i = 0; i < this.files.length; i++ ){
          const file = this.files[i];
          formData.append('files[' + i + ']', file);
        }
const applicants = {
     firstName:this.firstName,
      middleName:this.middleName,
      lastName:this.lastName,
      sex:this.sex,
      phoneNumber:this.phoneNumber,
      telNumber:this.telNumber,
      faxNumber:this.faxNumber,
      email:this.email,
      placeBirth:this.placeBirth,
      dateBirth:this.dateBirth,
      citizenship:this.citizenship,
      civilStatus:this.civilStatus,
      employer:this.employer,
      empAddress:this.empAddress,
      permanentAddress:this.permanentAddress,
      presentOccupation:this.presentOccupation,
      scholarship:this.scholarship,
      scholarshipYes:this.scholarshipYes,
      goingStudy:this.goingStudy,
      reAdmission:this.reAdmission,
      areaSpecialization:this.areaSpecialization,
      listProfessor:this.listProfessor,
      semester:this.semester,
      semesterDate:this.semesterDate,
      tRecommend:this.tRecommend,
      nameRecommendation:this.nameRecommendation,
      addressRecommendation:this.addressRecommendation,
      futurePlans:this.futurePlans,
      instituitions:this.instituitions,
      majorAcadbackgroud:this.majorAcadbackgroud,
      degreeAcadbackgroud:this.degreeAcadbackgroud,
      dateAcadbackground:this.dateAcadbackground,
      appliedBefore:this.appliedBefore,
      beforeYes:this.beforeYes,
      dateAppliedbefore:this.dateAppliedbefore,
      nameLocemp:this.nameLocemp,
      positionRecentemployer:this.positionRecentemployer,
      dateRecentemployer:this.dateRecentemployer,
      dateRecentemployer2:this.dateRecentemployer2,
      listHonor:this.listHonor,
      publication:this.publication,
      unpublishResearch:this.unpublishResearch,
      typeApplication:this.typeApplication,
      emailReco:this.emailReco,
      tRecommend2:this.tRecommend2,
      nameRecommendation2:this.nameRecommendation2,
      addressRecommendation2:this.addressRecommendation2,
      emailReco2:this.emailReco2,
      tRecommend3:this.tRecommend3,
      nameRecommendation3:this.nameRecommendation3,
      addressRecommendation3:this.addressRecommendation3,
      emailReco3:this.emailReco3,
      programs:this.programs,
       
    }

    this.showModal = true 

    fetch('http://localhost:3000/applicants', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json', 
          'Accept': 'application/json'   },
        body: JSON.stringify(applicants)
    })
},
handleFileUpload(){
        const uploadedFiles = this.$refs.files.files;
        
        for( let i = 0; i < uploadedFiles.length; i++ ){
          this.files.push( uploadedFiles[i] );
        }
      },
}
}
</script>


      
              
            
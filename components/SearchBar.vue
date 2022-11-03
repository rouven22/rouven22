<template>
 <div class="search-holder">
         <div>
            <div class=" pr-16 xl:w-96">
            <div class="input-group relative flex flex-wrap items-stretch w-full">
              <input
                id="search" v-model="search" type="text" class=" form-control relative flex-auto min-w-0 block 
                w-50 px-3 py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid
              border-gray-500 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 
              focus:outline-none" placeholder="Search"  @keypress.enter="search(search)"/>
              
              
            </div>
          </div>
        </div>
   
 </div>

</template>
   
 <script >

 export default {
   name: 'SearchBar',
   
   data() {
   return{
    search: ''
 };
 },
 computed:{
    filteredApplicants(){
       if (this.search.trim().length > 0){
        return this.applicants.filter((applicant) =>
        (("'applicant.programs, applicant.firstName, applicant.lastName'"))
        .toLowerCase()
        .includes(this.search.trim().toLowerCase())
        );
    } 
    return this.applicants;
    }
 },


 }
 </script>
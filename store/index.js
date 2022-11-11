
import axios from 'axios'

export const state = () => ({
   
  applicants: []
})

export const getters = {
 
};
export const actions = {
 fetchApplicants({commit}) {
  const baseUrl = "http://localhost:3000/applicants";
  axios 
  .get(baseUrl)
  .then(res => {
    commit("setApplicantData",res.data)
  })
  .catch(e => {
    console.log(e);
  })
 },
  }
  export const mutations = {
    setApplicantData(state, applicantData){
      state.applicants = applicantData.map(applicant =>{
        return{
          id: applicant.id,
          lastName: applicant.lastName,
          firstName: applicant.firstName,
          semester: applicant.semester,
          programs: applicant.programs,
          status: applicant.Status
        }
      })
    }
    
  }


  


 
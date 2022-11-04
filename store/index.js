

import axios from 'axios';

export const state = () => ({
   
  applicants: []
})


export const actions = {
   
   getApplicants({commit}){
    axios
    .get('http://localhost:3000/applicants')
    .then(data => {
      console.log(data.data)
      const applicants = data.data
      commit('SET_APPLICANTS',applicants)
    })
    .catch(error => {
      console.log(error)
    })
},
}
  export const mutations = {
    SET_APPLICANTS(state, applicants){
    state.applicants = applicants
   }
    
  }


 
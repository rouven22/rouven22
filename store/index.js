

export const state = () => ({
   
  applicants: [],
  
})
export const getters = {
    getApplicants: (state) => {
      return state.applicants
    }
}

  export const mutations = {
    SET_APPLICANTS(state, payload) {
        state.applicants = payload
    },
    SET_LOADING(state, payload) {
        state.applicants = payload
    },
    
  }

  export const actions = {
 
    async loadApplicants() {
        const data = await fetch(`http://localhost:3000/applicants`);
      this.applicants = await data.json();  
    }

}        


 
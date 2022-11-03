<template>
    <div> 
        <DeanNavbar />
        
        <div>
           <DeanTable/>
            </div>
            <div>
                <TransactionHistory />
                </div>
    </div>
</template>
       
 <script>
import DeanNavbar from "../../components/DeanNavbar.vue"

import TransactionHistory from "../../components/TransactionHistory.vue"
    export default {
    name: "DeanDashboard",
    components: {
        DeanNavbar,
        TransactionHistory,
    },
    data(){
        return{
            search: "",
            applicants: [],

        }
    },

   
}
 </script>
                 


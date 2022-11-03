<template> 
    <div> 
        <NavBar />
            <div>
            <AdminTable />       
            </div>
            <div>
            <TransactionHistory />
            </div>
            </div>
</template>
        
 <script>      
import NavBar from "../../components/NavBar.vue"
import AdminTable from "../../components/AdminTable.vue"     
import TransactionHistory from "../../components/TransactionHistory.vue"          
 export default {
    name: "AdminDashboard",
    components: {
        NavBar,
        AdminTable,
        TransactionHistory,
    },
   

}
 </script>
 
 


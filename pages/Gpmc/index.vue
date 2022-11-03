<template>
    <div> 
        <GpmcNarbar />
        <div>
            <GpmcTable />
            </div>
            <div>
                <TransactionHistory />
                </div>
    </div>
</template>
       
 <script>
import GpmcNarbar from "../../components/GpmcNarbar.vue"
import GpmcTable from "../../components/GpmcTable.vue"
import TransactionHistory from "../../components/TransactionHistory.vue"
    export default {
    name: "GpmcDashboard",
    components: {
        GpmcNarbar,
        GpmcTable,
        TransactionHistory,
    },
   
}
 </script>
                 


<template>
    <div class="my-6">
      <div class="flex justify-between mb-6">
        <div class="text-lg font-medium ">Transaction History</div>
      </div>
      <div class="bg-red-800 ">
        <table class="table-auto w-full text-white">
          <thead>
            <tr>
              <th class="py-3 px-6">TRX ID</th>
              <th class="py-3 px-6">TRX Date</th>
              <th class="py-3 px-6">TRX Status</th>
              <th class="py-3 px-6">TRX Resolution Date</th>
              <th class="py-3 px-6">Last Committed by</th>
              <th class="py-3 px-6">TRX Action</th>
              
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-500 text-white dark:hover:bg-grey-600">
                <td class="py-4 px-6"> </td>     
                <td class="py-4 px-6"> </td> 
                <td class="py-4 px-6"></td>
                <td class="py-4 px-6"></td> 
                <td class="py-4 px-6"></td>
                <td class="py-4 px-6"></td> 
                  
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  export default {};
  </script>
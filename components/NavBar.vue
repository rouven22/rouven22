<template>
    <div>
      <nav
        class="flex fixed w-full items-center justify-between px-6 h-14 bg-white text-gray-700 border-b border-grey-100 z-10">
        <!-- START HEADER -->
        <div class="flex items-center">
          <button class="mr-2" aria-label="Open Menu" @click="drawer">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              class="w-8 h-8">
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
         
          <div class="m-auto md:mx-4">
            <img src="https://amis.uplb.edu.ph/logos/uplb-logo.png" class="mr-3 h-6 sm:h-9">
          </div>
          <h1 class="font-semibold text-xl hidden md:flex items-center">
            University of the Philippines Graduate School
          </h1>
        </div>
        <!-- END HEADER -->
        <transition
          enter-class="opacity-0"
          enter-active-class="ease-out transition-medium"
          enter-to-class="opacity-100"
          leave-class="opacity-100"
          leave-active-class="ease-out transition-medium"
          leave-to-class="opacity-0">
          <div
            v-show="isOpen"
            class="z-10 fixed inset-0 transition-opacity"
            @keydown.esc="isOpen = false">
            <div
              class="absolute inset-0 bg-black opacity-0"
              tabindex="0"
              @click="isOpen = false"></div>
          </div>
        </transition>
        <aside
          class="transform top-16 left-0 w-64 bg-white fixed h-full shadow-md overflow-auto ease-in-out transition-all duration-300 z-10"
          :class="isOpen ? 'translate-x-0' : '-translate-x-full'">
          <!-- DASHBOARD -->
          <span
            class="flex w-full items-center p-4 border-b"
            @click="isOpen = false">
            <div class="flex text-black">
              <div class="m-auto px-3">
                <img
                  src="/logos/no-picture.png"
                  class="h-12 w-auto"
                  alt="User Picture" />
              </div>
    
              </div>
          </span>
          <span
            class="flex items-center p-4 hover:bg-gray-300 hover:text-red-700"
            @click="isOpen = false"
            ><span class="mr-2">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                class="w-16 h-6">
                <path
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
              </svg>
            </span>
           
            <NuxtLink  to='/admin'>Dashboard</NuxtLink>
          </span>
            <!-- END DASHBOARD -->
         <!-- LOGOUT -->
         <span
                class="flex items-center p-4 px-8 py-2 pt-4"
                @click="isOpen = false">
                <button
                  class="flex justify-center items-center text-white bg-red-900 hover:bg-red-600 w-full rounded-lg py-2"
                 >
                  Logout
                </button>
              </span>
            </aside>
            
          </nav>
        </div>
        
        
    </template>
    
    
    <script>
    
      export default {
       
        data() {
            return {
                isOpen: false,
            };
        },
        mounted() {
            document.addEventListener("keydown", (e) => {
                if (e.keyCode === 27 && this.isOpen)
                    this.isOpen = false;
            });
        },
        methods: {
            drawer() {
                this.isOpen = !this.isOpen;
            },
    
            async logout() {
                await this.$auth.logout();
                await this.$router.push("/auth/login");
            },
        },
    }
      </script>
    
      
    
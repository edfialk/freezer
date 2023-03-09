<template>
  <div>
    <div class="grid grid-cols-2 gap-1">
      <StoreBlock name="Costco" id="1" />
      <StoreBlock name="Fred Meyer" id="2" />
      <StoreBlock name="Trader Joe's" id="3" />
      <StoreBlock name="Whole Foods" id="4" />
    </div>
    <form>
      <div class="relative my-2">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            class="w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          class="block w-full outline-none p-4 pl-10 text-sm border rounded-lg bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
          placeholder="Search Items"
          required
        />
        <button
          type="submit"
          class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >Search</button>
      </div>
    </form>
    <div class="grid grid-cols-3 gap-1 my-3">
      <template v-for="item in items">
        <ItemBlock :name="item.name" :count="item.count" :max="item.max" :id="item.id" />
      </template>
    </div>
  </div>
</template>

<script setup>
import ItemBlock from "../components/ItemBlock.vue";
import StoreBlock from "../components/StoreBlock.vue";

import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const items = computed(() => store.state.items.sort((a,b) => a.name.localeCompare(b.name)))

</script>


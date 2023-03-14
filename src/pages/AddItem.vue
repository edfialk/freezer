<template>
  <div class="p-5 text-primary">
    <form class="grid gap-5" @submit.prevent="save">
      <div class="text-bold text-2xl">
        <i class="fa-solid fa-arrow-left" @click="router.go(-1)"></i>
      </div>
      <div class="relative z-0 w-full mb-6 group">
        <input
          type="text"
          name="name"
          id="name"
          class="block py-2.5 px-0 w-full bg-transparent border-0 border-b-2 appearance-none text-white border-[#f2f7f9] focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
          v-model="state.name"
        />
        <label
          for="name"
          class="peer-focus:font-medium absolute text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >Item Name</label>
      </div>
      <div class="flex justify-between">
        <div>Quantity</div>
        <div>
          <button
            type="button"
            class="focus:outline-none font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mx-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
            @click="decCount"
          >
            <i class="fa-solid fa-minus"></i>
          </button>
          <span>{{ state.count }}</span>
          <button
            type="button"
            class="focus:outline-none font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mx-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
            @click="incCount"
          >
            <i class="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>
      <div class="flex justify-between">
        <div>Max</div>
        <div>
          <button
            type="button"
            class="focus:outline-none font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mx-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
            @click="decMax"
          >
            <i class="fa-solid fa-minus"></i>
          </button>
          <span>{{ state.max }}</span>
          <button
            type="button"
            class="focus:outline-none font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mx-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
            @click="incMax"
          >
            <i class="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>
      <div>
        <template v-for="s in stores">
          <div class="flex items-center mb-4">
            <input
              :id="s.name"
              type="checkbox"
              :value="s"
              v-model="state.stores"
              class="w-4 h-4 text-blue-600 rounded focus:ring-blue-600 ring-offset-gray-800 focus:ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600"
            />
            <label :for="s.name" class="ml-2 font-medium text-gray-300">{{ s.name }}</label>
          </div>
        </template>
      </div>
      <button
        type="submit"
        class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-800 shadow-lg shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
      >Save</button>
      <!-- <button
        type="button"
        class="border focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 border-gray-500 text-gray-400 hover:text-white hover:bg-gray-600 focus:ring-gray-800"
      >Cancel</button>-->
    </form>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const router = useRouter();
const store = useStore();

const state = reactive({
  count: 0,
  max: 0,
  name: null,
  stores: []
});

const stores = [
  { id: 1, name: "Costco" },
  { id: 2, name: "Fred Meyer" },
  { id: 3, name: "Trader Joe's" },
  { id: 4, name: "Whole Foods" }
];

const decCount = () => state.count > 0 && state.count--;
const incCount = () => state.count++;
const decMax = () => state.max > 0 && state.max--;
const incMax = () => state.max++;

const save = () => {
  store.dispatch("addItem", state);
  router.push("/");
};
</script>
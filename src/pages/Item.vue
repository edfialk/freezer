<template>
  <div class="text-primary p-5">
    <div class="text-bold text-2xl">
      <i class="fa-solid fa-arrow-left" @click="router.go(-1)"></i>
    </div>
    <div v-if="store.getters.isReady" class="my-5 text-primary text-center text-xl grid gap-5">
      <h1 class="text-3xl mb-5">{{ state.name }}</h1>
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
      <div class="flex justify-between">
          <div>From</div>
          <div class="text-right">
              <p v-for="store in state.stores">
                  {{ store.name }}
              </p>
          </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, reactive, computed, onMounted } from "vue"
import { useStore } from "vuex"
import { useRouter, useRoute } from "vue-router"
import { debounce } from "lodash"

const router = useRouter()
const route = useRoute()
const store = useStore()

// const item = store.getters.item(Number(route.params.id))

const state = reactive({
  count: 0,
  max: 0,
  name: null,
  stores: []
})

onMounted(() => {
  if (store.state.ready) {
    const item = store.getters.item(Number(route.params.id))
    state.count = item.count
    state.max = item.max
    state.name = item.name
    state.stores = item.stores
  }
})

watch(
  () => store.getters.isReady,
  () => {
    const item = store.getters.item(Number(route.params.id))
    state.count = item.count
    state.max = item.max
    state.name = item.name
    state.stores = item.stores
  }
)

const saveCount = debounce(() => {
    store.dispatch('setItemCount', {
        id: Number(route.params.id),
        count: state.count
    })
}, 300);

const incCount = () => {
  // console.log()
  state.count++
  saveCount()
}

const decCount = () => {
    if (state.count > 0) {
        state.count--
        saveCount()
    }
}

const saveMax = debounce(() => {
    store.dispatch('setItemMax', {
        id: Number(route.params.id),
        max: state.max
    })
}, 300);

const incMax = () => {
  // console.log()
  state.max++
  saveMax()
}

const decMax = () => {
    if (state.max > 0) {
        state.max--
        saveMax()
    }
}
</script>
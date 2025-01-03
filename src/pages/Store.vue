<template>
  <div class="text-primary p-5">
    <div class="text-bold text-2xl">
      <i class="fa-solid fa-arrow-left" @click="router.go(-1)"></i>
    </div>
    <div v-if="store.getters.isReady" class="my-5 text-primary text-xl grid gap-5">
      <h1 class="text-3xl mb-5 text-center">{{ myStore.name }}</h1>
      <div class="grid gap-3">
        <table>
          <tbody>
            <tr v-for="item in neededItems">
              <td class="w-1/2 py-2">{{ item.name }}</td>
              <td class="flex justify-between py-2">
                <button
                  type="button"
                  class="focus:outline-none font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
                  @click.stop="decCount(item)"
                >
                  <i class="fa-solid fa-minus"></i>
                </button>
                <div class="grow flex justify-center">
                  {{ item.count }}
                  <span v-if="item.change > 0">+{{ item.change }}</span>
                  / {{ item.max }}
                </div>
                <button
                  type="button"
                  class="focus:outline-none font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
                  @click.stop="incCount(item)"
                >
                  <i class="fa-solid fa-plus"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <hr v-if="unneededItems.length > 0" />
        <table>
          <tbody>
            <tr v-for="item in unneededItems">
              <td class="w-1/2 py-2">{{ item.name }}</td>
              <td class="flex justify-between py-2">
                <button
                  type="button"
                  class="focus:outline-none font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
                  @click.stop="decCount(item)"
                >
                  <i class="fa-solid fa-minus"></i>
                </button>
                <div class="grow flex justify-center">
                  {{ item.count }}
                  <span v-if="item.change > 0">+{{ item.change }}</span>
                  / {{ item.max }}
                </div>
                <button
                  type="button"
                  class="focus:outline-none font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
                  @click.stop="incCount(item)"
                >
                  <i class="fa-solid fa-plus"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <button
          type="button"
          class="w-full text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-800 shadow-lg shadow-green-800/80 font-medium rounded-lg px-5 py-3 text-center mr-2 mb-2"
          @click="checkout"
        >Check Out</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, reactive, computed, onMounted } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
import { debounce } from "lodash";

const router = useRouter();
const route = useRoute();
const store = useStore();

const myStore = computed(() => store.getters.store(Number(route.params.id)));

const state = reactive({
  items: []
});

const neededItems = computed(() => {
  return state.items
    .filter(i => i.count < i.max)
    .sort((a, b) => a.name.localeCompare(b.name));
});

const unneededItems = computed(() => {
  return state.items
    .filter(i => i.count >= i.max)
    .sort((a, b) => a.name.localeCompare(b.name));
});

const toggleItem = id => {
  // const item = state.items.find(e => e.id == id);
  // item.added = !item.added;
  // state.items = [...state.items.filter(e => e.id !== id), item];
};

const decCount = item => {
  const i = state.items.find(i => i.id == item.id);
  if (i.change > 0) i.change--;
};

const incCount = item => {
  const i = state.items.find(i => i.id == item.id);
  i.change++;
};

const checkout = () => {
  const items = state.items
    .filter(e => e.change > 0)
    .map(i => {
      i.count += i.change;
      delete i.change;
      return i;
    });
  store.dispatch("checkout", items);

  // router.push("/kitty");

  const clientId =
    "1050757476015-smevo2b2ugucp6ai9l35l0umndvlljac.apps.googleusercontent.com";

  // Google's OAuth 2.0 endpoint for requesting an access token
  var oauth2Endpoint = "https://accounts.google.com/o/oauth2/v2/auth";

  // Create <form> element to submit parameters to OAuth 2.0 endpoint.
  var form = document.createElement("form");
  form.setAttribute("method", "GET"); // Send as a GET request.
  form.setAttribute("action", oauth2Endpoint);

  // Parameters to pass to OAuth 2.0 endpoint.
  var params = {
    client_id: clientId,
    redirect_uri: "https://freezer-7d7ea.web.app/kitty",
    response_type: "token",
    scope: "https://www.googleapis.com/auth/photoslibrary.readonly",
    include_granted_scopes: "true",
    state: "pass-through value"
  };

  // Add form parameters as hidden input values.
  for (var p in params) {
    var input = document.createElement("input");
    input.setAttribute("type", "hidden");
    input.setAttribute("name", p);
    input.setAttribute("value", params[p]);
    form.appendChild(input);
  }

  // Add form to page and submit it to open the OAuth 2.0 endpoint.
  document.body.appendChild(form);
  form.submit();
};

onMounted(() => {
  if (store.state.ready) {
    const items = store.getters.itemsByStore(Number(route.params.id));
    state.items = items.map(i => ({ ...i, change: 0 }));
  }
});

watch(
  () => store.getters.isReady,
  () => {
    const items = store.getters.itemsByStore(Number(route.params.id));
    state.items = items.map(i => ({ ...i, change: 0 }));
  }
);
</script>
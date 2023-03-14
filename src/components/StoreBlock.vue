<template>
  <div class="store" :class="needClasses" @click="onClick">
    <span class="name">{{ props.name }}</span>
    <span class="count">{{ props.count }}</span>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { computed } from "vue"

const router = useRouter();

const props = defineProps(["name", "count", "id", "need"]);

const onClick = e => {
  router.push(`/store/${props.id}`);
};

const needClasses = computed(() => {
  let o = {};
  if (props.need > 0) {
    o['bg-red-400'] = true
  } else {
    o['bg-light'] = true
  }
  return o;
});

</script>
<template>
  <div class="store" @click="onClick">
    <span class="name">{{ props.name }}</span>
    <span class="count">{{ props.count }}</span>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps(["name", "count", "id"]);

const onClick = e => {
  router.push(`/store/${props.id}`);
};
</script>
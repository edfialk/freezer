<template>
  <div class="item" @click="onClick">
    <span class="name">{{ props.name }}</span>
    <span class="count">{{ props.count }} / {{ props.max }}</span>
  </div>
</template>

<script setup>

import { useRouter } from 'vue-router';

const router = useRouter();

const props = defineProps(['name', 'count', 'max', 'id']);

const onClick = e => {
	router.push(`/item/${props.id}`);
}

</script>
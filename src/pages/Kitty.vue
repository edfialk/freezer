<template>
  <div class="grid place-content-center h-screen">
    <router-link to="/">
      <img :src="state.kittyUrl" v-if="state.kittyUrl" />
      <h1 v-else>One sec loading kitty</h1>
    </router-link>
  </div>
</template>

<script setup>

import { useRoute } from 'vue-router'
import { onMounted, reactive } from 'vue'


const route = useRoute()
const matches = [...location.hash.matchAll(/access_token=([^&]+)/gm)]
const token = matches[0][1]

const state = reactive({
  kittyUrl: ''
})

onMounted(async () => {

  const albumsResponse = await fetch('https://photoslibrary.googleapis.com/v1/albums', {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    }
  })

  const albums = await albumsResponse.json()
  const album = albums.albums.find(i => i.title == 'Tnt')
  const albumId = album.id

  const photosResponse = await fetch('https://photoslibrary.googleapis.com/v1/mediaItems:search', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    },
    body: JSON.stringify({ albumId, pageSize: 100 })
  })

  const photos = await photosResponse.json()

  const photo = photos.mediaItems[Math.floor(Math.random() * photos.mediaItems.length)]

  const baseUrl = photo.baseUrl
  const meta = photo.mediaMetadata

  state.kittyUrl = `${baseUrl}=w1024-h1024`
})

</script>
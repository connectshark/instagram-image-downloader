<template>
  <NuxtLayout>
    <h1 class=" leading-loose text-center text-5xl font-bold bg-clip-text from-[#063f66] to-[#0e8fe6] bg-gradient-to-br text-transparent">IG&nbsp;DOWNLOADER</h1>
    <form @submit.prevent="getData(url)">
      <p>
        <label>
          <input pattern="^https:\/\/www\.instagram\.com\/p\/.*" title="輸入ig貼文網址" v-model="url" required type="url" class=" w-full appearance-none p-4 rounded-xl border-none outline-none ring-1 ring-primary focus:ring-2" placeholder="https://www.instagram.com/p/CkQPf8qPmzq/">
        </label>
      </p>
      <p class=" text-center py-5">
        <button class=" bg-primary text-white p-3 rounded-lg" type="submit">送出</button>
      </p>
    </form>
    <div v-if="data" class="bg-white p-4">
      <div class="grid gap-4 lg:grid-cols-[300px_auto]">
        <figure>
          <img draggable="false" :src="data.preview" :alt="data.id">
        </figure>
        <ul>
          <li class=" mb-8 last:mb-0" v-for="img in data.photos" :key="img.src">
            <a class=" bg-primary text-white p-1 rounded-lg hover:opacity-80" :href="img.src" target="_blank" rel="noopener noreferrer">{{img.config_width}}<i class='bx bx-x'></i>{{img.config_height}}下載<i class='bx bx-link-external'></i></a>
          </li>
        </ul>
        <div class=" p-4">
          <p class="text-sm">{{ data.caption }}</p>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
const url = ref('')

const {
  getData,
  loading,
  data
} = useAPI()
</script>
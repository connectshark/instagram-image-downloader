<template>
<NuxtLayout>
  <div class="w-11/12 mx-auto max-w-4xl">
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
    <div v-if="loading" class="bg-white p-4">
      <i class='bx bx-loader bx-spin bx-sm' ></i>
    </div>
    <div v-if="data" class="bg-white p-4">
      <div v-if="data.mediaType === 1">
        <h3>貼文預覽</h3>
        <div class="p-4">
          <p class="text-sm">{{ data.caption }}</p>
        </div>
        <h3>圖片下載</h3>
        <figure>
          <img class=" mx-auto" draggable="false" :src="data.preview" :alt="data.id">
        </figure>
        <ul class=" flex flex-wrap gap-4">
          <li class="" v-for="img in data.photos" :key="img.src">
            <a class=" text-primary underline rounded-lg hover:opacity-80" :href="img.url" target="_blank" rel="noopener noreferrer">{{img.width}}x{{img.height}}下載<i class='bx bx-link-external'></i></a>
          </li>
        </ul>
      </div>
      <div v-if="data.mediaType === 8">
        <h3>貼文預覽</h3>
        <div class="p-4">
          <p class="text-sm">{{ data.caption }}</p>
        </div>
        <h3>圖片下載</h3>
        <ul class=" grid lg:grid-cols-2 gap-8">
          <li v-for="img in data.photos" :key="img.id">
            <div>
              <figure class="w-20">
                <img :src="img.preview" :alt="img.id">
              </figure>
            </div>
            <ul class=" flex flex-wrap gap-4">
              <li class="" v-for="source in img.sources" :key="source.url">
                <a class=" text-primary underline rounded-lg hover:opacity-80" :href="source.url" target="_blank" rel="noopener noreferrer">{{source.width}}x{{source.height}}下載<i class='bx bx-link-external'></i></a>
              </li>
            </ul>
          </li>
        </ul>
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
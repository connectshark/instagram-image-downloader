<template>
<NuxtLayout>
  <div class="w-11/12 mx-auto max-w-4xl">
    <h1 class=" leading-loose text-center text-2xl font-bold bg-clip-text to-primary from-accent bg-gradient-to-br text-transparent">Instagram私人下載器</h1>
    <div class=" bg-secondary p-10 rounded-lg mb-4">
      <h2>
        <label for="post-url">從PC版中複製Instagram私人帳號的頁面網址</label>
      </h2>
      <input type="url" v-model="source" id="post-url" class="w-full appearance-none p-4 rounded-xl border-none outline-none ring-1 ring-primary focus:ring-2">
    </div>
    <div class=" bg-secondary p-10 rounded-lg mb-4">
      <label>複製以下連結後在新視窗打開</label>
      <div>
        <p class="bg-primary/20 px-3 py-1 leading-loose rounded-lg line-clamp-1 select-all">{{ detailUrl }}</p>
        <p class=" flex items-center justify-center pt-4">
          <button @click="copy()" class="text-primary rounded-lg" type="button">
            <i v-if="copied" class='bx bxs-copy-alt bx-md'></i>
            <i v-else class='bx bx-copy-alt bx-md'></i>
          </button>
        </p>
      </div>
    </div>
    <form @submit.prevent="submitHandler" class=" bg-secondary mb-4 p-10 rounded-lg">
      <div>
        <label>複製以下連結後在新視窗打開</label>
        <textarea required class="select-all text-xs resize-none w-full appearance-none p-4 rounded-xl border-none outline-none ring-1 ring-primary" v-model="postData" cols="30" rows="10"></textarea>
      </div>
      <div class=" text-center">
        <button type="submit" class=" bg-primary text-white p-3 rounded-lg">送出</button>
      </div>
    </form>
    <div v-if="loading" class="bg-secondary p-4 mb-4">
      <i class='bx bx-loader bx-spin bx-sm' ></i>
    </div>
    <div v-if="data" class="bg-secondary p-4 mb-4">
      <div v-if="data.type === 1">
        <h3>貼文預覽</h3>
        <div class="p-4">
          <p class="text-sm">{{ data.caption }}</p>
        </div>
        <h3>圖片下載</h3>
        <figure>
          <img class=" mx-auto" draggable="false" :src="data.preview" :alt="data.id">
        </figure>
        <ul class=" flex flex-wrap gap-4">
          <li v-for="img in data.photos" :key="img.url">
            <a class="text-primary underline rounded-lg hover:opacity-80" :href="img.url" target="_blank" rel="noopener noreferrer">{{img.width}}x{{img.height}}下載<i class='bx bx-link-external'></i></a>
          </li>
        </ul>
      </div>
      <div v-if="data.type === 8">
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
              <li class="" v-for="source in img.resources" :key="source.url">
                <a class=" text-primary underline rounded-lg hover:opacity-80" :href="source.url" target="_blank" rel="noopener noreferrer">{{ source.width }}x{{ source.height }}下載<i class='bx bx-link-external'></i></a>
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
const postData = ref(``)
const source = ref('')

const detailUrl = computed(() => source.value + `?utm_source=ig_web_copy_link?&__a=1&__d=1`)

const {
  copied,
  copy
} = useClipboard({
  source: detailUrl,
  copiedDuring: 2000
})

const {
  getDataFromOBJ,
  loading,
  data
} = useAPI()

const submitHandler = async () => {
  const data = JSON.parse(postData.value)
  await getDataFromOBJ(data)
}
</script>
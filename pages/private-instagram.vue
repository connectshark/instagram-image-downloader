<template>
  <NuxtLayout>
    <h1 class=" leading-loose text-center text-2xl font-bold bg-clip-text from-[#063f66] to-[#0e8fe6] bg-gradient-to-br text-transparent">Instagram私人下載器</h1>
    <div>
      <div class=" bg-white p-10 rounded-lg mb-4">
        <h2>
          <label for="post-url">從PC版中複製Instagram私人帳號的頁面網址</label>
        </h2>
        <input type="url" v-model="source" id="post-url" class="w-full appearance-none p-4 rounded-xl border-none outline-none ring-1 ring-primary focus:ring-2">
      </div>
      <div class=" bg-white p-10 rounded-lg mb-4">
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
      <form @submit.prevent="submitHandler" class=" bg-white p-10 rounded-lg">
        <div>
          <label>複製以下連結後在新視窗打開</label>
          <textarea required class="select-all text-xs resize-none w-full appearance-none p-4 rounded-xl border-none outline-none ring-1 ring-primary" v-model="postData" cols="30" rows="10"></textarea>
        </div>
        <div class=" text-center">
          <button type="submit" class=" bg-primary text-white p-3 rounded-lg">送出</button>
        </div>
      </form>
    </div>
  </NuxtLayout>
</template>

<script setup>
const postData = ref('')
const source = ref('https://www.instagram.com/p/CsDPINtP3jo/')

const detailUrl = computed(() => source.value + `?__a=1&__d=dis`)

const {
  copied,
  copy
} = useClipboard({
  source: detailUrl,
  copiedDuring: 2000
})

const submitHandler = () => {
  const data = JSON.parse(postData.value)
  console.log(data)
}
</script>
<template>
  <div class="general w-full max-w-xl">
    <div class="bg-input rounded-full overflow-hidden p-2 inline-block mb-4">
      <img
        src="../../assets/images/logo-transparent.png"
        class="w-24 rounded-full"
      />
    </div>
    <h1 class="font-semibold capitalize">{{ state.name }}</h1>
    <p>
      Notething is a note taking app with full keyboard compatibility and some
      other things.
    </p>
    <div class="mt-4">
      <div class="flex">
        <p class="w-32">Version</p>
        <p>{{ state.version }}</p>
      </div>
    </div>
    <div class="mt-12 space-x-8 dark:text-gray-300 text-gray-600">
      <a
        v-for="link in links"
        :key="link.name"
        :href="link.url"
        target="_blank"
        class="dark:hover:text-white hover:text-gray-900 transition"
      >
        <v-remixicon :name="link.icon" />
        <span class="align-middle ml-1">{{ link.name }}</span>
      </a>
    </div>
  </div>
</template>
<script>
import { onMounted, shallowReactive } from 'vue';

export default {
  setup() {
    const links = [
      {
        name: 'Website',
        url: 'https://notething.vercel.app',
        icon: 'riGlobalLine',
      },
      {
        name: 'GitHub',
        url: 'https://github.com/kholid060/notething',
        icon: 'riGithubFill',
      },
    ];
    const state = shallowReactive({
      name: '-',
      version: '0.0.0',
    });

    onMounted(async () => {
      window.electron.ipcRenderer.callMain('app:info').then((data) => {
        Object.assign(state, data);
      });
    });

    return {
      state,
      links,
    };
  },
};
</script>


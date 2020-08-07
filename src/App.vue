<template>
  <div id="app">
    <support-chat
      :klickartURL="klickartURL"
    />
  </div>
</template>

<script>
import SupportChat from '@/components/SupportChat/Main.vue';
import 'klicknotify/src/scss/main.scss';

export default {
  name: 'App',
  components: {
    SupportChat,
  },
  data() {
    return {
      klickartURL: 'http://art.klickpages.local',
    };
  },
};
</script>

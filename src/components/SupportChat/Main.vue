<template>
  <div id="support-chat"></div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { setklickartURL } from '@/config/klickart';

export default {
  name: 'SupportChat',
  props: {
    klickartURL: String,
  },
  computed: {
    ...mapGetters({
      chat: 'SupportChat/chat',
    }),

    hasSupportChat() {
      const chatWrapperClass = 'md-chat-widget-wrapper';
      return !!document.body.querySelector(`.${chatWrapperClass}`);
    },
  },
  methods: mapActions({
    getChat: 'SupportChat/getChat',
  }),
  async mounted() {
    setklickartURL(this.klickartURL);

    if (this.hasSupportChat) {
      return;
    }

    try {
      const chatScript = await this.getChat();

      const HTMLChatFragment = document
        .createRange()
        .createContextualFragment(chatScript);

      this.$el.appendChild(HTMLChatFragment);
    } catch (error) {
      this.$notify.error({
        message: this.$t('supportChat.errorMessage'),
        autoHide: true,
      });
    }
  },
};
</script>

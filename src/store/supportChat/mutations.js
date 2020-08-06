import types from './types';

const state = {
  chat: '',
};

const mutations = {
  [types.SET_SUPPORT_CHAT](state, chat) {
    state.chat = chat;
  },
};

export { state, mutations };

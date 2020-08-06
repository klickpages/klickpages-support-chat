import SupportChat from '@/services/api/klickart/supportChat';
import types from './types';

const actions = {};

actions.getChat = ({ commit }) => {
  const supportChatsRequest = new SupportChat();

  return supportChatsRequest
    .get()
    .then(({ data }) => {
      commit(types.SET_SUPPORT_CHAT, data);
      return data;
    });
};

export default actions;

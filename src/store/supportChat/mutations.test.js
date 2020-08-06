import { mutations } from './mutations';

describe('@/store/supportChat/mutations', () => {
  const state = {
    chat: '',
  };

  const chat = '<script>sample data</script>';

  it('SET_SUPPORT_CHAT', () => {
    mutations.SET_SUPPORT_CHAT(state, chat);

    expect(state.chat).toEqual(chat);
  });
});

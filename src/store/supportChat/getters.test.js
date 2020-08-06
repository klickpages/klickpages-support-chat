import getters from './getters';

describe('@/store/supportChat/getters', () => {
  let state;

  beforeEach(() => {
    state = {
      chat: '<script>sample data</script>',
    };
  });

  it('Chat', () => {
    const result = getters.chat(state);

    expect(result).toEqual(state.chat);
  });
});

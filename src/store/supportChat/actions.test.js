import MockAdapter from 'axios-mock-adapter';
import SupportChat from '@/services/api/klickart/supportChat';
import actions from './actions';

jest.mock('@/i18n', () => (
  jest.fn().mockImplementation(() => { })
));

describe('@/store/supportChat/actions', () => {
  const supportChatsRequest = new SupportChat();
  const mockSupportChatsRequest = new MockAdapter(supportChatsRequest.axios);

  const commit = jest.fn();
  let response;

  describe('when getChat is called', () => {
    beforeAll(() => {
      response = {
        data: '<script>sample data</script>',
      };
    });

    afterAll(() => {
      jest.clearAllMocks();
    });

    it('commit SET_SUPPORT_CHAT with chat data', (done) => {
      mockSupportChatsRequest.onGet().reply(200, response);

      actions.getChat({ commit }).then(() => {
        expect(commit).toHaveBeenCalledWith('SET_SUPPORT_CHAT', response);
        done();
      });
    });
  });
});

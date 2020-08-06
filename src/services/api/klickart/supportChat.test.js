import SupportChat from './supportChat';
import Klickart from './index';

jest.mock('./index', () => (
  jest.fn().mockImplementation(() => { })
));

describe('@/services/api/klickart/supportChat', () => {
  let supportChatRequest;
  let expectedConfig = {};

  describe('When creating a new support chat request', () => {
    beforeAll(() => {
      expectedConfig.path = '/support_chats';
      supportChatRequest = new SupportChat();
    });

    it('should define a new support chat request', () => {
      expect(supportChatRequest).toBeInstanceOf(Klickart);
    });

    it('should have called Klickart with the expected configurations', () => {
      expect(Klickart).toHaveBeenCalledWith(expectedConfig);
    });
  });

  describe('When creating a new support chat request with a configuration', () => {
    beforeAll(() => {
      const config = {
        param: true,
      };

      expectedConfig = {
        path: '/support_chats',
        param: true,
      };

      supportChatRequest = new SupportChat(config);
    });

    it('should define a new support chat request', () => {
      expect(supportChatRequest).toBeDefined();
    });

    it('should have called Klickart with the expected configurations', () => {
      expect(Klickart).toHaveBeenCalledWith(expectedConfig);
    });
  });
});

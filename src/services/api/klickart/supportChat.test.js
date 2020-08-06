import i18n from '@/i18n';
import SupportChat from './supportChat';
import Klickart from './index';

jest.mock('./index', () => (
  jest.fn().mockImplementation(() => { })
));

jest.mock('@/i18n', () => (
  jest.fn().mockImplementation(() => { })
));

i18n.locale = 'pt-BR';
const supportChatPath = `${i18n.locale}/support_chats`;

describe('@/services/api/klickart/supportChat', () => {
  let supportChatRequest;
  let expectedConfig = {};

  describe('When creating a new support chat request', () => {
    beforeAll(() => {
      expectedConfig.path = supportChatPath;
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
        path: supportChatPath,
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

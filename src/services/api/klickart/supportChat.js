import i18n from '@/i18n';
import Klickart from './index';

export default class SupportChat extends Klickart {
  constructor(config = {}) {
    config.path = `${i18n.locale}/support_chats`;

    super(config);
  }
}

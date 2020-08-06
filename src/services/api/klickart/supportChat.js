import Klickart from './index';

export default class SupportChat extends Klickart {
  constructor(config = {}) {
    config.path = '/support_chats';

    super(config);
  }
}

import axios from 'axios';
import Instance from './instance';

jest.mock('axios');
axios.create.mockReturnValue({
  interceptors: {
    response: {
      use: jest.fn(),
    },
  },
});

jest.mock('@/config/klickart', () => ({
  getklickartURL: () => 'http://klickart.url',
}));

describe('@/services/api/klickart/instance', () => {
  let expectedConfig;

  describe('When instance doesn`t have an instance variable setted', () => {
    beforeAll(() => {
      Instance();
    });

    afterAll(() => {
      jest.clearAllMocks();
    });

    it('should call axios.create', () => {
      expectedConfig = { baseURL: 'http://klickart.url' };

      expect(axios.create).toHaveBeenCalledWith(expectedConfig);
    });
  });

  describe('When instance have an instance variable setted', () => {
    let firstInstance;

    beforeAll(() => {
      firstInstance = Instance();
    });

    afterAll(() => {
      jest.clearAllMocks();
    });

    it('should return the first instance', () => {
      expect(Instance()).toEqual(firstInstance);
    });
  });
});

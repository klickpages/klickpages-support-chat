import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import SupportChat from './Main.vue';

const $notify = {
  error: jest.fn(),
  success: jest.fn(),
};

const $t = jest.fn().mockImplementation((str) => str);

describe('@/components/SupportChat/Main', () => {
  const localVue = createLocalVue();
  localVue.use(Vuex);

  let wrapper;

  const modules = {
    SupportChat: {
      actions: {
        getChat: jest.fn(),
      },
      namespaced: true,
    },
  };

  describe('when component is mounted', () => {
    describe('when there is no support chat in the page', () => {
      beforeAll(() => {
        const store = new Vuex.Store({
          modules,
        });

        wrapper = shallowMount(SupportChat, {
          localVue,
          store,
          mocks: { $t, $notify },
        });
      });

      afterAll(() => {
        wrapper.destroy();
        jest.clearAllMocks();
      });

      it('should render html correctly', () => {
        expect(wrapper.element).toMatchSnapshot();
      });
    });

    describe('when there is a support chat in the page', () => {
      beforeAll(() => {
        const mockReturnData = {
          data: '<script>sample data</script>',
        };

        modules.SupportChat.actions = {
          getChat: jest.fn().mockImplementation(() => Promise.resolve(mockReturnData)),
        };

        const store = new Vuex.Store({
          modules,
        });

        wrapper = shallowMount(SupportChat, {
          localVue,
          store,
          mocks: { $t, $notify },
        });
      });

      afterAll(() => {
        wrapper.destroy();
        jest.clearAllMocks();
      });

      it('should render html correctly', () => {
        expect(wrapper.element).toMatchSnapshot();
      });
    });

    describe('when there is no support chat in the page', () => {
      beforeAll(() => {
        modules.SupportChat.actions = {
          getChat: jest.fn().mockImplementation(() => Promise.reject()),
        };

        const store = new Vuex.Store({
          modules,
        });

        wrapper = shallowMount(SupportChat, {
          localVue,
          store,
          mocks: { $t, $notify },
        });
      });

      afterAll(() => {
        wrapper.destroy();
        jest.clearAllMocks();
      });

      it('should call Notify.error', () => {
        expect($notify.error).toHaveBeenCalledWith({
          message: $t('supportChat.errorMessage'),
          autoHide: true,
        });
      });
    });
  });
});

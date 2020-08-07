import { getLocale, hasLocale } from './url';

describe('@/helpers/url', () => {
  describe('getLocale', () => {
    describe('when locale is valid', () => {
      it('returns the locale', () => {
        const path = '/pt-BR/support_chats';
        expect(getLocale(path)).toEqual('pt-BR');
      });
    });

    describe('when locale is invalid', () => {
      it('returns null', () => {
        const path = '/ru/support_chats';
        expect(getLocale(path)).toEqual(null);
      });
    });
  });

  describe('hasLocale', () => {
    describe('when locale is present', () => {
      it('returns true', () => {
        const path = '/pt-BR/support_chats';
        expect(hasLocale(path)).toBeTruthy();
      });
    });

    describe('when locale is not present', () => {
      it('returns false', () => {
        const path = '/ru/support_chats';
        expect(hasLocale(path)).toBeFalsy();
      });
    });
  });
});

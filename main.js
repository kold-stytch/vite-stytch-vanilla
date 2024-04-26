import { AuthFlowType, B2BOAuthProviders, B2BProducts, StytchB2BUIClient } from '@stytch/vanilla-js/b2b';

const stytch = new StytchB2BUIClient('public-token-test-c215b1b6-927e-4b21-bd41-71db820020e8');

stytch.mount({
  elementId: '#app',
  config: {
    products: [B2BProducts.emailMagicLinks, B2BProducts.oauth],
    authFlowType: AuthFlowType.Discovery,
    emailMagicLinksOptions: {
      loginRedirectURL: 'https://example.com/authenticate',
      signupRedirectURL: 'https://example.com/authenticate',
    },
    oauthOptions: {
      providers: [B2BOAuthProviders.Google, B2BOAuthProviders.Microsoft],
      loginRedirectURL: 'https://example.com/authenticate',
      signupRedirectURL: 'https://example.com/authenticate',
    },
    sessionOptions: {
      sessionDurationMinutes: 60,
    },
  },
});


import { Provider } from '@coral-xyz/anchor';

module.exports = async function (provider: Provider) {
  // Configure client to use the provider.
  const anchor = require("@coral-xyz/anchor");
  anchor.setProvider(provider);

  // Add your deploy script here.
};
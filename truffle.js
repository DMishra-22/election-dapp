module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
	    host: "localhost",
      port: "*", // Match any network port
      network_id: "*" // Match any network id
    }
  }
};

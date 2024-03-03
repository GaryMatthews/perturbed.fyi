// Creating a new instance of PublicKeyCredential
// Here, we use navigator.credentials.create() to generate a new credential.

var publicKey = {
  challenge: new Uint8Array([/* bytes sent from the server */]),
  rp: {
    name: "Example CORP",
    id: "login.example.com"
  },
  user: {
    id: new Uint8Array(16),
    name: "jdoe@example.com",
    displayName: "John Doe"
  },
  pubKeyCredParams: [
    {
      type: "public-key",
      alg: -7
    }
  ]
};

navigator.credentials.create({ publicKey })
  .then(function (newCredentialInfo) {
    var response = newCredentialInfo.response;
    var clientExtensionsResults = newCredentialInfo.getClientExtensionResults();
  }).catch(function (err) {
    console.error(err);
  });
// Copy to Clipboard
// Getting an existing instance of PublicKeyCredential
// Here, we fetch an existing credential from an authenticator, using navigator.credentials.get().

var options = {
  challenge: new Uint8Array([/* bytes sent from the server */])
};

navigator.credentials.get({ "publicKey": options })
  .then(function (credentialInfoAssertion) {
    // send assertion response back to the server
    // to proceed with the control of the credential
  }).catch(function (err) {
    console.error(err);
  });







// Password Credentials

<form id="form" method="post">
  <input type="text" name="id" autocomplete="username" />
  <input type="password" name="password" autocomplete="current-password" />
  <input type="hidden" name="csrf_token" value="*****" />
</form>

// Then, a reference to this form element, using it to create a PasswordCredential object, and storing it in the browser's password system.

var form = document.querySelector('#form');
var creds = new PasswordCredential(form);
// Store the credentials.
navigator.credentials.store(creds)
  .then(function (creds) {
    // Do something with the credentials if you need to.
  });



// Federated Credentials
var cred = new FederatedCredential({
  id: id,
  name: name,
  provider: 'https://account.google.com',
  iconURL: iconUrl
});

// Store it
navigator.credentials.store(cred)
  .then(function () {
    // Do something else.
  });
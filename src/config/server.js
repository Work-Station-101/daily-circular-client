const serverHost = 'localhost';
const serverPort = 5000;

const baseUrl = `http://${serverHost}:${serverPort}`;
const server = {
  baseUrl,
  userAPIBaseUrl: `${baseUrl}/api/user`,
  circularAPIBaseUrl: `${baseUrl}/api/user`,
}

export default server;

exports.handler = async () => {
  const secret = process.env.secret;
  return {
    statusCode: 200,
    body: `hello my secret is ${secret}`,
  };
};

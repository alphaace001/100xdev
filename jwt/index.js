const jwt = require("jsonwebtoken");
const z = require("zod");

const secret = "abc123";

const emailschema = z.string().email();
const passwordschema = z.string().min(6);

function signjwt(username, password) {
  const usernameresponse = emailschema.safeParse(username);
  const passwordresponse = passwordschema.safeParse(password);
  if (!usernameresponse.success || !passwordresponse.success) {
    return null;
  }
  return jwt.sign({ username }, secret);
}

function decodeJwt(token) {
  const response = jwt.decode(token);
  if (response) return true;
  return false;
}

function veritfyJwt(token) {
  try {
    jwt.verify(token, secret);
    return true;
  } catch (e) {
    return false;
  }
}

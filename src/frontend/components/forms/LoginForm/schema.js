const schema = {
  type: "object",
  properties: {
    email: { title: "Email", type: "string" },
    password: { title: "Password", type: "string" },
    isAdmin: { title: "isAdmin", type: "boolean" }
  }
};

export default schema;

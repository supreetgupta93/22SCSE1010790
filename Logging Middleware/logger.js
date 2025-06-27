// logger.js
let authToken = "";

export function setAuthToken(token) {
  authToken = token;
}

export function customLogger(event, data) {
  const log = {
    stack: "frontend",
    level: "info",
    package: "middleware",
    message: JSON.stringify({ event, ...data }),
  };

  fetch("http://20.244.56.144/evaluation-service/log", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
    body: JSON.stringify(log),
  }).then(res => {
    // optionally handle response
  }).catch(err => {
    console.error("Logging failed", err);
  });
}

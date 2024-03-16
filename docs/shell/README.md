---
sidebar: auto
---

# Shell

## Folder exist

```shell
# 判断是否存在文件夹
if [ ! -d "$folder"]; then
  # do something
fi
```

## Arguments exist

```shell
# 判断输入变量是否存在
if [ "$1" = 'reset' ]; then
  # echo $1
  # do something
fi
```

## Check process exist

```shell
ps -ef | grep "process name" | grep -v grep | awk '{print $2}'
```

```js
const convert = execSync(
  "ps -ef | grep \"convert\" | grep -v grep | awk '{print $2}'",
  { encoding: "utf8" }
).toString();
```

## SSH keygen

Creating SSH key for pulling from you GitHub repository

```bash
ssh-keygen -t rsa -C "指定生成的密钥注释（comment）"
```

## NodeJs Server

Listen on port `3000` and write parameters of `post` requests to a file

```js
const http = require("http");
const fs = require("fs");

// Create an HTTP server
const server = http.createServer((req, res) => {
  if (req.method === "POST") {
    let data = "";

    // Receive data from POST requests
    req.on("data", (chunk) => {
      data += chunk.toString();
    });

    // Process data when request ends
    req.on("end", () => {
      // Parse request data into JSON format
      const requestData = JSON.parse(data);

      // Get URL and body from request parameters
      const { url, body } = requestData;

      // Write request parameters to file
      fs.appendFile(
        "request_data.txt",
        `${url}\n${JSON.stringify(body)}\n\n`,
        (err) => {
          if (err) {
            console.error("Error writing to file:", err);
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end("Internal Server Error");
          } else {
            console.log("Request parameters written to file");
            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end("OK");
          }
        }
      );
    });
  } else {
    // Handle non-POST requests
    res.writeHead(405, { "Content-Type": "text/plain" });
    res.end("Method Not Allowed");
  }
});

// Listen on port
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
```

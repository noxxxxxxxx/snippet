---
sidebar: auto
---

# Shell

## 文件夹是否存在

```shell
# 判断是否存在文件夹
if [ ! -d "$folder"]; then
  # do something
fi
```

## 判断输入变量是否存在

```shell
# 判断输入变量是否存在
if [ "$1" = 'reset' ]; then
  # echo $1
  # do something
fi
```

## 检查进程是否存在

```shell
ps -ef | grep "process name" | grep -v grep | awk '{print $2}'
```

```js
const convert = execSync(
  "ps -ef | grep \"convert\" | grep -v grep | awk '{print $2}'",
  { encoding: "utf8" }
).toString();
```

## SSH 密钥生成

创建 sshkey 用于拉取自己的 github 仓库

```bash
ssh-keygen -t rsa -C "指定生成的密钥注释（comment）"
```

## NodeJs 服务器

监听 `3000` 端口并将 `post` 请求的参数写入到文件中

```js
const http = require("http");
const fs = require("fs");

// 创建一个 HTTP 服务器
const server = http.createServer((req, res) => {
  if (req.method === "POST") {
    let data = "";

    // 接收 POST 请求的数据
    req.on("data", (chunk) => {
      data += chunk.toString();
    });

    // 在请求结束时处理数据
    req.on("end", () => {
      // 解析请求数据为 JSON 格式
      const requestData = JSON.parse(data);

      // 获取请求参数中的 url 和 body
      const { url, body } = requestData;

      // 将请求参数写入文件
      fs.appendFile(
        "request_data.txt",
        `${url}\n${JSON.stringify(body)}\n\n`,
        (err) => {
          if (err) {
            console.error("写入文件时发生错误:", err);
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end("Internal Server Error");
          } else {
            console.log("请求参数已写入文件");
            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end("OK");
          }
        }
      );
    });
  } else {
    // 处理非 POST 请求
    res.writeHead(405, { "Content-Type": "text/plain" });
    res.end("Method Not Allowed");
  }
});

// 监听端口
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
```

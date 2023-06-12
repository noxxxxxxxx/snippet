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
  'ps -ef | grep "convert" | grep -v grep | awk \'{print $2}\'',
  { encoding: 'utf8' },
).toString();
```

## SSH keygen

创建 sshkey 用于拉取自己的 github 仓库

```bash
ssh-keygen -t rsa -C "指定生成的密钥注释（comment）"
```
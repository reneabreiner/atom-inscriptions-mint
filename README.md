# $injs 铭文自动化 Mint 脚本

> 本脚本是参考 [alfar0x](https://github.com/alfar0x/atom-inscriptions) 修改而来，根据 $injs 新版规则进行适当的调整并做了一些简单的修改和优化。


## 🛠 使用说明

### Step 1: 首先安装 nodejs

先去 Nodejs 官网下载安装自己电脑操作系统对应的版本

```bash
https://nodejs.org/en
```

然后看一下安装的版本，是否安装成功

```bash
node -v
npm -v
```

如果你更喜欢使用 yarn 则安装 yarn
```bash
npm i -g yarn
```

### Step 2: 下载脚本源代码
先用 git clone 源代码到本地
```bash
git clone https://github.com/reneabreiner/atom-inscriptions-mint

cd atom-inscriptions-mint
```
如果是 Windows 电脑没有安装 git，先去下面网站下载安装 git 软件
```bash
https://gitforwindows.org
```

### Step 3: 重命名当前目录下的 config.injs.example.js 为 config.js 文件
> 注意：大家更新代码后最好重新再更新一下配置文件，以免某些参数缺失。
```bash
cp config.injs.example.js config.js
```

### Step 4: 修改当前目录下的 config.js 配置文件
主要配置以下几个参数，其它的参数不需要修改，大多数时候其实你只修改 RPC 这个参数，最好使用私人节点。
```javascript
// 这下面的配置根据当前网络情况进行调整
// injective RPC 结点服务器地址
// 可以从 https://cointool.app/rpcServer/cosmos?name=injective 获取
// 节点如果报错，就打开上面网址选择一个可用的 RPC 服务器地址替换
export const RPC = "https://injective-rpc.w3coins.io";
//export const RPC = "https://rpc-injective.whispernode.com:443";
//export const RPC = "https://rpc-injective.goldenratiostaking.net";
//export const RPC = "https://injective-rpc.polkachu.com";
//export const RPC = "https://injective-rpc.lavenderfive.com:443";
//xport const RPC = "https://rpc-injective-ia.cosmosia.notional.ventures/";
//export const RPC = "https://rpc-injective.whispernode.com:443";
//export const RPC = "https://injective-rpc.publicnode.com:443";
//export const RPC = "https://injective-rpc.w3coins.io";
//export const RPC = "https://injective-rpc.publicnode.com:443";

export const INJ_REST = "https://lcd.injective.network";
//export const INJ_REST = "https://sentry.lcd.injective.network:443";

export const INJ_GRPC = "https://grpc.injective.network";

// GAS 费修改，根据当前网络情况视频情况调整
export const GAS = 1000000;

// 铸造原生代币的交易费用
export const FEE_NATIVE = 0.003;

// 自己给自己的转帐金额（原来是 0.03，现在免费了，只要转任意金额就行）
export const MINT_AMOUNT_NATIVE = 0.00000001;

// mint 参数配置
// injs 铭文的 base64 编号，注意一定要保持跟官方一致，具体到 https://docs.injs.ink/mint-injs 查看。
// data:,{"p":"injrc-20","op":"mint","tick":"INJS","amt":"1000"}
// 先前是1张2000个，现在改成了 1000个
export const MEMO =
    "ZGF0YToseyJwIjoiaW5qcmMtMjAiLCJvcCI6Im1pbnQiLCJ0aWNrIjoiSU5KUyIsImFtdCI6IjEwMDAifQ==";

// MINT 次数，如果为 0 则会一直 Mint（但最大Mint最大次数由下面的 MAX_MINT_MINT 设置
export const MINT_COUNT = 0

// 最大 Mint 次数（默认为 10000）
export const MAX_MINT_COUNT = 10000

// 每轮开始 Mint 的起始-结束区块高度
export const BLOCK_HEIGHTS = [
    [55051600,55053100],
    [55094800,55096300],
    [55138000,55139500],
    [55181200,55182700],
    [55224400,55225900],
    [55267600,55269100],
    [55310800,55312300],
    [55354000,55355500]
]
// 获取区块高度间出现错误时的间隔时间（以秒为单位）
export const SLEEP_ON_GET_HEIGHT_ERROR_SEC = 20;

// 检测区块高度间隔时间（以秒为单位）
export const SLEEP_ON_GET_HEIGHT_SEC = 2;
```

### Step 5: 安装依赖包
```bash
npm i
```
or
```bash
yarn install
```

### Step 6: 准备好 injective 钱包
- 先安装好 keplr 钱包，从如下地址安装 injective 钱包扩展插件
- https://chrome.google.com/webstore/detail/dmkamcknogkgcdfhhbddcghachkejeap
- 通过 keplr 钱包创建好 injective 钱包，最好创建多个钱包 Mint，提升效率
- 从交易所或者其它钱包向新钱包地址充值一定数量的 $inj
- 从 keplr 钱包导出助记词和钱包地址，注意导出钱包地址时一定要选 injective
- 在 atom-inscriptions-mint 源代码目录创建一个 input 目录
- 在 input 目录下创建一个 accounts.txt 文件
- 在 accounts.txt 文件里输入你的助记词钱包和钱包地址，一定要对应好
- accounts.txt 文件内容格式如下，助记词,钱包地址
```
steak young choice camera between typical tackle draft chat orient domain kitten,inj1nefwcgld34r3p4r5ztc67smfjfp8qqrfk44ecf
steak young choice camera between typical tackle draft chat orient domain kitten,inj1nefwcgld34r3p4r5ztc67smfjfp8qqrfk44ecf
steak young choice camera between typical tackle draft chat orient domain kitten,inj1nefwcgld34r3p4r5ztc67smfjfp8qqrfk44ecf
steak young choice camera between typical tackle draft chat orient domain kitten,inj1nefwcgld34r3p4r5ztc67smfjfp8qqrfk44ecf
steak young choice camera between typical tackle draft chat orient domain kitten,inj1nefwcgld34r3p4r5ztc67smfjfp8qqrfk44ecf
```

### Step 7: 运行 Mint 脚本程序
```shell
node scripts/mint.js
```
or
```shell
npm run mint
```
or
```shell
yarn mint
```

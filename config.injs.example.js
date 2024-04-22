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
// 3 000 000 000 000 000
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

// 公共参数配置
// injective 区块浏览器，不需要修改
export const EXPLORER = "https://www.mintscan.io/injective/tx";

export const NATIVE_PRICE_USD = 37.23;

// 检索帐户时出现错误时的睡眠持续时间（以秒为单位）
export const SLEEP_ON_GET_ACCOUNT_ERROR_SEC = 20;
// 启动新帐户之间的睡眠持续时间（以秒为单位
export const SLEEP_BETWEEN_START_ACCOUNTS_SEC = 5;
// 帐户交易之间的睡眠持续时间（以秒为单位
export const SLEEP_BETWEEN_ACCOUNT_TXS_SEC = 5;

// dispatch
export const SEND_NATIVE_TOKENS_PER_ACCOUNT = 0.0012;
export const SLEEP_BETWEEN_DISPATCH_SEC = 30;

// withdraw
export const LEAVE_NATIVE_ON_ACCOUNT = 0.05;
export const SLEEP_BETWEEN_WITHDRAW_SEC = 5;
export const WITHDRAW_EXCHANGE_ADDRESS = "inj....";

// balances
// 检测各个帐户的全额间隔时间
export const SLEEP_BETWEEN_CHECK_BALANCES_SEC = 30;

// transactions
export const SLEEP_BETWEEN_GET_TRANSACTIONS_SEC = 5;

// minted
// 每次 Mint 的间隔时间（秒为单位）
export const SLEEP_BETWEEN_CHECK_MINTED_SEC = 5;

// system DO NOT EDIT system DO NOT EDIT system DO NOT EDIT system DO NOT EDIT system DO NOT EDIT
export const MINTED_API_URL = null;
export const NATIVE_DENOM = "inj";
// 钱包地址存储文件
export const FILE_ACCOUNTS = "input/accounts.txt";
// 原生代币转化率
export const UNATIVE_PER_NATIVE = 10 ** 18;
export const NATIVE_TICK = "INJ";
export const ADDRESS_LENGTH = 42;
export const ADDRESS_PREFIX = "inj";
// system DO NOT EDIT system DO NOT EDIT system DO NOT EDIT system DO NOT EDIT system DO NOT EDIT

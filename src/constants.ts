import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  MAINNET = 56,
  TESTNET = 97,
  CRONOS = 25,
  CRONOS_TESTNET = 338
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

//cake
// export const FACTORY_ADDRESS_TEST = '0x6725F303b657a9451d8BA641348b6761A6CC7a17'

// export const FACTORY_ADDRESS = '0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73'

// coxi

export const FACTORY_ADDRESS_TEST = '0x8eED0642C17385297FdDF0B84EcA05C75112a83E'

export const FACTORY_ADDRESS = '0x70EB89A8d61734697bf237309430B2135d2bE396';

// cake
// export const INIT_CODE_HASH_TEST= '0xd0d4c4cd0848c93cb4fd1f498d7013ee6bfb25783ea21593d5834f5d250ece66'

// export const INIT_CODE_HASH = '0x00fb7f630766e6a796048ea87d01acd3068e8ff67d078148a3fa3f4a84f69bd5'


//cox
export const INIT_CODE_HASH_TEST = '0xe0bbdfcf9b856a3a04fbd17a1a9ce830f1de7d1d57760cd26a478120c69474b8'

export const INIT_CODE_HASH = '0xbdc1513f01883597bcb8fd9b264667ad620715125e0d3339a1c6a2ffb80bee5d';

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const FEES_NUMERATOR = JSBI.BigInt(9975)
export const FEES_DENOMINATOR = JSBI.BigInt(10000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}

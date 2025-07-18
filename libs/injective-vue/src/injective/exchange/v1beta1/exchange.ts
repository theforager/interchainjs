import { Coin, CoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { OracleType } from "../../oracle/v1beta1/oracle";
import { isSet, DeepPartial, bytesFromBase64, base64FromBytes } from "../../../helpers";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
import { Decimal } from "@interchainjs/math";
export enum AtomicMarketOrderAccessLevel {
  Nobody = 0,
  /** BeginBlockerSmartContractsOnly - currently unsupported */
  BeginBlockerSmartContractsOnly = 1,
  SmartContractsOnly = 2,
  Everyone = 3,
  UNRECOGNIZED = -1,
}
export const AtomicMarketOrderAccessLevelAmino = AtomicMarketOrderAccessLevel;
export function atomicMarketOrderAccessLevelFromJSON(object: any): AtomicMarketOrderAccessLevel {
  switch (object) {
    case 0:
    case "Nobody":
      return AtomicMarketOrderAccessLevel.Nobody;
    case 1:
    case "BeginBlockerSmartContractsOnly":
      return AtomicMarketOrderAccessLevel.BeginBlockerSmartContractsOnly;
    case 2:
    case "SmartContractsOnly":
      return AtomicMarketOrderAccessLevel.SmartContractsOnly;
    case 3:
    case "Everyone":
      return AtomicMarketOrderAccessLevel.Everyone;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AtomicMarketOrderAccessLevel.UNRECOGNIZED;
  }
}
export function atomicMarketOrderAccessLevelToJSON(object: AtomicMarketOrderAccessLevel): string {
  switch (object) {
    case AtomicMarketOrderAccessLevel.Nobody:
      return "Nobody";
    case AtomicMarketOrderAccessLevel.BeginBlockerSmartContractsOnly:
      return "BeginBlockerSmartContractsOnly";
    case AtomicMarketOrderAccessLevel.SmartContractsOnly:
      return "SmartContractsOnly";
    case AtomicMarketOrderAccessLevel.Everyone:
      return "Everyone";
    case AtomicMarketOrderAccessLevel.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum MarketStatus {
  Unspecified = 0,
  Active = 1,
  Paused = 2,
  Demolished = 3,
  Expired = 4,
  UNRECOGNIZED = -1,
}
export const MarketStatusAmino = MarketStatus;
export function marketStatusFromJSON(object: any): MarketStatus {
  switch (object) {
    case 0:
    case "Unspecified":
      return MarketStatus.Unspecified;
    case 1:
    case "Active":
      return MarketStatus.Active;
    case 2:
    case "Paused":
      return MarketStatus.Paused;
    case 3:
    case "Demolished":
      return MarketStatus.Demolished;
    case 4:
    case "Expired":
      return MarketStatus.Expired;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MarketStatus.UNRECOGNIZED;
  }
}
export function marketStatusToJSON(object: MarketStatus): string {
  switch (object) {
    case MarketStatus.Unspecified:
      return "Unspecified";
    case MarketStatus.Active:
      return "Active";
    case MarketStatus.Paused:
      return "Paused";
    case MarketStatus.Demolished:
      return "Demolished";
    case MarketStatus.Expired:
      return "Expired";
    case MarketStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum OrderType {
  UNSPECIFIED = 0,
  BUY = 1,
  SELL = 2,
  STOP_BUY = 3,
  STOP_SELL = 4,
  TAKE_BUY = 5,
  TAKE_SELL = 6,
  BUY_PO = 7,
  SELL_PO = 8,
  BUY_ATOMIC = 9,
  SELL_ATOMIC = 10,
  UNRECOGNIZED = -1,
}
export const OrderTypeAmino = OrderType;
export function orderTypeFromJSON(object: any): OrderType {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return OrderType.UNSPECIFIED;
    case 1:
    case "BUY":
      return OrderType.BUY;
    case 2:
    case "SELL":
      return OrderType.SELL;
    case 3:
    case "STOP_BUY":
      return OrderType.STOP_BUY;
    case 4:
    case "STOP_SELL":
      return OrderType.STOP_SELL;
    case 5:
    case "TAKE_BUY":
      return OrderType.TAKE_BUY;
    case 6:
    case "TAKE_SELL":
      return OrderType.TAKE_SELL;
    case 7:
    case "BUY_PO":
      return OrderType.BUY_PO;
    case 8:
    case "SELL_PO":
      return OrderType.SELL_PO;
    case 9:
    case "BUY_ATOMIC":
      return OrderType.BUY_ATOMIC;
    case 10:
    case "SELL_ATOMIC":
      return OrderType.SELL_ATOMIC;
    case -1:
    case "UNRECOGNIZED":
    default:
      return OrderType.UNRECOGNIZED;
  }
}
export function orderTypeToJSON(object: OrderType): string {
  switch (object) {
    case OrderType.UNSPECIFIED:
      return "UNSPECIFIED";
    case OrderType.BUY:
      return "BUY";
    case OrderType.SELL:
      return "SELL";
    case OrderType.STOP_BUY:
      return "STOP_BUY";
    case OrderType.STOP_SELL:
      return "STOP_SELL";
    case OrderType.TAKE_BUY:
      return "TAKE_BUY";
    case OrderType.TAKE_SELL:
      return "TAKE_SELL";
    case OrderType.BUY_PO:
      return "BUY_PO";
    case OrderType.SELL_PO:
      return "SELL_PO";
    case OrderType.BUY_ATOMIC:
      return "BUY_ATOMIC";
    case OrderType.SELL_ATOMIC:
      return "SELL_ATOMIC";
    case OrderType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum ExecutionType {
  UnspecifiedExecutionType = 0,
  Market = 1,
  LimitFill = 2,
  LimitMatchRestingOrder = 3,
  LimitMatchNewOrder = 4,
  MarketLiquidation = 5,
  ExpiryMarketSettlement = 6,
  UNRECOGNIZED = -1,
}
export const ExecutionTypeAmino = ExecutionType;
export function executionTypeFromJSON(object: any): ExecutionType {
  switch (object) {
    case 0:
    case "UnspecifiedExecutionType":
      return ExecutionType.UnspecifiedExecutionType;
    case 1:
    case "Market":
      return ExecutionType.Market;
    case 2:
    case "LimitFill":
      return ExecutionType.LimitFill;
    case 3:
    case "LimitMatchRestingOrder":
      return ExecutionType.LimitMatchRestingOrder;
    case 4:
    case "LimitMatchNewOrder":
      return ExecutionType.LimitMatchNewOrder;
    case 5:
    case "MarketLiquidation":
      return ExecutionType.MarketLiquidation;
    case 6:
    case "ExpiryMarketSettlement":
      return ExecutionType.ExpiryMarketSettlement;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ExecutionType.UNRECOGNIZED;
  }
}
export function executionTypeToJSON(object: ExecutionType): string {
  switch (object) {
    case ExecutionType.UnspecifiedExecutionType:
      return "UnspecifiedExecutionType";
    case ExecutionType.Market:
      return "Market";
    case ExecutionType.LimitFill:
      return "LimitFill";
    case ExecutionType.LimitMatchRestingOrder:
      return "LimitMatchRestingOrder";
    case ExecutionType.LimitMatchNewOrder:
      return "LimitMatchNewOrder";
    case ExecutionType.MarketLiquidation:
      return "MarketLiquidation";
    case ExecutionType.ExpiryMarketSettlement:
      return "ExpiryMarketSettlement";
    case ExecutionType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum OrderMask {
  UNUSED = 0,
  ANY = 1,
  REGULAR = 2,
  CONDITIONAL = 4,
  DIRECTION_BUY_OR_HIGHER = 8,
  DIRECTION_SELL_OR_LOWER = 16,
  TYPE_MARKET = 32,
  TYPE_LIMIT = 64,
  UNRECOGNIZED = -1,
}
export const OrderMaskAmino = OrderMask;
export function orderMaskFromJSON(object: any): OrderMask {
  switch (object) {
    case 0:
    case "UNUSED":
      return OrderMask.UNUSED;
    case 1:
    case "ANY":
      return OrderMask.ANY;
    case 2:
    case "REGULAR":
      return OrderMask.REGULAR;
    case 4:
    case "CONDITIONAL":
      return OrderMask.CONDITIONAL;
    case 8:
    case "DIRECTION_BUY_OR_HIGHER":
      return OrderMask.DIRECTION_BUY_OR_HIGHER;
    case 16:
    case "DIRECTION_SELL_OR_LOWER":
      return OrderMask.DIRECTION_SELL_OR_LOWER;
    case 32:
    case "TYPE_MARKET":
      return OrderMask.TYPE_MARKET;
    case 64:
    case "TYPE_LIMIT":
      return OrderMask.TYPE_LIMIT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return OrderMask.UNRECOGNIZED;
  }
}
export function orderMaskToJSON(object: OrderMask): string {
  switch (object) {
    case OrderMask.UNUSED:
      return "UNUSED";
    case OrderMask.ANY:
      return "ANY";
    case OrderMask.REGULAR:
      return "REGULAR";
    case OrderMask.CONDITIONAL:
      return "CONDITIONAL";
    case OrderMask.DIRECTION_BUY_OR_HIGHER:
      return "DIRECTION_BUY_OR_HIGHER";
    case OrderMask.DIRECTION_SELL_OR_LOWER:
      return "DIRECTION_SELL_OR_LOWER";
    case OrderMask.TYPE_MARKET:
      return "TYPE_MARKET";
    case OrderMask.TYPE_LIMIT:
      return "TYPE_LIMIT";
    case OrderMask.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * @name Params
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.Params
 */
export interface Params {
  /**
   * spot_market_instant_listing_fee defines the expedited fee in INJ required
   * to create a spot market by bypassing governance
   */
  spotMarketInstantListingFee: Coin;
  /**
   * derivative_market_instant_listing_fee defines the expedited fee in INJ
   * required to create a derivative market by bypassing governance
   */
  derivativeMarketInstantListingFee: Coin;
  /**
   * default_spot_maker_fee defines the default exchange trade fee for makers on
   * a spot market
   */
  defaultSpotMakerFeeRate: string;
  /**
   * default_spot_taker_fee_rate defines the default exchange trade fee rate for
   * takers on a new spot market
   */
  defaultSpotTakerFeeRate: string;
  /**
   * default_derivative_maker_fee defines the default exchange trade fee for
   * makers on a new derivative market
   */
  defaultDerivativeMakerFeeRate: string;
  /**
   * default_derivative_taker_fee defines the default exchange trade fee for
   * takers on a new derivative market
   */
  defaultDerivativeTakerFeeRate: string;
  /**
   * default_initial_margin_ratio defines the default initial margin ratio on a
   * new derivative market
   */
  defaultInitialMarginRatio: string;
  /**
   * default_maintenance_margin_ratio defines the default maintenance margin
   * ratio on a new derivative market
   */
  defaultMaintenanceMarginRatio: string;
  /**
   * default_funding_interval defines the default funding interval on a
   * derivative market
   */
  defaultFundingInterval: bigint;
  /**
   * funding_multiple defines the timestamp multiple that the funding timestamp
   * should be a multiple of
   */
  fundingMultiple: bigint;
  /**
   * relayer_fee_share_rate defines the trade fee share percentage that goes to
   * relayers
   */
  relayerFeeShareRate: string;
  /**
   * default_hourly_funding_rate_cap defines the default maximum absolute value
   * of the hourly funding rate
   */
  defaultHourlyFundingRateCap: string;
  /**
   * hourly_interest_rate defines the hourly interest rate
   */
  defaultHourlyInterestRate: string;
  /**
   * max_derivative_order_side_count defines the maximum number of derivative
   * active orders a subaccount can have for a given orderbook side
   */
  maxDerivativeOrderSideCount: number;
  /**
   * inj_reward_staked_requirement_threshold defines the threshold on INJ
   * rewards after which one also needs staked INJ to receive more
   */
  injRewardStakedRequirementThreshold: string;
  /**
   * the trading_rewards_vesting_duration defines the vesting times for trading
   * rewards
   */
  tradingRewardsVestingDuration: bigint;
  /**
   * liquidator_reward_share_rate defines the ratio of the split of the surplus
   * collateral that goes to the liquidator
   */
  liquidatorRewardShareRate: string;
  /**
   * binary_options_market_instant_listing_fee defines the expedited fee in INJ
   * required to create a derivative market by bypassing governance
   */
  binaryOptionsMarketInstantListingFee: Coin;
  /**
   * atomic_market_order_access_level defines the required access permissions
   * for executing atomic market orders
   */
  atomicMarketOrderAccessLevel: AtomicMarketOrderAccessLevel;
  /**
   * spot_atomic_market_order_fee_multiplier defines the default multiplier for
   * executing atomic market orders in spot markets
   */
  spotAtomicMarketOrderFeeMultiplier: string;
  /**
   * derivative_atomic_market_order_fee_multiplier defines the default
   * multiplier for executing atomic market orders in derivative markets
   */
  derivativeAtomicMarketOrderFeeMultiplier: string;
  /**
   * binary_options_atomic_market_order_fee_multiplier defines the default
   * multiplier for executing atomic market orders in binary markets
   */
  binaryOptionsAtomicMarketOrderFeeMultiplier: string;
  /**
   * minimal_protocol_fee_rate defines the minimal protocol fee rate
   */
  minimalProtocolFeeRate: string;
  /**
   * is_instant_derivative_market_launch_enabled defines whether instant
   * derivative market launch is enabled
   */
  isInstantDerivativeMarketLaunchEnabled: boolean;
  postOnlyModeHeightThreshold: bigint;
  /**
   * Maximum time in seconds since the last mark price update to allow a
   * decrease in margin
   */
  marginDecreasePriceTimestampThresholdSeconds: bigint;
  /**
   * List of addresses that are allowed to perform exchange admin operations
   */
  exchangeAdmins: string[];
  /**
   * inj_auction_max_cap defines the maximum cap for INJ sent to auction
   */
  injAuctionMaxCap: string;
  /**
   * fixed_gas_enabled indicates if msg server will consume fixed gas amount for
   * certain msg types
   */
  fixedGasEnabled: boolean;
}
export interface ParamsProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.Params";
  value: Uint8Array;
}
/**
 * @name ParamsAmino
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.Params
 */
export interface ParamsAmino {
  /**
   * spot_market_instant_listing_fee defines the expedited fee in INJ required
   * to create a spot market by bypassing governance
   */
  spot_market_instant_listing_fee: CoinAmino;
  /**
   * derivative_market_instant_listing_fee defines the expedited fee in INJ
   * required to create a derivative market by bypassing governance
   */
  derivative_market_instant_listing_fee: CoinAmino;
  /**
   * default_spot_maker_fee defines the default exchange trade fee for makers on
   * a spot market
   */
  default_spot_maker_fee_rate: string;
  /**
   * default_spot_taker_fee_rate defines the default exchange trade fee rate for
   * takers on a new spot market
   */
  default_spot_taker_fee_rate: string;
  /**
   * default_derivative_maker_fee defines the default exchange trade fee for
   * makers on a new derivative market
   */
  default_derivative_maker_fee_rate: string;
  /**
   * default_derivative_taker_fee defines the default exchange trade fee for
   * takers on a new derivative market
   */
  default_derivative_taker_fee_rate: string;
  /**
   * default_initial_margin_ratio defines the default initial margin ratio on a
   * new derivative market
   */
  default_initial_margin_ratio: string;
  /**
   * default_maintenance_margin_ratio defines the default maintenance margin
   * ratio on a new derivative market
   */
  default_maintenance_margin_ratio: string;
  /**
   * default_funding_interval defines the default funding interval on a
   * derivative market
   */
  default_funding_interval: string;
  /**
   * funding_multiple defines the timestamp multiple that the funding timestamp
   * should be a multiple of
   */
  funding_multiple: string;
  /**
   * relayer_fee_share_rate defines the trade fee share percentage that goes to
   * relayers
   */
  relayer_fee_share_rate: string;
  /**
   * default_hourly_funding_rate_cap defines the default maximum absolute value
   * of the hourly funding rate
   */
  default_hourly_funding_rate_cap: string;
  /**
   * hourly_interest_rate defines the hourly interest rate
   */
  default_hourly_interest_rate: string;
  /**
   * max_derivative_order_side_count defines the maximum number of derivative
   * active orders a subaccount can have for a given orderbook side
   */
  max_derivative_order_side_count: number;
  /**
   * inj_reward_staked_requirement_threshold defines the threshold on INJ
   * rewards after which one also needs staked INJ to receive more
   */
  inj_reward_staked_requirement_threshold: string;
  /**
   * the trading_rewards_vesting_duration defines the vesting times for trading
   * rewards
   */
  trading_rewards_vesting_duration: string;
  /**
   * liquidator_reward_share_rate defines the ratio of the split of the surplus
   * collateral that goes to the liquidator
   */
  liquidator_reward_share_rate: string;
  /**
   * binary_options_market_instant_listing_fee defines the expedited fee in INJ
   * required to create a derivative market by bypassing governance
   */
  binary_options_market_instant_listing_fee: CoinAmino;
  /**
   * atomic_market_order_access_level defines the required access permissions
   * for executing atomic market orders
   */
  atomic_market_order_access_level: AtomicMarketOrderAccessLevel;
  /**
   * spot_atomic_market_order_fee_multiplier defines the default multiplier for
   * executing atomic market orders in spot markets
   */
  spot_atomic_market_order_fee_multiplier: string;
  /**
   * derivative_atomic_market_order_fee_multiplier defines the default
   * multiplier for executing atomic market orders in derivative markets
   */
  derivative_atomic_market_order_fee_multiplier: string;
  /**
   * binary_options_atomic_market_order_fee_multiplier defines the default
   * multiplier for executing atomic market orders in binary markets
   */
  binary_options_atomic_market_order_fee_multiplier: string;
  /**
   * minimal_protocol_fee_rate defines the minimal protocol fee rate
   */
  minimal_protocol_fee_rate: string;
  /**
   * is_instant_derivative_market_launch_enabled defines whether instant
   * derivative market launch is enabled
   */
  is_instant_derivative_market_launch_enabled: boolean;
  post_only_mode_height_threshold: string;
  /**
   * Maximum time in seconds since the last mark price update to allow a
   * decrease in margin
   */
  margin_decrease_price_timestamp_threshold_seconds: string;
  /**
   * List of addresses that are allowed to perform exchange admin operations
   */
  exchange_admins: string[];
  /**
   * inj_auction_max_cap defines the maximum cap for INJ sent to auction
   */
  inj_auction_max_cap: string;
  /**
   * fixed_gas_enabled indicates if msg server will consume fixed gas amount for
   * certain msg types
   */
  fixed_gas_enabled: boolean;
}
export interface ParamsAminoMsg {
  type: "exchange/Params";
  value: ParamsAmino;
}
/**
 * @name MarketFeeMultiplier
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.MarketFeeMultiplier
 */
export interface MarketFeeMultiplier {
  marketId: string;
  feeMultiplier: string;
}
export interface MarketFeeMultiplierProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.MarketFeeMultiplier";
  value: Uint8Array;
}
/**
 * @name MarketFeeMultiplierAmino
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.MarketFeeMultiplier
 */
export interface MarketFeeMultiplierAmino {
  market_id: string;
  fee_multiplier: string;
}
export interface MarketFeeMultiplierAminoMsg {
  type: "/injective.exchange.v1beta1.MarketFeeMultiplier";
  value: MarketFeeMultiplierAmino;
}
/**
 * An object describing a derivative market in the Injective Futures Protocol.
 * @name DerivativeMarket
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.DerivativeMarket
 */
export interface DerivativeMarket {
  /**
   * Ticker for the derivative contract.
   */
  ticker: string;
  /**
   * Oracle base currency
   */
  oracleBase: string;
  /**
   * Oracle quote currency
   */
  oracleQuote: string;
  /**
   * Oracle type
   */
  oracleType: OracleType;
  /**
   * Scale factor for oracle prices.
   */
  oracleScaleFactor: number;
  /**
   * Address of the quote currency denomination for the derivative contract
   */
  quoteDenom: string;
  /**
   * Unique market ID.
   */
  marketId: string;
  /**
   * initial_margin_ratio defines the initial margin ratio of a derivative
   * market
   */
  initialMarginRatio: string;
  /**
   * maintenance_margin_ratio defines the maintenance margin ratio of a
   * derivative market
   */
  maintenanceMarginRatio: string;
  /**
   * maker_fee_rate defines the maker fee rate of a derivative market
   */
  makerFeeRate: string;
  /**
   * taker_fee_rate defines the taker fee rate of a derivative market
   */
  takerFeeRate: string;
  /**
   * relayer_fee_share_rate defines the percentage of the transaction fee shared
   * with the relayer in a derivative market
   */
  relayerFeeShareRate: string;
  /**
   * true if the market is a perpetual market. false if the market is an expiry
   * futures market
   */
  isPerpetual: boolean;
  /**
   * Status of the market
   */
  status: MarketStatus;
  /**
   * min_price_tick_size defines the minimum tick size that the price and margin
   * required for orders in the market
   */
  minPriceTickSize: string;
  /**
   * min_quantity_tick_size defines the minimum tick size of the quantity
   * required for orders in the market
   */
  minQuantityTickSize: string;
  /**
   * min_notional defines the minimum notional (in quote asset) required for
   * orders in the market
   */
  minNotional: string;
  /**
   * current market admin
   */
  admin: string;
  /**
   * level of admin permissions
   */
  adminPermissions: number;
  /**
   * quote token decimals
   */
  quoteDecimals: number;
}
export interface DerivativeMarketProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.DerivativeMarket";
  value: Uint8Array;
}
/**
 * An object describing a derivative market in the Injective Futures Protocol.
 * @name DerivativeMarketAmino
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.DerivativeMarket
 */
export interface DerivativeMarketAmino {
  /**
   * Ticker for the derivative contract.
   */
  ticker: string;
  /**
   * Oracle base currency
   */
  oracle_base: string;
  /**
   * Oracle quote currency
   */
  oracle_quote: string;
  /**
   * Oracle type
   */
  oracle_type: OracleType;
  /**
   * Scale factor for oracle prices.
   */
  oracle_scale_factor: number;
  /**
   * Address of the quote currency denomination for the derivative contract
   */
  quote_denom: string;
  /**
   * Unique market ID.
   */
  market_id: string;
  /**
   * initial_margin_ratio defines the initial margin ratio of a derivative
   * market
   */
  initial_margin_ratio: string;
  /**
   * maintenance_margin_ratio defines the maintenance margin ratio of a
   * derivative market
   */
  maintenance_margin_ratio: string;
  /**
   * maker_fee_rate defines the maker fee rate of a derivative market
   */
  maker_fee_rate: string;
  /**
   * taker_fee_rate defines the taker fee rate of a derivative market
   */
  taker_fee_rate: string;
  /**
   * relayer_fee_share_rate defines the percentage of the transaction fee shared
   * with the relayer in a derivative market
   */
  relayer_fee_share_rate: string;
  /**
   * true if the market is a perpetual market. false if the market is an expiry
   * futures market
   */
  isPerpetual: boolean;
  /**
   * Status of the market
   */
  status: MarketStatus;
  /**
   * min_price_tick_size defines the minimum tick size that the price and margin
   * required for orders in the market
   */
  min_price_tick_size: string;
  /**
   * min_quantity_tick_size defines the minimum tick size of the quantity
   * required for orders in the market
   */
  min_quantity_tick_size: string;
  /**
   * min_notional defines the minimum notional (in quote asset) required for
   * orders in the market
   */
  min_notional: string;
  /**
   * current market admin
   */
  admin: string;
  /**
   * level of admin permissions
   */
  admin_permissions: number;
  /**
   * quote token decimals
   */
  quote_decimals: number;
}
export interface DerivativeMarketAminoMsg {
  type: "/injective.exchange.v1beta1.DerivativeMarket";
  value: DerivativeMarketAmino;
}
/**
 * An object describing a binary options market in Injective Protocol.
 * @name BinaryOptionsMarket
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.BinaryOptionsMarket
 */
export interface BinaryOptionsMarket {
  /**
   * Ticker for the derivative contract.
   */
  ticker: string;
  /**
   * Oracle symbol
   */
  oracleSymbol: string;
  /**
   * Oracle Provider
   */
  oracleProvider: string;
  /**
   * Oracle type
   */
  oracleType: OracleType;
  /**
   * Scale factor for oracle prices.
   */
  oracleScaleFactor: number;
  /**
   * expiration timestamp
   */
  expirationTimestamp: bigint;
  /**
   * expiration timestamp
   */
  settlementTimestamp: bigint;
  /**
   * admin of the market
   */
  admin: string;
  /**
   * Address of the quote currency denomination for the binary options contract
   */
  quoteDenom: string;
  /**
   * Unique market ID.
   */
  marketId: string;
  /**
   * maker_fee_rate defines the maker fee rate of a binary options market
   */
  makerFeeRate: string;
  /**
   * taker_fee_rate defines the taker fee rate of a derivative market
   */
  takerFeeRate: string;
  /**
   * relayer_fee_share_rate defines the percentage of the transaction fee shared
   * with the relayer in a derivative market
   */
  relayerFeeShareRate: string;
  /**
   * Status of the market
   */
  status: MarketStatus;
  /**
   * min_price_tick_size defines the minimum tick size that the price and margin
   * required for orders in the market
   */
  minPriceTickSize: string;
  /**
   * min_quantity_tick_size defines the minimum tick size of the quantity
   * required for orders in the market
   */
  minQuantityTickSize: string;
  settlementPrice?: string;
  /**
   * min_notional defines the minimum notional (in quote asset) required for
   * orders in the market
   */
  minNotional: string;
  /**
   * level of admin permissions
   */
  adminPermissions: number;
  /**
   * quote token decimals
   */
  quoteDecimals: number;
}
export interface BinaryOptionsMarketProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.BinaryOptionsMarket";
  value: Uint8Array;
}
/**
 * An object describing a binary options market in Injective Protocol.
 * @name BinaryOptionsMarketAmino
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.BinaryOptionsMarket
 */
export interface BinaryOptionsMarketAmino {
  /**
   * Ticker for the derivative contract.
   */
  ticker: string;
  /**
   * Oracle symbol
   */
  oracle_symbol: string;
  /**
   * Oracle Provider
   */
  oracle_provider: string;
  /**
   * Oracle type
   */
  oracle_type: OracleType;
  /**
   * Scale factor for oracle prices.
   */
  oracle_scale_factor: number;
  /**
   * expiration timestamp
   */
  expiration_timestamp: string;
  /**
   * expiration timestamp
   */
  settlement_timestamp: string;
  /**
   * admin of the market
   */
  admin: string;
  /**
   * Address of the quote currency denomination for the binary options contract
   */
  quote_denom: string;
  /**
   * Unique market ID.
   */
  market_id: string;
  /**
   * maker_fee_rate defines the maker fee rate of a binary options market
   */
  maker_fee_rate: string;
  /**
   * taker_fee_rate defines the taker fee rate of a derivative market
   */
  taker_fee_rate: string;
  /**
   * relayer_fee_share_rate defines the percentage of the transaction fee shared
   * with the relayer in a derivative market
   */
  relayer_fee_share_rate: string;
  /**
   * Status of the market
   */
  status: MarketStatus;
  /**
   * min_price_tick_size defines the minimum tick size that the price and margin
   * required for orders in the market
   */
  min_price_tick_size: string;
  /**
   * min_quantity_tick_size defines the minimum tick size of the quantity
   * required for orders in the market
   */
  min_quantity_tick_size: string;
  settlement_price?: string;
  /**
   * min_notional defines the minimum notional (in quote asset) required for
   * orders in the market
   */
  min_notional: string;
  /**
   * level of admin permissions
   */
  admin_permissions: number;
  /**
   * quote token decimals
   */
  quote_decimals: number;
}
export interface BinaryOptionsMarketAminoMsg {
  type: "/injective.exchange.v1beta1.BinaryOptionsMarket";
  value: BinaryOptionsMarketAmino;
}
/**
 * @name ExpiryFuturesMarketInfo
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.ExpiryFuturesMarketInfo
 */
export interface ExpiryFuturesMarketInfo {
  /**
   * market ID.
   */
  marketId: string;
  /**
   * expiration_timestamp defines the expiration time for a time expiry futures
   * market.
   */
  expirationTimestamp: bigint;
  /**
   * expiration_twap_start_timestamp defines the start time of the TWAP
   * calculation window
   */
  twapStartTimestamp: bigint;
  /**
   * expiration_twap_start_price_cumulative defines the cumulative price for the
   * start of the TWAP window
   */
  expirationTwapStartPriceCumulative: string;
  /**
   * settlement_price defines the settlement price for a time expiry futures
   * market.
   */
  settlementPrice: string;
}
export interface ExpiryFuturesMarketInfoProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.ExpiryFuturesMarketInfo";
  value: Uint8Array;
}
/**
 * @name ExpiryFuturesMarketInfoAmino
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.ExpiryFuturesMarketInfo
 */
export interface ExpiryFuturesMarketInfoAmino {
  /**
   * market ID.
   */
  market_id: string;
  /**
   * expiration_timestamp defines the expiration time for a time expiry futures
   * market.
   */
  expiration_timestamp: string;
  /**
   * expiration_twap_start_timestamp defines the start time of the TWAP
   * calculation window
   */
  twap_start_timestamp: string;
  /**
   * expiration_twap_start_price_cumulative defines the cumulative price for the
   * start of the TWAP window
   */
  expiration_twap_start_price_cumulative: string;
  /**
   * settlement_price defines the settlement price for a time expiry futures
   * market.
   */
  settlement_price: string;
}
export interface ExpiryFuturesMarketInfoAminoMsg {
  type: "/injective.exchange.v1beta1.ExpiryFuturesMarketInfo";
  value: ExpiryFuturesMarketInfoAmino;
}
/**
 * @name PerpetualMarketInfo
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.PerpetualMarketInfo
 */
export interface PerpetualMarketInfo {
  /**
   * market ID.
   */
  marketId: string;
  /**
   * hourly_funding_rate_cap defines the maximum absolute value of the hourly
   * funding rate
   */
  hourlyFundingRateCap: string;
  /**
   * hourly_interest_rate defines the hourly interest rate
   */
  hourlyInterestRate: string;
  /**
   * next_funding_timestamp defines the next funding timestamp in seconds of a
   * perpetual market
   */
  nextFundingTimestamp: bigint;
  /**
   * funding_interval defines the next funding interval in seconds of a
   * perpetual market.
   */
  fundingInterval: bigint;
}
export interface PerpetualMarketInfoProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.PerpetualMarketInfo";
  value: Uint8Array;
}
/**
 * @name PerpetualMarketInfoAmino
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.PerpetualMarketInfo
 */
export interface PerpetualMarketInfoAmino {
  /**
   * market ID.
   */
  market_id: string;
  /**
   * hourly_funding_rate_cap defines the maximum absolute value of the hourly
   * funding rate
   */
  hourly_funding_rate_cap: string;
  /**
   * hourly_interest_rate defines the hourly interest rate
   */
  hourly_interest_rate: string;
  /**
   * next_funding_timestamp defines the next funding timestamp in seconds of a
   * perpetual market
   */
  next_funding_timestamp: string;
  /**
   * funding_interval defines the next funding interval in seconds of a
   * perpetual market.
   */
  funding_interval: string;
}
export interface PerpetualMarketInfoAminoMsg {
  type: "/injective.exchange.v1beta1.PerpetualMarketInfo";
  value: PerpetualMarketInfoAmino;
}
/**
 * @name PerpetualMarketFunding
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.PerpetualMarketFunding
 */
export interface PerpetualMarketFunding {
  /**
   * cumulative_funding defines the cumulative funding of a perpetual market.
   */
  cumulativeFunding: string;
  /**
   * cumulative_price defines the cumulative price for the current hour up to
   * the last timestamp
   */
  cumulativePrice: string;
  lastTimestamp: bigint;
}
export interface PerpetualMarketFundingProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.PerpetualMarketFunding";
  value: Uint8Array;
}
/**
 * @name PerpetualMarketFundingAmino
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.PerpetualMarketFunding
 */
export interface PerpetualMarketFundingAmino {
  /**
   * cumulative_funding defines the cumulative funding of a perpetual market.
   */
  cumulative_funding: string;
  /**
   * cumulative_price defines the cumulative price for the current hour up to
   * the last timestamp
   */
  cumulative_price: string;
  last_timestamp: string;
}
export interface PerpetualMarketFundingAminoMsg {
  type: "/injective.exchange.v1beta1.PerpetualMarketFunding";
  value: PerpetualMarketFundingAmino;
}
/**
 * @name DerivativeMarketSettlementInfo
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.DerivativeMarketSettlementInfo
 */
export interface DerivativeMarketSettlementInfo {
  /**
   * market ID.
   */
  marketId: string;
  /**
   * settlement_price defines the settlement price
   */
  settlementPrice: string;
}
export interface DerivativeMarketSettlementInfoProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.DerivativeMarketSettlementInfo";
  value: Uint8Array;
}
/**
 * @name DerivativeMarketSettlementInfoAmino
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.DerivativeMarketSettlementInfo
 */
export interface DerivativeMarketSettlementInfoAmino {
  /**
   * market ID.
   */
  market_id: string;
  /**
   * settlement_price defines the settlement price
   */
  settlement_price: string;
}
export interface DerivativeMarketSettlementInfoAminoMsg {
  type: "/injective.exchange.v1beta1.DerivativeMarketSettlementInfo";
  value: DerivativeMarketSettlementInfoAmino;
}
/**
 * @name NextFundingTimestamp
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.NextFundingTimestamp
 */
export interface NextFundingTimestamp {
  nextTimestamp: bigint;
}
export interface NextFundingTimestampProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.NextFundingTimestamp";
  value: Uint8Array;
}
/**
 * @name NextFundingTimestampAmino
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.NextFundingTimestamp
 */
export interface NextFundingTimestampAmino {
  next_timestamp: string;
}
export interface NextFundingTimestampAminoMsg {
  type: "/injective.exchange.v1beta1.NextFundingTimestamp";
  value: NextFundingTimestampAmino;
}
/**
 * @name MidPriceAndTOB
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.MidPriceAndTOB
 */
export interface MidPriceAndTOB {
  /**
   * mid price of the market
   */
  midPrice?: string;
  /**
   * best buy price of the market
   */
  bestBuyPrice?: string;
  /**
   * best sell price of the market
   */
  bestSellPrice?: string;
}
export interface MidPriceAndTOBProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.MidPriceAndTOB";
  value: Uint8Array;
}
/**
 * @name MidPriceAndTOBAmino
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.MidPriceAndTOB
 */
export interface MidPriceAndTOBAmino {
  /**
   * mid price of the market
   */
  mid_price?: string;
  /**
   * best buy price of the market
   */
  best_buy_price?: string;
  /**
   * best sell price of the market
   */
  best_sell_price?: string;
}
export interface MidPriceAndTOBAminoMsg {
  type: "/injective.exchange.v1beta1.MidPriceAndTOB";
  value: MidPriceAndTOBAmino;
}
/**
 * An object describing trade pair of two assets.
 * @name SpotMarket
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.SpotMarket
 */
export interface SpotMarket {
  /**
   * A name of the pair in format AAA/BBB, where AAA is base asset, BBB is quote
   * asset.
   */
  ticker: string;
  /**
   * Coin denom used for the base asset
   */
  baseDenom: string;
  /**
   * Coin used for the quote asset
   */
  quoteDenom: string;
  /**
   * maker_fee_rate defines the fee percentage makers pay when trading
   */
  makerFeeRate: string;
  /**
   * taker_fee_rate defines the fee percentage takers pay when trading
   */
  takerFeeRate: string;
  /**
   * relayer_fee_share_rate defines the percentage of the transaction fee shared
   * with the relayer in a derivative market
   */
  relayerFeeShareRate: string;
  /**
   * Unique market ID.
   */
  marketId: string;
  /**
   * Status of the market
   */
  status: MarketStatus;
  /**
   * min_price_tick_size defines the minimum tick size that the price required
   * for orders in the market
   */
  minPriceTickSize: string;
  /**
   * min_quantity_tick_size defines the minimum tick size of the quantity
   * required for orders in the market
   */
  minQuantityTickSize: string;
  /**
   * min_notional defines the minimum notional (in quote asset) required for
   * orders in the market
   */
  minNotional: string;
  /**
   * current market admin
   */
  admin: string;
  /**
   * level of admin permissions
   */
  adminPermissions: number;
  /**
   * base token decimals
   */
  baseDecimals: number;
  /**
   * quote token decimals
   */
  quoteDecimals: number;
}
export interface SpotMarketProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.SpotMarket";
  value: Uint8Array;
}
/**
 * An object describing trade pair of two assets.
 * @name SpotMarketAmino
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.SpotMarket
 */
export interface SpotMarketAmino {
  /**
   * A name of the pair in format AAA/BBB, where AAA is base asset, BBB is quote
   * asset.
   */
  ticker: string;
  /**
   * Coin denom used for the base asset
   */
  base_denom: string;
  /**
   * Coin used for the quote asset
   */
  quote_denom: string;
  /**
   * maker_fee_rate defines the fee percentage makers pay when trading
   */
  maker_fee_rate: string;
  /**
   * taker_fee_rate defines the fee percentage takers pay when trading
   */
  taker_fee_rate: string;
  /**
   * relayer_fee_share_rate defines the percentage of the transaction fee shared
   * with the relayer in a derivative market
   */
  relayer_fee_share_rate: string;
  /**
   * Unique market ID.
   */
  market_id: string;
  /**
   * Status of the market
   */
  status: MarketStatus;
  /**
   * min_price_tick_size defines the minimum tick size that the price required
   * for orders in the market
   */
  min_price_tick_size: string;
  /**
   * min_quantity_tick_size defines the minimum tick size of the quantity
   * required for orders in the market
   */
  min_quantity_tick_size: string;
  /**
   * min_notional defines the minimum notional (in quote asset) required for
   * orders in the market
   */
  min_notional: string;
  /**
   * current market admin
   */
  admin: string;
  /**
   * level of admin permissions
   */
  admin_permissions: number;
  /**
   * base token decimals
   */
  base_decimals: number;
  /**
   * quote token decimals
   */
  quote_decimals: number;
}
export interface SpotMarketAminoMsg {
  type: "/injective.exchange.v1beta1.SpotMarket";
  value: SpotMarketAmino;
}
/**
 * A subaccount's deposit for a given base currency
 * @name Deposit
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.Deposit
 */
export interface Deposit {
  availableBalance: string;
  totalBalance: string;
}
export interface DepositProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.Deposit";
  value: Uint8Array;
}
/**
 * A subaccount's deposit for a given base currency
 * @name DepositAmino
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.Deposit
 */
export interface DepositAmino {
  available_balance: string;
  total_balance: string;
}
export interface DepositAminoMsg {
  type: "/injective.exchange.v1beta1.Deposit";
  value: DepositAmino;
}
/**
 * @name SubaccountTradeNonce
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.SubaccountTradeNonce
 */
export interface SubaccountTradeNonce {
  nonce: number;
}
export interface SubaccountTradeNonceProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.SubaccountTradeNonce";
  value: Uint8Array;
}
/**
 * @name SubaccountTradeNonceAmino
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.SubaccountTradeNonce
 */
export interface SubaccountTradeNonceAmino {
  nonce: number;
}
export interface SubaccountTradeNonceAminoMsg {
  type: "/injective.exchange.v1beta1.SubaccountTradeNonce";
  value: SubaccountTradeNonceAmino;
}
/**
 * @name OrderInfo
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.OrderInfo
 */
export interface OrderInfo {
  /**
   * bytes32 subaccount ID that created the order
   */
  subaccountId: string;
  /**
   * address fee_recipient address that will receive fees for the order
   */
  feeRecipient: string;
  /**
   * price of the order
   */
  price: string;
  /**
   * quantity of the order
   */
  quantity: string;
  cid: string;
}
export interface OrderInfoProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.OrderInfo";
  value: Uint8Array;
}
/**
 * @name OrderInfoAmino
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.OrderInfo
 */
export interface OrderInfoAmino {
  /**
   * bytes32 subaccount ID that created the order
   */
  subaccount_id: string;
  /**
   * address fee_recipient address that will receive fees for the order
   */
  fee_recipient: string;
  /**
   * price of the order
   */
  price: string;
  /**
   * quantity of the order
   */
  quantity: string;
  cid: string;
}
export interface OrderInfoAminoMsg {
  type: "/injective.exchange.v1beta1.OrderInfo";
  value: OrderInfoAmino;
}
/**
 * @name SpotOrder
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.SpotOrder
 */
export interface SpotOrder {
  /**
   * market_id represents the unique ID of the market
   */
  marketId: string;
  /**
   * order_info contains the information of the order
   */
  orderInfo: OrderInfo;
  /**
   * order types
   */
  orderType: OrderType;
  /**
   * trigger_price is the trigger price used by stop/take orders
   */
  triggerPrice?: string;
}
export interface SpotOrderProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.SpotOrder";
  value: Uint8Array;
}
/**
 * @name SpotOrderAmino
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.SpotOrder
 */
export interface SpotOrderAmino {
  /**
   * market_id represents the unique ID of the market
   */
  market_id: string;
  /**
   * order_info contains the information of the order
   */
  order_info: OrderInfoAmino;
  /**
   * order types
   */
  order_type: OrderType;
  /**
   * trigger_price is the trigger price used by stop/take orders
   */
  trigger_price?: string;
}
export interface SpotOrderAminoMsg {
  type: "/injective.exchange.v1beta1.SpotOrder";
  value: SpotOrderAmino;
}
/**
 * A valid Spot limit order with Metadata.
 * @name SpotLimitOrder
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.SpotLimitOrder
 */
export interface SpotLimitOrder {
  /**
   * order_info contains the information of the order
   */
  orderInfo: OrderInfo;
  /**
   * order types
   */
  orderType: OrderType;
  /**
   * the amount of the quantity remaining fillable
   */
  fillable: string;
  /**
   * trigger_price is the trigger price used by stop/take orders
   */
  triggerPrice?: string;
  orderHash: Uint8Array;
}
export interface SpotLimitOrderProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.SpotLimitOrder";
  value: Uint8Array;
}
/**
 * A valid Spot limit order with Metadata.
 * @name SpotLimitOrderAmino
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.SpotLimitOrder
 */
export interface SpotLimitOrderAmino {
  /**
   * order_info contains the information of the order
   */
  order_info: OrderInfoAmino;
  /**
   * order types
   */
  order_type: OrderType;
  /**
   * the amount of the quantity remaining fillable
   */
  fillable: string;
  /**
   * trigger_price is the trigger price used by stop/take orders
   */
  trigger_price?: string;
  order_hash: string;
}
export interface SpotLimitOrderAminoMsg {
  type: "/injective.exchange.v1beta1.SpotLimitOrder";
  value: SpotLimitOrderAmino;
}
/**
 * A valid Spot market order with Metadata.
 * @name SpotMarketOrder
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.SpotMarketOrder
 */
export interface SpotMarketOrder {
  /**
   * order_info contains the information of the order
   */
  orderInfo: OrderInfo;
  balanceHold: string;
  orderHash: Uint8Array;
  /**
   * order types
   */
  orderType: OrderType;
  /**
   * trigger_price is the trigger price used by stop/take orders
   */
  triggerPrice?: string;
}
export interface SpotMarketOrderProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.SpotMarketOrder";
  value: Uint8Array;
}
/**
 * A valid Spot market order with Metadata.
 * @name SpotMarketOrderAmino
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.SpotMarketOrder
 */
export interface SpotMarketOrderAmino {
  /**
   * order_info contains the information of the order
   */
  order_info: OrderInfoAmino;
  balance_hold: string;
  order_hash: string;
  /**
   * order types
   */
  order_type: OrderType;
  /**
   * trigger_price is the trigger price used by stop/take orders
   */
  trigger_price?: string;
}
export interface SpotMarketOrderAminoMsg {
  type: "/injective.exchange.v1beta1.SpotMarketOrder";
  value: SpotMarketOrderAmino;
}
/**
 * @name DerivativeOrder
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.DerivativeOrder
 */
export interface DerivativeOrder {
  /**
   * market_id represents the unique ID of the market
   */
  marketId: string;
  /**
   * order_info contains the information of the order
   */
  orderInfo: OrderInfo;
  /**
   * order types
   */
  orderType: OrderType;
  /**
   * margin is the margin used by the limit order
   */
  margin: string;
  /**
   * trigger_price is the trigger price used by stop/take orders
   */
  triggerPrice?: string;
}
export interface DerivativeOrderProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.DerivativeOrder";
  value: Uint8Array;
}
/**
 * @name DerivativeOrderAmino
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.DerivativeOrder
 */
export interface DerivativeOrderAmino {
  /**
   * market_id represents the unique ID of the market
   */
  market_id: string;
  /**
   * order_info contains the information of the order
   */
  order_info: OrderInfoAmino;
  /**
   * order types
   */
  order_type: OrderType;
  /**
   * margin is the margin used by the limit order
   */
  margin: string;
  /**
   * trigger_price is the trigger price used by stop/take orders
   */
  trigger_price?: string;
}
export interface DerivativeOrderAminoMsg {
  type: "/injective.exchange.v1beta1.DerivativeOrder";
  value: DerivativeOrderAmino;
}
/**
 * @name SubaccountOrderbookMetadata
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.SubaccountOrderbookMetadata
 */
export interface SubaccountOrderbookMetadata {
  vanillaLimitOrderCount: number;
  reduceOnlyLimitOrderCount: number;
  /**
   * AggregateReduceOnlyQuantity is the aggregate fillable quantity of the
   * subaccount's reduce-only limit orders in the given direction.
   */
  aggregateReduceOnlyQuantity: string;
  /**
   * AggregateVanillaQuantity is the aggregate fillable quantity of the
   * subaccount's vanilla limit orders in the given direction.
   */
  aggregateVanillaQuantity: string;
  vanillaConditionalOrderCount: number;
  reduceOnlyConditionalOrderCount: number;
}
export interface SubaccountOrderbookMetadataProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.SubaccountOrderbookMetadata";
  value: Uint8Array;
}
/**
 * @name SubaccountOrderbookMetadataAmino
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.SubaccountOrderbookMetadata
 */
export interface SubaccountOrderbookMetadataAmino {
  vanilla_limit_order_count: number;
  reduce_only_limit_order_count: number;
  /**
   * AggregateReduceOnlyQuantity is the aggregate fillable quantity of the
   * subaccount's reduce-only limit orders in the given direction.
   */
  aggregate_reduce_only_quantity: string;
  /**
   * AggregateVanillaQuantity is the aggregate fillable quantity of the
   * subaccount's vanilla limit orders in the given direction.
   */
  aggregate_vanilla_quantity: string;
  vanilla_conditional_order_count: number;
  reduce_only_conditional_order_count: number;
}
export interface SubaccountOrderbookMetadataAminoMsg {
  type: "/injective.exchange.v1beta1.SubaccountOrderbookMetadata";
  value: SubaccountOrderbookMetadataAmino;
}
/**
 * @name SubaccountOrder
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.SubaccountOrder
 */
export interface SubaccountOrder {
  /**
   * price of the order
   */
  price: string;
  /**
   * the amount of the quantity remaining fillable
   */
  quantity: string;
  isReduceOnly: boolean;
  cid: string;
}
export interface SubaccountOrderProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.SubaccountOrder";
  value: Uint8Array;
}
/**
 * @name SubaccountOrderAmino
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.SubaccountOrder
 */
export interface SubaccountOrderAmino {
  /**
   * price of the order
   */
  price: string;
  /**
   * the amount of the quantity remaining fillable
   */
  quantity: string;
  isReduceOnly: boolean;
  cid: string;
}
export interface SubaccountOrderAminoMsg {
  type: "/injective.exchange.v1beta1.SubaccountOrder";
  value: SubaccountOrderAmino;
}
/**
 * @name SubaccountOrderData
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.SubaccountOrderData
 */
export interface SubaccountOrderData {
  order?: SubaccountOrder;
  orderHash: Uint8Array;
}
export interface SubaccountOrderDataProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.SubaccountOrderData";
  value: Uint8Array;
}
/**
 * @name SubaccountOrderDataAmino
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.SubaccountOrderData
 */
export interface SubaccountOrderDataAmino {
  order?: SubaccountOrderAmino;
  order_hash: string;
}
export interface SubaccountOrderDataAminoMsg {
  type: "/injective.exchange.v1beta1.SubaccountOrderData";
  value: SubaccountOrderDataAmino;
}
/**
 * A valid Derivative limit order with Metadata.
 * @name DerivativeLimitOrder
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.DerivativeLimitOrder
 */
export interface DerivativeLimitOrder {
  /**
   * order_info contains the information of the order
   */
  orderInfo: OrderInfo;
  /**
   * order types
   */
  orderType: OrderType;
  /**
   * margin is the margin used by the limit order
   */
  margin: string;
  /**
   * the amount of the quantity remaining fillable
   */
  fillable: string;
  /**
   * trigger_price is the trigger price used by stop/take orders
   */
  triggerPrice?: string;
  orderHash: Uint8Array;
}
export interface DerivativeLimitOrderProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.DerivativeLimitOrder";
  value: Uint8Array;
}
/**
 * A valid Derivative limit order with Metadata.
 * @name DerivativeLimitOrderAmino
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.DerivativeLimitOrder
 */
export interface DerivativeLimitOrderAmino {
  /**
   * order_info contains the information of the order
   */
  order_info: OrderInfoAmino;
  /**
   * order types
   */
  order_type: OrderType;
  /**
   * margin is the margin used by the limit order
   */
  margin: string;
  /**
   * the amount of the quantity remaining fillable
   */
  fillable: string;
  /**
   * trigger_price is the trigger price used by stop/take orders
   */
  trigger_price?: string;
  order_hash: string;
}
export interface DerivativeLimitOrderAminoMsg {
  type: "/injective.exchange.v1beta1.DerivativeLimitOrder";
  value: DerivativeLimitOrderAmino;
}
/**
 * A valid Derivative market order with Metadata.
 * @name DerivativeMarketOrder
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.DerivativeMarketOrder
 */
export interface DerivativeMarketOrder {
  /**
   * order_info contains the information of the order
   */
  orderInfo: OrderInfo;
  /**
   * order types
   */
  orderType: OrderType;
  margin: string;
  marginHold: string;
  /**
   * trigger_price is the trigger price used by stop/take orders
   */
  triggerPrice?: string;
  orderHash: Uint8Array;
}
export interface DerivativeMarketOrderProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.DerivativeMarketOrder";
  value: Uint8Array;
}
/**
 * A valid Derivative market order with Metadata.
 * @name DerivativeMarketOrderAmino
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.DerivativeMarketOrder
 */
export interface DerivativeMarketOrderAmino {
  /**
   * order_info contains the information of the order
   */
  order_info: OrderInfoAmino;
  /**
   * order types
   */
  order_type: OrderType;
  margin: string;
  margin_hold: string;
  /**
   * trigger_price is the trigger price used by stop/take orders
   */
  trigger_price?: string;
  order_hash: string;
}
export interface DerivativeMarketOrderAminoMsg {
  type: "/injective.exchange.v1beta1.DerivativeMarketOrder";
  value: DerivativeMarketOrderAmino;
}
/**
 * @name Position
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.Position
 */
export interface Position {
  isLong: boolean;
  quantity: string;
  entryPrice: string;
  margin: string;
  cumulativeFundingEntry: string;
}
export interface PositionProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.Position";
  value: Uint8Array;
}
/**
 * @name PositionAmino
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.Position
 */
export interface PositionAmino {
  isLong: boolean;
  quantity: string;
  entry_price: string;
  margin: string;
  cumulative_funding_entry: string;
}
export interface PositionAminoMsg {
  type: "/injective.exchange.v1beta1.Position";
  value: PositionAmino;
}
/**
 * @name MarketOrderIndicator
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.MarketOrderIndicator
 */
export interface MarketOrderIndicator {
  /**
   * market_id represents the unique ID of the market
   */
  marketId: string;
  isBuy: boolean;
}
export interface MarketOrderIndicatorProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.MarketOrderIndicator";
  value: Uint8Array;
}
/**
 * @name MarketOrderIndicatorAmino
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.MarketOrderIndicator
 */
export interface MarketOrderIndicatorAmino {
  /**
   * market_id represents the unique ID of the market
   */
  market_id: string;
  isBuy: boolean;
}
export interface MarketOrderIndicatorAminoMsg {
  type: "/injective.exchange.v1beta1.MarketOrderIndicator";
  value: MarketOrderIndicatorAmino;
}
/**
 * @name TradeLog
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.TradeLog
 */
export interface TradeLog {
  quantity: string;
  price: string;
  /**
   * bytes32 subaccount ID that executed the trade
   */
  subaccountId: Uint8Array;
  fee: string;
  orderHash: Uint8Array;
  feeRecipientAddress?: Uint8Array;
  cid: string;
}
export interface TradeLogProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.TradeLog";
  value: Uint8Array;
}
/**
 * @name TradeLogAmino
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.TradeLog
 */
export interface TradeLogAmino {
  quantity: string;
  price: string;
  /**
   * bytes32 subaccount ID that executed the trade
   */
  subaccount_id: string;
  fee: string;
  order_hash: string;
  fee_recipient_address?: string;
  cid: string;
}
export interface TradeLogAminoMsg {
  type: "/injective.exchange.v1beta1.TradeLog";
  value: TradeLogAmino;
}
/**
 * @name PositionDelta
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.PositionDelta
 */
export interface PositionDelta {
  isLong: boolean;
  executionQuantity: string;
  executionMargin: string;
  executionPrice: string;
}
export interface PositionDeltaProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.PositionDelta";
  value: Uint8Array;
}
/**
 * @name PositionDeltaAmino
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.PositionDelta
 */
export interface PositionDeltaAmino {
  is_long: boolean;
  execution_quantity: string;
  execution_margin: string;
  execution_price: string;
}
export interface PositionDeltaAminoMsg {
  type: "/injective.exchange.v1beta1.PositionDelta";
  value: PositionDeltaAmino;
}
/**
 * @name DerivativeTradeLog
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.DerivativeTradeLog
 */
export interface DerivativeTradeLog {
  subaccountId: Uint8Array;
  positionDelta?: PositionDelta;
  payout: string;
  fee: string;
  orderHash: Uint8Array;
  feeRecipientAddress?: Uint8Array;
  cid: string;
  pnl: string;
}
export interface DerivativeTradeLogProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.DerivativeTradeLog";
  value: Uint8Array;
}
/**
 * @name DerivativeTradeLogAmino
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.DerivativeTradeLog
 */
export interface DerivativeTradeLogAmino {
  subaccount_id: string;
  position_delta?: PositionDeltaAmino;
  payout: string;
  fee: string;
  order_hash: string;
  fee_recipient_address?: string;
  cid: string;
  pnl: string;
}
export interface DerivativeTradeLogAminoMsg {
  type: "/injective.exchange.v1beta1.DerivativeTradeLog";
  value: DerivativeTradeLogAmino;
}
/**
 * @name SubaccountPosition
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.SubaccountPosition
 */
export interface SubaccountPosition {
  position?: Position;
  subaccountId: Uint8Array;
}
export interface SubaccountPositionProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.SubaccountPosition";
  value: Uint8Array;
}
/**
 * @name SubaccountPositionAmino
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.SubaccountPosition
 */
export interface SubaccountPositionAmino {
  position?: PositionAmino;
  subaccount_id: string;
}
export interface SubaccountPositionAminoMsg {
  type: "/injective.exchange.v1beta1.SubaccountPosition";
  value: SubaccountPositionAmino;
}
/**
 * @name SubaccountDeposit
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.SubaccountDeposit
 */
export interface SubaccountDeposit {
  subaccountId: Uint8Array;
  deposit?: Deposit;
}
export interface SubaccountDepositProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.SubaccountDeposit";
  value: Uint8Array;
}
/**
 * @name SubaccountDepositAmino
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.SubaccountDeposit
 */
export interface SubaccountDepositAmino {
  subaccount_id: string;
  deposit?: DepositAmino;
}
export interface SubaccountDepositAminoMsg {
  type: "/injective.exchange.v1beta1.SubaccountDeposit";
  value: SubaccountDepositAmino;
}
/**
 * @name DepositUpdate
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.DepositUpdate
 */
export interface DepositUpdate {
  denom: string;
  deposits: SubaccountDeposit[];
}
export interface DepositUpdateProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.DepositUpdate";
  value: Uint8Array;
}
/**
 * @name DepositUpdateAmino
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.DepositUpdate
 */
export interface DepositUpdateAmino {
  denom: string;
  deposits: SubaccountDepositAmino[];
}
export interface DepositUpdateAminoMsg {
  type: "/injective.exchange.v1beta1.DepositUpdate";
  value: DepositUpdateAmino;
}
/**
 * @name PointsMultiplier
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.PointsMultiplier
 */
export interface PointsMultiplier {
  makerPointsMultiplier: string;
  takerPointsMultiplier: string;
}
export interface PointsMultiplierProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.PointsMultiplier";
  value: Uint8Array;
}
/**
 * @name PointsMultiplierAmino
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.PointsMultiplier
 */
export interface PointsMultiplierAmino {
  maker_points_multiplier: string;
  taker_points_multiplier: string;
}
export interface PointsMultiplierAminoMsg {
  type: "/injective.exchange.v1beta1.PointsMultiplier";
  value: PointsMultiplierAmino;
}
/**
 * @name TradingRewardCampaignBoostInfo
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.TradingRewardCampaignBoostInfo
 */
export interface TradingRewardCampaignBoostInfo {
  boostedSpotMarketIds: string[];
  spotMarketMultipliers: PointsMultiplier[];
  boostedDerivativeMarketIds: string[];
  derivativeMarketMultipliers: PointsMultiplier[];
}
export interface TradingRewardCampaignBoostInfoProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.TradingRewardCampaignBoostInfo";
  value: Uint8Array;
}
/**
 * @name TradingRewardCampaignBoostInfoAmino
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.TradingRewardCampaignBoostInfo
 */
export interface TradingRewardCampaignBoostInfoAmino {
  boosted_spot_market_ids: string[];
  spot_market_multipliers: PointsMultiplierAmino[];
  boosted_derivative_market_ids: string[];
  derivative_market_multipliers: PointsMultiplierAmino[];
}
export interface TradingRewardCampaignBoostInfoAminoMsg {
  type: "/injective.exchange.v1beta1.TradingRewardCampaignBoostInfo";
  value: TradingRewardCampaignBoostInfoAmino;
}
/**
 * @name CampaignRewardPool
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.CampaignRewardPool
 */
export interface CampaignRewardPool {
  startTimestamp: bigint;
  /**
   * max_campaign_rewards are the maximum reward amounts to be disbursed at the
   * end of the campaign
   */
  maxCampaignRewards: Coin[];
}
export interface CampaignRewardPoolProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.CampaignRewardPool";
  value: Uint8Array;
}
/**
 * @name CampaignRewardPoolAmino
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.CampaignRewardPool
 */
export interface CampaignRewardPoolAmino {
  start_timestamp: string;
  /**
   * max_campaign_rewards are the maximum reward amounts to be disbursed at the
   * end of the campaign
   */
  max_campaign_rewards: CoinAmino[];
}
export interface CampaignRewardPoolAminoMsg {
  type: "/injective.exchange.v1beta1.CampaignRewardPool";
  value: CampaignRewardPoolAmino;
}
/**
 * @name TradingRewardCampaignInfo
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.TradingRewardCampaignInfo
 */
export interface TradingRewardCampaignInfo {
  /**
   * number of seconds of the duration of each campaign
   */
  campaignDurationSeconds: bigint;
  /**
   * the trading fee quote denoms which will be counted for the rewards
   */
  quoteDenoms: string[];
  /**
   * the optional boost info for markets
   */
  tradingRewardBoostInfo?: TradingRewardCampaignBoostInfo;
  /**
   * the marketIDs which are disqualified from being rewarded
   */
  disqualifiedMarketIds: string[];
}
export interface TradingRewardCampaignInfoProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.TradingRewardCampaignInfo";
  value: Uint8Array;
}
/**
 * @name TradingRewardCampaignInfoAmino
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.TradingRewardCampaignInfo
 */
export interface TradingRewardCampaignInfoAmino {
  /**
   * number of seconds of the duration of each campaign
   */
  campaign_duration_seconds: string;
  /**
   * the trading fee quote denoms which will be counted for the rewards
   */
  quote_denoms: string[];
  /**
   * the optional boost info for markets
   */
  trading_reward_boost_info?: TradingRewardCampaignBoostInfoAmino;
  /**
   * the marketIDs which are disqualified from being rewarded
   */
  disqualified_market_ids: string[];
}
export interface TradingRewardCampaignInfoAminoMsg {
  type: "/injective.exchange.v1beta1.TradingRewardCampaignInfo";
  value: TradingRewardCampaignInfoAmino;
}
/**
 * @name FeeDiscountTierInfo
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.FeeDiscountTierInfo
 */
export interface FeeDiscountTierInfo {
  makerDiscountRate: string;
  takerDiscountRate: string;
  stakedAmount: string;
  volume: string;
}
export interface FeeDiscountTierInfoProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.FeeDiscountTierInfo";
  value: Uint8Array;
}
/**
 * @name FeeDiscountTierInfoAmino
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.FeeDiscountTierInfo
 */
export interface FeeDiscountTierInfoAmino {
  maker_discount_rate: string;
  taker_discount_rate: string;
  staked_amount: string;
  volume: string;
}
export interface FeeDiscountTierInfoAminoMsg {
  type: "/injective.exchange.v1beta1.FeeDiscountTierInfo";
  value: FeeDiscountTierInfoAmino;
}
/**
 * @name FeeDiscountSchedule
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.FeeDiscountSchedule
 */
export interface FeeDiscountSchedule {
  bucketCount: bigint;
  bucketDuration: bigint;
  /**
   * the trading fee quote denoms which will be counted for the fee paid
   * contribution
   */
  quoteDenoms: string[];
  /**
   * the fee discount tiers
   */
  tierInfos: FeeDiscountTierInfo[];
  /**
   * the marketIDs which are disqualified from contributing to the fee paid
   * amount
   */
  disqualifiedMarketIds: string[];
}
export interface FeeDiscountScheduleProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.FeeDiscountSchedule";
  value: Uint8Array;
}
/**
 * @name FeeDiscountScheduleAmino
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.FeeDiscountSchedule
 */
export interface FeeDiscountScheduleAmino {
  bucket_count: string;
  bucket_duration: string;
  /**
   * the trading fee quote denoms which will be counted for the fee paid
   * contribution
   */
  quote_denoms: string[];
  /**
   * the fee discount tiers
   */
  tier_infos: FeeDiscountTierInfoAmino[];
  /**
   * the marketIDs which are disqualified from contributing to the fee paid
   * amount
   */
  disqualified_market_ids: string[];
}
export interface FeeDiscountScheduleAminoMsg {
  type: "/injective.exchange.v1beta1.FeeDiscountSchedule";
  value: FeeDiscountScheduleAmino;
}
/**
 * @name FeeDiscountTierTTL
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.FeeDiscountTierTTL
 */
export interface FeeDiscountTierTTL {
  tier: bigint;
  ttlTimestamp: bigint;
}
export interface FeeDiscountTierTTLProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.FeeDiscountTierTTL";
  value: Uint8Array;
}
/**
 * @name FeeDiscountTierTTLAmino
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.FeeDiscountTierTTL
 */
export interface FeeDiscountTierTTLAmino {
  tier: string;
  ttl_timestamp: string;
}
export interface FeeDiscountTierTTLAminoMsg {
  type: "/injective.exchange.v1beta1.FeeDiscountTierTTL";
  value: FeeDiscountTierTTLAmino;
}
/**
 * @name VolumeRecord
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.VolumeRecord
 */
export interface VolumeRecord {
  makerVolume: string;
  takerVolume: string;
}
export interface VolumeRecordProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.VolumeRecord";
  value: Uint8Array;
}
/**
 * @name VolumeRecordAmino
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.VolumeRecord
 */
export interface VolumeRecordAmino {
  maker_volume: string;
  taker_volume: string;
}
export interface VolumeRecordAminoMsg {
  type: "/injective.exchange.v1beta1.VolumeRecord";
  value: VolumeRecordAmino;
}
/**
 * @name AccountRewards
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.AccountRewards
 */
export interface AccountRewards {
  account: string;
  rewards: Coin[];
}
export interface AccountRewardsProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.AccountRewards";
  value: Uint8Array;
}
/**
 * @name AccountRewardsAmino
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.AccountRewards
 */
export interface AccountRewardsAmino {
  account: string;
  rewards: CoinAmino[];
}
export interface AccountRewardsAminoMsg {
  type: "/injective.exchange.v1beta1.AccountRewards";
  value: AccountRewardsAmino;
}
/**
 * @name TradeRecords
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.TradeRecords
 */
export interface TradeRecords {
  marketId: string;
  latestTradeRecords: TradeRecord[];
}
export interface TradeRecordsProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.TradeRecords";
  value: Uint8Array;
}
/**
 * @name TradeRecordsAmino
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.TradeRecords
 */
export interface TradeRecordsAmino {
  market_id: string;
  latest_trade_records: TradeRecordAmino[];
}
export interface TradeRecordsAminoMsg {
  type: "/injective.exchange.v1beta1.TradeRecords";
  value: TradeRecordsAmino;
}
/**
 * @name SubaccountIDs
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.SubaccountIDs
 */
export interface SubaccountIDs {
  subaccountIds: Uint8Array[];
}
export interface SubaccountIDsProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.SubaccountIDs";
  value: Uint8Array;
}
/**
 * @name SubaccountIDsAmino
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.SubaccountIDs
 */
export interface SubaccountIDsAmino {
  subaccount_ids: string[];
}
export interface SubaccountIDsAminoMsg {
  type: "/injective.exchange.v1beta1.SubaccountIDs";
  value: SubaccountIDsAmino;
}
/**
 * @name TradeRecord
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.TradeRecord
 */
export interface TradeRecord {
  timestamp: bigint;
  price: string;
  quantity: string;
}
export interface TradeRecordProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.TradeRecord";
  value: Uint8Array;
}
/**
 * @name TradeRecordAmino
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.TradeRecord
 */
export interface TradeRecordAmino {
  timestamp: string;
  price: string;
  quantity: string;
}
export interface TradeRecordAminoMsg {
  type: "/injective.exchange.v1beta1.TradeRecord";
  value: TradeRecordAmino;
}
/**
 * @name Level
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.Level
 */
export interface Level {
  /**
   * price
   */
  p: string;
  /**
   * quantity
   */
  q: string;
}
export interface LevelProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.Level";
  value: Uint8Array;
}
/**
 * @name LevelAmino
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.Level
 */
export interface LevelAmino {
  /**
   * price
   */
  p: string;
  /**
   * quantity
   */
  q: string;
}
export interface LevelAminoMsg {
  type: "/injective.exchange.v1beta1.Level";
  value: LevelAmino;
}
/**
 * @name AggregateSubaccountVolumeRecord
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.AggregateSubaccountVolumeRecord
 */
export interface AggregateSubaccountVolumeRecord {
  subaccountId: string;
  marketVolumes: MarketVolume[];
}
export interface AggregateSubaccountVolumeRecordProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.AggregateSubaccountVolumeRecord";
  value: Uint8Array;
}
/**
 * @name AggregateSubaccountVolumeRecordAmino
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.AggregateSubaccountVolumeRecord
 */
export interface AggregateSubaccountVolumeRecordAmino {
  subaccount_id: string;
  market_volumes: MarketVolumeAmino[];
}
export interface AggregateSubaccountVolumeRecordAminoMsg {
  type: "/injective.exchange.v1beta1.AggregateSubaccountVolumeRecord";
  value: AggregateSubaccountVolumeRecordAmino;
}
/**
 * @name AggregateAccountVolumeRecord
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.AggregateAccountVolumeRecord
 */
export interface AggregateAccountVolumeRecord {
  account: string;
  marketVolumes: MarketVolume[];
}
export interface AggregateAccountVolumeRecordProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.AggregateAccountVolumeRecord";
  value: Uint8Array;
}
/**
 * @name AggregateAccountVolumeRecordAmino
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.AggregateAccountVolumeRecord
 */
export interface AggregateAccountVolumeRecordAmino {
  account: string;
  market_volumes: MarketVolumeAmino[];
}
export interface AggregateAccountVolumeRecordAminoMsg {
  type: "/injective.exchange.v1beta1.AggregateAccountVolumeRecord";
  value: AggregateAccountVolumeRecordAmino;
}
/**
 * @name MarketVolume
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.MarketVolume
 */
export interface MarketVolume {
  marketId: string;
  volume: VolumeRecord;
}
export interface MarketVolumeProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.MarketVolume";
  value: Uint8Array;
}
/**
 * @name MarketVolumeAmino
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.MarketVolume
 */
export interface MarketVolumeAmino {
  market_id: string;
  volume: VolumeRecordAmino;
}
export interface MarketVolumeAminoMsg {
  type: "/injective.exchange.v1beta1.MarketVolume";
  value: MarketVolumeAmino;
}
/**
 * @name DenomDecimals
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.DenomDecimals
 */
export interface DenomDecimals {
  denom: string;
  decimals: bigint;
}
export interface DenomDecimalsProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.DenomDecimals";
  value: Uint8Array;
}
/**
 * @name DenomDecimalsAmino
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.DenomDecimals
 */
export interface DenomDecimalsAmino {
  denom: string;
  decimals: string;
}
export interface DenomDecimalsAminoMsg {
  type: "/injective.exchange.v1beta1.DenomDecimals";
  value: DenomDecimalsAmino;
}
/**
 * @name GrantAuthorization
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.GrantAuthorization
 */
export interface GrantAuthorization {
  grantee: string;
  amount: string;
}
export interface GrantAuthorizationProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.GrantAuthorization";
  value: Uint8Array;
}
/**
 * @name GrantAuthorizationAmino
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.GrantAuthorization
 */
export interface GrantAuthorizationAmino {
  grantee: string;
  amount: string;
}
export interface GrantAuthorizationAminoMsg {
  type: "/injective.exchange.v1beta1.GrantAuthorization";
  value: GrantAuthorizationAmino;
}
/**
 * @name ActiveGrant
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.ActiveGrant
 */
export interface ActiveGrant {
  granter: string;
  amount: string;
}
export interface ActiveGrantProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.ActiveGrant";
  value: Uint8Array;
}
/**
 * @name ActiveGrantAmino
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.ActiveGrant
 */
export interface ActiveGrantAmino {
  granter: string;
  amount: string;
}
export interface ActiveGrantAminoMsg {
  type: "/injective.exchange.v1beta1.ActiveGrant";
  value: ActiveGrantAmino;
}
/**
 * @name EffectiveGrant
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.EffectiveGrant
 */
export interface EffectiveGrant {
  granter: string;
  netGrantedStake: string;
  isValid: boolean;
}
export interface EffectiveGrantProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.EffectiveGrant";
  value: Uint8Array;
}
/**
 * @name EffectiveGrantAmino
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.EffectiveGrant
 */
export interface EffectiveGrantAmino {
  granter: string;
  net_granted_stake: string;
  is_valid: boolean;
}
export interface EffectiveGrantAminoMsg {
  type: "/injective.exchange.v1beta1.EffectiveGrant";
  value: EffectiveGrantAmino;
}
/**
 * @name DenomMinNotional
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.DenomMinNotional
 */
export interface DenomMinNotional {
  denom: string;
  minNotional: string;
}
export interface DenomMinNotionalProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.DenomMinNotional";
  value: Uint8Array;
}
/**
 * @name DenomMinNotionalAmino
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.DenomMinNotional
 */
export interface DenomMinNotionalAmino {
  denom: string;
  min_notional: string;
}
export interface DenomMinNotionalAminoMsg {
  type: "/injective.exchange.v1beta1.DenomMinNotional";
  value: DenomMinNotionalAmino;
}
function createBaseParams(): Params {
  return {
    spotMarketInstantListingFee: Coin.fromPartial({}),
    derivativeMarketInstantListingFee: Coin.fromPartial({}),
    defaultSpotMakerFeeRate: "",
    defaultSpotTakerFeeRate: "",
    defaultDerivativeMakerFeeRate: "",
    defaultDerivativeTakerFeeRate: "",
    defaultInitialMarginRatio: "",
    defaultMaintenanceMarginRatio: "",
    defaultFundingInterval: BigInt(0),
    fundingMultiple: BigInt(0),
    relayerFeeShareRate: "",
    defaultHourlyFundingRateCap: "",
    defaultHourlyInterestRate: "",
    maxDerivativeOrderSideCount: 0,
    injRewardStakedRequirementThreshold: "",
    tradingRewardsVestingDuration: BigInt(0),
    liquidatorRewardShareRate: "",
    binaryOptionsMarketInstantListingFee: Coin.fromPartial({}),
    atomicMarketOrderAccessLevel: 0,
    spotAtomicMarketOrderFeeMultiplier: "",
    derivativeAtomicMarketOrderFeeMultiplier: "",
    binaryOptionsAtomicMarketOrderFeeMultiplier: "",
    minimalProtocolFeeRate: "",
    isInstantDerivativeMarketLaunchEnabled: false,
    postOnlyModeHeightThreshold: BigInt(0),
    marginDecreasePriceTimestampThresholdSeconds: BigInt(0),
    exchangeAdmins: [],
    injAuctionMaxCap: "",
    fixedGasEnabled: false
  };
}
/**
 * @name Params
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.Params
 */
export const Params = {
  typeUrl: "/injective.exchange.v1beta1.Params",
  aminoType: "exchange/Params",
  is(o: any): o is Params {
    return o && (o.$typeUrl === Params.typeUrl || Coin.is(o.spotMarketInstantListingFee) && Coin.is(o.derivativeMarketInstantListingFee) && typeof o.defaultSpotMakerFeeRate === "string" && typeof o.defaultSpotTakerFeeRate === "string" && typeof o.defaultDerivativeMakerFeeRate === "string" && typeof o.defaultDerivativeTakerFeeRate === "string" && typeof o.defaultInitialMarginRatio === "string" && typeof o.defaultMaintenanceMarginRatio === "string" && typeof o.defaultFundingInterval === "bigint" && typeof o.fundingMultiple === "bigint" && typeof o.relayerFeeShareRate === "string" && typeof o.defaultHourlyFundingRateCap === "string" && typeof o.defaultHourlyInterestRate === "string" && typeof o.maxDerivativeOrderSideCount === "number" && typeof o.injRewardStakedRequirementThreshold === "string" && typeof o.tradingRewardsVestingDuration === "bigint" && typeof o.liquidatorRewardShareRate === "string" && Coin.is(o.binaryOptionsMarketInstantListingFee) && isSet(o.atomicMarketOrderAccessLevel) && typeof o.spotAtomicMarketOrderFeeMultiplier === "string" && typeof o.derivativeAtomicMarketOrderFeeMultiplier === "string" && typeof o.binaryOptionsAtomicMarketOrderFeeMultiplier === "string" && typeof o.minimalProtocolFeeRate === "string" && typeof o.isInstantDerivativeMarketLaunchEnabled === "boolean" && typeof o.postOnlyModeHeightThreshold === "bigint" && typeof o.marginDecreasePriceTimestampThresholdSeconds === "bigint" && Array.isArray(o.exchangeAdmins) && (!o.exchangeAdmins.length || typeof o.exchangeAdmins[0] === "string") && typeof o.injAuctionMaxCap === "string" && typeof o.fixedGasEnabled === "boolean");
  },
  isAmino(o: any): o is ParamsAmino {
    return o && (o.$typeUrl === Params.typeUrl || Coin.isAmino(o.spot_market_instant_listing_fee) && Coin.isAmino(o.derivative_market_instant_listing_fee) && typeof o.default_spot_maker_fee_rate === "string" && typeof o.default_spot_taker_fee_rate === "string" && typeof o.default_derivative_maker_fee_rate === "string" && typeof o.default_derivative_taker_fee_rate === "string" && typeof o.default_initial_margin_ratio === "string" && typeof o.default_maintenance_margin_ratio === "string" && typeof o.default_funding_interval === "bigint" && typeof o.funding_multiple === "bigint" && typeof o.relayer_fee_share_rate === "string" && typeof o.default_hourly_funding_rate_cap === "string" && typeof o.default_hourly_interest_rate === "string" && typeof o.max_derivative_order_side_count === "number" && typeof o.inj_reward_staked_requirement_threshold === "string" && typeof o.trading_rewards_vesting_duration === "bigint" && typeof o.liquidator_reward_share_rate === "string" && Coin.isAmino(o.binary_options_market_instant_listing_fee) && isSet(o.atomic_market_order_access_level) && typeof o.spot_atomic_market_order_fee_multiplier === "string" && typeof o.derivative_atomic_market_order_fee_multiplier === "string" && typeof o.binary_options_atomic_market_order_fee_multiplier === "string" && typeof o.minimal_protocol_fee_rate === "string" && typeof o.is_instant_derivative_market_launch_enabled === "boolean" && typeof o.post_only_mode_height_threshold === "bigint" && typeof o.margin_decrease_price_timestamp_threshold_seconds === "bigint" && Array.isArray(o.exchange_admins) && (!o.exchange_admins.length || typeof o.exchange_admins[0] === "string") && typeof o.inj_auction_max_cap === "string" && typeof o.fixed_gas_enabled === "boolean");
  },
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.spotMarketInstantListingFee !== undefined) {
      Coin.encode(message.spotMarketInstantListingFee, writer.uint32(10).fork()).ldelim();
    }
    if (message.derivativeMarketInstantListingFee !== undefined) {
      Coin.encode(message.derivativeMarketInstantListingFee, writer.uint32(18).fork()).ldelim();
    }
    if (message.defaultSpotMakerFeeRate !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.defaultSpotMakerFeeRate, 18).atomics);
    }
    if (message.defaultSpotTakerFeeRate !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.defaultSpotTakerFeeRate, 18).atomics);
    }
    if (message.defaultDerivativeMakerFeeRate !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.defaultDerivativeMakerFeeRate, 18).atomics);
    }
    if (message.defaultDerivativeTakerFeeRate !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.defaultDerivativeTakerFeeRate, 18).atomics);
    }
    if (message.defaultInitialMarginRatio !== "") {
      writer.uint32(58).string(Decimal.fromUserInput(message.defaultInitialMarginRatio, 18).atomics);
    }
    if (message.defaultMaintenanceMarginRatio !== "") {
      writer.uint32(66).string(Decimal.fromUserInput(message.defaultMaintenanceMarginRatio, 18).atomics);
    }
    if (message.defaultFundingInterval !== BigInt(0)) {
      writer.uint32(72).int64(message.defaultFundingInterval);
    }
    if (message.fundingMultiple !== BigInt(0)) {
      writer.uint32(80).int64(message.fundingMultiple);
    }
    if (message.relayerFeeShareRate !== "") {
      writer.uint32(90).string(Decimal.fromUserInput(message.relayerFeeShareRate, 18).atomics);
    }
    if (message.defaultHourlyFundingRateCap !== "") {
      writer.uint32(98).string(Decimal.fromUserInput(message.defaultHourlyFundingRateCap, 18).atomics);
    }
    if (message.defaultHourlyInterestRate !== "") {
      writer.uint32(106).string(Decimal.fromUserInput(message.defaultHourlyInterestRate, 18).atomics);
    }
    if (message.maxDerivativeOrderSideCount !== 0) {
      writer.uint32(112).uint32(message.maxDerivativeOrderSideCount);
    }
    if (message.injRewardStakedRequirementThreshold !== "") {
      writer.uint32(122).string(message.injRewardStakedRequirementThreshold);
    }
    if (message.tradingRewardsVestingDuration !== BigInt(0)) {
      writer.uint32(128).int64(message.tradingRewardsVestingDuration);
    }
    if (message.liquidatorRewardShareRate !== "") {
      writer.uint32(138).string(Decimal.fromUserInput(message.liquidatorRewardShareRate, 18).atomics);
    }
    if (message.binaryOptionsMarketInstantListingFee !== undefined) {
      Coin.encode(message.binaryOptionsMarketInstantListingFee, writer.uint32(146).fork()).ldelim();
    }
    if (message.atomicMarketOrderAccessLevel !== 0) {
      writer.uint32(152).int32(message.atomicMarketOrderAccessLevel);
    }
    if (message.spotAtomicMarketOrderFeeMultiplier !== "") {
      writer.uint32(162).string(Decimal.fromUserInput(message.spotAtomicMarketOrderFeeMultiplier, 18).atomics);
    }
    if (message.derivativeAtomicMarketOrderFeeMultiplier !== "") {
      writer.uint32(170).string(Decimal.fromUserInput(message.derivativeAtomicMarketOrderFeeMultiplier, 18).atomics);
    }
    if (message.binaryOptionsAtomicMarketOrderFeeMultiplier !== "") {
      writer.uint32(178).string(Decimal.fromUserInput(message.binaryOptionsAtomicMarketOrderFeeMultiplier, 18).atomics);
    }
    if (message.minimalProtocolFeeRate !== "") {
      writer.uint32(186).string(Decimal.fromUserInput(message.minimalProtocolFeeRate, 18).atomics);
    }
    if (message.isInstantDerivativeMarketLaunchEnabled === true) {
      writer.uint32(192).bool(message.isInstantDerivativeMarketLaunchEnabled);
    }
    if (message.postOnlyModeHeightThreshold !== BigInt(0)) {
      writer.uint32(200).int64(message.postOnlyModeHeightThreshold);
    }
    if (message.marginDecreasePriceTimestampThresholdSeconds !== BigInt(0)) {
      writer.uint32(208).int64(message.marginDecreasePriceTimestampThresholdSeconds);
    }
    for (const v of message.exchangeAdmins) {
      writer.uint32(218).string(v!);
    }
    if (message.injAuctionMaxCap !== "") {
      writer.uint32(226).string(message.injAuctionMaxCap);
    }
    if (message.fixedGasEnabled === true) {
      writer.uint32(232).bool(message.fixedGasEnabled);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.spotMarketInstantListingFee = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.derivativeMarketInstantListingFee = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.defaultSpotMakerFeeRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.defaultSpotTakerFeeRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.defaultDerivativeMakerFeeRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.defaultDerivativeTakerFeeRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 7:
          message.defaultInitialMarginRatio = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 8:
          message.defaultMaintenanceMarginRatio = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 9:
          message.defaultFundingInterval = reader.int64();
          break;
        case 10:
          message.fundingMultiple = reader.int64();
          break;
        case 11:
          message.relayerFeeShareRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 12:
          message.defaultHourlyFundingRateCap = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 13:
          message.defaultHourlyInterestRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 14:
          message.maxDerivativeOrderSideCount = reader.uint32();
          break;
        case 15:
          message.injRewardStakedRequirementThreshold = reader.string();
          break;
        case 16:
          message.tradingRewardsVestingDuration = reader.int64();
          break;
        case 17:
          message.liquidatorRewardShareRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 18:
          message.binaryOptionsMarketInstantListingFee = Coin.decode(reader, reader.uint32());
          break;
        case 19:
          message.atomicMarketOrderAccessLevel = reader.int32() as any;
          break;
        case 20:
          message.spotAtomicMarketOrderFeeMultiplier = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 21:
          message.derivativeAtomicMarketOrderFeeMultiplier = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 22:
          message.binaryOptionsAtomicMarketOrderFeeMultiplier = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 23:
          message.minimalProtocolFeeRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 24:
          message.isInstantDerivativeMarketLaunchEnabled = reader.bool();
          break;
        case 25:
          message.postOnlyModeHeightThreshold = reader.int64();
          break;
        case 26:
          message.marginDecreasePriceTimestampThresholdSeconds = reader.int64();
          break;
        case 27:
          message.exchangeAdmins.push(reader.string());
          break;
        case 28:
          message.injAuctionMaxCap = reader.string();
          break;
        case 29:
          message.fixedGasEnabled = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.spotMarketInstantListingFee = object.spotMarketInstantListingFee !== undefined && object.spotMarketInstantListingFee !== null ? Coin.fromPartial(object.spotMarketInstantListingFee) : undefined;
    message.derivativeMarketInstantListingFee = object.derivativeMarketInstantListingFee !== undefined && object.derivativeMarketInstantListingFee !== null ? Coin.fromPartial(object.derivativeMarketInstantListingFee) : undefined;
    message.defaultSpotMakerFeeRate = object.defaultSpotMakerFeeRate ?? "";
    message.defaultSpotTakerFeeRate = object.defaultSpotTakerFeeRate ?? "";
    message.defaultDerivativeMakerFeeRate = object.defaultDerivativeMakerFeeRate ?? "";
    message.defaultDerivativeTakerFeeRate = object.defaultDerivativeTakerFeeRate ?? "";
    message.defaultInitialMarginRatio = object.defaultInitialMarginRatio ?? "";
    message.defaultMaintenanceMarginRatio = object.defaultMaintenanceMarginRatio ?? "";
    message.defaultFundingInterval = object.defaultFundingInterval !== undefined && object.defaultFundingInterval !== null ? BigInt(object.defaultFundingInterval.toString()) : BigInt(0);
    message.fundingMultiple = object.fundingMultiple !== undefined && object.fundingMultiple !== null ? BigInt(object.fundingMultiple.toString()) : BigInt(0);
    message.relayerFeeShareRate = object.relayerFeeShareRate ?? "";
    message.defaultHourlyFundingRateCap = object.defaultHourlyFundingRateCap ?? "";
    message.defaultHourlyInterestRate = object.defaultHourlyInterestRate ?? "";
    message.maxDerivativeOrderSideCount = object.maxDerivativeOrderSideCount ?? 0;
    message.injRewardStakedRequirementThreshold = object.injRewardStakedRequirementThreshold ?? "";
    message.tradingRewardsVestingDuration = object.tradingRewardsVestingDuration !== undefined && object.tradingRewardsVestingDuration !== null ? BigInt(object.tradingRewardsVestingDuration.toString()) : BigInt(0);
    message.liquidatorRewardShareRate = object.liquidatorRewardShareRate ?? "";
    message.binaryOptionsMarketInstantListingFee = object.binaryOptionsMarketInstantListingFee !== undefined && object.binaryOptionsMarketInstantListingFee !== null ? Coin.fromPartial(object.binaryOptionsMarketInstantListingFee) : undefined;
    message.atomicMarketOrderAccessLevel = object.atomicMarketOrderAccessLevel ?? 0;
    message.spotAtomicMarketOrderFeeMultiplier = object.spotAtomicMarketOrderFeeMultiplier ?? "";
    message.derivativeAtomicMarketOrderFeeMultiplier = object.derivativeAtomicMarketOrderFeeMultiplier ?? "";
    message.binaryOptionsAtomicMarketOrderFeeMultiplier = object.binaryOptionsAtomicMarketOrderFeeMultiplier ?? "";
    message.minimalProtocolFeeRate = object.minimalProtocolFeeRate ?? "";
    message.isInstantDerivativeMarketLaunchEnabled = object.isInstantDerivativeMarketLaunchEnabled ?? false;
    message.postOnlyModeHeightThreshold = object.postOnlyModeHeightThreshold !== undefined && object.postOnlyModeHeightThreshold !== null ? BigInt(object.postOnlyModeHeightThreshold.toString()) : BigInt(0);
    message.marginDecreasePriceTimestampThresholdSeconds = object.marginDecreasePriceTimestampThresholdSeconds !== undefined && object.marginDecreasePriceTimestampThresholdSeconds !== null ? BigInt(object.marginDecreasePriceTimestampThresholdSeconds.toString()) : BigInt(0);
    message.exchangeAdmins = object.exchangeAdmins?.map(e => e) || [];
    message.injAuctionMaxCap = object.injAuctionMaxCap ?? "";
    message.fixedGasEnabled = object.fixedGasEnabled ?? false;
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.spot_market_instant_listing_fee !== undefined && object.spot_market_instant_listing_fee !== null) {
      message.spotMarketInstantListingFee = Coin.fromAmino(object.spot_market_instant_listing_fee);
    }
    if (object.derivative_market_instant_listing_fee !== undefined && object.derivative_market_instant_listing_fee !== null) {
      message.derivativeMarketInstantListingFee = Coin.fromAmino(object.derivative_market_instant_listing_fee);
    }
    if (object.default_spot_maker_fee_rate !== undefined && object.default_spot_maker_fee_rate !== null) {
      message.defaultSpotMakerFeeRate = object.default_spot_maker_fee_rate;
    }
    if (object.default_spot_taker_fee_rate !== undefined && object.default_spot_taker_fee_rate !== null) {
      message.defaultSpotTakerFeeRate = object.default_spot_taker_fee_rate;
    }
    if (object.default_derivative_maker_fee_rate !== undefined && object.default_derivative_maker_fee_rate !== null) {
      message.defaultDerivativeMakerFeeRate = object.default_derivative_maker_fee_rate;
    }
    if (object.default_derivative_taker_fee_rate !== undefined && object.default_derivative_taker_fee_rate !== null) {
      message.defaultDerivativeTakerFeeRate = object.default_derivative_taker_fee_rate;
    }
    if (object.default_initial_margin_ratio !== undefined && object.default_initial_margin_ratio !== null) {
      message.defaultInitialMarginRatio = object.default_initial_margin_ratio;
    }
    if (object.default_maintenance_margin_ratio !== undefined && object.default_maintenance_margin_ratio !== null) {
      message.defaultMaintenanceMarginRatio = object.default_maintenance_margin_ratio;
    }
    if (object.default_funding_interval !== undefined && object.default_funding_interval !== null) {
      message.defaultFundingInterval = BigInt(object.default_funding_interval);
    }
    if (object.funding_multiple !== undefined && object.funding_multiple !== null) {
      message.fundingMultiple = BigInt(object.funding_multiple);
    }
    if (object.relayer_fee_share_rate !== undefined && object.relayer_fee_share_rate !== null) {
      message.relayerFeeShareRate = object.relayer_fee_share_rate;
    }
    if (object.default_hourly_funding_rate_cap !== undefined && object.default_hourly_funding_rate_cap !== null) {
      message.defaultHourlyFundingRateCap = object.default_hourly_funding_rate_cap;
    }
    if (object.default_hourly_interest_rate !== undefined && object.default_hourly_interest_rate !== null) {
      message.defaultHourlyInterestRate = object.default_hourly_interest_rate;
    }
    if (object.max_derivative_order_side_count !== undefined && object.max_derivative_order_side_count !== null) {
      message.maxDerivativeOrderSideCount = object.max_derivative_order_side_count;
    }
    if (object.inj_reward_staked_requirement_threshold !== undefined && object.inj_reward_staked_requirement_threshold !== null) {
      message.injRewardStakedRequirementThreshold = object.inj_reward_staked_requirement_threshold;
    }
    if (object.trading_rewards_vesting_duration !== undefined && object.trading_rewards_vesting_duration !== null) {
      message.tradingRewardsVestingDuration = BigInt(object.trading_rewards_vesting_duration);
    }
    if (object.liquidator_reward_share_rate !== undefined && object.liquidator_reward_share_rate !== null) {
      message.liquidatorRewardShareRate = object.liquidator_reward_share_rate;
    }
    if (object.binary_options_market_instant_listing_fee !== undefined && object.binary_options_market_instant_listing_fee !== null) {
      message.binaryOptionsMarketInstantListingFee = Coin.fromAmino(object.binary_options_market_instant_listing_fee);
    }
    if (object.atomic_market_order_access_level !== undefined && object.atomic_market_order_access_level !== null) {
      message.atomicMarketOrderAccessLevel = object.atomic_market_order_access_level;
    }
    if (object.spot_atomic_market_order_fee_multiplier !== undefined && object.spot_atomic_market_order_fee_multiplier !== null) {
      message.spotAtomicMarketOrderFeeMultiplier = object.spot_atomic_market_order_fee_multiplier;
    }
    if (object.derivative_atomic_market_order_fee_multiplier !== undefined && object.derivative_atomic_market_order_fee_multiplier !== null) {
      message.derivativeAtomicMarketOrderFeeMultiplier = object.derivative_atomic_market_order_fee_multiplier;
    }
    if (object.binary_options_atomic_market_order_fee_multiplier !== undefined && object.binary_options_atomic_market_order_fee_multiplier !== null) {
      message.binaryOptionsAtomicMarketOrderFeeMultiplier = object.binary_options_atomic_market_order_fee_multiplier;
    }
    if (object.minimal_protocol_fee_rate !== undefined && object.minimal_protocol_fee_rate !== null) {
      message.minimalProtocolFeeRate = object.minimal_protocol_fee_rate;
    }
    if (object.is_instant_derivative_market_launch_enabled !== undefined && object.is_instant_derivative_market_launch_enabled !== null) {
      message.isInstantDerivativeMarketLaunchEnabled = object.is_instant_derivative_market_launch_enabled;
    }
    if (object.post_only_mode_height_threshold !== undefined && object.post_only_mode_height_threshold !== null) {
      message.postOnlyModeHeightThreshold = BigInt(object.post_only_mode_height_threshold);
    }
    if (object.margin_decrease_price_timestamp_threshold_seconds !== undefined && object.margin_decrease_price_timestamp_threshold_seconds !== null) {
      message.marginDecreasePriceTimestampThresholdSeconds = BigInt(object.margin_decrease_price_timestamp_threshold_seconds);
    }
    message.exchangeAdmins = object.exchange_admins?.map(e => e) || [];
    if (object.inj_auction_max_cap !== undefined && object.inj_auction_max_cap !== null) {
      message.injAuctionMaxCap = object.inj_auction_max_cap;
    }
    if (object.fixed_gas_enabled !== undefined && object.fixed_gas_enabled !== null) {
      message.fixedGasEnabled = object.fixed_gas_enabled;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.spot_market_instant_listing_fee = message.spotMarketInstantListingFee ? Coin.toAmino(message.spotMarketInstantListingFee) : undefined;
    obj.derivative_market_instant_listing_fee = message.derivativeMarketInstantListingFee ? Coin.toAmino(message.derivativeMarketInstantListingFee) : undefined;
    obj.default_spot_maker_fee_rate = message.defaultSpotMakerFeeRate === "" ? undefined : Decimal.fromUserInput(message.defaultSpotMakerFeeRate, 18).atomics;
    obj.default_spot_taker_fee_rate = message.defaultSpotTakerFeeRate === "" ? undefined : Decimal.fromUserInput(message.defaultSpotTakerFeeRate, 18).atomics;
    obj.default_derivative_maker_fee_rate = message.defaultDerivativeMakerFeeRate === "" ? undefined : Decimal.fromUserInput(message.defaultDerivativeMakerFeeRate, 18).atomics;
    obj.default_derivative_taker_fee_rate = message.defaultDerivativeTakerFeeRate === "" ? undefined : Decimal.fromUserInput(message.defaultDerivativeTakerFeeRate, 18).atomics;
    obj.default_initial_margin_ratio = message.defaultInitialMarginRatio === "" ? undefined : Decimal.fromUserInput(message.defaultInitialMarginRatio, 18).atomics;
    obj.default_maintenance_margin_ratio = message.defaultMaintenanceMarginRatio === "" ? undefined : Decimal.fromUserInput(message.defaultMaintenanceMarginRatio, 18).atomics;
    obj.default_funding_interval = message.defaultFundingInterval !== BigInt(0) ? message.defaultFundingInterval?.toString() : undefined;
    obj.funding_multiple = message.fundingMultiple !== BigInt(0) ? message.fundingMultiple?.toString() : undefined;
    obj.relayer_fee_share_rate = message.relayerFeeShareRate === "" ? undefined : Decimal.fromUserInput(message.relayerFeeShareRate, 18).atomics;
    obj.default_hourly_funding_rate_cap = message.defaultHourlyFundingRateCap === "" ? undefined : Decimal.fromUserInput(message.defaultHourlyFundingRateCap, 18).atomics;
    obj.default_hourly_interest_rate = message.defaultHourlyInterestRate === "" ? undefined : Decimal.fromUserInput(message.defaultHourlyInterestRate, 18).atomics;
    obj.max_derivative_order_side_count = message.maxDerivativeOrderSideCount === 0 ? undefined : message.maxDerivativeOrderSideCount;
    obj.inj_reward_staked_requirement_threshold = message.injRewardStakedRequirementThreshold === "" ? undefined : message.injRewardStakedRequirementThreshold;
    obj.trading_rewards_vesting_duration = message.tradingRewardsVestingDuration !== BigInt(0) ? message.tradingRewardsVestingDuration?.toString() : undefined;
    obj.liquidator_reward_share_rate = message.liquidatorRewardShareRate === "" ? undefined : Decimal.fromUserInput(message.liquidatorRewardShareRate, 18).atomics;
    obj.binary_options_market_instant_listing_fee = message.binaryOptionsMarketInstantListingFee ? Coin.toAmino(message.binaryOptionsMarketInstantListingFee) : undefined;
    obj.atomic_market_order_access_level = message.atomicMarketOrderAccessLevel === 0 ? undefined : message.atomicMarketOrderAccessLevel;
    obj.spot_atomic_market_order_fee_multiplier = message.spotAtomicMarketOrderFeeMultiplier === "" ? undefined : Decimal.fromUserInput(message.spotAtomicMarketOrderFeeMultiplier, 18).atomics;
    obj.derivative_atomic_market_order_fee_multiplier = message.derivativeAtomicMarketOrderFeeMultiplier === "" ? undefined : Decimal.fromUserInput(message.derivativeAtomicMarketOrderFeeMultiplier, 18).atomics;
    obj.binary_options_atomic_market_order_fee_multiplier = message.binaryOptionsAtomicMarketOrderFeeMultiplier === "" ? undefined : Decimal.fromUserInput(message.binaryOptionsAtomicMarketOrderFeeMultiplier, 18).atomics;
    obj.minimal_protocol_fee_rate = message.minimalProtocolFeeRate === "" ? undefined : Decimal.fromUserInput(message.minimalProtocolFeeRate, 18).atomics;
    obj.is_instant_derivative_market_launch_enabled = message.isInstantDerivativeMarketLaunchEnabled === false ? undefined : message.isInstantDerivativeMarketLaunchEnabled;
    obj.post_only_mode_height_threshold = message.postOnlyModeHeightThreshold !== BigInt(0) ? message.postOnlyModeHeightThreshold?.toString() : undefined;
    obj.margin_decrease_price_timestamp_threshold_seconds = message.marginDecreasePriceTimestampThresholdSeconds !== BigInt(0) ? message.marginDecreasePriceTimestampThresholdSeconds?.toString() : undefined;
    if (message.exchangeAdmins) {
      obj.exchange_admins = message.exchangeAdmins.map(e => e);
    } else {
      obj.exchange_admins = message.exchangeAdmins;
    }
    obj.inj_auction_max_cap = message.injAuctionMaxCap === "" ? undefined : message.injAuctionMaxCap;
    obj.fixed_gas_enabled = message.fixedGasEnabled === false ? undefined : message.fixedGasEnabled;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "exchange/Params",
      value: Params.toAmino(message)
    };
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(Params.typeUrl)) {
      return;
    }
    Coin.registerTypeUrl();
  }
};
function createBaseMarketFeeMultiplier(): MarketFeeMultiplier {
  return {
    marketId: "",
    feeMultiplier: ""
  };
}
/**
 * @name MarketFeeMultiplier
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.MarketFeeMultiplier
 */
export const MarketFeeMultiplier = {
  typeUrl: "/injective.exchange.v1beta1.MarketFeeMultiplier",
  is(o: any): o is MarketFeeMultiplier {
    return o && (o.$typeUrl === MarketFeeMultiplier.typeUrl || typeof o.marketId === "string" && typeof o.feeMultiplier === "string");
  },
  isAmino(o: any): o is MarketFeeMultiplierAmino {
    return o && (o.$typeUrl === MarketFeeMultiplier.typeUrl || typeof o.market_id === "string" && typeof o.fee_multiplier === "string");
  },
  encode(message: MarketFeeMultiplier, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.feeMultiplier !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.feeMultiplier, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MarketFeeMultiplier {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarketFeeMultiplier();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.feeMultiplier = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MarketFeeMultiplier>): MarketFeeMultiplier {
    const message = createBaseMarketFeeMultiplier();
    message.marketId = object.marketId ?? "";
    message.feeMultiplier = object.feeMultiplier ?? "";
    return message;
  },
  fromAmino(object: MarketFeeMultiplierAmino): MarketFeeMultiplier {
    const message = createBaseMarketFeeMultiplier();
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    if (object.fee_multiplier !== undefined && object.fee_multiplier !== null) {
      message.feeMultiplier = object.fee_multiplier;
    }
    return message;
  },
  toAmino(message: MarketFeeMultiplier): MarketFeeMultiplierAmino {
    const obj: any = {};
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    obj.fee_multiplier = message.feeMultiplier === "" ? undefined : Decimal.fromUserInput(message.feeMultiplier, 18).atomics;
    return obj;
  },
  fromAminoMsg(object: MarketFeeMultiplierAminoMsg): MarketFeeMultiplier {
    return MarketFeeMultiplier.fromAmino(object.value);
  },
  fromProtoMsg(message: MarketFeeMultiplierProtoMsg): MarketFeeMultiplier {
    return MarketFeeMultiplier.decode(message.value);
  },
  toProto(message: MarketFeeMultiplier): Uint8Array {
    return MarketFeeMultiplier.encode(message).finish();
  },
  toProtoMsg(message: MarketFeeMultiplier): MarketFeeMultiplierProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.MarketFeeMultiplier",
      value: MarketFeeMultiplier.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseDerivativeMarket(): DerivativeMarket {
  return {
    ticker: "",
    oracleBase: "",
    oracleQuote: "",
    oracleType: 0,
    oracleScaleFactor: 0,
    quoteDenom: "",
    marketId: "",
    initialMarginRatio: "",
    maintenanceMarginRatio: "",
    makerFeeRate: "",
    takerFeeRate: "",
    relayerFeeShareRate: "",
    isPerpetual: false,
    status: 0,
    minPriceTickSize: "",
    minQuantityTickSize: "",
    minNotional: "",
    admin: "",
    adminPermissions: 0,
    quoteDecimals: 0
  };
}
/**
 * An object describing a derivative market in the Injective Futures Protocol.
 * @name DerivativeMarket
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.DerivativeMarket
 */
export const DerivativeMarket = {
  typeUrl: "/injective.exchange.v1beta1.DerivativeMarket",
  is(o: any): o is DerivativeMarket {
    return o && (o.$typeUrl === DerivativeMarket.typeUrl || typeof o.ticker === "string" && typeof o.oracleBase === "string" && typeof o.oracleQuote === "string" && isSet(o.oracleType) && typeof o.oracleScaleFactor === "number" && typeof o.quoteDenom === "string" && typeof o.marketId === "string" && typeof o.initialMarginRatio === "string" && typeof o.maintenanceMarginRatio === "string" && typeof o.makerFeeRate === "string" && typeof o.takerFeeRate === "string" && typeof o.relayerFeeShareRate === "string" && typeof o.isPerpetual === "boolean" && isSet(o.status) && typeof o.minPriceTickSize === "string" && typeof o.minQuantityTickSize === "string" && typeof o.minNotional === "string" && typeof o.admin === "string" && typeof o.adminPermissions === "number" && typeof o.quoteDecimals === "number");
  },
  isAmino(o: any): o is DerivativeMarketAmino {
    return o && (o.$typeUrl === DerivativeMarket.typeUrl || typeof o.ticker === "string" && typeof o.oracle_base === "string" && typeof o.oracle_quote === "string" && isSet(o.oracle_type) && typeof o.oracle_scale_factor === "number" && typeof o.quote_denom === "string" && typeof o.market_id === "string" && typeof o.initial_margin_ratio === "string" && typeof o.maintenance_margin_ratio === "string" && typeof o.maker_fee_rate === "string" && typeof o.taker_fee_rate === "string" && typeof o.relayer_fee_share_rate === "string" && typeof o.isPerpetual === "boolean" && isSet(o.status) && typeof o.min_price_tick_size === "string" && typeof o.min_quantity_tick_size === "string" && typeof o.min_notional === "string" && typeof o.admin === "string" && typeof o.admin_permissions === "number" && typeof o.quote_decimals === "number");
  },
  encode(message: DerivativeMarket, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ticker !== "") {
      writer.uint32(10).string(message.ticker);
    }
    if (message.oracleBase !== "") {
      writer.uint32(18).string(message.oracleBase);
    }
    if (message.oracleQuote !== "") {
      writer.uint32(26).string(message.oracleQuote);
    }
    if (message.oracleType !== 0) {
      writer.uint32(32).int32(message.oracleType);
    }
    if (message.oracleScaleFactor !== 0) {
      writer.uint32(40).uint32(message.oracleScaleFactor);
    }
    if (message.quoteDenom !== "") {
      writer.uint32(50).string(message.quoteDenom);
    }
    if (message.marketId !== "") {
      writer.uint32(58).string(message.marketId);
    }
    if (message.initialMarginRatio !== "") {
      writer.uint32(66).string(Decimal.fromUserInput(message.initialMarginRatio, 18).atomics);
    }
    if (message.maintenanceMarginRatio !== "") {
      writer.uint32(74).string(Decimal.fromUserInput(message.maintenanceMarginRatio, 18).atomics);
    }
    if (message.makerFeeRate !== "") {
      writer.uint32(82).string(Decimal.fromUserInput(message.makerFeeRate, 18).atomics);
    }
    if (message.takerFeeRate !== "") {
      writer.uint32(90).string(Decimal.fromUserInput(message.takerFeeRate, 18).atomics);
    }
    if (message.relayerFeeShareRate !== "") {
      writer.uint32(98).string(Decimal.fromUserInput(message.relayerFeeShareRate, 18).atomics);
    }
    if (message.isPerpetual === true) {
      writer.uint32(104).bool(message.isPerpetual);
    }
    if (message.status !== 0) {
      writer.uint32(112).int32(message.status);
    }
    if (message.minPriceTickSize !== "") {
      writer.uint32(122).string(Decimal.fromUserInput(message.minPriceTickSize, 18).atomics);
    }
    if (message.minQuantityTickSize !== "") {
      writer.uint32(130).string(Decimal.fromUserInput(message.minQuantityTickSize, 18).atomics);
    }
    if (message.minNotional !== "") {
      writer.uint32(138).string(Decimal.fromUserInput(message.minNotional, 18).atomics);
    }
    if (message.admin !== "") {
      writer.uint32(146).string(message.admin);
    }
    if (message.adminPermissions !== 0) {
      writer.uint32(152).uint32(message.adminPermissions);
    }
    if (message.quoteDecimals !== 0) {
      writer.uint32(160).uint32(message.quoteDecimals);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DerivativeMarket {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDerivativeMarket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ticker = reader.string();
          break;
        case 2:
          message.oracleBase = reader.string();
          break;
        case 3:
          message.oracleQuote = reader.string();
          break;
        case 4:
          message.oracleType = reader.int32() as any;
          break;
        case 5:
          message.oracleScaleFactor = reader.uint32();
          break;
        case 6:
          message.quoteDenom = reader.string();
          break;
        case 7:
          message.marketId = reader.string();
          break;
        case 8:
          message.initialMarginRatio = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 9:
          message.maintenanceMarginRatio = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 10:
          message.makerFeeRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 11:
          message.takerFeeRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 12:
          message.relayerFeeShareRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 13:
          message.isPerpetual = reader.bool();
          break;
        case 14:
          message.status = reader.int32() as any;
          break;
        case 15:
          message.minPriceTickSize = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 16:
          message.minQuantityTickSize = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 17:
          message.minNotional = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 18:
          message.admin = reader.string();
          break;
        case 19:
          message.adminPermissions = reader.uint32();
          break;
        case 20:
          message.quoteDecimals = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<DerivativeMarket>): DerivativeMarket {
    const message = createBaseDerivativeMarket();
    message.ticker = object.ticker ?? "";
    message.oracleBase = object.oracleBase ?? "";
    message.oracleQuote = object.oracleQuote ?? "";
    message.oracleType = object.oracleType ?? 0;
    message.oracleScaleFactor = object.oracleScaleFactor ?? 0;
    message.quoteDenom = object.quoteDenom ?? "";
    message.marketId = object.marketId ?? "";
    message.initialMarginRatio = object.initialMarginRatio ?? "";
    message.maintenanceMarginRatio = object.maintenanceMarginRatio ?? "";
    message.makerFeeRate = object.makerFeeRate ?? "";
    message.takerFeeRate = object.takerFeeRate ?? "";
    message.relayerFeeShareRate = object.relayerFeeShareRate ?? "";
    message.isPerpetual = object.isPerpetual ?? false;
    message.status = object.status ?? 0;
    message.minPriceTickSize = object.minPriceTickSize ?? "";
    message.minQuantityTickSize = object.minQuantityTickSize ?? "";
    message.minNotional = object.minNotional ?? "";
    message.admin = object.admin ?? "";
    message.adminPermissions = object.adminPermissions ?? 0;
    message.quoteDecimals = object.quoteDecimals ?? 0;
    return message;
  },
  fromAmino(object: DerivativeMarketAmino): DerivativeMarket {
    const message = createBaseDerivativeMarket();
    if (object.ticker !== undefined && object.ticker !== null) {
      message.ticker = object.ticker;
    }
    if (object.oracle_base !== undefined && object.oracle_base !== null) {
      message.oracleBase = object.oracle_base;
    }
    if (object.oracle_quote !== undefined && object.oracle_quote !== null) {
      message.oracleQuote = object.oracle_quote;
    }
    if (object.oracle_type !== undefined && object.oracle_type !== null) {
      message.oracleType = object.oracle_type;
    }
    if (object.oracle_scale_factor !== undefined && object.oracle_scale_factor !== null) {
      message.oracleScaleFactor = object.oracle_scale_factor;
    }
    if (object.quote_denom !== undefined && object.quote_denom !== null) {
      message.quoteDenom = object.quote_denom;
    }
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    if (object.initial_margin_ratio !== undefined && object.initial_margin_ratio !== null) {
      message.initialMarginRatio = object.initial_margin_ratio;
    }
    if (object.maintenance_margin_ratio !== undefined && object.maintenance_margin_ratio !== null) {
      message.maintenanceMarginRatio = object.maintenance_margin_ratio;
    }
    if (object.maker_fee_rate !== undefined && object.maker_fee_rate !== null) {
      message.makerFeeRate = object.maker_fee_rate;
    }
    if (object.taker_fee_rate !== undefined && object.taker_fee_rate !== null) {
      message.takerFeeRate = object.taker_fee_rate;
    }
    if (object.relayer_fee_share_rate !== undefined && object.relayer_fee_share_rate !== null) {
      message.relayerFeeShareRate = object.relayer_fee_share_rate;
    }
    if (object.isPerpetual !== undefined && object.isPerpetual !== null) {
      message.isPerpetual = object.isPerpetual;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.min_price_tick_size !== undefined && object.min_price_tick_size !== null) {
      message.minPriceTickSize = object.min_price_tick_size;
    }
    if (object.min_quantity_tick_size !== undefined && object.min_quantity_tick_size !== null) {
      message.minQuantityTickSize = object.min_quantity_tick_size;
    }
    if (object.min_notional !== undefined && object.min_notional !== null) {
      message.minNotional = object.min_notional;
    }
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.admin_permissions !== undefined && object.admin_permissions !== null) {
      message.adminPermissions = object.admin_permissions;
    }
    if (object.quote_decimals !== undefined && object.quote_decimals !== null) {
      message.quoteDecimals = object.quote_decimals;
    }
    return message;
  },
  toAmino(message: DerivativeMarket): DerivativeMarketAmino {
    const obj: any = {};
    obj.ticker = message.ticker === "" ? undefined : message.ticker;
    obj.oracle_base = message.oracleBase === "" ? undefined : message.oracleBase;
    obj.oracle_quote = message.oracleQuote === "" ? undefined : message.oracleQuote;
    obj.oracle_type = message.oracleType === 0 ? undefined : message.oracleType;
    obj.oracle_scale_factor = message.oracleScaleFactor === 0 ? undefined : message.oracleScaleFactor;
    obj.quote_denom = message.quoteDenom === "" ? undefined : message.quoteDenom;
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    obj.initial_margin_ratio = message.initialMarginRatio === "" ? undefined : Decimal.fromUserInput(message.initialMarginRatio, 18).atomics;
    obj.maintenance_margin_ratio = message.maintenanceMarginRatio === "" ? undefined : Decimal.fromUserInput(message.maintenanceMarginRatio, 18).atomics;
    obj.maker_fee_rate = message.makerFeeRate === "" ? undefined : Decimal.fromUserInput(message.makerFeeRate, 18).atomics;
    obj.taker_fee_rate = message.takerFeeRate === "" ? undefined : Decimal.fromUserInput(message.takerFeeRate, 18).atomics;
    obj.relayer_fee_share_rate = message.relayerFeeShareRate === "" ? undefined : Decimal.fromUserInput(message.relayerFeeShareRate, 18).atomics;
    obj.isPerpetual = message.isPerpetual === false ? undefined : message.isPerpetual;
    obj.status = message.status === 0 ? undefined : message.status;
    obj.min_price_tick_size = message.minPriceTickSize === "" ? undefined : Decimal.fromUserInput(message.minPriceTickSize, 18).atomics;
    obj.min_quantity_tick_size = message.minQuantityTickSize === "" ? undefined : Decimal.fromUserInput(message.minQuantityTickSize, 18).atomics;
    obj.min_notional = message.minNotional === "" ? undefined : Decimal.fromUserInput(message.minNotional, 18).atomics;
    obj.admin = message.admin === "" ? undefined : message.admin;
    obj.admin_permissions = message.adminPermissions === 0 ? undefined : message.adminPermissions;
    obj.quote_decimals = message.quoteDecimals === 0 ? undefined : message.quoteDecimals;
    return obj;
  },
  fromAminoMsg(object: DerivativeMarketAminoMsg): DerivativeMarket {
    return DerivativeMarket.fromAmino(object.value);
  },
  fromProtoMsg(message: DerivativeMarketProtoMsg): DerivativeMarket {
    return DerivativeMarket.decode(message.value);
  },
  toProto(message: DerivativeMarket): Uint8Array {
    return DerivativeMarket.encode(message).finish();
  },
  toProtoMsg(message: DerivativeMarket): DerivativeMarketProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.DerivativeMarket",
      value: DerivativeMarket.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseBinaryOptionsMarket(): BinaryOptionsMarket {
  return {
    ticker: "",
    oracleSymbol: "",
    oracleProvider: "",
    oracleType: 0,
    oracleScaleFactor: 0,
    expirationTimestamp: BigInt(0),
    settlementTimestamp: BigInt(0),
    admin: "",
    quoteDenom: "",
    marketId: "",
    makerFeeRate: "",
    takerFeeRate: "",
    relayerFeeShareRate: "",
    status: 0,
    minPriceTickSize: "",
    minQuantityTickSize: "",
    settlementPrice: undefined,
    minNotional: "",
    adminPermissions: 0,
    quoteDecimals: 0
  };
}
/**
 * An object describing a binary options market in Injective Protocol.
 * @name BinaryOptionsMarket
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.BinaryOptionsMarket
 */
export const BinaryOptionsMarket = {
  typeUrl: "/injective.exchange.v1beta1.BinaryOptionsMarket",
  is(o: any): o is BinaryOptionsMarket {
    return o && (o.$typeUrl === BinaryOptionsMarket.typeUrl || typeof o.ticker === "string" && typeof o.oracleSymbol === "string" && typeof o.oracleProvider === "string" && isSet(o.oracleType) && typeof o.oracleScaleFactor === "number" && typeof o.expirationTimestamp === "bigint" && typeof o.settlementTimestamp === "bigint" && typeof o.admin === "string" && typeof o.quoteDenom === "string" && typeof o.marketId === "string" && typeof o.makerFeeRate === "string" && typeof o.takerFeeRate === "string" && typeof o.relayerFeeShareRate === "string" && isSet(o.status) && typeof o.minPriceTickSize === "string" && typeof o.minQuantityTickSize === "string" && typeof o.minNotional === "string" && typeof o.adminPermissions === "number" && typeof o.quoteDecimals === "number");
  },
  isAmino(o: any): o is BinaryOptionsMarketAmino {
    return o && (o.$typeUrl === BinaryOptionsMarket.typeUrl || typeof o.ticker === "string" && typeof o.oracle_symbol === "string" && typeof o.oracle_provider === "string" && isSet(o.oracle_type) && typeof o.oracle_scale_factor === "number" && typeof o.expiration_timestamp === "bigint" && typeof o.settlement_timestamp === "bigint" && typeof o.admin === "string" && typeof o.quote_denom === "string" && typeof o.market_id === "string" && typeof o.maker_fee_rate === "string" && typeof o.taker_fee_rate === "string" && typeof o.relayer_fee_share_rate === "string" && isSet(o.status) && typeof o.min_price_tick_size === "string" && typeof o.min_quantity_tick_size === "string" && typeof o.min_notional === "string" && typeof o.admin_permissions === "number" && typeof o.quote_decimals === "number");
  },
  encode(message: BinaryOptionsMarket, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ticker !== "") {
      writer.uint32(10).string(message.ticker);
    }
    if (message.oracleSymbol !== "") {
      writer.uint32(18).string(message.oracleSymbol);
    }
    if (message.oracleProvider !== "") {
      writer.uint32(26).string(message.oracleProvider);
    }
    if (message.oracleType !== 0) {
      writer.uint32(32).int32(message.oracleType);
    }
    if (message.oracleScaleFactor !== 0) {
      writer.uint32(40).uint32(message.oracleScaleFactor);
    }
    if (message.expirationTimestamp !== BigInt(0)) {
      writer.uint32(48).int64(message.expirationTimestamp);
    }
    if (message.settlementTimestamp !== BigInt(0)) {
      writer.uint32(56).int64(message.settlementTimestamp);
    }
    if (message.admin !== "") {
      writer.uint32(66).string(message.admin);
    }
    if (message.quoteDenom !== "") {
      writer.uint32(74).string(message.quoteDenom);
    }
    if (message.marketId !== "") {
      writer.uint32(82).string(message.marketId);
    }
    if (message.makerFeeRate !== "") {
      writer.uint32(90).string(Decimal.fromUserInput(message.makerFeeRate, 18).atomics);
    }
    if (message.takerFeeRate !== "") {
      writer.uint32(98).string(Decimal.fromUserInput(message.takerFeeRate, 18).atomics);
    }
    if (message.relayerFeeShareRate !== "") {
      writer.uint32(106).string(Decimal.fromUserInput(message.relayerFeeShareRate, 18).atomics);
    }
    if (message.status !== 0) {
      writer.uint32(112).int32(message.status);
    }
    if (message.minPriceTickSize !== "") {
      writer.uint32(122).string(Decimal.fromUserInput(message.minPriceTickSize, 18).atomics);
    }
    if (message.minQuantityTickSize !== "") {
      writer.uint32(130).string(Decimal.fromUserInput(message.minQuantityTickSize, 18).atomics);
    }
    if (message.settlementPrice !== undefined) {
      writer.uint32(138).string(Decimal.fromUserInput(message.settlementPrice, 18).atomics);
    }
    if (message.minNotional !== "") {
      writer.uint32(146).string(Decimal.fromUserInput(message.minNotional, 18).atomics);
    }
    if (message.adminPermissions !== 0) {
      writer.uint32(152).uint32(message.adminPermissions);
    }
    if (message.quoteDecimals !== 0) {
      writer.uint32(160).uint32(message.quoteDecimals);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BinaryOptionsMarket {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBinaryOptionsMarket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ticker = reader.string();
          break;
        case 2:
          message.oracleSymbol = reader.string();
          break;
        case 3:
          message.oracleProvider = reader.string();
          break;
        case 4:
          message.oracleType = reader.int32() as any;
          break;
        case 5:
          message.oracleScaleFactor = reader.uint32();
          break;
        case 6:
          message.expirationTimestamp = reader.int64();
          break;
        case 7:
          message.settlementTimestamp = reader.int64();
          break;
        case 8:
          message.admin = reader.string();
          break;
        case 9:
          message.quoteDenom = reader.string();
          break;
        case 10:
          message.marketId = reader.string();
          break;
        case 11:
          message.makerFeeRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 12:
          message.takerFeeRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 13:
          message.relayerFeeShareRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 14:
          message.status = reader.int32() as any;
          break;
        case 15:
          message.minPriceTickSize = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 16:
          message.minQuantityTickSize = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 17:
          message.settlementPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 18:
          message.minNotional = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 19:
          message.adminPermissions = reader.uint32();
          break;
        case 20:
          message.quoteDecimals = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<BinaryOptionsMarket>): BinaryOptionsMarket {
    const message = createBaseBinaryOptionsMarket();
    message.ticker = object.ticker ?? "";
    message.oracleSymbol = object.oracleSymbol ?? "";
    message.oracleProvider = object.oracleProvider ?? "";
    message.oracleType = object.oracleType ?? 0;
    message.oracleScaleFactor = object.oracleScaleFactor ?? 0;
    message.expirationTimestamp = object.expirationTimestamp !== undefined && object.expirationTimestamp !== null ? BigInt(object.expirationTimestamp.toString()) : BigInt(0);
    message.settlementTimestamp = object.settlementTimestamp !== undefined && object.settlementTimestamp !== null ? BigInt(object.settlementTimestamp.toString()) : BigInt(0);
    message.admin = object.admin ?? "";
    message.quoteDenom = object.quoteDenom ?? "";
    message.marketId = object.marketId ?? "";
    message.makerFeeRate = object.makerFeeRate ?? "";
    message.takerFeeRate = object.takerFeeRate ?? "";
    message.relayerFeeShareRate = object.relayerFeeShareRate ?? "";
    message.status = object.status ?? 0;
    message.minPriceTickSize = object.minPriceTickSize ?? "";
    message.minQuantityTickSize = object.minQuantityTickSize ?? "";
    message.settlementPrice = object.settlementPrice ?? undefined;
    message.minNotional = object.minNotional ?? "";
    message.adminPermissions = object.adminPermissions ?? 0;
    message.quoteDecimals = object.quoteDecimals ?? 0;
    return message;
  },
  fromAmino(object: BinaryOptionsMarketAmino): BinaryOptionsMarket {
    const message = createBaseBinaryOptionsMarket();
    if (object.ticker !== undefined && object.ticker !== null) {
      message.ticker = object.ticker;
    }
    if (object.oracle_symbol !== undefined && object.oracle_symbol !== null) {
      message.oracleSymbol = object.oracle_symbol;
    }
    if (object.oracle_provider !== undefined && object.oracle_provider !== null) {
      message.oracleProvider = object.oracle_provider;
    }
    if (object.oracle_type !== undefined && object.oracle_type !== null) {
      message.oracleType = object.oracle_type;
    }
    if (object.oracle_scale_factor !== undefined && object.oracle_scale_factor !== null) {
      message.oracleScaleFactor = object.oracle_scale_factor;
    }
    if (object.expiration_timestamp !== undefined && object.expiration_timestamp !== null) {
      message.expirationTimestamp = BigInt(object.expiration_timestamp);
    }
    if (object.settlement_timestamp !== undefined && object.settlement_timestamp !== null) {
      message.settlementTimestamp = BigInt(object.settlement_timestamp);
    }
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.quote_denom !== undefined && object.quote_denom !== null) {
      message.quoteDenom = object.quote_denom;
    }
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    if (object.maker_fee_rate !== undefined && object.maker_fee_rate !== null) {
      message.makerFeeRate = object.maker_fee_rate;
    }
    if (object.taker_fee_rate !== undefined && object.taker_fee_rate !== null) {
      message.takerFeeRate = object.taker_fee_rate;
    }
    if (object.relayer_fee_share_rate !== undefined && object.relayer_fee_share_rate !== null) {
      message.relayerFeeShareRate = object.relayer_fee_share_rate;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.min_price_tick_size !== undefined && object.min_price_tick_size !== null) {
      message.minPriceTickSize = object.min_price_tick_size;
    }
    if (object.min_quantity_tick_size !== undefined && object.min_quantity_tick_size !== null) {
      message.minQuantityTickSize = object.min_quantity_tick_size;
    }
    if (object.settlement_price !== undefined && object.settlement_price !== null) {
      message.settlementPrice = object.settlement_price;
    }
    if (object.min_notional !== undefined && object.min_notional !== null) {
      message.minNotional = object.min_notional;
    }
    if (object.admin_permissions !== undefined && object.admin_permissions !== null) {
      message.adminPermissions = object.admin_permissions;
    }
    if (object.quote_decimals !== undefined && object.quote_decimals !== null) {
      message.quoteDecimals = object.quote_decimals;
    }
    return message;
  },
  toAmino(message: BinaryOptionsMarket): BinaryOptionsMarketAmino {
    const obj: any = {};
    obj.ticker = message.ticker === "" ? undefined : message.ticker;
    obj.oracle_symbol = message.oracleSymbol === "" ? undefined : message.oracleSymbol;
    obj.oracle_provider = message.oracleProvider === "" ? undefined : message.oracleProvider;
    obj.oracle_type = message.oracleType === 0 ? undefined : message.oracleType;
    obj.oracle_scale_factor = message.oracleScaleFactor === 0 ? undefined : message.oracleScaleFactor;
    obj.expiration_timestamp = message.expirationTimestamp !== BigInt(0) ? message.expirationTimestamp?.toString() : undefined;
    obj.settlement_timestamp = message.settlementTimestamp !== BigInt(0) ? message.settlementTimestamp?.toString() : undefined;
    obj.admin = message.admin === "" ? undefined : message.admin;
    obj.quote_denom = message.quoteDenom === "" ? undefined : message.quoteDenom;
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    obj.maker_fee_rate = message.makerFeeRate === "" ? undefined : Decimal.fromUserInput(message.makerFeeRate, 18).atomics;
    obj.taker_fee_rate = message.takerFeeRate === "" ? undefined : Decimal.fromUserInput(message.takerFeeRate, 18).atomics;
    obj.relayer_fee_share_rate = message.relayerFeeShareRate === "" ? undefined : Decimal.fromUserInput(message.relayerFeeShareRate, 18).atomics;
    obj.status = message.status === 0 ? undefined : message.status;
    obj.min_price_tick_size = message.minPriceTickSize === "" ? undefined : Decimal.fromUserInput(message.minPriceTickSize, 18).atomics;
    obj.min_quantity_tick_size = message.minQuantityTickSize === "" ? undefined : Decimal.fromUserInput(message.minQuantityTickSize, 18).atomics;
    obj.settlement_price = message.settlementPrice === null ? undefined : Decimal.fromUserInput(message.settlementPrice, 18).atomics;
    obj.min_notional = message.minNotional === "" ? undefined : Decimal.fromUserInput(message.minNotional, 18).atomics;
    obj.admin_permissions = message.adminPermissions === 0 ? undefined : message.adminPermissions;
    obj.quote_decimals = message.quoteDecimals === 0 ? undefined : message.quoteDecimals;
    return obj;
  },
  fromAminoMsg(object: BinaryOptionsMarketAminoMsg): BinaryOptionsMarket {
    return BinaryOptionsMarket.fromAmino(object.value);
  },
  fromProtoMsg(message: BinaryOptionsMarketProtoMsg): BinaryOptionsMarket {
    return BinaryOptionsMarket.decode(message.value);
  },
  toProto(message: BinaryOptionsMarket): Uint8Array {
    return BinaryOptionsMarket.encode(message).finish();
  },
  toProtoMsg(message: BinaryOptionsMarket): BinaryOptionsMarketProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.BinaryOptionsMarket",
      value: BinaryOptionsMarket.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseExpiryFuturesMarketInfo(): ExpiryFuturesMarketInfo {
  return {
    marketId: "",
    expirationTimestamp: BigInt(0),
    twapStartTimestamp: BigInt(0),
    expirationTwapStartPriceCumulative: "",
    settlementPrice: ""
  };
}
/**
 * @name ExpiryFuturesMarketInfo
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.ExpiryFuturesMarketInfo
 */
export const ExpiryFuturesMarketInfo = {
  typeUrl: "/injective.exchange.v1beta1.ExpiryFuturesMarketInfo",
  is(o: any): o is ExpiryFuturesMarketInfo {
    return o && (o.$typeUrl === ExpiryFuturesMarketInfo.typeUrl || typeof o.marketId === "string" && typeof o.expirationTimestamp === "bigint" && typeof o.twapStartTimestamp === "bigint" && typeof o.expirationTwapStartPriceCumulative === "string" && typeof o.settlementPrice === "string");
  },
  isAmino(o: any): o is ExpiryFuturesMarketInfoAmino {
    return o && (o.$typeUrl === ExpiryFuturesMarketInfo.typeUrl || typeof o.market_id === "string" && typeof o.expiration_timestamp === "bigint" && typeof o.twap_start_timestamp === "bigint" && typeof o.expiration_twap_start_price_cumulative === "string" && typeof o.settlement_price === "string");
  },
  encode(message: ExpiryFuturesMarketInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.expirationTimestamp !== BigInt(0)) {
      writer.uint32(16).int64(message.expirationTimestamp);
    }
    if (message.twapStartTimestamp !== BigInt(0)) {
      writer.uint32(24).int64(message.twapStartTimestamp);
    }
    if (message.expirationTwapStartPriceCumulative !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.expirationTwapStartPriceCumulative, 18).atomics);
    }
    if (message.settlementPrice !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.settlementPrice, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ExpiryFuturesMarketInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExpiryFuturesMarketInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.expirationTimestamp = reader.int64();
          break;
        case 3:
          message.twapStartTimestamp = reader.int64();
          break;
        case 4:
          message.expirationTwapStartPriceCumulative = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.settlementPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ExpiryFuturesMarketInfo>): ExpiryFuturesMarketInfo {
    const message = createBaseExpiryFuturesMarketInfo();
    message.marketId = object.marketId ?? "";
    message.expirationTimestamp = object.expirationTimestamp !== undefined && object.expirationTimestamp !== null ? BigInt(object.expirationTimestamp.toString()) : BigInt(0);
    message.twapStartTimestamp = object.twapStartTimestamp !== undefined && object.twapStartTimestamp !== null ? BigInt(object.twapStartTimestamp.toString()) : BigInt(0);
    message.expirationTwapStartPriceCumulative = object.expirationTwapStartPriceCumulative ?? "";
    message.settlementPrice = object.settlementPrice ?? "";
    return message;
  },
  fromAmino(object: ExpiryFuturesMarketInfoAmino): ExpiryFuturesMarketInfo {
    const message = createBaseExpiryFuturesMarketInfo();
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    if (object.expiration_timestamp !== undefined && object.expiration_timestamp !== null) {
      message.expirationTimestamp = BigInt(object.expiration_timestamp);
    }
    if (object.twap_start_timestamp !== undefined && object.twap_start_timestamp !== null) {
      message.twapStartTimestamp = BigInt(object.twap_start_timestamp);
    }
    if (object.expiration_twap_start_price_cumulative !== undefined && object.expiration_twap_start_price_cumulative !== null) {
      message.expirationTwapStartPriceCumulative = object.expiration_twap_start_price_cumulative;
    }
    if (object.settlement_price !== undefined && object.settlement_price !== null) {
      message.settlementPrice = object.settlement_price;
    }
    return message;
  },
  toAmino(message: ExpiryFuturesMarketInfo): ExpiryFuturesMarketInfoAmino {
    const obj: any = {};
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    obj.expiration_timestamp = message.expirationTimestamp !== BigInt(0) ? message.expirationTimestamp?.toString() : undefined;
    obj.twap_start_timestamp = message.twapStartTimestamp !== BigInt(0) ? message.twapStartTimestamp?.toString() : undefined;
    obj.expiration_twap_start_price_cumulative = message.expirationTwapStartPriceCumulative === "" ? undefined : Decimal.fromUserInput(message.expirationTwapStartPriceCumulative, 18).atomics;
    obj.settlement_price = message.settlementPrice === "" ? undefined : Decimal.fromUserInput(message.settlementPrice, 18).atomics;
    return obj;
  },
  fromAminoMsg(object: ExpiryFuturesMarketInfoAminoMsg): ExpiryFuturesMarketInfo {
    return ExpiryFuturesMarketInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: ExpiryFuturesMarketInfoProtoMsg): ExpiryFuturesMarketInfo {
    return ExpiryFuturesMarketInfo.decode(message.value);
  },
  toProto(message: ExpiryFuturesMarketInfo): Uint8Array {
    return ExpiryFuturesMarketInfo.encode(message).finish();
  },
  toProtoMsg(message: ExpiryFuturesMarketInfo): ExpiryFuturesMarketInfoProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.ExpiryFuturesMarketInfo",
      value: ExpiryFuturesMarketInfo.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBasePerpetualMarketInfo(): PerpetualMarketInfo {
  return {
    marketId: "",
    hourlyFundingRateCap: "",
    hourlyInterestRate: "",
    nextFundingTimestamp: BigInt(0),
    fundingInterval: BigInt(0)
  };
}
/**
 * @name PerpetualMarketInfo
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.PerpetualMarketInfo
 */
export const PerpetualMarketInfo = {
  typeUrl: "/injective.exchange.v1beta1.PerpetualMarketInfo",
  is(o: any): o is PerpetualMarketInfo {
    return o && (o.$typeUrl === PerpetualMarketInfo.typeUrl || typeof o.marketId === "string" && typeof o.hourlyFundingRateCap === "string" && typeof o.hourlyInterestRate === "string" && typeof o.nextFundingTimestamp === "bigint" && typeof o.fundingInterval === "bigint");
  },
  isAmino(o: any): o is PerpetualMarketInfoAmino {
    return o && (o.$typeUrl === PerpetualMarketInfo.typeUrl || typeof o.market_id === "string" && typeof o.hourly_funding_rate_cap === "string" && typeof o.hourly_interest_rate === "string" && typeof o.next_funding_timestamp === "bigint" && typeof o.funding_interval === "bigint");
  },
  encode(message: PerpetualMarketInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.hourlyFundingRateCap !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.hourlyFundingRateCap, 18).atomics);
    }
    if (message.hourlyInterestRate !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.hourlyInterestRate, 18).atomics);
    }
    if (message.nextFundingTimestamp !== BigInt(0)) {
      writer.uint32(32).int64(message.nextFundingTimestamp);
    }
    if (message.fundingInterval !== BigInt(0)) {
      writer.uint32(40).int64(message.fundingInterval);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PerpetualMarketInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePerpetualMarketInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.hourlyFundingRateCap = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.hourlyInterestRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.nextFundingTimestamp = reader.int64();
          break;
        case 5:
          message.fundingInterval = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<PerpetualMarketInfo>): PerpetualMarketInfo {
    const message = createBasePerpetualMarketInfo();
    message.marketId = object.marketId ?? "";
    message.hourlyFundingRateCap = object.hourlyFundingRateCap ?? "";
    message.hourlyInterestRate = object.hourlyInterestRate ?? "";
    message.nextFundingTimestamp = object.nextFundingTimestamp !== undefined && object.nextFundingTimestamp !== null ? BigInt(object.nextFundingTimestamp.toString()) : BigInt(0);
    message.fundingInterval = object.fundingInterval !== undefined && object.fundingInterval !== null ? BigInt(object.fundingInterval.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: PerpetualMarketInfoAmino): PerpetualMarketInfo {
    const message = createBasePerpetualMarketInfo();
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    if (object.hourly_funding_rate_cap !== undefined && object.hourly_funding_rate_cap !== null) {
      message.hourlyFundingRateCap = object.hourly_funding_rate_cap;
    }
    if (object.hourly_interest_rate !== undefined && object.hourly_interest_rate !== null) {
      message.hourlyInterestRate = object.hourly_interest_rate;
    }
    if (object.next_funding_timestamp !== undefined && object.next_funding_timestamp !== null) {
      message.nextFundingTimestamp = BigInt(object.next_funding_timestamp);
    }
    if (object.funding_interval !== undefined && object.funding_interval !== null) {
      message.fundingInterval = BigInt(object.funding_interval);
    }
    return message;
  },
  toAmino(message: PerpetualMarketInfo): PerpetualMarketInfoAmino {
    const obj: any = {};
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    obj.hourly_funding_rate_cap = message.hourlyFundingRateCap === "" ? undefined : Decimal.fromUserInput(message.hourlyFundingRateCap, 18).atomics;
    obj.hourly_interest_rate = message.hourlyInterestRate === "" ? undefined : Decimal.fromUserInput(message.hourlyInterestRate, 18).atomics;
    obj.next_funding_timestamp = message.nextFundingTimestamp !== BigInt(0) ? message.nextFundingTimestamp?.toString() : undefined;
    obj.funding_interval = message.fundingInterval !== BigInt(0) ? message.fundingInterval?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: PerpetualMarketInfoAminoMsg): PerpetualMarketInfo {
    return PerpetualMarketInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: PerpetualMarketInfoProtoMsg): PerpetualMarketInfo {
    return PerpetualMarketInfo.decode(message.value);
  },
  toProto(message: PerpetualMarketInfo): Uint8Array {
    return PerpetualMarketInfo.encode(message).finish();
  },
  toProtoMsg(message: PerpetualMarketInfo): PerpetualMarketInfoProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.PerpetualMarketInfo",
      value: PerpetualMarketInfo.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBasePerpetualMarketFunding(): PerpetualMarketFunding {
  return {
    cumulativeFunding: "",
    cumulativePrice: "",
    lastTimestamp: BigInt(0)
  };
}
/**
 * @name PerpetualMarketFunding
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.PerpetualMarketFunding
 */
export const PerpetualMarketFunding = {
  typeUrl: "/injective.exchange.v1beta1.PerpetualMarketFunding",
  is(o: any): o is PerpetualMarketFunding {
    return o && (o.$typeUrl === PerpetualMarketFunding.typeUrl || typeof o.cumulativeFunding === "string" && typeof o.cumulativePrice === "string" && typeof o.lastTimestamp === "bigint");
  },
  isAmino(o: any): o is PerpetualMarketFundingAmino {
    return o && (o.$typeUrl === PerpetualMarketFunding.typeUrl || typeof o.cumulative_funding === "string" && typeof o.cumulative_price === "string" && typeof o.last_timestamp === "bigint");
  },
  encode(message: PerpetualMarketFunding, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.cumulativeFunding !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.cumulativeFunding, 18).atomics);
    }
    if (message.cumulativePrice !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.cumulativePrice, 18).atomics);
    }
    if (message.lastTimestamp !== BigInt(0)) {
      writer.uint32(24).int64(message.lastTimestamp);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PerpetualMarketFunding {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePerpetualMarketFunding();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cumulativeFunding = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.cumulativePrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.lastTimestamp = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<PerpetualMarketFunding>): PerpetualMarketFunding {
    const message = createBasePerpetualMarketFunding();
    message.cumulativeFunding = object.cumulativeFunding ?? "";
    message.cumulativePrice = object.cumulativePrice ?? "";
    message.lastTimestamp = object.lastTimestamp !== undefined && object.lastTimestamp !== null ? BigInt(object.lastTimestamp.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: PerpetualMarketFundingAmino): PerpetualMarketFunding {
    const message = createBasePerpetualMarketFunding();
    if (object.cumulative_funding !== undefined && object.cumulative_funding !== null) {
      message.cumulativeFunding = object.cumulative_funding;
    }
    if (object.cumulative_price !== undefined && object.cumulative_price !== null) {
      message.cumulativePrice = object.cumulative_price;
    }
    if (object.last_timestamp !== undefined && object.last_timestamp !== null) {
      message.lastTimestamp = BigInt(object.last_timestamp);
    }
    return message;
  },
  toAmino(message: PerpetualMarketFunding): PerpetualMarketFundingAmino {
    const obj: any = {};
    obj.cumulative_funding = message.cumulativeFunding === "" ? undefined : Decimal.fromUserInput(message.cumulativeFunding, 18).atomics;
    obj.cumulative_price = message.cumulativePrice === "" ? undefined : Decimal.fromUserInput(message.cumulativePrice, 18).atomics;
    obj.last_timestamp = message.lastTimestamp !== BigInt(0) ? message.lastTimestamp?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: PerpetualMarketFundingAminoMsg): PerpetualMarketFunding {
    return PerpetualMarketFunding.fromAmino(object.value);
  },
  fromProtoMsg(message: PerpetualMarketFundingProtoMsg): PerpetualMarketFunding {
    return PerpetualMarketFunding.decode(message.value);
  },
  toProto(message: PerpetualMarketFunding): Uint8Array {
    return PerpetualMarketFunding.encode(message).finish();
  },
  toProtoMsg(message: PerpetualMarketFunding): PerpetualMarketFundingProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.PerpetualMarketFunding",
      value: PerpetualMarketFunding.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseDerivativeMarketSettlementInfo(): DerivativeMarketSettlementInfo {
  return {
    marketId: "",
    settlementPrice: ""
  };
}
/**
 * @name DerivativeMarketSettlementInfo
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.DerivativeMarketSettlementInfo
 */
export const DerivativeMarketSettlementInfo = {
  typeUrl: "/injective.exchange.v1beta1.DerivativeMarketSettlementInfo",
  is(o: any): o is DerivativeMarketSettlementInfo {
    return o && (o.$typeUrl === DerivativeMarketSettlementInfo.typeUrl || typeof o.marketId === "string" && typeof o.settlementPrice === "string");
  },
  isAmino(o: any): o is DerivativeMarketSettlementInfoAmino {
    return o && (o.$typeUrl === DerivativeMarketSettlementInfo.typeUrl || typeof o.market_id === "string" && typeof o.settlement_price === "string");
  },
  encode(message: DerivativeMarketSettlementInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.settlementPrice !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.settlementPrice, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DerivativeMarketSettlementInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDerivativeMarketSettlementInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.settlementPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<DerivativeMarketSettlementInfo>): DerivativeMarketSettlementInfo {
    const message = createBaseDerivativeMarketSettlementInfo();
    message.marketId = object.marketId ?? "";
    message.settlementPrice = object.settlementPrice ?? "";
    return message;
  },
  fromAmino(object: DerivativeMarketSettlementInfoAmino): DerivativeMarketSettlementInfo {
    const message = createBaseDerivativeMarketSettlementInfo();
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    if (object.settlement_price !== undefined && object.settlement_price !== null) {
      message.settlementPrice = object.settlement_price;
    }
    return message;
  },
  toAmino(message: DerivativeMarketSettlementInfo): DerivativeMarketSettlementInfoAmino {
    const obj: any = {};
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    obj.settlement_price = message.settlementPrice === "" ? undefined : Decimal.fromUserInput(message.settlementPrice, 18).atomics;
    return obj;
  },
  fromAminoMsg(object: DerivativeMarketSettlementInfoAminoMsg): DerivativeMarketSettlementInfo {
    return DerivativeMarketSettlementInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: DerivativeMarketSettlementInfoProtoMsg): DerivativeMarketSettlementInfo {
    return DerivativeMarketSettlementInfo.decode(message.value);
  },
  toProto(message: DerivativeMarketSettlementInfo): Uint8Array {
    return DerivativeMarketSettlementInfo.encode(message).finish();
  },
  toProtoMsg(message: DerivativeMarketSettlementInfo): DerivativeMarketSettlementInfoProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.DerivativeMarketSettlementInfo",
      value: DerivativeMarketSettlementInfo.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseNextFundingTimestamp(): NextFundingTimestamp {
  return {
    nextTimestamp: BigInt(0)
  };
}
/**
 * @name NextFundingTimestamp
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.NextFundingTimestamp
 */
export const NextFundingTimestamp = {
  typeUrl: "/injective.exchange.v1beta1.NextFundingTimestamp",
  is(o: any): o is NextFundingTimestamp {
    return o && (o.$typeUrl === NextFundingTimestamp.typeUrl || typeof o.nextTimestamp === "bigint");
  },
  isAmino(o: any): o is NextFundingTimestampAmino {
    return o && (o.$typeUrl === NextFundingTimestamp.typeUrl || typeof o.next_timestamp === "bigint");
  },
  encode(message: NextFundingTimestamp, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.nextTimestamp !== BigInt(0)) {
      writer.uint32(8).int64(message.nextTimestamp);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): NextFundingTimestamp {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNextFundingTimestamp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nextTimestamp = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<NextFundingTimestamp>): NextFundingTimestamp {
    const message = createBaseNextFundingTimestamp();
    message.nextTimestamp = object.nextTimestamp !== undefined && object.nextTimestamp !== null ? BigInt(object.nextTimestamp.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: NextFundingTimestampAmino): NextFundingTimestamp {
    const message = createBaseNextFundingTimestamp();
    if (object.next_timestamp !== undefined && object.next_timestamp !== null) {
      message.nextTimestamp = BigInt(object.next_timestamp);
    }
    return message;
  },
  toAmino(message: NextFundingTimestamp): NextFundingTimestampAmino {
    const obj: any = {};
    obj.next_timestamp = message.nextTimestamp !== BigInt(0) ? message.nextTimestamp?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: NextFundingTimestampAminoMsg): NextFundingTimestamp {
    return NextFundingTimestamp.fromAmino(object.value);
  },
  fromProtoMsg(message: NextFundingTimestampProtoMsg): NextFundingTimestamp {
    return NextFundingTimestamp.decode(message.value);
  },
  toProto(message: NextFundingTimestamp): Uint8Array {
    return NextFundingTimestamp.encode(message).finish();
  },
  toProtoMsg(message: NextFundingTimestamp): NextFundingTimestampProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.NextFundingTimestamp",
      value: NextFundingTimestamp.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMidPriceAndTOB(): MidPriceAndTOB {
  return {
    midPrice: undefined,
    bestBuyPrice: undefined,
    bestSellPrice: undefined
  };
}
/**
 * @name MidPriceAndTOB
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.MidPriceAndTOB
 */
export const MidPriceAndTOB = {
  typeUrl: "/injective.exchange.v1beta1.MidPriceAndTOB",
  is(o: any): o is MidPriceAndTOB {
    return o && o.$typeUrl === MidPriceAndTOB.typeUrl;
  },
  isAmino(o: any): o is MidPriceAndTOBAmino {
    return o && o.$typeUrl === MidPriceAndTOB.typeUrl;
  },
  encode(message: MidPriceAndTOB, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.midPrice !== undefined) {
      writer.uint32(10).string(Decimal.fromUserInput(message.midPrice, 18).atomics);
    }
    if (message.bestBuyPrice !== undefined) {
      writer.uint32(18).string(Decimal.fromUserInput(message.bestBuyPrice, 18).atomics);
    }
    if (message.bestSellPrice !== undefined) {
      writer.uint32(26).string(Decimal.fromUserInput(message.bestSellPrice, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MidPriceAndTOB {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMidPriceAndTOB();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.midPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.bestBuyPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.bestSellPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MidPriceAndTOB>): MidPriceAndTOB {
    const message = createBaseMidPriceAndTOB();
    message.midPrice = object.midPrice ?? undefined;
    message.bestBuyPrice = object.bestBuyPrice ?? undefined;
    message.bestSellPrice = object.bestSellPrice ?? undefined;
    return message;
  },
  fromAmino(object: MidPriceAndTOBAmino): MidPriceAndTOB {
    const message = createBaseMidPriceAndTOB();
    if (object.mid_price !== undefined && object.mid_price !== null) {
      message.midPrice = object.mid_price;
    }
    if (object.best_buy_price !== undefined && object.best_buy_price !== null) {
      message.bestBuyPrice = object.best_buy_price;
    }
    if (object.best_sell_price !== undefined && object.best_sell_price !== null) {
      message.bestSellPrice = object.best_sell_price;
    }
    return message;
  },
  toAmino(message: MidPriceAndTOB): MidPriceAndTOBAmino {
    const obj: any = {};
    obj.mid_price = message.midPrice === null ? undefined : Decimal.fromUserInput(message.midPrice, 18).atomics;
    obj.best_buy_price = message.bestBuyPrice === null ? undefined : Decimal.fromUserInput(message.bestBuyPrice, 18).atomics;
    obj.best_sell_price = message.bestSellPrice === null ? undefined : Decimal.fromUserInput(message.bestSellPrice, 18).atomics;
    return obj;
  },
  fromAminoMsg(object: MidPriceAndTOBAminoMsg): MidPriceAndTOB {
    return MidPriceAndTOB.fromAmino(object.value);
  },
  fromProtoMsg(message: MidPriceAndTOBProtoMsg): MidPriceAndTOB {
    return MidPriceAndTOB.decode(message.value);
  },
  toProto(message: MidPriceAndTOB): Uint8Array {
    return MidPriceAndTOB.encode(message).finish();
  },
  toProtoMsg(message: MidPriceAndTOB): MidPriceAndTOBProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.MidPriceAndTOB",
      value: MidPriceAndTOB.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseSpotMarket(): SpotMarket {
  return {
    ticker: "",
    baseDenom: "",
    quoteDenom: "",
    makerFeeRate: "",
    takerFeeRate: "",
    relayerFeeShareRate: "",
    marketId: "",
    status: 0,
    minPriceTickSize: "",
    minQuantityTickSize: "",
    minNotional: "",
    admin: "",
    adminPermissions: 0,
    baseDecimals: 0,
    quoteDecimals: 0
  };
}
/**
 * An object describing trade pair of two assets.
 * @name SpotMarket
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.SpotMarket
 */
export const SpotMarket = {
  typeUrl: "/injective.exchange.v1beta1.SpotMarket",
  is(o: any): o is SpotMarket {
    return o && (o.$typeUrl === SpotMarket.typeUrl || typeof o.ticker === "string" && typeof o.baseDenom === "string" && typeof o.quoteDenom === "string" && typeof o.makerFeeRate === "string" && typeof o.takerFeeRate === "string" && typeof o.relayerFeeShareRate === "string" && typeof o.marketId === "string" && isSet(o.status) && typeof o.minPriceTickSize === "string" && typeof o.minQuantityTickSize === "string" && typeof o.minNotional === "string" && typeof o.admin === "string" && typeof o.adminPermissions === "number" && typeof o.baseDecimals === "number" && typeof o.quoteDecimals === "number");
  },
  isAmino(o: any): o is SpotMarketAmino {
    return o && (o.$typeUrl === SpotMarket.typeUrl || typeof o.ticker === "string" && typeof o.base_denom === "string" && typeof o.quote_denom === "string" && typeof o.maker_fee_rate === "string" && typeof o.taker_fee_rate === "string" && typeof o.relayer_fee_share_rate === "string" && typeof o.market_id === "string" && isSet(o.status) && typeof o.min_price_tick_size === "string" && typeof o.min_quantity_tick_size === "string" && typeof o.min_notional === "string" && typeof o.admin === "string" && typeof o.admin_permissions === "number" && typeof o.base_decimals === "number" && typeof o.quote_decimals === "number");
  },
  encode(message: SpotMarket, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ticker !== "") {
      writer.uint32(10).string(message.ticker);
    }
    if (message.baseDenom !== "") {
      writer.uint32(18).string(message.baseDenom);
    }
    if (message.quoteDenom !== "") {
      writer.uint32(26).string(message.quoteDenom);
    }
    if (message.makerFeeRate !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.makerFeeRate, 18).atomics);
    }
    if (message.takerFeeRate !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.takerFeeRate, 18).atomics);
    }
    if (message.relayerFeeShareRate !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.relayerFeeShareRate, 18).atomics);
    }
    if (message.marketId !== "") {
      writer.uint32(58).string(message.marketId);
    }
    if (message.status !== 0) {
      writer.uint32(64).int32(message.status);
    }
    if (message.minPriceTickSize !== "") {
      writer.uint32(74).string(Decimal.fromUserInput(message.minPriceTickSize, 18).atomics);
    }
    if (message.minQuantityTickSize !== "") {
      writer.uint32(82).string(Decimal.fromUserInput(message.minQuantityTickSize, 18).atomics);
    }
    if (message.minNotional !== "") {
      writer.uint32(90).string(Decimal.fromUserInput(message.minNotional, 18).atomics);
    }
    if (message.admin !== "") {
      writer.uint32(98).string(message.admin);
    }
    if (message.adminPermissions !== 0) {
      writer.uint32(104).uint32(message.adminPermissions);
    }
    if (message.baseDecimals !== 0) {
      writer.uint32(112).uint32(message.baseDecimals);
    }
    if (message.quoteDecimals !== 0) {
      writer.uint32(120).uint32(message.quoteDecimals);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SpotMarket {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSpotMarket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ticker = reader.string();
          break;
        case 2:
          message.baseDenom = reader.string();
          break;
        case 3:
          message.quoteDenom = reader.string();
          break;
        case 4:
          message.makerFeeRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.takerFeeRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.relayerFeeShareRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 7:
          message.marketId = reader.string();
          break;
        case 8:
          message.status = reader.int32() as any;
          break;
        case 9:
          message.minPriceTickSize = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 10:
          message.minQuantityTickSize = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 11:
          message.minNotional = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 12:
          message.admin = reader.string();
          break;
        case 13:
          message.adminPermissions = reader.uint32();
          break;
        case 14:
          message.baseDecimals = reader.uint32();
          break;
        case 15:
          message.quoteDecimals = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<SpotMarket>): SpotMarket {
    const message = createBaseSpotMarket();
    message.ticker = object.ticker ?? "";
    message.baseDenom = object.baseDenom ?? "";
    message.quoteDenom = object.quoteDenom ?? "";
    message.makerFeeRate = object.makerFeeRate ?? "";
    message.takerFeeRate = object.takerFeeRate ?? "";
    message.relayerFeeShareRate = object.relayerFeeShareRate ?? "";
    message.marketId = object.marketId ?? "";
    message.status = object.status ?? 0;
    message.minPriceTickSize = object.minPriceTickSize ?? "";
    message.minQuantityTickSize = object.minQuantityTickSize ?? "";
    message.minNotional = object.minNotional ?? "";
    message.admin = object.admin ?? "";
    message.adminPermissions = object.adminPermissions ?? 0;
    message.baseDecimals = object.baseDecimals ?? 0;
    message.quoteDecimals = object.quoteDecimals ?? 0;
    return message;
  },
  fromAmino(object: SpotMarketAmino): SpotMarket {
    const message = createBaseSpotMarket();
    if (object.ticker !== undefined && object.ticker !== null) {
      message.ticker = object.ticker;
    }
    if (object.base_denom !== undefined && object.base_denom !== null) {
      message.baseDenom = object.base_denom;
    }
    if (object.quote_denom !== undefined && object.quote_denom !== null) {
      message.quoteDenom = object.quote_denom;
    }
    if (object.maker_fee_rate !== undefined && object.maker_fee_rate !== null) {
      message.makerFeeRate = object.maker_fee_rate;
    }
    if (object.taker_fee_rate !== undefined && object.taker_fee_rate !== null) {
      message.takerFeeRate = object.taker_fee_rate;
    }
    if (object.relayer_fee_share_rate !== undefined && object.relayer_fee_share_rate !== null) {
      message.relayerFeeShareRate = object.relayer_fee_share_rate;
    }
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.min_price_tick_size !== undefined && object.min_price_tick_size !== null) {
      message.minPriceTickSize = object.min_price_tick_size;
    }
    if (object.min_quantity_tick_size !== undefined && object.min_quantity_tick_size !== null) {
      message.minQuantityTickSize = object.min_quantity_tick_size;
    }
    if (object.min_notional !== undefined && object.min_notional !== null) {
      message.minNotional = object.min_notional;
    }
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.admin_permissions !== undefined && object.admin_permissions !== null) {
      message.adminPermissions = object.admin_permissions;
    }
    if (object.base_decimals !== undefined && object.base_decimals !== null) {
      message.baseDecimals = object.base_decimals;
    }
    if (object.quote_decimals !== undefined && object.quote_decimals !== null) {
      message.quoteDecimals = object.quote_decimals;
    }
    return message;
  },
  toAmino(message: SpotMarket): SpotMarketAmino {
    const obj: any = {};
    obj.ticker = message.ticker === "" ? undefined : message.ticker;
    obj.base_denom = message.baseDenom === "" ? undefined : message.baseDenom;
    obj.quote_denom = message.quoteDenom === "" ? undefined : message.quoteDenom;
    obj.maker_fee_rate = message.makerFeeRate === "" ? undefined : Decimal.fromUserInput(message.makerFeeRate, 18).atomics;
    obj.taker_fee_rate = message.takerFeeRate === "" ? undefined : Decimal.fromUserInput(message.takerFeeRate, 18).atomics;
    obj.relayer_fee_share_rate = message.relayerFeeShareRate === "" ? undefined : Decimal.fromUserInput(message.relayerFeeShareRate, 18).atomics;
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    obj.status = message.status === 0 ? undefined : message.status;
    obj.min_price_tick_size = message.minPriceTickSize === "" ? undefined : Decimal.fromUserInput(message.minPriceTickSize, 18).atomics;
    obj.min_quantity_tick_size = message.minQuantityTickSize === "" ? undefined : Decimal.fromUserInput(message.minQuantityTickSize, 18).atomics;
    obj.min_notional = message.minNotional === "" ? undefined : Decimal.fromUserInput(message.minNotional, 18).atomics;
    obj.admin = message.admin === "" ? undefined : message.admin;
    obj.admin_permissions = message.adminPermissions === 0 ? undefined : message.adminPermissions;
    obj.base_decimals = message.baseDecimals === 0 ? undefined : message.baseDecimals;
    obj.quote_decimals = message.quoteDecimals === 0 ? undefined : message.quoteDecimals;
    return obj;
  },
  fromAminoMsg(object: SpotMarketAminoMsg): SpotMarket {
    return SpotMarket.fromAmino(object.value);
  },
  fromProtoMsg(message: SpotMarketProtoMsg): SpotMarket {
    return SpotMarket.decode(message.value);
  },
  toProto(message: SpotMarket): Uint8Array {
    return SpotMarket.encode(message).finish();
  },
  toProtoMsg(message: SpotMarket): SpotMarketProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.SpotMarket",
      value: SpotMarket.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseDeposit(): Deposit {
  return {
    availableBalance: "",
    totalBalance: ""
  };
}
/**
 * A subaccount's deposit for a given base currency
 * @name Deposit
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.Deposit
 */
export const Deposit = {
  typeUrl: "/injective.exchange.v1beta1.Deposit",
  is(o: any): o is Deposit {
    return o && (o.$typeUrl === Deposit.typeUrl || typeof o.availableBalance === "string" && typeof o.totalBalance === "string");
  },
  isAmino(o: any): o is DepositAmino {
    return o && (o.$typeUrl === Deposit.typeUrl || typeof o.available_balance === "string" && typeof o.total_balance === "string");
  },
  encode(message: Deposit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.availableBalance !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.availableBalance, 18).atomics);
    }
    if (message.totalBalance !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.totalBalance, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Deposit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeposit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.availableBalance = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.totalBalance = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Deposit>): Deposit {
    const message = createBaseDeposit();
    message.availableBalance = object.availableBalance ?? "";
    message.totalBalance = object.totalBalance ?? "";
    return message;
  },
  fromAmino(object: DepositAmino): Deposit {
    const message = createBaseDeposit();
    if (object.available_balance !== undefined && object.available_balance !== null) {
      message.availableBalance = object.available_balance;
    }
    if (object.total_balance !== undefined && object.total_balance !== null) {
      message.totalBalance = object.total_balance;
    }
    return message;
  },
  toAmino(message: Deposit): DepositAmino {
    const obj: any = {};
    obj.available_balance = message.availableBalance === "" ? undefined : Decimal.fromUserInput(message.availableBalance, 18).atomics;
    obj.total_balance = message.totalBalance === "" ? undefined : Decimal.fromUserInput(message.totalBalance, 18).atomics;
    return obj;
  },
  fromAminoMsg(object: DepositAminoMsg): Deposit {
    return Deposit.fromAmino(object.value);
  },
  fromProtoMsg(message: DepositProtoMsg): Deposit {
    return Deposit.decode(message.value);
  },
  toProto(message: Deposit): Uint8Array {
    return Deposit.encode(message).finish();
  },
  toProtoMsg(message: Deposit): DepositProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.Deposit",
      value: Deposit.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseSubaccountTradeNonce(): SubaccountTradeNonce {
  return {
    nonce: 0
  };
}
/**
 * @name SubaccountTradeNonce
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.SubaccountTradeNonce
 */
export const SubaccountTradeNonce = {
  typeUrl: "/injective.exchange.v1beta1.SubaccountTradeNonce",
  is(o: any): o is SubaccountTradeNonce {
    return o && (o.$typeUrl === SubaccountTradeNonce.typeUrl || typeof o.nonce === "number");
  },
  isAmino(o: any): o is SubaccountTradeNonceAmino {
    return o && (o.$typeUrl === SubaccountTradeNonce.typeUrl || typeof o.nonce === "number");
  },
  encode(message: SubaccountTradeNonce, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.nonce !== 0) {
      writer.uint32(8).uint32(message.nonce);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SubaccountTradeNonce {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubaccountTradeNonce();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nonce = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<SubaccountTradeNonce>): SubaccountTradeNonce {
    const message = createBaseSubaccountTradeNonce();
    message.nonce = object.nonce ?? 0;
    return message;
  },
  fromAmino(object: SubaccountTradeNonceAmino): SubaccountTradeNonce {
    const message = createBaseSubaccountTradeNonce();
    if (object.nonce !== undefined && object.nonce !== null) {
      message.nonce = object.nonce;
    }
    return message;
  },
  toAmino(message: SubaccountTradeNonce): SubaccountTradeNonceAmino {
    const obj: any = {};
    obj.nonce = message.nonce === 0 ? undefined : message.nonce;
    return obj;
  },
  fromAminoMsg(object: SubaccountTradeNonceAminoMsg): SubaccountTradeNonce {
    return SubaccountTradeNonce.fromAmino(object.value);
  },
  fromProtoMsg(message: SubaccountTradeNonceProtoMsg): SubaccountTradeNonce {
    return SubaccountTradeNonce.decode(message.value);
  },
  toProto(message: SubaccountTradeNonce): Uint8Array {
    return SubaccountTradeNonce.encode(message).finish();
  },
  toProtoMsg(message: SubaccountTradeNonce): SubaccountTradeNonceProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.SubaccountTradeNonce",
      value: SubaccountTradeNonce.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseOrderInfo(): OrderInfo {
  return {
    subaccountId: "",
    feeRecipient: "",
    price: "",
    quantity: "",
    cid: ""
  };
}
/**
 * @name OrderInfo
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.OrderInfo
 */
export const OrderInfo = {
  typeUrl: "/injective.exchange.v1beta1.OrderInfo",
  is(o: any): o is OrderInfo {
    return o && (o.$typeUrl === OrderInfo.typeUrl || typeof o.subaccountId === "string" && typeof o.feeRecipient === "string" && typeof o.price === "string" && typeof o.quantity === "string" && typeof o.cid === "string");
  },
  isAmino(o: any): o is OrderInfoAmino {
    return o && (o.$typeUrl === OrderInfo.typeUrl || typeof o.subaccount_id === "string" && typeof o.fee_recipient === "string" && typeof o.price === "string" && typeof o.quantity === "string" && typeof o.cid === "string");
  },
  encode(message: OrderInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subaccountId !== "") {
      writer.uint32(10).string(message.subaccountId);
    }
    if (message.feeRecipient !== "") {
      writer.uint32(18).string(message.feeRecipient);
    }
    if (message.price !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.price, 18).atomics);
    }
    if (message.quantity !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.quantity, 18).atomics);
    }
    if (message.cid !== "") {
      writer.uint32(42).string(message.cid);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OrderInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subaccountId = reader.string();
          break;
        case 2:
          message.feeRecipient = reader.string();
          break;
        case 3:
          message.price = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.quantity = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.cid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<OrderInfo>): OrderInfo {
    const message = createBaseOrderInfo();
    message.subaccountId = object.subaccountId ?? "";
    message.feeRecipient = object.feeRecipient ?? "";
    message.price = object.price ?? "";
    message.quantity = object.quantity ?? "";
    message.cid = object.cid ?? "";
    return message;
  },
  fromAmino(object: OrderInfoAmino): OrderInfo {
    const message = createBaseOrderInfo();
    if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
      message.subaccountId = object.subaccount_id;
    }
    if (object.fee_recipient !== undefined && object.fee_recipient !== null) {
      message.feeRecipient = object.fee_recipient;
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price;
    }
    if (object.quantity !== undefined && object.quantity !== null) {
      message.quantity = object.quantity;
    }
    if (object.cid !== undefined && object.cid !== null) {
      message.cid = object.cid;
    }
    return message;
  },
  toAmino(message: OrderInfo): OrderInfoAmino {
    const obj: any = {};
    obj.subaccount_id = message.subaccountId === "" ? undefined : message.subaccountId;
    obj.fee_recipient = message.feeRecipient === "" ? undefined : message.feeRecipient;
    obj.price = message.price === "" ? undefined : Decimal.fromUserInput(message.price, 18).atomics;
    obj.quantity = message.quantity === "" ? undefined : Decimal.fromUserInput(message.quantity, 18).atomics;
    obj.cid = message.cid === "" ? undefined : message.cid;
    return obj;
  },
  fromAminoMsg(object: OrderInfoAminoMsg): OrderInfo {
    return OrderInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: OrderInfoProtoMsg): OrderInfo {
    return OrderInfo.decode(message.value);
  },
  toProto(message: OrderInfo): Uint8Array {
    return OrderInfo.encode(message).finish();
  },
  toProtoMsg(message: OrderInfo): OrderInfoProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.OrderInfo",
      value: OrderInfo.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseSpotOrder(): SpotOrder {
  return {
    marketId: "",
    orderInfo: OrderInfo.fromPartial({}),
    orderType: 0,
    triggerPrice: undefined
  };
}
/**
 * @name SpotOrder
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.SpotOrder
 */
export const SpotOrder = {
  typeUrl: "/injective.exchange.v1beta1.SpotOrder",
  is(o: any): o is SpotOrder {
    return o && (o.$typeUrl === SpotOrder.typeUrl || typeof o.marketId === "string" && OrderInfo.is(o.orderInfo) && isSet(o.orderType));
  },
  isAmino(o: any): o is SpotOrderAmino {
    return o && (o.$typeUrl === SpotOrder.typeUrl || typeof o.market_id === "string" && OrderInfo.isAmino(o.order_info) && isSet(o.order_type));
  },
  encode(message: SpotOrder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.orderInfo !== undefined) {
      OrderInfo.encode(message.orderInfo, writer.uint32(18).fork()).ldelim();
    }
    if (message.orderType !== 0) {
      writer.uint32(24).int32(message.orderType);
    }
    if (message.triggerPrice !== undefined) {
      writer.uint32(34).string(Decimal.fromUserInput(message.triggerPrice, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SpotOrder {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSpotOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.orderInfo = OrderInfo.decode(reader, reader.uint32());
          break;
        case 3:
          message.orderType = reader.int32() as any;
          break;
        case 4:
          message.triggerPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<SpotOrder>): SpotOrder {
    const message = createBaseSpotOrder();
    message.marketId = object.marketId ?? "";
    message.orderInfo = object.orderInfo !== undefined && object.orderInfo !== null ? OrderInfo.fromPartial(object.orderInfo) : undefined;
    message.orderType = object.orderType ?? 0;
    message.triggerPrice = object.triggerPrice ?? undefined;
    return message;
  },
  fromAmino(object: SpotOrderAmino): SpotOrder {
    const message = createBaseSpotOrder();
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    if (object.order_info !== undefined && object.order_info !== null) {
      message.orderInfo = OrderInfo.fromAmino(object.order_info);
    }
    if (object.order_type !== undefined && object.order_type !== null) {
      message.orderType = object.order_type;
    }
    if (object.trigger_price !== undefined && object.trigger_price !== null) {
      message.triggerPrice = object.trigger_price;
    }
    return message;
  },
  toAmino(message: SpotOrder): SpotOrderAmino {
    const obj: any = {};
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    obj.order_info = message.orderInfo ? OrderInfo.toAmino(message.orderInfo) : undefined;
    obj.order_type = message.orderType === 0 ? undefined : message.orderType;
    obj.trigger_price = message.triggerPrice === null ? undefined : Decimal.fromUserInput(message.triggerPrice, 18).atomics;
    return obj;
  },
  fromAminoMsg(object: SpotOrderAminoMsg): SpotOrder {
    return SpotOrder.fromAmino(object.value);
  },
  fromProtoMsg(message: SpotOrderProtoMsg): SpotOrder {
    return SpotOrder.decode(message.value);
  },
  toProto(message: SpotOrder): Uint8Array {
    return SpotOrder.encode(message).finish();
  },
  toProtoMsg(message: SpotOrder): SpotOrderProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.SpotOrder",
      value: SpotOrder.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(SpotOrder.typeUrl)) {
      return;
    }
    OrderInfo.registerTypeUrl();
  }
};
function createBaseSpotLimitOrder(): SpotLimitOrder {
  return {
    orderInfo: OrderInfo.fromPartial({}),
    orderType: 0,
    fillable: "",
    triggerPrice: undefined,
    orderHash: new Uint8Array()
  };
}
/**
 * A valid Spot limit order with Metadata.
 * @name SpotLimitOrder
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.SpotLimitOrder
 */
export const SpotLimitOrder = {
  typeUrl: "/injective.exchange.v1beta1.SpotLimitOrder",
  is(o: any): o is SpotLimitOrder {
    return o && (o.$typeUrl === SpotLimitOrder.typeUrl || OrderInfo.is(o.orderInfo) && isSet(o.orderType) && typeof o.fillable === "string" && (o.orderHash instanceof Uint8Array || typeof o.orderHash === "string"));
  },
  isAmino(o: any): o is SpotLimitOrderAmino {
    return o && (o.$typeUrl === SpotLimitOrder.typeUrl || OrderInfo.isAmino(o.order_info) && isSet(o.order_type) && typeof o.fillable === "string" && (o.order_hash instanceof Uint8Array || typeof o.order_hash === "string"));
  },
  encode(message: SpotLimitOrder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.orderInfo !== undefined) {
      OrderInfo.encode(message.orderInfo, writer.uint32(10).fork()).ldelim();
    }
    if (message.orderType !== 0) {
      writer.uint32(16).int32(message.orderType);
    }
    if (message.fillable !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.fillable, 18).atomics);
    }
    if (message.triggerPrice !== undefined) {
      writer.uint32(34).string(Decimal.fromUserInput(message.triggerPrice, 18).atomics);
    }
    if (message.orderHash.length !== 0) {
      writer.uint32(42).bytes(message.orderHash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SpotLimitOrder {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSpotLimitOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orderInfo = OrderInfo.decode(reader, reader.uint32());
          break;
        case 2:
          message.orderType = reader.int32() as any;
          break;
        case 3:
          message.fillable = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.triggerPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.orderHash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<SpotLimitOrder>): SpotLimitOrder {
    const message = createBaseSpotLimitOrder();
    message.orderInfo = object.orderInfo !== undefined && object.orderInfo !== null ? OrderInfo.fromPartial(object.orderInfo) : undefined;
    message.orderType = object.orderType ?? 0;
    message.fillable = object.fillable ?? "";
    message.triggerPrice = object.triggerPrice ?? undefined;
    message.orderHash = object.orderHash ?? new Uint8Array();
    return message;
  },
  fromAmino(object: SpotLimitOrderAmino): SpotLimitOrder {
    const message = createBaseSpotLimitOrder();
    if (object.order_info !== undefined && object.order_info !== null) {
      message.orderInfo = OrderInfo.fromAmino(object.order_info);
    }
    if (object.order_type !== undefined && object.order_type !== null) {
      message.orderType = object.order_type;
    }
    if (object.fillable !== undefined && object.fillable !== null) {
      message.fillable = object.fillable;
    }
    if (object.trigger_price !== undefined && object.trigger_price !== null) {
      message.triggerPrice = object.trigger_price;
    }
    if (object.order_hash !== undefined && object.order_hash !== null) {
      message.orderHash = bytesFromBase64(object.order_hash);
    }
    return message;
  },
  toAmino(message: SpotLimitOrder): SpotLimitOrderAmino {
    const obj: any = {};
    obj.order_info = message.orderInfo ? OrderInfo.toAmino(message.orderInfo) : undefined;
    obj.order_type = message.orderType === 0 ? undefined : message.orderType;
    obj.fillable = message.fillable === "" ? undefined : Decimal.fromUserInput(message.fillable, 18).atomics;
    obj.trigger_price = message.triggerPrice === null ? undefined : Decimal.fromUserInput(message.triggerPrice, 18).atomics;
    obj.order_hash = message.orderHash ? base64FromBytes(message.orderHash) : undefined;
    return obj;
  },
  fromAminoMsg(object: SpotLimitOrderAminoMsg): SpotLimitOrder {
    return SpotLimitOrder.fromAmino(object.value);
  },
  fromProtoMsg(message: SpotLimitOrderProtoMsg): SpotLimitOrder {
    return SpotLimitOrder.decode(message.value);
  },
  toProto(message: SpotLimitOrder): Uint8Array {
    return SpotLimitOrder.encode(message).finish();
  },
  toProtoMsg(message: SpotLimitOrder): SpotLimitOrderProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.SpotLimitOrder",
      value: SpotLimitOrder.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(SpotLimitOrder.typeUrl)) {
      return;
    }
    OrderInfo.registerTypeUrl();
  }
};
function createBaseSpotMarketOrder(): SpotMarketOrder {
  return {
    orderInfo: OrderInfo.fromPartial({}),
    balanceHold: "",
    orderHash: new Uint8Array(),
    orderType: 0,
    triggerPrice: undefined
  };
}
/**
 * A valid Spot market order with Metadata.
 * @name SpotMarketOrder
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.SpotMarketOrder
 */
export const SpotMarketOrder = {
  typeUrl: "/injective.exchange.v1beta1.SpotMarketOrder",
  is(o: any): o is SpotMarketOrder {
    return o && (o.$typeUrl === SpotMarketOrder.typeUrl || OrderInfo.is(o.orderInfo) && typeof o.balanceHold === "string" && (o.orderHash instanceof Uint8Array || typeof o.orderHash === "string") && isSet(o.orderType));
  },
  isAmino(o: any): o is SpotMarketOrderAmino {
    return o && (o.$typeUrl === SpotMarketOrder.typeUrl || OrderInfo.isAmino(o.order_info) && typeof o.balance_hold === "string" && (o.order_hash instanceof Uint8Array || typeof o.order_hash === "string") && isSet(o.order_type));
  },
  encode(message: SpotMarketOrder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.orderInfo !== undefined) {
      OrderInfo.encode(message.orderInfo, writer.uint32(10).fork()).ldelim();
    }
    if (message.balanceHold !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.balanceHold, 18).atomics);
    }
    if (message.orderHash.length !== 0) {
      writer.uint32(26).bytes(message.orderHash);
    }
    if (message.orderType !== 0) {
      writer.uint32(32).int32(message.orderType);
    }
    if (message.triggerPrice !== undefined) {
      writer.uint32(42).string(Decimal.fromUserInput(message.triggerPrice, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SpotMarketOrder {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSpotMarketOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orderInfo = OrderInfo.decode(reader, reader.uint32());
          break;
        case 2:
          message.balanceHold = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.orderHash = reader.bytes();
          break;
        case 4:
          message.orderType = reader.int32() as any;
          break;
        case 5:
          message.triggerPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<SpotMarketOrder>): SpotMarketOrder {
    const message = createBaseSpotMarketOrder();
    message.orderInfo = object.orderInfo !== undefined && object.orderInfo !== null ? OrderInfo.fromPartial(object.orderInfo) : undefined;
    message.balanceHold = object.balanceHold ?? "";
    message.orderHash = object.orderHash ?? new Uint8Array();
    message.orderType = object.orderType ?? 0;
    message.triggerPrice = object.triggerPrice ?? undefined;
    return message;
  },
  fromAmino(object: SpotMarketOrderAmino): SpotMarketOrder {
    const message = createBaseSpotMarketOrder();
    if (object.order_info !== undefined && object.order_info !== null) {
      message.orderInfo = OrderInfo.fromAmino(object.order_info);
    }
    if (object.balance_hold !== undefined && object.balance_hold !== null) {
      message.balanceHold = object.balance_hold;
    }
    if (object.order_hash !== undefined && object.order_hash !== null) {
      message.orderHash = bytesFromBase64(object.order_hash);
    }
    if (object.order_type !== undefined && object.order_type !== null) {
      message.orderType = object.order_type;
    }
    if (object.trigger_price !== undefined && object.trigger_price !== null) {
      message.triggerPrice = object.trigger_price;
    }
    return message;
  },
  toAmino(message: SpotMarketOrder): SpotMarketOrderAmino {
    const obj: any = {};
    obj.order_info = message.orderInfo ? OrderInfo.toAmino(message.orderInfo) : undefined;
    obj.balance_hold = message.balanceHold === "" ? undefined : Decimal.fromUserInput(message.balanceHold, 18).atomics;
    obj.order_hash = message.orderHash ? base64FromBytes(message.orderHash) : undefined;
    obj.order_type = message.orderType === 0 ? undefined : message.orderType;
    obj.trigger_price = message.triggerPrice === null ? undefined : Decimal.fromUserInput(message.triggerPrice, 18).atomics;
    return obj;
  },
  fromAminoMsg(object: SpotMarketOrderAminoMsg): SpotMarketOrder {
    return SpotMarketOrder.fromAmino(object.value);
  },
  fromProtoMsg(message: SpotMarketOrderProtoMsg): SpotMarketOrder {
    return SpotMarketOrder.decode(message.value);
  },
  toProto(message: SpotMarketOrder): Uint8Array {
    return SpotMarketOrder.encode(message).finish();
  },
  toProtoMsg(message: SpotMarketOrder): SpotMarketOrderProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.SpotMarketOrder",
      value: SpotMarketOrder.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(SpotMarketOrder.typeUrl)) {
      return;
    }
    OrderInfo.registerTypeUrl();
  }
};
function createBaseDerivativeOrder(): DerivativeOrder {
  return {
    marketId: "",
    orderInfo: OrderInfo.fromPartial({}),
    orderType: 0,
    margin: "",
    triggerPrice: undefined
  };
}
/**
 * @name DerivativeOrder
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.DerivativeOrder
 */
export const DerivativeOrder = {
  typeUrl: "/injective.exchange.v1beta1.DerivativeOrder",
  is(o: any): o is DerivativeOrder {
    return o && (o.$typeUrl === DerivativeOrder.typeUrl || typeof o.marketId === "string" && OrderInfo.is(o.orderInfo) && isSet(o.orderType) && typeof o.margin === "string");
  },
  isAmino(o: any): o is DerivativeOrderAmino {
    return o && (o.$typeUrl === DerivativeOrder.typeUrl || typeof o.market_id === "string" && OrderInfo.isAmino(o.order_info) && isSet(o.order_type) && typeof o.margin === "string");
  },
  encode(message: DerivativeOrder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.orderInfo !== undefined) {
      OrderInfo.encode(message.orderInfo, writer.uint32(18).fork()).ldelim();
    }
    if (message.orderType !== 0) {
      writer.uint32(24).int32(message.orderType);
    }
    if (message.margin !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.margin, 18).atomics);
    }
    if (message.triggerPrice !== undefined) {
      writer.uint32(42).string(Decimal.fromUserInput(message.triggerPrice, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DerivativeOrder {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDerivativeOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.orderInfo = OrderInfo.decode(reader, reader.uint32());
          break;
        case 3:
          message.orderType = reader.int32() as any;
          break;
        case 4:
          message.margin = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.triggerPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<DerivativeOrder>): DerivativeOrder {
    const message = createBaseDerivativeOrder();
    message.marketId = object.marketId ?? "";
    message.orderInfo = object.orderInfo !== undefined && object.orderInfo !== null ? OrderInfo.fromPartial(object.orderInfo) : undefined;
    message.orderType = object.orderType ?? 0;
    message.margin = object.margin ?? "";
    message.triggerPrice = object.triggerPrice ?? undefined;
    return message;
  },
  fromAmino(object: DerivativeOrderAmino): DerivativeOrder {
    const message = createBaseDerivativeOrder();
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    if (object.order_info !== undefined && object.order_info !== null) {
      message.orderInfo = OrderInfo.fromAmino(object.order_info);
    }
    if (object.order_type !== undefined && object.order_type !== null) {
      message.orderType = object.order_type;
    }
    if (object.margin !== undefined && object.margin !== null) {
      message.margin = object.margin;
    }
    if (object.trigger_price !== undefined && object.trigger_price !== null) {
      message.triggerPrice = object.trigger_price;
    }
    return message;
  },
  toAmino(message: DerivativeOrder): DerivativeOrderAmino {
    const obj: any = {};
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    obj.order_info = message.orderInfo ? OrderInfo.toAmino(message.orderInfo) : undefined;
    obj.order_type = message.orderType === 0 ? undefined : message.orderType;
    obj.margin = message.margin === "" ? undefined : Decimal.fromUserInput(message.margin, 18).atomics;
    obj.trigger_price = message.triggerPrice === null ? undefined : Decimal.fromUserInput(message.triggerPrice, 18).atomics;
    return obj;
  },
  fromAminoMsg(object: DerivativeOrderAminoMsg): DerivativeOrder {
    return DerivativeOrder.fromAmino(object.value);
  },
  fromProtoMsg(message: DerivativeOrderProtoMsg): DerivativeOrder {
    return DerivativeOrder.decode(message.value);
  },
  toProto(message: DerivativeOrder): Uint8Array {
    return DerivativeOrder.encode(message).finish();
  },
  toProtoMsg(message: DerivativeOrder): DerivativeOrderProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.DerivativeOrder",
      value: DerivativeOrder.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(DerivativeOrder.typeUrl)) {
      return;
    }
    OrderInfo.registerTypeUrl();
  }
};
function createBaseSubaccountOrderbookMetadata(): SubaccountOrderbookMetadata {
  return {
    vanillaLimitOrderCount: 0,
    reduceOnlyLimitOrderCount: 0,
    aggregateReduceOnlyQuantity: "",
    aggregateVanillaQuantity: "",
    vanillaConditionalOrderCount: 0,
    reduceOnlyConditionalOrderCount: 0
  };
}
/**
 * @name SubaccountOrderbookMetadata
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.SubaccountOrderbookMetadata
 */
export const SubaccountOrderbookMetadata = {
  typeUrl: "/injective.exchange.v1beta1.SubaccountOrderbookMetadata",
  is(o: any): o is SubaccountOrderbookMetadata {
    return o && (o.$typeUrl === SubaccountOrderbookMetadata.typeUrl || typeof o.vanillaLimitOrderCount === "number" && typeof o.reduceOnlyLimitOrderCount === "number" && typeof o.aggregateReduceOnlyQuantity === "string" && typeof o.aggregateVanillaQuantity === "string" && typeof o.vanillaConditionalOrderCount === "number" && typeof o.reduceOnlyConditionalOrderCount === "number");
  },
  isAmino(o: any): o is SubaccountOrderbookMetadataAmino {
    return o && (o.$typeUrl === SubaccountOrderbookMetadata.typeUrl || typeof o.vanilla_limit_order_count === "number" && typeof o.reduce_only_limit_order_count === "number" && typeof o.aggregate_reduce_only_quantity === "string" && typeof o.aggregate_vanilla_quantity === "string" && typeof o.vanilla_conditional_order_count === "number" && typeof o.reduce_only_conditional_order_count === "number");
  },
  encode(message: SubaccountOrderbookMetadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.vanillaLimitOrderCount !== 0) {
      writer.uint32(8).uint32(message.vanillaLimitOrderCount);
    }
    if (message.reduceOnlyLimitOrderCount !== 0) {
      writer.uint32(16).uint32(message.reduceOnlyLimitOrderCount);
    }
    if (message.aggregateReduceOnlyQuantity !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.aggregateReduceOnlyQuantity, 18).atomics);
    }
    if (message.aggregateVanillaQuantity !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.aggregateVanillaQuantity, 18).atomics);
    }
    if (message.vanillaConditionalOrderCount !== 0) {
      writer.uint32(40).uint32(message.vanillaConditionalOrderCount);
    }
    if (message.reduceOnlyConditionalOrderCount !== 0) {
      writer.uint32(48).uint32(message.reduceOnlyConditionalOrderCount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SubaccountOrderbookMetadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubaccountOrderbookMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vanillaLimitOrderCount = reader.uint32();
          break;
        case 2:
          message.reduceOnlyLimitOrderCount = reader.uint32();
          break;
        case 3:
          message.aggregateReduceOnlyQuantity = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.aggregateVanillaQuantity = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.vanillaConditionalOrderCount = reader.uint32();
          break;
        case 6:
          message.reduceOnlyConditionalOrderCount = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<SubaccountOrderbookMetadata>): SubaccountOrderbookMetadata {
    const message = createBaseSubaccountOrderbookMetadata();
    message.vanillaLimitOrderCount = object.vanillaLimitOrderCount ?? 0;
    message.reduceOnlyLimitOrderCount = object.reduceOnlyLimitOrderCount ?? 0;
    message.aggregateReduceOnlyQuantity = object.aggregateReduceOnlyQuantity ?? "";
    message.aggregateVanillaQuantity = object.aggregateVanillaQuantity ?? "";
    message.vanillaConditionalOrderCount = object.vanillaConditionalOrderCount ?? 0;
    message.reduceOnlyConditionalOrderCount = object.reduceOnlyConditionalOrderCount ?? 0;
    return message;
  },
  fromAmino(object: SubaccountOrderbookMetadataAmino): SubaccountOrderbookMetadata {
    const message = createBaseSubaccountOrderbookMetadata();
    if (object.vanilla_limit_order_count !== undefined && object.vanilla_limit_order_count !== null) {
      message.vanillaLimitOrderCount = object.vanilla_limit_order_count;
    }
    if (object.reduce_only_limit_order_count !== undefined && object.reduce_only_limit_order_count !== null) {
      message.reduceOnlyLimitOrderCount = object.reduce_only_limit_order_count;
    }
    if (object.aggregate_reduce_only_quantity !== undefined && object.aggregate_reduce_only_quantity !== null) {
      message.aggregateReduceOnlyQuantity = object.aggregate_reduce_only_quantity;
    }
    if (object.aggregate_vanilla_quantity !== undefined && object.aggregate_vanilla_quantity !== null) {
      message.aggregateVanillaQuantity = object.aggregate_vanilla_quantity;
    }
    if (object.vanilla_conditional_order_count !== undefined && object.vanilla_conditional_order_count !== null) {
      message.vanillaConditionalOrderCount = object.vanilla_conditional_order_count;
    }
    if (object.reduce_only_conditional_order_count !== undefined && object.reduce_only_conditional_order_count !== null) {
      message.reduceOnlyConditionalOrderCount = object.reduce_only_conditional_order_count;
    }
    return message;
  },
  toAmino(message: SubaccountOrderbookMetadata): SubaccountOrderbookMetadataAmino {
    const obj: any = {};
    obj.vanilla_limit_order_count = message.vanillaLimitOrderCount === 0 ? undefined : message.vanillaLimitOrderCount;
    obj.reduce_only_limit_order_count = message.reduceOnlyLimitOrderCount === 0 ? undefined : message.reduceOnlyLimitOrderCount;
    obj.aggregate_reduce_only_quantity = message.aggregateReduceOnlyQuantity === "" ? undefined : Decimal.fromUserInput(message.aggregateReduceOnlyQuantity, 18).atomics;
    obj.aggregate_vanilla_quantity = message.aggregateVanillaQuantity === "" ? undefined : Decimal.fromUserInput(message.aggregateVanillaQuantity, 18).atomics;
    obj.vanilla_conditional_order_count = message.vanillaConditionalOrderCount === 0 ? undefined : message.vanillaConditionalOrderCount;
    obj.reduce_only_conditional_order_count = message.reduceOnlyConditionalOrderCount === 0 ? undefined : message.reduceOnlyConditionalOrderCount;
    return obj;
  },
  fromAminoMsg(object: SubaccountOrderbookMetadataAminoMsg): SubaccountOrderbookMetadata {
    return SubaccountOrderbookMetadata.fromAmino(object.value);
  },
  fromProtoMsg(message: SubaccountOrderbookMetadataProtoMsg): SubaccountOrderbookMetadata {
    return SubaccountOrderbookMetadata.decode(message.value);
  },
  toProto(message: SubaccountOrderbookMetadata): Uint8Array {
    return SubaccountOrderbookMetadata.encode(message).finish();
  },
  toProtoMsg(message: SubaccountOrderbookMetadata): SubaccountOrderbookMetadataProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.SubaccountOrderbookMetadata",
      value: SubaccountOrderbookMetadata.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseSubaccountOrder(): SubaccountOrder {
  return {
    price: "",
    quantity: "",
    isReduceOnly: false,
    cid: ""
  };
}
/**
 * @name SubaccountOrder
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.SubaccountOrder
 */
export const SubaccountOrder = {
  typeUrl: "/injective.exchange.v1beta1.SubaccountOrder",
  is(o: any): o is SubaccountOrder {
    return o && (o.$typeUrl === SubaccountOrder.typeUrl || typeof o.price === "string" && typeof o.quantity === "string" && typeof o.isReduceOnly === "boolean" && typeof o.cid === "string");
  },
  isAmino(o: any): o is SubaccountOrderAmino {
    return o && (o.$typeUrl === SubaccountOrder.typeUrl || typeof o.price === "string" && typeof o.quantity === "string" && typeof o.isReduceOnly === "boolean" && typeof o.cid === "string");
  },
  encode(message: SubaccountOrder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.price !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.price, 18).atomics);
    }
    if (message.quantity !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.quantity, 18).atomics);
    }
    if (message.isReduceOnly === true) {
      writer.uint32(24).bool(message.isReduceOnly);
    }
    if (message.cid !== "") {
      writer.uint32(34).string(message.cid);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SubaccountOrder {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubaccountOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.price = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.quantity = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.isReduceOnly = reader.bool();
          break;
        case 4:
          message.cid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<SubaccountOrder>): SubaccountOrder {
    const message = createBaseSubaccountOrder();
    message.price = object.price ?? "";
    message.quantity = object.quantity ?? "";
    message.isReduceOnly = object.isReduceOnly ?? false;
    message.cid = object.cid ?? "";
    return message;
  },
  fromAmino(object: SubaccountOrderAmino): SubaccountOrder {
    const message = createBaseSubaccountOrder();
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price;
    }
    if (object.quantity !== undefined && object.quantity !== null) {
      message.quantity = object.quantity;
    }
    if (object.isReduceOnly !== undefined && object.isReduceOnly !== null) {
      message.isReduceOnly = object.isReduceOnly;
    }
    if (object.cid !== undefined && object.cid !== null) {
      message.cid = object.cid;
    }
    return message;
  },
  toAmino(message: SubaccountOrder): SubaccountOrderAmino {
    const obj: any = {};
    obj.price = message.price === "" ? undefined : Decimal.fromUserInput(message.price, 18).atomics;
    obj.quantity = message.quantity === "" ? undefined : Decimal.fromUserInput(message.quantity, 18).atomics;
    obj.isReduceOnly = message.isReduceOnly === false ? undefined : message.isReduceOnly;
    obj.cid = message.cid === "" ? undefined : message.cid;
    return obj;
  },
  fromAminoMsg(object: SubaccountOrderAminoMsg): SubaccountOrder {
    return SubaccountOrder.fromAmino(object.value);
  },
  fromProtoMsg(message: SubaccountOrderProtoMsg): SubaccountOrder {
    return SubaccountOrder.decode(message.value);
  },
  toProto(message: SubaccountOrder): Uint8Array {
    return SubaccountOrder.encode(message).finish();
  },
  toProtoMsg(message: SubaccountOrder): SubaccountOrderProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.SubaccountOrder",
      value: SubaccountOrder.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseSubaccountOrderData(): SubaccountOrderData {
  return {
    order: undefined,
    orderHash: new Uint8Array()
  };
}
/**
 * @name SubaccountOrderData
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.SubaccountOrderData
 */
export const SubaccountOrderData = {
  typeUrl: "/injective.exchange.v1beta1.SubaccountOrderData",
  is(o: any): o is SubaccountOrderData {
    return o && (o.$typeUrl === SubaccountOrderData.typeUrl || o.orderHash instanceof Uint8Array || typeof o.orderHash === "string");
  },
  isAmino(o: any): o is SubaccountOrderDataAmino {
    return o && (o.$typeUrl === SubaccountOrderData.typeUrl || o.order_hash instanceof Uint8Array || typeof o.order_hash === "string");
  },
  encode(message: SubaccountOrderData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.order !== undefined) {
      SubaccountOrder.encode(message.order, writer.uint32(10).fork()).ldelim();
    }
    if (message.orderHash.length !== 0) {
      writer.uint32(18).bytes(message.orderHash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SubaccountOrderData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubaccountOrderData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.order = SubaccountOrder.decode(reader, reader.uint32());
          break;
        case 2:
          message.orderHash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<SubaccountOrderData>): SubaccountOrderData {
    const message = createBaseSubaccountOrderData();
    message.order = object.order !== undefined && object.order !== null ? SubaccountOrder.fromPartial(object.order) : undefined;
    message.orderHash = object.orderHash ?? new Uint8Array();
    return message;
  },
  fromAmino(object: SubaccountOrderDataAmino): SubaccountOrderData {
    const message = createBaseSubaccountOrderData();
    if (object.order !== undefined && object.order !== null) {
      message.order = SubaccountOrder.fromAmino(object.order);
    }
    if (object.order_hash !== undefined && object.order_hash !== null) {
      message.orderHash = bytesFromBase64(object.order_hash);
    }
    return message;
  },
  toAmino(message: SubaccountOrderData): SubaccountOrderDataAmino {
    const obj: any = {};
    obj.order = message.order ? SubaccountOrder.toAmino(message.order) : undefined;
    obj.order_hash = message.orderHash ? base64FromBytes(message.orderHash) : undefined;
    return obj;
  },
  fromAminoMsg(object: SubaccountOrderDataAminoMsg): SubaccountOrderData {
    return SubaccountOrderData.fromAmino(object.value);
  },
  fromProtoMsg(message: SubaccountOrderDataProtoMsg): SubaccountOrderData {
    return SubaccountOrderData.decode(message.value);
  },
  toProto(message: SubaccountOrderData): Uint8Array {
    return SubaccountOrderData.encode(message).finish();
  },
  toProtoMsg(message: SubaccountOrderData): SubaccountOrderDataProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.SubaccountOrderData",
      value: SubaccountOrderData.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(SubaccountOrderData.typeUrl)) {
      return;
    }
    SubaccountOrder.registerTypeUrl();
  }
};
function createBaseDerivativeLimitOrder(): DerivativeLimitOrder {
  return {
    orderInfo: OrderInfo.fromPartial({}),
    orderType: 0,
    margin: "",
    fillable: "",
    triggerPrice: undefined,
    orderHash: new Uint8Array()
  };
}
/**
 * A valid Derivative limit order with Metadata.
 * @name DerivativeLimitOrder
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.DerivativeLimitOrder
 */
export const DerivativeLimitOrder = {
  typeUrl: "/injective.exchange.v1beta1.DerivativeLimitOrder",
  is(o: any): o is DerivativeLimitOrder {
    return o && (o.$typeUrl === DerivativeLimitOrder.typeUrl || OrderInfo.is(o.orderInfo) && isSet(o.orderType) && typeof o.margin === "string" && typeof o.fillable === "string" && (o.orderHash instanceof Uint8Array || typeof o.orderHash === "string"));
  },
  isAmino(o: any): o is DerivativeLimitOrderAmino {
    return o && (o.$typeUrl === DerivativeLimitOrder.typeUrl || OrderInfo.isAmino(o.order_info) && isSet(o.order_type) && typeof o.margin === "string" && typeof o.fillable === "string" && (o.order_hash instanceof Uint8Array || typeof o.order_hash === "string"));
  },
  encode(message: DerivativeLimitOrder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.orderInfo !== undefined) {
      OrderInfo.encode(message.orderInfo, writer.uint32(10).fork()).ldelim();
    }
    if (message.orderType !== 0) {
      writer.uint32(16).int32(message.orderType);
    }
    if (message.margin !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.margin, 18).atomics);
    }
    if (message.fillable !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.fillable, 18).atomics);
    }
    if (message.triggerPrice !== undefined) {
      writer.uint32(42).string(Decimal.fromUserInput(message.triggerPrice, 18).atomics);
    }
    if (message.orderHash.length !== 0) {
      writer.uint32(50).bytes(message.orderHash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DerivativeLimitOrder {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDerivativeLimitOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orderInfo = OrderInfo.decode(reader, reader.uint32());
          break;
        case 2:
          message.orderType = reader.int32() as any;
          break;
        case 3:
          message.margin = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.fillable = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.triggerPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.orderHash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<DerivativeLimitOrder>): DerivativeLimitOrder {
    const message = createBaseDerivativeLimitOrder();
    message.orderInfo = object.orderInfo !== undefined && object.orderInfo !== null ? OrderInfo.fromPartial(object.orderInfo) : undefined;
    message.orderType = object.orderType ?? 0;
    message.margin = object.margin ?? "";
    message.fillable = object.fillable ?? "";
    message.triggerPrice = object.triggerPrice ?? undefined;
    message.orderHash = object.orderHash ?? new Uint8Array();
    return message;
  },
  fromAmino(object: DerivativeLimitOrderAmino): DerivativeLimitOrder {
    const message = createBaseDerivativeLimitOrder();
    if (object.order_info !== undefined && object.order_info !== null) {
      message.orderInfo = OrderInfo.fromAmino(object.order_info);
    }
    if (object.order_type !== undefined && object.order_type !== null) {
      message.orderType = object.order_type;
    }
    if (object.margin !== undefined && object.margin !== null) {
      message.margin = object.margin;
    }
    if (object.fillable !== undefined && object.fillable !== null) {
      message.fillable = object.fillable;
    }
    if (object.trigger_price !== undefined && object.trigger_price !== null) {
      message.triggerPrice = object.trigger_price;
    }
    if (object.order_hash !== undefined && object.order_hash !== null) {
      message.orderHash = bytesFromBase64(object.order_hash);
    }
    return message;
  },
  toAmino(message: DerivativeLimitOrder): DerivativeLimitOrderAmino {
    const obj: any = {};
    obj.order_info = message.orderInfo ? OrderInfo.toAmino(message.orderInfo) : undefined;
    obj.order_type = message.orderType === 0 ? undefined : message.orderType;
    obj.margin = message.margin === "" ? undefined : Decimal.fromUserInput(message.margin, 18).atomics;
    obj.fillable = message.fillable === "" ? undefined : Decimal.fromUserInput(message.fillable, 18).atomics;
    obj.trigger_price = message.triggerPrice === null ? undefined : Decimal.fromUserInput(message.triggerPrice, 18).atomics;
    obj.order_hash = message.orderHash ? base64FromBytes(message.orderHash) : undefined;
    return obj;
  },
  fromAminoMsg(object: DerivativeLimitOrderAminoMsg): DerivativeLimitOrder {
    return DerivativeLimitOrder.fromAmino(object.value);
  },
  fromProtoMsg(message: DerivativeLimitOrderProtoMsg): DerivativeLimitOrder {
    return DerivativeLimitOrder.decode(message.value);
  },
  toProto(message: DerivativeLimitOrder): Uint8Array {
    return DerivativeLimitOrder.encode(message).finish();
  },
  toProtoMsg(message: DerivativeLimitOrder): DerivativeLimitOrderProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.DerivativeLimitOrder",
      value: DerivativeLimitOrder.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(DerivativeLimitOrder.typeUrl)) {
      return;
    }
    OrderInfo.registerTypeUrl();
  }
};
function createBaseDerivativeMarketOrder(): DerivativeMarketOrder {
  return {
    orderInfo: OrderInfo.fromPartial({}),
    orderType: 0,
    margin: "",
    marginHold: "",
    triggerPrice: undefined,
    orderHash: new Uint8Array()
  };
}
/**
 * A valid Derivative market order with Metadata.
 * @name DerivativeMarketOrder
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.DerivativeMarketOrder
 */
export const DerivativeMarketOrder = {
  typeUrl: "/injective.exchange.v1beta1.DerivativeMarketOrder",
  is(o: any): o is DerivativeMarketOrder {
    return o && (o.$typeUrl === DerivativeMarketOrder.typeUrl || OrderInfo.is(o.orderInfo) && isSet(o.orderType) && typeof o.margin === "string" && typeof o.marginHold === "string" && (o.orderHash instanceof Uint8Array || typeof o.orderHash === "string"));
  },
  isAmino(o: any): o is DerivativeMarketOrderAmino {
    return o && (o.$typeUrl === DerivativeMarketOrder.typeUrl || OrderInfo.isAmino(o.order_info) && isSet(o.order_type) && typeof o.margin === "string" && typeof o.margin_hold === "string" && (o.order_hash instanceof Uint8Array || typeof o.order_hash === "string"));
  },
  encode(message: DerivativeMarketOrder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.orderInfo !== undefined) {
      OrderInfo.encode(message.orderInfo, writer.uint32(10).fork()).ldelim();
    }
    if (message.orderType !== 0) {
      writer.uint32(16).int32(message.orderType);
    }
    if (message.margin !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.margin, 18).atomics);
    }
    if (message.marginHold !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.marginHold, 18).atomics);
    }
    if (message.triggerPrice !== undefined) {
      writer.uint32(42).string(Decimal.fromUserInput(message.triggerPrice, 18).atomics);
    }
    if (message.orderHash.length !== 0) {
      writer.uint32(50).bytes(message.orderHash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DerivativeMarketOrder {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDerivativeMarketOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orderInfo = OrderInfo.decode(reader, reader.uint32());
          break;
        case 2:
          message.orderType = reader.int32() as any;
          break;
        case 3:
          message.margin = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.marginHold = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.triggerPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.orderHash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<DerivativeMarketOrder>): DerivativeMarketOrder {
    const message = createBaseDerivativeMarketOrder();
    message.orderInfo = object.orderInfo !== undefined && object.orderInfo !== null ? OrderInfo.fromPartial(object.orderInfo) : undefined;
    message.orderType = object.orderType ?? 0;
    message.margin = object.margin ?? "";
    message.marginHold = object.marginHold ?? "";
    message.triggerPrice = object.triggerPrice ?? undefined;
    message.orderHash = object.orderHash ?? new Uint8Array();
    return message;
  },
  fromAmino(object: DerivativeMarketOrderAmino): DerivativeMarketOrder {
    const message = createBaseDerivativeMarketOrder();
    if (object.order_info !== undefined && object.order_info !== null) {
      message.orderInfo = OrderInfo.fromAmino(object.order_info);
    }
    if (object.order_type !== undefined && object.order_type !== null) {
      message.orderType = object.order_type;
    }
    if (object.margin !== undefined && object.margin !== null) {
      message.margin = object.margin;
    }
    if (object.margin_hold !== undefined && object.margin_hold !== null) {
      message.marginHold = object.margin_hold;
    }
    if (object.trigger_price !== undefined && object.trigger_price !== null) {
      message.triggerPrice = object.trigger_price;
    }
    if (object.order_hash !== undefined && object.order_hash !== null) {
      message.orderHash = bytesFromBase64(object.order_hash);
    }
    return message;
  },
  toAmino(message: DerivativeMarketOrder): DerivativeMarketOrderAmino {
    const obj: any = {};
    obj.order_info = message.orderInfo ? OrderInfo.toAmino(message.orderInfo) : undefined;
    obj.order_type = message.orderType === 0 ? undefined : message.orderType;
    obj.margin = message.margin === "" ? undefined : Decimal.fromUserInput(message.margin, 18).atomics;
    obj.margin_hold = message.marginHold === "" ? undefined : Decimal.fromUserInput(message.marginHold, 18).atomics;
    obj.trigger_price = message.triggerPrice === null ? undefined : Decimal.fromUserInput(message.triggerPrice, 18).atomics;
    obj.order_hash = message.orderHash ? base64FromBytes(message.orderHash) : undefined;
    return obj;
  },
  fromAminoMsg(object: DerivativeMarketOrderAminoMsg): DerivativeMarketOrder {
    return DerivativeMarketOrder.fromAmino(object.value);
  },
  fromProtoMsg(message: DerivativeMarketOrderProtoMsg): DerivativeMarketOrder {
    return DerivativeMarketOrder.decode(message.value);
  },
  toProto(message: DerivativeMarketOrder): Uint8Array {
    return DerivativeMarketOrder.encode(message).finish();
  },
  toProtoMsg(message: DerivativeMarketOrder): DerivativeMarketOrderProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.DerivativeMarketOrder",
      value: DerivativeMarketOrder.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(DerivativeMarketOrder.typeUrl)) {
      return;
    }
    OrderInfo.registerTypeUrl();
  }
};
function createBasePosition(): Position {
  return {
    isLong: false,
    quantity: "",
    entryPrice: "",
    margin: "",
    cumulativeFundingEntry: ""
  };
}
/**
 * @name Position
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.Position
 */
export const Position = {
  typeUrl: "/injective.exchange.v1beta1.Position",
  is(o: any): o is Position {
    return o && (o.$typeUrl === Position.typeUrl || typeof o.isLong === "boolean" && typeof o.quantity === "string" && typeof o.entryPrice === "string" && typeof o.margin === "string" && typeof o.cumulativeFundingEntry === "string");
  },
  isAmino(o: any): o is PositionAmino {
    return o && (o.$typeUrl === Position.typeUrl || typeof o.isLong === "boolean" && typeof o.quantity === "string" && typeof o.entry_price === "string" && typeof o.margin === "string" && typeof o.cumulative_funding_entry === "string");
  },
  encode(message: Position, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.isLong === true) {
      writer.uint32(8).bool(message.isLong);
    }
    if (message.quantity !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.quantity, 18).atomics);
    }
    if (message.entryPrice !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.entryPrice, 18).atomics);
    }
    if (message.margin !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.margin, 18).atomics);
    }
    if (message.cumulativeFundingEntry !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.cumulativeFundingEntry, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Position {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePosition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.isLong = reader.bool();
          break;
        case 2:
          message.quantity = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.entryPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.margin = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.cumulativeFundingEntry = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Position>): Position {
    const message = createBasePosition();
    message.isLong = object.isLong ?? false;
    message.quantity = object.quantity ?? "";
    message.entryPrice = object.entryPrice ?? "";
    message.margin = object.margin ?? "";
    message.cumulativeFundingEntry = object.cumulativeFundingEntry ?? "";
    return message;
  },
  fromAmino(object: PositionAmino): Position {
    const message = createBasePosition();
    if (object.isLong !== undefined && object.isLong !== null) {
      message.isLong = object.isLong;
    }
    if (object.quantity !== undefined && object.quantity !== null) {
      message.quantity = object.quantity;
    }
    if (object.entry_price !== undefined && object.entry_price !== null) {
      message.entryPrice = object.entry_price;
    }
    if (object.margin !== undefined && object.margin !== null) {
      message.margin = object.margin;
    }
    if (object.cumulative_funding_entry !== undefined && object.cumulative_funding_entry !== null) {
      message.cumulativeFundingEntry = object.cumulative_funding_entry;
    }
    return message;
  },
  toAmino(message: Position): PositionAmino {
    const obj: any = {};
    obj.isLong = message.isLong === false ? undefined : message.isLong;
    obj.quantity = message.quantity === "" ? undefined : Decimal.fromUserInput(message.quantity, 18).atomics;
    obj.entry_price = message.entryPrice === "" ? undefined : Decimal.fromUserInput(message.entryPrice, 18).atomics;
    obj.margin = message.margin === "" ? undefined : Decimal.fromUserInput(message.margin, 18).atomics;
    obj.cumulative_funding_entry = message.cumulativeFundingEntry === "" ? undefined : Decimal.fromUserInput(message.cumulativeFundingEntry, 18).atomics;
    return obj;
  },
  fromAminoMsg(object: PositionAminoMsg): Position {
    return Position.fromAmino(object.value);
  },
  fromProtoMsg(message: PositionProtoMsg): Position {
    return Position.decode(message.value);
  },
  toProto(message: Position): Uint8Array {
    return Position.encode(message).finish();
  },
  toProtoMsg(message: Position): PositionProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.Position",
      value: Position.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMarketOrderIndicator(): MarketOrderIndicator {
  return {
    marketId: "",
    isBuy: false
  };
}
/**
 * @name MarketOrderIndicator
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.MarketOrderIndicator
 */
export const MarketOrderIndicator = {
  typeUrl: "/injective.exchange.v1beta1.MarketOrderIndicator",
  is(o: any): o is MarketOrderIndicator {
    return o && (o.$typeUrl === MarketOrderIndicator.typeUrl || typeof o.marketId === "string" && typeof o.isBuy === "boolean");
  },
  isAmino(o: any): o is MarketOrderIndicatorAmino {
    return o && (o.$typeUrl === MarketOrderIndicator.typeUrl || typeof o.market_id === "string" && typeof o.isBuy === "boolean");
  },
  encode(message: MarketOrderIndicator, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.isBuy === true) {
      writer.uint32(16).bool(message.isBuy);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MarketOrderIndicator {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarketOrderIndicator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.isBuy = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MarketOrderIndicator>): MarketOrderIndicator {
    const message = createBaseMarketOrderIndicator();
    message.marketId = object.marketId ?? "";
    message.isBuy = object.isBuy ?? false;
    return message;
  },
  fromAmino(object: MarketOrderIndicatorAmino): MarketOrderIndicator {
    const message = createBaseMarketOrderIndicator();
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    if (object.isBuy !== undefined && object.isBuy !== null) {
      message.isBuy = object.isBuy;
    }
    return message;
  },
  toAmino(message: MarketOrderIndicator): MarketOrderIndicatorAmino {
    const obj: any = {};
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    obj.isBuy = message.isBuy === false ? undefined : message.isBuy;
    return obj;
  },
  fromAminoMsg(object: MarketOrderIndicatorAminoMsg): MarketOrderIndicator {
    return MarketOrderIndicator.fromAmino(object.value);
  },
  fromProtoMsg(message: MarketOrderIndicatorProtoMsg): MarketOrderIndicator {
    return MarketOrderIndicator.decode(message.value);
  },
  toProto(message: MarketOrderIndicator): Uint8Array {
    return MarketOrderIndicator.encode(message).finish();
  },
  toProtoMsg(message: MarketOrderIndicator): MarketOrderIndicatorProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.MarketOrderIndicator",
      value: MarketOrderIndicator.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseTradeLog(): TradeLog {
  return {
    quantity: "",
    price: "",
    subaccountId: new Uint8Array(),
    fee: "",
    orderHash: new Uint8Array(),
    feeRecipientAddress: undefined,
    cid: ""
  };
}
/**
 * @name TradeLog
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.TradeLog
 */
export const TradeLog = {
  typeUrl: "/injective.exchange.v1beta1.TradeLog",
  is(o: any): o is TradeLog {
    return o && (o.$typeUrl === TradeLog.typeUrl || typeof o.quantity === "string" && typeof o.price === "string" && (o.subaccountId instanceof Uint8Array || typeof o.subaccountId === "string") && typeof o.fee === "string" && (o.orderHash instanceof Uint8Array || typeof o.orderHash === "string") && typeof o.cid === "string");
  },
  isAmino(o: any): o is TradeLogAmino {
    return o && (o.$typeUrl === TradeLog.typeUrl || typeof o.quantity === "string" && typeof o.price === "string" && (o.subaccount_id instanceof Uint8Array || typeof o.subaccount_id === "string") && typeof o.fee === "string" && (o.order_hash instanceof Uint8Array || typeof o.order_hash === "string") && typeof o.cid === "string");
  },
  encode(message: TradeLog, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.quantity !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.quantity, 18).atomics);
    }
    if (message.price !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.price, 18).atomics);
    }
    if (message.subaccountId.length !== 0) {
      writer.uint32(26).bytes(message.subaccountId);
    }
    if (message.fee !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.fee, 18).atomics);
    }
    if (message.orderHash.length !== 0) {
      writer.uint32(42).bytes(message.orderHash);
    }
    if (message.feeRecipientAddress !== undefined) {
      writer.uint32(50).bytes(message.feeRecipientAddress);
    }
    if (message.cid !== "") {
      writer.uint32(58).string(message.cid);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TradeLog {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTradeLog();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.quantity = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.price = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.subaccountId = reader.bytes();
          break;
        case 4:
          message.fee = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.orderHash = reader.bytes();
          break;
        case 6:
          message.feeRecipientAddress = reader.bytes();
          break;
        case 7:
          message.cid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<TradeLog>): TradeLog {
    const message = createBaseTradeLog();
    message.quantity = object.quantity ?? "";
    message.price = object.price ?? "";
    message.subaccountId = object.subaccountId ?? new Uint8Array();
    message.fee = object.fee ?? "";
    message.orderHash = object.orderHash ?? new Uint8Array();
    message.feeRecipientAddress = object.feeRecipientAddress ?? undefined;
    message.cid = object.cid ?? "";
    return message;
  },
  fromAmino(object: TradeLogAmino): TradeLog {
    const message = createBaseTradeLog();
    if (object.quantity !== undefined && object.quantity !== null) {
      message.quantity = object.quantity;
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price;
    }
    if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
      message.subaccountId = bytesFromBase64(object.subaccount_id);
    }
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = object.fee;
    }
    if (object.order_hash !== undefined && object.order_hash !== null) {
      message.orderHash = bytesFromBase64(object.order_hash);
    }
    if (object.fee_recipient_address !== undefined && object.fee_recipient_address !== null) {
      message.feeRecipientAddress = bytesFromBase64(object.fee_recipient_address);
    }
    if (object.cid !== undefined && object.cid !== null) {
      message.cid = object.cid;
    }
    return message;
  },
  toAmino(message: TradeLog): TradeLogAmino {
    const obj: any = {};
    obj.quantity = message.quantity === "" ? undefined : Decimal.fromUserInput(message.quantity, 18).atomics;
    obj.price = message.price === "" ? undefined : Decimal.fromUserInput(message.price, 18).atomics;
    obj.subaccount_id = message.subaccountId ? base64FromBytes(message.subaccountId) : undefined;
    obj.fee = message.fee === "" ? undefined : Decimal.fromUserInput(message.fee, 18).atomics;
    obj.order_hash = message.orderHash ? base64FromBytes(message.orderHash) : undefined;
    obj.fee_recipient_address = message.feeRecipientAddress ? base64FromBytes(message.feeRecipientAddress) : undefined;
    obj.cid = message.cid === "" ? undefined : message.cid;
    return obj;
  },
  fromAminoMsg(object: TradeLogAminoMsg): TradeLog {
    return TradeLog.fromAmino(object.value);
  },
  fromProtoMsg(message: TradeLogProtoMsg): TradeLog {
    return TradeLog.decode(message.value);
  },
  toProto(message: TradeLog): Uint8Array {
    return TradeLog.encode(message).finish();
  },
  toProtoMsg(message: TradeLog): TradeLogProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.TradeLog",
      value: TradeLog.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBasePositionDelta(): PositionDelta {
  return {
    isLong: false,
    executionQuantity: "",
    executionMargin: "",
    executionPrice: ""
  };
}
/**
 * @name PositionDelta
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.PositionDelta
 */
export const PositionDelta = {
  typeUrl: "/injective.exchange.v1beta1.PositionDelta",
  is(o: any): o is PositionDelta {
    return o && (o.$typeUrl === PositionDelta.typeUrl || typeof o.isLong === "boolean" && typeof o.executionQuantity === "string" && typeof o.executionMargin === "string" && typeof o.executionPrice === "string");
  },
  isAmino(o: any): o is PositionDeltaAmino {
    return o && (o.$typeUrl === PositionDelta.typeUrl || typeof o.is_long === "boolean" && typeof o.execution_quantity === "string" && typeof o.execution_margin === "string" && typeof o.execution_price === "string");
  },
  encode(message: PositionDelta, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.isLong === true) {
      writer.uint32(8).bool(message.isLong);
    }
    if (message.executionQuantity !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.executionQuantity, 18).atomics);
    }
    if (message.executionMargin !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.executionMargin, 18).atomics);
    }
    if (message.executionPrice !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.executionPrice, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PositionDelta {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePositionDelta();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.isLong = reader.bool();
          break;
        case 2:
          message.executionQuantity = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.executionMargin = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.executionPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<PositionDelta>): PositionDelta {
    const message = createBasePositionDelta();
    message.isLong = object.isLong ?? false;
    message.executionQuantity = object.executionQuantity ?? "";
    message.executionMargin = object.executionMargin ?? "";
    message.executionPrice = object.executionPrice ?? "";
    return message;
  },
  fromAmino(object: PositionDeltaAmino): PositionDelta {
    const message = createBasePositionDelta();
    if (object.is_long !== undefined && object.is_long !== null) {
      message.isLong = object.is_long;
    }
    if (object.execution_quantity !== undefined && object.execution_quantity !== null) {
      message.executionQuantity = object.execution_quantity;
    }
    if (object.execution_margin !== undefined && object.execution_margin !== null) {
      message.executionMargin = object.execution_margin;
    }
    if (object.execution_price !== undefined && object.execution_price !== null) {
      message.executionPrice = object.execution_price;
    }
    return message;
  },
  toAmino(message: PositionDelta): PositionDeltaAmino {
    const obj: any = {};
    obj.is_long = message.isLong === false ? undefined : message.isLong;
    obj.execution_quantity = message.executionQuantity === "" ? undefined : Decimal.fromUserInput(message.executionQuantity, 18).atomics;
    obj.execution_margin = message.executionMargin === "" ? undefined : Decimal.fromUserInput(message.executionMargin, 18).atomics;
    obj.execution_price = message.executionPrice === "" ? undefined : Decimal.fromUserInput(message.executionPrice, 18).atomics;
    return obj;
  },
  fromAminoMsg(object: PositionDeltaAminoMsg): PositionDelta {
    return PositionDelta.fromAmino(object.value);
  },
  fromProtoMsg(message: PositionDeltaProtoMsg): PositionDelta {
    return PositionDelta.decode(message.value);
  },
  toProto(message: PositionDelta): Uint8Array {
    return PositionDelta.encode(message).finish();
  },
  toProtoMsg(message: PositionDelta): PositionDeltaProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.PositionDelta",
      value: PositionDelta.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseDerivativeTradeLog(): DerivativeTradeLog {
  return {
    subaccountId: new Uint8Array(),
    positionDelta: undefined,
    payout: "",
    fee: "",
    orderHash: new Uint8Array(),
    feeRecipientAddress: undefined,
    cid: "",
    pnl: ""
  };
}
/**
 * @name DerivativeTradeLog
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.DerivativeTradeLog
 */
export const DerivativeTradeLog = {
  typeUrl: "/injective.exchange.v1beta1.DerivativeTradeLog",
  is(o: any): o is DerivativeTradeLog {
    return o && (o.$typeUrl === DerivativeTradeLog.typeUrl || (o.subaccountId instanceof Uint8Array || typeof o.subaccountId === "string") && typeof o.payout === "string" && typeof o.fee === "string" && (o.orderHash instanceof Uint8Array || typeof o.orderHash === "string") && typeof o.cid === "string" && typeof o.pnl === "string");
  },
  isAmino(o: any): o is DerivativeTradeLogAmino {
    return o && (o.$typeUrl === DerivativeTradeLog.typeUrl || (o.subaccount_id instanceof Uint8Array || typeof o.subaccount_id === "string") && typeof o.payout === "string" && typeof o.fee === "string" && (o.order_hash instanceof Uint8Array || typeof o.order_hash === "string") && typeof o.cid === "string" && typeof o.pnl === "string");
  },
  encode(message: DerivativeTradeLog, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subaccountId.length !== 0) {
      writer.uint32(10).bytes(message.subaccountId);
    }
    if (message.positionDelta !== undefined) {
      PositionDelta.encode(message.positionDelta, writer.uint32(18).fork()).ldelim();
    }
    if (message.payout !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.payout, 18).atomics);
    }
    if (message.fee !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.fee, 18).atomics);
    }
    if (message.orderHash.length !== 0) {
      writer.uint32(42).bytes(message.orderHash);
    }
    if (message.feeRecipientAddress !== undefined) {
      writer.uint32(50).bytes(message.feeRecipientAddress);
    }
    if (message.cid !== "") {
      writer.uint32(58).string(message.cid);
    }
    if (message.pnl !== "") {
      writer.uint32(66).string(Decimal.fromUserInput(message.pnl, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DerivativeTradeLog {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDerivativeTradeLog();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subaccountId = reader.bytes();
          break;
        case 2:
          message.positionDelta = PositionDelta.decode(reader, reader.uint32());
          break;
        case 3:
          message.payout = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.fee = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.orderHash = reader.bytes();
          break;
        case 6:
          message.feeRecipientAddress = reader.bytes();
          break;
        case 7:
          message.cid = reader.string();
          break;
        case 8:
          message.pnl = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<DerivativeTradeLog>): DerivativeTradeLog {
    const message = createBaseDerivativeTradeLog();
    message.subaccountId = object.subaccountId ?? new Uint8Array();
    message.positionDelta = object.positionDelta !== undefined && object.positionDelta !== null ? PositionDelta.fromPartial(object.positionDelta) : undefined;
    message.payout = object.payout ?? "";
    message.fee = object.fee ?? "";
    message.orderHash = object.orderHash ?? new Uint8Array();
    message.feeRecipientAddress = object.feeRecipientAddress ?? undefined;
    message.cid = object.cid ?? "";
    message.pnl = object.pnl ?? "";
    return message;
  },
  fromAmino(object: DerivativeTradeLogAmino): DerivativeTradeLog {
    const message = createBaseDerivativeTradeLog();
    if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
      message.subaccountId = bytesFromBase64(object.subaccount_id);
    }
    if (object.position_delta !== undefined && object.position_delta !== null) {
      message.positionDelta = PositionDelta.fromAmino(object.position_delta);
    }
    if (object.payout !== undefined && object.payout !== null) {
      message.payout = object.payout;
    }
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = object.fee;
    }
    if (object.order_hash !== undefined && object.order_hash !== null) {
      message.orderHash = bytesFromBase64(object.order_hash);
    }
    if (object.fee_recipient_address !== undefined && object.fee_recipient_address !== null) {
      message.feeRecipientAddress = bytesFromBase64(object.fee_recipient_address);
    }
    if (object.cid !== undefined && object.cid !== null) {
      message.cid = object.cid;
    }
    if (object.pnl !== undefined && object.pnl !== null) {
      message.pnl = object.pnl;
    }
    return message;
  },
  toAmino(message: DerivativeTradeLog): DerivativeTradeLogAmino {
    const obj: any = {};
    obj.subaccount_id = message.subaccountId ? base64FromBytes(message.subaccountId) : undefined;
    obj.position_delta = message.positionDelta ? PositionDelta.toAmino(message.positionDelta) : undefined;
    obj.payout = message.payout === "" ? undefined : Decimal.fromUserInput(message.payout, 18).atomics;
    obj.fee = message.fee === "" ? undefined : Decimal.fromUserInput(message.fee, 18).atomics;
    obj.order_hash = message.orderHash ? base64FromBytes(message.orderHash) : undefined;
    obj.fee_recipient_address = message.feeRecipientAddress ? base64FromBytes(message.feeRecipientAddress) : undefined;
    obj.cid = message.cid === "" ? undefined : message.cid;
    obj.pnl = message.pnl === "" ? undefined : Decimal.fromUserInput(message.pnl, 18).atomics;
    return obj;
  },
  fromAminoMsg(object: DerivativeTradeLogAminoMsg): DerivativeTradeLog {
    return DerivativeTradeLog.fromAmino(object.value);
  },
  fromProtoMsg(message: DerivativeTradeLogProtoMsg): DerivativeTradeLog {
    return DerivativeTradeLog.decode(message.value);
  },
  toProto(message: DerivativeTradeLog): Uint8Array {
    return DerivativeTradeLog.encode(message).finish();
  },
  toProtoMsg(message: DerivativeTradeLog): DerivativeTradeLogProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.DerivativeTradeLog",
      value: DerivativeTradeLog.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(DerivativeTradeLog.typeUrl)) {
      return;
    }
    PositionDelta.registerTypeUrl();
  }
};
function createBaseSubaccountPosition(): SubaccountPosition {
  return {
    position: undefined,
    subaccountId: new Uint8Array()
  };
}
/**
 * @name SubaccountPosition
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.SubaccountPosition
 */
export const SubaccountPosition = {
  typeUrl: "/injective.exchange.v1beta1.SubaccountPosition",
  is(o: any): o is SubaccountPosition {
    return o && (o.$typeUrl === SubaccountPosition.typeUrl || o.subaccountId instanceof Uint8Array || typeof o.subaccountId === "string");
  },
  isAmino(o: any): o is SubaccountPositionAmino {
    return o && (o.$typeUrl === SubaccountPosition.typeUrl || o.subaccount_id instanceof Uint8Array || typeof o.subaccount_id === "string");
  },
  encode(message: SubaccountPosition, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.position !== undefined) {
      Position.encode(message.position, writer.uint32(10).fork()).ldelim();
    }
    if (message.subaccountId.length !== 0) {
      writer.uint32(18).bytes(message.subaccountId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SubaccountPosition {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubaccountPosition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.position = Position.decode(reader, reader.uint32());
          break;
        case 2:
          message.subaccountId = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<SubaccountPosition>): SubaccountPosition {
    const message = createBaseSubaccountPosition();
    message.position = object.position !== undefined && object.position !== null ? Position.fromPartial(object.position) : undefined;
    message.subaccountId = object.subaccountId ?? new Uint8Array();
    return message;
  },
  fromAmino(object: SubaccountPositionAmino): SubaccountPosition {
    const message = createBaseSubaccountPosition();
    if (object.position !== undefined && object.position !== null) {
      message.position = Position.fromAmino(object.position);
    }
    if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
      message.subaccountId = bytesFromBase64(object.subaccount_id);
    }
    return message;
  },
  toAmino(message: SubaccountPosition): SubaccountPositionAmino {
    const obj: any = {};
    obj.position = message.position ? Position.toAmino(message.position) : undefined;
    obj.subaccount_id = message.subaccountId ? base64FromBytes(message.subaccountId) : undefined;
    return obj;
  },
  fromAminoMsg(object: SubaccountPositionAminoMsg): SubaccountPosition {
    return SubaccountPosition.fromAmino(object.value);
  },
  fromProtoMsg(message: SubaccountPositionProtoMsg): SubaccountPosition {
    return SubaccountPosition.decode(message.value);
  },
  toProto(message: SubaccountPosition): Uint8Array {
    return SubaccountPosition.encode(message).finish();
  },
  toProtoMsg(message: SubaccountPosition): SubaccountPositionProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.SubaccountPosition",
      value: SubaccountPosition.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(SubaccountPosition.typeUrl)) {
      return;
    }
    Position.registerTypeUrl();
  }
};
function createBaseSubaccountDeposit(): SubaccountDeposit {
  return {
    subaccountId: new Uint8Array(),
    deposit: undefined
  };
}
/**
 * @name SubaccountDeposit
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.SubaccountDeposit
 */
export const SubaccountDeposit = {
  typeUrl: "/injective.exchange.v1beta1.SubaccountDeposit",
  is(o: any): o is SubaccountDeposit {
    return o && (o.$typeUrl === SubaccountDeposit.typeUrl || o.subaccountId instanceof Uint8Array || typeof o.subaccountId === "string");
  },
  isAmino(o: any): o is SubaccountDepositAmino {
    return o && (o.$typeUrl === SubaccountDeposit.typeUrl || o.subaccount_id instanceof Uint8Array || typeof o.subaccount_id === "string");
  },
  encode(message: SubaccountDeposit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subaccountId.length !== 0) {
      writer.uint32(10).bytes(message.subaccountId);
    }
    if (message.deposit !== undefined) {
      Deposit.encode(message.deposit, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SubaccountDeposit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubaccountDeposit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subaccountId = reader.bytes();
          break;
        case 2:
          message.deposit = Deposit.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<SubaccountDeposit>): SubaccountDeposit {
    const message = createBaseSubaccountDeposit();
    message.subaccountId = object.subaccountId ?? new Uint8Array();
    message.deposit = object.deposit !== undefined && object.deposit !== null ? Deposit.fromPartial(object.deposit) : undefined;
    return message;
  },
  fromAmino(object: SubaccountDepositAmino): SubaccountDeposit {
    const message = createBaseSubaccountDeposit();
    if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
      message.subaccountId = bytesFromBase64(object.subaccount_id);
    }
    if (object.deposit !== undefined && object.deposit !== null) {
      message.deposit = Deposit.fromAmino(object.deposit);
    }
    return message;
  },
  toAmino(message: SubaccountDeposit): SubaccountDepositAmino {
    const obj: any = {};
    obj.subaccount_id = message.subaccountId ? base64FromBytes(message.subaccountId) : undefined;
    obj.deposit = message.deposit ? Deposit.toAmino(message.deposit) : undefined;
    return obj;
  },
  fromAminoMsg(object: SubaccountDepositAminoMsg): SubaccountDeposit {
    return SubaccountDeposit.fromAmino(object.value);
  },
  fromProtoMsg(message: SubaccountDepositProtoMsg): SubaccountDeposit {
    return SubaccountDeposit.decode(message.value);
  },
  toProto(message: SubaccountDeposit): Uint8Array {
    return SubaccountDeposit.encode(message).finish();
  },
  toProtoMsg(message: SubaccountDeposit): SubaccountDepositProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.SubaccountDeposit",
      value: SubaccountDeposit.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(SubaccountDeposit.typeUrl)) {
      return;
    }
    Deposit.registerTypeUrl();
  }
};
function createBaseDepositUpdate(): DepositUpdate {
  return {
    denom: "",
    deposits: []
  };
}
/**
 * @name DepositUpdate
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.DepositUpdate
 */
export const DepositUpdate = {
  typeUrl: "/injective.exchange.v1beta1.DepositUpdate",
  is(o: any): o is DepositUpdate {
    return o && (o.$typeUrl === DepositUpdate.typeUrl || typeof o.denom === "string" && Array.isArray(o.deposits) && (!o.deposits.length || SubaccountDeposit.is(o.deposits[0])));
  },
  isAmino(o: any): o is DepositUpdateAmino {
    return o && (o.$typeUrl === DepositUpdate.typeUrl || typeof o.denom === "string" && Array.isArray(o.deposits) && (!o.deposits.length || SubaccountDeposit.isAmino(o.deposits[0])));
  },
  encode(message: DepositUpdate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    for (const v of message.deposits) {
      SubaccountDeposit.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DepositUpdate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDepositUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.deposits.push(SubaccountDeposit.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<DepositUpdate>): DepositUpdate {
    const message = createBaseDepositUpdate();
    message.denom = object.denom ?? "";
    message.deposits = object.deposits?.map(e => SubaccountDeposit.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: DepositUpdateAmino): DepositUpdate {
    const message = createBaseDepositUpdate();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    message.deposits = object.deposits?.map(e => SubaccountDeposit.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: DepositUpdate): DepositUpdateAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    if (message.deposits) {
      obj.deposits = message.deposits.map(e => e ? SubaccountDeposit.toAmino(e) : undefined);
    } else {
      obj.deposits = message.deposits;
    }
    return obj;
  },
  fromAminoMsg(object: DepositUpdateAminoMsg): DepositUpdate {
    return DepositUpdate.fromAmino(object.value);
  },
  fromProtoMsg(message: DepositUpdateProtoMsg): DepositUpdate {
    return DepositUpdate.decode(message.value);
  },
  toProto(message: DepositUpdate): Uint8Array {
    return DepositUpdate.encode(message).finish();
  },
  toProtoMsg(message: DepositUpdate): DepositUpdateProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.DepositUpdate",
      value: DepositUpdate.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(DepositUpdate.typeUrl)) {
      return;
    }
    SubaccountDeposit.registerTypeUrl();
  }
};
function createBasePointsMultiplier(): PointsMultiplier {
  return {
    makerPointsMultiplier: "",
    takerPointsMultiplier: ""
  };
}
/**
 * @name PointsMultiplier
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.PointsMultiplier
 */
export const PointsMultiplier = {
  typeUrl: "/injective.exchange.v1beta1.PointsMultiplier",
  is(o: any): o is PointsMultiplier {
    return o && (o.$typeUrl === PointsMultiplier.typeUrl || typeof o.makerPointsMultiplier === "string" && typeof o.takerPointsMultiplier === "string");
  },
  isAmino(o: any): o is PointsMultiplierAmino {
    return o && (o.$typeUrl === PointsMultiplier.typeUrl || typeof o.maker_points_multiplier === "string" && typeof o.taker_points_multiplier === "string");
  },
  encode(message: PointsMultiplier, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.makerPointsMultiplier !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.makerPointsMultiplier, 18).atomics);
    }
    if (message.takerPointsMultiplier !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.takerPointsMultiplier, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PointsMultiplier {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePointsMultiplier();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.makerPointsMultiplier = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.takerPointsMultiplier = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<PointsMultiplier>): PointsMultiplier {
    const message = createBasePointsMultiplier();
    message.makerPointsMultiplier = object.makerPointsMultiplier ?? "";
    message.takerPointsMultiplier = object.takerPointsMultiplier ?? "";
    return message;
  },
  fromAmino(object: PointsMultiplierAmino): PointsMultiplier {
    const message = createBasePointsMultiplier();
    if (object.maker_points_multiplier !== undefined && object.maker_points_multiplier !== null) {
      message.makerPointsMultiplier = object.maker_points_multiplier;
    }
    if (object.taker_points_multiplier !== undefined && object.taker_points_multiplier !== null) {
      message.takerPointsMultiplier = object.taker_points_multiplier;
    }
    return message;
  },
  toAmino(message: PointsMultiplier): PointsMultiplierAmino {
    const obj: any = {};
    obj.maker_points_multiplier = message.makerPointsMultiplier === "" ? undefined : Decimal.fromUserInput(message.makerPointsMultiplier, 18).atomics;
    obj.taker_points_multiplier = message.takerPointsMultiplier === "" ? undefined : Decimal.fromUserInput(message.takerPointsMultiplier, 18).atomics;
    return obj;
  },
  fromAminoMsg(object: PointsMultiplierAminoMsg): PointsMultiplier {
    return PointsMultiplier.fromAmino(object.value);
  },
  fromProtoMsg(message: PointsMultiplierProtoMsg): PointsMultiplier {
    return PointsMultiplier.decode(message.value);
  },
  toProto(message: PointsMultiplier): Uint8Array {
    return PointsMultiplier.encode(message).finish();
  },
  toProtoMsg(message: PointsMultiplier): PointsMultiplierProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.PointsMultiplier",
      value: PointsMultiplier.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseTradingRewardCampaignBoostInfo(): TradingRewardCampaignBoostInfo {
  return {
    boostedSpotMarketIds: [],
    spotMarketMultipliers: [],
    boostedDerivativeMarketIds: [],
    derivativeMarketMultipliers: []
  };
}
/**
 * @name TradingRewardCampaignBoostInfo
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.TradingRewardCampaignBoostInfo
 */
export const TradingRewardCampaignBoostInfo = {
  typeUrl: "/injective.exchange.v1beta1.TradingRewardCampaignBoostInfo",
  is(o: any): o is TradingRewardCampaignBoostInfo {
    return o && (o.$typeUrl === TradingRewardCampaignBoostInfo.typeUrl || Array.isArray(o.boostedSpotMarketIds) && (!o.boostedSpotMarketIds.length || typeof o.boostedSpotMarketIds[0] === "string") && Array.isArray(o.spotMarketMultipliers) && (!o.spotMarketMultipliers.length || PointsMultiplier.is(o.spotMarketMultipliers[0])) && Array.isArray(o.boostedDerivativeMarketIds) && (!o.boostedDerivativeMarketIds.length || typeof o.boostedDerivativeMarketIds[0] === "string") && Array.isArray(o.derivativeMarketMultipliers) && (!o.derivativeMarketMultipliers.length || PointsMultiplier.is(o.derivativeMarketMultipliers[0])));
  },
  isAmino(o: any): o is TradingRewardCampaignBoostInfoAmino {
    return o && (o.$typeUrl === TradingRewardCampaignBoostInfo.typeUrl || Array.isArray(o.boosted_spot_market_ids) && (!o.boosted_spot_market_ids.length || typeof o.boosted_spot_market_ids[0] === "string") && Array.isArray(o.spot_market_multipliers) && (!o.spot_market_multipliers.length || PointsMultiplier.isAmino(o.spot_market_multipliers[0])) && Array.isArray(o.boosted_derivative_market_ids) && (!o.boosted_derivative_market_ids.length || typeof o.boosted_derivative_market_ids[0] === "string") && Array.isArray(o.derivative_market_multipliers) && (!o.derivative_market_multipliers.length || PointsMultiplier.isAmino(o.derivative_market_multipliers[0])));
  },
  encode(message: TradingRewardCampaignBoostInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.boostedSpotMarketIds) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.spotMarketMultipliers) {
      PointsMultiplier.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.boostedDerivativeMarketIds) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.derivativeMarketMultipliers) {
      PointsMultiplier.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TradingRewardCampaignBoostInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTradingRewardCampaignBoostInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.boostedSpotMarketIds.push(reader.string());
          break;
        case 2:
          message.spotMarketMultipliers.push(PointsMultiplier.decode(reader, reader.uint32()));
          break;
        case 3:
          message.boostedDerivativeMarketIds.push(reader.string());
          break;
        case 4:
          message.derivativeMarketMultipliers.push(PointsMultiplier.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<TradingRewardCampaignBoostInfo>): TradingRewardCampaignBoostInfo {
    const message = createBaseTradingRewardCampaignBoostInfo();
    message.boostedSpotMarketIds = object.boostedSpotMarketIds?.map(e => e) || [];
    message.spotMarketMultipliers = object.spotMarketMultipliers?.map(e => PointsMultiplier.fromPartial(e)) || [];
    message.boostedDerivativeMarketIds = object.boostedDerivativeMarketIds?.map(e => e) || [];
    message.derivativeMarketMultipliers = object.derivativeMarketMultipliers?.map(e => PointsMultiplier.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: TradingRewardCampaignBoostInfoAmino): TradingRewardCampaignBoostInfo {
    const message = createBaseTradingRewardCampaignBoostInfo();
    message.boostedSpotMarketIds = object.boosted_spot_market_ids?.map(e => e) || [];
    message.spotMarketMultipliers = object.spot_market_multipliers?.map(e => PointsMultiplier.fromAmino(e)) || [];
    message.boostedDerivativeMarketIds = object.boosted_derivative_market_ids?.map(e => e) || [];
    message.derivativeMarketMultipliers = object.derivative_market_multipliers?.map(e => PointsMultiplier.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: TradingRewardCampaignBoostInfo): TradingRewardCampaignBoostInfoAmino {
    const obj: any = {};
    if (message.boostedSpotMarketIds) {
      obj.boosted_spot_market_ids = message.boostedSpotMarketIds.map(e => e);
    } else {
      obj.boosted_spot_market_ids = message.boostedSpotMarketIds;
    }
    if (message.spotMarketMultipliers) {
      obj.spot_market_multipliers = message.spotMarketMultipliers.map(e => e ? PointsMultiplier.toAmino(e) : undefined);
    } else {
      obj.spot_market_multipliers = message.spotMarketMultipliers;
    }
    if (message.boostedDerivativeMarketIds) {
      obj.boosted_derivative_market_ids = message.boostedDerivativeMarketIds.map(e => e);
    } else {
      obj.boosted_derivative_market_ids = message.boostedDerivativeMarketIds;
    }
    if (message.derivativeMarketMultipliers) {
      obj.derivative_market_multipliers = message.derivativeMarketMultipliers.map(e => e ? PointsMultiplier.toAmino(e) : undefined);
    } else {
      obj.derivative_market_multipliers = message.derivativeMarketMultipliers;
    }
    return obj;
  },
  fromAminoMsg(object: TradingRewardCampaignBoostInfoAminoMsg): TradingRewardCampaignBoostInfo {
    return TradingRewardCampaignBoostInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: TradingRewardCampaignBoostInfoProtoMsg): TradingRewardCampaignBoostInfo {
    return TradingRewardCampaignBoostInfo.decode(message.value);
  },
  toProto(message: TradingRewardCampaignBoostInfo): Uint8Array {
    return TradingRewardCampaignBoostInfo.encode(message).finish();
  },
  toProtoMsg(message: TradingRewardCampaignBoostInfo): TradingRewardCampaignBoostInfoProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.TradingRewardCampaignBoostInfo",
      value: TradingRewardCampaignBoostInfo.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(TradingRewardCampaignBoostInfo.typeUrl)) {
      return;
    }
    PointsMultiplier.registerTypeUrl();
  }
};
function createBaseCampaignRewardPool(): CampaignRewardPool {
  return {
    startTimestamp: BigInt(0),
    maxCampaignRewards: []
  };
}
/**
 * @name CampaignRewardPool
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.CampaignRewardPool
 */
export const CampaignRewardPool = {
  typeUrl: "/injective.exchange.v1beta1.CampaignRewardPool",
  is(o: any): o is CampaignRewardPool {
    return o && (o.$typeUrl === CampaignRewardPool.typeUrl || typeof o.startTimestamp === "bigint" && Array.isArray(o.maxCampaignRewards) && (!o.maxCampaignRewards.length || Coin.is(o.maxCampaignRewards[0])));
  },
  isAmino(o: any): o is CampaignRewardPoolAmino {
    return o && (o.$typeUrl === CampaignRewardPool.typeUrl || typeof o.start_timestamp === "bigint" && Array.isArray(o.max_campaign_rewards) && (!o.max_campaign_rewards.length || Coin.isAmino(o.max_campaign_rewards[0])));
  },
  encode(message: CampaignRewardPool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.startTimestamp !== BigInt(0)) {
      writer.uint32(8).int64(message.startTimestamp);
    }
    for (const v of message.maxCampaignRewards) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CampaignRewardPool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCampaignRewardPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.startTimestamp = reader.int64();
          break;
        case 2:
          message.maxCampaignRewards.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<CampaignRewardPool>): CampaignRewardPool {
    const message = createBaseCampaignRewardPool();
    message.startTimestamp = object.startTimestamp !== undefined && object.startTimestamp !== null ? BigInt(object.startTimestamp.toString()) : BigInt(0);
    message.maxCampaignRewards = object.maxCampaignRewards?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: CampaignRewardPoolAmino): CampaignRewardPool {
    const message = createBaseCampaignRewardPool();
    if (object.start_timestamp !== undefined && object.start_timestamp !== null) {
      message.startTimestamp = BigInt(object.start_timestamp);
    }
    message.maxCampaignRewards = object.max_campaign_rewards?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: CampaignRewardPool): CampaignRewardPoolAmino {
    const obj: any = {};
    obj.start_timestamp = message.startTimestamp !== BigInt(0) ? message.startTimestamp?.toString() : undefined;
    if (message.maxCampaignRewards) {
      obj.max_campaign_rewards = message.maxCampaignRewards.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.max_campaign_rewards = message.maxCampaignRewards;
    }
    return obj;
  },
  fromAminoMsg(object: CampaignRewardPoolAminoMsg): CampaignRewardPool {
    return CampaignRewardPool.fromAmino(object.value);
  },
  fromProtoMsg(message: CampaignRewardPoolProtoMsg): CampaignRewardPool {
    return CampaignRewardPool.decode(message.value);
  },
  toProto(message: CampaignRewardPool): Uint8Array {
    return CampaignRewardPool.encode(message).finish();
  },
  toProtoMsg(message: CampaignRewardPool): CampaignRewardPoolProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.CampaignRewardPool",
      value: CampaignRewardPool.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(CampaignRewardPool.typeUrl)) {
      return;
    }
    Coin.registerTypeUrl();
  }
};
function createBaseTradingRewardCampaignInfo(): TradingRewardCampaignInfo {
  return {
    campaignDurationSeconds: BigInt(0),
    quoteDenoms: [],
    tradingRewardBoostInfo: undefined,
    disqualifiedMarketIds: []
  };
}
/**
 * @name TradingRewardCampaignInfo
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.TradingRewardCampaignInfo
 */
export const TradingRewardCampaignInfo = {
  typeUrl: "/injective.exchange.v1beta1.TradingRewardCampaignInfo",
  is(o: any): o is TradingRewardCampaignInfo {
    return o && (o.$typeUrl === TradingRewardCampaignInfo.typeUrl || typeof o.campaignDurationSeconds === "bigint" && Array.isArray(o.quoteDenoms) && (!o.quoteDenoms.length || typeof o.quoteDenoms[0] === "string") && Array.isArray(o.disqualifiedMarketIds) && (!o.disqualifiedMarketIds.length || typeof o.disqualifiedMarketIds[0] === "string"));
  },
  isAmino(o: any): o is TradingRewardCampaignInfoAmino {
    return o && (o.$typeUrl === TradingRewardCampaignInfo.typeUrl || typeof o.campaign_duration_seconds === "bigint" && Array.isArray(o.quote_denoms) && (!o.quote_denoms.length || typeof o.quote_denoms[0] === "string") && Array.isArray(o.disqualified_market_ids) && (!o.disqualified_market_ids.length || typeof o.disqualified_market_ids[0] === "string"));
  },
  encode(message: TradingRewardCampaignInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.campaignDurationSeconds !== BigInt(0)) {
      writer.uint32(8).int64(message.campaignDurationSeconds);
    }
    for (const v of message.quoteDenoms) {
      writer.uint32(18).string(v!);
    }
    if (message.tradingRewardBoostInfo !== undefined) {
      TradingRewardCampaignBoostInfo.encode(message.tradingRewardBoostInfo, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.disqualifiedMarketIds) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TradingRewardCampaignInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTradingRewardCampaignInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.campaignDurationSeconds = reader.int64();
          break;
        case 2:
          message.quoteDenoms.push(reader.string());
          break;
        case 3:
          message.tradingRewardBoostInfo = TradingRewardCampaignBoostInfo.decode(reader, reader.uint32());
          break;
        case 4:
          message.disqualifiedMarketIds.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<TradingRewardCampaignInfo>): TradingRewardCampaignInfo {
    const message = createBaseTradingRewardCampaignInfo();
    message.campaignDurationSeconds = object.campaignDurationSeconds !== undefined && object.campaignDurationSeconds !== null ? BigInt(object.campaignDurationSeconds.toString()) : BigInt(0);
    message.quoteDenoms = object.quoteDenoms?.map(e => e) || [];
    message.tradingRewardBoostInfo = object.tradingRewardBoostInfo !== undefined && object.tradingRewardBoostInfo !== null ? TradingRewardCampaignBoostInfo.fromPartial(object.tradingRewardBoostInfo) : undefined;
    message.disqualifiedMarketIds = object.disqualifiedMarketIds?.map(e => e) || [];
    return message;
  },
  fromAmino(object: TradingRewardCampaignInfoAmino): TradingRewardCampaignInfo {
    const message = createBaseTradingRewardCampaignInfo();
    if (object.campaign_duration_seconds !== undefined && object.campaign_duration_seconds !== null) {
      message.campaignDurationSeconds = BigInt(object.campaign_duration_seconds);
    }
    message.quoteDenoms = object.quote_denoms?.map(e => e) || [];
    if (object.trading_reward_boost_info !== undefined && object.trading_reward_boost_info !== null) {
      message.tradingRewardBoostInfo = TradingRewardCampaignBoostInfo.fromAmino(object.trading_reward_boost_info);
    }
    message.disqualifiedMarketIds = object.disqualified_market_ids?.map(e => e) || [];
    return message;
  },
  toAmino(message: TradingRewardCampaignInfo): TradingRewardCampaignInfoAmino {
    const obj: any = {};
    obj.campaign_duration_seconds = message.campaignDurationSeconds !== BigInt(0) ? message.campaignDurationSeconds?.toString() : undefined;
    if (message.quoteDenoms) {
      obj.quote_denoms = message.quoteDenoms.map(e => e);
    } else {
      obj.quote_denoms = message.quoteDenoms;
    }
    obj.trading_reward_boost_info = message.tradingRewardBoostInfo ? TradingRewardCampaignBoostInfo.toAmino(message.tradingRewardBoostInfo) : undefined;
    if (message.disqualifiedMarketIds) {
      obj.disqualified_market_ids = message.disqualifiedMarketIds.map(e => e);
    } else {
      obj.disqualified_market_ids = message.disqualifiedMarketIds;
    }
    return obj;
  },
  fromAminoMsg(object: TradingRewardCampaignInfoAminoMsg): TradingRewardCampaignInfo {
    return TradingRewardCampaignInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: TradingRewardCampaignInfoProtoMsg): TradingRewardCampaignInfo {
    return TradingRewardCampaignInfo.decode(message.value);
  },
  toProto(message: TradingRewardCampaignInfo): Uint8Array {
    return TradingRewardCampaignInfo.encode(message).finish();
  },
  toProtoMsg(message: TradingRewardCampaignInfo): TradingRewardCampaignInfoProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.TradingRewardCampaignInfo",
      value: TradingRewardCampaignInfo.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(TradingRewardCampaignInfo.typeUrl)) {
      return;
    }
    TradingRewardCampaignBoostInfo.registerTypeUrl();
  }
};
function createBaseFeeDiscountTierInfo(): FeeDiscountTierInfo {
  return {
    makerDiscountRate: "",
    takerDiscountRate: "",
    stakedAmount: "",
    volume: ""
  };
}
/**
 * @name FeeDiscountTierInfo
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.FeeDiscountTierInfo
 */
export const FeeDiscountTierInfo = {
  typeUrl: "/injective.exchange.v1beta1.FeeDiscountTierInfo",
  is(o: any): o is FeeDiscountTierInfo {
    return o && (o.$typeUrl === FeeDiscountTierInfo.typeUrl || typeof o.makerDiscountRate === "string" && typeof o.takerDiscountRate === "string" && typeof o.stakedAmount === "string" && typeof o.volume === "string");
  },
  isAmino(o: any): o is FeeDiscountTierInfoAmino {
    return o && (o.$typeUrl === FeeDiscountTierInfo.typeUrl || typeof o.maker_discount_rate === "string" && typeof o.taker_discount_rate === "string" && typeof o.staked_amount === "string" && typeof o.volume === "string");
  },
  encode(message: FeeDiscountTierInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.makerDiscountRate !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.makerDiscountRate, 18).atomics);
    }
    if (message.takerDiscountRate !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.takerDiscountRate, 18).atomics);
    }
    if (message.stakedAmount !== "") {
      writer.uint32(26).string(message.stakedAmount);
    }
    if (message.volume !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.volume, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FeeDiscountTierInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeeDiscountTierInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.makerDiscountRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.takerDiscountRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.stakedAmount = reader.string();
          break;
        case 4:
          message.volume = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<FeeDiscountTierInfo>): FeeDiscountTierInfo {
    const message = createBaseFeeDiscountTierInfo();
    message.makerDiscountRate = object.makerDiscountRate ?? "";
    message.takerDiscountRate = object.takerDiscountRate ?? "";
    message.stakedAmount = object.stakedAmount ?? "";
    message.volume = object.volume ?? "";
    return message;
  },
  fromAmino(object: FeeDiscountTierInfoAmino): FeeDiscountTierInfo {
    const message = createBaseFeeDiscountTierInfo();
    if (object.maker_discount_rate !== undefined && object.maker_discount_rate !== null) {
      message.makerDiscountRate = object.maker_discount_rate;
    }
    if (object.taker_discount_rate !== undefined && object.taker_discount_rate !== null) {
      message.takerDiscountRate = object.taker_discount_rate;
    }
    if (object.staked_amount !== undefined && object.staked_amount !== null) {
      message.stakedAmount = object.staked_amount;
    }
    if (object.volume !== undefined && object.volume !== null) {
      message.volume = object.volume;
    }
    return message;
  },
  toAmino(message: FeeDiscountTierInfo): FeeDiscountTierInfoAmino {
    const obj: any = {};
    obj.maker_discount_rate = message.makerDiscountRate === "" ? undefined : Decimal.fromUserInput(message.makerDiscountRate, 18).atomics;
    obj.taker_discount_rate = message.takerDiscountRate === "" ? undefined : Decimal.fromUserInput(message.takerDiscountRate, 18).atomics;
    obj.staked_amount = message.stakedAmount === "" ? undefined : message.stakedAmount;
    obj.volume = message.volume === "" ? undefined : Decimal.fromUserInput(message.volume, 18).atomics;
    return obj;
  },
  fromAminoMsg(object: FeeDiscountTierInfoAminoMsg): FeeDiscountTierInfo {
    return FeeDiscountTierInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: FeeDiscountTierInfoProtoMsg): FeeDiscountTierInfo {
    return FeeDiscountTierInfo.decode(message.value);
  },
  toProto(message: FeeDiscountTierInfo): Uint8Array {
    return FeeDiscountTierInfo.encode(message).finish();
  },
  toProtoMsg(message: FeeDiscountTierInfo): FeeDiscountTierInfoProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.FeeDiscountTierInfo",
      value: FeeDiscountTierInfo.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseFeeDiscountSchedule(): FeeDiscountSchedule {
  return {
    bucketCount: BigInt(0),
    bucketDuration: BigInt(0),
    quoteDenoms: [],
    tierInfos: [],
    disqualifiedMarketIds: []
  };
}
/**
 * @name FeeDiscountSchedule
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.FeeDiscountSchedule
 */
export const FeeDiscountSchedule = {
  typeUrl: "/injective.exchange.v1beta1.FeeDiscountSchedule",
  is(o: any): o is FeeDiscountSchedule {
    return o && (o.$typeUrl === FeeDiscountSchedule.typeUrl || typeof o.bucketCount === "bigint" && typeof o.bucketDuration === "bigint" && Array.isArray(o.quoteDenoms) && (!o.quoteDenoms.length || typeof o.quoteDenoms[0] === "string") && Array.isArray(o.tierInfos) && (!o.tierInfos.length || FeeDiscountTierInfo.is(o.tierInfos[0])) && Array.isArray(o.disqualifiedMarketIds) && (!o.disqualifiedMarketIds.length || typeof o.disqualifiedMarketIds[0] === "string"));
  },
  isAmino(o: any): o is FeeDiscountScheduleAmino {
    return o && (o.$typeUrl === FeeDiscountSchedule.typeUrl || typeof o.bucket_count === "bigint" && typeof o.bucket_duration === "bigint" && Array.isArray(o.quote_denoms) && (!o.quote_denoms.length || typeof o.quote_denoms[0] === "string") && Array.isArray(o.tier_infos) && (!o.tier_infos.length || FeeDiscountTierInfo.isAmino(o.tier_infos[0])) && Array.isArray(o.disqualified_market_ids) && (!o.disqualified_market_ids.length || typeof o.disqualified_market_ids[0] === "string"));
  },
  encode(message: FeeDiscountSchedule, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bucketCount !== BigInt(0)) {
      writer.uint32(8).uint64(message.bucketCount);
    }
    if (message.bucketDuration !== BigInt(0)) {
      writer.uint32(16).int64(message.bucketDuration);
    }
    for (const v of message.quoteDenoms) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.tierInfos) {
      FeeDiscountTierInfo.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.disqualifiedMarketIds) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FeeDiscountSchedule {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeeDiscountSchedule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bucketCount = reader.uint64();
          break;
        case 2:
          message.bucketDuration = reader.int64();
          break;
        case 3:
          message.quoteDenoms.push(reader.string());
          break;
        case 4:
          message.tierInfos.push(FeeDiscountTierInfo.decode(reader, reader.uint32()));
          break;
        case 5:
          message.disqualifiedMarketIds.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<FeeDiscountSchedule>): FeeDiscountSchedule {
    const message = createBaseFeeDiscountSchedule();
    message.bucketCount = object.bucketCount !== undefined && object.bucketCount !== null ? BigInt(object.bucketCount.toString()) : BigInt(0);
    message.bucketDuration = object.bucketDuration !== undefined && object.bucketDuration !== null ? BigInt(object.bucketDuration.toString()) : BigInt(0);
    message.quoteDenoms = object.quoteDenoms?.map(e => e) || [];
    message.tierInfos = object.tierInfos?.map(e => FeeDiscountTierInfo.fromPartial(e)) || [];
    message.disqualifiedMarketIds = object.disqualifiedMarketIds?.map(e => e) || [];
    return message;
  },
  fromAmino(object: FeeDiscountScheduleAmino): FeeDiscountSchedule {
    const message = createBaseFeeDiscountSchedule();
    if (object.bucket_count !== undefined && object.bucket_count !== null) {
      message.bucketCount = BigInt(object.bucket_count);
    }
    if (object.bucket_duration !== undefined && object.bucket_duration !== null) {
      message.bucketDuration = BigInt(object.bucket_duration);
    }
    message.quoteDenoms = object.quote_denoms?.map(e => e) || [];
    message.tierInfos = object.tier_infos?.map(e => FeeDiscountTierInfo.fromAmino(e)) || [];
    message.disqualifiedMarketIds = object.disqualified_market_ids?.map(e => e) || [];
    return message;
  },
  toAmino(message: FeeDiscountSchedule): FeeDiscountScheduleAmino {
    const obj: any = {};
    obj.bucket_count = message.bucketCount !== BigInt(0) ? message.bucketCount?.toString() : undefined;
    obj.bucket_duration = message.bucketDuration !== BigInt(0) ? message.bucketDuration?.toString() : undefined;
    if (message.quoteDenoms) {
      obj.quote_denoms = message.quoteDenoms.map(e => e);
    } else {
      obj.quote_denoms = message.quoteDenoms;
    }
    if (message.tierInfos) {
      obj.tier_infos = message.tierInfos.map(e => e ? FeeDiscountTierInfo.toAmino(e) : undefined);
    } else {
      obj.tier_infos = message.tierInfos;
    }
    if (message.disqualifiedMarketIds) {
      obj.disqualified_market_ids = message.disqualifiedMarketIds.map(e => e);
    } else {
      obj.disqualified_market_ids = message.disqualifiedMarketIds;
    }
    return obj;
  },
  fromAminoMsg(object: FeeDiscountScheduleAminoMsg): FeeDiscountSchedule {
    return FeeDiscountSchedule.fromAmino(object.value);
  },
  fromProtoMsg(message: FeeDiscountScheduleProtoMsg): FeeDiscountSchedule {
    return FeeDiscountSchedule.decode(message.value);
  },
  toProto(message: FeeDiscountSchedule): Uint8Array {
    return FeeDiscountSchedule.encode(message).finish();
  },
  toProtoMsg(message: FeeDiscountSchedule): FeeDiscountScheduleProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.FeeDiscountSchedule",
      value: FeeDiscountSchedule.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(FeeDiscountSchedule.typeUrl)) {
      return;
    }
    FeeDiscountTierInfo.registerTypeUrl();
  }
};
function createBaseFeeDiscountTierTTL(): FeeDiscountTierTTL {
  return {
    tier: BigInt(0),
    ttlTimestamp: BigInt(0)
  };
}
/**
 * @name FeeDiscountTierTTL
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.FeeDiscountTierTTL
 */
export const FeeDiscountTierTTL = {
  typeUrl: "/injective.exchange.v1beta1.FeeDiscountTierTTL",
  is(o: any): o is FeeDiscountTierTTL {
    return o && (o.$typeUrl === FeeDiscountTierTTL.typeUrl || typeof o.tier === "bigint" && typeof o.ttlTimestamp === "bigint");
  },
  isAmino(o: any): o is FeeDiscountTierTTLAmino {
    return o && (o.$typeUrl === FeeDiscountTierTTL.typeUrl || typeof o.tier === "bigint" && typeof o.ttl_timestamp === "bigint");
  },
  encode(message: FeeDiscountTierTTL, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tier !== BigInt(0)) {
      writer.uint32(8).uint64(message.tier);
    }
    if (message.ttlTimestamp !== BigInt(0)) {
      writer.uint32(16).int64(message.ttlTimestamp);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FeeDiscountTierTTL {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeeDiscountTierTTL();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tier = reader.uint64();
          break;
        case 2:
          message.ttlTimestamp = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<FeeDiscountTierTTL>): FeeDiscountTierTTL {
    const message = createBaseFeeDiscountTierTTL();
    message.tier = object.tier !== undefined && object.tier !== null ? BigInt(object.tier.toString()) : BigInt(0);
    message.ttlTimestamp = object.ttlTimestamp !== undefined && object.ttlTimestamp !== null ? BigInt(object.ttlTimestamp.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: FeeDiscountTierTTLAmino): FeeDiscountTierTTL {
    const message = createBaseFeeDiscountTierTTL();
    if (object.tier !== undefined && object.tier !== null) {
      message.tier = BigInt(object.tier);
    }
    if (object.ttl_timestamp !== undefined && object.ttl_timestamp !== null) {
      message.ttlTimestamp = BigInt(object.ttl_timestamp);
    }
    return message;
  },
  toAmino(message: FeeDiscountTierTTL): FeeDiscountTierTTLAmino {
    const obj: any = {};
    obj.tier = message.tier !== BigInt(0) ? message.tier?.toString() : undefined;
    obj.ttl_timestamp = message.ttlTimestamp !== BigInt(0) ? message.ttlTimestamp?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: FeeDiscountTierTTLAminoMsg): FeeDiscountTierTTL {
    return FeeDiscountTierTTL.fromAmino(object.value);
  },
  fromProtoMsg(message: FeeDiscountTierTTLProtoMsg): FeeDiscountTierTTL {
    return FeeDiscountTierTTL.decode(message.value);
  },
  toProto(message: FeeDiscountTierTTL): Uint8Array {
    return FeeDiscountTierTTL.encode(message).finish();
  },
  toProtoMsg(message: FeeDiscountTierTTL): FeeDiscountTierTTLProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.FeeDiscountTierTTL",
      value: FeeDiscountTierTTL.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseVolumeRecord(): VolumeRecord {
  return {
    makerVolume: "",
    takerVolume: ""
  };
}
/**
 * @name VolumeRecord
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.VolumeRecord
 */
export const VolumeRecord = {
  typeUrl: "/injective.exchange.v1beta1.VolumeRecord",
  is(o: any): o is VolumeRecord {
    return o && (o.$typeUrl === VolumeRecord.typeUrl || typeof o.makerVolume === "string" && typeof o.takerVolume === "string");
  },
  isAmino(o: any): o is VolumeRecordAmino {
    return o && (o.$typeUrl === VolumeRecord.typeUrl || typeof o.maker_volume === "string" && typeof o.taker_volume === "string");
  },
  encode(message: VolumeRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.makerVolume !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.makerVolume, 18).atomics);
    }
    if (message.takerVolume !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.takerVolume, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): VolumeRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVolumeRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.makerVolume = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.takerVolume = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<VolumeRecord>): VolumeRecord {
    const message = createBaseVolumeRecord();
    message.makerVolume = object.makerVolume ?? "";
    message.takerVolume = object.takerVolume ?? "";
    return message;
  },
  fromAmino(object: VolumeRecordAmino): VolumeRecord {
    const message = createBaseVolumeRecord();
    if (object.maker_volume !== undefined && object.maker_volume !== null) {
      message.makerVolume = object.maker_volume;
    }
    if (object.taker_volume !== undefined && object.taker_volume !== null) {
      message.takerVolume = object.taker_volume;
    }
    return message;
  },
  toAmino(message: VolumeRecord): VolumeRecordAmino {
    const obj: any = {};
    obj.maker_volume = message.makerVolume === "" ? undefined : Decimal.fromUserInput(message.makerVolume, 18).atomics;
    obj.taker_volume = message.takerVolume === "" ? undefined : Decimal.fromUserInput(message.takerVolume, 18).atomics;
    return obj;
  },
  fromAminoMsg(object: VolumeRecordAminoMsg): VolumeRecord {
    return VolumeRecord.fromAmino(object.value);
  },
  fromProtoMsg(message: VolumeRecordProtoMsg): VolumeRecord {
    return VolumeRecord.decode(message.value);
  },
  toProto(message: VolumeRecord): Uint8Array {
    return VolumeRecord.encode(message).finish();
  },
  toProtoMsg(message: VolumeRecord): VolumeRecordProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.VolumeRecord",
      value: VolumeRecord.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseAccountRewards(): AccountRewards {
  return {
    account: "",
    rewards: []
  };
}
/**
 * @name AccountRewards
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.AccountRewards
 */
export const AccountRewards = {
  typeUrl: "/injective.exchange.v1beta1.AccountRewards",
  is(o: any): o is AccountRewards {
    return o && (o.$typeUrl === AccountRewards.typeUrl || typeof o.account === "string" && Array.isArray(o.rewards) && (!o.rewards.length || Coin.is(o.rewards[0])));
  },
  isAmino(o: any): o is AccountRewardsAmino {
    return o && (o.$typeUrl === AccountRewards.typeUrl || typeof o.account === "string" && Array.isArray(o.rewards) && (!o.rewards.length || Coin.isAmino(o.rewards[0])));
  },
  encode(message: AccountRewards, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    for (const v of message.rewards) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AccountRewards {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountRewards();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        case 2:
          message.rewards.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<AccountRewards>): AccountRewards {
    const message = createBaseAccountRewards();
    message.account = object.account ?? "";
    message.rewards = object.rewards?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: AccountRewardsAmino): AccountRewards {
    const message = createBaseAccountRewards();
    if (object.account !== undefined && object.account !== null) {
      message.account = object.account;
    }
    message.rewards = object.rewards?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: AccountRewards): AccountRewardsAmino {
    const obj: any = {};
    obj.account = message.account === "" ? undefined : message.account;
    if (message.rewards) {
      obj.rewards = message.rewards.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.rewards = message.rewards;
    }
    return obj;
  },
  fromAminoMsg(object: AccountRewardsAminoMsg): AccountRewards {
    return AccountRewards.fromAmino(object.value);
  },
  fromProtoMsg(message: AccountRewardsProtoMsg): AccountRewards {
    return AccountRewards.decode(message.value);
  },
  toProto(message: AccountRewards): Uint8Array {
    return AccountRewards.encode(message).finish();
  },
  toProtoMsg(message: AccountRewards): AccountRewardsProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.AccountRewards",
      value: AccountRewards.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(AccountRewards.typeUrl)) {
      return;
    }
    Coin.registerTypeUrl();
  }
};
function createBaseTradeRecords(): TradeRecords {
  return {
    marketId: "",
    latestTradeRecords: []
  };
}
/**
 * @name TradeRecords
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.TradeRecords
 */
export const TradeRecords = {
  typeUrl: "/injective.exchange.v1beta1.TradeRecords",
  is(o: any): o is TradeRecords {
    return o && (o.$typeUrl === TradeRecords.typeUrl || typeof o.marketId === "string" && Array.isArray(o.latestTradeRecords) && (!o.latestTradeRecords.length || TradeRecord.is(o.latestTradeRecords[0])));
  },
  isAmino(o: any): o is TradeRecordsAmino {
    return o && (o.$typeUrl === TradeRecords.typeUrl || typeof o.market_id === "string" && Array.isArray(o.latest_trade_records) && (!o.latest_trade_records.length || TradeRecord.isAmino(o.latest_trade_records[0])));
  },
  encode(message: TradeRecords, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    for (const v of message.latestTradeRecords) {
      TradeRecord.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TradeRecords {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTradeRecords();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.latestTradeRecords.push(TradeRecord.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<TradeRecords>): TradeRecords {
    const message = createBaseTradeRecords();
    message.marketId = object.marketId ?? "";
    message.latestTradeRecords = object.latestTradeRecords?.map(e => TradeRecord.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: TradeRecordsAmino): TradeRecords {
    const message = createBaseTradeRecords();
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    message.latestTradeRecords = object.latest_trade_records?.map(e => TradeRecord.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: TradeRecords): TradeRecordsAmino {
    const obj: any = {};
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    if (message.latestTradeRecords) {
      obj.latest_trade_records = message.latestTradeRecords.map(e => e ? TradeRecord.toAmino(e) : undefined);
    } else {
      obj.latest_trade_records = message.latestTradeRecords;
    }
    return obj;
  },
  fromAminoMsg(object: TradeRecordsAminoMsg): TradeRecords {
    return TradeRecords.fromAmino(object.value);
  },
  fromProtoMsg(message: TradeRecordsProtoMsg): TradeRecords {
    return TradeRecords.decode(message.value);
  },
  toProto(message: TradeRecords): Uint8Array {
    return TradeRecords.encode(message).finish();
  },
  toProtoMsg(message: TradeRecords): TradeRecordsProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.TradeRecords",
      value: TradeRecords.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(TradeRecords.typeUrl)) {
      return;
    }
    TradeRecord.registerTypeUrl();
  }
};
function createBaseSubaccountIDs(): SubaccountIDs {
  return {
    subaccountIds: []
  };
}
/**
 * @name SubaccountIDs
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.SubaccountIDs
 */
export const SubaccountIDs = {
  typeUrl: "/injective.exchange.v1beta1.SubaccountIDs",
  is(o: any): o is SubaccountIDs {
    return o && (o.$typeUrl === SubaccountIDs.typeUrl || Array.isArray(o.subaccountIds) && (!o.subaccountIds.length || o.subaccountIds[0] instanceof Uint8Array || typeof o.subaccountIds[0] === "string"));
  },
  isAmino(o: any): o is SubaccountIDsAmino {
    return o && (o.$typeUrl === SubaccountIDs.typeUrl || Array.isArray(o.subaccount_ids) && (!o.subaccount_ids.length || o.subaccount_ids[0] instanceof Uint8Array || typeof o.subaccount_ids[0] === "string"));
  },
  encode(message: SubaccountIDs, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.subaccountIds) {
      writer.uint32(10).bytes(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SubaccountIDs {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubaccountIDs();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subaccountIds.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<SubaccountIDs>): SubaccountIDs {
    const message = createBaseSubaccountIDs();
    message.subaccountIds = object.subaccountIds?.map(e => e) || [];
    return message;
  },
  fromAmino(object: SubaccountIDsAmino): SubaccountIDs {
    const message = createBaseSubaccountIDs();
    message.subaccountIds = object.subaccount_ids?.map(e => bytesFromBase64(e)) || [];
    return message;
  },
  toAmino(message: SubaccountIDs): SubaccountIDsAmino {
    const obj: any = {};
    if (message.subaccountIds) {
      obj.subaccount_ids = message.subaccountIds.map(e => base64FromBytes(e));
    } else {
      obj.subaccount_ids = message.subaccountIds;
    }
    return obj;
  },
  fromAminoMsg(object: SubaccountIDsAminoMsg): SubaccountIDs {
    return SubaccountIDs.fromAmino(object.value);
  },
  fromProtoMsg(message: SubaccountIDsProtoMsg): SubaccountIDs {
    return SubaccountIDs.decode(message.value);
  },
  toProto(message: SubaccountIDs): Uint8Array {
    return SubaccountIDs.encode(message).finish();
  },
  toProtoMsg(message: SubaccountIDs): SubaccountIDsProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.SubaccountIDs",
      value: SubaccountIDs.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseTradeRecord(): TradeRecord {
  return {
    timestamp: BigInt(0),
    price: "",
    quantity: ""
  };
}
/**
 * @name TradeRecord
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.TradeRecord
 */
export const TradeRecord = {
  typeUrl: "/injective.exchange.v1beta1.TradeRecord",
  is(o: any): o is TradeRecord {
    return o && (o.$typeUrl === TradeRecord.typeUrl || typeof o.timestamp === "bigint" && typeof o.price === "string" && typeof o.quantity === "string");
  },
  isAmino(o: any): o is TradeRecordAmino {
    return o && (o.$typeUrl === TradeRecord.typeUrl || typeof o.timestamp === "bigint" && typeof o.price === "string" && typeof o.quantity === "string");
  },
  encode(message: TradeRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.timestamp !== BigInt(0)) {
      writer.uint32(8).int64(message.timestamp);
    }
    if (message.price !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.price, 18).atomics);
    }
    if (message.quantity !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.quantity, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TradeRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTradeRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timestamp = reader.int64();
          break;
        case 2:
          message.price = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.quantity = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<TradeRecord>): TradeRecord {
    const message = createBaseTradeRecord();
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? BigInt(object.timestamp.toString()) : BigInt(0);
    message.price = object.price ?? "";
    message.quantity = object.quantity ?? "";
    return message;
  },
  fromAmino(object: TradeRecordAmino): TradeRecord {
    const message = createBaseTradeRecord();
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = BigInt(object.timestamp);
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price;
    }
    if (object.quantity !== undefined && object.quantity !== null) {
      message.quantity = object.quantity;
    }
    return message;
  },
  toAmino(message: TradeRecord): TradeRecordAmino {
    const obj: any = {};
    obj.timestamp = message.timestamp !== BigInt(0) ? message.timestamp?.toString() : undefined;
    obj.price = message.price === "" ? undefined : Decimal.fromUserInput(message.price, 18).atomics;
    obj.quantity = message.quantity === "" ? undefined : Decimal.fromUserInput(message.quantity, 18).atomics;
    return obj;
  },
  fromAminoMsg(object: TradeRecordAminoMsg): TradeRecord {
    return TradeRecord.fromAmino(object.value);
  },
  fromProtoMsg(message: TradeRecordProtoMsg): TradeRecord {
    return TradeRecord.decode(message.value);
  },
  toProto(message: TradeRecord): Uint8Array {
    return TradeRecord.encode(message).finish();
  },
  toProtoMsg(message: TradeRecord): TradeRecordProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.TradeRecord",
      value: TradeRecord.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseLevel(): Level {
  return {
    p: "",
    q: ""
  };
}
/**
 * @name Level
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.Level
 */
export const Level = {
  typeUrl: "/injective.exchange.v1beta1.Level",
  is(o: any): o is Level {
    return o && (o.$typeUrl === Level.typeUrl || typeof o.p === "string" && typeof o.q === "string");
  },
  isAmino(o: any): o is LevelAmino {
    return o && (o.$typeUrl === Level.typeUrl || typeof o.p === "string" && typeof o.q === "string");
  },
  encode(message: Level, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.p !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.p, 18).atomics);
    }
    if (message.q !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.q, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Level {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLevel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.p = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.q = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Level>): Level {
    const message = createBaseLevel();
    message.p = object.p ?? "";
    message.q = object.q ?? "";
    return message;
  },
  fromAmino(object: LevelAmino): Level {
    const message = createBaseLevel();
    if (object.p !== undefined && object.p !== null) {
      message.p = object.p;
    }
    if (object.q !== undefined && object.q !== null) {
      message.q = object.q;
    }
    return message;
  },
  toAmino(message: Level): LevelAmino {
    const obj: any = {};
    obj.p = message.p === "" ? undefined : Decimal.fromUserInput(message.p, 18).atomics;
    obj.q = message.q === "" ? undefined : Decimal.fromUserInput(message.q, 18).atomics;
    return obj;
  },
  fromAminoMsg(object: LevelAminoMsg): Level {
    return Level.fromAmino(object.value);
  },
  fromProtoMsg(message: LevelProtoMsg): Level {
    return Level.decode(message.value);
  },
  toProto(message: Level): Uint8Array {
    return Level.encode(message).finish();
  },
  toProtoMsg(message: Level): LevelProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.Level",
      value: Level.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseAggregateSubaccountVolumeRecord(): AggregateSubaccountVolumeRecord {
  return {
    subaccountId: "",
    marketVolumes: []
  };
}
/**
 * @name AggregateSubaccountVolumeRecord
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.AggregateSubaccountVolumeRecord
 */
export const AggregateSubaccountVolumeRecord = {
  typeUrl: "/injective.exchange.v1beta1.AggregateSubaccountVolumeRecord",
  is(o: any): o is AggregateSubaccountVolumeRecord {
    return o && (o.$typeUrl === AggregateSubaccountVolumeRecord.typeUrl || typeof o.subaccountId === "string" && Array.isArray(o.marketVolumes) && (!o.marketVolumes.length || MarketVolume.is(o.marketVolumes[0])));
  },
  isAmino(o: any): o is AggregateSubaccountVolumeRecordAmino {
    return o && (o.$typeUrl === AggregateSubaccountVolumeRecord.typeUrl || typeof o.subaccount_id === "string" && Array.isArray(o.market_volumes) && (!o.market_volumes.length || MarketVolume.isAmino(o.market_volumes[0])));
  },
  encode(message: AggregateSubaccountVolumeRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subaccountId !== "") {
      writer.uint32(10).string(message.subaccountId);
    }
    for (const v of message.marketVolumes) {
      MarketVolume.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AggregateSubaccountVolumeRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAggregateSubaccountVolumeRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subaccountId = reader.string();
          break;
        case 2:
          message.marketVolumes.push(MarketVolume.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<AggregateSubaccountVolumeRecord>): AggregateSubaccountVolumeRecord {
    const message = createBaseAggregateSubaccountVolumeRecord();
    message.subaccountId = object.subaccountId ?? "";
    message.marketVolumes = object.marketVolumes?.map(e => MarketVolume.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: AggregateSubaccountVolumeRecordAmino): AggregateSubaccountVolumeRecord {
    const message = createBaseAggregateSubaccountVolumeRecord();
    if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
      message.subaccountId = object.subaccount_id;
    }
    message.marketVolumes = object.market_volumes?.map(e => MarketVolume.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: AggregateSubaccountVolumeRecord): AggregateSubaccountVolumeRecordAmino {
    const obj: any = {};
    obj.subaccount_id = message.subaccountId === "" ? undefined : message.subaccountId;
    if (message.marketVolumes) {
      obj.market_volumes = message.marketVolumes.map(e => e ? MarketVolume.toAmino(e) : undefined);
    } else {
      obj.market_volumes = message.marketVolumes;
    }
    return obj;
  },
  fromAminoMsg(object: AggregateSubaccountVolumeRecordAminoMsg): AggregateSubaccountVolumeRecord {
    return AggregateSubaccountVolumeRecord.fromAmino(object.value);
  },
  fromProtoMsg(message: AggregateSubaccountVolumeRecordProtoMsg): AggregateSubaccountVolumeRecord {
    return AggregateSubaccountVolumeRecord.decode(message.value);
  },
  toProto(message: AggregateSubaccountVolumeRecord): Uint8Array {
    return AggregateSubaccountVolumeRecord.encode(message).finish();
  },
  toProtoMsg(message: AggregateSubaccountVolumeRecord): AggregateSubaccountVolumeRecordProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.AggregateSubaccountVolumeRecord",
      value: AggregateSubaccountVolumeRecord.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(AggregateSubaccountVolumeRecord.typeUrl)) {
      return;
    }
    MarketVolume.registerTypeUrl();
  }
};
function createBaseAggregateAccountVolumeRecord(): AggregateAccountVolumeRecord {
  return {
    account: "",
    marketVolumes: []
  };
}
/**
 * @name AggregateAccountVolumeRecord
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.AggregateAccountVolumeRecord
 */
export const AggregateAccountVolumeRecord = {
  typeUrl: "/injective.exchange.v1beta1.AggregateAccountVolumeRecord",
  is(o: any): o is AggregateAccountVolumeRecord {
    return o && (o.$typeUrl === AggregateAccountVolumeRecord.typeUrl || typeof o.account === "string" && Array.isArray(o.marketVolumes) && (!o.marketVolumes.length || MarketVolume.is(o.marketVolumes[0])));
  },
  isAmino(o: any): o is AggregateAccountVolumeRecordAmino {
    return o && (o.$typeUrl === AggregateAccountVolumeRecord.typeUrl || typeof o.account === "string" && Array.isArray(o.market_volumes) && (!o.market_volumes.length || MarketVolume.isAmino(o.market_volumes[0])));
  },
  encode(message: AggregateAccountVolumeRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    for (const v of message.marketVolumes) {
      MarketVolume.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AggregateAccountVolumeRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAggregateAccountVolumeRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        case 2:
          message.marketVolumes.push(MarketVolume.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<AggregateAccountVolumeRecord>): AggregateAccountVolumeRecord {
    const message = createBaseAggregateAccountVolumeRecord();
    message.account = object.account ?? "";
    message.marketVolumes = object.marketVolumes?.map(e => MarketVolume.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: AggregateAccountVolumeRecordAmino): AggregateAccountVolumeRecord {
    const message = createBaseAggregateAccountVolumeRecord();
    if (object.account !== undefined && object.account !== null) {
      message.account = object.account;
    }
    message.marketVolumes = object.market_volumes?.map(e => MarketVolume.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: AggregateAccountVolumeRecord): AggregateAccountVolumeRecordAmino {
    const obj: any = {};
    obj.account = message.account === "" ? undefined : message.account;
    if (message.marketVolumes) {
      obj.market_volumes = message.marketVolumes.map(e => e ? MarketVolume.toAmino(e) : undefined);
    } else {
      obj.market_volumes = message.marketVolumes;
    }
    return obj;
  },
  fromAminoMsg(object: AggregateAccountVolumeRecordAminoMsg): AggregateAccountVolumeRecord {
    return AggregateAccountVolumeRecord.fromAmino(object.value);
  },
  fromProtoMsg(message: AggregateAccountVolumeRecordProtoMsg): AggregateAccountVolumeRecord {
    return AggregateAccountVolumeRecord.decode(message.value);
  },
  toProto(message: AggregateAccountVolumeRecord): Uint8Array {
    return AggregateAccountVolumeRecord.encode(message).finish();
  },
  toProtoMsg(message: AggregateAccountVolumeRecord): AggregateAccountVolumeRecordProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.AggregateAccountVolumeRecord",
      value: AggregateAccountVolumeRecord.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(AggregateAccountVolumeRecord.typeUrl)) {
      return;
    }
    MarketVolume.registerTypeUrl();
  }
};
function createBaseMarketVolume(): MarketVolume {
  return {
    marketId: "",
    volume: VolumeRecord.fromPartial({})
  };
}
/**
 * @name MarketVolume
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.MarketVolume
 */
export const MarketVolume = {
  typeUrl: "/injective.exchange.v1beta1.MarketVolume",
  is(o: any): o is MarketVolume {
    return o && (o.$typeUrl === MarketVolume.typeUrl || typeof o.marketId === "string" && VolumeRecord.is(o.volume));
  },
  isAmino(o: any): o is MarketVolumeAmino {
    return o && (o.$typeUrl === MarketVolume.typeUrl || typeof o.market_id === "string" && VolumeRecord.isAmino(o.volume));
  },
  encode(message: MarketVolume, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.volume !== undefined) {
      VolumeRecord.encode(message.volume, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MarketVolume {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarketVolume();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.volume = VolumeRecord.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MarketVolume>): MarketVolume {
    const message = createBaseMarketVolume();
    message.marketId = object.marketId ?? "";
    message.volume = object.volume !== undefined && object.volume !== null ? VolumeRecord.fromPartial(object.volume) : undefined;
    return message;
  },
  fromAmino(object: MarketVolumeAmino): MarketVolume {
    const message = createBaseMarketVolume();
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    if (object.volume !== undefined && object.volume !== null) {
      message.volume = VolumeRecord.fromAmino(object.volume);
    }
    return message;
  },
  toAmino(message: MarketVolume): MarketVolumeAmino {
    const obj: any = {};
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    obj.volume = message.volume ? VolumeRecord.toAmino(message.volume) : undefined;
    return obj;
  },
  fromAminoMsg(object: MarketVolumeAminoMsg): MarketVolume {
    return MarketVolume.fromAmino(object.value);
  },
  fromProtoMsg(message: MarketVolumeProtoMsg): MarketVolume {
    return MarketVolume.decode(message.value);
  },
  toProto(message: MarketVolume): Uint8Array {
    return MarketVolume.encode(message).finish();
  },
  toProtoMsg(message: MarketVolume): MarketVolumeProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.MarketVolume",
      value: MarketVolume.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(MarketVolume.typeUrl)) {
      return;
    }
    VolumeRecord.registerTypeUrl();
  }
};
function createBaseDenomDecimals(): DenomDecimals {
  return {
    denom: "",
    decimals: BigInt(0)
  };
}
/**
 * @name DenomDecimals
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.DenomDecimals
 */
export const DenomDecimals = {
  typeUrl: "/injective.exchange.v1beta1.DenomDecimals",
  is(o: any): o is DenomDecimals {
    return o && (o.$typeUrl === DenomDecimals.typeUrl || typeof o.denom === "string" && typeof o.decimals === "bigint");
  },
  isAmino(o: any): o is DenomDecimalsAmino {
    return o && (o.$typeUrl === DenomDecimals.typeUrl || typeof o.denom === "string" && typeof o.decimals === "bigint");
  },
  encode(message: DenomDecimals, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.decimals !== BigInt(0)) {
      writer.uint32(16).uint64(message.decimals);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DenomDecimals {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDenomDecimals();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.decimals = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<DenomDecimals>): DenomDecimals {
    const message = createBaseDenomDecimals();
    message.denom = object.denom ?? "";
    message.decimals = object.decimals !== undefined && object.decimals !== null ? BigInt(object.decimals.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: DenomDecimalsAmino): DenomDecimals {
    const message = createBaseDenomDecimals();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.decimals !== undefined && object.decimals !== null) {
      message.decimals = BigInt(object.decimals);
    }
    return message;
  },
  toAmino(message: DenomDecimals): DenomDecimalsAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.decimals = message.decimals !== BigInt(0) ? message.decimals?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: DenomDecimalsAminoMsg): DenomDecimals {
    return DenomDecimals.fromAmino(object.value);
  },
  fromProtoMsg(message: DenomDecimalsProtoMsg): DenomDecimals {
    return DenomDecimals.decode(message.value);
  },
  toProto(message: DenomDecimals): Uint8Array {
    return DenomDecimals.encode(message).finish();
  },
  toProtoMsg(message: DenomDecimals): DenomDecimalsProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.DenomDecimals",
      value: DenomDecimals.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseGrantAuthorization(): GrantAuthorization {
  return {
    grantee: "",
    amount: ""
  };
}
/**
 * @name GrantAuthorization
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.GrantAuthorization
 */
export const GrantAuthorization = {
  typeUrl: "/injective.exchange.v1beta1.GrantAuthorization",
  is(o: any): o is GrantAuthorization {
    return o && (o.$typeUrl === GrantAuthorization.typeUrl || typeof o.grantee === "string" && typeof o.amount === "string");
  },
  isAmino(o: any): o is GrantAuthorizationAmino {
    return o && (o.$typeUrl === GrantAuthorization.typeUrl || typeof o.grantee === "string" && typeof o.amount === "string");
  },
  encode(message: GrantAuthorization, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.grantee !== "") {
      writer.uint32(10).string(message.grantee);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GrantAuthorization {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGrantAuthorization();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.grantee = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GrantAuthorization>): GrantAuthorization {
    const message = createBaseGrantAuthorization();
    message.grantee = object.grantee ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: GrantAuthorizationAmino): GrantAuthorization {
    const message = createBaseGrantAuthorization();
    if (object.grantee !== undefined && object.grantee !== null) {
      message.grantee = object.grantee;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: GrantAuthorization): GrantAuthorizationAmino {
    const obj: any = {};
    obj.grantee = message.grantee === "" ? undefined : message.grantee;
    obj.amount = message.amount === "" ? undefined : message.amount;
    return obj;
  },
  fromAminoMsg(object: GrantAuthorizationAminoMsg): GrantAuthorization {
    return GrantAuthorization.fromAmino(object.value);
  },
  fromProtoMsg(message: GrantAuthorizationProtoMsg): GrantAuthorization {
    return GrantAuthorization.decode(message.value);
  },
  toProto(message: GrantAuthorization): Uint8Array {
    return GrantAuthorization.encode(message).finish();
  },
  toProtoMsg(message: GrantAuthorization): GrantAuthorizationProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.GrantAuthorization",
      value: GrantAuthorization.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseActiveGrant(): ActiveGrant {
  return {
    granter: "",
    amount: ""
  };
}
/**
 * @name ActiveGrant
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.ActiveGrant
 */
export const ActiveGrant = {
  typeUrl: "/injective.exchange.v1beta1.ActiveGrant",
  is(o: any): o is ActiveGrant {
    return o && (o.$typeUrl === ActiveGrant.typeUrl || typeof o.granter === "string" && typeof o.amount === "string");
  },
  isAmino(o: any): o is ActiveGrantAmino {
    return o && (o.$typeUrl === ActiveGrant.typeUrl || typeof o.granter === "string" && typeof o.amount === "string");
  },
  encode(message: ActiveGrant, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ActiveGrant {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActiveGrant();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.granter = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ActiveGrant>): ActiveGrant {
    const message = createBaseActiveGrant();
    message.granter = object.granter ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: ActiveGrantAmino): ActiveGrant {
    const message = createBaseActiveGrant();
    if (object.granter !== undefined && object.granter !== null) {
      message.granter = object.granter;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: ActiveGrant): ActiveGrantAmino {
    const obj: any = {};
    obj.granter = message.granter === "" ? undefined : message.granter;
    obj.amount = message.amount === "" ? undefined : message.amount;
    return obj;
  },
  fromAminoMsg(object: ActiveGrantAminoMsg): ActiveGrant {
    return ActiveGrant.fromAmino(object.value);
  },
  fromProtoMsg(message: ActiveGrantProtoMsg): ActiveGrant {
    return ActiveGrant.decode(message.value);
  },
  toProto(message: ActiveGrant): Uint8Array {
    return ActiveGrant.encode(message).finish();
  },
  toProtoMsg(message: ActiveGrant): ActiveGrantProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.ActiveGrant",
      value: ActiveGrant.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseEffectiveGrant(): EffectiveGrant {
  return {
    granter: "",
    netGrantedStake: "",
    isValid: false
  };
}
/**
 * @name EffectiveGrant
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.EffectiveGrant
 */
export const EffectiveGrant = {
  typeUrl: "/injective.exchange.v1beta1.EffectiveGrant",
  is(o: any): o is EffectiveGrant {
    return o && (o.$typeUrl === EffectiveGrant.typeUrl || typeof o.granter === "string" && typeof o.netGrantedStake === "string" && typeof o.isValid === "boolean");
  },
  isAmino(o: any): o is EffectiveGrantAmino {
    return o && (o.$typeUrl === EffectiveGrant.typeUrl || typeof o.granter === "string" && typeof o.net_granted_stake === "string" && typeof o.is_valid === "boolean");
  },
  encode(message: EffectiveGrant, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }
    if (message.netGrantedStake !== "") {
      writer.uint32(18).string(message.netGrantedStake);
    }
    if (message.isValid === true) {
      writer.uint32(24).bool(message.isValid);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EffectiveGrant {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEffectiveGrant();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.granter = reader.string();
          break;
        case 2:
          message.netGrantedStake = reader.string();
          break;
        case 3:
          message.isValid = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EffectiveGrant>): EffectiveGrant {
    const message = createBaseEffectiveGrant();
    message.granter = object.granter ?? "";
    message.netGrantedStake = object.netGrantedStake ?? "";
    message.isValid = object.isValid ?? false;
    return message;
  },
  fromAmino(object: EffectiveGrantAmino): EffectiveGrant {
    const message = createBaseEffectiveGrant();
    if (object.granter !== undefined && object.granter !== null) {
      message.granter = object.granter;
    }
    if (object.net_granted_stake !== undefined && object.net_granted_stake !== null) {
      message.netGrantedStake = object.net_granted_stake;
    }
    if (object.is_valid !== undefined && object.is_valid !== null) {
      message.isValid = object.is_valid;
    }
    return message;
  },
  toAmino(message: EffectiveGrant): EffectiveGrantAmino {
    const obj: any = {};
    obj.granter = message.granter === "" ? undefined : message.granter;
    obj.net_granted_stake = message.netGrantedStake === "" ? undefined : message.netGrantedStake;
    obj.is_valid = message.isValid === false ? undefined : message.isValid;
    return obj;
  },
  fromAminoMsg(object: EffectiveGrantAminoMsg): EffectiveGrant {
    return EffectiveGrant.fromAmino(object.value);
  },
  fromProtoMsg(message: EffectiveGrantProtoMsg): EffectiveGrant {
    return EffectiveGrant.decode(message.value);
  },
  toProto(message: EffectiveGrant): Uint8Array {
    return EffectiveGrant.encode(message).finish();
  },
  toProtoMsg(message: EffectiveGrant): EffectiveGrantProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.EffectiveGrant",
      value: EffectiveGrant.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseDenomMinNotional(): DenomMinNotional {
  return {
    denom: "",
    minNotional: ""
  };
}
/**
 * @name DenomMinNotional
 * @package injective.exchange.v1beta1
 * @see proto type: injective.exchange.v1beta1.DenomMinNotional
 */
export const DenomMinNotional = {
  typeUrl: "/injective.exchange.v1beta1.DenomMinNotional",
  is(o: any): o is DenomMinNotional {
    return o && (o.$typeUrl === DenomMinNotional.typeUrl || typeof o.denom === "string" && typeof o.minNotional === "string");
  },
  isAmino(o: any): o is DenomMinNotionalAmino {
    return o && (o.$typeUrl === DenomMinNotional.typeUrl || typeof o.denom === "string" && typeof o.min_notional === "string");
  },
  encode(message: DenomMinNotional, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.minNotional !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.minNotional, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DenomMinNotional {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDenomMinNotional();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.minNotional = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<DenomMinNotional>): DenomMinNotional {
    const message = createBaseDenomMinNotional();
    message.denom = object.denom ?? "";
    message.minNotional = object.minNotional ?? "";
    return message;
  },
  fromAmino(object: DenomMinNotionalAmino): DenomMinNotional {
    const message = createBaseDenomMinNotional();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.min_notional !== undefined && object.min_notional !== null) {
      message.minNotional = object.min_notional;
    }
    return message;
  },
  toAmino(message: DenomMinNotional): DenomMinNotionalAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.min_notional = message.minNotional === "" ? undefined : Decimal.fromUserInput(message.minNotional, 18).atomics;
    return obj;
  },
  fromAminoMsg(object: DenomMinNotionalAminoMsg): DenomMinNotional {
    return DenomMinNotional.fromAmino(object.value);
  },
  fromProtoMsg(message: DenomMinNotionalProtoMsg): DenomMinNotional {
    return DenomMinNotional.decode(message.value);
  },
  toProto(message: DenomMinNotional): Uint8Array {
    return DenomMinNotional.encode(message).finish();
  },
  toProtoMsg(message: DenomMinNotional): DenomMinNotionalProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.DenomMinNotional",
      value: DenomMinNotional.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
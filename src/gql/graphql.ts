/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigInt: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
};

export type Meta = {
  __typename?: 'Meta';
  status?: Maybe<Scalars['JSON']['output']>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  _meta?: Maybe<Meta>;
  dailyBucketMXNUSDRate?: Maybe<DailyBucketMxnusdRate>;
  dailyBucketMXNUSDRates: DailyBucketMxnusdRatePage;
  dailyBucketUSDCMXNRate?: Maybe<DailyBucketUsdcmxnRate>;
  dailyBucketUSDCMXNRates: DailyBucketUsdcmxnRatePage;
  dailyBucketUSDCUSDRate?: Maybe<DailyBucketUsdcusdRate>;
  dailyBucketUSDCUSDRates: DailyBucketUsdcusdRatePage;
  endorsable?: Maybe<Endorsable>;
  endorsables: EndorsablePage;
  endorseEvent?: Maybe<EndorseEvent>;
  endorseEvents: EndorseEventPage;
  medianMXNUSDRate?: Maybe<MedianMxnusdRate>;
  medianMXNUSDRates: MedianMxnusdRatePage;
  medianUSDCMXNRate?: Maybe<MedianUsdcmxnRate>;
  medianUSDCMXNRates: MedianUsdcmxnRatePage;
  medianUSDCUSDRate?: Maybe<MedianUsdcusdRate>;
  medianUSDCUSDRates: MedianUsdcusdRatePage;
  monthlyBucketMXNUSDRate?: Maybe<MonthlyBucketMxnusdRate>;
  monthlyBucketMXNUSDRates: MonthlyBucketMxnusdRatePage;
  monthlyBucketUSDCMXNRate?: Maybe<MonthlyBucketUsdcmxnRate>;
  monthlyBucketUSDCMXNRates: MonthlyBucketUsdcmxnRatePage;
  monthlyBucketUSDCUSDRate?: Maybe<MonthlyBucketUsdcusdRate>;
  monthlyBucketUSDCUSDRates: MonthlyBucketUsdcusdRatePage;
  tinteroLoan?: Maybe<TinteroLoan>;
  tinteroLoans: TinteroLoanPage;
  tinteroPayment?: Maybe<TinteroPayment>;
  tinteroPayments: TinteroPaymentPage;
  tinteroTranche?: Maybe<TinteroTranche>;
  tinteroTranches: TinteroTranchePage;
  tinteroVault?: Maybe<TinteroVault>;
  tinteroVaults: TinteroVaultPage;
  wallet?: Maybe<Wallet>;
  wallets: WalletPage;
  weeklyBucketMXNUSDRate?: Maybe<WeeklyBucketMxnusdRate>;
  weeklyBucketMXNUSDRates: WeeklyBucketMxnusdRatePage;
  weeklyBucketUSDCMXNRate?: Maybe<WeeklyBucketUsdcmxnRate>;
  weeklyBucketUSDCMXNRates: WeeklyBucketUsdcmxnRatePage;
  weeklyBucketUSDCUSDRate?: Maybe<WeeklyBucketUsdcusdRate>;
  weeklyBucketUSDCUSDRates: WeeklyBucketUsdcusdRatePage;
};


export type QueryDailyBucketMxnusdRateArgs = {
  id: Scalars['Int']['input'];
};


export type QueryDailyBucketMxnusdRatesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<DailyBucketMxnusdRateFilter>;
};


export type QueryDailyBucketUsdcmxnRateArgs = {
  id: Scalars['Int']['input'];
};


export type QueryDailyBucketUsdcmxnRatesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<DailyBucketUsdcmxnRateFilter>;
};


export type QueryDailyBucketUsdcusdRateArgs = {
  id: Scalars['Int']['input'];
};


export type QueryDailyBucketUsdcusdRatesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<DailyBucketUsdcusdRateFilter>;
};


export type QueryEndorsableArgs = {
  id: Scalars['BigInt']['input'];
};


export type QueryEndorsablesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<EndorsableFilter>;
};


export type QueryEndorseEventArgs = {
  id: Scalars['String']['input'];
};


export type QueryEndorseEventsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<EndorseEventFilter>;
};


export type QueryMedianMxnusdRateArgs = {
  id: Scalars['BigInt']['input'];
};


export type QueryMedianMxnusdRatesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<MedianMxnusdRateFilter>;
};


export type QueryMedianUsdcmxnRateArgs = {
  id: Scalars['BigInt']['input'];
};


export type QueryMedianUsdcmxnRatesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<MedianUsdcmxnRateFilter>;
};


export type QueryMedianUsdcusdRateArgs = {
  id: Scalars['BigInt']['input'];
};


export type QueryMedianUsdcusdRatesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<MedianUsdcusdRateFilter>;
};


export type QueryMonthlyBucketMxnusdRateArgs = {
  id: Scalars['Int']['input'];
};


export type QueryMonthlyBucketMxnusdRatesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<MonthlyBucketMxnusdRateFilter>;
};


export type QueryMonthlyBucketUsdcmxnRateArgs = {
  id: Scalars['Int']['input'];
};


export type QueryMonthlyBucketUsdcmxnRatesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<MonthlyBucketUsdcmxnRateFilter>;
};


export type QueryMonthlyBucketUsdcusdRateArgs = {
  id: Scalars['Int']['input'];
};


export type QueryMonthlyBucketUsdcusdRatesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<MonthlyBucketUsdcusdRateFilter>;
};


export type QueryTinteroLoanArgs = {
  id: Scalars['String']['input'];
};


export type QueryTinteroLoansArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<TinteroLoanFilter>;
};


export type QueryTinteroPaymentArgs = {
  index: Scalars['BigInt']['input'];
  loan: Scalars['String']['input'];
};


export type QueryTinteroPaymentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<TinteroPaymentFilter>;
};


export type QueryTinteroTrancheArgs = {
  index: Scalars['BigInt']['input'];
  loan: Scalars['String']['input'];
};


export type QueryTinteroTranchesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<TinteroTrancheFilter>;
};


export type QueryTinteroVaultArgs = {
  id: Scalars['String']['input'];
};


export type QueryTinteroVaultsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<TinteroVaultFilter>;
};


export type QueryWalletArgs = {
  id: Scalars['String']['input'];
};


export type QueryWalletsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<WalletFilter>;
};


export type QueryWeeklyBucketMxnusdRateArgs = {
  id: Scalars['Int']['input'];
};


export type QueryWeeklyBucketMxnusdRatesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<WeeklyBucketMxnusdRateFilter>;
};


export type QueryWeeklyBucketUsdcmxnRateArgs = {
  id: Scalars['Int']['input'];
};


export type QueryWeeklyBucketUsdcmxnRatesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<WeeklyBucketUsdcmxnRateFilter>;
};


export type QueryWeeklyBucketUsdcusdRateArgs = {
  id: Scalars['Int']['input'];
};


export type QueryWeeklyBucketUsdcusdRatesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<WeeklyBucketUsdcusdRateFilter>;
};

export type DailyBucketMxnusdRate = {
  __typename?: 'dailyBucketMXNUSDRate';
  average: Scalars['Float']['output'];
  close: Scalars['Float']['output'];
  count: Scalars['Int']['output'];
  high: Scalars['Float']['output'];
  id: Scalars['Int']['output'];
  inverseAverage: Scalars['Float']['output'];
  inverseClose: Scalars['Float']['output'];
  inverseHigh: Scalars['Float']['output'];
  inverseLow: Scalars['Float']['output'];
  inverseOpen: Scalars['Float']['output'];
  low: Scalars['Float']['output'];
  open: Scalars['Float']['output'];
};

export type DailyBucketMxnusdRateFilter = {
  AND?: InputMaybe<Array<InputMaybe<DailyBucketMxnusdRateFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<DailyBucketMxnusdRateFilter>>>;
  average?: InputMaybe<Scalars['Float']['input']>;
  average_gt?: InputMaybe<Scalars['Float']['input']>;
  average_gte?: InputMaybe<Scalars['Float']['input']>;
  average_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  average_lt?: InputMaybe<Scalars['Float']['input']>;
  average_lte?: InputMaybe<Scalars['Float']['input']>;
  average_not?: InputMaybe<Scalars['Float']['input']>;
  average_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  close?: InputMaybe<Scalars['Float']['input']>;
  close_gt?: InputMaybe<Scalars['Float']['input']>;
  close_gte?: InputMaybe<Scalars['Float']['input']>;
  close_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  close_lt?: InputMaybe<Scalars['Float']['input']>;
  close_lte?: InputMaybe<Scalars['Float']['input']>;
  close_not?: InputMaybe<Scalars['Float']['input']>;
  close_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_gt?: InputMaybe<Scalars['Int']['input']>;
  count_gte?: InputMaybe<Scalars['Int']['input']>;
  count_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  count_lt?: InputMaybe<Scalars['Int']['input']>;
  count_lte?: InputMaybe<Scalars['Int']['input']>;
  count_not?: InputMaybe<Scalars['Int']['input']>;
  count_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  high?: InputMaybe<Scalars['Float']['input']>;
  high_gt?: InputMaybe<Scalars['Float']['input']>;
  high_gte?: InputMaybe<Scalars['Float']['input']>;
  high_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  high_lt?: InputMaybe<Scalars['Float']['input']>;
  high_lte?: InputMaybe<Scalars['Float']['input']>;
  high_not?: InputMaybe<Scalars['Float']['input']>;
  high_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  id?: InputMaybe<Scalars['Int']['input']>;
  id_gt?: InputMaybe<Scalars['Int']['input']>;
  id_gte?: InputMaybe<Scalars['Int']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id_lt?: InputMaybe<Scalars['Int']['input']>;
  id_lte?: InputMaybe<Scalars['Int']['input']>;
  id_not?: InputMaybe<Scalars['Int']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  inverseAverage?: InputMaybe<Scalars['Float']['input']>;
  inverseAverage_gt?: InputMaybe<Scalars['Float']['input']>;
  inverseAverage_gte?: InputMaybe<Scalars['Float']['input']>;
  inverseAverage_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  inverseAverage_lt?: InputMaybe<Scalars['Float']['input']>;
  inverseAverage_lte?: InputMaybe<Scalars['Float']['input']>;
  inverseAverage_not?: InputMaybe<Scalars['Float']['input']>;
  inverseAverage_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  inverseClose?: InputMaybe<Scalars['Float']['input']>;
  inverseClose_gt?: InputMaybe<Scalars['Float']['input']>;
  inverseClose_gte?: InputMaybe<Scalars['Float']['input']>;
  inverseClose_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  inverseClose_lt?: InputMaybe<Scalars['Float']['input']>;
  inverseClose_lte?: InputMaybe<Scalars['Float']['input']>;
  inverseClose_not?: InputMaybe<Scalars['Float']['input']>;
  inverseClose_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  inverseHigh?: InputMaybe<Scalars['Float']['input']>;
  inverseHigh_gt?: InputMaybe<Scalars['Float']['input']>;
  inverseHigh_gte?: InputMaybe<Scalars['Float']['input']>;
  inverseHigh_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  inverseHigh_lt?: InputMaybe<Scalars['Float']['input']>;
  inverseHigh_lte?: InputMaybe<Scalars['Float']['input']>;
  inverseHigh_not?: InputMaybe<Scalars['Float']['input']>;
  inverseHigh_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  inverseLow?: InputMaybe<Scalars['Float']['input']>;
  inverseLow_gt?: InputMaybe<Scalars['Float']['input']>;
  inverseLow_gte?: InputMaybe<Scalars['Float']['input']>;
  inverseLow_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  inverseLow_lt?: InputMaybe<Scalars['Float']['input']>;
  inverseLow_lte?: InputMaybe<Scalars['Float']['input']>;
  inverseLow_not?: InputMaybe<Scalars['Float']['input']>;
  inverseLow_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  inverseOpen?: InputMaybe<Scalars['Float']['input']>;
  inverseOpen_gt?: InputMaybe<Scalars['Float']['input']>;
  inverseOpen_gte?: InputMaybe<Scalars['Float']['input']>;
  inverseOpen_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  inverseOpen_lt?: InputMaybe<Scalars['Float']['input']>;
  inverseOpen_lte?: InputMaybe<Scalars['Float']['input']>;
  inverseOpen_not?: InputMaybe<Scalars['Float']['input']>;
  inverseOpen_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  low?: InputMaybe<Scalars['Float']['input']>;
  low_gt?: InputMaybe<Scalars['Float']['input']>;
  low_gte?: InputMaybe<Scalars['Float']['input']>;
  low_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  low_lt?: InputMaybe<Scalars['Float']['input']>;
  low_lte?: InputMaybe<Scalars['Float']['input']>;
  low_not?: InputMaybe<Scalars['Float']['input']>;
  low_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  open?: InputMaybe<Scalars['Float']['input']>;
  open_gt?: InputMaybe<Scalars['Float']['input']>;
  open_gte?: InputMaybe<Scalars['Float']['input']>;
  open_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  open_lt?: InputMaybe<Scalars['Float']['input']>;
  open_lte?: InputMaybe<Scalars['Float']['input']>;
  open_not?: InputMaybe<Scalars['Float']['input']>;
  open_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

export type DailyBucketMxnusdRatePage = {
  __typename?: 'dailyBucketMXNUSDRatePage';
  items: Array<DailyBucketMxnusdRate>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type DailyBucketUsdcmxnRate = {
  __typename?: 'dailyBucketUSDCMXNRate';
  average: Scalars['Float']['output'];
  close: Scalars['Float']['output'];
  count: Scalars['Int']['output'];
  high: Scalars['Float']['output'];
  id: Scalars['Int']['output'];
  inverseAverage: Scalars['Float']['output'];
  inverseClose: Scalars['Float']['output'];
  inverseHigh: Scalars['Float']['output'];
  inverseLow: Scalars['Float']['output'];
  inverseOpen: Scalars['Float']['output'];
  low: Scalars['Float']['output'];
  open: Scalars['Float']['output'];
};

export type DailyBucketUsdcmxnRateFilter = {
  AND?: InputMaybe<Array<InputMaybe<DailyBucketUsdcmxnRateFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<DailyBucketUsdcmxnRateFilter>>>;
  average?: InputMaybe<Scalars['Float']['input']>;
  average_gt?: InputMaybe<Scalars['Float']['input']>;
  average_gte?: InputMaybe<Scalars['Float']['input']>;
  average_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  average_lt?: InputMaybe<Scalars['Float']['input']>;
  average_lte?: InputMaybe<Scalars['Float']['input']>;
  average_not?: InputMaybe<Scalars['Float']['input']>;
  average_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  close?: InputMaybe<Scalars['Float']['input']>;
  close_gt?: InputMaybe<Scalars['Float']['input']>;
  close_gte?: InputMaybe<Scalars['Float']['input']>;
  close_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  close_lt?: InputMaybe<Scalars['Float']['input']>;
  close_lte?: InputMaybe<Scalars['Float']['input']>;
  close_not?: InputMaybe<Scalars['Float']['input']>;
  close_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_gt?: InputMaybe<Scalars['Int']['input']>;
  count_gte?: InputMaybe<Scalars['Int']['input']>;
  count_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  count_lt?: InputMaybe<Scalars['Int']['input']>;
  count_lte?: InputMaybe<Scalars['Int']['input']>;
  count_not?: InputMaybe<Scalars['Int']['input']>;
  count_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  high?: InputMaybe<Scalars['Float']['input']>;
  high_gt?: InputMaybe<Scalars['Float']['input']>;
  high_gte?: InputMaybe<Scalars['Float']['input']>;
  high_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  high_lt?: InputMaybe<Scalars['Float']['input']>;
  high_lte?: InputMaybe<Scalars['Float']['input']>;
  high_not?: InputMaybe<Scalars['Float']['input']>;
  high_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  id?: InputMaybe<Scalars['Int']['input']>;
  id_gt?: InputMaybe<Scalars['Int']['input']>;
  id_gte?: InputMaybe<Scalars['Int']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id_lt?: InputMaybe<Scalars['Int']['input']>;
  id_lte?: InputMaybe<Scalars['Int']['input']>;
  id_not?: InputMaybe<Scalars['Int']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  inverseAverage?: InputMaybe<Scalars['Float']['input']>;
  inverseAverage_gt?: InputMaybe<Scalars['Float']['input']>;
  inverseAverage_gte?: InputMaybe<Scalars['Float']['input']>;
  inverseAverage_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  inverseAverage_lt?: InputMaybe<Scalars['Float']['input']>;
  inverseAverage_lte?: InputMaybe<Scalars['Float']['input']>;
  inverseAverage_not?: InputMaybe<Scalars['Float']['input']>;
  inverseAverage_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  inverseClose?: InputMaybe<Scalars['Float']['input']>;
  inverseClose_gt?: InputMaybe<Scalars['Float']['input']>;
  inverseClose_gte?: InputMaybe<Scalars['Float']['input']>;
  inverseClose_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  inverseClose_lt?: InputMaybe<Scalars['Float']['input']>;
  inverseClose_lte?: InputMaybe<Scalars['Float']['input']>;
  inverseClose_not?: InputMaybe<Scalars['Float']['input']>;
  inverseClose_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  inverseHigh?: InputMaybe<Scalars['Float']['input']>;
  inverseHigh_gt?: InputMaybe<Scalars['Float']['input']>;
  inverseHigh_gte?: InputMaybe<Scalars['Float']['input']>;
  inverseHigh_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  inverseHigh_lt?: InputMaybe<Scalars['Float']['input']>;
  inverseHigh_lte?: InputMaybe<Scalars['Float']['input']>;
  inverseHigh_not?: InputMaybe<Scalars['Float']['input']>;
  inverseHigh_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  inverseLow?: InputMaybe<Scalars['Float']['input']>;
  inverseLow_gt?: InputMaybe<Scalars['Float']['input']>;
  inverseLow_gte?: InputMaybe<Scalars['Float']['input']>;
  inverseLow_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  inverseLow_lt?: InputMaybe<Scalars['Float']['input']>;
  inverseLow_lte?: InputMaybe<Scalars['Float']['input']>;
  inverseLow_not?: InputMaybe<Scalars['Float']['input']>;
  inverseLow_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  inverseOpen?: InputMaybe<Scalars['Float']['input']>;
  inverseOpen_gt?: InputMaybe<Scalars['Float']['input']>;
  inverseOpen_gte?: InputMaybe<Scalars['Float']['input']>;
  inverseOpen_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  inverseOpen_lt?: InputMaybe<Scalars['Float']['input']>;
  inverseOpen_lte?: InputMaybe<Scalars['Float']['input']>;
  inverseOpen_not?: InputMaybe<Scalars['Float']['input']>;
  inverseOpen_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  low?: InputMaybe<Scalars['Float']['input']>;
  low_gt?: InputMaybe<Scalars['Float']['input']>;
  low_gte?: InputMaybe<Scalars['Float']['input']>;
  low_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  low_lt?: InputMaybe<Scalars['Float']['input']>;
  low_lte?: InputMaybe<Scalars['Float']['input']>;
  low_not?: InputMaybe<Scalars['Float']['input']>;
  low_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  open?: InputMaybe<Scalars['Float']['input']>;
  open_gt?: InputMaybe<Scalars['Float']['input']>;
  open_gte?: InputMaybe<Scalars['Float']['input']>;
  open_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  open_lt?: InputMaybe<Scalars['Float']['input']>;
  open_lte?: InputMaybe<Scalars['Float']['input']>;
  open_not?: InputMaybe<Scalars['Float']['input']>;
  open_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

export type DailyBucketUsdcmxnRatePage = {
  __typename?: 'dailyBucketUSDCMXNRatePage';
  items: Array<DailyBucketUsdcmxnRate>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type DailyBucketUsdcusdRate = {
  __typename?: 'dailyBucketUSDCUSDRate';
  average: Scalars['Float']['output'];
  close: Scalars['Float']['output'];
  count: Scalars['Int']['output'];
  high: Scalars['Float']['output'];
  id: Scalars['Int']['output'];
  inverseAverage: Scalars['Float']['output'];
  inverseClose: Scalars['Float']['output'];
  inverseHigh: Scalars['Float']['output'];
  inverseLow: Scalars['Float']['output'];
  inverseOpen: Scalars['Float']['output'];
  low: Scalars['Float']['output'];
  open: Scalars['Float']['output'];
};

export type DailyBucketUsdcusdRateFilter = {
  AND?: InputMaybe<Array<InputMaybe<DailyBucketUsdcusdRateFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<DailyBucketUsdcusdRateFilter>>>;
  average?: InputMaybe<Scalars['Float']['input']>;
  average_gt?: InputMaybe<Scalars['Float']['input']>;
  average_gte?: InputMaybe<Scalars['Float']['input']>;
  average_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  average_lt?: InputMaybe<Scalars['Float']['input']>;
  average_lte?: InputMaybe<Scalars['Float']['input']>;
  average_not?: InputMaybe<Scalars['Float']['input']>;
  average_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  close?: InputMaybe<Scalars['Float']['input']>;
  close_gt?: InputMaybe<Scalars['Float']['input']>;
  close_gte?: InputMaybe<Scalars['Float']['input']>;
  close_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  close_lt?: InputMaybe<Scalars['Float']['input']>;
  close_lte?: InputMaybe<Scalars['Float']['input']>;
  close_not?: InputMaybe<Scalars['Float']['input']>;
  close_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_gt?: InputMaybe<Scalars['Int']['input']>;
  count_gte?: InputMaybe<Scalars['Int']['input']>;
  count_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  count_lt?: InputMaybe<Scalars['Int']['input']>;
  count_lte?: InputMaybe<Scalars['Int']['input']>;
  count_not?: InputMaybe<Scalars['Int']['input']>;
  count_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  high?: InputMaybe<Scalars['Float']['input']>;
  high_gt?: InputMaybe<Scalars['Float']['input']>;
  high_gte?: InputMaybe<Scalars['Float']['input']>;
  high_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  high_lt?: InputMaybe<Scalars['Float']['input']>;
  high_lte?: InputMaybe<Scalars['Float']['input']>;
  high_not?: InputMaybe<Scalars['Float']['input']>;
  high_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  id?: InputMaybe<Scalars['Int']['input']>;
  id_gt?: InputMaybe<Scalars['Int']['input']>;
  id_gte?: InputMaybe<Scalars['Int']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id_lt?: InputMaybe<Scalars['Int']['input']>;
  id_lte?: InputMaybe<Scalars['Int']['input']>;
  id_not?: InputMaybe<Scalars['Int']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  inverseAverage?: InputMaybe<Scalars['Float']['input']>;
  inverseAverage_gt?: InputMaybe<Scalars['Float']['input']>;
  inverseAverage_gte?: InputMaybe<Scalars['Float']['input']>;
  inverseAverage_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  inverseAverage_lt?: InputMaybe<Scalars['Float']['input']>;
  inverseAverage_lte?: InputMaybe<Scalars['Float']['input']>;
  inverseAverage_not?: InputMaybe<Scalars['Float']['input']>;
  inverseAverage_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  inverseClose?: InputMaybe<Scalars['Float']['input']>;
  inverseClose_gt?: InputMaybe<Scalars['Float']['input']>;
  inverseClose_gte?: InputMaybe<Scalars['Float']['input']>;
  inverseClose_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  inverseClose_lt?: InputMaybe<Scalars['Float']['input']>;
  inverseClose_lte?: InputMaybe<Scalars['Float']['input']>;
  inverseClose_not?: InputMaybe<Scalars['Float']['input']>;
  inverseClose_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  inverseHigh?: InputMaybe<Scalars['Float']['input']>;
  inverseHigh_gt?: InputMaybe<Scalars['Float']['input']>;
  inverseHigh_gte?: InputMaybe<Scalars['Float']['input']>;
  inverseHigh_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  inverseHigh_lt?: InputMaybe<Scalars['Float']['input']>;
  inverseHigh_lte?: InputMaybe<Scalars['Float']['input']>;
  inverseHigh_not?: InputMaybe<Scalars['Float']['input']>;
  inverseHigh_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  inverseLow?: InputMaybe<Scalars['Float']['input']>;
  inverseLow_gt?: InputMaybe<Scalars['Float']['input']>;
  inverseLow_gte?: InputMaybe<Scalars['Float']['input']>;
  inverseLow_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  inverseLow_lt?: InputMaybe<Scalars['Float']['input']>;
  inverseLow_lte?: InputMaybe<Scalars['Float']['input']>;
  inverseLow_not?: InputMaybe<Scalars['Float']['input']>;
  inverseLow_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  inverseOpen?: InputMaybe<Scalars['Float']['input']>;
  inverseOpen_gt?: InputMaybe<Scalars['Float']['input']>;
  inverseOpen_gte?: InputMaybe<Scalars['Float']['input']>;
  inverseOpen_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  inverseOpen_lt?: InputMaybe<Scalars['Float']['input']>;
  inverseOpen_lte?: InputMaybe<Scalars['Float']['input']>;
  inverseOpen_not?: InputMaybe<Scalars['Float']['input']>;
  inverseOpen_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  low?: InputMaybe<Scalars['Float']['input']>;
  low_gt?: InputMaybe<Scalars['Float']['input']>;
  low_gte?: InputMaybe<Scalars['Float']['input']>;
  low_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  low_lt?: InputMaybe<Scalars['Float']['input']>;
  low_lte?: InputMaybe<Scalars['Float']['input']>;
  low_not?: InputMaybe<Scalars['Float']['input']>;
  low_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  open?: InputMaybe<Scalars['Float']['input']>;
  open_gt?: InputMaybe<Scalars['Float']['input']>;
  open_gte?: InputMaybe<Scalars['Float']['input']>;
  open_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  open_lt?: InputMaybe<Scalars['Float']['input']>;
  open_lte?: InputMaybe<Scalars['Float']['input']>;
  open_not?: InputMaybe<Scalars['Float']['input']>;
  open_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

export type DailyBucketUsdcusdRatePage = {
  __typename?: 'dailyBucketUSDCUSDRatePage';
  items: Array<DailyBucketUsdcusdRate>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Endorsable = {
  __typename?: 'endorsable';
  endorseEvents?: Maybe<EndorseEventPage>;
  id: Scalars['BigInt']['output'];
  network: Scalars['Int']['output'];
  owner?: Maybe<Wallet>;
  ownerId: Scalars['String']['output'];
  timestamp: Scalars['Int']['output'];
};


export type EndorsableEndorseEventsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<EndorseEventFilter>;
};

export type EndorsableFilter = {
  AND?: InputMaybe<Array<InputMaybe<EndorsableFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EndorsableFilter>>>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  id_gt?: InputMaybe<Scalars['BigInt']['input']>;
  id_gte?: InputMaybe<Scalars['BigInt']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  id_lt?: InputMaybe<Scalars['BigInt']['input']>;
  id_lte?: InputMaybe<Scalars['BigInt']['input']>;
  id_not?: InputMaybe<Scalars['BigInt']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  network?: InputMaybe<Scalars['Int']['input']>;
  network_gt?: InputMaybe<Scalars['Int']['input']>;
  network_gte?: InputMaybe<Scalars['Int']['input']>;
  network_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  network_lt?: InputMaybe<Scalars['Int']['input']>;
  network_lte?: InputMaybe<Scalars['Int']['input']>;
  network_not?: InputMaybe<Scalars['Int']['input']>;
  network_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  ownerId?: InputMaybe<Scalars['String']['input']>;
  ownerId_contains?: InputMaybe<Scalars['String']['input']>;
  ownerId_ends_with?: InputMaybe<Scalars['String']['input']>;
  ownerId_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ownerId_not?: InputMaybe<Scalars['String']['input']>;
  ownerId_not_contains?: InputMaybe<Scalars['String']['input']>;
  ownerId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  ownerId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ownerId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  ownerId_starts_with?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type EndorsablePage = {
  __typename?: 'endorsablePage';
  items: Array<Endorsable>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type EndorseEvent = {
  __typename?: 'endorseEvent';
  digest: Scalars['BigInt']['output'];
  from?: Maybe<Wallet>;
  fromId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  network: Scalars['Int']['output'];
  timestamp: Scalars['Int']['output'];
  to?: Maybe<Wallet>;
  toId: Scalars['String']['output'];
  token?: Maybe<Endorsable>;
};

export type EndorseEventFilter = {
  AND?: InputMaybe<Array<InputMaybe<EndorseEventFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EndorseEventFilter>>>;
  digest?: InputMaybe<Scalars['BigInt']['input']>;
  digest_gt?: InputMaybe<Scalars['BigInt']['input']>;
  digest_gte?: InputMaybe<Scalars['BigInt']['input']>;
  digest_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  digest_lt?: InputMaybe<Scalars['BigInt']['input']>;
  digest_lte?: InputMaybe<Scalars['BigInt']['input']>;
  digest_not?: InputMaybe<Scalars['BigInt']['input']>;
  digest_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  fromId?: InputMaybe<Scalars['String']['input']>;
  fromId_contains?: InputMaybe<Scalars['String']['input']>;
  fromId_ends_with?: InputMaybe<Scalars['String']['input']>;
  fromId_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fromId_not?: InputMaybe<Scalars['String']['input']>;
  fromId_not_contains?: InputMaybe<Scalars['String']['input']>;
  fromId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  fromId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fromId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  fromId_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  network?: InputMaybe<Scalars['Int']['input']>;
  network_gt?: InputMaybe<Scalars['Int']['input']>;
  network_gte?: InputMaybe<Scalars['Int']['input']>;
  network_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  network_lt?: InputMaybe<Scalars['Int']['input']>;
  network_lte?: InputMaybe<Scalars['Int']['input']>;
  network_not?: InputMaybe<Scalars['Int']['input']>;
  network_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  toId?: InputMaybe<Scalars['String']['input']>;
  toId_contains?: InputMaybe<Scalars['String']['input']>;
  toId_ends_with?: InputMaybe<Scalars['String']['input']>;
  toId_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  toId_not?: InputMaybe<Scalars['String']['input']>;
  toId_not_contains?: InputMaybe<Scalars['String']['input']>;
  toId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  toId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  toId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  toId_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type EndorseEventPage = {
  __typename?: 'endorseEventPage';
  items: Array<EndorseEvent>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type MedianMxnusdRate = {
  __typename?: 'medianMXNUSDRate';
  id: Scalars['BigInt']['output'];
  inverseRate: Scalars['Float']['output'];
  network: Scalars['Int']['output'];
  rate: Scalars['Float']['output'];
  timestamp: Scalars['Int']['output'];
};

export type MedianMxnusdRateFilter = {
  AND?: InputMaybe<Array<InputMaybe<MedianMxnusdRateFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<MedianMxnusdRateFilter>>>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  id_gt?: InputMaybe<Scalars['BigInt']['input']>;
  id_gte?: InputMaybe<Scalars['BigInt']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  id_lt?: InputMaybe<Scalars['BigInt']['input']>;
  id_lte?: InputMaybe<Scalars['BigInt']['input']>;
  id_not?: InputMaybe<Scalars['BigInt']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  inverseRate?: InputMaybe<Scalars['Float']['input']>;
  inverseRate_gt?: InputMaybe<Scalars['Float']['input']>;
  inverseRate_gte?: InputMaybe<Scalars['Float']['input']>;
  inverseRate_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  inverseRate_lt?: InputMaybe<Scalars['Float']['input']>;
  inverseRate_lte?: InputMaybe<Scalars['Float']['input']>;
  inverseRate_not?: InputMaybe<Scalars['Float']['input']>;
  inverseRate_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  network?: InputMaybe<Scalars['Int']['input']>;
  network_gt?: InputMaybe<Scalars['Int']['input']>;
  network_gte?: InputMaybe<Scalars['Int']['input']>;
  network_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  network_lt?: InputMaybe<Scalars['Int']['input']>;
  network_lte?: InputMaybe<Scalars['Int']['input']>;
  network_not?: InputMaybe<Scalars['Int']['input']>;
  network_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  rate?: InputMaybe<Scalars['Float']['input']>;
  rate_gt?: InputMaybe<Scalars['Float']['input']>;
  rate_gte?: InputMaybe<Scalars['Float']['input']>;
  rate_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  rate_lt?: InputMaybe<Scalars['Float']['input']>;
  rate_lte?: InputMaybe<Scalars['Float']['input']>;
  rate_not?: InputMaybe<Scalars['Float']['input']>;
  rate_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type MedianMxnusdRatePage = {
  __typename?: 'medianMXNUSDRatePage';
  items: Array<MedianMxnusdRate>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type MedianUsdcmxnRate = {
  __typename?: 'medianUSDCMXNRate';
  id: Scalars['BigInt']['output'];
  inverseRate: Scalars['Float']['output'];
  network: Scalars['Int']['output'];
  rate: Scalars['Float']['output'];
  timestamp: Scalars['Int']['output'];
};

export type MedianUsdcmxnRateFilter = {
  AND?: InputMaybe<Array<InputMaybe<MedianUsdcmxnRateFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<MedianUsdcmxnRateFilter>>>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  id_gt?: InputMaybe<Scalars['BigInt']['input']>;
  id_gte?: InputMaybe<Scalars['BigInt']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  id_lt?: InputMaybe<Scalars['BigInt']['input']>;
  id_lte?: InputMaybe<Scalars['BigInt']['input']>;
  id_not?: InputMaybe<Scalars['BigInt']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  inverseRate?: InputMaybe<Scalars['Float']['input']>;
  inverseRate_gt?: InputMaybe<Scalars['Float']['input']>;
  inverseRate_gte?: InputMaybe<Scalars['Float']['input']>;
  inverseRate_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  inverseRate_lt?: InputMaybe<Scalars['Float']['input']>;
  inverseRate_lte?: InputMaybe<Scalars['Float']['input']>;
  inverseRate_not?: InputMaybe<Scalars['Float']['input']>;
  inverseRate_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  network?: InputMaybe<Scalars['Int']['input']>;
  network_gt?: InputMaybe<Scalars['Int']['input']>;
  network_gte?: InputMaybe<Scalars['Int']['input']>;
  network_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  network_lt?: InputMaybe<Scalars['Int']['input']>;
  network_lte?: InputMaybe<Scalars['Int']['input']>;
  network_not?: InputMaybe<Scalars['Int']['input']>;
  network_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  rate?: InputMaybe<Scalars['Float']['input']>;
  rate_gt?: InputMaybe<Scalars['Float']['input']>;
  rate_gte?: InputMaybe<Scalars['Float']['input']>;
  rate_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  rate_lt?: InputMaybe<Scalars['Float']['input']>;
  rate_lte?: InputMaybe<Scalars['Float']['input']>;
  rate_not?: InputMaybe<Scalars['Float']['input']>;
  rate_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type MedianUsdcmxnRatePage = {
  __typename?: 'medianUSDCMXNRatePage';
  items: Array<MedianUsdcmxnRate>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type MedianUsdcusdRate = {
  __typename?: 'medianUSDCUSDRate';
  id: Scalars['BigInt']['output'];
  inverseRate: Scalars['Float']['output'];
  network: Scalars['Int']['output'];
  rate: Scalars['Float']['output'];
  timestamp: Scalars['Int']['output'];
};

export type MedianUsdcusdRateFilter = {
  AND?: InputMaybe<Array<InputMaybe<MedianUsdcusdRateFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<MedianUsdcusdRateFilter>>>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  id_gt?: InputMaybe<Scalars['BigInt']['input']>;
  id_gte?: InputMaybe<Scalars['BigInt']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  id_lt?: InputMaybe<Scalars['BigInt']['input']>;
  id_lte?: InputMaybe<Scalars['BigInt']['input']>;
  id_not?: InputMaybe<Scalars['BigInt']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  inverseRate?: InputMaybe<Scalars['Float']['input']>;
  inverseRate_gt?: InputMaybe<Scalars['Float']['input']>;
  inverseRate_gte?: InputMaybe<Scalars['Float']['input']>;
  inverseRate_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  inverseRate_lt?: InputMaybe<Scalars['Float']['input']>;
  inverseRate_lte?: InputMaybe<Scalars['Float']['input']>;
  inverseRate_not?: InputMaybe<Scalars['Float']['input']>;
  inverseRate_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  network?: InputMaybe<Scalars['Int']['input']>;
  network_gt?: InputMaybe<Scalars['Int']['input']>;
  network_gte?: InputMaybe<Scalars['Int']['input']>;
  network_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  network_lt?: InputMaybe<Scalars['Int']['input']>;
  network_lte?: InputMaybe<Scalars['Int']['input']>;
  network_not?: InputMaybe<Scalars['Int']['input']>;
  network_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  rate?: InputMaybe<Scalars['Float']['input']>;
  rate_gt?: InputMaybe<Scalars['Float']['input']>;
  rate_gte?: InputMaybe<Scalars['Float']['input']>;
  rate_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  rate_lt?: InputMaybe<Scalars['Float']['input']>;
  rate_lte?: InputMaybe<Scalars['Float']['input']>;
  rate_not?: InputMaybe<Scalars['Float']['input']>;
  rate_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type MedianUsdcusdRatePage = {
  __typename?: 'medianUSDCUSDRatePage';
  items: Array<MedianUsdcusdRate>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type MonthlyBucketMxnusdRate = {
  __typename?: 'monthlyBucketMXNUSDRate';
  average: Scalars['Float']['output'];
  close: Scalars['Float']['output'];
  count: Scalars['Int']['output'];
  high: Scalars['Float']['output'];
  id: Scalars['Int']['output'];
  inverseAverage: Scalars['Float']['output'];
  inverseClose: Scalars['Float']['output'];
  inverseHigh: Scalars['Float']['output'];
  inverseLow: Scalars['Float']['output'];
  inverseOpen: Scalars['Float']['output'];
  low: Scalars['Float']['output'];
  open: Scalars['Float']['output'];
};

export type MonthlyBucketMxnusdRateFilter = {
  AND?: InputMaybe<Array<InputMaybe<MonthlyBucketMxnusdRateFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<MonthlyBucketMxnusdRateFilter>>>;
  average?: InputMaybe<Scalars['Float']['input']>;
  average_gt?: InputMaybe<Scalars['Float']['input']>;
  average_gte?: InputMaybe<Scalars['Float']['input']>;
  average_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  average_lt?: InputMaybe<Scalars['Float']['input']>;
  average_lte?: InputMaybe<Scalars['Float']['input']>;
  average_not?: InputMaybe<Scalars['Float']['input']>;
  average_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  close?: InputMaybe<Scalars['Float']['input']>;
  close_gt?: InputMaybe<Scalars['Float']['input']>;
  close_gte?: InputMaybe<Scalars['Float']['input']>;
  close_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  close_lt?: InputMaybe<Scalars['Float']['input']>;
  close_lte?: InputMaybe<Scalars['Float']['input']>;
  close_not?: InputMaybe<Scalars['Float']['input']>;
  close_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_gt?: InputMaybe<Scalars['Int']['input']>;
  count_gte?: InputMaybe<Scalars['Int']['input']>;
  count_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  count_lt?: InputMaybe<Scalars['Int']['input']>;
  count_lte?: InputMaybe<Scalars['Int']['input']>;
  count_not?: InputMaybe<Scalars['Int']['input']>;
  count_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  high?: InputMaybe<Scalars['Float']['input']>;
  high_gt?: InputMaybe<Scalars['Float']['input']>;
  high_gte?: InputMaybe<Scalars['Float']['input']>;
  high_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  high_lt?: InputMaybe<Scalars['Float']['input']>;
  high_lte?: InputMaybe<Scalars['Float']['input']>;
  high_not?: InputMaybe<Scalars['Float']['input']>;
  high_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  id?: InputMaybe<Scalars['Int']['input']>;
  id_gt?: InputMaybe<Scalars['Int']['input']>;
  id_gte?: InputMaybe<Scalars['Int']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id_lt?: InputMaybe<Scalars['Int']['input']>;
  id_lte?: InputMaybe<Scalars['Int']['input']>;
  id_not?: InputMaybe<Scalars['Int']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  inverseAverage?: InputMaybe<Scalars['Float']['input']>;
  inverseAverage_gt?: InputMaybe<Scalars['Float']['input']>;
  inverseAverage_gte?: InputMaybe<Scalars['Float']['input']>;
  inverseAverage_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  inverseAverage_lt?: InputMaybe<Scalars['Float']['input']>;
  inverseAverage_lte?: InputMaybe<Scalars['Float']['input']>;
  inverseAverage_not?: InputMaybe<Scalars['Float']['input']>;
  inverseAverage_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  inverseClose?: InputMaybe<Scalars['Float']['input']>;
  inverseClose_gt?: InputMaybe<Scalars['Float']['input']>;
  inverseClose_gte?: InputMaybe<Scalars['Float']['input']>;
  inverseClose_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  inverseClose_lt?: InputMaybe<Scalars['Float']['input']>;
  inverseClose_lte?: InputMaybe<Scalars['Float']['input']>;
  inverseClose_not?: InputMaybe<Scalars['Float']['input']>;
  inverseClose_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  inverseHigh?: InputMaybe<Scalars['Float']['input']>;
  inverseHigh_gt?: InputMaybe<Scalars['Float']['input']>;
  inverseHigh_gte?: InputMaybe<Scalars['Float']['input']>;
  inverseHigh_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  inverseHigh_lt?: InputMaybe<Scalars['Float']['input']>;
  inverseHigh_lte?: InputMaybe<Scalars['Float']['input']>;
  inverseHigh_not?: InputMaybe<Scalars['Float']['input']>;
  inverseHigh_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  inverseLow?: InputMaybe<Scalars['Float']['input']>;
  inverseLow_gt?: InputMaybe<Scalars['Float']['input']>;
  inverseLow_gte?: InputMaybe<Scalars['Float']['input']>;
  inverseLow_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  inverseLow_lt?: InputMaybe<Scalars['Float']['input']>;
  inverseLow_lte?: InputMaybe<Scalars['Float']['input']>;
  inverseLow_not?: InputMaybe<Scalars['Float']['input']>;
  inverseLow_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  inverseOpen?: InputMaybe<Scalars['Float']['input']>;
  inverseOpen_gt?: InputMaybe<Scalars['Float']['input']>;
  inverseOpen_gte?: InputMaybe<Scalars['Float']['input']>;
  inverseOpen_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  inverseOpen_lt?: InputMaybe<Scalars['Float']['input']>;
  inverseOpen_lte?: InputMaybe<Scalars['Float']['input']>;
  inverseOpen_not?: InputMaybe<Scalars['Float']['input']>;
  inverseOpen_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  low?: InputMaybe<Scalars['Float']['input']>;
  low_gt?: InputMaybe<Scalars['Float']['input']>;
  low_gte?: InputMaybe<Scalars['Float']['input']>;
  low_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  low_lt?: InputMaybe<Scalars['Float']['input']>;
  low_lte?: InputMaybe<Scalars['Float']['input']>;
  low_not?: InputMaybe<Scalars['Float']['input']>;
  low_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  open?: InputMaybe<Scalars['Float']['input']>;
  open_gt?: InputMaybe<Scalars['Float']['input']>;
  open_gte?: InputMaybe<Scalars['Float']['input']>;
  open_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  open_lt?: InputMaybe<Scalars['Float']['input']>;
  open_lte?: InputMaybe<Scalars['Float']['input']>;
  open_not?: InputMaybe<Scalars['Float']['input']>;
  open_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

export type MonthlyBucketMxnusdRatePage = {
  __typename?: 'monthlyBucketMXNUSDRatePage';
  items: Array<MonthlyBucketMxnusdRate>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type MonthlyBucketUsdcmxnRate = {
  __typename?: 'monthlyBucketUSDCMXNRate';
  average: Scalars['Float']['output'];
  close: Scalars['Float']['output'];
  count: Scalars['Int']['output'];
  high: Scalars['Float']['output'];
  id: Scalars['Int']['output'];
  inverseAverage: Scalars['Float']['output'];
  inverseClose: Scalars['Float']['output'];
  inverseHigh: Scalars['Float']['output'];
  inverseLow: Scalars['Float']['output'];
  inverseOpen: Scalars['Float']['output'];
  low: Scalars['Float']['output'];
  open: Scalars['Float']['output'];
};

export type MonthlyBucketUsdcmxnRateFilter = {
  AND?: InputMaybe<Array<InputMaybe<MonthlyBucketUsdcmxnRateFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<MonthlyBucketUsdcmxnRateFilter>>>;
  average?: InputMaybe<Scalars['Float']['input']>;
  average_gt?: InputMaybe<Scalars['Float']['input']>;
  average_gte?: InputMaybe<Scalars['Float']['input']>;
  average_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  average_lt?: InputMaybe<Scalars['Float']['input']>;
  average_lte?: InputMaybe<Scalars['Float']['input']>;
  average_not?: InputMaybe<Scalars['Float']['input']>;
  average_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  close?: InputMaybe<Scalars['Float']['input']>;
  close_gt?: InputMaybe<Scalars['Float']['input']>;
  close_gte?: InputMaybe<Scalars['Float']['input']>;
  close_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  close_lt?: InputMaybe<Scalars['Float']['input']>;
  close_lte?: InputMaybe<Scalars['Float']['input']>;
  close_not?: InputMaybe<Scalars['Float']['input']>;
  close_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_gt?: InputMaybe<Scalars['Int']['input']>;
  count_gte?: InputMaybe<Scalars['Int']['input']>;
  count_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  count_lt?: InputMaybe<Scalars['Int']['input']>;
  count_lte?: InputMaybe<Scalars['Int']['input']>;
  count_not?: InputMaybe<Scalars['Int']['input']>;
  count_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  high?: InputMaybe<Scalars['Float']['input']>;
  high_gt?: InputMaybe<Scalars['Float']['input']>;
  high_gte?: InputMaybe<Scalars['Float']['input']>;
  high_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  high_lt?: InputMaybe<Scalars['Float']['input']>;
  high_lte?: InputMaybe<Scalars['Float']['input']>;
  high_not?: InputMaybe<Scalars['Float']['input']>;
  high_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  id?: InputMaybe<Scalars['Int']['input']>;
  id_gt?: InputMaybe<Scalars['Int']['input']>;
  id_gte?: InputMaybe<Scalars['Int']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id_lt?: InputMaybe<Scalars['Int']['input']>;
  id_lte?: InputMaybe<Scalars['Int']['input']>;
  id_not?: InputMaybe<Scalars['Int']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  inverseAverage?: InputMaybe<Scalars['Float']['input']>;
  inverseAverage_gt?: InputMaybe<Scalars['Float']['input']>;
  inverseAverage_gte?: InputMaybe<Scalars['Float']['input']>;
  inverseAverage_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  inverseAverage_lt?: InputMaybe<Scalars['Float']['input']>;
  inverseAverage_lte?: InputMaybe<Scalars['Float']['input']>;
  inverseAverage_not?: InputMaybe<Scalars['Float']['input']>;
  inverseAverage_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  inverseClose?: InputMaybe<Scalars['Float']['input']>;
  inverseClose_gt?: InputMaybe<Scalars['Float']['input']>;
  inverseClose_gte?: InputMaybe<Scalars['Float']['input']>;
  inverseClose_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  inverseClose_lt?: InputMaybe<Scalars['Float']['input']>;
  inverseClose_lte?: InputMaybe<Scalars['Float']['input']>;
  inverseClose_not?: InputMaybe<Scalars['Float']['input']>;
  inverseClose_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  inverseHigh?: InputMaybe<Scalars['Float']['input']>;
  inverseHigh_gt?: InputMaybe<Scalars['Float']['input']>;
  inverseHigh_gte?: InputMaybe<Scalars['Float']['input']>;
  inverseHigh_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  inverseHigh_lt?: InputMaybe<Scalars['Float']['input']>;
  inverseHigh_lte?: InputMaybe<Scalars['Float']['input']>;
  inverseHigh_not?: InputMaybe<Scalars['Float']['input']>;
  inverseHigh_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  inverseLow?: InputMaybe<Scalars['Float']['input']>;
  inverseLow_gt?: InputMaybe<Scalars['Float']['input']>;
  inverseLow_gte?: InputMaybe<Scalars['Float']['input']>;
  inverseLow_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  inverseLow_lt?: InputMaybe<Scalars['Float']['input']>;
  inverseLow_lte?: InputMaybe<Scalars['Float']['input']>;
  inverseLow_not?: InputMaybe<Scalars['Float']['input']>;
  inverseLow_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  inverseOpen?: InputMaybe<Scalars['Float']['input']>;
  inverseOpen_gt?: InputMaybe<Scalars['Float']['input']>;
  inverseOpen_gte?: InputMaybe<Scalars['Float']['input']>;
  inverseOpen_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  inverseOpen_lt?: InputMaybe<Scalars['Float']['input']>;
  inverseOpen_lte?: InputMaybe<Scalars['Float']['input']>;
  inverseOpen_not?: InputMaybe<Scalars['Float']['input']>;
  inverseOpen_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  low?: InputMaybe<Scalars['Float']['input']>;
  low_gt?: InputMaybe<Scalars['Float']['input']>;
  low_gte?: InputMaybe<Scalars['Float']['input']>;
  low_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  low_lt?: InputMaybe<Scalars['Float']['input']>;
  low_lte?: InputMaybe<Scalars['Float']['input']>;
  low_not?: InputMaybe<Scalars['Float']['input']>;
  low_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  open?: InputMaybe<Scalars['Float']['input']>;
  open_gt?: InputMaybe<Scalars['Float']['input']>;
  open_gte?: InputMaybe<Scalars['Float']['input']>;
  open_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  open_lt?: InputMaybe<Scalars['Float']['input']>;
  open_lte?: InputMaybe<Scalars['Float']['input']>;
  open_not?: InputMaybe<Scalars['Float']['input']>;
  open_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

export type MonthlyBucketUsdcmxnRatePage = {
  __typename?: 'monthlyBucketUSDCMXNRatePage';
  items: Array<MonthlyBucketUsdcmxnRate>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type MonthlyBucketUsdcusdRate = {
  __typename?: 'monthlyBucketUSDCUSDRate';
  average: Scalars['Float']['output'];
  close: Scalars['Float']['output'];
  count: Scalars['Int']['output'];
  high: Scalars['Float']['output'];
  id: Scalars['Int']['output'];
  inverseAverage: Scalars['Float']['output'];
  inverseClose: Scalars['Float']['output'];
  inverseHigh: Scalars['Float']['output'];
  inverseLow: Scalars['Float']['output'];
  inverseOpen: Scalars['Float']['output'];
  low: Scalars['Float']['output'];
  open: Scalars['Float']['output'];
};

export type MonthlyBucketUsdcusdRateFilter = {
  AND?: InputMaybe<Array<InputMaybe<MonthlyBucketUsdcusdRateFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<MonthlyBucketUsdcusdRateFilter>>>;
  average?: InputMaybe<Scalars['Float']['input']>;
  average_gt?: InputMaybe<Scalars['Float']['input']>;
  average_gte?: InputMaybe<Scalars['Float']['input']>;
  average_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  average_lt?: InputMaybe<Scalars['Float']['input']>;
  average_lte?: InputMaybe<Scalars['Float']['input']>;
  average_not?: InputMaybe<Scalars['Float']['input']>;
  average_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  close?: InputMaybe<Scalars['Float']['input']>;
  close_gt?: InputMaybe<Scalars['Float']['input']>;
  close_gte?: InputMaybe<Scalars['Float']['input']>;
  close_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  close_lt?: InputMaybe<Scalars['Float']['input']>;
  close_lte?: InputMaybe<Scalars['Float']['input']>;
  close_not?: InputMaybe<Scalars['Float']['input']>;
  close_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_gt?: InputMaybe<Scalars['Int']['input']>;
  count_gte?: InputMaybe<Scalars['Int']['input']>;
  count_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  count_lt?: InputMaybe<Scalars['Int']['input']>;
  count_lte?: InputMaybe<Scalars['Int']['input']>;
  count_not?: InputMaybe<Scalars['Int']['input']>;
  count_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  high?: InputMaybe<Scalars['Float']['input']>;
  high_gt?: InputMaybe<Scalars['Float']['input']>;
  high_gte?: InputMaybe<Scalars['Float']['input']>;
  high_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  high_lt?: InputMaybe<Scalars['Float']['input']>;
  high_lte?: InputMaybe<Scalars['Float']['input']>;
  high_not?: InputMaybe<Scalars['Float']['input']>;
  high_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  id?: InputMaybe<Scalars['Int']['input']>;
  id_gt?: InputMaybe<Scalars['Int']['input']>;
  id_gte?: InputMaybe<Scalars['Int']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id_lt?: InputMaybe<Scalars['Int']['input']>;
  id_lte?: InputMaybe<Scalars['Int']['input']>;
  id_not?: InputMaybe<Scalars['Int']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  inverseAverage?: InputMaybe<Scalars['Float']['input']>;
  inverseAverage_gt?: InputMaybe<Scalars['Float']['input']>;
  inverseAverage_gte?: InputMaybe<Scalars['Float']['input']>;
  inverseAverage_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  inverseAverage_lt?: InputMaybe<Scalars['Float']['input']>;
  inverseAverage_lte?: InputMaybe<Scalars['Float']['input']>;
  inverseAverage_not?: InputMaybe<Scalars['Float']['input']>;
  inverseAverage_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  inverseClose?: InputMaybe<Scalars['Float']['input']>;
  inverseClose_gt?: InputMaybe<Scalars['Float']['input']>;
  inverseClose_gte?: InputMaybe<Scalars['Float']['input']>;
  inverseClose_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  inverseClose_lt?: InputMaybe<Scalars['Float']['input']>;
  inverseClose_lte?: InputMaybe<Scalars['Float']['input']>;
  inverseClose_not?: InputMaybe<Scalars['Float']['input']>;
  inverseClose_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  inverseHigh?: InputMaybe<Scalars['Float']['input']>;
  inverseHigh_gt?: InputMaybe<Scalars['Float']['input']>;
  inverseHigh_gte?: InputMaybe<Scalars['Float']['input']>;
  inverseHigh_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  inverseHigh_lt?: InputMaybe<Scalars['Float']['input']>;
  inverseHigh_lte?: InputMaybe<Scalars['Float']['input']>;
  inverseHigh_not?: InputMaybe<Scalars['Float']['input']>;
  inverseHigh_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  inverseLow?: InputMaybe<Scalars['Float']['input']>;
  inverseLow_gt?: InputMaybe<Scalars['Float']['input']>;
  inverseLow_gte?: InputMaybe<Scalars['Float']['input']>;
  inverseLow_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  inverseLow_lt?: InputMaybe<Scalars['Float']['input']>;
  inverseLow_lte?: InputMaybe<Scalars['Float']['input']>;
  inverseLow_not?: InputMaybe<Scalars['Float']['input']>;
  inverseLow_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  inverseOpen?: InputMaybe<Scalars['Float']['input']>;
  inverseOpen_gt?: InputMaybe<Scalars['Float']['input']>;
  inverseOpen_gte?: InputMaybe<Scalars['Float']['input']>;
  inverseOpen_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  inverseOpen_lt?: InputMaybe<Scalars['Float']['input']>;
  inverseOpen_lte?: InputMaybe<Scalars['Float']['input']>;
  inverseOpen_not?: InputMaybe<Scalars['Float']['input']>;
  inverseOpen_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  low?: InputMaybe<Scalars['Float']['input']>;
  low_gt?: InputMaybe<Scalars['Float']['input']>;
  low_gte?: InputMaybe<Scalars['Float']['input']>;
  low_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  low_lt?: InputMaybe<Scalars['Float']['input']>;
  low_lte?: InputMaybe<Scalars['Float']['input']>;
  low_not?: InputMaybe<Scalars['Float']['input']>;
  low_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  open?: InputMaybe<Scalars['Float']['input']>;
  open_gt?: InputMaybe<Scalars['Float']['input']>;
  open_gte?: InputMaybe<Scalars['Float']['input']>;
  open_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  open_lt?: InputMaybe<Scalars['Float']['input']>;
  open_lte?: InputMaybe<Scalars['Float']['input']>;
  open_not?: InputMaybe<Scalars['Float']['input']>;
  open_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

export type MonthlyBucketUsdcusdRatePage = {
  __typename?: 'monthlyBucketUSDCUSDRatePage';
  items: Array<MonthlyBucketUsdcusdRate>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type TinteroLoan = {
  __typename?: 'tinteroLoan';
  beneficiary: Scalars['String']['output'];
  collateralAsset: Scalars['String']['output'];
  defaultThreshold: Scalars['Int']['output'];
  id: Scalars['String']['output'];
  payments?: Maybe<TinteroPaymentPage>;
  vault?: Maybe<TinteroVault>;
};


export type TinteroLoanPaymentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<TinteroPaymentFilter>;
};

export type TinteroLoanFilter = {
  AND?: InputMaybe<Array<InputMaybe<TinteroLoanFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TinteroLoanFilter>>>;
  beneficiary?: InputMaybe<Scalars['String']['input']>;
  beneficiary_contains?: InputMaybe<Scalars['String']['input']>;
  beneficiary_ends_with?: InputMaybe<Scalars['String']['input']>;
  beneficiary_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  beneficiary_not?: InputMaybe<Scalars['String']['input']>;
  beneficiary_not_contains?: InputMaybe<Scalars['String']['input']>;
  beneficiary_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  beneficiary_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  beneficiary_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  beneficiary_starts_with?: InputMaybe<Scalars['String']['input']>;
  collateralAsset?: InputMaybe<Scalars['String']['input']>;
  collateralAsset_contains?: InputMaybe<Scalars['String']['input']>;
  collateralAsset_ends_with?: InputMaybe<Scalars['String']['input']>;
  collateralAsset_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  collateralAsset_not?: InputMaybe<Scalars['String']['input']>;
  collateralAsset_not_contains?: InputMaybe<Scalars['String']['input']>;
  collateralAsset_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  collateralAsset_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  collateralAsset_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  collateralAsset_starts_with?: InputMaybe<Scalars['String']['input']>;
  defaultThreshold?: InputMaybe<Scalars['Int']['input']>;
  defaultThreshold_gt?: InputMaybe<Scalars['Int']['input']>;
  defaultThreshold_gte?: InputMaybe<Scalars['Int']['input']>;
  defaultThreshold_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  defaultThreshold_lt?: InputMaybe<Scalars['Int']['input']>;
  defaultThreshold_lte?: InputMaybe<Scalars['Int']['input']>;
  defaultThreshold_not?: InputMaybe<Scalars['Int']['input']>;
  defaultThreshold_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  vault?: InputMaybe<Scalars['String']['input']>;
  vault_contains?: InputMaybe<Scalars['String']['input']>;
  vault_ends_with?: InputMaybe<Scalars['String']['input']>;
  vault_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  vault_not?: InputMaybe<Scalars['String']['input']>;
  vault_not_contains?: InputMaybe<Scalars['String']['input']>;
  vault_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  vault_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  vault_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  vault_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type TinteroLoanPage = {
  __typename?: 'tinteroLoanPage';
  items: Array<TinteroLoan>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type TinteroPayment = {
  __typename?: 'tinteroPayment';
  collateralId: Scalars['BigInt']['output'];
  funded: Scalars['Boolean']['output'];
  fundedAt: Scalars['BigInt']['output'];
  gracePeriod: Scalars['BigInt']['output'];
  index: Scalars['BigInt']['output'];
  interestPaid: Scalars['BigInt']['output'];
  interestRate: Scalars['BigInt']['output'];
  loan?: Maybe<TinteroLoan>;
  maturityPeriod: Scalars['BigInt']['output'];
  paid: Scalars['Boolean']['output'];
  premiumInterestPaid: Scalars['BigInt']['output'];
  premiumRate: Scalars['BigInt']['output'];
  principal: Scalars['BigInt']['output'];
  repossessed: Scalars['Boolean']['output'];
  repossessionRecipient?: Maybe<Scalars['String']['output']>;
  tranche?: Maybe<TinteroTranche>;
  trancheIndex?: Maybe<Scalars['BigInt']['output']>;
  withdrawn: Scalars['Boolean']['output'];
};

export type TinteroPaymentFilter = {
  AND?: InputMaybe<Array<InputMaybe<TinteroPaymentFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TinteroPaymentFilter>>>;
  collateralId?: InputMaybe<Scalars['BigInt']['input']>;
  collateralId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  collateralId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  collateralId_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  collateralId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  collateralId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  collateralId_not?: InputMaybe<Scalars['BigInt']['input']>;
  collateralId_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  funded?: InputMaybe<Scalars['Boolean']['input']>;
  fundedAt?: InputMaybe<Scalars['BigInt']['input']>;
  fundedAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  fundedAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  fundedAt_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  fundedAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  fundedAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  fundedAt_not?: InputMaybe<Scalars['BigInt']['input']>;
  fundedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  funded_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  funded_not?: InputMaybe<Scalars['Boolean']['input']>;
  funded_not_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  gracePeriod?: InputMaybe<Scalars['BigInt']['input']>;
  gracePeriod_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gracePeriod_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gracePeriod_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  gracePeriod_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gracePeriod_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gracePeriod_not?: InputMaybe<Scalars['BigInt']['input']>;
  gracePeriod_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  index?: InputMaybe<Scalars['BigInt']['input']>;
  index_gt?: InputMaybe<Scalars['BigInt']['input']>;
  index_gte?: InputMaybe<Scalars['BigInt']['input']>;
  index_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  index_lt?: InputMaybe<Scalars['BigInt']['input']>;
  index_lte?: InputMaybe<Scalars['BigInt']['input']>;
  index_not?: InputMaybe<Scalars['BigInt']['input']>;
  index_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  interestPaid?: InputMaybe<Scalars['BigInt']['input']>;
  interestPaid_gt?: InputMaybe<Scalars['BigInt']['input']>;
  interestPaid_gte?: InputMaybe<Scalars['BigInt']['input']>;
  interestPaid_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  interestPaid_lt?: InputMaybe<Scalars['BigInt']['input']>;
  interestPaid_lte?: InputMaybe<Scalars['BigInt']['input']>;
  interestPaid_not?: InputMaybe<Scalars['BigInt']['input']>;
  interestPaid_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  interestRate?: InputMaybe<Scalars['BigInt']['input']>;
  interestRate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  interestRate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  interestRate_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  interestRate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  interestRate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  interestRate_not?: InputMaybe<Scalars['BigInt']['input']>;
  interestRate_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  loan?: InputMaybe<Scalars['String']['input']>;
  loan_contains?: InputMaybe<Scalars['String']['input']>;
  loan_ends_with?: InputMaybe<Scalars['String']['input']>;
  loan_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  loan_not?: InputMaybe<Scalars['String']['input']>;
  loan_not_contains?: InputMaybe<Scalars['String']['input']>;
  loan_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  loan_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  loan_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  loan_starts_with?: InputMaybe<Scalars['String']['input']>;
  maturityPeriod?: InputMaybe<Scalars['BigInt']['input']>;
  maturityPeriod_gt?: InputMaybe<Scalars['BigInt']['input']>;
  maturityPeriod_gte?: InputMaybe<Scalars['BigInt']['input']>;
  maturityPeriod_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  maturityPeriod_lt?: InputMaybe<Scalars['BigInt']['input']>;
  maturityPeriod_lte?: InputMaybe<Scalars['BigInt']['input']>;
  maturityPeriod_not?: InputMaybe<Scalars['BigInt']['input']>;
  maturityPeriod_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  paid?: InputMaybe<Scalars['Boolean']['input']>;
  paid_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  paid_not?: InputMaybe<Scalars['Boolean']['input']>;
  paid_not_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  premiumInterestPaid?: InputMaybe<Scalars['BigInt']['input']>;
  premiumInterestPaid_gt?: InputMaybe<Scalars['BigInt']['input']>;
  premiumInterestPaid_gte?: InputMaybe<Scalars['BigInt']['input']>;
  premiumInterestPaid_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  premiumInterestPaid_lt?: InputMaybe<Scalars['BigInt']['input']>;
  premiumInterestPaid_lte?: InputMaybe<Scalars['BigInt']['input']>;
  premiumInterestPaid_not?: InputMaybe<Scalars['BigInt']['input']>;
  premiumInterestPaid_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  premiumRate?: InputMaybe<Scalars['BigInt']['input']>;
  premiumRate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  premiumRate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  premiumRate_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  premiumRate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  premiumRate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  premiumRate_not?: InputMaybe<Scalars['BigInt']['input']>;
  premiumRate_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  principal?: InputMaybe<Scalars['BigInt']['input']>;
  principal_gt?: InputMaybe<Scalars['BigInt']['input']>;
  principal_gte?: InputMaybe<Scalars['BigInt']['input']>;
  principal_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  principal_lt?: InputMaybe<Scalars['BigInt']['input']>;
  principal_lte?: InputMaybe<Scalars['BigInt']['input']>;
  principal_not?: InputMaybe<Scalars['BigInt']['input']>;
  principal_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  repossessed?: InputMaybe<Scalars['Boolean']['input']>;
  repossessed_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  repossessed_not?: InputMaybe<Scalars['Boolean']['input']>;
  repossessed_not_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  repossessionRecipient?: InputMaybe<Scalars['String']['input']>;
  repossessionRecipient_contains?: InputMaybe<Scalars['String']['input']>;
  repossessionRecipient_ends_with?: InputMaybe<Scalars['String']['input']>;
  repossessionRecipient_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  repossessionRecipient_not?: InputMaybe<Scalars['String']['input']>;
  repossessionRecipient_not_contains?: InputMaybe<Scalars['String']['input']>;
  repossessionRecipient_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  repossessionRecipient_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  repossessionRecipient_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  repossessionRecipient_starts_with?: InputMaybe<Scalars['String']['input']>;
  trancheIndex?: InputMaybe<Scalars['BigInt']['input']>;
  trancheIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  trancheIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  trancheIndex_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  trancheIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  trancheIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  trancheIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  trancheIndex_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  withdrawn?: InputMaybe<Scalars['Boolean']['input']>;
  withdrawn_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  withdrawn_not?: InputMaybe<Scalars['Boolean']['input']>;
  withdrawn_not_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
};

export type TinteroPaymentPage = {
  __typename?: 'tinteroPaymentPage';
  items: Array<TinteroPayment>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type TinteroTranche = {
  __typename?: 'tinteroTranche';
  index: Scalars['BigInt']['output'];
  loan?: Maybe<TinteroLoan>;
  paymentIndex: Scalars['BigInt']['output'];
  payments?: Maybe<TinteroPaymentPage>;
  receiver: Scalars['String']['output'];
};


export type TinteroTranchePaymentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<TinteroPaymentFilter>;
};

export type TinteroTrancheFilter = {
  AND?: InputMaybe<Array<InputMaybe<TinteroTrancheFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TinteroTrancheFilter>>>;
  index?: InputMaybe<Scalars['BigInt']['input']>;
  index_gt?: InputMaybe<Scalars['BigInt']['input']>;
  index_gte?: InputMaybe<Scalars['BigInt']['input']>;
  index_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  index_lt?: InputMaybe<Scalars['BigInt']['input']>;
  index_lte?: InputMaybe<Scalars['BigInt']['input']>;
  index_not?: InputMaybe<Scalars['BigInt']['input']>;
  index_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  loan?: InputMaybe<Scalars['String']['input']>;
  loan_contains?: InputMaybe<Scalars['String']['input']>;
  loan_ends_with?: InputMaybe<Scalars['String']['input']>;
  loan_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  loan_not?: InputMaybe<Scalars['String']['input']>;
  loan_not_contains?: InputMaybe<Scalars['String']['input']>;
  loan_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  loan_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  loan_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  loan_starts_with?: InputMaybe<Scalars['String']['input']>;
  paymentIndex?: InputMaybe<Scalars['BigInt']['input']>;
  paymentIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  paymentIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  paymentIndex_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  paymentIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  paymentIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  paymentIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  paymentIndex_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  receiver?: InputMaybe<Scalars['String']['input']>;
  receiver_contains?: InputMaybe<Scalars['String']['input']>;
  receiver_ends_with?: InputMaybe<Scalars['String']['input']>;
  receiver_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  receiver_not?: InputMaybe<Scalars['String']['input']>;
  receiver_not_contains?: InputMaybe<Scalars['String']['input']>;
  receiver_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  receiver_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  receiver_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  receiver_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type TinteroTranchePage = {
  __typename?: 'tinteroTranchePage';
  items: Array<TinteroTranche>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type TinteroVault = {
  __typename?: 'tinteroVault';
  asset: Scalars['String']['output'];
  id: Scalars['String']['output'];
  loans?: Maybe<TinteroLoanPage>;
};


export type TinteroVaultLoansArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<TinteroLoanFilter>;
};

export type TinteroVaultFilter = {
  AND?: InputMaybe<Array<InputMaybe<TinteroVaultFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TinteroVaultFilter>>>;
  asset?: InputMaybe<Scalars['String']['input']>;
  asset_contains?: InputMaybe<Scalars['String']['input']>;
  asset_ends_with?: InputMaybe<Scalars['String']['input']>;
  asset_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  asset_not?: InputMaybe<Scalars['String']['input']>;
  asset_not_contains?: InputMaybe<Scalars['String']['input']>;
  asset_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  asset_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  asset_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  asset_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type TinteroVaultPage = {
  __typename?: 'tinteroVaultPage';
  items: Array<TinteroVault>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Wallet = {
  __typename?: 'wallet';
  endorsables?: Maybe<EndorsablePage>;
  endorseFromEvents?: Maybe<EndorseEventPage>;
  endorseToEvents?: Maybe<EndorseEventPage>;
  id: Scalars['String']['output'];
};


export type WalletEndorsablesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<EndorsableFilter>;
};


export type WalletEndorseFromEventsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<EndorseEventFilter>;
};


export type WalletEndorseToEventsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<EndorseEventFilter>;
};

export type WalletFilter = {
  AND?: InputMaybe<Array<InputMaybe<WalletFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<WalletFilter>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type WalletPage = {
  __typename?: 'walletPage';
  items: Array<Wallet>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type WeeklyBucketMxnusdRate = {
  __typename?: 'weeklyBucketMXNUSDRate';
  average: Scalars['Float']['output'];
  close: Scalars['Float']['output'];
  count: Scalars['Int']['output'];
  high: Scalars['Float']['output'];
  id: Scalars['Int']['output'];
  inverseAverage: Scalars['Float']['output'];
  inverseClose: Scalars['Float']['output'];
  inverseHigh: Scalars['Float']['output'];
  inverseLow: Scalars['Float']['output'];
  inverseOpen: Scalars['Float']['output'];
  low: Scalars['Float']['output'];
  open: Scalars['Float']['output'];
};

export type WeeklyBucketMxnusdRateFilter = {
  AND?: InputMaybe<Array<InputMaybe<WeeklyBucketMxnusdRateFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<WeeklyBucketMxnusdRateFilter>>>;
  average?: InputMaybe<Scalars['Float']['input']>;
  average_gt?: InputMaybe<Scalars['Float']['input']>;
  average_gte?: InputMaybe<Scalars['Float']['input']>;
  average_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  average_lt?: InputMaybe<Scalars['Float']['input']>;
  average_lte?: InputMaybe<Scalars['Float']['input']>;
  average_not?: InputMaybe<Scalars['Float']['input']>;
  average_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  close?: InputMaybe<Scalars['Float']['input']>;
  close_gt?: InputMaybe<Scalars['Float']['input']>;
  close_gte?: InputMaybe<Scalars['Float']['input']>;
  close_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  close_lt?: InputMaybe<Scalars['Float']['input']>;
  close_lte?: InputMaybe<Scalars['Float']['input']>;
  close_not?: InputMaybe<Scalars['Float']['input']>;
  close_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_gt?: InputMaybe<Scalars['Int']['input']>;
  count_gte?: InputMaybe<Scalars['Int']['input']>;
  count_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  count_lt?: InputMaybe<Scalars['Int']['input']>;
  count_lte?: InputMaybe<Scalars['Int']['input']>;
  count_not?: InputMaybe<Scalars['Int']['input']>;
  count_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  high?: InputMaybe<Scalars['Float']['input']>;
  high_gt?: InputMaybe<Scalars['Float']['input']>;
  high_gte?: InputMaybe<Scalars['Float']['input']>;
  high_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  high_lt?: InputMaybe<Scalars['Float']['input']>;
  high_lte?: InputMaybe<Scalars['Float']['input']>;
  high_not?: InputMaybe<Scalars['Float']['input']>;
  high_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  id?: InputMaybe<Scalars['Int']['input']>;
  id_gt?: InputMaybe<Scalars['Int']['input']>;
  id_gte?: InputMaybe<Scalars['Int']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id_lt?: InputMaybe<Scalars['Int']['input']>;
  id_lte?: InputMaybe<Scalars['Int']['input']>;
  id_not?: InputMaybe<Scalars['Int']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  inverseAverage?: InputMaybe<Scalars['Float']['input']>;
  inverseAverage_gt?: InputMaybe<Scalars['Float']['input']>;
  inverseAverage_gte?: InputMaybe<Scalars['Float']['input']>;
  inverseAverage_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  inverseAverage_lt?: InputMaybe<Scalars['Float']['input']>;
  inverseAverage_lte?: InputMaybe<Scalars['Float']['input']>;
  inverseAverage_not?: InputMaybe<Scalars['Float']['input']>;
  inverseAverage_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  inverseClose?: InputMaybe<Scalars['Float']['input']>;
  inverseClose_gt?: InputMaybe<Scalars['Float']['input']>;
  inverseClose_gte?: InputMaybe<Scalars['Float']['input']>;
  inverseClose_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  inverseClose_lt?: InputMaybe<Scalars['Float']['input']>;
  inverseClose_lte?: InputMaybe<Scalars['Float']['input']>;
  inverseClose_not?: InputMaybe<Scalars['Float']['input']>;
  inverseClose_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  inverseHigh?: InputMaybe<Scalars['Float']['input']>;
  inverseHigh_gt?: InputMaybe<Scalars['Float']['input']>;
  inverseHigh_gte?: InputMaybe<Scalars['Float']['input']>;
  inverseHigh_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  inverseHigh_lt?: InputMaybe<Scalars['Float']['input']>;
  inverseHigh_lte?: InputMaybe<Scalars['Float']['input']>;
  inverseHigh_not?: InputMaybe<Scalars['Float']['input']>;
  inverseHigh_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  inverseLow?: InputMaybe<Scalars['Float']['input']>;
  inverseLow_gt?: InputMaybe<Scalars['Float']['input']>;
  inverseLow_gte?: InputMaybe<Scalars['Float']['input']>;
  inverseLow_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  inverseLow_lt?: InputMaybe<Scalars['Float']['input']>;
  inverseLow_lte?: InputMaybe<Scalars['Float']['input']>;
  inverseLow_not?: InputMaybe<Scalars['Float']['input']>;
  inverseLow_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  inverseOpen?: InputMaybe<Scalars['Float']['input']>;
  inverseOpen_gt?: InputMaybe<Scalars['Float']['input']>;
  inverseOpen_gte?: InputMaybe<Scalars['Float']['input']>;
  inverseOpen_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  inverseOpen_lt?: InputMaybe<Scalars['Float']['input']>;
  inverseOpen_lte?: InputMaybe<Scalars['Float']['input']>;
  inverseOpen_not?: InputMaybe<Scalars['Float']['input']>;
  inverseOpen_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  low?: InputMaybe<Scalars['Float']['input']>;
  low_gt?: InputMaybe<Scalars['Float']['input']>;
  low_gte?: InputMaybe<Scalars['Float']['input']>;
  low_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  low_lt?: InputMaybe<Scalars['Float']['input']>;
  low_lte?: InputMaybe<Scalars['Float']['input']>;
  low_not?: InputMaybe<Scalars['Float']['input']>;
  low_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  open?: InputMaybe<Scalars['Float']['input']>;
  open_gt?: InputMaybe<Scalars['Float']['input']>;
  open_gte?: InputMaybe<Scalars['Float']['input']>;
  open_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  open_lt?: InputMaybe<Scalars['Float']['input']>;
  open_lte?: InputMaybe<Scalars['Float']['input']>;
  open_not?: InputMaybe<Scalars['Float']['input']>;
  open_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

export type WeeklyBucketMxnusdRatePage = {
  __typename?: 'weeklyBucketMXNUSDRatePage';
  items: Array<WeeklyBucketMxnusdRate>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type WeeklyBucketUsdcmxnRate = {
  __typename?: 'weeklyBucketUSDCMXNRate';
  average: Scalars['Float']['output'];
  close: Scalars['Float']['output'];
  count: Scalars['Int']['output'];
  high: Scalars['Float']['output'];
  id: Scalars['Int']['output'];
  inverseAverage: Scalars['Float']['output'];
  inverseClose: Scalars['Float']['output'];
  inverseHigh: Scalars['Float']['output'];
  inverseLow: Scalars['Float']['output'];
  inverseOpen: Scalars['Float']['output'];
  low: Scalars['Float']['output'];
  open: Scalars['Float']['output'];
};

export type WeeklyBucketUsdcmxnRateFilter = {
  AND?: InputMaybe<Array<InputMaybe<WeeklyBucketUsdcmxnRateFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<WeeklyBucketUsdcmxnRateFilter>>>;
  average?: InputMaybe<Scalars['Float']['input']>;
  average_gt?: InputMaybe<Scalars['Float']['input']>;
  average_gte?: InputMaybe<Scalars['Float']['input']>;
  average_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  average_lt?: InputMaybe<Scalars['Float']['input']>;
  average_lte?: InputMaybe<Scalars['Float']['input']>;
  average_not?: InputMaybe<Scalars['Float']['input']>;
  average_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  close?: InputMaybe<Scalars['Float']['input']>;
  close_gt?: InputMaybe<Scalars['Float']['input']>;
  close_gte?: InputMaybe<Scalars['Float']['input']>;
  close_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  close_lt?: InputMaybe<Scalars['Float']['input']>;
  close_lte?: InputMaybe<Scalars['Float']['input']>;
  close_not?: InputMaybe<Scalars['Float']['input']>;
  close_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_gt?: InputMaybe<Scalars['Int']['input']>;
  count_gte?: InputMaybe<Scalars['Int']['input']>;
  count_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  count_lt?: InputMaybe<Scalars['Int']['input']>;
  count_lte?: InputMaybe<Scalars['Int']['input']>;
  count_not?: InputMaybe<Scalars['Int']['input']>;
  count_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  high?: InputMaybe<Scalars['Float']['input']>;
  high_gt?: InputMaybe<Scalars['Float']['input']>;
  high_gte?: InputMaybe<Scalars['Float']['input']>;
  high_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  high_lt?: InputMaybe<Scalars['Float']['input']>;
  high_lte?: InputMaybe<Scalars['Float']['input']>;
  high_not?: InputMaybe<Scalars['Float']['input']>;
  high_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  id?: InputMaybe<Scalars['Int']['input']>;
  id_gt?: InputMaybe<Scalars['Int']['input']>;
  id_gte?: InputMaybe<Scalars['Int']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id_lt?: InputMaybe<Scalars['Int']['input']>;
  id_lte?: InputMaybe<Scalars['Int']['input']>;
  id_not?: InputMaybe<Scalars['Int']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  inverseAverage?: InputMaybe<Scalars['Float']['input']>;
  inverseAverage_gt?: InputMaybe<Scalars['Float']['input']>;
  inverseAverage_gte?: InputMaybe<Scalars['Float']['input']>;
  inverseAverage_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  inverseAverage_lt?: InputMaybe<Scalars['Float']['input']>;
  inverseAverage_lte?: InputMaybe<Scalars['Float']['input']>;
  inverseAverage_not?: InputMaybe<Scalars['Float']['input']>;
  inverseAverage_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  inverseClose?: InputMaybe<Scalars['Float']['input']>;
  inverseClose_gt?: InputMaybe<Scalars['Float']['input']>;
  inverseClose_gte?: InputMaybe<Scalars['Float']['input']>;
  inverseClose_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  inverseClose_lt?: InputMaybe<Scalars['Float']['input']>;
  inverseClose_lte?: InputMaybe<Scalars['Float']['input']>;
  inverseClose_not?: InputMaybe<Scalars['Float']['input']>;
  inverseClose_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  inverseHigh?: InputMaybe<Scalars['Float']['input']>;
  inverseHigh_gt?: InputMaybe<Scalars['Float']['input']>;
  inverseHigh_gte?: InputMaybe<Scalars['Float']['input']>;
  inverseHigh_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  inverseHigh_lt?: InputMaybe<Scalars['Float']['input']>;
  inverseHigh_lte?: InputMaybe<Scalars['Float']['input']>;
  inverseHigh_not?: InputMaybe<Scalars['Float']['input']>;
  inverseHigh_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  inverseLow?: InputMaybe<Scalars['Float']['input']>;
  inverseLow_gt?: InputMaybe<Scalars['Float']['input']>;
  inverseLow_gte?: InputMaybe<Scalars['Float']['input']>;
  inverseLow_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  inverseLow_lt?: InputMaybe<Scalars['Float']['input']>;
  inverseLow_lte?: InputMaybe<Scalars['Float']['input']>;
  inverseLow_not?: InputMaybe<Scalars['Float']['input']>;
  inverseLow_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  inverseOpen?: InputMaybe<Scalars['Float']['input']>;
  inverseOpen_gt?: InputMaybe<Scalars['Float']['input']>;
  inverseOpen_gte?: InputMaybe<Scalars['Float']['input']>;
  inverseOpen_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  inverseOpen_lt?: InputMaybe<Scalars['Float']['input']>;
  inverseOpen_lte?: InputMaybe<Scalars['Float']['input']>;
  inverseOpen_not?: InputMaybe<Scalars['Float']['input']>;
  inverseOpen_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  low?: InputMaybe<Scalars['Float']['input']>;
  low_gt?: InputMaybe<Scalars['Float']['input']>;
  low_gte?: InputMaybe<Scalars['Float']['input']>;
  low_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  low_lt?: InputMaybe<Scalars['Float']['input']>;
  low_lte?: InputMaybe<Scalars['Float']['input']>;
  low_not?: InputMaybe<Scalars['Float']['input']>;
  low_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  open?: InputMaybe<Scalars['Float']['input']>;
  open_gt?: InputMaybe<Scalars['Float']['input']>;
  open_gte?: InputMaybe<Scalars['Float']['input']>;
  open_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  open_lt?: InputMaybe<Scalars['Float']['input']>;
  open_lte?: InputMaybe<Scalars['Float']['input']>;
  open_not?: InputMaybe<Scalars['Float']['input']>;
  open_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

export type WeeklyBucketUsdcmxnRatePage = {
  __typename?: 'weeklyBucketUSDCMXNRatePage';
  items: Array<WeeklyBucketUsdcmxnRate>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type WeeklyBucketUsdcusdRate = {
  __typename?: 'weeklyBucketUSDCUSDRate';
  average: Scalars['Float']['output'];
  close: Scalars['Float']['output'];
  count: Scalars['Int']['output'];
  high: Scalars['Float']['output'];
  id: Scalars['Int']['output'];
  inverseAverage: Scalars['Float']['output'];
  inverseClose: Scalars['Float']['output'];
  inverseHigh: Scalars['Float']['output'];
  inverseLow: Scalars['Float']['output'];
  inverseOpen: Scalars['Float']['output'];
  low: Scalars['Float']['output'];
  open: Scalars['Float']['output'];
};

export type WeeklyBucketUsdcusdRateFilter = {
  AND?: InputMaybe<Array<InputMaybe<WeeklyBucketUsdcusdRateFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<WeeklyBucketUsdcusdRateFilter>>>;
  average?: InputMaybe<Scalars['Float']['input']>;
  average_gt?: InputMaybe<Scalars['Float']['input']>;
  average_gte?: InputMaybe<Scalars['Float']['input']>;
  average_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  average_lt?: InputMaybe<Scalars['Float']['input']>;
  average_lte?: InputMaybe<Scalars['Float']['input']>;
  average_not?: InputMaybe<Scalars['Float']['input']>;
  average_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  close?: InputMaybe<Scalars['Float']['input']>;
  close_gt?: InputMaybe<Scalars['Float']['input']>;
  close_gte?: InputMaybe<Scalars['Float']['input']>;
  close_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  close_lt?: InputMaybe<Scalars['Float']['input']>;
  close_lte?: InputMaybe<Scalars['Float']['input']>;
  close_not?: InputMaybe<Scalars['Float']['input']>;
  close_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_gt?: InputMaybe<Scalars['Int']['input']>;
  count_gte?: InputMaybe<Scalars['Int']['input']>;
  count_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  count_lt?: InputMaybe<Scalars['Int']['input']>;
  count_lte?: InputMaybe<Scalars['Int']['input']>;
  count_not?: InputMaybe<Scalars['Int']['input']>;
  count_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  high?: InputMaybe<Scalars['Float']['input']>;
  high_gt?: InputMaybe<Scalars['Float']['input']>;
  high_gte?: InputMaybe<Scalars['Float']['input']>;
  high_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  high_lt?: InputMaybe<Scalars['Float']['input']>;
  high_lte?: InputMaybe<Scalars['Float']['input']>;
  high_not?: InputMaybe<Scalars['Float']['input']>;
  high_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  id?: InputMaybe<Scalars['Int']['input']>;
  id_gt?: InputMaybe<Scalars['Int']['input']>;
  id_gte?: InputMaybe<Scalars['Int']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id_lt?: InputMaybe<Scalars['Int']['input']>;
  id_lte?: InputMaybe<Scalars['Int']['input']>;
  id_not?: InputMaybe<Scalars['Int']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  inverseAverage?: InputMaybe<Scalars['Float']['input']>;
  inverseAverage_gt?: InputMaybe<Scalars['Float']['input']>;
  inverseAverage_gte?: InputMaybe<Scalars['Float']['input']>;
  inverseAverage_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  inverseAverage_lt?: InputMaybe<Scalars['Float']['input']>;
  inverseAverage_lte?: InputMaybe<Scalars['Float']['input']>;
  inverseAverage_not?: InputMaybe<Scalars['Float']['input']>;
  inverseAverage_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  inverseClose?: InputMaybe<Scalars['Float']['input']>;
  inverseClose_gt?: InputMaybe<Scalars['Float']['input']>;
  inverseClose_gte?: InputMaybe<Scalars['Float']['input']>;
  inverseClose_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  inverseClose_lt?: InputMaybe<Scalars['Float']['input']>;
  inverseClose_lte?: InputMaybe<Scalars['Float']['input']>;
  inverseClose_not?: InputMaybe<Scalars['Float']['input']>;
  inverseClose_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  inverseHigh?: InputMaybe<Scalars['Float']['input']>;
  inverseHigh_gt?: InputMaybe<Scalars['Float']['input']>;
  inverseHigh_gte?: InputMaybe<Scalars['Float']['input']>;
  inverseHigh_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  inverseHigh_lt?: InputMaybe<Scalars['Float']['input']>;
  inverseHigh_lte?: InputMaybe<Scalars['Float']['input']>;
  inverseHigh_not?: InputMaybe<Scalars['Float']['input']>;
  inverseHigh_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  inverseLow?: InputMaybe<Scalars['Float']['input']>;
  inverseLow_gt?: InputMaybe<Scalars['Float']['input']>;
  inverseLow_gte?: InputMaybe<Scalars['Float']['input']>;
  inverseLow_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  inverseLow_lt?: InputMaybe<Scalars['Float']['input']>;
  inverseLow_lte?: InputMaybe<Scalars['Float']['input']>;
  inverseLow_not?: InputMaybe<Scalars['Float']['input']>;
  inverseLow_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  inverseOpen?: InputMaybe<Scalars['Float']['input']>;
  inverseOpen_gt?: InputMaybe<Scalars['Float']['input']>;
  inverseOpen_gte?: InputMaybe<Scalars['Float']['input']>;
  inverseOpen_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  inverseOpen_lt?: InputMaybe<Scalars['Float']['input']>;
  inverseOpen_lte?: InputMaybe<Scalars['Float']['input']>;
  inverseOpen_not?: InputMaybe<Scalars['Float']['input']>;
  inverseOpen_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  low?: InputMaybe<Scalars['Float']['input']>;
  low_gt?: InputMaybe<Scalars['Float']['input']>;
  low_gte?: InputMaybe<Scalars['Float']['input']>;
  low_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  low_lt?: InputMaybe<Scalars['Float']['input']>;
  low_lte?: InputMaybe<Scalars['Float']['input']>;
  low_not?: InputMaybe<Scalars['Float']['input']>;
  low_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  open?: InputMaybe<Scalars['Float']['input']>;
  open_gt?: InputMaybe<Scalars['Float']['input']>;
  open_gte?: InputMaybe<Scalars['Float']['input']>;
  open_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  open_lt?: InputMaybe<Scalars['Float']['input']>;
  open_lte?: InputMaybe<Scalars['Float']['input']>;
  open_not?: InputMaybe<Scalars['Float']['input']>;
  open_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

export type WeeklyBucketUsdcusdRatePage = {
  __typename?: 'weeklyBucketUSDCUSDRatePage';
  items: Array<WeeklyBucketUsdcusdRate>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type TinteroVaultQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type TinteroVaultQuery = { __typename?: 'Query', tinteroVault?: { __typename?: 'tinteroVault', id: string, asset: string, loans?: { __typename?: 'tinteroLoanPage', items: Array<{ __typename?: 'tinteroLoan', id: string, collateralAsset: string, beneficiary: string, defaultThreshold: number }> } | null } | null };


export const TinteroVaultDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"tinteroVault"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tinteroVault"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"asset"}},{"kind":"Field","name":{"kind":"Name","value":"loans"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"collateralAsset"}},{"kind":"Field","name":{"kind":"Name","value":"beneficiary"}},{"kind":"Field","name":{"kind":"Name","value":"defaultThreshold"}}]}}]}}]}}]}}]} as unknown as DocumentNode<TinteroVaultQuery, TinteroVaultQueryVariables>;
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
  /** A high precision floating point value represented as a string */
  BigFloat: { input: string; output: string; }
  /** An arbitrary size integer represented as a string */
  BigInt: { input: string; output: string; }
  /** An opaque string using for tracking a position in results during pagination */
  Cursor: { input: any; output: any; }
  /** A date wihout time information */
  Date: { input: any; output: any; }
  /** A date and time */
  Datetime: { input: string; output: string; }
  /** A Javascript Object Notation value serialized as a string */
  JSON: { input: string; output: string; }
  /** Any type not handled by the type system */
  Opaque: { input: any; output: any; }
  /** A time without date information */
  Time: { input: any; output: any; }
  /** A universally unique identifier */
  UUID: { input: string; output: string; }
};

/** Boolean expression comparing fields on type "BigFloat" */
export type BigFloatFilter = {
  eq?: InputMaybe<Scalars['BigFloat']['input']>;
  gt?: InputMaybe<Scalars['BigFloat']['input']>;
  gte?: InputMaybe<Scalars['BigFloat']['input']>;
  in?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['BigFloat']['input']>;
  lte?: InputMaybe<Scalars['BigFloat']['input']>;
  neq?: InputMaybe<Scalars['BigFloat']['input']>;
};

/** Boolean expression comparing fields on type "BigInt" */
export type BigIntFilter = {
  eq?: InputMaybe<Scalars['BigInt']['input']>;
  gt?: InputMaybe<Scalars['BigInt']['input']>;
  gte?: InputMaybe<Scalars['BigInt']['input']>;
  in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['BigInt']['input']>;
  lte?: InputMaybe<Scalars['BigInt']['input']>;
  neq?: InputMaybe<Scalars['BigInt']['input']>;
};

export type BonusPoints = Node & {
  __typename?: 'BonusPoints';
  amount: Scalars['Int']['output'];
  card: Cards;
  cardId: Scalars['UUID']['output'];
  createdAt: Scalars['Datetime']['output'];
  id: Scalars['UUID']['output'];
  minimumSpendCents: Scalars['BigInt']['output'];
  minimumSpendPerDayCents?: Maybe<Scalars['Float']['output']>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  rewardsProgram: RewardsProgram;
  timeFrameDays: Scalars['Int']['output'];
  updatedAt: Scalars['Datetime']['output'];
  yearlyFeeCents: Scalars['BigInt']['output'];
};

export type BonusPointsConnection = {
  __typename?: 'BonusPointsConnection';
  edges: Array<BonusPointsEdge>;
  pageInfo: PageInfo;
};

export type BonusPointsDeleteResponse = {
  __typename?: 'BonusPointsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<BonusPoints>;
};

export type BonusPointsEdge = {
  __typename?: 'BonusPointsEdge';
  cursor: Scalars['String']['output'];
  node: BonusPoints;
};

export type BonusPointsFilter = {
  amount?: InputMaybe<IntFilter>;
  cardId?: InputMaybe<UuidFilter>;
  createdAt?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  minimumSpendCents?: InputMaybe<BigIntFilter>;
  minimumSpendPerDayCents?: InputMaybe<FloatFilter>;
  nodeId?: InputMaybe<IdFilter>;
  rewardsProgram?: InputMaybe<RewardsProgramFilter>;
  timeFrameDays?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DatetimeFilter>;
  yearlyFeeCents?: InputMaybe<BigIntFilter>;
};

export type BonusPointsInsertInput = {
  amount?: InputMaybe<Scalars['Int']['input']>;
  cardId?: InputMaybe<Scalars['UUID']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  minimumSpendCents?: InputMaybe<Scalars['BigInt']['input']>;
  rewardsProgram?: InputMaybe<RewardsProgram>;
  timeFrameDays?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  yearlyFeeCents?: InputMaybe<Scalars['BigInt']['input']>;
};

export type BonusPointsInsertResponse = {
  __typename?: 'BonusPointsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<BonusPoints>;
};

export type BonusPointsOrderBy = {
  amount?: InputMaybe<OrderByDirection>;
  cardId?: InputMaybe<OrderByDirection>;
  createdAt?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  minimumSpendCents?: InputMaybe<OrderByDirection>;
  minimumSpendPerDayCents?: InputMaybe<OrderByDirection>;
  rewardsProgram?: InputMaybe<OrderByDirection>;
  timeFrameDays?: InputMaybe<OrderByDirection>;
  updatedAt?: InputMaybe<OrderByDirection>;
  yearlyFeeCents?: InputMaybe<OrderByDirection>;
};

export type BonusPointsStats = Node & {
  __typename?: 'BonusPointsStats';
  maxAmount?: Maybe<Scalars['Int']['output']>;
  maxMinimumSpendCents?: Maybe<Scalars['BigInt']['output']>;
  maxMinimumSpendPerDayCents?: Maybe<Scalars['Float']['output']>;
  maxTimeFrameDays?: Maybe<Scalars['Int']['output']>;
  maxYearlyFeeCents?: Maybe<Scalars['BigInt']['output']>;
  minAmount?: Maybe<Scalars['Int']['output']>;
  minMinimumSpendCents?: Maybe<Scalars['BigInt']['output']>;
  minMinimumSpendPerDayCents?: Maybe<Scalars['Float']['output']>;
  minTimeFrameDays?: Maybe<Scalars['Int']['output']>;
  minYearlyFeeCents?: Maybe<Scalars['BigInt']['output']>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  rewardsProgram?: Maybe<RewardsProgram>;
};

export type BonusPointsStatsConnection = {
  __typename?: 'BonusPointsStatsConnection';
  edges: Array<BonusPointsStatsEdge>;
  pageInfo: PageInfo;
};

export type BonusPointsStatsDeleteResponse = {
  __typename?: 'BonusPointsStatsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<BonusPointsStats>;
};

export type BonusPointsStatsEdge = {
  __typename?: 'BonusPointsStatsEdge';
  cursor: Scalars['String']['output'];
  node: BonusPointsStats;
};

export type BonusPointsStatsFilter = {
  maxAmount?: InputMaybe<IntFilter>;
  maxMinimumSpendCents?: InputMaybe<BigIntFilter>;
  maxMinimumSpendPerDayCents?: InputMaybe<FloatFilter>;
  maxTimeFrameDays?: InputMaybe<IntFilter>;
  maxYearlyFeeCents?: InputMaybe<BigIntFilter>;
  minAmount?: InputMaybe<IntFilter>;
  minMinimumSpendCents?: InputMaybe<BigIntFilter>;
  minMinimumSpendPerDayCents?: InputMaybe<FloatFilter>;
  minTimeFrameDays?: InputMaybe<IntFilter>;
  minYearlyFeeCents?: InputMaybe<BigIntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  rewardsProgram?: InputMaybe<RewardsProgramFilter>;
};

export type BonusPointsStatsInsertInput = {
  maxAmount?: InputMaybe<Scalars['Int']['input']>;
  maxMinimumSpendCents?: InputMaybe<Scalars['BigInt']['input']>;
  maxMinimumSpendPerDayCents?: InputMaybe<Scalars['Float']['input']>;
  maxTimeFrameDays?: InputMaybe<Scalars['Int']['input']>;
  maxYearlyFeeCents?: InputMaybe<Scalars['BigInt']['input']>;
  minAmount?: InputMaybe<Scalars['Int']['input']>;
  minMinimumSpendCents?: InputMaybe<Scalars['BigInt']['input']>;
  minMinimumSpendPerDayCents?: InputMaybe<Scalars['Float']['input']>;
  minTimeFrameDays?: InputMaybe<Scalars['Int']['input']>;
  minYearlyFeeCents?: InputMaybe<Scalars['BigInt']['input']>;
  rewardsProgram?: InputMaybe<RewardsProgram>;
};

export type BonusPointsStatsInsertResponse = {
  __typename?: 'BonusPointsStatsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<BonusPointsStats>;
};

export type BonusPointsStatsOrderBy = {
  maxAmount?: InputMaybe<OrderByDirection>;
  maxMinimumSpendCents?: InputMaybe<OrderByDirection>;
  maxMinimumSpendPerDayCents?: InputMaybe<OrderByDirection>;
  maxTimeFrameDays?: InputMaybe<OrderByDirection>;
  maxYearlyFeeCents?: InputMaybe<OrderByDirection>;
  minAmount?: InputMaybe<OrderByDirection>;
  minMinimumSpendCents?: InputMaybe<OrderByDirection>;
  minMinimumSpendPerDayCents?: InputMaybe<OrderByDirection>;
  minTimeFrameDays?: InputMaybe<OrderByDirection>;
  minYearlyFeeCents?: InputMaybe<OrderByDirection>;
  rewardsProgram?: InputMaybe<OrderByDirection>;
};

export type BonusPointsStatsUpdateInput = {
  maxAmount?: InputMaybe<Scalars['Int']['input']>;
  maxMinimumSpendCents?: InputMaybe<Scalars['BigInt']['input']>;
  maxMinimumSpendPerDayCents?: InputMaybe<Scalars['Float']['input']>;
  maxTimeFrameDays?: InputMaybe<Scalars['Int']['input']>;
  maxYearlyFeeCents?: InputMaybe<Scalars['BigInt']['input']>;
  minAmount?: InputMaybe<Scalars['Int']['input']>;
  minMinimumSpendCents?: InputMaybe<Scalars['BigInt']['input']>;
  minMinimumSpendPerDayCents?: InputMaybe<Scalars['Float']['input']>;
  minTimeFrameDays?: InputMaybe<Scalars['Int']['input']>;
  minYearlyFeeCents?: InputMaybe<Scalars['BigInt']['input']>;
  rewardsProgram?: InputMaybe<RewardsProgram>;
};

export type BonusPointsStatsUpdateResponse = {
  __typename?: 'BonusPointsStatsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<BonusPointsStats>;
};

export type BonusPointsUpdateInput = {
  amount?: InputMaybe<Scalars['Int']['input']>;
  cardId?: InputMaybe<Scalars['UUID']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  minimumSpendCents?: InputMaybe<Scalars['BigInt']['input']>;
  rewardsProgram?: InputMaybe<RewardsProgram>;
  timeFrameDays?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  yearlyFeeCents?: InputMaybe<Scalars['BigInt']['input']>;
};

export type BonusPointsUpdateResponse = {
  __typename?: 'BonusPointsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<BonusPoints>;
};

/** Boolean expression comparing fields on type "Boolean" */
export type BooleanFilter = {
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  is?: InputMaybe<FilterIs>;
};

export type Cards = Node & {
  __typename?: 'Cards';
  bonusPointsCollection?: Maybe<BonusPointsConnection>;
  cardScoresCollection: CardsScoresConnection;
  cardsNormalizedStatsCollection: CardsNormalizedStatsConnection;
  createdAt: Scalars['Datetime']['output'];
  id: Scalars['UUID']['output'];
  imagePath?: Maybe<Scalars['String']['output']>;
  issuer: Issuers;
  issuerId: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  slug: Scalars['Opaque']['output'];
  updatedAt: Scalars['Datetime']['output'];
  url?: Maybe<Scalars['String']['output']>;
};


export type CardsBonusPointsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<BonusPointsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<BonusPointsOrderBy>>;
};


export type CardsCardScoresCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<CardsScoresFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CardsScoresOrderBy>>;
};


export type CardsCardsNormalizedStatsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<CardsNormalizedStatsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CardsNormalizedStatsOrderBy>>;
};

export type CardsConnection = {
  __typename?: 'CardsConnection';
  edges: Array<CardsEdge>;
  pageInfo: PageInfo;
};

export type CardsDeleteResponse = {
  __typename?: 'CardsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Cards>;
};

export type CardsEdge = {
  __typename?: 'CardsEdge';
  cursor: Scalars['String']['output'];
  node: Cards;
};

export type CardsFilter = {
  createdAt?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  imagePath?: InputMaybe<StringFilter>;
  issuerId?: InputMaybe<UuidFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  slug?: InputMaybe<OpaqueFilter>;
  updatedAt?: InputMaybe<DatetimeFilter>;
  url?: InputMaybe<StringFilter>;
};

export type CardsInsertInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  imagePath?: InputMaybe<Scalars['String']['input']>;
  issuerId?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['Opaque']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type CardsInsertResponse = {
  __typename?: 'CardsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Cards>;
};

export type CardsNormalizedStats = Node & {
  __typename?: 'CardsNormalizedStats';
  amount?: Maybe<Scalars['Float']['output']>;
  card?: Maybe<Cards>;
  id?: Maybe<Scalars['UUID']['output']>;
  minimumSpendCents?: Maybe<Scalars['Float']['output']>;
  minimumSpendPerDayCents?: Maybe<Scalars['Float']['output']>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  rewardsProgram?: Maybe<RewardsProgram>;
  timeFrameDays?: Maybe<Scalars['Float']['output']>;
  yearlyFeeCents?: Maybe<Scalars['Float']['output']>;
};

export type CardsNormalizedStatsConnection = {
  __typename?: 'CardsNormalizedStatsConnection';
  edges: Array<CardsNormalizedStatsEdge>;
  pageInfo: PageInfo;
};

export type CardsNormalizedStatsDeleteResponse = {
  __typename?: 'CardsNormalizedStatsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<CardsNormalizedStats>;
};

export type CardsNormalizedStatsEdge = {
  __typename?: 'CardsNormalizedStatsEdge';
  cursor: Scalars['String']['output'];
  node: CardsNormalizedStats;
};

export type CardsNormalizedStatsFilter = {
  amount?: InputMaybe<FloatFilter>;
  id?: InputMaybe<UuidFilter>;
  minimumSpendCents?: InputMaybe<FloatFilter>;
  minimumSpendPerDayCents?: InputMaybe<FloatFilter>;
  nodeId?: InputMaybe<IdFilter>;
  rewardsProgram?: InputMaybe<RewardsProgramFilter>;
  timeFrameDays?: InputMaybe<FloatFilter>;
  yearlyFeeCents?: InputMaybe<FloatFilter>;
};

export type CardsNormalizedStatsInsertInput = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  minimumSpendCents?: InputMaybe<Scalars['Float']['input']>;
  minimumSpendPerDayCents?: InputMaybe<Scalars['Float']['input']>;
  rewardsProgram?: InputMaybe<RewardsProgram>;
  timeFrameDays?: InputMaybe<Scalars['Float']['input']>;
  yearlyFeeCents?: InputMaybe<Scalars['Float']['input']>;
};

export type CardsNormalizedStatsInsertResponse = {
  __typename?: 'CardsNormalizedStatsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<CardsNormalizedStats>;
};

export type CardsNormalizedStatsOrderBy = {
  amount?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  minimumSpendCents?: InputMaybe<OrderByDirection>;
  minimumSpendPerDayCents?: InputMaybe<OrderByDirection>;
  rewardsProgram?: InputMaybe<OrderByDirection>;
  timeFrameDays?: InputMaybe<OrderByDirection>;
  yearlyFeeCents?: InputMaybe<OrderByDirection>;
};

export type CardsNormalizedStatsUpdateInput = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  minimumSpendCents?: InputMaybe<Scalars['Float']['input']>;
  minimumSpendPerDayCents?: InputMaybe<Scalars['Float']['input']>;
  rewardsProgram?: InputMaybe<RewardsProgram>;
  timeFrameDays?: InputMaybe<Scalars['Float']['input']>;
  yearlyFeeCents?: InputMaybe<Scalars['Float']['input']>;
};

export type CardsNormalizedStatsUpdateResponse = {
  __typename?: 'CardsNormalizedStatsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<CardsNormalizedStats>;
};

export type CardsOrderBy = {
  createdAt?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  imagePath?: InputMaybe<OrderByDirection>;
  issuerId?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  slug?: InputMaybe<OrderByDirection>;
  updatedAt?: InputMaybe<OrderByDirection>;
  url?: InputMaybe<OrderByDirection>;
};

export type CardsScores = Node & {
  __typename?: 'CardsScores';
  card?: Maybe<Cards>;
  id?: Maybe<Scalars['UUID']['output']>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  rewardsProgram?: Maybe<RewardsProgram>;
  score?: Maybe<Scalars['Float']['output']>;
};

export type CardsScoresConnection = {
  __typename?: 'CardsScoresConnection';
  edges: Array<CardsScoresEdge>;
  pageInfo: PageInfo;
};

export type CardsScoresDeleteResponse = {
  __typename?: 'CardsScoresDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<CardsScores>;
};

export type CardsScoresEdge = {
  __typename?: 'CardsScoresEdge';
  cursor: Scalars['String']['output'];
  node: CardsScores;
};

export type CardsScoresFilter = {
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  rewardsProgram?: InputMaybe<RewardsProgramFilter>;
  score?: InputMaybe<FloatFilter>;
};

export type CardsScoresInsertInput = {
  id?: InputMaybe<Scalars['UUID']['input']>;
  rewardsProgram?: InputMaybe<RewardsProgram>;
  score?: InputMaybe<Scalars['Float']['input']>;
};

export type CardsScoresInsertResponse = {
  __typename?: 'CardsScoresInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<CardsScores>;
};

export type CardsScoresOrderBy = {
  id?: InputMaybe<OrderByDirection>;
  rewardsProgram?: InputMaybe<OrderByDirection>;
  score?: InputMaybe<OrderByDirection>;
};

export type CardsScoresUpdateInput = {
  id?: InputMaybe<Scalars['UUID']['input']>;
  rewardsProgram?: InputMaybe<RewardsProgram>;
  score?: InputMaybe<Scalars['Float']['input']>;
};

export type CardsScoresUpdateResponse = {
  __typename?: 'CardsScoresUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<CardsScores>;
};

export type CardsUpdateInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  imagePath?: InputMaybe<Scalars['String']['input']>;
  issuerId?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['Opaque']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type CardsUpdateResponse = {
  __typename?: 'CardsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Cards>;
};

/** Boolean expression comparing fields on type "Date" */
export type DateFilter = {
  eq?: InputMaybe<Scalars['Date']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<Scalars['Date']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  neq?: InputMaybe<Scalars['Date']['input']>;
};

/** Boolean expression comparing fields on type "Datetime" */
export type DatetimeFilter = {
  eq?: InputMaybe<Scalars['Datetime']['input']>;
  gt?: InputMaybe<Scalars['Datetime']['input']>;
  gte?: InputMaybe<Scalars['Datetime']['input']>;
  in?: InputMaybe<Array<Scalars['Datetime']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Datetime']['input']>;
  lte?: InputMaybe<Scalars['Datetime']['input']>;
  neq?: InputMaybe<Scalars['Datetime']['input']>;
};

export enum FilterIs {
  NotNull = 'NOT_NULL',
  Null = 'NULL'
}

/** Boolean expression comparing fields on type "Float" */
export type FloatFilter = {
  eq?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  neq?: InputMaybe<Scalars['Float']['input']>;
};

/** Boolean expression comparing fields on type "ID" */
export type IdFilter = {
  eq?: InputMaybe<Scalars['ID']['input']>;
};

/** Boolean expression comparing fields on type "Int" */
export type IntFilter = {
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  neq?: InputMaybe<Scalars['Int']['input']>;
};

export type Issuers = Node & {
  __typename?: 'Issuers';
  cardsCollection?: Maybe<CardsConnection>;
  createdAt: Scalars['Datetime']['output'];
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  slug: Scalars['Opaque']['output'];
  updatedAt: Scalars['Datetime']['output'];
  url?: Maybe<Scalars['String']['output']>;
};


export type IssuersCardsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<CardsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CardsOrderBy>>;
};

export type IssuersConnection = {
  __typename?: 'IssuersConnection';
  edges: Array<IssuersEdge>;
  pageInfo: PageInfo;
};

export type IssuersDeleteResponse = {
  __typename?: 'IssuersDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Issuers>;
};

export type IssuersEdge = {
  __typename?: 'IssuersEdge';
  cursor: Scalars['String']['output'];
  node: Issuers;
};

export type IssuersFilter = {
  createdAt?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  slug?: InputMaybe<OpaqueFilter>;
  updatedAt?: InputMaybe<DatetimeFilter>;
  url?: InputMaybe<StringFilter>;
};

export type IssuersInsertInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['Opaque']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type IssuersInsertResponse = {
  __typename?: 'IssuersInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Issuers>;
};

export type IssuersOrderBy = {
  createdAt?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  slug?: InputMaybe<OrderByDirection>;
  updatedAt?: InputMaybe<OrderByDirection>;
  url?: InputMaybe<OrderByDirection>;
};

export type IssuersUpdateInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['Opaque']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type IssuersUpdateResponse = {
  __typename?: 'IssuersUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Issuers>;
};

/** The root type for creating and mutating data */
export type Mutation = {
  __typename?: 'Mutation';
  /** Deletes zero or more records from the `BonusPoints` collection */
  deleteFromBonusPointsCollection: BonusPointsDeleteResponse;
  /** Deletes zero or more records from the `BonusPointsStats` collection */
  deleteFromBonusPointsStatsCollection: BonusPointsStatsDeleteResponse;
  /** Deletes zero or more records from the `Cards` collection */
  deleteFromCardsCollection: CardsDeleteResponse;
  /** Deletes zero or more records from the `CardsNormalizedStats` collection */
  deleteFromCardsNormalizedStatsCollection: CardsNormalizedStatsDeleteResponse;
  /** Deletes zero or more records from the `CardsScores` collection */
  deleteFromCardsScoresCollection: CardsScoresDeleteResponse;
  /** Deletes zero or more records from the `Issuers` collection */
  deleteFromIssuersCollection: IssuersDeleteResponse;
  /** Adds one or more `BonusPoints` records to the collection */
  insertIntoBonusPointsCollection?: Maybe<BonusPointsInsertResponse>;
  /** Adds one or more `BonusPointsStats` records to the collection */
  insertIntoBonusPointsStatsCollection?: Maybe<BonusPointsStatsInsertResponse>;
  /** Adds one or more `Cards` records to the collection */
  insertIntoCardsCollection?: Maybe<CardsInsertResponse>;
  /** Adds one or more `CardsNormalizedStats` records to the collection */
  insertIntoCardsNormalizedStatsCollection?: Maybe<CardsNormalizedStatsInsertResponse>;
  /** Adds one or more `CardsScores` records to the collection */
  insertIntoCardsScoresCollection?: Maybe<CardsScoresInsertResponse>;
  /** Adds one or more `Issuers` records to the collection */
  insertIntoIssuersCollection?: Maybe<IssuersInsertResponse>;
  /** Updates zero or more records in the `BonusPoints` collection */
  updateBonusPointsCollection: BonusPointsUpdateResponse;
  /** Updates zero or more records in the `BonusPointsStats` collection */
  updateBonusPointsStatsCollection: BonusPointsStatsUpdateResponse;
  /** Updates zero or more records in the `Cards` collection */
  updateCardsCollection: CardsUpdateResponse;
  /** Updates zero or more records in the `CardsNormalizedStats` collection */
  updateCardsNormalizedStatsCollection: CardsNormalizedStatsUpdateResponse;
  /** Updates zero or more records in the `CardsScores` collection */
  updateCardsScoresCollection: CardsScoresUpdateResponse;
  /** Updates zero or more records in the `Issuers` collection */
  updateIssuersCollection: IssuersUpdateResponse;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromBonusPointsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<BonusPointsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromBonusPointsStatsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<BonusPointsStatsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromCardsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<CardsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromCardsNormalizedStatsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<CardsNormalizedStatsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromCardsScoresCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<CardsScoresFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromIssuersCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<IssuersFilter>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoBonusPointsCollectionArgs = {
  objects: Array<BonusPointsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoBonusPointsStatsCollectionArgs = {
  objects: Array<BonusPointsStatsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoCardsCollectionArgs = {
  objects: Array<CardsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoCardsNormalizedStatsCollectionArgs = {
  objects: Array<CardsNormalizedStatsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoCardsScoresCollectionArgs = {
  objects: Array<CardsScoresInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoIssuersCollectionArgs = {
  objects: Array<IssuersInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationUpdateBonusPointsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<BonusPointsFilter>;
  set: BonusPointsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateBonusPointsStatsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<BonusPointsStatsFilter>;
  set: BonusPointsStatsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateCardsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<CardsFilter>;
  set: CardsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateCardsNormalizedStatsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<CardsNormalizedStatsFilter>;
  set: CardsNormalizedStatsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateCardsScoresCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<CardsScoresFilter>;
  set: CardsScoresUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateIssuersCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<IssuersFilter>;
  set: IssuersUpdateInput;
};

export type Node = {
  /** Retrieves a record by `ID` */
  nodeId: Scalars['ID']['output'];
};

/** Boolean expression comparing fields on type "Opaque" */
export type OpaqueFilter = {
  eq?: InputMaybe<Scalars['Opaque']['input']>;
  is?: InputMaybe<FilterIs>;
};

/** Defines a per-field sorting order */
export enum OrderByDirection {
  /** Ascending order, nulls first */
  AscNullsFirst = 'AscNullsFirst',
  /** Ascending order, nulls last */
  AscNullsLast = 'AscNullsLast',
  /** Descending order, nulls first */
  DescNullsFirst = 'DescNullsFirst',
  /** Descending order, nulls last */
  DescNullsLast = 'DescNullsLast'
}

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

/** The root type for querying data */
export type Query = {
  __typename?: 'Query';
  /** A pagable collection of type `BonusPoints` */
  bonusPointsCollection?: Maybe<BonusPointsConnection>;
  /** A pagable collection of type `BonusPointsStats` */
  bonusPointsStatsCollection?: Maybe<BonusPointsStatsConnection>;
  /** A pagable collection of type `Cards` */
  cardsCollection?: Maybe<CardsConnection>;
  /** A pagable collection of type `CardsNormalizedStats` */
  cardsNormalizedStatsCollection?: Maybe<CardsNormalizedStatsConnection>;
  /** A pagable collection of type `CardsScores` */
  cardsScoresCollection?: Maybe<CardsScoresConnection>;
  /** A pagable collection of type `Issuers` */
  issuersCollection?: Maybe<IssuersConnection>;
  /** Retrieve a record by its `ID` */
  node?: Maybe<Node>;
};


/** The root type for querying data */
export type QueryBonusPointsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<BonusPointsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<BonusPointsOrderBy>>;
};


/** The root type for querying data */
export type QueryBonusPointsStatsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<BonusPointsStatsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<BonusPointsStatsOrderBy>>;
};


/** The root type for querying data */
export type QueryCardsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<CardsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CardsOrderBy>>;
};


/** The root type for querying data */
export type QueryCardsNormalizedStatsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<CardsNormalizedStatsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CardsNormalizedStatsOrderBy>>;
};


/** The root type for querying data */
export type QueryCardsScoresCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<CardsScoresFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CardsScoresOrderBy>>;
};


/** The root type for querying data */
export type QueryIssuersCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<IssuersFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<IssuersOrderBy>>;
};


/** The root type for querying data */
export type QueryNodeArgs = {
  nodeId: Scalars['ID']['input'];
};

export enum RewardsProgram {
  Qantas = 'QANTAS',
  Velocity = 'VELOCITY'
}

/** Boolean expression comparing fields on type "RewardsProgram" */
export type RewardsProgramFilter = {
  eq?: InputMaybe<RewardsProgram>;
  in?: InputMaybe<Array<RewardsProgram>>;
  is?: InputMaybe<FilterIs>;
  neq?: InputMaybe<RewardsProgram>;
};

/** Boolean expression comparing fields on type "String" */
export type StringFilter = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  iregex?: InputMaybe<Scalars['String']['input']>;
  is?: InputMaybe<FilterIs>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
  regex?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression comparing fields on type "Time" */
export type TimeFilter = {
  eq?: InputMaybe<Scalars['Time']['input']>;
  gt?: InputMaybe<Scalars['Time']['input']>;
  gte?: InputMaybe<Scalars['Time']['input']>;
  in?: InputMaybe<Array<Scalars['Time']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Time']['input']>;
  lte?: InputMaybe<Scalars['Time']['input']>;
  neq?: InputMaybe<Scalars['Time']['input']>;
};

/** Boolean expression comparing fields on type "UUID" */
export type UuidFilter = {
  eq?: InputMaybe<Scalars['UUID']['input']>;
  in?: InputMaybe<Array<Scalars['UUID']['input']>>;
  is?: InputMaybe<FilterIs>;
  neq?: InputMaybe<Scalars['UUID']['input']>;
};

export type CardQueryQueryVariables = Exact<{
  issuerId: Scalars['UUID']['input'];
  slug: Scalars['Opaque']['input'];
}>;


export type CardQueryQuery = { __typename?: 'Query', cardsCollection?: { __typename?: 'CardsConnection', edges: Array<{ __typename?: 'CardsEdge', node: { __typename?: 'Cards', id: string, updatedAt: string, slug: any, name: string, url?: string | null, imagePath?: string | null, issuer: { __typename?: 'Issuers', id: string, slug: any, name: string, url?: string | null }, bonusPoints?: { __typename?: 'BonusPointsConnection', edges: Array<{ __typename?: 'BonusPointsEdge', node: { __typename?: 'BonusPoints', id: string, rewardsProgram: RewardsProgram, amount: number, minimumSpendCents: string, timeFrameDays: number, yearlyFeeCents: string } }> } | null } }> } | null, bonusPointsStatsCollection?: { __typename?: 'BonusPointsStatsConnection', edges: Array<{ __typename?: 'BonusPointsStatsEdge', node: { __typename?: 'BonusPointsStats', rewardsProgram?: RewardsProgram | null, minAmount?: number | null, maxAmount?: number | null, minMinimumSpendCents?: string | null, maxMinimumSpendCents?: string | null, minYearlyFeeCents?: string | null, maxYearlyFeeCents?: string | null, minTimeFrameDays?: number | null, maxTimeFrameDays?: number | null } }> } | null };

export type IssuerCardsQueryQueryVariables = Exact<{
  issuerId: Scalars['UUID']['input'];
}>;


export type IssuerCardsQueryQuery = { __typename?: 'Query', cards?: { __typename?: 'CardsConnection', edges: Array<{ __typename?: 'CardsEdge', node: { __typename?: 'Cards', id: string, updatedAt: string, slug: any, name: string, imagePath?: string | null, bonusPoints?: { __typename?: 'BonusPointsConnection', edges: Array<{ __typename?: 'BonusPointsEdge', node: { __typename?: 'BonusPoints', id: string, updatedAt: string, rewardsProgram: RewardsProgram, amount: number, yearlyFeeCents: string } }> } | null, scores: { __typename?: 'CardsScoresConnection', edges: Array<{ __typename?: 'CardsScoresEdge', node: { __typename?: 'CardsScores', rewardsProgram?: RewardsProgram | null, score?: number | null } }> }, issuer: { __typename?: 'Issuers', id: string, slug: any, name: string } } }> } | null };

export type CardsQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type CardsQueryQuery = { __typename?: 'Query', cards?: { __typename?: 'CardsConnection', edges: Array<{ __typename?: 'CardsEdge', node: { __typename?: 'Cards', id: string, updatedAt: string, slug: any, name: string, imagePath?: string | null, bonusPoints?: { __typename?: 'BonusPointsConnection', edges: Array<{ __typename?: 'BonusPointsEdge', node: { __typename?: 'BonusPoints', id: string, updatedAt: string, rewardsProgram: RewardsProgram, amount: number, yearlyFeeCents: string } }> } | null, scores: { __typename?: 'CardsScoresConnection', edges: Array<{ __typename?: 'CardsScoresEdge', node: { __typename?: 'CardsScores', rewardsProgram?: RewardsProgram | null, score?: number | null } }> }, issuer: { __typename?: 'Issuers', id: string, slug: any, name: string } } }> } | null };


export const CardQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CardQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"issuerId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Opaque"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cardsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"issuerId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"issuerId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"imagePath"}},{"kind":"Field","name":{"kind":"Name","value":"issuer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"bonusPoints"},"name":{"kind":"Name","value":"bonusPointsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"rewardsProgram"},"value":{"kind":"EnumValue","value":"AscNullsLast"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"rewardsProgram"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"minimumSpendCents"}},{"kind":"Field","name":{"kind":"Name","value":"timeFrameDays"}},{"kind":"Field","name":{"kind":"Name","value":"yearlyFeeCents"}}]}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"bonusPointsStatsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rewardsProgram"}},{"kind":"Field","name":{"kind":"Name","value":"minAmount"}},{"kind":"Field","name":{"kind":"Name","value":"maxAmount"}},{"kind":"Field","name":{"kind":"Name","value":"minMinimumSpendCents"}},{"kind":"Field","name":{"kind":"Name","value":"maxMinimumSpendCents"}},{"kind":"Field","name":{"kind":"Name","value":"minYearlyFeeCents"}},{"kind":"Field","name":{"kind":"Name","value":"maxYearlyFeeCents"}},{"kind":"Field","name":{"kind":"Name","value":"minTimeFrameDays"}},{"kind":"Field","name":{"kind":"Name","value":"maxTimeFrameDays"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CardQueryQuery, CardQueryQueryVariables>;
export const IssuerCardsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"IssuerCardsQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"issuerId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"cards"},"name":{"kind":"Name","value":"cardsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"issuerId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"issuerId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"imagePath"}},{"kind":"Field","alias":{"kind":"Name","value":"bonusPoints"},"name":{"kind":"Name","value":"bonusPointsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"rewardsProgram"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"yearlyFeeCents"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"scores"},"name":{"kind":"Name","value":"cardScoresCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rewardsProgram"}},{"kind":"Field","name":{"kind":"Name","value":"score"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"issuer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<IssuerCardsQueryQuery, IssuerCardsQueryQueryVariables>;
export const CardsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CardsQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"cards"},"name":{"kind":"Name","value":"cardsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"imagePath"}},{"kind":"Field","alias":{"kind":"Name","value":"bonusPoints"},"name":{"kind":"Name","value":"bonusPointsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"rewardsProgram"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"yearlyFeeCents"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"scores"},"name":{"kind":"Name","value":"cardScoresCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rewardsProgram"}},{"kind":"Field","name":{"kind":"Name","value":"score"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"issuer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<CardsQueryQuery, CardsQueryQueryVariables>;
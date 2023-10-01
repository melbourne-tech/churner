/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query CardQuery($issuerId: UUID!, $slug: Opaque!) {\n    cardsCollection(\n      first: 1\n      filter: { issuerId: { eq: $issuerId }, slug: { eq: $slug } }\n    ) {\n      edges {\n        node {\n          id\n          updatedAt\n          slug\n          name\n          url\n          imagePath\n          issuer {\n            id\n            slug\n            name\n            url\n          }\n          bonusPoints: bonusPointsCollection(\n            orderBy: { rewardsProgram: AscNullsLast }\n          ) {\n            edges {\n              node {\n                id\n                rewardsProgram\n                amount\n                minimumSpendCents\n                timeFrameDays\n                yearlyFeeCents\n              }\n            }\n          }\n        }\n      }\n    }\n\n    bonusPointsStatsCollection {\n      edges {\n        node {\n          rewardsProgram\n          minAmount\n          maxAmount\n          minMinimumSpendCents\n          maxMinimumSpendCents\n          minYearlyFeeCents\n          maxYearlyFeeCents\n          minTimeFrameDays\n          maxTimeFrameDays\n        }\n      }\n    }\n  }\n": types.CardQueryDocument,
    "\n  query IssuerCardsQuery($issuerId: UUID!) {\n    cards: cardsCollection(filter: { issuerId: { eq: $issuerId } }) {\n      edges {\n        node {\n          id\n          updatedAt\n          slug\n          name\n          imagePath\n          bonusPoints: bonusPointsCollection {\n            edges {\n              node {\n                id\n                updatedAt\n                rewardsProgram\n                amount\n                yearlyFeeCents\n              }\n            }\n          }\n          scores: cardScoresCollection {\n            edges {\n              node {\n                rewardsProgram\n                score\n              }\n            }\n          }\n          issuer {\n            id\n            slug\n            name\n          }\n        }\n      }\n    }\n  }\n": types.IssuerCardsQueryDocument,
    "\n  query CardsQuery {\n    cards: cardsCollection {\n      edges {\n        node {\n          id\n          updatedAt\n          slug\n          name\n          imagePath\n          bonusPoints: bonusPointsCollection {\n            edges {\n              node {\n                id\n                updatedAt\n                rewardsProgram\n                amount\n                yearlyFeeCents\n              }\n            }\n          }\n          scores: cardScoresCollection {\n            edges {\n              node {\n                rewardsProgram\n                score\n              }\n            }\n          }\n          issuer {\n            id\n            slug\n            name\n          }\n        }\n      }\n    }\n  }\n": types.CardsQueryDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query CardQuery($issuerId: UUID!, $slug: Opaque!) {\n    cardsCollection(\n      first: 1\n      filter: { issuerId: { eq: $issuerId }, slug: { eq: $slug } }\n    ) {\n      edges {\n        node {\n          id\n          updatedAt\n          slug\n          name\n          url\n          imagePath\n          issuer {\n            id\n            slug\n            name\n            url\n          }\n          bonusPoints: bonusPointsCollection(\n            orderBy: { rewardsProgram: AscNullsLast }\n          ) {\n            edges {\n              node {\n                id\n                rewardsProgram\n                amount\n                minimumSpendCents\n                timeFrameDays\n                yearlyFeeCents\n              }\n            }\n          }\n        }\n      }\n    }\n\n    bonusPointsStatsCollection {\n      edges {\n        node {\n          rewardsProgram\n          minAmount\n          maxAmount\n          minMinimumSpendCents\n          maxMinimumSpendCents\n          minYearlyFeeCents\n          maxYearlyFeeCents\n          minTimeFrameDays\n          maxTimeFrameDays\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query CardQuery($issuerId: UUID!, $slug: Opaque!) {\n    cardsCollection(\n      first: 1\n      filter: { issuerId: { eq: $issuerId }, slug: { eq: $slug } }\n    ) {\n      edges {\n        node {\n          id\n          updatedAt\n          slug\n          name\n          url\n          imagePath\n          issuer {\n            id\n            slug\n            name\n            url\n          }\n          bonusPoints: bonusPointsCollection(\n            orderBy: { rewardsProgram: AscNullsLast }\n          ) {\n            edges {\n              node {\n                id\n                rewardsProgram\n                amount\n                minimumSpendCents\n                timeFrameDays\n                yearlyFeeCents\n              }\n            }\n          }\n        }\n      }\n    }\n\n    bonusPointsStatsCollection {\n      edges {\n        node {\n          rewardsProgram\n          minAmount\n          maxAmount\n          minMinimumSpendCents\n          maxMinimumSpendCents\n          minYearlyFeeCents\n          maxYearlyFeeCents\n          minTimeFrameDays\n          maxTimeFrameDays\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query IssuerCardsQuery($issuerId: UUID!) {\n    cards: cardsCollection(filter: { issuerId: { eq: $issuerId } }) {\n      edges {\n        node {\n          id\n          updatedAt\n          slug\n          name\n          imagePath\n          bonusPoints: bonusPointsCollection {\n            edges {\n              node {\n                id\n                updatedAt\n                rewardsProgram\n                amount\n                yearlyFeeCents\n              }\n            }\n          }\n          scores: cardScoresCollection {\n            edges {\n              node {\n                rewardsProgram\n                score\n              }\n            }\n          }\n          issuer {\n            id\n            slug\n            name\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query IssuerCardsQuery($issuerId: UUID!) {\n    cards: cardsCollection(filter: { issuerId: { eq: $issuerId } }) {\n      edges {\n        node {\n          id\n          updatedAt\n          slug\n          name\n          imagePath\n          bonusPoints: bonusPointsCollection {\n            edges {\n              node {\n                id\n                updatedAt\n                rewardsProgram\n                amount\n                yearlyFeeCents\n              }\n            }\n          }\n          scores: cardScoresCollection {\n            edges {\n              node {\n                rewardsProgram\n                score\n              }\n            }\n          }\n          issuer {\n            id\n            slug\n            name\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query CardsQuery {\n    cards: cardsCollection {\n      edges {\n        node {\n          id\n          updatedAt\n          slug\n          name\n          imagePath\n          bonusPoints: bonusPointsCollection {\n            edges {\n              node {\n                id\n                updatedAt\n                rewardsProgram\n                amount\n                yearlyFeeCents\n              }\n            }\n          }\n          scores: cardScoresCollection {\n            edges {\n              node {\n                rewardsProgram\n                score\n              }\n            }\n          }\n          issuer {\n            id\n            slug\n            name\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query CardsQuery {\n    cards: cardsCollection {\n      edges {\n        node {\n          id\n          updatedAt\n          slug\n          name\n          imagePath\n          bonusPoints: bonusPointsCollection {\n            edges {\n              node {\n                id\n                updatedAt\n                rewardsProgram\n                amount\n                yearlyFeeCents\n              }\n            }\n          }\n          scores: cardScoresCollection {\n            edges {\n              node {\n                rewardsProgram\n                score\n              }\n            }\n          }\n          issuer {\n            id\n            slug\n            name\n          }\n        }\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;
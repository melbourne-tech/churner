import { graphql } from '~/gql'
import { adminGraphQLClient } from '~/lib/supabase-admin'

const getCardsQuery = graphql(/* GraphQL */ `
  query CardsQuery {
    cards: cardsCollection {
      edges {
        node {
          id
          updatedAt
          slug
          name
          imagePath
          bonusPoints: bonusPointsCollection {
            edges {
              node {
                id
                updatedAt
                rewardsProgram
                amount
                yearlyFeeCents
              }
            }
          }
          scores: cardScoresCollection {
            edges {
              node {
                rewardsProgram
                score
              }
            }
          }
          issuer {
            id
            slug
            name
          }
        }
      }
    }
  }
`)

export async function getCards() {
  const data = await adminGraphQLClient.request(getCardsQuery)
  if (!data.cards) throw new Error('Failed to fetch data from Supabase')

  return data.cards.edges.map(({ node }) => ({
    ...node,
    bonusPoints: node.bonusPoints?.edges.map(({ node }) => node) ?? [],
    scores: node.scores.edges.map(({ node }) => node),
  }))
}

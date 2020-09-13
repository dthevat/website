import React from 'react'
import { graphql } from 'gatsby'
import Layout from '~components/layout'
import { CtaLink } from '~components/common/landing-page/call-to-action'
import { SocialCardLede } from '~components/social-media-graphics/race/state'

import landingStyles from './landing.module.scss'

export default ({ pageContext, path, data }) => {
  const state = pageContext

  const stateData = data.covidRaceDataSeparate || data.covidRaceDataCombined

  // todo make typeOfRates dynamic

  return (
    <Layout
      title={`${state.name}: Infection and death rates`}
      returnLinks={[
        { link: '/race' },
        { link: `/race/dashboard`, title: 'Racial Data Dashboard' },
      ]}
      path={path}
      socialCard={`//covidtracking.com/images/race-dashboard/${state.childSlug.slug}.png`}
    >
      {stateData && (
        <p>
          <SocialCardLede
            typeOfRates="Infection and death rates"
            state={stateData}
            population={data.covidStateInfo.childPopulation.population}
            stateName={stateData.stateName}
          />
        </p>
      )}
      <ul>
        <li>
          <CtaLink
            to={`/race/dashboard/${stateData &&
              `#state-${stateData.state.toLowerCase()}`}`}
          >
            Check out the Racial Data Dashboard
          </CtaLink>
        </li>
        <li>
          <CtaLink to="/race/social-media-graphics">
            View another state share card
          </CtaLink>
        </li>
      </ul>
      <img
        src={`/images/race-dashboard/${state.childSlug.slug}.png`}
        alt={`Social card for ${state.name}`}
        className={landingStyles.preview}
      />
    </Layout>
  )
}

export const query = graphql`
  query($state: String!) {
    covidStateInfo(state: { eq: $state }) {
      childPopulation {
        population
      }
    }
    covidRaceDataCombined(state: { eq: $state }) {
      state
      stateName
      knownRaceEthPos
      knownRaceEthDeath
      blackPctPos
      blackPctDeath
      blackPositives
      blackDeaths
      whitePctPos
      whitePctDeath
      whitePositives
      whiteDeaths
      nhpiPctPos
      nhpiPctDeath
      nhpiPositives
      nhpiDeaths
      latinXPctPos
      latinXPctDeath
      latinXPositives
      latinXDeaths
      asianPctPos
      asianPctDeath
      asianPositives
      asianDeaths
      aianPctPos
      aianPctDeath
      aianPositives
      aianDeaths
      blackPosPercap
      blackDeathPercap
      latinXPosPercap
      latinXDeathPercap
      asianPosPercap
      asianDeathPercap
      aianPosPercap
      aianDeathPercap
      whitePosPercap
      whiteDeathPercap
      nhpiPosPercap
      nhpiDeathPercap
    }
    covidRaceDataSeparate(state: { eq: $state }) {
      state
      stateName
      knownRacePos
      knownRaceDeath
      knownEthPos
      knownEthDeath
      blackPctPos
      blackPctDeath
      blackPositives
      blackDeaths
      whitePctPos
      whitePctDeath
      whitePositives
      whiteDeaths
      nhpiPctPos
      nhpiPctDeath
      nhpiPositives
      nhpiDeaths
      latinXPctPos
      latinXPctDeath
      latinXPositives
      latinXDeaths
      asianPctPos
      asianPctDeath
      asianPositives
      asianDeaths
      aianPctPos
      aianPctDeath
      aianPositives
      aianDeaths
      blackPosPercap
      blackDeathPercap
      latinXPosPercap
      latinXDeathPercap
      asianPosPercap
      asianDeathPercap
      aianPosPercap
      aianDeathPercap
      whitePosPercap
      whiteDeathPercap
      nhpiPosPercap
      nhpiDeathPercap
    }
  }
`
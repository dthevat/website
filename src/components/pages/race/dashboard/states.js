import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import StateSeparate from './state-separate'
import StateCombined from './state-combined'

export default () => {
  const data = useStaticQuery(graphql`
    query {
      allCovidRaceDataCombined(sort: { fields: name }) {
        nodes {
          id
          aianANHPINotes
          aianDeaths
          aianDeathNotes
          aianDeathDispFlag
          aianDeathCaution
          asianDeathNotes
          asianDeathDispFlag
          asianDeathCaution
          asianANHPINotes
          aianPositives
          aianPosNotes
          aianPosDispFlag
          aianPosCaution
          aianPctPos
          aianPctPop
          aianPctDeath
          blackPositives
          blackPosNotes
          blackPosDispFlag
          blackPosCaution
          blackPctPos
          blackPctPop
          blackPctDeath
          blackDeaths
          blackDeathNotes
          blackDeathDispFlag
          blackDeathCaution
          blackANHPINotes
          asianPositives
          asianPosNotes
          asianPosDispFlag
          asianPosCaution
          asianPctPos
          asianPctPop
          asianPctDeath
          asianDeaths
          knownRaceEthDeath
          knownRaceEthPos
          latinXANHPINotes
          latinXDeathCaution
          latinXDeathDispFlag
          latinXDeathNotes
          latinXPositives
          latinXPosNotes
          latinXPosDispFlag
          latinXPosCaution
          latinXPctPos
          latinXPctPop
          latinXPctDeath
          latinXDeaths
          state
          otherPositives
          otherPosNotes
          otherPosDispFlag
          otherPosCaution
          otherPctPos
          otherPctPop
          otherPctDeath
          otherDeaths
          otherDeathNotes
          otherDeathDispFlag
          otherDeathCaution
          otherANHPINotes
          nhpiPositives
          nhpiPosNotes
          nhpiPosDispFlag
          nhpiPosCaution
          nhpiPctPos
          nhpiPctPop
          nhpiPctDeath
          nhpiDeaths
          nhpiDeathNotes
          nhpiDeathDispFlag
          nhpiDeathCaution
          nhpiANHPINotes
          whitePositives
          whitePosNotes
          whitePosDispFlag
          whitePosCaution
          whitePctPos
          whitePctPop
          whitePctDeath
          whiteDeaths
          whiteDeathNotes
          whiteDeathDispFlag
          whiteDeathCaution
          whiteANHPINotes
          unknownRaceEthPos
          unknownRaceEthDeath
          twoPositives
          twoPosNotes
          twoPosDispFlag
          twoPosCaution
          twoPctPos
          twoPctPop
          twoPctDeath
          twoDeaths
          twoDeathNotes
          twoDeathDispFlag
          twoDeathCaution
          twoANHPINotes
          name
        }
      }
      allCovidRaceDataSeparate(sort: { fields: name }) {
        nodes {
          name
          whitePosNotes
          whitePositives
          whiteSpecialCaseNotes
          whitePosDispFlag
          whitePosCaution
          whitePctPos
          whitePctPop
          whitePctDeath
          whiteDeaths
          whiteDeathNotes
          whiteDeathDispFlag
          whiteDeathCaution
          whiteANHPIPosNotes
          whiteANHPIDeathNotes
          unknownRacePos
          unknownRaceEthDeath
          unknownRaceDeath
          unknownEthPos
          unknownEthDeath
          twoSpecialCaseNotes
          twoPositives
          twoPosDispFlag
          twoPosNotes
          twoPosCaution
          twoPctPos
          twoPctPop
          twoPctDeath
          twoDeaths
          twoDeathNotes
          twoDeathDispFlag
          twoDeathCaution
          twoANHPIPosNotes
          twoANHPIDeathNotes
          state
          otherSpecialCaseNotes
          otherPositives
          otherPosNotes
          otherPosDispFlag
          otherPosCaution
          otherPctPos
          otherPctPop
          otherPctDeath
          otherDeaths
          otherDeathNotes
          otherDeathDispFlag
          otherDeathCaution
          otherANHPIPosNotes
          otherANHPIDeathNotes
          nonhispanicSpecialCaseNotes
          nonhispanicPositives
          nonhispanicPosNotes
          nonhispanicPosDispFlag
          nonhispanicPosCaution
          nonhispanicPctPos
          nonhispanicPctPop
          nonhispanicPctDeath
          nonhispanicDeaths
          nonhispanicDeathNotes
          nonhispanicDeathDispFlag
          nonhispanicDeathCaution
          nonhispanicANHPIPosNotes
          nonhispanicANHPIDeathNotes
          nhpiSpecialCaseNotes
          nhpiPositives
          nhpiPosNotes
          nhpiPosDispFlag
          nhpiPosCaution
          nhpiPctPop
          nhpiPctPos
          nhpiPctDeath
          nhpiDeaths
          nhpiDeathNotes
          nhpiDeathDispFlag
          nhpiDeathCaution
          nhpiANHPIDeathNotes
          nhpiANHPIPosNotes
          latinXSpecialCaseNotes
          latinXPositives
          latinXPosNotes
          latinXPosDispFlag
          latinXPosCaution
          latinXPctPos
          latinXPctPop
          latinXPctDeath
          latinXDeaths
          latinXDeathNotes
          latinXDeathDispFlag
          latinXDeathCaution
          latinXANHPIPosNotes
          latinXANHPIDeathNotes
          knownRacePos
          knownEthPos
          knownEthDeath
          blackSpecialCaseNotes__1
          id
          blackSpecialCaseNotes
          blackPositives__1
          blackPositives
          blackPosNotes__1
          blackPosNotes
          blackPosDispFlag__1
          blackPosDispFlag
          blackPosCaution__1
          blackPosCaution
          blackPctPos__1
          blackPctPos
          blackPctPop__1
          blackPctPop
          blackPctDeath__1
          blackPctDeath
          blackDeaths__1
          blackDeaths
          blackDeathNotes__1
          blackDeathNotes
          blackDeathDispFlag__1
          blackDeathDispFlag
          blackDeathCaution__1
          blackDeathCaution
          blackANHPIPosNotes__1
          blackANHPIPosNotes
          blackANHPIDeathNotes__1
          blackANHPIDeathNotes
          asianSpecialCaseNotes
          asianPositives
          asianPosNotes
          asianPosDispFlag
          asianPosCaution
          asianPctPos
          asianPctPop
          asianPctDeath
          asianDeaths
          asianDeathNotes
          asianDeathDispFlag
          asianDeathCaution
          asianANHPIPosNotes
          asianANHPIDeathNotes
          aianSpecialCaseNotes
          aianPositives
          aianPosNotes
          aianPosDispFlag
          aianPosCaution
          aianPctPos
          aianPctPop
          aianPctDeath
          aianDeaths
          aianDeathNotes
          aianDeathDispFlag
          aianDeathCaution
          aianANHPIPosNotes
          aianANHPIDeathNotes
        }
      }
    }
  `)

  const states = []
  data.allCovidRaceDataSeparate.nodes.forEach(state => {
    states.push({
      ...state,
      stateSeparate: true,
    })
  })
  data.allCovidRaceDataCombined.nodes.forEach(state => {
    states.push({
      ...state,
      stateSeparate: false,
    })
  })

  return (
    <section>
      {states
        .sort((a, b) => (a.name > b.name ? 1 : -1))
        .map(state => (
          <>
            <h2>{state.name}</h2>
            {state.stateSeparate ? (
              <StateSeparate state={state} />
            ) : (
              <StateCombined state={state} />
            )}
          </>
        ))}
    </section>
  )
}

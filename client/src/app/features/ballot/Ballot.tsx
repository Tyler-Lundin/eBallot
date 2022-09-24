import styled from 'styled-components'
import useBallot from './useBallot'

const Ballot = () => {
  useBallot()
  return (
    <CONTAINER>
      {/* question */}
      {/* options (click to vote)*/}
      {/* leave reaction */}
      {/* view comments */}
      {/* skip button or swipe away*/}
      {/* load ballots overtop each other. swipe to remove front ballot / load more */}
    </CONTAINER>
  )
}

export default Ballot

const CONTAINER = styled.div``

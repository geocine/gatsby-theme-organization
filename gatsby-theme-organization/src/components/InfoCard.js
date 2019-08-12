/** @jsx jsx */
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import styled from '@emotion/styled'
import { jsx } from 'theme-ui'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'

const StyledCard = styled(Card)`
  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.05);
`

const InfoCard = ({ name, href, children }) => (
  <StyledCard>
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>{children}</Card.Text>
      <Button variant="primary" href={href}>
        <FontAwesomeIcon
          icon={faGithub}
          size="lg"
          sx={{
            marginRight: '0.5rem'
          }}
        />{' '}
        View on Github
      </Button>
    </Card.Body>
  </StyledCard>
)

export default InfoCard

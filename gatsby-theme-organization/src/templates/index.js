/** @jsx jsx */
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import styled from '@emotion/styled'
import InfoCard from '../components/InfoCard'
import Layout from '../components/Layout'
import { Flex, Box, jsx } from 'theme-ui'
import { graphql, useStaticQuery } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'

import Helmet from 'react-helmet'

import 'src/css/theme.scss'
import favicon from '../assets/favicon.ico'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
// Prevent fontawesome from dynamically adding its css since we did it manually above
config.autoAddCss = false

const MastHead = styled(Jumbotron)`
  background-color: ${prop => prop.theme.colors.dark};
  padding: 0;
  color: white;
  padding-bottom: 0.5rem;
`

const Content = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 350px;
  margin: 0 auto;
  max-width: 800px;
  text-align: center;
  @media (max-width: 800px) {
    padding: 0 40px;
    text-align: center;
  }
`

const Title = styled('p')`
  font-size: 1.5rem;
  margin: 2rem 0;
`

const IndexPage = () => {
  const { allProject, setting } = useStaticQuery(graphql`
    query {
      allProject {
        nodes {
          name
          url
          description
        }
      }
      setting {
        url
        title
        organization
        logoName
      }
    }
  `)
  const projects = allProject.nodes

  return (
    <Layout>
      <Helmet>
        <link rel="icon" href={favicon} type="image/x-icon" />
      </Helmet>
      <MastHead fluid>
        <Content>
          <img
            src={require(`../assets/${setting.logoName}`)}
            alt="react-bootstrap"
            height={150}
          />
          <Title>{setting.title}</Title>
          <p>
            <Button variant="primary" href={setting.url} size="lg">
              <FontAwesomeIcon
                icon={faGithub}
                size="lg"
                sx={{
                  marginRight: '0.5rem'
                }}
              />{' '}
              View on Github
            </Button>
          </p>
        </Content>
      </MastHead>
      <Container>
        <Flex
          sx={{
            flexWrap: 'wrap'
          }}
        >
          {projects.map((project, key) => (
            <Box sx={{ width: ['100%', '50%', '33%'], px: 2, py: 2 }} key={key}>
              <InfoCard name={project.name} href={project.url}>
                {project.description}
              </InfoCard>
            </Box>
          ))}
        </Flex>
      </Container>
    </Layout>
  )
}

export default IndexPage

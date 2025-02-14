import React from 'react'
import { Button, Card, Label } from 'semantic-ui-react'
import styles from './ProjectCard.module.scss'

interface Props {
  id: string
  title: string
  subtitle: string
  tags: string[]
  handleShowProject: (projectKey: string) => void
}

function ProjectCard({ id, title, subtitle, tags, handleShowProject }: Props) {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Description>{subtitle}</Card.Description>
      </Card.Content>

      <Card.Content extra className={styles.cardextraStyle}>
        <Label.Group>
          {tags?.map((tag) => (
            <Label key={tag} className={styles.labelStyle}>
              {tag}
            </Label>
          ))}
        </Label.Group>
      </Card.Content>

      <Card.Content extra className={styles.detailStyle}>
        <Button
          fluid
          attached
          onClick={() => handleShowProject(id)}
          className={styles.buttonstyle}
          color={'blue'}
        >
          Details
        </Button>
      </Card.Content>
    </Card>
  )
}

export default ProjectCard

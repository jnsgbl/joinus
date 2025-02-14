import Image from 'next/image'
import React from 'react'
import { Header, List, Table } from 'semantic-ui-react'
import styles from './EmployeeRow.module.scss'

interface Props {
  name: string
  picture: string
  team: string
  study: string
  tasklist: string[]
  time?: string
  withTime?: boolean
}

function EmployeeRow({
  name,
  picture,
  team,
  study,
  tasklist,
  time,
  withTime,
}: Props) {
  const ImageSrc = require(`../../../public/images/people/${picture}`)
  return (
    <Table.Row>
      <Table.Cell>
        <Header as="h4" image>
          <div className={styles.image}>
            <Image src={ImageSrc} />
          </div>
          <Header.Content>
            {name}
            <Header.Subheader>{team}</Header.Subheader>
          </Header.Content>
        </Header>
      </Table.Cell>
      <Table.Cell>{study}</Table.Cell>
      <Table.Cell>
        <List bulleted>
          {tasklist.map((task) => (
            <List.Item key={task}>{task}</List.Item>
          ))}
        </List>
      </Table.Cell>
      {withTime && <Table.Cell className="mobile hidden">{time}</Table.Cell>}
    </Table.Row>
  )
}

EmployeeRow.defaultProps = {
  time: undefined,
  withTime: true,
}

export default EmployeeRow

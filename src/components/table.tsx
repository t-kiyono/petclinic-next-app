import styles from './table.module.css'

type MultiData = Array<{ key: number, data: any }>;

export function Table(props: { showHeader?: boolean, contents: MultiData[] | any }) {
  const { showHeader, contents } = props

  if (Array.isArray(contents)) {
    const multiData = contents as MultiData
    if (multiData.length > 0) {
      const keys = Object.keys(multiData[0].data)
      return (
        <table className={styles.table}>
          { showHeader === true &&
          <thead>
            <tr>
              {keys.map((k, i) => <th key={i}>{k}</th>)}
            </tr>
          </thead>
          }
          <tbody>
            {
              multiData.map(c =>
                <tr key={c.key}>
                  {keys.map((k, i) => <td key={i}>{c.data[k]}</td>)}
                </tr>
              )
            }
          </tbody>
        </table>
      )
    } else {
      return <></>
    }
  } else {
    return (
      <table className={styles.table}>
        <tbody>
          {
            Object.keys(contents).map(key =>
              <tr key={key}>
                <th>{key}</th>
                <td>{contents[key]}</td>
              </tr>
            )
          }
        </tbody>
      </table>
    )
  }
}

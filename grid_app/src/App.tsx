import { CONTENT_TITLE, contentList } from './data'

// import styles from './App.style'

export default function App() {
  return (
    <ul>
      {contentList.map((content) => {
        return (
          <>
            <li>{content.titleName}</li>
            <li>{content.createDate}</li>
            <li>{content.startDate}</li>
            <li>{content.endDate}</li>
            <li>{content.priority}</li>
          </>
        )
      })}
    </ul>
  )
}

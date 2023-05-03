/** @jsxImportSource @emotion/react */
import { headerList, contentList } from "./data";
import styles from "./App.style";

export default function App() {
  return (
    <div>
      <div css={styles.headContainer}>
        {headerList.map((header) => {
          return (
            <div key={header.id}>
              <div>{header.label}</div>
            </div>
          );
        })}
      </div>
      {contentList.map((content) => {
        return (
          <div key={content.id} css={styles.contentContainer(content.id)}>
            <div>{content.titleName}</div>
            <div>{content.createDate}</div>
            <div>{content.startDate}</div>
            <div>{content.endDate}</div>
            <div>{content.priority}</div>
            <button>상세보기</button>
            <button>삭제</button>
          </div>
        );
      })}
    </div>
  );
}

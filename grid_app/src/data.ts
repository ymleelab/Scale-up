export const headerList: headerType[] = [
  {
    id: 1,
    label: "이름",
    value: "title",
  },
  {
    id: 2,
    label: "생성일",
    value: "createDate",
  },
  {
    id: 3,
    label: "시작일",
    value: "startDate",
  },
  {
    id: 4,
    label: "종료일",
    value: "endDate",
  },
  {
    id: 5,
    label: "우선순위",
    value: "priority",
  },
  {
    id: 6,
    label: "상세보기",
  },
  {
    id: 7,
    label: "삭제",
  },
];

export const contentList: contentType[] = [
  {
    id: 1,
    titleName: "1번 타이틀",
    createDate: "2023-04-25 18:38",
    startDate: "2023-04-25 19:38",
    endDate: "2023-04-25 20:00",
    priority: 1,
  },
  {
    id: 2,
    titleName: "2번 타이틀",
    createDate: "2023-04-26 18:38",
    startDate: "2023-04-26 19:38",
    endDate: "2023-04-26 20:00",
    priority: 1,
  },
  {
    id: 3,
    titleName: "3번 타이틀",
    createDate: "2023-04-27 18:38",
    startDate: "2023-04-27 19:38",
    endDate: "2023-04-27 20:00",
    priority: 1,
  },
];

interface headerType {
  id: number;
  label: string;
  value?: string;
}

interface contentType {
  id: number;
  titleName: string;
  createDate: string;
  startDate: string;
  endDate: string;
  priority: number;
}

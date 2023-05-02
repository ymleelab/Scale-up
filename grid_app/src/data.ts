export enum CONTENT_TITLE {
  titleName = '이름',
  createDate = '생성일',
  startDate = '시작일',
  endDate = '종료일',
  priority = '우선순위'
}

export const contentList: contentType[] = [
  {
    id: 1,
    titleName: '1번 타이틀',
    createDate: '2023-04-25 18:38',
    startDate: '2023-04-25 19:38',
    endDate: '2023-04-25 20:00',
    priority: 1
  },
  {
    id: 2,
    titleName: '2번 타이틀',
    createDate: '2023-04-26 18:38',
    startDate: '2023-04-26 19:38',
    endDate: '2023-04-26 20:00',
    priority: 1
  },
  {
    id: 3,
    titleName: '3번 타이틀',
    createDate: '2023-04-27 18:38',
    startDate: '2023-04-27 19:38',
    endDate: '2023-04-27 20:00',
    priority: 1
  }
]

interface contentType {
  id: number
  titleName: string
  createDate: string
  startDate: string
  endDate: string
  priority: number
}

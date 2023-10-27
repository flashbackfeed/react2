// IThreadBoard.ts :인터페이스 타입
export default interface IReplyBoard{

    tid?: any|null,
    subject: string,
    mainText: string,
    writer: string,
    views: number,
    tgroup: any|null,
    tparent: any|null
     
    }
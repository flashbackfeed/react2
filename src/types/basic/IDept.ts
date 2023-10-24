export default interface IDept {
    dno?: any | null, // 기본키는 any 그리고 null이 나왔을떄 처리하기위해 앞에 ? 붙이기
    dname: string,
    loc: string
}
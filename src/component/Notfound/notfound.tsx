import { Link } from "react-router-dom"

function NotFound(){
  return(
    <section>
      <h1 className="unknownTitle">404</h1>
      <p className="unknownP">페이지를 찾을 수 없습니다.</p>
      <Link to={'/'}>
        <div className="BtnContainer">
          <button className="unknownBtn">메인으로 가기</button>
        </div>
      </Link>
    </section>
  )
}
export default NotFound
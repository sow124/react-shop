import { Link } from "react-router-dom"


function CartEmpty(){
  return(
    <div className='cartEmptycontainer'>
      <h2 className="cartEmptyTitle">장바구니에 물품이 없습니다.</h2>
      <Link to={'/'}>
        <button className="cartBtn cartemptybtn">담으러 가기</button>
      </Link>
    </div>
  )
}
export default CartEmpty
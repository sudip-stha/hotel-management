import { frontDeskData } from "../../../data/frontDesk"

const IncrementBtn = () => {
  return (
    <div>
      <button className="increase-btn"><img src={frontDeskData.IncAndDecBtn.incrementBtn} alt="" /></button>
    </div>
  )
}

export default IncrementBtn

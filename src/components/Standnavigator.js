export default function Standnavigator({history,isScrollCero}) {
    return <div className="row  corebox_4 mobilecorebox_4 start fore_14 space_between items_center" style={{ opacity: isScrollCero ? 1 : 0, willChange: "opacity" }}>
    <div className="row start items_center space_between mobilepad_r24 maxedviewwidth ">
      <div className="row     start fore_13 pad_r24 uppercase" style={{ width: "unset" }}>
        <div className="f_1 f_m_1  start items_center mobilepad_l24 f600 btn hover " onClick={() => history.push('/')}>Home<div className="to_hover fore_11   start items_center mobilepad_l24">Home</div></div>
        <div className="f_1 f_m_1  pad_l27 row center  mobilepad_l24 f600 btn hover " >News<div className="to_hover fore_11  row center items_center pad_l27 mobilepad_l24">News</div></div>
        <div className="f_1 f_m_1  pad_l27 row center  mobilepad_l24 f600 btn hover " >Events<div className="to_hover fore_11  row center items_center pad_l27 mobilepad_l24">Events</div></div>
      </div>
    </div>

    <div className="row end items_center corebox_4 mobilecorebox_4" style={{width: "unset"}}>
      <div className="  row center corebox_x3">
        <div className="maskicon_linkedin  " />
      </div>
      <div className="  row center corebox_x3">
        <div className="maskicon_github  " />
      </div>
      <div className="  row center corebox_x3">
        <div className="maskicon_twitter  " />
      </div>
    </div>
  
  </div>
}
import React from 'react'
import "../css/form.css"
const Webq3 = () => {
  return (
    <div className="webq1container">
    <div>
  
  <input type="radio" id="html" name="fav_language" value="HTML" />
  <label for="html">Personal project</label>
  <br />
  <input type="radio" id="css" name="fav_language" value="CSS" />
  <label for="css">Sole trader/self-employed</label>
  <br />
  <input type="radio" id="aaa" name="fav_language" value="aaa" />
  <label for="aaa">Small business (1-9 employees)</label>
  <br />
  <input type="radio" id="aaa" name="fav_language" value="bbb" />
  <label for="bbb">Medium business (10 - 29 employees)</label>
  <br />
  <input type="radio" id="ccc" name="fav_language" value="ccc" />
  <label for="ccc">Large business (30 - 99 employees)</label>
  <br />
  <input type="radio" id="ddd" name="fav_language" value="ddd" />
  <label for="ddd">Extra large business (100 or more employees)</label>
  <br />
  <input type="radio" id="eee" name="fav_language" value="eee" />
  <label for="eee">Charity/non-profit</label>
  <br />
  <input type="radio" id="ff" name="fav_language" value="ff" />
  <label for="ff">Other</label>
  <br />
  </div>
</div>
  )
}

export default Webq3
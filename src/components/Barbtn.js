import React from 'react'
import {Button,Offcanvas,OffcanvasBody,OffcanvasHeader} from "reactstrap"
const Barbtn = () => {
  return (
    <div>
  <Button
    color="primary"
    onClick={function noRefCheck(){}}
  >
    Open
  </Button>
  <Offcanvas toggle={function noRefCheck(){}}>
    <OffcanvasHeader toggle={function noRefCheck(){}}>
      Offcanvas
    </OffcanvasHeader>
    <OffcanvasBody>
      <strong>
        This is the Offcanvas body.
      </strong>
    </OffcanvasBody>
  </Offcanvas>
</div>
  )
}

export default Barbtn
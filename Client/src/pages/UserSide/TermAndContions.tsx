import React from 'react'
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import Meta from "../../components/Meta/Meta";
import '../../styles/information.css'
import Container from '../../components/Container/Container';
const TermAndContions = () => {
  return (
    <>
    <Meta title={"BookStore"} />
    <BreadCrumb title="TermAndContions"/>
    <Container class1="policy-wrapper py-5 home-wrapper-2">
        
          <div className="row">
            <div className="col-12">
              <div className="policy">

              </div>
            </div>
          </div>
    </Container>
    </>
  )
}

export default TermAndContions
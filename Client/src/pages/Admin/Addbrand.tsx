import CustomInput from '../../components/CustomInput/CustomInput'
import React from 'react'

const Addbrand = () => {
  return (
    <div>
        <h3 className="mb-4 title">Add Brand</h3>
        <div>
            <form action="">
                <CustomInput type='text' label='Enter Blog Category'/>
                <div className="d-flex justify-content-end">
            <button type="submit" className="btn border-0 button px-4 my-4">
              Add Brand
            </button>
          </div>
            </form>
        </div>
    </div>
  )
}

export default Addbrand
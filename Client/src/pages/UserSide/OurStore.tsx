import React, { useEffect, useState } from 'react'
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb.tsx'
import Meta from '../../components/Meta/Meta.tsx'
import '../../styles/ourstore.css'
import { MdOutlineCalendarViewWeek,
       MdOutlineCalendarViewMonth,
       MdGridView,
       MdOutlineViewStream, } from 'react-icons/md'
import ReactStars from "react-rating-stars-component";
import ProductCard from '../../components/ProductCard/ProductCard.tsx'
import Container from '../../components/Container/Container.tsx'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../features/product/productSlice.tsx'
const OurStore = () => {
  const [grid,setGrid] = useState(4);
  const productState = useSelector((state:any) => state?.product?.products)
  const [brands,setBrands] = useState([])
  const [categories,setCategories] = useState([])
  const [tags,setTags] = useState([])
//   Filter States
  const [category,setCategory] = useState([])
  const [tag,setTag] = useState([])
  const [minPrice,setMinPrice] = useState(null)
  const [maxPrice,setMaxPrice] = useState(null)
  const [sort,setSort] = useState(null)
  console.log(sort)
  useEffect(() => {
    let newBrands = []
    let category=[]
    let newtags = []
    for (let index = 0; index < productState.length; index++) {
        const element = productState[index];
        newBrands.push(element.brand) 
        category.push(element.category)
        newtags.push(element.tags)
    }
    setBrands(newBrands)
    setCategories(category)
    setTags(newtags)
  },[productState])
  const dispatch = useDispatch()
  useEffect(()=>{
    getAllProducts();
  },[sort,minPrice,maxPrice])
  const getAllProducts = () => {
      dispatch(getProducts({sort,minPrice,maxPrice}))
  }

  return (
    <div>
        <Meta title={'BookStore'}/>
        <BreadCrumb title="Our Store"/>
        <Container class1="store-wrapper home-wrapper-2 py-5">
             
                <div className="row">
                    <div className="col-3">
                       <div className="filter-card mb-3">
                        <h3 className="filter-title">
                            Shop By Categories 
                        <div>
                            <ul className='ps-0 mt-3'>
                                {/* {
                                categories && [...new Set(categories)].map((item,index) => {
                                    return <li key={index} onClick={() => setCategory(item)}>{item}</li>
                                })
                                } */}
                                <li>Featured Book</li>
                                <li>Famous Book</li>
                                <li>Special Book</li>
                                <li>Beseller Book</li>
                            </ul>
                        </div>
                        </h3>
                       </div>
                       <div className="filter-card mb-3">
                        <h3 className="filter-title">
                            Filter By 
                        </h3>
                        <div>
                           <h5 className="sub-title">
                            Availabtity
                           </h5>
                        <div className="form-check">
                            <input type="checkbox"
                                   className='form-check-input'
                                   value=""
                                   id=""
                                   />
                            <label className="form-check-label" htmlFor="">
                                   In Stock (1)
                            </label>
                        </div>
                        <div className="form-check">
                            <input type="checkbox"
                                   className='form-check-input'
                                   value=""
                                   id=""
                                   />
                            <label className="form-check-label" htmlFor="">
                                   Out of Stock (0)
                            </label>
                        </div>

                        <h5 className="sub-title">
                            Price
                           </h5>
                        <div className="d-flex align-items-center gap-10">
                        <div className="form-floating mb-3">
                            <input type="email"
                                   className='form-control'
                                   placeholder="from"
                                   id="floatingInput"
                                   onChange={(e) => setMinPrice(e.target.value)}
                                   />
                            <label className="price-placeholder" htmlFor="floatingInput">
                                   From...
                            </label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="email"
                                   className='form-control'
                                   placeholder="to"
                                   id="floatingInput1"
                                   onChange={(e) => setMaxPrice(e.target.value)}
                                   />
                            <label className="price-placeholder" htmlFor="floatingInput">
                                   to
                            </label>
                        </div>
                        </div>
                        
                        </div>

                       

                       </div>
                       <div className="filter-card mb-3">
                        <h3 className="filter-title">
                            Products Tags 
                        </h3>
                        <div>
                      <div className="products-tags d-flex flex-wrap align-items-center gap-10">
                           <span className="badge bg-light rounded-3 py-2 px-3 text-secondary">
                           Novel
                           </span>
                           <span className="badge bg-light rounded-3 py-2 px-3 text-secondary">
                           Comic
                           </span>
                           <span className="badge bg-light rounded-3 py-2 px-3 text-secondary">
                           Poem
                           </span>
                           <span className="badge bg-light rounded-3 py-2 px-3 text-secondary">
                           Fairy tale
                           </span>
                           <span className="badge bg-light rounded-3 py-2 px-3 text-secondary">
                           Encyclopedia
                           </span>
                           <span className="badge bg-light rounded-3 py-2 px-3 text-secondary">
                           Thriller book
                           </span>
                           <span className="badge bg-light rounded-3 py-2 px-3 text-secondary">
                           Myth
                           </span>
                           <span className="badge bg-light rounded-3 py-2 px-3 text-secondary">
                           Ghost story
                           </span>
                      </div>
                        </div>
                       </div>
                       <div className="filter-card mb-3">
                        <h3 className="filter-title">
                            RanDom Product
                        </h3>
                        <div>
                                <div className="random-products d-flex gap-15 mb-3 ">
                            <div className="w-25">
                                <img src="images/harypotter4.webp" 
                                     alt="book1" 
                                     className=' img-fluid'
                                     />
                            </div>
                            <div className='w-75'>
                            <h5>
                            Truyện harypotter nổi bật nhất 2023</h5>
                            <ReactStars
                            value={5} 
                            size={24} 
                            activeColor='#ffd700'
                            edit={false}
                               />
                            <b>$1000</b>
                            </div>
                                </div>

                                <div className="random-products d-flex gap-15">
                            <div className="w-25">
                                <img src="images/harypotter4.webp" 
                                     alt="book1" 
                                     className=' img-fluid'
                                     />
                            </div>
                            <div className='w-75'>
                            <h5>
                            Truyện harypotter nổi bật nhất 2023</h5>
                            <ReactStars
                            value={5} 
                            size={24} 
                            activeColor='#ffd700'
                            edit={false}
                               />
                            <b>$1000</b>
                            </div>
                                </div>
                            </div>
                       </div>
                       
                    </div>
                    <div className="col-9 ">
                       <div className="filter-sort-grid mb-4">
                       <div className="d-flex justify-content-between align-items-center">
                       <div className="d-flex align-items-center gap-10">
                     <p className='mb-0 d-block' style={{width:"100px"}}>Sort&nbsp;By:</p>
                     <select name=""
                             id="" 
                             className='form-control form-select'
                             defaultValue={"manual"}
                             onChange={(e) => setSort(e.target.value)}
                             >
                        <option value="manual">Featured</option>
                        <option value="best-selling">
                            Best selling
                        </option>
                        <option value="title">Alphabetically, A-Z</option>
                        <option value="-title">Alphabetically, Z-A</option>
                        <option value="price">Price, low to hight</option>
                        <option value="-price">Price, hight to low</option>
                        <option value="createdAt">Date, old to new</option>  
                        <option value="-createdAt">Date, new to old</option>      
                     </select>
                        </div>
                    <div className="d-flex align-items-center gap-10">
                        <p className="totalproducts mb-0">21 Products</p>
                        <div className="d-flex gap-10 align-items-center grid">
                            <MdOutlineCalendarViewWeek onClick={()=>{setGrid(3)}} className='d-block img-fulid viewlist-icon' alt='grid'/>
                            <MdOutlineCalendarViewMonth onClick={()=>{setGrid(4)}} className='d-block img-fulid viewlist-icon' alt='grid'/>
                            <MdGridView onClick={()=>{setGrid(6)}} className='d-block img-fulid viewlist-icon' alt='grid'/>
                            <MdOutlineViewStream onClick={()=>{setGrid(12)}} className='d-block img-fulid viewlist-icon' alt='grid'/>
                            {/* <img 
                                onClick={()=>{
                                setGrid(3)
                                }}
                                 className='d-block img-fulid viewlist-icon' 
                                 alt='grid'
                                 src="images/gr4.svg"/>
                            <img 
                                 onClick={()=>{setGrid(4)}} 
                                 className='d-block img-fulid viewlist-icon' 
                                 alt='grid'
                                 src="images/gr3.svg"/>
                            <img onClick={()=>{setGrid(6)}} 
                                 className='d-block img-fulid viewlist-icon' 
                                 alt='grid'
                                 src="images/gr2.svg"/>
                            <img onClick={()=>{setGrid(12)}}
                                 className='d-block img-fulid viewlist-icon' 
                                 alt='grid'
                                 src="images/gr.svg"/> */}
                        </div>
                    </div>
                        </div>

                        </div> 
                    
                    <div className="products-list pb-5">
                        <div className="d-flex gap-10 flex-wrap">
                        <ProductCard data={productState} grid={grid}/>
                        {/* <ProductCard data={productState} grid={grid}/>
                        <ProductCard data={productState} grid={grid}/>
                        <ProductCard data={productState} grid={grid}/>   */}
                        </div>
                        
                    </div>
                    
                    </div>
                </div>
             
        </Container>
    </div>
  )
}

export default OurStore
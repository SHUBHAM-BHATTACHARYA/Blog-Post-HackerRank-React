import React, {useState, useEffect} from "react";
import Input from "./Input";
import PostDisplay from "./PostDisplay";
import '../App.css'

function Home() {
  const [blogData, setBlogData] = useState([
  ])
  const [inputData, setInputData]=useState({
    id:-1,
    title:'',
    description:''
  });
  const [id, setId] = useState(1)
  const [deleteId, setDeleteId] = useState(-1)
  const [inputCleared, setInputCleared] = useState(false)

  const handleSave = () =>{
    //if title and description is not empty
    if(inputData.title!=='' && inputData.description!==''){
      setBlogData((prevData)=>
      [...prevData, inputData]
    )
    setId(id+1)
    }
    setInputCleared(true)
    
  }


  useEffect(()=>{
    //console.log("test")
    let updateBlogs = blogData.filter(blog => blog.id !== deleteId) 
    setBlogData(updateBlogs)
    // if(deleteId!=-1){
    //   let dataItem=[]
    // for(let i=0;i<data.length;i++){
    //   let item = {}
    //   //console.log(data[i])
    //   if(data[i].id<deleteId){
    //     //console.log("test1")
    //     item.id=data[i].id
    //     item.title=data[i].title
    //     item.description=data[i].description
    //     dataItem.push(item)
    //   }else if(data[i].id>deleteId){
    //     //console.log("test2")
    //     item.id=data[i].id-1
    //     item.title=data[i].title
    //     item.description=data[i].description
    //     dataItem.push(item)
    //   }
    //   else{
    //     continue
    //   } 
    //   //console.log(dataItem)
    // }
    // setData(dataItem)
    // }
    
  },[deleteId])

  //console.log(blogData)
  //console.log(deleteId)

  return (
    <div className="text-center ma-20">
      <div className="mb-20">
        <Input inputData={inputData} setInputData={setInputData} id={id} inputCleared={inputCleared} setInputCleared={setInputCleared}/>
        <button data-testid="create-button" className="mt-10" onClick={handleSave}>
          Create Post
        </button>
      </div>
      <div className="posts-section">
        <div data-testid="posts-container" className="flex wrap gap-10">
        <PostDisplay key={blogData.length} blogData={blogData} setDeleteId={setDeleteId}/>
        </div>
      </div>
    </div>
  );
}

export default Home;

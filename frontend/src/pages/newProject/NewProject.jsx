import React, { useState }  from 'react'
import { useNavigate } from 'react-router-dom';
//Redux
import { useDispatch } from "react-redux";
import { createPost} from "../../redux/actions/projectAction";


const NewProject = () => {
    const navigate = useNavigate();
const [postTitle, setpostTitle] = useState(); 
const [postDesc, setpostDesc] = useState();
const dispatch = useDispatch();


const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/');
      
       dispatch(createPost(postTitle, postDesc));
       console.log(postTitle);
         console.log(postDesc);
     };

  return (
    <div className="formbody">
    {/* {error ? <Alert severity="error">{error}</Alert> : ''} */}
    <div className="form">
    <input type="text"  label="Note Title"
          id="margin-none"
            placeholder="Project Title"
        
          value={postTitle}
          onChange={(e) => setpostTitle(e.target.value)}/>

          <input type="text" placeholder="Write project Description here....."
          value={postDesc}
          onChange={(e) => setpostDesc(e.target.value)} />

      <div className="button-class">
        <button type="submit"   onClick={handleSubmit}>
          Upload
        </button>
      </div>
    </div>
  </div>
  )
}

export default NewProject
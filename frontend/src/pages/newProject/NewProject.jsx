import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FileBase from 'react-file-base64';
import './newProject.css';

//Redux
import { useDispatch } from 'react-redux';
import { createPost } from '../../redux/actions/projectAction';

const NewProject = () => {
  const navigate = useNavigate();
  const [postTitle, setpostTitle] = useState();
  const [postDesc, setpostDesc] = useState();
  const [postImg, setpostImg] = useState();
  const [postLongDesc, setpostLongDesc] = useState();

  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    navigate('/list');

    dispatch(createPost(postTitle, postDesc, postImg, postLongDesc));
    //console.log(postTitle);
    //console.log(postDesc);
    //console.log(postImg);
  };

  return (
    <div className="formbody2">
      {/* {error ? <Alert severity="error">{error}</Alert> : ''} */}

      <div className="form2">
        <h2 style={{ color: 'white' }}>Upload Your Project</h2>
        <input
          type="text"
          className="input-style"
          label="Note Title"
          id="margin-none"
          placeholder="Project Title"
          value={postTitle}
          onChange={e => setpostTitle(e.target.value)}
        />
        <input
          type="text"
          className="input-style"
          placeholder="Write project Description here....."
          value={postDesc}
          onChange={e => setpostDesc(e.target.value)}
        />
        <input
          type="text"
          className="input-style"
          placeholder="Write project About here....."
          value={postLongDesc}
          onChange={e => setpostLongDesc(e.target.value)}
        />
        {/* //to upload image input */}
        <div className="input-file">
          <FileBase
            type="file"
            placeholder="place image snapshots"
            multiple={false}
            value={postImg}
            onDone={({ base64 }) => setpostImg({ selectedFile: base64 })}
          />
        </div>

        <div className="button-class">
          <button type="submit" onClick={handleSubmit}>
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewProject;

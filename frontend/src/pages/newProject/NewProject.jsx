import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FileBase from 'react-file-base64';

//Redux
import { useDispatch } from 'react-redux';
import { createPost } from '../../redux/actions/projectAction';

const NewProject = () => {
  const navigate = useNavigate();
  const [postTitle, setpostTitle] = useState();
  const [postDesc, setpostDesc] = useState();
  const [postImg, setpostImg] = useState();

  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    navigate('/');

    dispatch(createPost(postTitle, postDesc, postImg));
    console.log(postTitle);
    console.log(postDesc);
    console.log(postImg);
  };

  return (
    <div className="formbody">
      {/* {error ? <Alert severity="error">{error}</Alert> : ''} */}

      <div className="form">
        <h2 style={{ color: 'white' }}>Upload Your Project</h2>
        <input
          type="text"
          label="Note Title"
          id="margin-none"
          placeholder="Project Title"
          value={postTitle}
          onChange={e => setpostTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Write project Description here....."
          value={postDesc}
          onChange={e => setpostDesc(e.target.value)}
        />
        {/* //to upload image input */}
        <div
          className="fileInput"
          style={{ border: 'none', display: 'flex', justifyContent: 'center', width: '50%' }}
        >
          <FileBase
            type="file"
            placeholder="place image snapshots"
            style={{ border: 'none', display: 'flex', justifyContent: 'center', width: '100%' }}
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

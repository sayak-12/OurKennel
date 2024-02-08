import { useCallback, useState, useRef } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from "axios";

function MyDropzone() {
  const [file, setFile] = useState(null);
  const inputFileRef = useRef(null); // Ref for accessing the input element


  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
    setFile({url:URL.createObjectURL(acceptedFiles[0]), file : acceptedFiles[0]});
  }, []);
  const profpicsubmit =(e)=>{
    e.preventDefault();
    console.log(file);
    axios.post("http://localhost:3000/upload", file.file)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  }
  
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <form method="post" encType="multipart/form-data" onSubmit={profpicsubmit}>
      <div
        {...getRootProps({
          className: 'filewrapper',
          style: file ? { backgroundImage: `url(${file.url})` } : null,
        })}
      >
        <input {...getInputProps({ className: 'file', accept: "image/*", ref: inputFileRef })} />
        {isDragActive ? (
          <span style={{ position: 'absolute' }}>Drop the files here</span>
        ) : (
          <span style={{ position: 'absolute' }}>{file ? '' : 'Drag and drop or select file'}</span>
        )}
      </div>
      {file ? (
        <div className='buttonwrapper'>
          <div className="btn btn-danger" onClick={() => setFile(null)}>
            Clear Image
          </div>
          <button type="submit" className="btn btn-primary">
            Submit Image
          </button>
        </div>
      ) : (
        <div className="btn btn-primary" onClick={() => inputFileRef.current.click()}>
          Select Image
        </div>
      )}
    </form>
  );
}

export default MyDropzone;

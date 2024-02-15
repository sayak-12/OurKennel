import { useCallback, useState, useRef } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from "axios";
import { useFormContext } from "../hooks/formContext";
function MyDropzone() {
  const [file, setFile] = useState(null);
  const inputFileRef = useRef(null); // Ref for accessing the input element
  const { handleSuccess, successMessage} = useFormContext();
  const [error, setError] = useState(null)
  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
    setFile(acceptedFiles[0]);
  }, []);
  const handlechange = (e)=>{
    console.log(e.target.files[0]);
    setFile(e.target.files[0])
  }
  const profpicsubmit =(e)=>{
    e.preventDefault();
    console.log("file:",file);
    var formData = new FormData();
    formData.append("file" , file);
    var token = JSON.parse(localStorage.getItem("user"));
    axios.post("http://localhost:3000/upload", formData)
    .then((response) => {
      console.log("upload response: ", response);
      axios.post("http://localhost:3000/update", {type:"profilepic", url: response.data.uploadResults.secure_url, token})
      .then((res)=>{
        console.log("update response",res);
        handleSuccess("Profile Updated Successfully!")
      })
    })
    .catch((error) => {
      console.log(error);
    });
  }
  
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <form action='/upload' method="post" encType="multipart/form-data" onSubmit={profpicsubmit}>
      <div
        {...getRootProps({
          className: 'filewrapper',
          style: file ? { backgroundImage: `url(${URL.createObjectURL(file)})` } : null,
        })}
      >
        <input {...getInputProps({ className: 'file', accept: "image/*", ref: inputFileRef })} onChange={handlechange} name='file' />
        {isDragActive ? (
          <span style={{ position: 'absolute' }}>Drop the files here</span>
        ) : (
          <span style={{ position: 'absolute' }}>{file ? '' : 'Drag and drop or select file'}</span>
        )}
      </div>
      {successMessage == "" ? "":(
        <div className="success">{successMessage}</div>
      )}
      {
        error && (<div className='error'>{error}</div>)
      }
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

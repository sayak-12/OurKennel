import {useCallback, useState, useEffect} from 'react'
import {useDropzone} from 'react-dropzone';

function MyDropzone() {
    const [file, setFile] = useState(null);
    useEffect(()=>{
        console.log(file);
    }, [file])
  const onDrop = useCallback((acceptedFiles) => {

    console.log(acceptedFiles);
    setFile(URL.createObjectURL(acceptedFiles[0]));
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <form>
    <div {...getRootProps(
        { className: 'filewrapper', style: file ? { backgroundImage: `url(${file})` } : null 
    }
    )}>

      <input {...getInputProps({className:'file'})} />
      {
        isDragActive? 
        (<span style={{position: "absolute"}}>Drop the files here</span>):
        (
            <span style={{position: "absolute"}}>{file? "":"Drag and drop or select file"}</span>
        )
      }
    </div>
    <div className="btn btn-danger">Clear Image</div>
    <button type="submit" className="btn btn-danger">Submit Image</button>
    </form>
  )
}
export default MyDropzone;
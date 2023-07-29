import "./styles.css";
import { useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useForm } from "react-hook-form";

export default function App() {
  const {
    register,
   
    formState: { errors }
  } = useForm();

  useEffect(() => {
   
  }, [register]);

 

  const onEditorStateChange = (data) => {
    console.log(data);
  };
 

  return (
    <div className="App">
      <ReactQuill
        theme="snow"
        
        onChange={onEditorStateChange}
      />
      <p className="Error">{errors.emailContent && "Enter valid content"}</p>
     
    </div>
  );
}

import { CloudUpload } from "lucide-react";
import { useRef } from "react";
function File() {
  const fileInput = useRef(null);

  const handleUpload = () => {
    console.log(fileInput.current.click());
  };
  return (
    <>
      <input type="file" ref={fileInput} style={{display:"none"}} />
      <CloudUpload onClick={handleUpload} />
    </>
  );
}

export default File;

import React, { useState } from "react";
import Dropzone from "react-dropzone";

// component import
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const FileUploadComponent = ({ setProfileImg }) => {

   const [selectedFiles, setSelectedFiles] = useState(undefined);

   const onDrop = (files) => {
      if (files.length > 0) {
         setSelectedFiles(files);
         setProfileImg(files[0]);
      }
   };

   return (
      <div>
         <Dropzone onDrop={onDrop} multiple={false} accept='image/*'>
            {({ getRootProps, getInputProps }) => (
               <section>
                  <div {...getRootProps({ className: "dropzone" })} >
                     <input {...getInputProps()} />
                     {selectedFiles && selectedFiles[0].name ? (
                        <div className="file-continer-th">
                           {selectedFiles && selectedFiles[0].name}
                        </div>
                     ) : (
                        <div className="file-continer-th">
                           <CloudUploadIcon />
                           Drag and drop<br />
                           profile image here.
                        </div>
                     )}
                  </div>
               </section>
            )}
         </Dropzone>
      </div>
   )
};

export default FileUploadComponent;

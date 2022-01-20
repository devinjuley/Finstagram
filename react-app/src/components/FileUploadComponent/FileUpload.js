import React, { useState } from "react";
import Dropzone from "react-dropzone";

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
         <Dropzone onDrop={onDrop} multiple={false}>
            {({ getRootProps, getInputProps }) => (
               <section>
                  <div {...getRootProps({ className: "dropzone" })}>
                     <input {...getInputProps()} />
                     {selectedFiles && selectedFiles[0].name ? (
                        <div className="selected-file">
                           {selectedFiles && selectedFiles[0].name}
                        </div>
                     ) : (
                        "Drag and drop file here, or click to select file"
                     )}
                  </div>
               </section>
            )}
         </Dropzone>
      </div>
   )
};

export default FileUploadComponent;

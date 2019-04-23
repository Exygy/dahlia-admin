import React from 'react'
import Dropzone from 'react-dropzone'
import FormGroup from '../../atoms/FormGroup'

const ListingFormSectionsTesting = ({ listing }) => {
  return (
    <FormGroup>
      <Dropzone onDrop={acceptedFiles => processFiles(acceptedFiles)}>
        {({getRootProps, getInputProps}) => (
          <section>
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <p>Drag those drops here, or click to select boobs</p>
            </div>
          </section>
        )}
      </Dropzone>
    </FormGroup>
  )
}

const processFiles = files => {
  console.log('processing the files!')
  console.log(files[0].name)
}

export default ListingFormSectionsTesting

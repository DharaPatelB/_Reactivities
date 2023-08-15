//import { useField } from 'formik';
//import React, { useEffect, useState } from 'react';
//import { Button, Form, Grid, Header, Image } from 'semantic-ui-react';
//import PhotoWidgetCropper from './PhotoWidgetCropper';
//import PhotoWidgetDropzone from './PhotoWidgetDropzone';

//interface Props {
//    loading: boolean;
//    uploadPhoto: (file: Blob) => void;
//}

//export default function PhotoUploadWidget({ loading, uploadPhoto }: Props) {
//    const [files, setFiles] = useState<any>([]);
//    const [cropper, setCropper] = useState<Cropper>();

//    function onCrop() {
//        if (cropper) {
//            cropper.getCroppedCanvas().toBlob(blob => uploadPhoto(blob!));
//        }
//    }

//    useEffect(() => {
//        return () => {
//            files.forEach((file: any) =>
//                URL.revokeObjectURL(file.preview))
//        }
//    }, [files])

//    return (
//        <Grid>
//            <Grid.Column width={4}>
//                <Header sub color='teal' content='Step 1 - Add Photo' />
//                <PhotoWidgetDropzone setFiles={setFiles} />
//            </Grid.Column>
//            <Grid.Column width={1} />
//            <Grid.Column width={4}>
//                <Header sub color='teal' content='Step 2 - Resize image' />
//                {files && files.length > 0 && (
//                    <PhotoWidgetCropper setCropper={setCropper} imagePreview={files[0].preview} />
//                )}
//            </Grid.Column>
//            <Grid.Column width={1}/>
//            <Grid.Column width={4}>
//                <Header sub color='teal' content='Step 3 - Preview & Upload' />
               
//                {files && files.length > 0 &&
//                    <>
//                        <div className='img-preview' style={{ minHeight: 200, overflow: 'hidden' }} />
//                    <Button.Group widths={2}>
//                        <Button loading={loading} onClick={onCrop} positive icon='check' />
//                        <Button disabled={loading} onClick={() => setFiles([])} icon='close' />
//                        </Button.Group>
//                    </>
//                }
//            </Grid.Column>
//        </Grid>
//    )
//}







import React, { useEffect, useState } from 'react';
import { Button, Form, Grid, Header, Image } from 'semantic-ui-react';
import PhotoWidgetDropzone from './PhotoWidgetDropzone';
import PhotoWidgetCropper from './PhotoWidgetCropper';



export default function PhotoUploadWidget() {
    const [files, setFiles] = useState<any>([]);
      const [cropper, setCropper] = useState<Cropper>();

    function onCrop() {
        if (cropper) {
            cropper.getCroppedCanvas().toBlob(blob => console.log(blob));   //uploadPhoto(blob!));
        }
    }

    useEffect(() => {
        return () => {
            files.forEach((file: any) => {
                return URL.revokeObjectURL(file.preview)
            });
        }
    }, [files])
    //useEffect(() => {
    //    return () => {
    //        files.forEach((file: any) => URL.revokeObjectURL(file.preview))
    //    }
    //},[files])

    return (
        <Grid>
            <Grid.Column width={4}>
                <Header sub color='teal' content='Step 1 - Add Photo' />
                <PhotoWidgetDropzone setFiles={setFiles} />  
            </Grid.Column>
            <Grid.Column width={1} />
            <Grid.Column width={4}>
                <Header sub color='teal' content='Step 2 - Resize image' />
                {files && files.length > 0 && (
                   /* <Image src={files[0].preview }/>*/
                    <PhotoWidgetCropper setCropper={setCropper} imagePreview={files[0].preview} />
                )}
            </Grid.Column>
            <Grid.Column width={1} />
            <Grid.Column width={4}>
                <Header sub color='teal' content='Step 3 - Preview & Upload' />
               
                        <div className='img-preview' style={{ minHeight: 200, overflow: 'hidden' }} />
                        
            </Grid.Column>
        </Grid>
    )
}
import {forwardRef, useEffect, useImperativeHandle, useState} from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Camera as CameraExpo } from 'expo-camera';

export default function Camera() {
    const [type, setType] = useState(CameraExpo.Constants.Type.back);
    const [hasPermission, setHasPermission] = useState(null);

    useEffect(() => {
        async function getPermission() {
            const { status } = await CameraExpo.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        }

        getPermission();
    }, []);

    if(hasPermission === null) {
        return <View />;
    }

    if(hasPermission === false) {
        return <Text>Acesso a camera negado.</Text>;
    }

    return (
        <View className="flex-1">
            <CameraExpo className="flex-1" />
        </View>
    );
}

// const Camera = forwardRef(({setCameraVisible, onCapture}, ref) => {
//     const [facing, setFacing] = useState<CameraType>('back');
//     const [permission, requestPermission] = useCameraPermissions();
//     const [dialogGrantCamera, setDialogGrantCamera] = useState(true);
//     const [cameraRef, setCameraRef] = useState(null);

//     const toggleCameraFacing = () => {
//         setFacing(current => (current === 'back' ? 'front' : 'back'));
//     }

//     const closeCamera = () => {
//         setCameraVisible(false);
//     }

//     useImperativeHandle(ref, () => ({
//             takePicture: async () => {
//                 if (cameraRef) {
//                     const photo = await cameraRef.takePictureAsync({
//                         base64: false,
//                         quality: 1,
//                         scale: 1
//                     });
//                     console.log(photo)
//                     onCapture(photo);
//                     closeCamera();
//                 }
//             },
//         }),
//     );

//     if (!permission) {
//         return <View />;
//     }

//     if (!permission.granted) {
//         return (
//             <Dialog
//                 icon={"alert"}
//                 title={"Permitir câmera"}
//                 text={"Deseja permitir que o aplicativo acesse sua câmera?"}
//                 visible={dialogGrantCamera}
//                 setVisibility={setDialogGrantCamera}
//                 onDismiss={() => setDialogGrantCamera(false)}
//                 actions={[
//                     {
//                         text: "Cancelar",
//                         onPress: () => {
//                             setDialogGrantCamera(false);
//                             setCameraVisible(false);
//                         }
//                     },
//                     {
//                         text: "Permitir",
//                         onPress: async () => {
//                             await requestPermission();
//                             setDialogGrantCamera(false);
//                             setCameraVisible(false);
//                         }
//                     }
//                 ]}
//             />
//         );
//     }

//     return (
//         <Modal style={styles.container}>
//             <CameraView
//                 ref={(ref) => setCameraRef(ref)}
//                 style={styles.camera} facing={facing}>
//                 <Fab
//                     onPress={closeCamera}
//                     icon="close"
//                     style={styles.closeButton}
//                 />
//                 <View style={styles.buttonContainer}>
//                     <View style={styles.button}>
//                         <TouchableOpacity >
//                             <Fab
//                                 onPress={() => ref.current.takePicture()}
//                                 icon="camera"
//                                 style={styles.takePicture}
//                             />
//                         </TouchableOpacity>
//                         <TouchableOpacity>
//                             <Fab
//                                 onPress={toggleCameraFacing}
//                                 icon="camera-flip"
//                                 style={styles.takePicture}
//                             />
//                         </TouchableOpacity>
//                     </View>
//                 </View>
//             </CameraView>
//         </Modal>
//     );
// })

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//     },
//     closeButton: {
//         position: 'absolute',
//         zIndex: 999,
//         top: 10,
//         right: 10,
//         borderRadius: 100
//     },
//     takePicture: {
//         borderRadius: 100
//     },
//     message: {
//         textAlign: 'center',
//         paddingBottom: 10,
//     },
//     camera: {
//         flex: 1,
//     },
//     buttonContainer: {
//         position: 'relative',
//         flex: 1,
//         flexDirection: 'row',
//         backgroundColor: 'transparent',
//         margin: 64,
//     },
//     button: {
//         flex: 1,
//         zIndex: 999,
//         alignSelf: 'flex-end',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         flexDirection: 'row',
//     },
//     text: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         color: 'white',
//     },
// });

// export default Camera;

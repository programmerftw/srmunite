import { useFonts } from 'expo-font';

export default function CustomFonts() {
    const [fontloaded] = useFonts({
        'Poppins-Thin': require('../../assets/fonts/Poppins-Thin.ttf'),
        'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
        'Poppins-Medium': require('../../assets/fonts/Poppins-Medium.ttf'),
        'Poppins-SemiBold': require('../../assets/fonts/Poppins-SemiBold.ttf'),
        'Poppins-Black': require('../../assets/fonts/Poppins-Black.ttf'),
        'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
        'Ribeye': require('../../assets/fonts/Ribeye-Regular.ttf'),
        'Rochester': require('../../assets/fonts/Rochester-Regular.ttf'),
    });
    return fontloaded;
}
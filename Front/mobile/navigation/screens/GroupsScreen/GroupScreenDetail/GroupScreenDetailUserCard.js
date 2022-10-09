import { View, Image, Text } from "react-native"
import { groupScreenDetailStyles } from "./GroupScreenDetailStyles"
import assets from "../../../../constants/assets"
import GroupsScreenStyles from "../GroupsScreenStyles"

const GroupScreenDetailUserCard = () => {
  return (
    <View style={groupScreenDetailStyles.contenedor_lista_usuarios_grupo}>
    <Image style={groupScreenDetailStyles.image_profile} source={assets.profile_picture} />
    <View style={GroupsScreenStyles.contenedor_subtitulos}>
        <Text
            style={groupScreenDetailStyles.nombre_usuario_lista}>
            John Doe
        </Text>
        
    </View>
</View>
  )
}

export default GroupScreenDetailUserCard
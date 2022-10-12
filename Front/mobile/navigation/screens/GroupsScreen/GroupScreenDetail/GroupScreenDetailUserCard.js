import { View, Image, Text } from "react-native"
import { GroupScreenDetailStyles } from "./GroupScreenDetailStyles"
import assets from "../../../../constants/assets"
import {GroupsScreenStyles} from "../GroupsScreenStyles"

const GroupScreenDetailUserCard = () => {
  const groupsScreenStyles = GroupsScreenStyles();
  const groupScreenDetailStyles = GroupScreenDetailStyles();

  return (
    <View style={groupScreenDetailStyles.contenedor_lista_usuarios_grupo}>
    <Image style={groupScreenDetailStyles.image_profile} source={assets.profile_picture} />
    <View style={groupsScreenStyles.contenedor_subtitulos}>
        <Text
            style={groupScreenDetailStyles.nombre_usuario_lista}>
            John Doe
        </Text>
        
    </View>
</View>
  )
}

export default GroupScreenDetailUserCard
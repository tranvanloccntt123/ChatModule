import { ImageSourcePropType } from "react-native";
import { AVATAR_DEFAULT } from "../assets/images";

interface USER{
    name: string,
    avatar: ImageSourcePropType,
    setName: Function
}

let localUser:USER = {
    name: "Default name",
    avatar: AVATAR_DEFAULT,
    setName: function(newName: string){
        this.name = newName
        console.log(this.name)
    }
}

export const user:USER = localUser;
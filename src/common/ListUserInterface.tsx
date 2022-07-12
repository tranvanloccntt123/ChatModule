import { ImageSourcePropType } from "react-native";

export interface ListUserInterface{
    id: Number | string,
    name: string,
    avatar: ImageSourcePropType,
    lastChat: string,
    lastTime: any
}
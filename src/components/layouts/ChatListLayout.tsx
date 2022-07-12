import React, {ReactNode} from "react";
import { View, Image, StyleSheet, Dimensions, Text } from "react-native";
import { AppStyle } from "../../assets/AppStyle";
import { black, blue, gray, green } from "../../assets/Colors";
import { user } from "../../sevices/ChatConfig";
const {width, height} = Dimensions.get("window");
interface LayoutProps{
    children?: ReactNode,
    rightHeader?: ReactNode
};
const style = StyleSheet.create({
    header: {
        flexDirection: "row",
        width: "100%",
        borderBottomWidth: 1,
        borderBottomColor: gray+45,
        alignItems: "center",
    },
    avatar: {
        width: "100%",
        height: "100%",
        borderRadius: width,
        resizeMode: "contain"
    },
    avatarContainer: {
        width: 25,
        height: 25,
        borderRadius: width,
        overflow: "hidden",
        elevation: 2
    },
    name: {
        color: black,
        fontSize: 15,
        fontWeight: "bold"
    },
    status: {
        color: green,
        fontSize: 11,
        fontWeight: "bold"
    }
});

export default function ChatListLayout(props: LayoutProps){
    return <View style={AppStyle.container}>
        <View style={[style.header, AppStyle.p3]}>
            <View style={style.avatarContainer}>
                <Image source={user.avatar} style={style.avatar} />
            </View>
            <View style={AppStyle.ml3}>
                <Text style={[style.name]}>{user.name}</Text>
                <Text style={style.status}>Online</Text>
            </View>
            <View style={{flex: 1}} />
            {props.rightHeader}
        </View>
        {
            props.children
        }
    </View>
}
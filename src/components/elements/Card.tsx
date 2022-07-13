import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { AppStyle } from "../../assets/AppStyle";
import { black, gray } from "../../assets/Colors";
import { ListUserInterface } from "../../common/ListUserInterface";
interface CardProps{
    item: ListUserInterface,
    index: number,
    onPress?: Function
}

const style = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: "100%",
        borderBottomWidth: 0.3,
        borderBottomColor: gray+80,
    },
    name: {
        color: black,
        fontSize: 15
    },
    lastChat: {
        fontSize: 12,
        maxWidth: "80%",
        flex: 1
    },
    avatar: {
        width: 35,
        height: 35,
        borderRadius: 35,
        backgroundColor: "white",
        resizeMode: "contain"
    },
    lastTime: {
        fontSize: 11,
        color: black
    }
});
export default function Card(props: CardProps){
    function onPress(){
        const handle = props.onPress? props.onPress() : () => {};
        handle;
    }
    return <TouchableOpacity onPress={onPress} activeOpacity={0.8} style={[style.container, AppStyle.p3]}>
        <Image source={props.item.avatar} style={[style.avatar]} />
        <View style={[AppStyle.ml3, {width: "100%"}]}>
            <Text style={[style.name]}>{props.item.name}</Text>
            <View style={{flexDirection: "row", width: "100%"}}>
                <Text style={[style.lastChat]}>{props.item.lastChat}</Text>
                <Text style={style.lastTime}>{props.item.lastTime}</Text>
            </View>
        </View>
    </TouchableOpacity>
}
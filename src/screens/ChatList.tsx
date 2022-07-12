import React from "react";
import { Text, FlatList } from "react-native";
import { AppStyle } from "../assets/AppStyle";
import { AVATAR_DEFAULT } from "../assets/images";
import { CHAT_DETAIL_SCREEN } from "../common/ChatRouteName";
import { ListUserInterface } from "../common/ListUserInterface";
import { ScreenInterface } from "../common/ScreenInterface";
import Card from "../components/elements/Card";
import ChatListLayout from "../components/layouts/ChatListLayout";

const testListChart:Array<ListUserInterface> = [
    {
        id: 0,
        name: "User name",
        avatar: AVATAR_DEFAULT,
        lastChat: "Content....",
        lastTime: "12:30"
    },
    {
        id: 1,
        name: "User name",
        avatar: AVATAR_DEFAULT,
        lastChat: "Content....",
        lastTime: "12:30"
    },
    {
        id: 2,
        name: "User name",
        avatar: AVATAR_DEFAULT,
        lastChat: "Content....",
        lastTime: "12:30"
    },
    {
        id: 3,
        name: "User name",
        avatar: AVATAR_DEFAULT,
        lastChat: "Content....",
        lastTime: "12:30"
    },
    {
        id: 4,
        name: "User name",
        avatar: AVATAR_DEFAULT,
        lastChat: "Content....",
        lastTime: "12:30"
    }
];

export default function ChatList(props: ScreenInterface){
    const [data, setData] = React.useState<Array<ListUserInterface>>(testListChart);
    const renderItem = (itemProps: {item : any, index : any}) => {
        return <Card {...itemProps} onPress={() => props.navigation?.navigate(CHAT_DETAIL_SCREEN, {item: itemProps.item})} />
    }
    return <ChatListLayout>
       <FlatList
            data={data}
            keyExtractor={(item, index) => `chat-list-${item.id}`}
            renderItem={renderItem}
            extraData={data}
       />
    </ChatListLayout>
}
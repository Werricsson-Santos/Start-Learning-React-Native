import axios from "axios";
import React, { useState, useEffect } from "react";
import { FlatList, Text, View } from "react-native";
import { Container } from "../../../Components";

export default function API() {
    const [ post, setPost ] = useState();

    const fetchPostApi = async () => {
        const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
        setPost( res.data );
    };
    useEffect(() => {
        fetchPostApi();
    }, []);

    const renderPost = ({item}) => (
        <View>
            <Text>ID: {item.id}</Text>
            <Text>Título: {item.title}</Text>
            <Text>Post: {item.body}</Text>
        </View>
    );

    return(
        <Container>
            <FlatList data={post} renderItem={renderPost} keyExtractor={(item) => item.id} />
        </Container>
    );
}
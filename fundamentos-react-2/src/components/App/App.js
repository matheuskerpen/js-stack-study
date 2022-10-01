import React, { useState } from 'react'
import { Post } from "../Post/Post";
import { Header } from "../Header/Header";
import { ThemeProvider } from "../../context/ThemeContext";
import { Title } from "./styles";

export function App() {
    const [posts, setPosts] = useState([
        { id: Math.random(), title: "Title#01", subtitle: "Sub#01", likes: 123, read: false, removed: false },
        { id: Math.random(), title: "Title#02", subtitle: "Sub#02", likes: 43, read: true, removed: false },
        { id: Math.random(), title: "Title#03", subtitle: "Sub#03", likes: 13, read: false, removed: true },
    ]);

    function handleRefresh() {
        setPosts((prevState) => [
            ...prevState,
            {
                id: Math.random(),
                title: `Title#0${prevState.length + 1}`,
                subtitle: `Sub#0${prevState.length + 1}`,
                likes: 0,
                read: false,
                removed: false
            }
        ])
    }

    function handleRemovePost(postId) {
        setPosts((prevState => (
            prevState.map(
                post => (
                    post.id === postId
                        ? { ...post, removed: true}
                        : post
                )
            )
        )))
    }

    return (
        <ThemeProvider>
            <Header subtitle={"Posts da semana"}>
                <Title as="h2">
                    Posts da semana
                    <button onClick={handleRefresh}>
                        Atualizar
                    </button>
                </Title>
            </Header>
            <hr/>
            {posts.map(post => (
                <Post
                    key={post.id}
                    post={post}
                    onRemove={handleRemovePost}
                />
            ))}
        </ThemeProvider>
    )
}
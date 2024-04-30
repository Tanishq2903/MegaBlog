import React, {useEffect, useState} from 'react'
import appwriteService from "../appwrite/config";
import {Container, PostCard} from '../components'

function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])
  
    if (posts.length  == 0) {
        return (
            <div className="w-full py-8 mt-4 justify-self-center ">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full flex flex-col">
                            <h1 className="text-2xl font-bold">

                                Welcome!Please Login To Continue
              
                            </h1>
                            <img src='https://images.pexels.com/photos/5076522/pexels-photo-5076522.jpeg?auto=compress&cs=tinysrgb&w=600'></img>
                        </div>
              
                
                    </div>
                </Container>
            </div>
        )
    }
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home
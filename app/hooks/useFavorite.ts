'use client'

import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import { User } from "../generated/prisma";

import useLoginModal from "./useLoginModel";
import React, { useCallback, useMemo } from "react";

interface IUseFavorite {
    listingId: string,
    currentUser?: User | null
}

const useFavorite = ({
    listingId,
    currentUser
}: IUseFavorite) => {

    const router = useRouter()
    const loginModal = useLoginModal()

    const hasFavorited = useMemo(() => {
        const list = currentUser?.favoriteIds || []

        return list.includes(listingId)
    }, [currentUser, listingId])

    const toggleFavorite = useCallback(async (
        e: React.MouseEvent<HTMLDivElement>
    ) => {
        e.stopPropagation()

        if(!currentUser){
            return loginModal.onOpen()
        }

        try {
            let request 

            if(hasFavorited){
                request = () => axios.delete(`/api/favorites/${listingId}`)
            } else {
                request = () => axios.post(`/api/favorites/${listingId}`)
            }

            await request()
            router.refresh()
            toast.success('Success')
        } catch(error) {
            console.log('error in try block', error)
            toast.error('Something went wrong.')
        }
    }, [
        currentUser,
        hasFavorited,
        listingId,
        loginModal,
        router
    ])

    return {
        hasFavorited,
        toggleFavorite
    }
}

export default useFavorite
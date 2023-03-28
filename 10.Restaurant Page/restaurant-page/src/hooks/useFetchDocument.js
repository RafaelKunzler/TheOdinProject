import { useState, useEffect } from "react"
import { db } from "../firebase/config"
import {
    collection,
    query,    
    onSnapshot,     
} from "firebase/firestore"

export const useFetchDocuments = (docCollection) => {

    const [ documents, setDocuments ] = useState(null);

    useEffect(() => {
        async function loadData() {
            const collectionRef = await collection(db, docCollection);

            try {
                let q = await query(collectionRef)

                await onSnapshot(q, (querySnapshot) => {
                    setDocuments(
                        querySnapshot.docs.map((doc) => ({
                            id: doc.id,
                            ...doc.data(),
                        }))
                    )
                })
            } catch (error) {
                console.log(error)
            }

        }

        loadData();
    }, [docCollection])

    return { documents }
}
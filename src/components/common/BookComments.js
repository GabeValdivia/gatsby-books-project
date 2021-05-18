import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

const CommentListItem = styled.div `
    >strong {
        font-size: 80%;
        color: #666;
    }

    border-bottom: 1px solid #ddd;
    padding: 4px 0;
`;

export const BookComments = ({firebase, bookId}) => {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        const unsubscribe = firebase.subscribeToBookComments({
            bookId,
            onSnapshot: (snapshot) => {
                console.log(snapshot);
                const snapshotComments = [];
                snapshot.forEach(doc => {
                    snapshotComments.push({
                        id: doc.id,
                        ...doc.data()
                    })
                })

                setComments(snapshotComments);
            }
        })

        return () => {
            if(unsubscribe){
                unsubscribe();
            }
        }

    }, [])

    console.log(comments);

    return(
        <div>
            {comments.map(comment => (
                <CommentListItem key={comment.id}>
                    <strong>
                        {comment.username}
                    </strong>
                    <div>                        
                        {comment.text}
                    </div>
                </CommentListItem>
            ))}
            
        </div>
    )
}
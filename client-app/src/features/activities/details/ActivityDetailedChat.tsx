import { Formik, Form, Field, FieldProps } from 'formik';
import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Segment, Header, Comment, Button, Loader } from 'semantic-ui-react'
import CommentStore from '../../../app/stores/commentStore';
import { useStore } from '../../../app/stores/store';
import *  as Yup from 'yup';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

interface Props {
    activityId: string;
}

export default observer(function ActivityDetailedChat({ activityId }: Props) {
    const { commentStore } = useStore();

    useEffect(() => {
        if (activityId) {
            commentStore.createHubConnection(activityId);
        }
        return () => {
            commentStore.clearComments();
         }
    },[CommentStore, activityId]);

   

    return (
        <>
            <Segment
                textAlign='center'
                attached='top'
                inverted
                color='teal'
                style={{ border: 'none' }}
            >
                <Header>Chat about this event</Header>
            </Segment>
            <Segment attached clearing>
                <Formik
                    onSubmit={(values, { resetForm }) =>
                        commentStore.addComment(values).then(() => resetForm())}
                    initialValues={{ body: '' }}
                    validationSchema={Yup.object({
                        body: Yup.string().required()
                    })}
                >
                    {({ isSubmitting, isValid, handleSubmit }) => (
                        <Form className='ui form'>
                            <Field name='body'>
                                {(props: FieldProps) => (
                                    <div style={{ position: 'relative' }}>
                                        <Loader active={isSubmitting} />
                                        <textarea
                                            placeholder='Enter your comment(Enter to submit, SHIEFT + enter for new line)'
                                            rows={2}
                                            {...props.field}
                                            onKeyPress={e => {
                                                if (e.key === 'Enter' && e.shiftKey) {
                                                    return;
                                                }
                                                if (e.key === 'Enter' && !e.shiftKey) {
                                                    e.preventDefault()
                                                    isValid && handleSubmit();
                                                }
                                            }}

                                        />

                                    </div>
                                )}
                            </Field>
                        </Form>
                    )}
                </Formik>      
                <Comment.Group>
                    {commentStore.comments.map(commnet => (
                        <Comment key={commnet.id}>
                            <Comment.Avatar src={commnet.image || '/assets/user.png'} />
                            <Comment.Content>
                                <Comment.Author as={Link} to={`/profiles/${commnet.username}`}>
                                    {commnet.displayName}
                                </Comment.Author>
                                <Comment.Metadata>
                                    <div>{formatDistanceToNow(commnet.createdAt)} ago</div>
                                </Comment.Metadata>
                                <Comment.Text style={{whiteSpace:'pre-wrap'} }>{commnet.body}</Comment.Text>
                               
                            </Comment.Content>
                        </Comment>
                    ))}

                                  
                   
                </Comment.Group>
            </Segment>
        </>

    )
})


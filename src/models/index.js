// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Note, Blog, Post, Comment } = initSchema(schema);

export {
  Note,
  Blog,
  Post,
  Comment
};
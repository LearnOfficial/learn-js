import { IQueryResolvers } from '@learn/common/schemas';
import { coreInfoResolver } from './core_info';
import { logIn, signUp, userQuery } from './user';
import { createSubject, subjectsQuery } from './subject';
import { createTask, tasksQuery } from './task';
import { createNote, notesQuery } from './note';

const resolvers: IQueryResolvers = {
  Query: {
    coreInfo: coreInfoResolver,
    logIn: logIn,
    user: userQuery
  },
  Mutation: {
    signUp: signUp,
    createSubject: createSubject,
    createTask: createTask,
    createNote: createNote
  },
  IUser: {
    subjects: subjectsQuery
  },
  ISubject: {
    notes: notesQuery,
    tasks: tasksQuery
  }
};

const apolloResolvers: any = resolvers;
export { apolloResolvers };

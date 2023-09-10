import { ISubject } from '@learn/common/entities/subject';
import { ISubjectCreateInput } from '@learn/common/schemas/subject';
import { Subject } from '../../database/entities/subject';
import { IAuthContext } from '@learn/common/schemas';
import { authGuard } from '../../auth';
import { User } from '../../database/entities/user';
import { IUser } from '@learn/common/entities/user';

async function subjectsQuery(
  parent: IUser,
  {}: {},
  _: IAuthContext
): Promise<ISubject[]> {
  const subjects = new Subject().findAllUserRelation(parent);
  return subjects;
}

async function createSubject(
  _: any,
  { subjectCreateInput }: { subjectCreateInput: ISubjectCreateInput },
  authContext: IAuthContext
): Promise<ISubject> {
  const user: User = new User();
  await user.findById(authContext.id!);

  const subject: Subject = new Subject(subjectCreateInput);
  subject.user = user;

  await subject.create();
  return subject;
}

export { createSubject, subjectsQuery };

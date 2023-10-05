import { INote } from '@learn/common/entities/note';
import { authGuard } from '../../auth';
import { IAuthContext } from '@learn/common/schemas';
import { INoteCreateInput } from '@learn/common/schemas/note';
import { Subject } from '../../database/entities/subject';
import { Note } from '../../database/entities/note';
import { ISubject } from '@learn/common/entities/subject';
import { User } from '../../database/entities/user';

async function notesQuery(
  parent: ISubject | null,
  {}: {},
  authContext: IAuthContext
): Promise<INote[]> {
  try {
    await authGuard(authContext);
  } catch (e) {
    throw e;
  }

  const note = new Note();
  let notes: INote[] = [];

  if (parent instanceof Subject) {
    notes = await note.findAllSubjectRelation(parent);
  } else if (parent instanceof User) {
    notes = await note.findAll(parent.id!);
  }

  return notes;
}

async function createNote(
  _: any,
  { noteCreateInput }: { noteCreateInput: INoteCreateInput },
  authContext: IAuthContext
): Promise<INote> {
  try {
    await authGuard(authContext);
  } catch (e) {
    throw e;
  }

  const subject: Subject = new Subject();
  await subject.findByPk(noteCreateInput.idSubject);

  const note: Note = new Note(noteCreateInput);
  note.subject = subject;

  await note.create();
  return note;
}

export { createNote, notesQuery };

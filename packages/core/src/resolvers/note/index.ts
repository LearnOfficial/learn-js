import { INote } from "@learn/common/entities/note";
import { authGuard } from "../../auth";
import { IAuthContext } from "@learn/common/schemas";
import { INoteCreateInput } from "@learn/common/schemas/note";
import { Subject } from "../../database/entities/subject";
import { Note } from "../../database/entities/note";

async function createNote(_: any, { noteCreateInput }: { noteCreateInput: INoteCreateInput }, authContext: IAuthContext): Promise<INote> {
	await authGuard(authContext);

	const subject: Subject = new Subject();
	await subject.findByPk(noteCreateInput.idSubject);

	const note: Note = new Note(noteCreateInput);
	note.subject = subject;


	await note.create();
	return note;
}

export { createNote };

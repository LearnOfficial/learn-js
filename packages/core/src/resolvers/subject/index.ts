import { ISubject } from "@learn/common/entities/subject";
import { ISubjectCreateInput } from "@learn/common/schemas/subject";
import { Subject } from "../../database/entities/subject";
import { IAuthContext } from "@learn/common/schemas";
import { authGuard } from "../../auth";
import { User } from "../../database/entities/user";

async function createSubject(_: any, { subjectCreateInput }: { subjectCreateInput: ISubjectCreateInput }, authContext: IAuthContext): Promise<ISubject> {
	await authGuard(authContext);

	const user: User = new User();
	await user.findByPk(authContext.id!);
	
	const subject: Subject = new Subject(subjectCreateInput);
	subject.user = user;

	await subject.create();
	return subject;
}

export { createSubject };

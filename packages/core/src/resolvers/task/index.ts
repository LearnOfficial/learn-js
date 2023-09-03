import { IAuthContext } from "@learn/common/schemas";
import { ITaskCreateInput } from "@learn/common/schemas/task";
import { authGuard } from "../../auth";
import { Task } from "../../database/entities/task";
import { Subject } from "../../database/entities/subject";
import { ITask } from "@learn/common/entities/task";
import { ISubject } from "@learn/common/entities/subject";

async function tasksQuery(parent: ISubject, { }: {}, _: IAuthContext): Promise<ITask[]> {
	const notes = new Task().findAllSubjectRelation(parent);
	return notes;
}

async function createTask(_: any, { taskCreateInput }: { taskCreateInput: ITaskCreateInput }, authContext: IAuthContext): Promise<ITask> {
	await authGuard(authContext);

	const subject: Subject = new Subject();
	await subject.findByPk(taskCreateInput.idSubject);

	const task: Task = new Task(taskCreateInput);
	task.subject = subject;


	await task.create();
	return task;
}

export { createTask, tasksQuery };

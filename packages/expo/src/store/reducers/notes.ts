import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type NotesStore = {
  notes: Array<NotesStorePayload | null>;
};

export type NotesStorePayload = {
  id?: number;
  title: string;
  description: string;
  body: string;
  subject: {
    title: string;
    color: string;
  };
};

export type NotesStoreState = {
  notes: [NotesStorePayload];
};

const initialState: NotesStore = {
  notes: [
    {
      id: 0,
      title: 'Thermodynamic',
      description: 'Research about heat, work, and temperature.',
      body: 'Thermodynamic notes',
      subject: {
        title: 'Physics',
        color: '#DACEED'
      }
    },
    {
      id: 1,
      title: 'Threats',
      description:
        'Introduction and source code of a simple multi-thread program.',
      body: 'Threats notes',
      subject: {
        title: 'C programming language',
        color: '#CEEDD3'
      }
    },
    {
      id: 2,
      title: 'Integration',
      description:
        'Proof of integration and explanation of the 2 integration theorem.',
      body: 'Integration notes',
      subject: {
        title: 'Mathematics',
        color: '#EDCECE'
      }
    },
    {
      id: 3,
      title: 'Threats',
      description:
        'Introduction and source code of a simple multi-thread program.',
      body: 'Threats notes',
      subject: {
        title: 'C programming language',
        color: '#CEEDD3'
      }
    },
    {
      id: 4,
      title: 'Integration',
      description:
        'Proof of integration and explanation of the 2 integration theorem.',
      body: 'Integration notes',
      subject: {
        title: 'Mathematics',
        color: '#EDCECE'
      }
    }
  ]
};

const notesSlice = createSlice({
  name: 'notes',
  initialState: initialState,
  reducers: {
    createNote(state, actions: PayloadAction<NotesStorePayload>) {
      actions.payload.id = state.notes.length;
      state.notes.push(actions.payload);
    },
    editNote(state, actions: PayloadAction<NotesStorePayload>) {
      state.notes[actions.payload.id!] = actions.payload;
    }
  }
});

export const { createNote, editNote } = notesSlice.actions;
export const notesSliceReducer = notesSlice.reducer;

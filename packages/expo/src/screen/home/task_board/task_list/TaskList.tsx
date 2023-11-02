import { TouchableOpacity, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import PulseRateIcon from '../../../../static/icons/PulseRateIcon';
import CheckIcon from '../../../../static/icons/CheckIcon';
import { Text } from '../../../../components/Text';
import { useState } from 'react';

export type TasksListProps = {
  date: Date;
};

export function TaskList({ date }: TasksListProps) {
  const [tasks, setTasks] = useState([
    {
      state: 'TODO',
      date: new Date(),
      title: 'Search references about thermodynamic',
      subject: {
        title: 'Physics',
        color: '#DACEED'
      }
    },
    {
      state: 'IN-PROGRESS',
      date: new Date(),
      title: 'Search libraries related to threats theory',
      subject: {
        title: 'Physics',
        color: '#DACEED'
      }
    },
    {
      state: 'COMPLETED',
      date: new Date(),
      title: 'Write calculus introduction',
      subject: {
        title: 'Physics',
        color: '#DACEED'
      }
    }
  ]);

  if (date.getDate() !== tasks[0].date.getDate()) {
    return null;
  }

  return (
    <FlatList
      data={tasks}
      contentContainerStyle={{
        alignItems: 'flex-start'
      }}
      ItemSeparatorComponent={() => <View style={{ height: 10 }}></View>}
      renderItem={(task) => {
        return (
          <TouchableOpacity
            onPress={() => {
              const tasksClone = tasks.map((task) => task);
              let curState = tasksClone[task.index].state;

              switch (curState) {
                case 'TODO':
                  curState = 'IN-PROGRESS';
                  break;
                case 'IN-PROGRESS':
                  curState = 'COMPLETED';
                  break;
                case 'COMPLETED':
                  curState = 'TODO';
                  break;
              }

              tasksClone[task.index].state = curState;
              setTasks(tasksClone);
            }}
          >
            <View
              style={{
                gap: 10,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <View
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 5,
                  borderWidth: 1,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                {task.item.state === 'TODO' ? null : task.item.state ===
                  'IN-PROGRESS' ? (
                  <PulseRateIcon width={20} height={20} color="#1E1E1E" />
                ) : (
                  <CheckIcon width={20} height={20} color="#1E1E1E" />
                )}
              </View>
              <Text>{task.item.title}</Text>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
}

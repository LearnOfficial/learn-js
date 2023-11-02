import { TouchableOpacity, View } from 'react-native';
import PulseRateIcon from '../../../../static/icons/PulseRateIcon';
import CheckIcon from '../../../../static/icons/CheckIcon';
import { Dispatch, SetStateAction } from 'react';
import { Text } from '../../../../components/Text';

export type TaskItemProps = {
  state: string;
  title: string;
  setState: Dispatch<SetStateAction<string>>;
};

export function TaskItem({ state, setState, title }: TaskItemProps) {
  return (
    <TouchableOpacity
      onPress={() => {
        setState('IN-PROGRESS');
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
          {state === 'TODO' ? null : state === 'IN-PROGRESS' ? (
            <PulseRateIcon width={20} height={20} color="#1E1E1E" />
          ) : (
            <CheckIcon width={20} height={20} color="#1E1E1E" />
          )}
        </View>
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

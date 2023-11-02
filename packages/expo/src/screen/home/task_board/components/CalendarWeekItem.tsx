import { TouchableOpacity, View } from 'react-native';
import { Text } from '../../../../components/Text';
import { Dispatch, SetStateAction } from 'react';
import { getWeekName } from '../../../../utils/calendar';
import { useSelector } from 'react-redux';

export type CalendarItemProps = {
  curDate: Date;
  setCurDate: Dispatch<SetStateAction<Date>>;
  selectedDate: Date;
};

export function CalendarWeekItem({
  curDate,
  setCurDate,
  selectedDate
}: CalendarItemProps) {
  const isActive = curDate.getDate() === selectedDate.getDate();
  const locale = useSelector((state) => state.settingsSliceReducer.locale);

  return (
    <TouchableOpacity
      onPress={() => {
        setCurDate(selectedDate);
      }}
    >
      <View
        style={{
          width: 60,
          height: 60,
          padding: 10,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 8,
          borderWidth: 1,
          backgroundColor: isActive ? '#1E1E1E' : '#F9FBF4'
        }}
      >
        <Text
          style={{
            color: isActive ? '#F9FBF4' : '#1E1E1E'
          }}
        >
          {getWeekName(locale, selectedDate).slice(0, 3)}
        </Text>
        <Text
          style={{
            color: isActive ? '#F9FBF4' : '#1E1E1E'
          }}
        >
          {selectedDate.getDate()}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

import { TouchableOpacity, View, FlatList } from 'react-native';
import { Text } from '../../../components/Text';
import {
  getDaysInMonth,
  getMonthName,
  getWeekName
} from '../../../utils/calendar';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { CheckBox } from '../../../components/CheckBox';
import { CalendarWeekItem } from './components/CalendarWeekItem';
import { TaskList } from './task_list/TaskList';

export function TaskBoard() {
  const [curDate, setCurDate] = useState<Date>(new Date());
  const days = getDaysInMonth(curDate.getMonth(), 2023);
  const locale = useSelector((state) => state.settingsSliceReducer.locale);
  return (
    <View
      style={{
        padding: 20,
        gap: 20
      }}
    >
      <View style={{ gap: 20 }}>
        <View>
          <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
            {getWeekName(locale, curDate)}
          </Text>
          <Text>
            <Text style={{ color: '#B8B8B8' }}>{curDate.getDate()}</Text>{' '}
            <Text style={{ color: '#B8B8B8' }}>
              {getMonthName(locale, curDate).toLowerCase()}
            </Text>
          </Text>
        </View>

        <FlatList
          data={days}
          horizontal
          ItemSeparatorComponent={() => <View style={{ width: 10 }}></View>}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <CalendarWeekItem
              selectedDate={item}
              setCurDate={setCurDate}
              curDate={curDate}
            />
          )}
        />
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ flex: 2, fontWeight: 'bold', fontSize: 24 }}>Tasks</Text>
        <View style={{ flex: 1 }}>
          <CheckBox>
            <Text>Completed</Text>
          </CheckBox>
        </View>
      </View>
      <TaskList date={curDate} />
    </View>
  );
}

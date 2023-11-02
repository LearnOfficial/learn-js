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
          renderItem={({ item }) => {
            const isActive = curDate.getDate() === item.getDate();
            return (
              <TouchableOpacity
                onPress={() => {
                  setCurDate(item);
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
                    {getWeekName(locale, item).slice(0, 3)}
                  </Text>
                  <Text
                    style={{
                      color: isActive ? '#F9FBF4' : '#1E1E1E'
                    }}
                  >
                    {item.getDate()}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
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
    </View>
  );
}

import { View, Text } from 'react-native';
import { MutableRefObject, useRef } from 'react';
import { Slider, SliderRef } from '../../components/slider';
import {
  FlatCalendarItemRef,
  FlatMonthCalendarItem
} from './FlatMonthCalendarItem';

function getDaysInMonth(month: number, year: number) {
  var date = new Date(year, month, 1);
  var days = [];
  while (date.getMonth() === month) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  return days;
}

export function FlatMonthCalendar() {
  const currentDate: Date = new Date(Date.now());
  const sliderRef = useRef<SliderRef>(null);
  const monthDays = useRef(
    getDaysInMonth(currentDate.getMonth(), currentDate.getFullYear())
  );

  const refs: MutableRefObject<FlatCalendarItemRef>[] = monthDays.current.map(
    () => {
      return useRef(null as any);
    }
  );

  const lastItemIndex = useRef<number>(0);
  const dayTextRef = useRef<Text>(null);
  const dayNumberTextRef = useRef<Text>(null);

  const changeCurrentDay = (index: number) => {
    refs[index].current.changeState(true);
    refs[lastItemIndex.current].current.changeState(false);
    lastItemIndex.current = index;
    //TODO: Find the use ref type
    //@ts-ignore
    dayTextRef.current.innerText = monthDays.current[index].toLocaleString(
      'en-US',
      { weekday: 'long' }
    );
    //@ts-ignore
    dayNumberTextRef.current.innerText =
      monthDays.current[index].getDate() +
      ' ' +
      monthDays.current[index].toLocaleString('en-US', { month: 'long' });
  };

  const isSetEnabled = useRef<boolean>(false);

  return (
    <View style={{ gap: 20 }}>
      <View style={{}}>
        <Text style={{ fontFamily: 'lexend', fontSize: 24 }} ref={dayTextRef}>
          Day title
        </Text>
        <Text
          style={{ fontFamily: 'lexend', fontSize: 10 }}
          ref={dayNumberTextRef}
        >
          00
        </Text>
      </View>
      <Slider
        contentContainerStyle={{
          gap: 20
        }}
        ref={sliderRef}
        data={monthDays}
        renderItem={({ item, index }: { item: Date; index: number }) => {
          const enabled = currentDate.getDate() - 1 == index;
          if (enabled && !isSetEnabled.current) {
            lastItemIndex.current = index;
            isSetEnabled.current = true;
            setTimeout(() => {
              // TODO: Refactor this function with the changeCurrentDay function repeat code.
              // @ts-ignore
              dayTextRef.current.innerText = monthDays.current[
                index
              ].toLocaleString('en-US', { weekday: 'long' });
              //@ts-ignore
              dayNumberTextRef.current.innerText =
                monthDays.current[index].getDate() +
                ' ' +
                monthDays.current[index].toLocaleString('en-US', {
                  month: 'long'
                });
              sliderRef.current?.toItemIndex(currentDate.getDate() - 1);
            }, 1000);
          }

          return (
            <FlatMonthCalendarItem
              index={index}
              sliderRef={sliderRef}
              item={item}
              ref={refs[index]}
              enabled={enabled}
              onPress={changeCurrentDay}
            />
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

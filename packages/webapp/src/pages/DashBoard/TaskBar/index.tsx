import { Pressable, Text, View } from 'react-native';
import { Slider, SliderRef } from '../components/slider';
import {
  memo,
  ForwardedRef,
  MutableRefObject,
  RefObject,
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
  useEffect
} from 'react';

function getDaysInMonth(month: number, year: number) {
  var date = new Date(year, month, 1);
  var days = [];
  while (date.getMonth() === month) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  return days;
}

export type TaskBarCalendarItemProps = {
  index: number;
  sliderRef: RefObject<SliderRef>;
  onPress: (index: number, ref: ForwardedRef<TaskBarCalendarItemRef>) => void;
  item: Date;
  enabled?: boolean;
};

export type TaskBarCalendarItemRef = {
  changeState: (enable: boolean) => void;
};

export const TaskBarCalendarItem = memo(
  forwardRef<TaskBarCalendarItemRef, TaskBarCalendarItemProps>((props, ref) => {
    const [enable, setEnable] = useState<boolean>(props.enabled ?? false);

    useImperativeHandle(
      ref,
      () => ({
        changeState(enable: boolean) {
          setEnable(enable);
        }
      }),
      []
    );

    return (
      <Pressable
        key={props.index}
        onPress={() => {
          props.onPress(props.index, ref);
          setEnable(true);
          props.sliderRef.current?.toItemIndex(props.index);
        }}
      >
        <View
          style={{
            width: 50,
            height: 50,
            borderRadius: 10,
            backgroundColor: enable ? 'black' : '#EEEEE3',
            padding: 20,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Text
            style={{
              fontFamily: 'lexend',
              color: enable ? '#EEEEE3' : 'black',
              fontWeight: '800'
            }}
          >
            {props.item
              .toLocaleDateString('en-US', { weekday: 'long' })
              .slice(0, 3)}
          </Text>
          <Text
            style={{
              fontFamily: 'lexend',
              color: enable ? '#EEEEE3' : 'black'
            }}
          >
            {props.item.getDate()}
          </Text>
        </View>
      </Pressable>
    );
  })
);

export function TaskBarCalendar() {
  const currentDate: Date = new Date(Date.now());
  const sliderRef = useRef<SliderRef>(null);
  const monthDays = useRef(
    getDaysInMonth(currentDate.getMonth(), currentDate.getFullYear())
  );

  const refs: MutableRefObject<TaskBarCalendarItemRef>[] =
    monthDays.current.map(() => {
      return useRef(null as any);
    });

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
            <TaskBarCalendarItem
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

export function TaskBar() {
  return (
    <>
      <View>
        <Text style={{ fontFamily: 'lexend', fontWeight: '100', fontSize: 20 }}>
          Tasks
        </Text>
      </View>

      <View>
        <TaskBarCalendar />
      </View>
    </>
  );
}
